document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");
  const bars = document.querySelectorAll(".bar");

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
    bars.forEach((bar) => bar.classList.toggle("change"));
  });
});

fetch("https://cqapoavevilyrkdkezmw.supabase.co/rest/v1/items", {
    method:"GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYXBvYXZldmlseXJrZGtlem13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDIzNzMsImV4cCI6MjAyMzQxODM3M30._5AZFrfvIxiCfPmfJg0T0chsj0vkiMa_Od63AQQCg3c"
    },
})
    .then(res=>res.json())
    .then(showItems);

function showItems(items) {
  items.forEach(showItem)
}

function showItem(item){
    console.log(item);

    
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector(".plants_by_1").querySelector("a").textContent = item.title
    document.querySelector("article").appendChild(clone);
}
