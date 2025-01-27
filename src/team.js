export function printTeamPage() {
  const MAIN = document.querySelector("main");
  MAIN.innerHTML = `
  <section>
  <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
  <form>
    <select id="course-select">
      <option>프론트엔드</option>
      <option>백엔드</option>
    </select>
    <select id="mission-select">
      <option>숫자야구게임</option>
    </select>
    <button id="show-team-matcher-button">확인</button>
  </form>
</section>
  <section id="team-match-section"></section>
    `;

  const TEAM_MATCH_BTN = document.querySelector("#show-team-matcher-button");
  TEAM_MATCH_BTN.addEventListener("click", (e) => {
    e.preventDefault();
    const VALUES = Array.from(e.target.parentNode.querySelectorAll("select"));
    const COURSE = VALUES[0].value;
    const MISSON = VALUES[1].value;

    printTeamMatchSection(COURSE, MISSON);
  });
}

const MATCH_TEAM = {};

function printTeamMatchSection(course, mission) {
  if (MATCH_TEAM[course] && MATCH_TEAM[course][mission]) {
    // TODO 매칭 존재 페이지
    printMatchPage();
    return;
  }
  //TODO 매칭 존재 X
  printNonMatchPage(course);
}

function printNonMatchPage(course) {
  const SECTION = document.querySelector("#team-match-section");
  SECTION.innerHTML = `
    <h3>${course} 숫자야구게임 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input id="team-member-count-input" type="number" />
          <button id="match-team-button">팀 매칭</button>
        </form>
      </div>
      <h4>크루 목록</h4>
      <ul id="team-match-result">
        <li>준</li>
        <li>포코</li>
      </ul>
    </div>
    `;
}

/*
    <!-- 팀 매칭이 된 경우 -->
    <section>
      <h3>프론트엔드 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul>
        <li>준,포코</li>
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button>재매칭</button>
      </p>
    </section>
 */
