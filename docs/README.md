localStorage를 이용
기존 탭의 상태가 유지

## 크루관리

1. 크루 추가 가능 (동일한 이름X, 이름 최대 5글자)
2. 코스 별로 크루 삭제 가능 (Confirm을 사용)
3. 크루 table의 첫번째 열에는 index를 넣어 순서를 표시

## 팀 매칭 관리 기능

1. 코스별로, 미션마다, 무작위로 팀 매칭
2. 1팀당 최소 인원 수 입력
3. 쉼표로 구분

## 기타 요구사항

1. index.html파일은 수정할 수 없다.
2. 예외 발생 상황은 alert메서드를

## TODO LIST

- [x] 기본 UI 생성
- [x] 버튼 활성화

- [x] 크루 관리 페이지
  - [x] 프론트 크루 섹션
  - [x] 백엔드 크루 섹션
    - [x] 각 크루 목록 불러오는 기능
    - [x] 크루 추가 기능
    - [x] 크루 추가 이후 UI 섹션 추가
    - [x] ERROR 핸들링
    - [x] 크루 삭제 기능
    - [x] localStorage
- [ ] 팀 매칭 관리 페이지
  - [x] 코스, 미션 form 핸들링
  - [ ] 입력값에 맞는 매칭 값 찾기
  - [x] 매칭 값 없으면 없는 페이지 로드
    - [ ] 크루 목록 리스팅
    - [ ] 매칭 최소 인원 입력 및 랜덤 지정
  - [ ] 매칭 값 있으면 있는 페이지 로드
    - [ ] 재설정
  - [ ] loacalStorage
