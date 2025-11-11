import { locations as nsdLocations, apps as nsdApps } from "./schools/nsd";
import type { App, DistrictNews } from "./types";

const weekdayRange = (from: string, to: string) => {
  const startDate = new Date(from);
  const endDate = new Date(to);
  const dates = [];

  const currentDate = new Date(startDate.getTime());

  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      dates.push(new Date(currentDate.getTime()));
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};
const subtractRanges = (base: Date[], ...subtractions: Date[]) =>
  base.filter((date) => {
    return !subtractions.some((subtraction) => {
      return date.getTime() === subtraction.getTime();
    });
  });
const selectSemester = (semesters: Date[][]) =>
  semesters.find((s) => s[0] < new Date() && new Date() < s[s.length - 1]) ||
  semesters[0];

export const districtNames: Record<string, string> = {
  "apps.nsd.org": "NSD",
};

export const districtExpandedNames: Record<string, string> = {
  "apps.nsd.org": "Northshore School District",
};

export const districtLocations: Record<string, string> = {
  "apps.nsd.org": "Washington State",
};

const genSynergy = (id: string) => [
  { app: "StudentVue", base: `https://${id}-psv.edupoint.com` },
  { app: "Synergy", base: `https://${id}.edupoint.com` },
];
export const districtApps: Record<string, App[]> = {
  "apps.nsd.org": [...genSynergy("wa-nor")],
};

const genFlashalert = (region: number, org: string): DistrictNews => ({
  type: "flashalert",
  url: `https://raw.githubusercontent.com/KTibow/flashalert-mirror/refs/heads/main/json/news-${region}.jsonl`,
  org,
});
export const districtNews: Record<string, DistrictNews> = {
  "apps.nsd.org": genFlashalert(12, "Northshore SD"),
};

export const districtSemesters: Record<string, Date[]> = {
  "apps.nsd.org": selectSemester([
    // First semester: Sept 3 - Jan 23
    subtractRanges(
      weekdayRange("2025-09-03", "2026-01-23"),
      // Veterans Day
      new Date("2025-11-11"),
      // Thanksgiving week
      ...weekdayRange("2025-11-27", "2025-11-28"),
      // Winter break
      ...weekdayRange("2025-12-22", "2026-01-02"),
      // MLK Day
      new Date("2026-01-19"),
    ),
    // Second semester: Jan 26 - June 17
    subtractRanges(
      weekdayRange("2026-01-26", "2026-06-17"),
      new Date("2026-01-26"),
      // President's Day
      new Date("2026-02-16"),
      // Mid-winter break
      ...weekdayRange("2026-02-17", "2026-02-20"),
      // Spring break
      ...weekdayRange("2026-04-06", "2026-04-10"),
      // Memorial Day
      new Date("2026-05-25"),
    ),
  ]),
};

export const schoolLocations: Record<
  string,
  Record<string, [number, number]>
> = {
  "apps.nsd.org": nsdLocations,
};

export const schoolApps: Record<string, Record<string, App[]>> = {
  "apps.nsd.org": nsdApps,
};

// You can add your district :)
