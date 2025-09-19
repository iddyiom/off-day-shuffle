import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, Users, MapPin, RotateCcw } from "lucide-react";

interface ScheduleHeaderProps {
  onGenerateSchedule: () => void;
  totalWorkers: number;
  totalSites: number;
}

export const ScheduleHeader = ({ onGenerateSchedule, totalWorkers, totalSites }: ScheduleHeaderProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Worker Scheduler</h1>
          <p className="text-muted-foreground mt-2">
            Manage weekly schedules with guaranteed off days for each worker
          </p>
        </div>
        <Button onClick={onGenerateSchedule} size="lg" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Generate New Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Workers</p>
              <p className="text-2xl font-bold text-foreground">{totalWorkers}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/10 rounded-lg">
              <MapPin className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Work Sites</p>
              <p className="text-2xl font-bold text-foreground">{totalSites}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/10 rounded-lg">
              <CalendarDays className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Days per Week</p>
              <p className="text-2xl font-bold text-foreground">7</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};