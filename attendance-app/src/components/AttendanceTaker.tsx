import { useState, useEffect } from 'react';
import { getStudentsByClass, getAttendanceByClassAndDate, markAttendance } from '../db';
import type { Student, AttendanceRecord } from '../db';
import { format } from 'date-fns';

interface AttendanceTakerProps {
  classId: string;
  onBack: () => void;
}

interface StudentAttendance {
  student: Student;
  status: 'present' | 'absent' | 'late' | null;
  existingRecord?: AttendanceRecord;
}

function AttendanceTaker({ classId, onBack }: AttendanceTakerProps) {
  const [attendance, setAttendance] = useState<StudentAttendance[]>([]);
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, [classId, selectedDate]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [classStudents, existingAttendance] = await Promise.all([
        getStudentsByClass(classId),
        getAttendanceByClassAndDate(classId, selectedDate)
      ]);

      // Combine students with existing attendance
      const attendanceMap = new Map(
        existingAttendance.map(record => [record.studentId, record])
      );

      const studentAttendance: StudentAttendance[] = classStudents.map(student => ({
        student,
        status: attendanceMap.get(student.id)?.status || null,
        existingRecord: attendanceMap.get(student.id)
      }));

      setAttendance(studentAttendance);
    } catch (error) {
      console.error('Error loading attendance data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateAttendance = (studentId: string, status: 'present' | 'absent' | 'late') => {
    setAttendance(prev =>
      prev.map(item =>
        item.student.id === studentId
          ? { ...item, status }
          : item
      )
    );
  };

  const saveAttendance = async () => {
    setSaving(true);
    try {
      const attendanceToSave = attendance.filter(item => item.status !== null);

      for (const item of attendanceToSave) {
        if (item.status && !item.existingRecord) {
          // Only save if it's a new record
          await markAttendance({
            studentId: item.student.id,
            classId,
            date: selectedDate,
            status: item.status
          });
        }
      }

      alert('Attendance saved successfully!');
      onBack();
    } catch (error) {
      console.error('Error saving attendance:', error);
      alert('Error saving attendance. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const markAllPresent = () => {
    setAttendance(prev =>
      prev.map(item => ({ ...item, status: 'present' }))
    );
  };

  const markAllAbsent = () => {
    setAttendance(prev =>
      prev.map(item => ({ ...item, status: 'absent' }))
    );
  };

  if (loading) {
    return <div className="loading">Loading attendance data...</div>;
  }

  return (
    <div className="attendance-taker">
      <div className="section-header">
        <button className="btn-secondary" onClick={onBack}>
          ← Back
        </button>
        <h2>Take Attendance</h2>
        <div className="date-selector">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      <div className="attendance-controls">
        <button className="btn-outline" onClick={markAllPresent}>
          Mark All Present
        </button>
        <button className="btn-outline" onClick={markAllAbsent}>
          Mark All Absent
        </button>
      </div>

      <div className="attendance-list">
        {attendance.map((item) => (
          <div key={item.student.id} className="attendance-item">
            <div className="student-info">
              <h4>{item.student.name}</h4>
              <span className="roll-number">Roll: {item.student.rollNumber}</span>
            </div>
            <div className="attendance-buttons">
              <button
                className={`status-btn ${item.status === 'present' ? 'active' : ''}`}
                onClick={() => updateAttendance(item.student.id, 'present')}
              >
                Present
              </button>
              <button
                className={`status-btn ${item.status === 'absent' ? 'active' : ''}`}
                onClick={() => updateAttendance(item.student.id, 'absent')}
              >
                Absent
              </button>
              <button
                className={`status-btn ${item.status === 'late' ? 'active' : ''}`}
                onClick={() => updateAttendance(item.student.id, 'late')}
              >
                Late
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="attendance-footer">
        <button
          className="btn-primary"
          onClick={saveAttendance}
          disabled={saving || attendance.every(item => item.status === null)}
        >
          {saving ? 'Saving...' : 'Save Attendance'}
        </button>
      </div>
    </div>
  );
}

export default AttendanceTaker;