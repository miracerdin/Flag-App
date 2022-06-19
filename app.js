const url = "https://restcountries.com/v3/all";
const select = document.querySelector("#country");
const countries = async () => {
  try {
    const res = await fetch(url);
    const country = await res.json();
    console.log(country);
    country.forEach((x) => {
      select.innerHTML += `<option>${x.name.common}</option>`;
      console.log(x.name.common);
    });
  } catch (error) {
    console.log(error);
  }
};
countries();
