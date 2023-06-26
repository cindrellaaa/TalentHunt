//header start
let selectedLink = document.querySelector(".selectedLink");

function checkActive() {
  document.querySelectorAll("nav li").forEach((item) => {
    console.log(item);
    if (item.dataset.active == "true") {
      selectedLink.style.transform = `translateX(${
        item.offsetLeft + item.offsetWidth / 2 - 24 + "px"
      })`;
    }
  });
}

document.querySelectorAll("nav li").forEach((item) => {
  console.log(item.offsetLeft);
  item.addEventListener("click", (e) => {
    document.querySelectorAll("nav li").forEach((i) => {
      i.dataset.active = "false";
    });
    e.currentTarget.dataset.active = "true";
    checkActive();
  });
});

checkActive();

//header end

// swiper start
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//swiper end

//newsletter start

$(document).ready(function() {
  $('.sign-up-form').on('submit', submit);
  $('.reset-button').on('click', reset);
});

function submit(e) {
  $('.sign-up-container').addClass('submitted');
  e.preventDefault();
  setTimeout(function() {
    $('.hover-paragraph').fadeIn();
  }, 1500);
}

function reset() {
  $('.sign-up-container').removeClass('submitted');
  $('.sign-up-form')[0].reset();
  $('.hover-paragraph').hide();
}

//newsletter end

//search start
function searchCVs() {
  var location = document.getElementById("location").value;
  var jobTitle = document.getElementById("jobTitle").value;


  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h3>Search Results:</h3>" +
    "<p>Location: " + location + "</p>" +
    "<p>Job Title: " + jobTitle + "</p>" +
    "<p>Display search results here...</p>";
}

//search end

// DATA SOURCE
var candidates = [
{"id":1,"first_name":"Nataniel","last_name":"Losemann","job":"Developer","workflow":"Fresher","location":"India"},
{"id":2,"first_name":"Lemuel","last_name":"Aland","job":"Sales","workflow":"Hired","location":"USA"},
{"id":3,"first_name":"Bari","last_name":"Hold","job":"HR","workflow":"Contract","location":"India"},
{"id":4,"first_name":"Tabitha","last_name":"Lantiffe","job":"SEO","workflow":"Internship","location":"Japan"},
{"id":5,"first_name":"Lenora","last_name":"Kingcott","job":"Engineer","workflow":"Student","location":"China"},
{"id":6,"first_name":"Reeba","last_name":"Polamontayne","job":"Associate","workflow":"fresher","location":"Kenya"},
{"id":7,"first_name":"Timmi","last_name":"Lilleycrop","job":"Executive","workflow":"Hired","location":"Russia"},
{"id":8,"first_name":"Joy","last_name":"Van der Baaren","job":"Developer","workflow":"Contract","location":"Spain"},
{"id":9,"first_name":"Corabel","last_name":"Domke","job":"Sales","workflow":"Internshio","location":"Australia"},
{"id":10,"first_name":"Way","last_name":"Dominguez","job":"HR","workflow":"Fresher","location":"Nigeria"},
{"id":11,"first_name":"Clem","last_name":"Seson","job":"SEO","workflow":"Fresher","location":"Egypt"},
{"id":12,"first_name":"Evangelin","last_name":"Sansun","job":"Engineer","workflow":"Contract","location":"India"},
{"id":13,"first_name":"Lilah","last_name":"Huddles","job":"Assistant","workflow":"Internship","location":"USA"},
{"id":14,"first_name":"Dacia","last_name":"Cristofaro","job":"Associate","workflow":"Student","location":"Japan"},
{"id":15,"first_name":"Josias","last_name":"Mose","job":"Executive","workflow":"Student","location":"Kenya"},
{"id":16,"first_name":"Mariel","last_name":"Sancroft","job":"Receptionist","workflow":"Hired","location":"China"},
{"id":17,"first_name":"Melisse","last_name":"Haselden","job":"Developer","workflow":"Contract","location":"Spain"},
{"id":18,"first_name":"Ruggiero","last_name":"Caulder","job":"Engineer","workflow":"Hired","location":"Russia"},
{"id":19,"first_name":"Charil","last_name":"Oakinfold","job":"Pilot","workflow":"Hired","location":"USA"},
{"id":20,"first_name":"Morly","last_name":"Mathe","job":"Mechanic","workflow":"Fresher","location":"India"}
];

Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

var candidateListTarget = document.getElementById('candidate-list-target');
var candidateListTemplate = document.getElementById('candidate-list-template').innerHTML;
var candidateListCompiledTemplate = Handlebars.compile(candidateListTemplate);
candidateListTarget.innerHTML += candidateListCompiledTemplate(candidates);
//candidate list end
