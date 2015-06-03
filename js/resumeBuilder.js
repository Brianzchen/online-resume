var bio = {
  "name": "Brian Chen",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "0211742289",
    "email": "bchen.chen93@gmail.com",
    "github": "https://github.com/Brianzchen/",
    "twitter": "@brianzchen",
    "location": "Auckland, New Zealand"
  },
  "welcomeMessage": "Welcome to my online resume",
  "skills": [
    "html", " css", " javascript"
    ],
  "biopic": "images/fry.jpg"
};

/*appending all the header info*/
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").prepend(formattedLocation);
  $("#topContacts").prepend(formattedTwitter);
  $("#topContacts").prepend(formattedGithub);
  $("#topContacts").prepend(formattedEmail);
  $("#topContacts").prepend(formattedMobile);

  var formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPhoto);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#header").append(formattedSkills);
  }
}

var education = {
  "schools": [
    {
      "name": "University of Auckland",
      "location": "Auckland, New Zealand",
      "degree": "Bachelor of Science",
      "majors": ["Compsci", "Stats"],
      "dates": 2015,
      "url": "www.auckland.ac.nz"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-end Web Developer Nanodegree",
      "school": "Udacity",
      "date": 2015,
      "url": "www.udacity.com"
    }
  ]
};

education.display = function() {
  $("#education").append(HTMLschoolStart);
  for (school in education.schools) {
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    for (major in education.schools[school].majors) {
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajors);
    }
  }
}

var work = {
  "jobs": [
    {
      "employer": "Skycity Entertainment Group",
      "title": "Croupier",
      "location": "Auckland, New Zealand",
      "dates": "November 2013 - March 2015",
      "description": "Blackjack dealer, winner of 2014 dealers championship"
    },
    {
      "employer": "Fortune Enterprises Ltd",
      "title": "Account Manager",
      "location": "Auckland, New Zealand",
      "dates": "March 2015 - Present",
      "description": "Manager of company accounts and daily activities. Took initiative to modernize company through moving company files to a cloud based system and modularized the daily activities of the director"
    }
  ]
};

/*appending all the work info*/
work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var workName = formattedEmployer + formattedWorkTitle
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(workName);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

var projects = {
  projects: [
    {
      title: "Classic Arcade Clone",
      dates: "June 2015 - Present",
      description: "I made a game, will say more later",
      images: "images/197x148.gif"
    }
  ]
}

/*appending prjects info*/
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedImage);
    $(".project-entry:last").append(formattedImage);
  }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
