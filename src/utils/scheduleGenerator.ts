import { WORKERS, SITES, SHIFTS, DAYS, type ScheduleSlot } from "@/types/scheduler";

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
        // Randomly assign site and shift for working days
        const randomSite = SITES[Math.floor(Math.random() * SITES.length)];
        const randomShift = SHIFTS[Math.floor(Math.random() * SHIFTS.length)];
        
        schedule.push({
          workerId: worker.id,
          day: day,
          siteId: randomSite.id,
          shiftId: randomShift.id,
          isOffDay: false,
        });
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