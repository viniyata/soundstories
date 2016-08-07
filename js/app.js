var textures = ["http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/",
                     "http://itp.viniyatapany.com/nature-of-code/midTerm-05/"]; //initialize array of textures

var soundStories = `In a subway station full of people. No one is talking.
Only sounds of someone coughing
Feet dragging across the tiles on the floor
There is an announcement – It is Muffled
People breathing heavily
The train station air vent fan
The guy in the green coat yawns
The sound of a someone’s hand rubbing off his black jacket as he fixes his headphones
He sneezed
A zipper is opened
Someone is folding papers
I can hear a train
Train doors open
Train’s door closes – ding ding
More dragging footsteps
No one has spoken yet
Another train going the other direction I can see two people talking but they are far away – I can’t hear them`; //make array to add the soundStories


function init(){
  for (var i = 0; i < textures.length; i++) { //for loop to add multiple textues (array) on the page
    var iframeContainer = document.createElement("div"); // making a div via createElement because its am html element
    var iframe = document.createElement("iframe"); // making an iframe via createElement because its am html element
    iframe.setAttribute("src", textures[i]);
    iframe.setAttribute("class", "texture__iframe"); //BEM : Block
    iframeContainer.setAttribute("class", "texture__container"); //BEM : http://getbem.com/naming/

    var changeState = document.createElement("button");
    changeState.setAttribute("class", "texture__button");
    changeState.setAttribute("data-number", i );
    changeState.setAttribute("onclick", "test(this.getAttribute('data-number'))" );

    iframeContainer.appendChild(changeState);

    iframeContainer.appendChild(iframe);
    document.body.appendChild(iframeContainer);

    var content = document.createElement("p");
    content.innerHTML = soundStories; //check why order matters
    content.setAttribute("class", "texture__content");
    var tempId = "texture__content-" + i;
    content.setAttribute("id", tempId);
    iframeContainer.appendChild(content);

  }
}

function test(no) {
  console.log(no);
  var idNumber = "texture__content-" + no;
  if (document.getElementById(idNumber).style.display == "block"){
    document.getElementById(idNumber).style.display = "none";
  } else {
    document.getElementById(idNumber).style.display = "block";
  }
}


window.onload = init;
