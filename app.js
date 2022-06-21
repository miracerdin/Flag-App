const url = "https://restcountries.com/v3/all";
const select = document.querySelector("#country");
const option = document.querySelector(".option");
const cardContainer = document.querySelector(".card-container");
const body = document.querySelector("body");
const countriesFetched = async () => {
  try {
    const res = await fetch(url);
    const countries = await res.json();
    console.log(countries);
    countries.forEach((country) => {
      select.innerHTML += `<option value="${country.name.common}">${country.name.common}</option>`;
    });
    select.addEventListener("change", () => {
      const selectedCountry = select.value;
      console.log(select.value);
      countries.forEach((country) => {
        if (country.name.common == selectedCountry) {
          const {
            name: { common },
            capital,
            flags,
            region,
            languages,
            currencies,
          } = country;
          cardContainer.innerHTML = ` <div class="card" style="width: 18rem;">
                <img src="${flags[1]}" class="card-img-top" alt="...">
                <ul class="list-group text-center list-group-flush">
                  <li class="list-group-item"> ${common}</li>
                  <li class="list-group-item"><i class="fa-solid fa-earth-europe"></i> ${region}</li>
                  <li class="list-group-item"><i class="fa-solid fa-landmark-flag"></i> ${capital}</li>
                  <li class="list-group-item"><i class="fa-solid fa-language"></i> ${Object.values(
                    languages
                  )}</li>
                 <li class="list-group-item"><i class="fa-solid fa-money-bill-1-wave"></i> ${
                   Object.values(currencies)[0].name
                 } ${Object.values(currencies)[0].symbol}</li>
                </ul>
            </div>`;
          // body.style.background = `url(${flags[1]}) no-repeat`;
          // body.style.backgroundSize = "contain";
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};
countriesFetched();
