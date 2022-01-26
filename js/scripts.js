const randomPicker = document.querySelector('#randomPicker');

randomPicker.addEventListener('submit', e => {
  e.preventDefault();

  // Get array from text area by line breaks and remove empty strings
  const namesList = randomPicker.textArea.value.split("\n").filter(String);

  const lengthList = namesList.length;
  const randomNumber = Math.floor(Math.random() * lengthList);
  const pickedName = namesList[randomNumber];

  const showResult = () => {
    randomPicker.insertAdjacentHTML('afterend',
      `<article id="htmlResult">
        <header class="main-section__header">
          <h2 class="main-section__big-title">Resultados</h2>
        </header>
        <table class="main-section main-section--p-0 table">
          <tr class="table__row table__row--acc">
            <th class="table__header">Nombres totales (N):</th>
            <td class="table__cell">${lengthList}</td>
          </tr>
          <tr class="table__row">
            <th class="table__header table__header--bold">El ganador:</th>
            <td class="table__cell table__cell--bold">${pickedName}</td>
          </tr>
        </table>
      </article>`)
  };
  const htmlResult = document.querySelector('#htmlResult');
  const showAlert = () => {
    randomPicker.insertAdjacentHTML('afterend',
      `<article class="alert-section" id="htmlAlert">
        <p class="alert-section__description">Por favor, introduzca más de un artículo.</p>
      </article>`)
  };
  const htmlAlert = document.querySelector('#htmlAlert');

  // Remove previous result and alert
  if (htmlResult) {
    htmlResult.remove();
  }
  if (htmlAlert) {
    htmlAlert.remove();
  }

  // Show result if there is more than one name
  if (lengthList == 1) {
    showAlert();
  } else if (pickedName) {
    showResult();
  }
});