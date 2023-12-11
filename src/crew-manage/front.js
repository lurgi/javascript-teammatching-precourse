const FRONT_CREW_OBJ =
  JSON.parse(window.localStorage.getItem("front_crew")) || [];

export function printFrontCrewSection() {
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

    if (CREW_NAME.length > 5) {
      window.alert("[ERROR] 이름은 5자 이하만 입력해주세요.");
      return;
    }
    if (FRONT_CREW_OBJ.findIndex((name) => name === CREW_NAME) !== -1) {
      window.alert("[ERROR] 중복된 이름이 있습니다.");
      return;
    }

    FRONT_CREW_OBJ.push(CREW_NAME);
    window.localStorage.setItem("front_crew", JSON.stringify(FRONT_CREW_OBJ));
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

      window.localStorage.setItem("front_crew", JSON.stringify(FRONT_CREW_OBJ));
      e.target.parentNode.parentNode.remove();
      listingSection();
    });
  }
}
