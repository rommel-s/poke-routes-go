const locationsContainers = [
  {
    place_name: "Bryant Park, NY",
    place_coordinate: "40.755122,-73.983645",
    place_timezone: "America/New_York",
    place_flag: "./public/flags/united_states.svg"
  },
  {
    place_name: "Píer 39",
    place_coordinate: "37.8095,-122.4101",
    place_timezone: "America/Los_Angeles",
    place_flag: "eua"
  },
  {
    place_name: "Zaragoza",
    place_coordinate: "41.66141749999997,-0.8932773437500288",
    place_timezone: "Europe/Madrid",
    place_flag: "spain"
  },
  {
    place_name: "Dubai",
    place_coordinate: "25.26713,55.29020",
    place_timezone: "Asia/Dubai",
    place_flag: "emirates"
  },
  {
    place_name: "Tessalonika",
    place_coordinate: "40.626936,22.952342",
    place_timezone: "Europe/Athens",
    place_flag: "greece"
  },
  {
    place_name: "Larissa",
    place_coordinate: "39.6402, 22.4145",
    place_timezone: "Europe/Athens",
    place_flag: "greece"
  },
  {
    place_name: "San Diego",
    place_coordinate: "32.7311,-117.1505",
    place_timezone: "America/Los_Angeles",
    place_flag: "eua"
  },
  {
    place_name: "Sao Luís, MA",
    place_coordinate: "-2.528911,-44.305637",
    place_timezone: "America/Fortaleza",
    place_flag: "brazil"
  },
  {
    place_name: "Las Palmas, Ilhas Canárias",
    place_coordinate: "28.134869,-15.439987",
    place_timezone: "Atlantic/Canary",
    place_flag: "spain"
  },
  {
    place_name: "Royal Botanical Gardens",
    place_coordinate: "-33.8642,151.217819",
    place_timezone: "Australia/Sydney",
    place_flag: "australia"
  },
  {
    place_name: "Sydney",
    place_coordinate: "-33.866173,151.205945",
    place_timezone: "Australia/Sydney",
    place_flag: "australia"
  },
  {
    place_name: "Da'an park",
    place_coordinate: "25.0275, 121.5361",
    place_timezone: "Asia/Taipei",
    place_flag: "taiwan"
  },
  {
    place_name: "Parque Ibirapuera",
    place_coordinate: "-23.58417130,-46.66072464",
    place_timezone: "America/Sao_Paulo",
    place_flag: "brazil"
  },
  {
    place_name: "Cemitério da Consolação",
    place_coordinate: "-23.550442,-46.656972",
    place_timezone: "America/Sao_Paulo",
    place_flag: "brazil"
  },
  {
    place_name: "Quinta da Boa Vista, RJ",
    place_coordinate: "-22.906534,-43.223197",
    place_timezone: "America/Sao_Paulo",
    place_flag: "brazil"
  },
  {
    place_name: "Christmas Island",
    place_coordinate: "1.987150,-157.477140",
    place_timezone: "Pacific/Tarawa",
    place_flag: "kiribati"
  },
  {
    place_name: "Fagalii",
    place_coordinate: "-13.831357,-171.766401",
    place_timezone: "Pacific/Apia",
    place_flag: "samoa"
  },
  {
    place_name: "Wellington",
    place_coordinate: "-41.282492,174.769136",
    place_timezone: "Pacific/Auckland",
    place_flag: "new_zealand"
  },
  {
    place_name: "Auckland",
    place_coordinate: "-36.843394,174.767091",
    place_timezone: "Pacific/Auckland",
    place_flag: "new_zealand"
  },
  {
    place_name: "Petropavlovsk",
    place_coordinate: "53.055392,158.640700",
    place_timezone: "Asia/Kamchatka",
    place_flag: "russia"
  },
  {
    place_name: "Melbourne",
    place_coordinate: "-37.817509,144.963305",
    place_timezone: "Australia/Melbourne",
    place_flag: "australia"
  },
  {
    place_name: "Busan",
    place_coordinate: "35.154379, 129.06044",
    place_timezone: "Asia/Seoul",
    place_flag: "south_korea"
  },
  {
    place_name: "Disneyland Tokyo",
    place_coordinate: "35.6312,139.8800",
    place_timezone: "Asia/Tokyo",
    place_flag: "japan"
  },
  {
    place_name: "Taipei",
    place_coordinate: "25.02959, 121.53535",
    place_timezone: "Asia/Taipei",
    place_flag: "taiwan"
  },
  {
    place_name: "Yakarta",
    place_coordinate: "-6.175554,106.827587",
    place_timezone: "Asia/Jakarta",
    place_flag: "indonesia"
  },
  {
    place_name: "Bombaim",
    place_coordinate: "18.955547,72.832300",
    place_timezone: "Asia/Kolkata",
    place_flag: "india"
  },
  {
    place_name: "Ashgabat",
    place_coordinate: "37.8863,58.38313",
    place_timezone: "Asia/Ashgabat",
    place_flag: "turkmenistan"
  },
  {
    place_name: "Muskat",
    place_coordinate: "23.62462,58.57885",
    place_timezone: "Asia/Muscat",
    place_flag: "oman"
  },
  {
    place_name: "Baku",
    place_coordinate: "40.36833,49.84200",
    place_timezone: "Asia/Baku",
    place_flag: "azerbaijan"
  },
  {
    place_name: "Moscow University",
    place_coordinate: "55.702397,37.529742",
    place_timezone: "Europe/Moscow",
    place_flag: "russia"
  },
  {
    place_name: "Istanbul",
    place_coordinate: "41.007111,28.976891",
    place_timezone: "Europe/Istanbul",
    place_flag: "turkey"
  },
  {
    place_name: "Nairobi",
    place_coordinate: "-1.285969,36.821399",
    place_timezone: "Africa/Nairobi",
    place_flag: "kenya"
  },
  {
    place_name: "Jerusalem",
    place_coordinate: "31.77796,35.21913",
    place_timezone: "Asia/Jerusalem",
    place_flag: "israel"
  },
  {
    place_name: "Avignon",
    place_coordinate: "43.95251569, 4.80799712",
    place_timezone: "Europe/Paris",
    place_flag: "france"
  },
  {
    place_name: "Quimica Park, zaragoza",
    place_coordinate: "41.661254,-0.892912",
    place_timezone: "Europe/Madrid",
    place_flag: "spain"
  },
  {
    place_name: "Barcelona",
    place_coordinate: "41.355706,2.155067",
    place_timezone: "Europe/Madrid",
    place_flag: "spain"
  },
  {
    place_name: "Madrid",
    place_coordinate: "40.416797,-3.703785",
    place_timezone: "Europe/Madrid",
    place_flag: "spain"
  },
  {
    place_name: "Margaret Island, Budapest",
    place_coordinate: "47.530032,19.050646",
    place_timezone: "Europe/Budapest",
    place_flag: "hungary"
  },
  {
    place_name: "Coliseu, Roma",
    place_coordinate: "41.889988,12.493033",
    place_timezone: "Europe/Rome",
    place_flag: "italy"
  },
  {
    place_name: "Veneza",
    place_coordinate: "45.435752,12.322317",
    place_timezone: "Europe/Rome",
    place_flag: "italy"
  },
  {
    place_name: "Stephen Green, Dublin",
    place_coordinate: "53.3381095,-6.2592388",
    place_timezone: "Europe/Dublin",
    place_flag: "ireland"
  },
  {
    place_name: "Barcelos",
    place_coordinate: "41.5319676,-8.6155779",
    place_timezone: "Europe/Lisbon",
    place_flag: "portugal"
  },
  {
    place_name: "Ilhas Canárias",
    place_coordinate: "28.128966,-15.433923",
    place_timezone: "Atlantic/Canary",
    place_flag: "canarias"
  },
  {
    place_name: "Póvoa de Varzim",
    place_coordinate: "41.370628,-8.771444",
    place_timezone: "Europe/Lisbon",
    place_flag: "portugal"
  },
  {
    place_name: "Big Ben, Londres",
    place_coordinate: "51.501022,-0.124634",
    place_timezone: "Europe/London",
    place_flag: "uk"
  },
  {
    place_name: "Chester, Inglaterra",
    place_coordinate: "53.192303,-2.892419",
    place_timezone: "Europe/London",
    place_flag: "uk"
  },
  {
    place_name: "Reykjavik",
    place_coordinate: "64.147426,-21.939618",
    place_timezone: "Atlantic/Reykjavik",
    place_flag: "iceland"
  },
  {
    place_name: "Cabo verde",
    place_coordinate: "14.917709,-23.508672",
    place_timezone: "Atlantic/Cape_Verde",
    place_flag: "cape"
  },
  {
    place_name: "Ponta Delgada, Açores",
    place_coordinate: "37.742199,-25.655522",
    place_timezone: "Atlantic/Azores",
    place_flag: "portugal"
  },
  {
    place_name: "Praça Paris, RJ",
    place_coordinate: "-22.918187,-43.175837",
    place_timezone: "America/Sao_Paulo",
    place_flag: "brazil"
  },
  {
    place_name: "Praça XV, RJ",
    place_coordinate: "-22.902745,-43.171821",
    place_timezone: "America/Sao_Paulo",
    place_flag: "brazil"
  },
  {
    place_name: "Unifor",
    place_coordinate: "",
    place_timezone: "America/Fortaleza",
    place_flag: "brazil"
  },
  {
    place_name: "UFC - Pici",
    place_coordinate: "",
    place_timezone: "America/Fortaleza",
    place_flag: "brazil"
  },
  {
    place_name: "UFMA",
    place_coordinate: "-2.557882,-44.308656",
    place_timezone: "America/Fortaleza",
    place_flag: "brazil"
  },
  {
    place_name: "Buenos AIres",
    place_coordinate: "-34.608403,-58.372164",
    place_timezone: "America/Argentina/Buenos_Aires",
    place_flag: "argentina"
  },
  {
    place_name: "Palacio La Moneda, Chile",
    place_coordinate: "-33.443503,-70.653646",
    place_timezone: "America/Santiago",
    place_flag: "chile"
  },
  {
    place_name: "Areguá, Paraguai",
    place_coordinate: "-25.302309, -57.411827",
    place_timezone: "America/Asuncion",
    place_flag: "paraguai"
  },
  {
    place_name: "Montevideu",
    place_coordinate: "-34.901112, -56.164532",
    place_timezone: "America/Montevideo",
    place_flag: "uruguai"
  },
  {
    place_name: "Central Park, NY",
    place_coordinate: "40.781532,-73.965547",
    place_timezone: "America/New_York",
    place_flag: "eua"
  },
  {
    place_name: "Times Square, NY",
    place_coordinate: "40.759011,-73.984472",
    place_timezone: "America/New_York",
    place_flag: "eua"
  },
  {
    place_name: "Downtown, NY",
    place_coordinate: "40.716759,-73.998935",
    place_timezone: "America/New_York",
    place_flag: "eua"
  },
  {
    place_name: "República Dominicana",
    place_coordinate: "18.462522,-69.915771",
    place_timezone: "America/Santo_Domingo",
    place_flag: "dominicana"
  },
  {
    place_name: "Caracas",
    place_coordinate: "10.506098,-66.914602",
    place_timezone: "America/Caracas",
    place_flag: "venezuela"
  },
  {
    place_name: "Chicago",
    place_coordinate: "41.898659,-87.623077",
    place_timezone: "America/Chicago",
    place_flag: "eua"
  },
  {
    place_name: "Havana",
    place_coordinate: "23.113592, -82.366592",
    place_timezone: "America/Havana",
    place_flag: "cuba"
  },
  {
    place_name: "Toronto",
    place_coordinate: "43.653310,-79.384008",
    place_timezone: "America/Toronto",
    place_flag: "canada"
  },
  {
    place_name: "Calgary",
    place_coordinate: "51.046315,-114.071824",
    place_timezone: "America/Edmonton",
    place_flag: "canada"
  },
  {
    place_name: "Cidade do México",
    place_coordinate: "19.435359,-99.145402",
    place_timezone: "America/Mexico_City",
    place_flag: "mexico"
  },
  {
    place_name: "Edmonton",
    place_coordinate: "51.046315,-114.071824",
    place_timezone: "America/Edmonton",
    place_flag: "canada"
  },
  {
    place_name: "Anchorage, Alaska",
    place_coordinate: "61.217019,-149.891609",
    place_timezone: "America/Anchorage",
    place_flag: "eua"
  },
  {
    place_name: "Fairbanks, alaska",
    place_coordinate: "64.83895,-147.71456",
    place_timezone: "America/Anchorage",
    place_flag: "eua"
  },
  {
    place_name: "Honolulu",
    place_coordinate: "21.2658,-157.8213",
    place_timezone: "Pacific/Honolulu",
    place_flag: "eua"
  },
  {
    place_name: "Niantic HQ",
    place_coordinate: "37.7894, -122.4016",
    place_timezone: "America/Los_Angeles",
    place_flag: "eua"
  },
  {
    place_name: "Albantown, USA",
    place_coordinate: "39.658397,-76.779838",
    place_timezone: "America/New_York",
    place_flag: "eua"
  }
];

export { locationsContainers };
