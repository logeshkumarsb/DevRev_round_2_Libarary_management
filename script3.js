let products = {
    data : [
        {
            title: "title :Dark Tower",
            author: "author :Setpehen King",
            subject: "Dark",
            date: "1982-01-31",
            image: "images/df1.jpeg" ,
        },
        {
            title: "title :Black Company",
            author: "author : Glen Cook",
            subject: "Dark",
            date: "1984-11-11",
            image: "images/df2.jpeg" ,
        },
        {
            title: "title : Book of Azrael",
            author: "author :M Amber",
            subject: "Dark",
            date:  "2022-12-22",
            image: "images/df3.jpeg" ,
        },
        {
            title: "title : The Blade Itself",
            author: "author :Joe",
            subject: "Dark",
            date:  "2006-03-20",
            image: "images/df4.jpeg" ,
        },
        {
            title: "title : Aesop Fable's",
            author: "author : Aesop",
            subject: "Fables",
            date:  "1993-11-10",
            image: "images/f1.jpeg" ,
        },
        {
            title: "title :The Little Prince",
            author: "author :Antoine De Saint",
            subject: "Fables",
            date:  "1987-12-20",
            image: "images/f2.jpeg" ,
        },
        {
            title: "title : Cendrila",
            author: "author : Charles Perrault",
            subject: "Fairy",
            date:  "1634-12-20",
            image: "images/ft1.jpeg" ,
        },
        {
            title: "title : Fairy Tale",
            author: "author : Stephen King",
            subject:"Fairy",
            date: "2022-01-21",
            image: "images/ft2.jpeg" ,
        },
        {
            title: "title : Jack and The Beanstalk",
            author: "author :Nick M",
            subject: "Fairy",
            date:  "2021-12-20",
            image: "images/ft3.jpeg" ,
        },
        {
            title: "title :Captian Marvel",
            author: "author :Shwan Michales",
            subject: "Hero",
            date:  "1993-04-20",
            image: "images/sh1.jpg" ,
        },
        {
            title: "title :Super Kids",
            author: "author :John M",
            subject: "Hero",
            date:  "1993-12-22",
            image: "images/sh3.jpeg" ,
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