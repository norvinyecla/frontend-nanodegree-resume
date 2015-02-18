var bio = {
	"name":"Norvin Yecla", 
	"role": "Software Developer", 
	"contacts": {
        "contact-generic": "I do not know what to put in here",
		"email":"norvin@norvinyecla.com", 
		"mobile": "+63926 756 8101", 
		"twitter": "norvinyecla", 
		"github": "norvinyecla", 
		"blog": "blog.norvinyecla.com",
        "location": "Dasmariñas City",
	},
	
	"picture-url":"http://placehold.it/150x150", 
	"welcome-message":"Hello! My name is Norvin, and I'm a software developer. My interests lie in mobile and frontend web development. ", 
	"skills":["HTML", "CSS", "Javascript", "PHP", "Python", "Git"]
};

var work = { 
	"jobs" : [{
		"employer": "GlyphStudios Inc",
		"position": "Software Engineer",
		"years": "May 2013 to present",
		"location": "Ortigas Center, Pasig City",
        "description": "Maintained legacy SMS applications using a combination of WAP, MMS and SMS technologies; <br>Developed content management systems for company's internal use; <br> Assisted in creating, maintaining and creating SMS and voice applications using custom PHP APIs, libraries and PBX"
	},
	{
		"employer": "KLab Cyscorpions",
		"position": "Mobile Apps Intern",
		"years": "Apr 2012 to May 2012",
		"location": "Legazpi Village, Makati City",
        "description": "Developed a video recording and a location service Android app; <br> Tested a set of alpha-version mobile Android apps against company's quality metrics"
	}
],
    "display": function(){
        for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedJobTitle + formattedYears + formattedLocation + formattedDescription);
    }
}
};

var projects = {
	"projects" : [
		{
			"title": "Coral Identification System - Undergraduate Research Project", 
			"dates": "Jun 2012 to Apr 2013",
			"description": "Created an Android app for crowdsourcing information to be fed into a CMS and an image classification program"
		},
        {
            "title": "JeePS 2012",
            "dates": "Jun 2012 to Oct 2012", 
            "description": "Created an Android app for showing jeepney routes inside Makati City"
        }
		
	],
    "display": 
        function (){
        for (project1 in projects.projects){
            var formattedProjTitle = HTMLprojectTitle.replace("%data%",projects.projects[project1].title);
            var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project1].dates);
            var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.projects[project1].description);
            // var formattedProjImg =  HTMLprojectImage.replace("%data%", project.image);

            $("#projects").append(HTMLprojectStart)
            $(".project-entry:last").append(formattedProjTitle + formattedProjDates + formattedProjDesc);
        }
    }
};

var education = { 
	"schools": [
	{
	"name": "University of the Philippines Diliman",
	"location": "Diliman, Quezon City",
	"degree": "Bachelor's Degree",
	"major": "Computer Science",
	"years": "2009 to 2014"
	}
	],
    "display": function(){
        for (school in education.schools){
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name)
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree)
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years)
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major)

            $("#education").append(HTMLschoolStart)
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor)
        }
    }
};

function inName(fullname){
    var names = fullname.trim().split(" ");
    return names[0][0].toUpperCase() + names[0].slice(1) + " " +  names[1].toUpperCase();
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHeader = formattedName + formattedRole;

var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contacts["contact-generic"]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBiopic = HTMLbioPic.replace("%data%", bio["picture-url"]);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome-message"]);

$("#header").prepend(formattedHeader);

// $("#topContacts").append(formattedContactGeneric);
$("#topContacts").append(formattedEmail + formattedTwitter + formattedGithub + formattedBlog + formattedLocation);

$("#footerContacts").append(formattedEmail + formattedTwitter + formattedGithub + formattedBlog + formattedLocation);

$("#header").append(formattedBiopic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length != 0){
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++){
        formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
}

work.display();
education.display();
projects.display();

// $('#main').append(internationalizeButton);


$('#mapDiv').append(googleMap);
