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

const FRONT_CREW_OBJ = ["123", "456"];

function printFrontCrewSection() {
  const ADD_SECTION = document.querySelector("#crew-add");
  ADD_SECTION.innerHTML = `
  <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-buttton" >확인</button>
      </form>`;
  const CREW_ADD_BTN = document.querySelector("#add-crew-buttton");

  CREW_ADD_BTN.addEventListener("click", (e) => {
    const CREW_NAME = document.querySelector("#crew-name-input").value;
    e.preventDefault();
    // TODO : ERROR 이름 5자 이하
    // TODO : ERROR 중복되었으면 실행 X 에러 배출
    FRONT_CREW_OBJ.push(CREW_NAME);
    printAddCrew(FRONT_CREW_OBJ.length, CREW_NAME);
  });

  listingSection();
}

function printAddCrew(index, name) {
  const CREW_TABLE = document.querySelector("#crew-table-body");

  const ELEMENT = document.createElement("tr");
  ELEMENT.innerHTML = `
    <td>${index}</td>
    <td>${name}</td>
    <td>
      <button class="delete-btn">삭제</button>
    </td>
    `;
  CREW_TABLE.appendChild(ELEMENT);
}

function listingSection() {
  const LIST_SECTION = document.querySelector("#crew-list");
  LIST_SECTION.innerHTML = `
  <h3>프론트엔드 크루 목록</h3>
  <table border="1">
    <thead>
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    </thead>
    <tbody id="crew-table-body">
    </tbody>
  </table>
  `;

  FRONT_CREW_OBJ.forEach((name, index) => {
    const INDEX = index + 1;
    printAddCrew(INDEX, name);
  });

  const DELETE_BTNS = document.querySelectorAll(".delete-btn");
  for (let btn of Array.from(DELETE_BTNS)) {
    btn.addEventListener("click", (e) => {
      const NAME =
        e.target.parentNode.parentNode.querySelectorAll("td")[1].innerText;
      const index = FRONT_CREW_OBJ.findIndex((value) => value === NAME);
      FRONT_CREW_OBJ.splice(index, 1);

      e.target.parentNode.parentNode.remove();
      listingSection();
    });
  }
}

const BACK_CREW_OBJ = {};

function printBackCrewSection() {
  //TODO Back Section
}
