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

const FRONT_CREW_OBJ = [];

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
  });
}

const BACK_CREW_OBJ = {};

function printBackCrewSection() {
  //TODO Back Section
}

/**
 *  <section>
      <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" />
        <button>확인</button>
      </form>
    </section>
    <section>
      <h3>프론트엔드 크루 목록</h3>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>준</td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
 */
