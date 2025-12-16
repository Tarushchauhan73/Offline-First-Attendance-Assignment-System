import { useState, useEffect } from 'react';
import { initDB, seedDemoData } from './db';
import { startSyncService } from './sync';
import './App.css';

// Components
import ClassList from './components/ClassList';
import StudentList from './components/StudentList';
import AttendanceTaker from './components/AttendanceTaker';
import AddClass from './components/AddClass';
import AddStudent from './components/AddStudent';

type View = 'classes' | 'students' | 'attendance' | 'add-class' | 'add-student';

function App() {
  const [currentView, setCurrentView] = useState<View>('classes');
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Initialize database
    initDB().then(async () => {
      console.log('Database initialized');
      await seedDemoData(); // Seed demo data for first-time users
    });

    // Start sync service
    startSyncService();

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'classes':
        return (
          <ClassList
            onSelectClass={(classId: string) => {
              setSelectedClassId(classId);
              setCurrentView('students');
            }}
            onAddClass={() => setCurrentView('add-class')}
          />
        );
      case 'students':
        return selectedClassId ? (
          <StudentList
            classId={selectedClassId}
            onTakeAttendance={() => setCurrentView('attendance')}
            onBack={() => setCurrentView('classes')}
            onAddStudent={() => setCurrentView('add-student')}
          />
        ) : null;
      case 'attendance':
        return selectedClassId ? (
          <AttendanceTaker
            classId={selectedClassId}
            onBack={() => setCurrentView('students')}
          />
        ) : null;
      case 'add-class':
        return (
          <AddClass
            onBack={() => setCurrentView('classes')}
            onClassAdded={() => setCurrentView('classes')}
          />
        );
      case 'add-student':
        return selectedClassId ? (
          <AddStudent
            classId={selectedClassId}
            onBack={() => setCurrentView('students')}
            onStudentAdded={() => setCurrentView('students')}
          />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Offline Attendance System</h1>
        <div className={`status ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? '🟢 Online' : '🔴 Offline'}
        </div>
      </header>

      <nav className="app-nav">
        <button
          className={currentView === 'classes' ? 'active' : ''}
          onClick={() => setCurrentView('classes')}
        >
          Classes
        </button>
        {selectedClassId && (
          <button
            className={currentView === 'students' || currentView === 'attendance' ? 'active' : ''}
            onClick={() => setCurrentView('students')}
          >
            Students
          </button>
        )}
      </nav>

      <main className="app-main">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
