export interface Technician {
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

export interface TechnicianSiteAssignment {
  workerId: number;
  siteIds: number[];
}

export interface ScheduleSlot {
  workerId: number;
  day: string;
  siteId?: number;
  shiftId?: number;
  isOffDay?: boolean;
}

export const TECHNICIANS: Technician[] = [
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

export const TECHNICIAN_SITE_ASSIGNMENTS: TechnicianSiteAssignment[] = [
  { workerId: 1, siteIds: [1] }, // Dickson - JNIA
  { workerId: 2, siteIds: [1] }, // David Lema - JNIA
  { workerId: 3, siteIds: [3, 5, 9] }, // Kevin Mrema - MLOGANZILA, MUHIMBILI, TRC
  { workerId: 4, siteIds: [3, 9] }, // Joseph - MLOGANZILA, TRC
  { workerId: 5, siteIds: [4] }, // Alpha - MLIMANI
  { workerId: 6, siteIds: [9, 1] }, // Petro Bahati - TRC, JNIA
  { workerId: 7, siteIds: [4] }, // Samwel - MLIMANI
  { workerId: 8, siteIds: [4] }, // Mhenga - MLIMANI
  { workerId: 9, siteIds: [5, 9] }, // Leonard Maagi - MUHIMBILI, TRC
  { workerId: 10, siteIds: [6] }, // Abel - ZAA
  { workerId: 11, siteIds: [6] }, // Issa - ZAA
  { workerId: 12, siteIds: [7] }, // Yohana - TAA MWANZA
  { workerId: 13, siteIds: [7] }, // Rubibi Maulid - TAA MWANZA
  { workerId: 14, siteIds: [8] }, // Muslim - KIA
  { workerId: 15, siteIds: [8] }, // Samwel Gonza - KIA
];

export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];