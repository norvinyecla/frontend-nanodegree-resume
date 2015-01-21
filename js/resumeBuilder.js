var bio = {
	"name":"Norvin Yecla", 
	"role": "Frontend Web Developer", 
	"contacts": {
        "contact-generic": "I do not know what to put in here",
		"email":"ngyecla@outlook.com", 
		"mobile": "+63926 756 8101", 
		"twitter": "norvinyecla", 
		"github": "norvinyecla", 
		"blog": "blog.norvinyecla.tk"
	},
	"location": "Dasmarinas City, Cavite | Quezon City, Metro Manila",
	"picture-url":"http://placehold.it/150x150", 
	"welcome-message":"Hello!", 
	"skills":["HTML", "CSS", "Javascript", "PHP", "Python", "Git"]
};

var work = { 
	"jobs" : [{
		"employer": "GlyphStudios Inc",
		"position": "Software Engineer",
		"years": "May 2013 to present",
		"city": "Ortigas Center, Pasig City, Metro Manila",
        "description": "Maintained legacy SMS applications using a combination of WAP, MMS and SMS technologies; <br>Developed content management systems for company's internal use; <br> Assisted in creating, maintaining and creating SMS and voice applications using custom PHP APIs, libraries and PBX"
	},
	{
		"employer": "KLab Cyscorpions",
		"position": "Mobile Apps Intern",
		"years": "Apr 2012 to May 2012",
		"city": "Legaspi Village, Makati City, Metro Manila",
        "description": "Developed a video recording and a location service Android app; <br> Tested a set of alpha-version mobile Android apps against company's quality metrics"
	}
]
};
var projects = {
	"projects" : [
		{
			"title": "Coral Identification System", 
			"dates": "Jun 2012 to Apr 2013",
			"description": "Created an Android app for crowdsourcing information to be fed into a CMS and an image classification program"
		},
		{
			"title": "JeePS",
			"dates": "Jun 2012 to Oct 2012", 
			"description": "Created an Android app for showing jeepney routes inside Makati City"
		}
	]
};

var education = { 
	"schools": [
	{
	"name": "University of the Philippines Diliman",
	"city": "Quezon City",
	"degree": "Bachelors",
	"major": "Computer Science",
	"years": "2009 to 2014"
	}
	]
};

function displayWork(){

    for (job in work.jobs){
    	$("#workExperience").append(HTMLworkStart);

    	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    	var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    	$(".work-entry:last").append(formattedEmployer + formattedJobTitle + formattedYears + formattedLocation + formattedDescription);
    }

    
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHeader = formattedName + formattedRole;

var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contacts["contact-generic"]);
var formattedEmail = HTMLmobile.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);

var formattedBiopic = HTMLbioPic.replace("%data%", bio["picture-url"]);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome-message"]);

$("#header").append(formattedHeader);
$("#header").append(formattedBiopic);
$("#header").append(formattedContactGeneric);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
$("#header").append(formattedBlog);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length != 0){
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++){
        formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
}

displayWork();



// // $("#main").append(bio);
