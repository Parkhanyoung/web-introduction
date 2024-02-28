const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $submitBtn = $("#visitor-form-submit-button");

$submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const $visitorNameInput = $("#visitor-name-input");
  const $favoriteMovieInputs = [...$$(".favorite-content-input")];

  const visitorName = $visitorNameInput.value;
  const favoriteContentsInCommon = $favoriteMovieInputs.filter((input) => input.checked);

  if (!visitorName) return alert("이름을 입력해주세요");

  alert(`${visitorName}님, 저와 ${favoriteContentsInCommon.length}개의 취향이 같으시네요!`);
});
