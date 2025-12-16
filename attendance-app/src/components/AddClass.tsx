import { useState } from 'react';
import { addClass } from '../db';

interface AddClassProps {
  onBack: () => void;
  onClassAdded: () => void;
}

function AddClass({ onBack, onClassAdded }: AddClassProps) {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    teacherId: 'teacher-1' // For now, hardcoded teacher ID
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.subject.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setSaving(true);
    try {
      await addClass({
        name: formData.name.trim(),
        subject: formData.subject.trim(),
        teacherId: formData.teacherId
      });

      alert('Class added successfully!');
      onClassAdded();
    } catch (error) {
      console.error('Error adding class:', error);
      alert('Error adding class. Please try again.');
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
        <h2>Add New Class</h2>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Class Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Computer Science 101"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g., Introduction to Programming"
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={onBack}>
            Cancel
          </button>
          <button type="submit" className="btn-primary" disabled={saving}>
            {saving ? 'Adding...' : 'Add Class'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClass;