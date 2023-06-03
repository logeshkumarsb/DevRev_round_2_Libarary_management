let products = {
    data : [
        {
            title: "title :Tom And Jerry",
            author: "author : William hanner",
            subject: "TomJerry",
            date: "1987-08-08",
            image: "images/tom and jeery.jpg" ,
        },
        {
          title: "title :Tom And Jerry",
          author: "author : William hanner",
          subject: "TomJerry",
          date: "1987-08-08",
          image: "images/t3.jpeg" ,
        },
        {
          title: "title :Tom And Jerry",
          author: "author : William hanner",
          subject: "TomJerry",
          date: "1987-08-08",
          image: "images/t1.jpg" ,
        },
        {
        title: "title :Tom And Jerry",
        author: "author : William hanner",
        subject: "TomJerry",
        date: "1987-08-08",
        image: "images/t2.jpeg" ,
        },
        {
            title: "title : Ben 10",
            author: "author : Joe Kelly",
            subject: "Ben",
            date: "2001-10-12",
            image: "images/ben10.jpeg" ,
        },
        {
          title: "title : Ben 10 Ultimate Alien",
          author: "author : Joe Kelly",
          subject: "Ben",
          date: "2001-10-12",
          image: "images/b1.jpeg" ,
        },
        {
        title: "title : Ben 10 Classic",
        author: "author : Joe Kelly",
        subject: "Ben",
        date: "2001-10-12",
        image: "images/b2.jpeg" ,
        },
        {
        title: "title : Ben 10 Alien Force",
        author: "author : Joe Kelly",
        subject: "Ben",
        date: "2001-10-12",
        image: "images/b3.jpeg" ,
        },
        {
           title: "title : Dragon Booster",
           author: "author : Kevin Mowrer",
           subject: "others",
           date: "2005-09-07",
           image: "images/dragon booster.jpeg" ,
        },
    ],
};
for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.subject,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("title");
    title.innerText = i.title.toUpperCase();
    container.appendChild(title);

    let author = document.createElement("h6");
    author.classList.add("author");
    author.innerText = i.author.toUpperCase();
    container.appendChild(author);

    let sub = document.createElement("h6");
    sub.classList.add("sub");
    sub.innerText = i.subject.toUpperCase();
    container.appendChild(sub);

    let date = document.createElement("h6");
    date.classList.add("date");
    date.innerText = i.date.toUpperCase();
    container.appendChild(date);

    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}
// by author name
document.getElementById("search2").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input1").value;
    let elements = document.querySelectorAll(".author");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
//by title name
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
//by subject name
document.getElementById("search3").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input2").value;
    let elements = document.querySelectorAll(".sub");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
//by publish date 
document.getElementById("search4").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input3").value;
    let elements = document.querySelectorAll(".date");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  window.onload = () => {
    filterProduct("all");
    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
  };
  //select from dropdown
  function getOption() {
    selectElement = document.querySelector('#topics');
    output = selectElement.value;
    // window.console(output);
    filterProduct(output);
}