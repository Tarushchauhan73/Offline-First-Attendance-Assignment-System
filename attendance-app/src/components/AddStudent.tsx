import { useState } from 'react';
import { addStudent } from '../db';

interface AddStudentProps {
  classId: string;
  onBack: () => void;
  onStudentAdded: () => void;
}

function AddStudent({ classId, onBack, onStudentAdded }: AddStudentProps) {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    email: ''
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.rollNumber.trim()) {
      alert('Please fill in name and roll number');
      return;
    }

    setSaving(true);
    try {
      await addStudent({
        name: formData.name.trim(),
        rollNumber: formData.rollNumber.trim(),
        email: formData.email.trim() || undefined,
        classId
      });

      alert('Student added successfully!');
      setFormData({ name: '', rollNumber: '', email: '' });
      onStudentAdded();
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Error adding student. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="add-form">
      <div className="section-header">
        <button className="btn-secondary" onClick={onBack}>
          ← Back
        </button>
        <h2>Add New Student</h2>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Student Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number *</label>
          <input
            id="rollNumber"
            name="rollNumber"
            type="text"
            value={formData.rollNumber}
            onChange={handleChange}
            placeholder="e.g., CS001"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (Optional)</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="student@example.com"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={onBack}>
            Cancel
          </button>
          <button type="submit" className="btn-primary" disabled={saving}>
            {saving ? 'Adding...' : 'Add Student'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;