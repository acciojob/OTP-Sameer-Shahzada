//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// Focus first input
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("input", (e) => {
    if (e.target.value.length === 1 && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      code.value = "";

      if (idx > 0) {
        codes[idx - 1].focus();
      }
    }
  });
});