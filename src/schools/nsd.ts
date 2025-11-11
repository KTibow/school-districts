import type { App } from "../types";

export const locations: Record<string, [number, number]> = {
  "Bothell High School": [47.760475, -122.2205602],
  "Inglemoor High School": [47.7414843, -122.222623],
  "Innovation Lab High School": [47.7942343, -122.2031389],
  "North Creek High School": [47.824758, -122.1812311],
  "Woodinville High School": [47.7711163, -122.1613185],
  // ---
  "Canyon Park Middle School": [47.7828811, -122.1995786],
  "Kenmore Middle School": [47.7765432, -122.255137],
  "Leota Middle School": [47.7669461, -122.1174232],
  "Northshore Middle School": [47.7426653, -122.179254],
  "Skyview Middle School": [47.8030504, -122.1889745],
  "Timbercrest Middle School": [47.7662718, -122.0517364],
  // ---
  "Arrowhead Elementary": [47.7369496, -122.251694],
  "Canyon Creek Elementary": [47.8050348, -122.1889107],
  "Cottage Lake Elementary": [47.745061, -122.0780426],
  "Crystal Springs Elementary": [47.8010984, -122.2196366],
  "East Ridge Elementary": [47.7437696, -122.0430072],
  "Fernwood Elementary": [47.8200944, -122.1791088],
  "Frank Love Elementary": [47.7959145, -122.2370086],
  "Hollywood Hill Elementary": [47.7517907, -122.1392922],
  "Kenmore Elementary": [47.7674434, -122.2426281],
  "Kokanee Elementary": [47.7823842, -122.1592001],
  "Lockwood Elementary": [47.7784495, -122.2559603],
  "Maywood Hills Elementary": [47.769988, -122.1978778],
  "Moorlands Elementary": [47.7385329, -122.2308941],
  "Ruby Bridges Elementary": [47.8111036, -122.1676301],
  "Shelton View Elementary": [47.7861827, -122.2396946],
  "Sunrise Elementary": [47.7280193, -122.1086083],
  "Wellington Elementary": [47.7674549, -122.1202292],
  "Westhill Elementary": [47.7702635, -122.2255031],
  "Woodin Elementary": [47.7678866, -122.1672296],
  "Woodmoor Elementary": [47.7418199, -122.1765075],
};
export const apps: Record<string, App[]> = {
  "Bothell High School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/130,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3821",
    },
  ],
  "Inglemoor High School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/129,74" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3822",
    },
  ],
  "Innovation Lab High School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/130,76" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/8382",
    },
  ],
  "North Creek High School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/131,77" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3825",
    },
  ],
  "Woodinville High School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/132,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3823",
    },
  ],
  // ---
  "Canyon Park Middle School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/130,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3815",
    },
  ],
  "Kenmore Middle School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/129,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3816",
    },
  ],
  "Leota Middle School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/133,74" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3817",
    },
  ],
  "Northshore Middle School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/131,73" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3818",
    },
  ],
  "Skyview Middle School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/131,76" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3819",
    },
  ],
  "Timbercrest Middle School": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/135,74" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3820",
    },
  ],
  // ---
  "Arrowhead Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/128,74" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3795",
    },
  ],
  "Canyon Creek Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/131,76" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3797",
    },
  ],
  "Cottage Lake Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/134,73" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3798",
    },
  ],
  "Crystal Springs Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/130,76" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3799",
    },
  ],
  "East Ridge Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/135,73" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3800",
    },
  ],
  "Fernwood Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/131,77" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3801",
    },
  ],
  "Frank Love Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/129,76" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3802",
    },
  ],
  "Hollywood Hill Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/132,74" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3803",
    },
  ],
  "Kenmore Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/129,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3804",
    },
  ],
  "Kokanee Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/132,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3805",
    },
  ],
  "Lockwood Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/129,76" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3806",
    },
  ],
  "Maywood Hills Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/130,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3807",
    },
  ],
  "Moorlands Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/129,74" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3808",
    },
  ],
  "Ruby Bridges Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/132,77" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/6654",
    },
  ],
  "Shelton View Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/129,76" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3809",
    },
  ],
  "Sunrise Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/133,72" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3810",
    },
  ],
  "Wellington Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/133,74" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3811",
    },
  ],
  "Westhill Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/130,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3812",
    },
  ],
  "Woodin Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/131,75" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3813",
    },
  ],
  "Woodmoor Elementary": [
    { app: "NWS", base: "https://api.weather.gov/gridpoints/SEW/131,73" },
    {
      app: "My School Menus",
      base: "https://menus.healthepro.com/api/organizations/448/sites/3814",
    },
  ],
};
