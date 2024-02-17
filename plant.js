fetch("https://cqapoavevilyrkdkezmw.supabase.co/rest/v1/items", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYXBvYXZldmlseXJrZGtlem13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDIzNzMsImV4cCI6MjAyMzQxODM3M30._5AZFrfvIxiCfPmfJg0T0chsj0vkiMa_Od63AQQCg3c",
  },
})
  .then((response) => response.json())
  .then((data) => showItems(data));

function showItems(item) {
  console.log(item);

  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".plant_name").querySelector("h1").textContent =
    item.title;
}
