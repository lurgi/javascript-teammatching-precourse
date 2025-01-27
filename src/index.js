import { printCrewPage } from "./crew.js";
import { printTeamPage } from "./team.js";

const APP = document.querySelector("#app");

const HEADER = document.createElement("header");
const TITLE = document.createElement("h1");
TITLE.innerText = "우테코 크루와 팀 매칭 관리 보드";
HEADER.appendChild(TITLE);

const NAV = document.createElement("ul");
const CREW_MANAGE_LI = document.createElement("li");
const TEAM_MANAGE_LI = document.createElement("li");
const CREW_MANAGE_BTN = document.createElement("button");
const TEAM_MANAGE_BTN = document.createElement("button");
CREW_MANAGE_BTN.innerText = "크루 관리";
TEAM_MANAGE_BTN.innerText = "팀 매칭 관리";
CREW_MANAGE_BTN.id = "crew-tab";
TEAM_MANAGE_BTN.id = "team-tab";
CREW_MANAGE_LI.appendChild(CREW_MANAGE_BTN);
TEAM_MANAGE_LI.appendChild(TEAM_MANAGE_BTN);
NAV.appendChild(CREW_MANAGE_LI);
NAV.appendChild(TEAM_MANAGE_LI);
HEADER.appendChild(NAV);

APP.appendChild(HEADER);
APP.appendChild(document.createElement("main"));

CREW_MANAGE_BTN.addEventListener("click", () => {
  printCrewPage();
});

TEAM_MANAGE_BTN.addEventListener("click", () => {
  printTeamPage();
});

printCrewPage();
