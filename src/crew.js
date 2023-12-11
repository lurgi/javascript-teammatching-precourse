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
    sectionClear();
    printFrontCrewSection();
  });

  const BACK_RADIO = document.querySelector("#backend-course");
  BACK_RADIO.addEventListener("change", () => {
    sectionClear();
    printBackCrewSection();
  });
}

function sectionClear() {
  const LIST_SECTION = document.querySelector("#crew-list");
  LIST_SECTION.innerHTML = "";
}

const FRONT_CREW_OBJ = {};

function printFrontCrewSection() {
  //TODO Front Section
  const ADD_SECTION = document.querySelector("#crew-add");
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
