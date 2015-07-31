var bio = {
  "name": "Brian Chen",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "0211742289",
    "email": "bchen.chen93@gmail.com",
    "github": "https://github.com/Brianzchen/",
    "location": "Bucklands Beach, Auckland, New Zealand"
  },
  "welcomeMessage": "Welcome to my online resume",
  "skills": [
    "HTML5", "CSS3", "JavaScript", "Knockout.js", "Jasmine 2.0"
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
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").prepend(formattedLocation);
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
    $("#skills").append(formattedSkills);
  }
}

var work = {
  "jobs": [
    {
      "employer": "Fortune Enterprises Ltd",
      "title": "Account Manager",
      "location": "Otahuhu, Auckland, New Zealand",
      "dates": "March 2015 - Present",
      "description": "Manager of company accounts and daily activities. Took initiative to modernize company through moving company files to a cloud based system and modularized the daily activities of the director."
    },
    {
      "employer": "Skycity Entertainment Group",
      "title": "Croupier",
      "location": "Auckland, New Zealand",
      "dates": "November 2013 - March 2015",
      "description": "Blackjack dealer, winner of 2014 dealers championship"
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
      link: "http://brianzchen.github.io/frogger-game/",
      dates: "June 2015",
      description: "A modern take of a the classic arcade game Frogger. Making use of object oriented programming I implemented the player character, enemy bugs and multiple game mechanics using the Udacity provided game engine. Modifications of the game engine were also made to accommodate new mechanics as well as a locally stored score system.",
      image1: "images/frogger-small.png",
      image2: "images/frogger2-small.png"
    },
    {
      title: "Website Optimization",
      link: "http://brianzchen.github.io/web-opt-project/",
      dates: "July 2015",
      description: "Using a Udacity provided website created by web developer Cameron Pittman, I was tasked optimizing the website to a score of higher than 90 on Google's PageSpeed Insights which I managed to achieve 95 and 97 respectively for mobile and desktop with the use of internal style-sheets, image optimization and asynchronous loading of JavaScript. I was also tasked with optimizing the webpage 'Cam's Pizzeria' to run at 60 frames per second which was accomplished through measuring the performance with Google Chome's web developer tools and rewriting code to fix issues related to forced synchronous layout.",
      image1: "images/webopt.png",
      image2: "images/webopt2.png"
    },
    {
      title: "Neighbourhood Map",
      link: "http://brianzchen.github.io/east-eats/",
      dates: "July 2015",
      description: "Created a neighbourhood map of east Auckland, NZ showing local eateries that I consider very tasty. The project was created using the knockout.js framework along with Google's Maps and Yelp's business API's.",
      image1: "images/neighbourhood-map-small.png",
      image2: "images/neighbourhood-map2-small.png"
    },
    {
      title: "Feed Reader",
      link: "https://github.com/Brianzchen/feedreader",
      dates: "July 2015",
      description: "Work in progress",
      image1: "images/197x148.gif",
      image2: "images/197x148.gif"
    }
  ]
}

/*appending projects info*/
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    formattedTitle = formattedTitle.replace("#", projects.projects[project].link);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedImage1 = HTMLprojectImage1.replace("%data%", projects.projects[project].image1);
    var formattedImage2 = HTMLprojectImage2.replace("%data%", projects.projects[project].image2);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedImage1);
    $(".project-entry:last").append(formattedImage2);
  }
}

var education = {
  "schools": [
    {
      "name": "University of Auckland",
      "location": "Auckland, New Zealand",
      "degree": "Bachelor of Science",
      "majors": ["Compsci", "Stats"],
      "dates": "March 2012 - February 2015"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-end Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "June 2015 - Present",
      "url": "https://www.udacity.com/"
    }
  ]
};

/*appending my education info*/
education.display = function() {
  $("#education").append(HTMLschoolStart);
  for (school in education.schools) {
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var schoolName = formattedName + formattedDegree;
    $(".education-entry:last").append(schoolName);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    for (major in education.schools[school].majors) {
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajors);
    }
  }
  for (courses in education.onlineCourses) {
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url).replace("#", education.onlineCourses[courses].url);

    var onlineName = formattedName + formattedSchool;
    $(".education-entry:last").append(onlineName);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedUrl);
  }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
