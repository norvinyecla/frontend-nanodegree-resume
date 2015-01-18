var name = 'Norvin Yecla';
var role = 'Frontend Developer';
var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var bio = {'name':'Norvin Yecla', 'role': 'Frontend Web Developer', 'email':'hello@norvinyecla.com', 'mobile': '+63926 756 8101', 'twitter': 'norvinyecla', 'github': 'norvinyecla', 'blog': 'blog.norvinyecla.com', 'picture-url':'http://placehold.it/150x150', 'welcome-message':'Hello!', 'skills':'HTML, CSS, Javascript, PHP, Python, Git, UX Design, UX Research'};



var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio['welcome-message']);
var formattedPictureUrl = HTMLbioPic.replace('%data%', bio['picture-url']);
var formattedMobile = HTMLmobile.replace('%data%', bio['mobile']);
var formattedTwitter= HTMLtwitter.replace('%data%', bio['twitter']);
var formattedGithub = HTMLgithub.replace('%data%', bio['github']);
var formattedBlog = HTMLblog.replace('%data%', bio['blog']);
var formattedLocation = HTMLlocation.replace('%data%', bio['location']);
var formattedSkills = HTMLskills.replace('%data%', bio['skills']);

$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedTwitter);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedBlog);
$('#topContacts').append(formattedLocation);
$('#header').append(formattedWelcomeMsg);
$('#header').append(formattedPictureUrl);
$('#header').append(HTMLskillsStart);
$('#skills').prepend(formattedSkills);



// $('#main').append(bio);
