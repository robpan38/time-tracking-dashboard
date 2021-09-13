const obj = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
];

let workPeriod = null;
let workPreviousPeriod = null;
let playPeriod = null;
let playPreviousPeriod = null;
let studyPeriod = null;
let studyPreviousPeriod = null;
let exercisePeriod = null;
let exercisePreviousPeriod = null;
let socialPeriod = null;
let socialPreviousPeriod = null;
let selfPeriod = null;
let selfPreviousPeriod = null;
let daily = null;
let weekly = null;
let monthly = null;

const initializeStuffOnMount = () => {
  workPeriod = document.querySelector(".work .lower .period");
  workPreviousPeriod = document.querySelector(".work .lower .lastPeriod");
  playPeriod = document.querySelector(".play .lower .period");
  playPreviousPeriod = document.querySelector(".play .lower .lastPeriod");
  studyPeriod = document.querySelector(".study .lower .period");
  studyPreviousPeriod = document.querySelector(".study .lower .lastPeriod");
  exercisePeriod = document.querySelector(".exercise .lower .period");
  exercisePreviousPeriod = document.querySelector(".exercise .lower .lastPeriod");
  socialPeriod = document.querySelector(".social .lower .period");
  socialPreviousPeriod = document.querySelector(".social .lower .lastPeriod");
  selfPeriod = document.querySelector(".selfcare .lower .period");
  selfPreviousPeriod = document.querySelector(".selfcare .lower .lastPeriod");
  daily = document.querySelector(".daily");
  weekly = document.querySelector(".weekly");
  monthly = document.querySelector(".monthly");
}

const handleDailyClick = () => {
  daily.style.color = "white";
  weekly.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "hsl(235, 45%, 61%)";

  workPeriod.innerHTML = String(obj[0]["timeframes"]["daily"]["current"] + "hrs");
  workPreviousPeriod.innerHTML =  String("Last Day - " + obj[0]["timeframes"]["daily"]["previous"] + "hrs");
  playPeriod.innerHTML = String(obj[1]["timeframes"]["daily"]["current"] + "hrs");
  playPreviousPeriod.innerHTML =  String("Last Day - " + obj[1]["timeframes"]["daily"]["previous"] + "hrs");
  studyPeriod.innerHTML = String(obj[2]["timeframes"]["daily"]["current"] + "hrs");
  studyPreviousPeriod.innerHTML =  String("Last Day - " + obj[2]["timeframes"]["daily"]["previous"] + "hrs");
  exercisePeriod.innerHTML = String(obj[3]["timeframes"]["daily"]["current"] + "hrs");
  exercisePreviousPeriod.innerHTML =  String("Last Day - " + obj[3]["timeframes"]["daily"]["previous"] + "hrs");
  socialPeriod.innerHTML = String(obj[4]["timeframes"]["daily"]["current"] + "hrs");
  socialPreviousPeriod.innerHTML =  String("Last Day - " + obj[4]["timeframes"]["daily"]["previous"] + "hrs");
  selfPeriod.innerHTML = String(obj[5]["timeframes"]["daily"]["current"] + "hrs");
  selfPreviousPeriod.innerHTML =  String("Last Day - " + obj[5]["timeframes"]["daily"]["previous"] + "hrs");
}

const handleWeeklyClick = () => {
  weekly.style.color = "white";
  daily.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "hsl(235, 45%, 61%)";

  workPeriod.innerHTML = String(obj[0]["timeframes"]["weekly"]["current"] + "hrs");
  workPreviousPeriod.innerHTML =  String("Last Week - " + obj[0]["timeframes"]["weekly"]["previous"] + "hrs");
  playPeriod.innerHTML = String(obj[1]["timeframes"]["weekly"]["current"] + "hrs");
  playPreviousPeriod.innerHTML =  String("Last Week - " + obj[1]["timeframes"]["weekly"]["previous"] + "hrs");
  studyPeriod.innerHTML = String(obj[2]["timeframes"]["weekly"]["current"] + "hrs");
  studyPreviousPeriod.innerHTML =  String("Last Week - " + obj[2]["timeframes"]["weekly"]["previous"] + "hrs");
  exercisePeriod.innerHTML = String(obj[3]["timeframes"]["weekly"]["current"] + "hrs");
  exercisePreviousPeriod.innerHTML =  String("Last Week - " + obj[3]["timeframes"]["weekly"]["previous"] + "hrs");
  socialPeriod.innerHTML = String(obj[4]["timeframes"]["weekly"]["current"] + "hrs");
  socialPreviousPeriod.innerHTML =  String("Last Week - " + obj[4]["timeframes"]["weekly"]["previous"] + "hrs");
  selfPeriod.innerHTML = String(obj[5]["timeframes"]["weekly"]["current"] + "hrs");
  selfPreviousPeriod.innerHTML =  String("Last Week - " + obj[5]["timeframes"]["weekly"]["previous"] + "hrs");
}

const handleMonthlyClick = () => {
  monthly.style.color = "white";
  daily.style.color = "hsl(235, 45%, 61%)";
  weekly.style.color = "hsl(235, 45%, 61%)";

  workPeriod.innerHTML = String(obj[0]["timeframes"]["monthly"]["current"] + "hrs");
  workPreviousPeriod.innerHTML =  String("Last Month - " + obj[0]["timeframes"]["monthly"]["previous"] + "hrs");
  playPeriod.innerHTML = String(obj[1]["timeframes"]["monthly"]["current"] + "hrs");
  playPreviousPeriod.innerHTML =  String("Last Month - " + obj[1]["timeframes"]["monthly"]["previous"] + "hrs");
  studyPeriod.innerHTML = String(obj[2]["timeframes"]["monthly"]["current"] + "hrs");
  studyPreviousPeriod.innerHTML =  String("Last Month - " + obj[2]["timeframes"]["monthly"]["previous"] + "hrs");
  exercisePeriod.innerHTML = String(obj[3]["timeframes"]["monthly"]["current"] + "hrs");
  exercisePreviousPeriod.innerHTML =  String("Last Month - " + obj[3]["timeframes"]["monthly"]["previous"] + "hrs");
  socialPeriod.innerHTML = String(obj[4]["timeframes"]["monthly"]["current"] + "hrs");
  socialPreviousPeriod.innerHTML =  String("Last Month - " + obj[4]["timeframes"]["monthly"]["previous"] + "hrs");
  selfPeriod.innerHTML = String(obj[5]["timeframes"]["monthly"]["current"] + "hrs");
  selfPreviousPeriod.innerHTML =  String("Last Month - " + obj[5]["timeframes"]["monthly"]["previous"] + "hrs");
}