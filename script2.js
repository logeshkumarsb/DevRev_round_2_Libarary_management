let products = {
    data : [
        {
            title: "title :Fundamentals of Physics",
            author: "author :R shankar",
            subject: "Physics",
            date: "2014-01-31",
            image: "images/pyh1.jpeg" ,
        },
        {
            title: "title :Mathematical Physics",
            author: "author : P Steven",
            subject: "Physics",
            date: "2012-11-11",
            image: "images/phy2.jpeg" ,
        },
        {
            title: "title : Basic Physics",
            author: "author : Karl F Kuhn",
            subject: "Physics",
            date:  "2017-12-22",
            image: "images/phy3.jpg" ,
        },
        {
            title: "title : Quantum Physics",
            author: "author :M Pedro",
            subject: "Physics",
            date:  "1998-03-20",
            image: "images/phy4.jpeg" ,
        },
        {
            title: "title : Engineering Physics",
            author: "author :Jearl Walker",
            subject: "Physics",
            date:  "2012-11-10",
            image: "images/phy5.jpeg" ,
        },
        {
            title: "title : Organic Chemistry",
            author: "author : S Chand",
            subject: "Chemistry",
            date:  "2010-12-20",
            image: "images/ch1.jpg" ,
        },
        {
            title: "title : Medical Chemistry",
            author: "author : Harun M Patel",
            subject: "Chemistry",
            date:  "2002-12-20",
            image: "images/ch2.jpg" ,
        },
        {
            title: "title : Physical Chemistry",
            author: "author : P L Soni",
            subject:"Chemistry",
            date: "2014-01-21",
            image: "images/ch3.jpeg" ,
        },
        {
            title: "title : Modern Chemistry",
            author: "author :T Sam",
            subject: "Chemistry",
            date:  "1994-12-20",
            image: "images/ch4.jpeg" ,
        },
        {
            title: "title :Engineering Chemistry",
            author: "author :Tinku Basu",
            subject: "Chemistry",
            date:  "2007-04-20",
            image: "images/ch5.jpg" ,
        },
        {
            title: "title :Engineering Mathematics",
            author: "author :H K Dass",
            subject: "Math",
            date:  "1995-12-22",
            image: "images/m1.jpg" ,
        },
        {
            title: "title :Advanced Engineering Mathematics",
            author: "author :Ervin",
            subject: "Math",
            date:  "2002-02-02",
            image: "images/m2.jpeg",
        },
        {
            title: "title : Engineering Mathematics II",
            author: "author :A Ganesh",
            subject: "Math",
            date:  "2021-12-20",
            image: "images/m3.png" ,
        },
        {
            title: "title : Engineering Mathematics III",
            author: "author : N P Bali",
            subject: "Math",
            date:  "2016-12-31",
            image: "images/m4.jpg" ,
        },
        {
            title: "title : Engineering Mathematics IV",
            author: "author : S S Sastry",
            subject: "Math",
            date: "2022-08-08",
            image: "images/m5.jpg" ,
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