/**
 * @param {string} from - The start date of the range inclusive
 * @param {string} to - The end date of the range inclusive
 */
const weekdayRange = (from, to) => {
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
/**
 * @param {Date[]} base - Dates to start with
 * @param {Date[]} subtractions - Dates to remove
 */
const subtractRanges = (base, ...subtractions) =>
  base.filter((date) => {
    return !subtractions.some((subtraction) => {
      return date.getTime() === subtraction.getTime();
    });
  });
/**
 * @param {Date[][]} semesters
 */
const selectSemester = (semesters) =>
  semesters.find((s) => s[0] < new Date() && new Date() < s[s.length - 1]) ||
  semesters[0];

/**
 * @typedef {Object} SchoolDistrict
 * @property {string} name Short name of the district
 * @property {string} expandedName Full name of the district
 * @property {string} location Geographic location
 * @property {{ app: string; host: string }[]} apps Array of applications
 * @property {Date[]} [semester] Dates in current semester
 */

/**
 * @type {Record<string, SchoolDistrict>}
 */
const districts = {
  "apps.nsd.org": {
    name: "NSD",
    expandedName: "Northshore School District",
    location: "Washington State",
    apps: [
      {
        app: "StudentVue",
        host: "wa-nor-psv.edupoint.com",
      },
    ],
    semester: selectSemester([
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
  },
  // More to come :)
};
export default districts;
