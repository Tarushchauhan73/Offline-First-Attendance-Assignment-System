import axios from 'axios';
import { getUnsyncedAttendance, markAttendanceSynced } from './db';

const API_BASE_URL = 'http://localhost:3001/api'; // Backend server URL

export async function syncData() {
  if (!navigator.onLine) {
    console.log('Offline - skipping sync');
    return;
  }

  try {
    const unsyncedRecords = await getUnsyncedAttendance();

    if (unsyncedRecords.length === 0) {
      console.log('No unsynced data');
      return;
    }

    console.log(`Syncing ${unsyncedRecords.length} records...`);

    // Send unsynced attendance records to server
    const response = await axios.post(`${API_BASE_URL}/attendance/bulk`, unsyncedRecords);

    if (response.status === 200) {
      // Mark records as synced
      const ids = unsyncedRecords.map(record => record.id);
      await markAttendanceSynced(ids);
      console.log('Sync completed successfully');
    }
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

// Check online status and sync periodically
export function startSyncService() {
  // Sync immediately if online
  if (navigator.onLine) {
    syncData();
  }

  // Listen for online events
  window.addEventListener('online', () => {
    console.log('Back online - syncing data...');
    syncData();
  });

  // Periodic sync every 5 minutes when online
  setInterval(() => {
    if (navigator.onLine) {
      syncData();
    }
  }, 5 * 60 * 1000);
}