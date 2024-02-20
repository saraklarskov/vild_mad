const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
fetch(`https://cqapoavevilyrkdkezmw.supabase.co/rest/v1/items?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYXBvYXZldmlseXJrZGtlem13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDIzNzMsImV4cCI6MjAyMzQxODM3M30._5AZFrfvIxiCfPmfJg0T0chsj0vkiMa_Od63AQQCg3c",
  },
})
  .then((res) => res.json())
  .then(showItem);


function showItem(item) {
  console.log(item);
  
  document.querySelector(".where_to_find" ).textContent = item[0].where_to_find;
  document.querySelector(".when_to_find" ).textContent = item[0].when_to_find;
  document.querySelector(".how_to_spot" ).textContent = item[0].how_to_spot;
  document.querySelector(".how_to_pick" ).textContent = item[0].how_to_pick;
  document.querySelector(".sea").addEventListener("click", scrollSea)
  document.querySelector(".loc").addEventListener("click", scrollLoc)


  function scrollSea(){
    document.querySelector("#when").scrollIntoView();
  }
   function scrollLoc(){
    document.querySelector("#where").scrollIntoView();
  }
    
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Create an image element for the months
    item[0].months.forEach((month) => {
        const h2 = document.createElement("h2");
        h2.textContent = monthNames[parseInt(month)]; 
        h2.className = "month-name"; // Add a class to the h2 element


        document.querySelector(".grid1-1-1-1").appendChild(h2);

         });

  document.querySelector(".desc" ).textContent = item[0].description;
  document.querySelector(".name").textContent = item[0].title;
  document.querySelector("#profile_img").src = item[0].profile_image;
 
}