

const selectOptions = document.querySelector("#productName");

const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      avgeragerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
  ];

products.forEach(product => {
  const newOption = document.createElement("option");
  newOption.value = product.id;
  newOption.textContent = product.name;

  selectOptions.appendChild(newOption);
});

