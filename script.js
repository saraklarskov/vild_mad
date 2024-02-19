fetch("https://cqapoavevilyrkdkezmw.supabase.co/rest/v1/items", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYXBvYXZldmlseXJrZGtlem13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDIzNzMsImV4cCI6MjAyMzQxODM3M30._5AZFrfvIxiCfPmfJg0T0chsj0vkiMa_Od63AQQCg3c",
  },
})
  .then((res) => res.json())
  .then(showItems);

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

function showItems(items) {
  console.log("items er ", items);

  // Sorter objekter array ved hjælp af sammenlignTitler funktionen
  items.sort(sammenlignTitler);

  items.forEach(showItem);
}

function showItem(item) {
  console.log(item);

  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".plants_by_1").querySelector("a").textContent =
    item.title;

  if (item.sankelandskaber == "Coniferous forest") {
    clone.querySelector("section").remove();
  } else {
    document.querySelector(".col_2").appendChild(clone);
  }
}
