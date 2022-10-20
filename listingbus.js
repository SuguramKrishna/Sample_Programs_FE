let bus = "";

function PageOnLoad() {
  const busInlist = JSON.parse(localStorage.getItem("source and destination"));
  if (busInlist !== null) {
    bus = busInlist;
  }
  console.log(busInlist);
}

let busDetails = JSON.parse(localStorage.getItem("source and destination"));
console.log(busDetails);
for (let i of busDetails) {
  let placeofsource = i.source;
  console.log(placeofsource);
  let placeofdestination = i.destination;
  let timeofstart = i.start;
  let timeofend = i.end;
  let dateoftravel = i.date;
  let numberofseats = i.seats;
  bus += `<div class="buslist">
    <p class="busdetails"> Source : <span class="sourcespan">
    ${placeofsource}</span></p>
    <p class="busdetails"> Destination :<span class="destinationspan">
    ${placeofdestination}</span></p>
    <p class="busdetails"> Start :<span class="startspan">
    ${timeofstart}</span></p>
    <p class="busdetails"> End :<span class="endspan">
    ${timeofend}</span></p>
    <p class="busdetails"> Date :<span class="datespan">
    ${dateoftravel}</span></p>
    <p class="busdetails"> No. Of Seats :<span class="seatspan">
    ${numberofseats}</span></p>
</div>`;
}

let div = document.getElementById("buslisting");
div.innerHTML += bus;

PageOnLoad()