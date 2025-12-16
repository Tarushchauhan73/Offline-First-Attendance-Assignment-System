import { useState, useEffect } from 'react';
import { getStudentsByClass } from '../db';
import type { Student } from '../db';

interface StudentListProps {
  classId: string;
  onTakeAttendance: () => void;
  onBack: () => void;
  onAddStudent: () => void;
}

function StudentList({ classId, onTakeAttendance, onBack, onAddStudent }: StudentListProps) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudents();
  }, [classId]);

  const loadStudents = async () => {
    try {
      const classStudents = await getStudentsByClass(classId);
      setStudents(classStudents);
    } catch (error) {
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading students...</div>;
  }

  return (
    <div className="student-list">
      <div className="section-header">
        <button className="btn-secondary" onClick={onBack}>
          ← Back to Classes
        </button>
        <h2>Class Students</h2>
        <div className="header-actions">
          <button className="btn-primary" onClick={onAddStudent}>
            + Add Student
          </button>
          <button className="btn-success" onClick={onTakeAttendance}>
            Take Attendance
          </button>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <p>No students in this class yet. Add students to start taking attendance!</p>
        </div>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <div key={student.id} className="student-card">
              <h3>{student.name}</h3>
              <p>Roll: {student.rollNumber}</p>
              {student.email && <p>{student.email}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;