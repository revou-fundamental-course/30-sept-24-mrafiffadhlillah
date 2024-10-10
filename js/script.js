const inputSuhu = document.getElementById('input-suhu');
const validationInputSuhu = document.getElementById('validation-input-suhu');
const hasilSuhu = document.getElementById('hasil-suhu');
const caraKalkulasi = document.getElementById('how-to-suhu');
const konversiButton = document.getElementById('konversi');
const resetButton = document.getElementById('reset');
const reverseButton = document.getElementById('reverse');
const konversiFromTo = document.getElementById('konversi-from-to');
const titleHowTo = document.getElementById('title-how-to');
const howToDescription = document.getElementById('how-to-description');
const YearId = document.getElementById('year');

/* Konversi Button */
konversiButton.addEventListener('click', () => {
  const suhuCelcius = parseFloat(inputSuhu.value);
  if (isNaN(suhuCelcius)) {
    alert('Oopps... Silahkan Masukkan Suhu Yang Ingin Dihitung Terlebih Dahulu');
    inputSuhu.style.borderColor = 'red';
    validationInputSuhu.style.display = 'block';
    validationInputSuhu.style.color = 'red';

    inputSuhu.value = '';
    hasilSuhu.value = '';
    caraKalkulasi.value = '';
    return;
  }

  inputSuhu.style.borderColor = '';
  validationInputSuhu.style.display = 'none';
  validationInputSuhu.style.color = '';

  const suhuFahrenheit = (suhuCelcius * 9/5) + 32;
  hasilSuhu.value = suhuFahrenheit;
  caraKalkulasi.value = `${suhuCelcius}°C * (9/5) + 32 = ${suhuFahrenheit}°F`;
  konversiFromTo.innerHTML = "(Celcius (&deg;C) ke Fahrenheit (&deg;F)) :";
  titleHowTo.innerHTML = "Cara Konversi Dari Celcius (&deg;C) ke Fahrenheit (&deg;F) :";
  howToDescription.innerHTML = "<p>Suhu <span class='suhu-style'>S</span> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <span class='suhu-style'>S</span> dalam derajat Celcius (&deg;C) kali 9/5 tambah 32.</p><p><span class='suhu-style'>S</span><sub>(&deg;F)</sub> = (<span class='suhu-style'>S</span><sub>(&deg;C)</sub> x 9/5) + 32</p><p>atau</p><p><span class='suhu-style'>S</span><sub>(&deg;F)</sub> = (<span class='suhu-style'>S</span><sub>(&deg;C)</sub> x 1.8) + 32</p>";
});

/* Reset Button */
resetButton.addEventListener('click', () => {
  inputSuhu.value = '';
  hasilSuhu.value = '';
  caraKalkulasi.value = '';
});

/* Revere Button */
reverseButton.addEventListener('click', () => {
    const inputsuhuCelcius = parseFloat(inputSuhu.value);
    // const suhuFahrenheit = parseFloat(hasilSuhu.value);
    const suhuFahrenheit = (inputsuhuCelcius * 9/5) + 32;

  if (isNaN(inputsuhuCelcius)) {
    alert('Oopps... Silahkan Masukkan Suhu Yang Ingin Dihitung Terlebih Dahulu');
    inputSuhu.style.borderColor = 'red';
    validationInputSuhu.style.display = 'block';
    validationInputSuhu.style.color = 'red';

    inputSuhu.value = '';
    hasilSuhu.value = '';
    caraKalkulasi.value = '';
    return;
  }

  inputSuhu.style.borderColor = '';
  validationInputSuhu.style.display = 'none';
  validationInputSuhu.style.color = '';

  const suhuCelcius = (suhuFahrenheit - 32) * 5/9;
  inputSuhu.value = suhuCelcius;
  hasilSuhu.value = suhuFahrenheit;
  caraKalkulasi.value = `(${suhuFahrenheit}°F - 32) * 5/9 = ${suhuCelcius}°C`;
  konversiFromTo.innerHTML = "(Fahrenheit (&deg;F) ke Celcius (&deg;C)) :";
  titleHowTo.innerHTML = "Cara Konversi Dari Fahrenheit (&deg;F) ke Celcius (&deg;C) :";
  howToDescription.innerHTML = "<p>Suhu <span class='suhu-style'>S</span> dalam derajat Celcius (°C) sama dengan suhu <span class='suhu-style'>S</span> dalam derajat Fahrenheit (°F) dikurangi 32 kali 5/9.</p><p><span class='suhu-style'>S</span><sub>(°C)</sub> = (<span class='suhu-style'>S</span><sub>(°F)</sub> - 32) x 5/9</p><p>atau</p><p><span class='suhu-style'>S</span><sub>(°C)</sub> = (<span class='suhu-style'>S</span><sub>(°F)</sub> - 32) x 1.8</p>";
});

document.addEventListener('DOMContentLoaded', () => {
    // konversiButton.click();
    YearId.innerHTML = new Date().getFullYear();
});