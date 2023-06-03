let products = {
    data : [
        {
            title: "title : Soil Mechanics",
            author: "author : Dr.  Arora",
            subject: "Civil",
            date: "1998-01-31",
            image: "images/solimechanics.jpeg" ,
        },
        {
            title: "title : Geology",
            author: "author : Stephen Marshal",
            subject: "Civil",
            date: "2000-11-11",
            image: "images/geology.jpeg" ,
        },
        {
            title: "title : Highway Engineering",
            author: "author : L R Kadiyali",
            subject: "Civil",
            date:  "2017-12-22",
            image: "images/highwayenigineering.jpeg" ,
        },
        {
            title: "title : Thermodynamics",
            author: "author : P.K.Nag",
            subject: "Mech",
            date:  "1998-03-20",
            image: "images/pknag.jpg" ,
        },
        {
            title: "title : Metal Cutting",
            author: "author : David A Stephenson",
            subject: "Mech",
            date:  "2012-11-10",
            image: "images/metal cutting.jpeg" ,
        },
        {
            title: "title : Theory Of Machines",
            author: "author : S S Rattan",
            subject: "Mech",
            date:  "2010-12-20",
            image: "images/theoryofmachines.jpeg" ,
        },
        {
            title: "title : Basic Electronics",
            author: "author : D P Kothari",
            subject: "Electrical",
            date:  "2002-12-20",
            image: "images/basicelectronics.jpg" ,
        },
        {
            title: "title : Communication Engineering",
            author: "author : Krishnamoorthy",
            subject: "Electrical",
            date: "2014-01-21",
            image: "images/communication.jpeg" ,
        },
        {
            title: "title : Control System",
            author: "author : A.K. Jairath",
            subject: "Electrical",
            date:  "1994-12-20",
            image: "images/control system.jpg" ,
        },
        {
            title: "title : Computer Networks",
            author: "author : Sanjay Sharma",
            subject: "CSE",
            date:  "2007-04-20",
            image: "images/computer networks.png" ,
        },
        {
            title: "title : Computer Architecture",
            author: "author : K M Hebbar",
            subject: "CSE",
            date:  "1995-12-22",
            image: "images/computer architecture.jpg" ,
        },
        {
            title: "title : Digital Image Processing",
            author: "author : Mark J Burge",
            subject: "CSE",
            date:  "2002-02-02",
            image: "images/dip.jpeg",
        },
        {
            title: "title :Digital Signal Processing",
            author: "author :Ranjan K Malik",
            subject: "ECE",
            date:  "2021-12-20",
            image: "images/dsp.jpg" ,
        },
        {
            title: "title : VLSI",
            author: "author : Debaprasad Das",
            subject: "ECE",
            date:  "2016-12-31",
            image: "images/vlsi.jpg" ,
        },
        {
            title: "title : Embeeded System",
            author: "author : Ahmet Bindal",
            subject: "ECE",
            date: "2022-08-08",
            image: "images/es.jpeg" ,
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