import { useState, useEffect } from 'react';
import { getAllClasses } from '../db';
import type { Class } from '../db';

interface ClassListProps {
  onSelectClass: (classId: string) => void;
  onAddClass: () => void;
}

function ClassList({ onSelectClass, onAddClass }: ClassListProps) {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClasses();
  }, []);

  const loadClasses = async () => {
    try {
      const allClasses = await getAllClasses();
      setClasses(allClasses);
    } catch (error) {
      console.error('Error loading classes:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading classes...</div>;
  }

  return (
    <div className="class-list">
      <div className="section-header">
        <h2>My Classes</h2>
        <button className="btn-primary" onClick={onAddClass}>
          + Add Class
        </button>
      </div>

      {classes.length === 0 ? (
        <div className="empty-state">
          <p>No classes yet. Add your first class to get started!</p>
        </div>
      ) : (
        <div className="class-grid">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="class-card"
              onClick={() => onSelectClass(classItem.id)}
            >
              <h3>{classItem.name}</h3>
              <p>{classItem.subject}</p>
              <div className="class-meta">
                Created: {new Date(classItem.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClassList;