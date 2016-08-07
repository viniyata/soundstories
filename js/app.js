var textures = ["http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/"]; //initialize array of textures

var soundStories = ["0 ng the other direction I can see two people talking but they are far away – I can’t hear them",
                    "1 ng the other direction I can see two people talking but they are far away – I can’t hear them",
                    "2 ng the other direction I can see two people talking but they are far away – I can’t hear them",
                    "3 ng the other direction I can see two people talking but they are far away – I can’t hear them",
                    "4 ng the other direction I can see two people talking but they are far away – I can’t hear them",
                    "5 ng the other direction I can see two people talking but they are far away – I can’t hear them"]
 //make array to add the soundStories


function init(){
  for (var i = 0; i < textures.length; i++) { //for loop to add multiple textues (array) on the page
    var container = document.createElement("div"); // making a div via createElement because its am html element
    var iframe = document.createElement("iframe"); // making an iframe via createElement because its am html element
    iframe.setAttribute("src", textures[i]);
    iframe.setAttribute("class", "texture__iframe"); //BEM : Block
    container.setAttribute("class", "texture__container"); //BEM : http://getbem.com/naming/

    var changeState = document.createElement("button");
    changeState.setAttribute("class", "texture__button");
    changeState.setAttribute("data-number", i ); //data attribute
    changeState.setAttribute("onclick", "showstory(this.getAttribute('data-number'))" );

    container.appendChild(changeState);

    container.appendChild(iframe);
    document.body.appendChild(container);

  }
}

function showstory(no) {
  console.log(no);
  var showstoryElement = "showstory__textid";
  if (document.getElementById(showstoryElement).style.display == "block"){
    document.getElementById(showstoryElement).style.display = "none";
  } else {
    document.getElementById(showstoryElement).style.display = "block";
    document.getElementById(showstoryElement).innerHTML = soundStories[no];
  }
}


window.onload = init;
