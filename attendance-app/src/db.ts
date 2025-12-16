import { openDB } from 'idb';
import type { DBSchema, IDBPDatabase } from 'idb';

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  email?: string;
  classId: string;
  createdAt: Date;
}

export interface Class {
  id: string;
  name: string;
  subject: string;
  teacherId: string;
  createdAt: Date;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  classId: string;
  date: string; // YYYY-MM-DD format
  status: 'present' | 'absent' | 'late';
  timestamp: Date;
  synced: boolean;
}

interface AttendanceDB extends DBSchema {
  students: {
    key: string;
    value: Student;
    indexes: {
      'by-class': string;
    };
  };
  classes: {
    key: string;
    value: Class;
    indexes: {
      'by-teacher': string;
    };
  };
  attendance: {
    key: string;
    value: AttendanceRecord;
    indexes: {
      'by-student': 'studentId';
      'by-class': 'classId';
      'by-date': 'date';
    };
  };
}

let db: IDBPDatabase<AttendanceDB>;

export async function initDB() {
  db = await openDB<AttendanceDB>('attendance-db', 1, {
    upgrade(db: IDBPDatabase<AttendanceDB>) {
      // Students store
      const studentStore = db.createObjectStore('students', {
        keyPath: 'id'
      });
      studentStore.createIndex('by-class', 'classId');

      // Classes store
      const classStore = db.createObjectStore('classes', {
        keyPath: 'id'
      });
      classStore.createIndex('by-teacher', 'teacherId');

      // Attendance store
      const attendanceStore = db.createObjectStore('attendance', {
        keyPath: 'id'
      });
      attendanceStore.createIndex('by-student', 'studentId');
      attendanceStore.createIndex('by-class', 'classId');
      attendanceStore.createIndex('by-date', 'date');
    },
  });
}

// Student operations
export async function addStudent(student: Omit<Student, 'id' | 'createdAt'>) {
  const id = crypto.randomUUID();
  const newStudent: Student = {
    ...student,
    id,
    createdAt: new Date()
  };
  await db.add('students', newStudent);
  return newStudent;
}

export async function getStudentsByClass(classId: string): Promise<Student[]> {
  const allStudents = await db.getAll('students');
  return allStudents.filter(student => student.classId === classId);
}

export async function getAllStudents(): Promise<Student[]> {
  return await db.getAll('students');
}

// Class operations
export async function addClass(classData: Omit<Class, 'id' | 'createdAt'>) {
  const id = crypto.randomUUID();
  const newClass: Class = {
    ...classData,
    id,
    createdAt: new Date()
  };
  await db.add('classes', newClass);
  return newClass;
}

export async function getAllClasses(): Promise<Class[]> {
  return await db.getAll('classes');
}

// Attendance operations
export async function markAttendance(record: Omit<AttendanceRecord, 'id' | 'timestamp' | 'synced'>) {
  const id = crypto.randomUUID();
  const newRecord: AttendanceRecord = {
    ...record,
    id,
    timestamp: new Date(),
    synced: false
  };
  await db.add('attendance', newRecord);
  return newRecord;
}

export async function getAttendanceByClassAndDate(classId: string, date: string): Promise<AttendanceRecord[]> {
  const allRecords = await db.getAll('attendance');
  return allRecords.filter((record: AttendanceRecord) => record.classId === classId && record.date === date);
}

export async function getUnsyncedAttendance(): Promise<AttendanceRecord[]> {
  const allRecords = await db.getAll('attendance');
  return allRecords.filter(record => !record.synced);
}

export async function markAttendanceSynced(ids: string[]) {
  const tx = db.transaction('attendance', 'readwrite');
  for (const id of ids) {
    const record = await tx.store.get(id);
    if (record) {
      record.synced = true;
      await tx.store.put(record);
    }
  }
  await tx.done;
}

// ... existing code ...

export async function seedDemoData() {
  try {
    // Check if data already exists
    const existingClasses = await getAllClasses();
    if (existingClasses.length > 0) {
      return; // Already seeded
    }

    console.log('Seeding demo data...');

    // Create demo classes
    const csClass = await addClass({
      name: 'Computer Science 101',
      subject: 'Introduction to Programming',
      teacherId: 'teacher-1'
    });

    const mathClass = await addClass({
      name: 'Mathematics 201',
      subject: 'Calculus I',
      teacherId: 'teacher-1'
    });

    // Create demo students for CS class
    const students = [
      { name: 'Alice Johnson', rollNumber: 'CS001', classId: csClass.id },
      { name: 'Bob Smith', rollNumber: 'CS002', classId: csClass.id },
      { name: 'Charlie Brown', rollNumber: 'CS003', classId: csClass.id },
      { name: 'Diana Wilson', rollNumber: 'CS004', classId: csClass.id },
      { name: 'Edward Davis', rollNumber: 'CS005', classId: csClass.id }
    ];

    for (const student of students) {
      await addStudent(student);
    }

    // Create demo students for Math class
    const mathStudents = [
      { name: 'Frank Miller', rollNumber: 'MA001', classId: mathClass.id },
      { name: 'Grace Lee', rollNumber: 'MA002', classId: mathClass.id },
      { name: 'Henry Taylor', rollNumber: 'MA003', classId: mathClass.id }
    ];

    for (const student of mathStudents) {
      await addStudent(student);
    }

    console.log('Demo data seeded successfully!');
  } catch (error) {
    console.error('Error seeding demo data:', error);
  }
}