export interface Worker {
  id: number;
  name: string;
}

export interface Site {
  id: number;
  name: string;
}

export interface Shift {
  id: number;
  name: string;
}

export interface ScheduleSlot {
  workerId: number;
  day: string;
  siteId?: number;
  shiftId?: number;
  isOffDay?: boolean;
}

export const WORKERS: Worker[] = [
  { id: 1, name: "Dickson" },
  { id: 2, name: "David Lema" },
  { id: 3, name: "Kevin Mrema" },
  { id: 4, name: "Joseph" },
  { id: 5, name: "Alpha" },
  { id: 6, name: "Petro Bahati" },
  { id: 7, name: "Samwel" },
  { id: 8, name: "Mhenga" },
  { id: 9, name: "Leonard Maagi" },
  { id: 10, name: "Abel" },
  { id: 11, name: "Issa" },
  { id: 12, name: "Yohana" },
  { id: 13, name: "Rubibi Maulid" },
  { id: 14, name: "Muslim" },
  { id: 15, name: "Samwel Gonza" },
];

export const SITES: Site[] = [
  { id: 1, name: "JNIA" },
  { id: 2, name: "DMV" },
  { id: 3, name: "MLOGANZILA" },
  { id: 4, name: "MLIMANI" },
  { id: 5, name: "MUHIMBILI" },
  { id: 6, name: "ZAA" },
  { id: 7, name: "TAA MWANZA" },
  { id: 8, name: "KIA" },
  { id: 9, name: "TRC" },
];

export const SHIFTS: Shift[] = [
  { id: 1, name: "DAY" },
  { id: 2, name: "NIGHT" },
];

export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];