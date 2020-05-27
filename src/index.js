function loadTyper() {
  const attributesEle = document.querySelector(".attributes_typer");
  const attributeSpanEle = document.querySelector("#attribute");

  const mainTyperEle = document.querySelector(".main_typer>h1");

  const attributes = JSON.parse(attributesEle.getAttribute("data-elements"));
  const delay = parseInt(attributesEle.getAttribute("data-delay"), 10) ?? 1000;

  const runner = index => {
    attributeSpanEle.style.width = "0";
    const currentText = attributes[index];
    console.log(currentText);
    const currentCharacters = currentText.split("");

    let count = 0;
    let displayText = currentCharacters[count];

    attributeSpanEle.innerHTML = displayText;
    count++;
    const charDelay = delay / currentCharacters.length - 1;

    const interval = setInterval(() => {
      if (count === currentCharacters.length) {
        clearInterval(interval);
      } else {
        displayText += currentCharacters[count];
        attributeSpanEle.innerHTML = displayText;
        count++;
      }
    }, charDelay);
    setTimeout(() => {
      index++;
      if (index < attributes.length) {
        runner(index);
      } else {
        runner(0);
      }
    }, delay + 500);
  };

  setTimeout(() => {
    mainTyperEle.style.borderRight = "0";
    attributeSpanEle.style.borderRight = "0.15em solid orange";
    attributeSpanEle.classList.add("animation");
    runner(0);
  }, 3000);
}

loadTyper();
