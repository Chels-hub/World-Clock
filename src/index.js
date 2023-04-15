function updateTime() {
  //Los Angeles
  let losAngeles = document.querySelector("#losAngeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTimeElement = losAngeles.querySelector(".time");
  let losAngelesTime = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss [<small>]A [</small>]");

  losAngelesDate.innerHTML = moment().format("MMMM D Y");
  losAngelesTimeElement.innerHTML = `${losAngelesTime}`;

  //Paris
  let Paris = document.querySelector("#Paris");
  let ParisDate = Paris.querySelector(".date");
  let ParisTimeElement = Paris.querySelector(".time");
  let ParisTime = moment()
    .tz("Europe/Paris")
    .format("hh:mm:ss [<small>]A [</small>]");

  ParisDate.innerHTML = moment().format("MMMM D Y");
  ParisTimeElement.innerHTML = `${ParisTime}`;
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#Cities");
  citiesElement.innerHTML = `  <div class="City" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM D YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}
let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
