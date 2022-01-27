const randomPicker = document.querySelector('#randomPicker');

randomPicker.addEventListener('submit', e => {
  e.preventDefault();

  // Get array from text area by line breaks and remove empty strings
  const namesList = randomPicker.textArea.value.split("\n").filter(String);
  const lengthList = namesList.length;

  // Get random string
  const randomNumber = Math.floor(Math.random() * lengthList);
  const pickedName = namesList[randomNumber];

  // Show result
  const showResult = () => {
    randomPicker.insertAdjacentHTML('afterend',
      `<article id="htmlResult">
        <header class="card__header">
          <h2 class="card__title card__title--big text-center">Resultados</h2>
        </header>
        <table class="card table p-0">
          <tr class="table__row bg-lighter">
            <th class="table__header">Nombres totales (N):</th>
            <td class="table__cell">${lengthList}</td>
          </tr>
          <tr class="table__row">
            <th class="table__header font-bold">El ganador:</th>
            <td class="table__cell font-bold">${pickedName}</td>
          </tr>
        </table>
      </article>`)
  };
  const htmlResult = document.querySelector('#htmlResult');

  // Show alert
  const showAlert = () => {
    randomPicker.insertAdjacentHTML('afterend',
      `<article class="alert-card" id="htmlAlert">
        <p class="alert-card__description">Por favor, introduzca más de un artículo.</p>
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