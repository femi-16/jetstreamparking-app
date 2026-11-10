const game = document.querySelector("#game");
const availability = document.querySelector("#availability");
const form = document.querySelector("#booking-form");
const feedback = document.querySelector("#feedback");

game?.addEventListener("change", () => {
  availability.textContent = "●  Demo preview: reservation options are available for this game.";
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const gameName = game.options[game.selectedIndex].text;
  const arrival = document.querySelector("#arrival").value;
  feedback.textContent = `Demo only — ${gameName}, ${arrival.toLowerCase()}. No booking or payment was made.`;
});
