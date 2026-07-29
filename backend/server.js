require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '2mb' }));

// In-memory storage (per docs: "Backend: In-memory (upgrade to real DB for production)")
const attendanceRecords = [];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Receives attendance records queued up offline on the client and stores them.
app.post('/api/attendance/bulk', (req, res) => {
  const records = req.body;

  if (!Array.isArray(records)) {
    return res.status(400).json({ error: 'Request body must be an array of attendance records' });
  }

  const stored = [];
  for (const record of records) {
    if (!record || !record.id || !record.studentId || !record.classId || !record.date) {
      return res.status(400).json({
        error: 'Each record requires id, studentId, classId, and date',
      });
    }
    const entry = { ...record, syncedAt: new Date().toISOString() };
    attendanceRecords.push(entry);
    stored.push(entry);
  }

  res.status(200).json({ message: 'Sync successful', count: stored.length });
});

// Read-only endpoint to inspect what has been synced so far.
app.get('/api/attendance', (req, res) => {
  res.json(attendanceRecords);
});

app.listen(PORT, () => {
  console.log(`Attendance sync server running on port ${PORT}`);
});
