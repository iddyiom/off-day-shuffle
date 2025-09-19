import { TECHNICIANS, SITES, SHIFTS, DAYS, TECHNICIAN_SITE_ASSIGNMENTS, type ScheduleSlot } from "@/types/scheduler";

export const generateSchedule = (): ScheduleSlot[] => {
  const schedule: ScheduleSlot[] = [];
  
  // First, assign one off day to each technician
  TECHNICIANS.forEach((technician, index) => {
    // Distribute off days across the week evenly
    const offDayIndex = index % DAYS.length;
    const offDay = DAYS[offDayIndex];
    
    schedule.push({
      workerId: technician.id,
      day: offDay,
      isOffDay: true,
    });
  });

  // Then assign work days for each technician
  TECHNICIANS.forEach(technician => {
    const technicianOffDay = schedule.find(
      slot => slot.workerId === technician.id && slot.isOffDay
    )?.day;

    DAYS.forEach(day => {
      if (day !== technicianOffDay) {
        // Get allowed sites for this technician
        const technicianAssignment = TECHNICIAN_SITE_ASSIGNMENTS.find(
          assignment => assignment.workerId === technician.id
        );
        
        if (technicianAssignment && technicianAssignment.siteIds.length > 0) {
          // Randomly assign from allowed sites
          const allowedSiteIds = technicianAssignment.siteIds;
          const randomSiteId = allowedSiteIds[Math.floor(Math.random() * allowedSiteIds.length)];
          const randomShift = SHIFTS[Math.floor(Math.random() * SHIFTS.length)];
          
          schedule.push({
            workerId: technician.id,
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
  // Check that each technician has exactly one off day
  for (const technician of TECHNICIANS) {
    const offDays = schedule.filter(
      slot => slot.workerId === technician.id && slot.isOffDay
    );
    if (offDays.length !== 1) {
      return false;
    }
  }
  
  return true;
};