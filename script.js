const codes = document.querySelectorAll(".code");

// Focus first input
codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    if (e.target.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0) {
      setTimeout(() => {
        codes[index - 1].focus();
      }, 0);
    }
  });
});