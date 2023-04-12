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
