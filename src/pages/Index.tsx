import { useState, useEffect } from "react";
import { ScheduleHeader } from "@/components/ScheduleHeader";
import { ScheduleGrid } from "@/components/ScheduleGrid";
import { generateSchedule, validateSchedule } from "@/utils/scheduleGenerator";
import { TECHNICIANS, SITES, type ScheduleSlot } from "@/types/scheduler";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [schedule, setSchedule] = useState<ScheduleSlot[]>([]);
  const { toast } = useToast();

  // Generate initial schedule on component mount
  useEffect(() => {
    handleGenerateSchedule();
  }, []);

  const handleGenerateSchedule = () => {
    const newSchedule = generateSchedule();
    
    if (validateSchedule(newSchedule)) {
      setSchedule(newSchedule);
      toast({
        title: "Schedule Generated",
        description: "New weekly schedule created with guaranteed off days for all technicians.",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to generate valid schedule. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-8">
        <ScheduleHeader 
          onGenerateSchedule={handleGenerateSchedule}
          totalTechnicians={TECHNICIANS.length}
          totalSites={SITES.length}
        />
        
        <ScheduleGrid schedule={schedule} />
      </div>
    </div>
  );
};

export default Index;
