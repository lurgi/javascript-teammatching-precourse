import { printFrontCrewSection } from "./crew-manage/front.js";
import { printBackCrewSection } from "./crew-manage/back.js";

export function printCrewPage() {
  const MAIN = document.querySelector("main");
  MAIN.innerHTML = `
  <section>
  <h3>크루를 관리할 코스를 선택해주세요</h3>
  <div>
    <input id="frontend-course" type="radio" name="course" value="frontend" />
    <label for="frontend">프론트엔드</label>
    <input id="backend-course" type="radio" name="course" value="backend" />
    <label for="backend">백엔드</label>
  </div>
</section>
<section id="crew-add"></section>
<section id="crew-list"></section>
  `;

  const FRONT_RADIO = document.querySelector("#frontend-course");
  FRONT_RADIO.addEventListener("change", () => {
    printFrontCrewSection();
  });

  const BACK_RADIO = document.querySelector("#backend-course");
  BACK_RADIO.addEventListener("change", () => {
    printBackCrewSection();
  });
}
