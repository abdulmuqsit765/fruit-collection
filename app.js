var fruits = [
    {
      title: "Mango",
      image: "data:image/jpeg;base64,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",
      description: "Tropical stone fruit, sweet and juicy.",
      types: ["Sindhri", "Chaunsa", "Anwar Ratol", "Langra"],
      symbol: "King of fruits"
    },
    {
      title: "Watermelon",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/3/GS/QG/YM/30864444/organic-red-watermelon-500x500.jpg",
      description: "Large, refreshing fruit with high water content.",
      types: ["Darya Khan", "Sugar Baby", "Charleston Gray"],
      symbol: "Summer favorite"
    },
   {
      title: "Orange",
      image: "data:image/jpeg;base64,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",
      description: "Citrus fruit, sweet and tangy.",
      types: ["Kinnow", "Blood Orange", "Valencia"],
      symbol: "Winter favorite"
    },
    {
      title: "Banana",
      image: "https://media.istockphoto.com/id/172876004/photo/banana-wallpaper.jpg?s=612x612&w=0&k=20&c=DjUIq77Fh3ljde_WJNwYl17e86VxMUpOwYiVL2XJo9U=",
      description: "Tropical fruit, sweet and soft.",
      types: ["Dwarf Cavendish", "Williams", "Lady Finger"],
      symbol: "Year-round favorite"
    },

  ];
  
  
  
  var box = document.getElementById("box");
  
  fruits.forEach(function (data, ind) {
    
    box.innerHTML += 
    
    `
      <div class="fruit" id="${+ind}">
      <h1>${data.title}</h1>
      <img src='${data.image}' style: width="500px", height="200px",>
      <p>
      <span class="first">Description:</span><span class="last">${data.description}</span>
      <span class="first">Types:</span><span class="last">${data.types}</span>
      <span class="first">symbol:</span><span class="last">${data.symbol}</span>
      </p>
      <div class="buttons">
      <button onclick="edit(this)">Edit</button>
      <button onclick="khatam(this)">Delete</button>
      </div>
      </div>`  
  });
  
    function khatam(element){
    var location = element.parentElement.parentElement.id
    fruits.splice(location, 1, )
    box.innerHTML = "";
    fruits.forEach(function (data, ind) {  
      box.innerHTML += 
      `
        <div class="fruit" id="${+ind}">
        <h1>${data.title}</h1>
        <img src='${data.image}' style: width="500px", height="200px">
        <p>
        <span class="first">Description:</span><span class="last">${data.description}</span>
        <span class="first">Types:</span><span class="last">${data.types}</span>
        <span class="first">symbol:</span><span class="last">${data.symbol}</span>
        </p>
        <div class="buttons">
        <button onclick="edit(this)">Edit</button>
        <button onclick="khatam(this)">Delete</button>
        </div>
        </div>`
    });
  }
  
  function edit(element){
    box.innerHTML = "";
    var location = element.parentElement.parentElement.id
    var category = prompt ('select Category', 'title, image, description, types, symbol')
    var temp = prompt ('Enter New Value', '')
    fruits.forEach(function (data, ind) { 
      fruits[location][category] = temp;
      box.innerHTML += 
      ` <div class="fruit" id="${+ind}">
        <h1>${data.title}</h1>
        <img src='${data.image}' style: width="500px", height="200px">
        <p>
        <span class="first">Description:</span><span class="last">${data.description}</span>
        <span class="first">Types:</span><span class="last">${data.types}</span>
        <span class="first">symbol:</span><span class="last">${data.symbol}</span>
        </p>
        <div class="buttons">
        <button onclick="edit(this)">Edit</button>
        <button onclick="khatam(this)">Delete</button>
        </div>
        </div>`
      });
  }
  