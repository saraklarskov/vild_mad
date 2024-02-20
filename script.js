window.addEventListener("load", onLoad);

let globalItems;

async function onLoad() {
  setEventListeners();
  fetchData();
}

function fetchData() {
  fetch("https://cqapoavevilyrkdkezmw.supabase.co/rest/v1/items", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYXBvYXZldmlseXJrZGtlem13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDIzNzMsImV4cCI6MjAyMzQxODM3M30._5AZFrfvIxiCfPmfJg0T0chsj0vkiMa_Od63AQQCg3c",
    },
  })
    .then((res) => res.json())
    .then(saveData);
}

function setEventListeners() {
  document.querySelector("#month").addEventListener("change", showItems)
}

function sammenlignTitler(a, b) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  let sammenligning = 0;
  if (titleA > titleB) {
    sammenligning = 1;
  } else if (titleA < titleB) {
    sammenligning = -1;
  }
  return sammenligning;
}

function saveData(items) {
  globalItems = items;
  showItems();
}


function showItems() {
  document.querySelector(".col_2").innerHTML = "";
  let filteredItems;

  filteredItems = filterItems(globalItems);

  // Sorter objekter array ved hjælp af sammenlignTitler funktionen
  filteredItems.sort(sammenlignTitler);
  filteredItems.forEach(showItem);
}

function filterItems(items) {
  let selectedMonth = document.querySelector("#month").value;

  if(selectedMonth !== "-1") {
      return items.filter(item => item.months.some(month => month === selectedMonth));
  }
  return items;
}


function showItem(item) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".plants_by_1").querySelector("a").textContent =
    item.title;
  
  clone.querySelector(".plants_by_1").querySelector("a").setAttribute("href", `plant.html?id=${item.id}`);

  if (item.sankelandskaber == "Coniferous forest") {
    clone.querySelector("section").remove();
  } else {
    document.querySelector(".col_2").appendChild(clone);
  }
}

