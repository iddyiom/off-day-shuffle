import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TECHNICIANS, 
  SITES, 
  SHIFTS, 
  DAYS, 
  type ScheduleSlot, 
  type Technician, 
  type Site, 
  type Shift 
} from "@/types/scheduler";

interface ScheduleGridProps {
  schedule: ScheduleSlot[];
}

export const ScheduleGrid = ({ schedule }: ScheduleGridProps) => {
  const getTechnicianName = (workerId: number): string => {
    const technician = TECHNICIANS.find(t => t.id === workerId);
    return technician?.name || "Unknown";
  };

  const getSiteName = (siteId?: number): string => {
    if (!siteId) return "";
    const site = SITES.find(s => s.id === siteId);
    return site?.name || "";
  };

  const getShiftName = (shiftId?: number): string => {
    if (!shiftId) return "";
    const shift = SHIFTS.find(s => s.id === shiftId);
    return shift?.name || "";
  };

  const getScheduleSlot = (workerId: number, day: string): ScheduleSlot | undefined => {
    return schedule.find(slot => slot.workerId === workerId && slot.day === day);
  };

  return (
    <Card className="p-6">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Header */}
          <div className="grid grid-cols-8 gap-2 mb-4">
            <div className="font-semibold text-foreground p-3 bg-muted rounded-lg">
              Technician
            </div>
            {DAYS.map(day => (
              <div key={day} className="font-semibold text-center text-foreground p-3 bg-muted rounded-lg">
                {day.slice(0, 3)}
              </div>
            ))}
          </div>

          {/* Schedule Rows */}
          <div className="space-y-2">
            {TECHNICIANS.map(technician => (
              <div key={technician.id} className="grid grid-cols-8 gap-2">
                {/* Technician Name */}
                <div className="p-3 bg-card border rounded-lg flex items-center">
                  <span className="font-medium text-card-foreground truncate">
                    {technician.name}
                  </span>
                </div>

                {/* Daily Schedule */}
                {DAYS.map(day => {
                  const slot = getScheduleSlot(technician.id, day);
                  
                  if (slot?.isOffDay) {
                    return (
                      <div key={day} className="p-3 bg-off-day rounded-lg flex items-center justify-center">
                        <Badge variant="outline" className="bg-off-day-light text-off-day-foreground border-off-day">
                          OFF
                        </Badge>
                      </div>
                    );
                  }

                  return (
                    <div key={day} className="p-3 bg-card border rounded-lg space-y-1">
                      {slot?.siteId && (
                        <Badge variant="secondary" className="text-xs">
                          {getSiteName(slot.siteId)}
                        </Badge>
                      )}
                      {slot?.shiftId && (
                        <Badge 
                          variant={getShiftName(slot.shiftId) === "DAY" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {getShiftName(slot.shiftId)}
                        </Badge>
                      )}
                      {!slot?.siteId && !slot?.shiftId && (
                        <div className="text-xs text-muted-foreground text-center">
                          Unassigned
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};