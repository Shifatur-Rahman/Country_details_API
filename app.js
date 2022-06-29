async function loadData() {
  let res = await fetch(`https://restcountries.com/v3.1/all`);
  let data = await res.json();
  showData(data);
}
loadData();

let box = document.getElementById("box");
let country_details = document.getElementById("country_details");

function showData(data) {
  for (let item of data) {
    let li = document.createElement("p");
    li.classList.add("list");
    li.innerHTML = `
          <p> <img src="${item.flags.svg}" />  </p>
          <h3> ${item.name.common} </h3>
          <h3> ${item.capital}  </h3>
          <h3> ${item.population}  </h3>
         <p> <a target='_blank' href="${item.maps.googleMaps}"> OPEN MAP </a> </p>
          
          <button id="btn" onclick="detailsData('${item.name.common}')" > Details  </button> 
    `;
    box.appendChild(li);
  }
}

async function detailsData(countryName) {
  let link = `https://restcountries.com/v2/name/${countryName}`;
  let detailsRes = await fetch(link);
  let countryData = await detailsRes.json();
  displayDetailsCountry(countryData[0]);
}

function displayDetailsCountry(temp) {
  //   console.log(temp);

  country_details.innerHTML = `
    <p> <img src="${temp.flags.png}" /> </p>
        <h3> Name: ${temp.name} </h3>
        <h3>Capital: ${temp.capital}  </h3>
        <h3>Population: ${temp.population}  </h3>
        `;
}
