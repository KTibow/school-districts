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
 * @property {string} name - Short name of the district
 * @property {string} expandedName - Full name of the district
 * @property {string} location - Geographic location
 * @property {{ app: string; host: string }[]} apps - Array of applications
 * @property {Date[]} [semester] - Dates in current semester
 * @property {Record<string, string>} [birthdays] - Birthday map (name -> MM/DD)
 */

/**
 * @type {Record<string, SchoolDistrict>}
 */
export default {
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
    birthdays: {
      "Terry Taylor": "01/02",
      "Dai Nguyen": "01/04",
      "Katy Pietraszak": "01/06",
      "Scott Churchill": "01/07",
      "RJ Jacobs": "01/07",
      "Kim Benedict": "01/08",
      "Matthew Fry": "01/09",
      "Michael Kelly": "01/09",
      "Jenn Diaz": "01/13",
      "Iani Penev": "01/17",
      "Steph Hennessy": "01/21",
      "Sara Jackson": "01/22",
      "Jamie Tanksley": "01/23",
      "Ann Cargill": "01/27",
      "Kurt Criscione": "01/27",
      "Yelena Zrazhevskaya": "01/29",
      "Melissa Dupré": "01/31",
      "Drew Gibson": "02/02",
      "Tracy Dulas": "02/10",
      "Sarah Brenner": "02/13",
      "Katie Bourdache": "02/16",
      "Amy Strandy": "02/25",
      "Nate Hirsch": "02/26",
      "Crystal Jones": "03/04",
      "Michelle Pyeatt": "03/05",
      "Marie Lassley": "03/08",
      "Karl McBurnett": "03/10",
      "Nicki Kongkarat": "03/17",
      "Shaina Bloomquist": "03/18",
      "Alan Dillman": "03/20",
      "Marina Orobinskaia": "03/20",
      "Ruth Edwards": "03/21",
      "Mike Emerick": "03/21",
      "Jason Laxague": "03/23",
      "Andrew Taylor": "03/23",
      "Rick Lizotte": "03/24",
      "Dawn Netzel": "03/29",
      "Mikaela Michalsen": "03/31",
      "Jim Backstrom": "04/03",
      "Josh Butchart": "04/06",
      "Eric Christmyer": "04/08",
      "Jeff Glover": "04/09",
      "Cali Damm (Legeyt)": "04/10",
      "Olivia Ciriaz": "04/15",
      "Darcy Vitulli": "04/22",
      "Katie Fentress": "04/25",
      "Rebekah Sandusky": "04/27",
      "Preston Taylor": "04/29",
      "Denise Schwans": "05/05",
      "Aneet Bains": "05/07",
      "Cody Campbell": "05/07",
      "Christine Traxler": "05/11",
      "Kaitlyn Webster": "05/17",
      "Danielle Gleit": "05/21",
      "Heather Shult": "05/23",
      "Ron Taylor": "05/23",
      "Lindsay Moffitt": "05/24",
      "Sarah Sheridan": "05/25",
      "Jesús Silva": "05/26",
      "Katherine Smith": "05/30",
      "Leah Soluna": "05/31",
      "Taylor Weaver": "05/31",
      "Laurie Johnson": "06/01",
      "Tammy Destremps": "06/02",
      "Alexis Barelli": "06/05",
      "Alexis Bacharach": "06/09",
      "Hailey Woodworth": "06/09",
      "Sofia Carregha": "06/15",
      "Jake Pirollo": "06/19",
      "Tina Tuiasosopo": "06/20",
      "Susan Hansen": "06/24",
      "Loren Tanksley": "06/24",
      "Ben Kittler": "06/27",
      "Anna-Lisa Notter": "06/29",
      "Katie Schramm": "07/01",
      "Diana Moreland": "07/03",
      "Dan Lovitt": "07/13",
      "Ariona Thompson": "07/13",
      "Parker Dahl": "07/16",
      "Warren Eickhoff": "07/18",
      "Jean Lee": "07/18",
      "Olivia Doerr": "07/19",
      "Megan Skurski": "07/20",
      "Sarah Carlson": "07/21",
      "Scot Millhollen": "07/23",
      "Paul Glenovich": "07/26",
      "Mizue Sunahara": "07/26",
      "Sharon Alder": "07/29",
      "Beckie Pulse": "07/30",
      "Liezel Yapyuco": "07/31",
      "Darren Meucci": "08/02",
      "Ariel Roy": "08/07",
      "Lisa North": "08/09",
      "Kelsey LeBard": "08/10",
      "Jennifer Gardner": "08/15",
      "Michelle Gruber": "08/17",
      "Nikola Trifunovic": "08/17",
      "Audrey Woodard": "08/19",
      "Sheri Fralick": "08/27",
      "Danna Kapacinskas": "08/27",
      "Dr. Richard Brown, Jr.": "08/28",
      "Eric Vivelo": "09/02",
      "Ernie Merritt": "09/03",
      "Jesús Lopez-Torres": "09/05",
      "Maria Cisneros": "09/10",
      "Lillie Linville": "09/11",
      "Karen Robbins": "09/16",
      "Coby Dilling": "09/18",
      "Kranthi Yarlagadda": "09/21",
      "Nathan Davis": "09/23",
      "Jeff Monteleone": "09/25",
      "Kat Lamb": "10/05",
      "Jennifer Johns": "10/10",
      "Paul Mulvaney": "10/11",
      "Kris Takenaga": "10/12",
      "Christie Callahan": "10/25",
      "Ariel Jordan": "10/28",
      "Aricka Smith": "11/02",
      "Julie Leong": "11/17",
      "Rene Salter": "11/18",
      "Tim Swartz": "11/21",
      "Aaron Tennis": "11/21",
      "Jamie Fulton": "11/22",
      "Erik Daviscourt": "11/26",
      "Lindsay Haney": "11/26",
      "Adam O'Hair": "11/26",
      "Jordan Kuszak": "11/28",
      "My Tang": "12/01",
      "Rachel Nelson": "12/02",
      "Nicole Skone": "12/03",
      "Logan Schilder": "12/05",
      "Christy Velin": "12/06",
      "Maria Elieff": "12/09",
      "Maria Wickersham": "12/10",
      "Michael Antley": "12/12",
      "Dione Garcia": "12/14",
      "Wayne Maxwell": "12/17",
      "Amily Simms": "12/20",
      "Andrea Baleva": "12/20",
      "Joe Shlichta": "12/21",
      "Roberta Porter": "12/22",
      "Christine Gasparyan": "12/25",
      "Kayla Hoffman": "12/25",
      "Kylee Keanini": "12/27",
      "Heidi Lundberg": "12/27",
      "Sam Pyzer": "12/31",
    },
  },
  // More to come :)
};
