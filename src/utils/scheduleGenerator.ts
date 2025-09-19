import { WORKERS, SITES, SHIFTS, DAYS, WORKER_SITE_ASSIGNMENTS, type ScheduleSlot } from "@/types/scheduler";

export const generateSchedule = (): ScheduleSlot[] => {
  const schedule: ScheduleSlot[] = [];
  
  // First, assign one off day to each worker
  WORKERS.forEach((worker, index) => {
    // Distribute off days across the week evenly
    const offDayIndex = index % DAYS.length;
    const offDay = DAYS[offDayIndex];
    
    schedule.push({
      workerId: worker.id,
      day: offDay,
      isOffDay: true,
    });
  });

  // Then assign work days for each worker
  WORKERS.forEach(worker => {
    const workerOffDay = schedule.find(
      slot => slot.workerId === worker.id && slot.isOffDay
    )?.day;

    DAYS.forEach(day => {
      if (day !== workerOffDay) {
        // Get allowed sites for this worker
        const workerAssignment = WORKER_SITE_ASSIGNMENTS.find(
          assignment => assignment.workerId === worker.id
        );
        
        if (workerAssignment && workerAssignment.siteIds.length > 0) {
          // Randomly assign from allowed sites
          const allowedSiteIds = workerAssignment.siteIds;
          const randomSiteId = allowedSiteIds[Math.floor(Math.random() * allowedSiteIds.length)];
          const randomShift = SHIFTS[Math.floor(Math.random() * SHIFTS.length)];
          
          schedule.push({
            workerId: worker.id,
            day: day,
            siteId: randomSiteId,
            shiftId: randomShift.id,
            isOffDay: false,
          });
        }
      }
    });
  });

  return schedule;
};

export const validateSchedule = (schedule: ScheduleSlot[]): boolean => {
  // Check that each worker has exactly one off day
  for (const worker of WORKERS) {
    const offDays = schedule.filter(
      slot => slot.workerId === worker.id && slot.isOffDay
    );
    if (offDays.length !== 1) {
      return false;
    }
  }
  
  return true;
};