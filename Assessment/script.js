

font_incre = document.getElementById("fontincre");
font_decre = document.getElementById("fontdecre");

var navbarLinks = document.querySelectorAll(".menu a");
const darkMode = document.querySelector("#darkmode");
var menu = document.querySelector('.menu');
var content_parent = document.querySelector('.content-parent');
var contact_content_parent = document.querySelector('.contact-content-parent');
var event_detail_parent = document.querySelector('.event-detail-parent');

var content_child = document.querySelector('.content-child');
var content_child_2 = document.querySelector('.content-child-2');
var content_child_3 = document.querySelector('.content-child-3');
var content_title = document.querySelector('.content-title');
var content_title_2 = document.querySelector('.content-title-2');
var content_title_3 = document.querySelector('.content-title-3');
var content_text = document.querySelector('.content-text');
var content_text_2 = document.querySelector('.content-text-2');
var content_text_3 = document.querySelector('.content-text-3');
let font_size = parseInt(localStorage.getItem('font_size')) || 18;
let darkmodeswitch = parseInt(localStorage.getItem('darkmodeswitch')) || 0;
let footer = document.querySelector('.footer');
let event_tabs = document.querySelectorAll('.event-tab');
let event_title = document.querySelector('.event-title');

contact_form = document.querySelector('.contact-form');
var fullnameError = document.getElementById("fullname-error");
var emailError = document.getElementById("email-error");
var phonenumberError = document.getElementById("phonenumber-error");
var fullname_valid = false;
var email_valid = false;
var phonenumber_valid = false;
var contactData = JSON.parse(localStorage.getItem('contactData')) || [];
var contact_list = {};



if (window.location.href.includes("index.html")) {
	function initialise() {
		
		
			navbarLinks.forEach(function(link) {
			link.style.fontSize = font_size + "px";
			});




		if(darkmodeswitch == 1){

			menu.style.backgroundColor = '#36393e';
			navbarLinks.forEach(function(link) {
			link.style.color = "white";
			});
			content_parent.style.backgroundColor = '#424549';
			content_child.style.backgroundColor = '#424549';
			content_title.style.color = 'white';
			content_text.style.color = 'white';
			content_child_2.style.backgroundColor = '#424549';
			content_title_2.style.color = 'white';
			content_text_2.style.color = 'white';
			content_child_3.style.backgroundColor = '#424549';
			content_title_3.style.color = 'white';
			content_text_3.style.color = 'white';
			
			
			
		}
		else if(darkmodeswitch == 0){
			
	   
			menu.style.backgroundColor = 'white';
			navbarLinks.forEach(function(link) {
			link.style.color = "black";
			});
			content_parent.style.backgroundColor = '#FAF9F6';
			content_child.style.backgroundColor = '#FAF9F6';
			content_title.style.color = 'black';
			content_text.style.color = 'black';
			content_child_2.style.backgroundColor = '#FAF9F6';
			content_title_2.style.color = 'black';
			content_text_2.style.color = 'black';
			content_child_3.style.backgroundColor = '#FAF9F6';
			content_title_3.style.color = 'black';
			content_text_3.style.color = 'black';
		}
	}
}

if (window.location.href.includes("events.html")) {
	function initialise() {
		
		
			navbarLinks.forEach(function(link) {
			link.style.fontSize = font_size + "px";
			});




		if(darkmodeswitch == 1){

			menu.style.backgroundColor = '#36393e';
			navbarLinks.forEach(function(link) {
			link.style.color = "white";
			});
			content_parent.style.backgroundColor = '#424549';

			
			event_tabs.forEach(function(tabs) {
			tabs.style.backgroundColor = '#36393e'
			tabs.style.color = "white";
			});
			event_title.style.color = 'white';
			
		}
		else if(darkmodeswitch == 0){
			
	   
			menu.style.backgroundColor = 'white';
			navbarLinks.forEach(function(link) {
			link.style.color = "black";
			});
			content_parent.style.backgroundColor = '#FAF9F6';
			
			
			
			event_tabs.forEach(function(tabs) {
			tabs.style.backgroundColor = 'white'
			tabs.style.color = "black";
			});
			event_title.style.color = 'black';
		}
	}
}

if (window.location.href.includes("contact.html")) {
	function initialise() {
		
		
			navbarLinks.forEach(function(link) {
			link.style.fontSize = font_size + "px";
			});




		if(darkmodeswitch == 1){

			menu.style.backgroundColor = '#36393e';
			navbarLinks.forEach(function(link) {
			link.style.color = "white";
			});
			contact_content_parent.style.backgroundColor = '#424549';
			contact_form.style.backgroundColor = '#36393e';
			contact_form.style.color = "white";


			
		}
		else if(darkmodeswitch == 0){
			
	   
			menu.style.backgroundColor = 'white';
			navbarLinks.forEach(function(link) {
			link.style.color = "black";
			});
			contact_content_parent.style.backgroundColor = '#FAF9F6';
			contact_form.style.backgroundColor = 'white';
			contact_form.style.color = "black";
			
			


		}
	}
	
	
	
	
	function contact_loadup(contact) {
		var contact_row = document.createElement('div');
		contact_row.classList.add('contact-row');
	
		var name_para = document.createElement('p');
		name_para.textContent = "Name: " + contact.name;

		var email_para = document.createElement('p');
		email_para.textContent = "Email: " + contact.email;

		var phone_para = document.createElement('p');
		phone_para.textContent = "Phone: " + contact.phone;
		
		var delete_contact = document.createElement('button');
		delete_contact.textContent = "delete";
		
		delete_contact.addEventListener('click', function(){
			
			
			delete_contact_row(contact_row);

			
		});

		






		contact_row.appendChild(name_para);
		contact_row.appendChild(email_para);
		contact_row.appendChild(phone_para);
        contact_row.appendChild(delete_contact);




		contact_form.appendChild(contact_row);
	}


	contactData.forEach(function (contact) {
		
		
		
		contact_loadup(contact);
	});

}






function delete_contact_row(contactrow){
	
	var contactData = JSON.parse(localStorage.getItem('contactData')) || [];
	
	var name = contactrow.querySelector('p:nth-child(1)').textContent.split("Name: ")[1];
    var email = contactrow.querySelector('p:nth-child(2)').textContent.split("Email: ")[1];
    var phone = contactrow.querySelector('p:nth-child(3)').textContent.split("Phone: ")[1];
	

    var index = -1;
	
    for (var i = 0; i < contactData.length; i++) {
        var contact = contactData[i];
        if (contact.name == name && contact.email == email && contact.phone == phone) {
			
			
			
            index = i;
			
			
        }
    }
	

    if (index !== -1) {
		
		
        contactData.splice(index, 1);

        localStorage.setItem('contactData', JSON.stringify(contactData));
    }
	
	
	
	
	contactrow.remove();

}

function fontincrease(){
	
	if(font_size < 32){
	
	
	font_size = font_size + 2;
	navbarLinks.forEach(function(link) {
        link.style.fontSize = font_size + "px";
      });
	}
	localStorage.setItem('font_size', font_size);
	
	
	
}

function fontdecrease(){
	
	if(font_size > 8){
	
	
	font_size = font_size - 2;
	navbarLinks.forEach(function(link) {
        link.style.fontSize = font_size + "px";
      });
	}
	localStorage.setItem('font_size', font_size);

	
	
	
}


if (window.location.href.includes("event-detail.html")) {
	function initialise() {
		
		
			navbarLinks.forEach(function(link) {
			link.style.fontSize = font_size + "px";
			});




		if(darkmodeswitch == 1){

			menu.style.backgroundColor = '#36393e';
			navbarLinks.forEach(function(link) {
			link.style.color = "white";
			});
			event_detail_parent.style.backgroundColor = '#424549';
			event_detail_parent.style.color = "white";
			

			
		}
		else if(darkmodeswitch == 0){
			
	   
			menu.style.backgroundColor = 'white';
			navbarLinks.forEach(function(link) {
			link.style.color = "black";
			});
			event_detail_parent	.style.backgroundColor = '#FAF9F6';
			event_detail_parent.style.color = "black";
			
			
			

		}
	}
}












if (window.location.href.includes("index.html")) {
	function darkmodetoggle(){
		
		if(darkmodeswitch == 0){

			menu.style.backgroundColor = '#36393e';
			navbarLinks.forEach(function(link) {
			link.style.color = "white";
			});
			content_parent.style.backgroundColor = '#424549';
			content_child.style.backgroundColor = '#424549';
			content_title.style.color = 'white';
			content_text.style.color = 'white';
			content_child_2.style.backgroundColor = '#424549';
			content_title_2.style.color = 'white';
			content_text_2.style.color = 'white';
			content_child_3.style.backgroundColor = '#424549';
			content_title_3.style.color = 'white';
			content_text_3.style.color = 'white';
			
			
			
			darkmodeswitch = 1;
			localStorage.setItem('darkmodeswitch', darkmodeswitch);

		}
		else if(darkmodeswitch == 1){
			
	   
			menu.style.backgroundColor = 'white';
			navbarLinks.forEach(function(link) {
			link.style.color = "black";
			});
			content_parent.style.backgroundColor = '#FAF9F6';
			content_child.style.backgroundColor = '#FAF9F6';
			content_title.style.color = 'black';
			content_text.style.color = 'black';
			content_child_2.style.backgroundColor = '#FAF9F6';
			content_title_2.style.color = 'black';
			content_text_2.style.color = 'black';	
			content_child_3.style.backgroundColor = '#FAF9F6';
			content_title_3.style.color = 'black';
			content_text_3.style.color = 'black';
			
			
			darkmodeswitch = 0;
			localStorage.setItem('darkmodeswitch', darkmodeswitch);

		}

		
		
	}
}


if (window.location.href.includes("events.html")) {
	function darkmodetoggle(){
		
		if(darkmodeswitch == 0){

			menu.style.backgroundColor = '#36393e';
			navbarLinks.forEach(function(link) {
			link.style.color = "white";
			});
			content_parent.style.backgroundColor = '#424549';


			event_tabs.forEach(function(tabs) {
			tabs.style.backgroundColor = '#36393e'
			tabs.style.color = "white";
			});
			event_title.style.color = 'white';
			
			darkmodeswitch = 1;
			localStorage.setItem('darkmodeswitch', darkmodeswitch);

		}
		else if(darkmodeswitch == 1){
			
	   
			menu.style.backgroundColor = 'white';
			navbarLinks.forEach(function(link) {
			link.style.color = "black";
			});
			content_parent.style.backgroundColor = '#FAF9F6';

			event_tabs.forEach(function(tabs) {
			tabs.style.backgroundColor = 'white'
			tabs.style.color = "black";
			});
			event_title.style.color = 'black';
			
			darkmodeswitch = 0;
			localStorage.setItem('darkmodeswitch', darkmodeswitch);

		}

		
		
	}
}
if (window.location.href.includes("event-detail.html")) {
	function darkmodetoggle(){
		
		if(darkmodeswitch == 0){

			menu.style.backgroundColor = '#36393e';
			navbarLinks.forEach(function(link) {
			link.style.color = "white";
			});
			event_detail_parent	.style.backgroundColor = '#424549';
			event_detail_parent.style.color = "white";



			
			darkmodeswitch = 1;
			localStorage.setItem('darkmodeswitch', darkmodeswitch);

		}
		else if(darkmodeswitch == 1){
			
	   
			menu.style.backgroundColor = 'white';
			navbarLinks.forEach(function(link) {
			link.style.color = "black";
			});
			event_detail_parent	.style.backgroundColor = '#FAF9F6';
			event_detail_parent.style.color = "black";
			
			darkmodeswitch = 0;
			localStorage.setItem('darkmodeswitch', darkmodeswitch);

		}

		
		
	}
}

if (window.location.href.includes("contact.html")) {
	
	
function darkmodetoggle(){
		
		if(darkmodeswitch == 0){

			menu.style.backgroundColor = '#36393e';
			navbarLinks.forEach(function(link) {
			link.style.color = "white";
			});
			contact_content_parent.style.backgroundColor = '#424549';
			contact_form.style.backgroundColor = '#36393e';
			contact_form.style.color = "white";



			
			darkmodeswitch = 1;
			localStorage.setItem('darkmodeswitch', darkmodeswitch);

		}
		else if(darkmodeswitch == 1){
			
	   
			menu.style.backgroundColor = 'white';
			navbarLinks.forEach(function(link) {
			link.style.color = "black";
			});
			contact_content_parent.style.backgroundColor = '#FAF9F6';
			contact_form.style.backgroundColor = 'white';
			contact_form.style.color = "black";


			
			darkmodeswitch = 0;
			localStorage.setItem('darkmodeswitch', darkmodeswitch);

		}

		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	


function formsubmit(){
	
	event.preventDefault();

	var name = document.getElementsByName("fullname")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var phone = document.getElementsByName("phonenumber")[0].value
	var name_input = document.getElementById("fullname");
	var email_input = document.getElementById("email");
	var phone_input = document.getElementById("phonenumber");


	
	if (name.trim() == ""){
		
		fullnameError.textContent = "Name cannot be empty";
		name_input.classList.add('invalid-input');
			
	}
	
	else if (name.length < 2 || name.length > 35){
		
		
		fullnameError.textContent = "Name does must be >2 and >35";
		name_input.classList.add('invalid-input');
		
		
	}
	else if(!/^[A-Za-z]+ [A-Za-z]+$/.test(name)){
		
		fullnameError.textContent = "Name must not include special characters and must be your full name";
		name_input.classList.add('invalid-input');
		
		
		
	}
	
	
	else {
		
		fullnameError.textContent = "";
		name_input.classList.remove('invalid-input');
		fullname_valid = true;
			
	}


	if (email.trim() == ""){
		
		
		email_input.classList.add('invalid-input');
		emailError.textContent = "email cannot be empty";

			
	}
	 else if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/.test(email)) {
		
		email_input.classList.add('invalid-input');
		emailError.textContent = "Email must follow correct email format";

		
	}	
	else {
		
		email_input.classList.remove('invalid-input');
		emailError.textContent = "";
		email_valid = true;
	}


	
	if (phone.trim() == ""){
		
		
		phone_input.classList.add('invalid-input');
		phonenumberError.textContent = "phone number cannot be empty";

			
	}
	
	else if(!/^\d{11}$/.test(phone)){
		
		
		
		phone_input.classList.add('invalid-input');
		phonenumberError.textContent = "phone number must be 11 digits";
		
		
		
		
		
	}

	else{
		phone_input.classList.remove('invalid-input');
		phonenumberError.textContent = "";
		phonenumber_valid = true;
		
		
	}
	
	
	
	
	formvalid(name, email, phone);

	

}



function formvalid(name, email, phone) {
	
	
	
	if(fullname_valid == true && email_valid == true && phonenumber_valid == true){
		
		
        var contactData = JSON.parse(localStorage.getItem('contactData')) || [];
        contactData.push({name,email,phone });
		
        localStorage.setItem('contactData', JSON.stringify(contactData));

		
		

		
		var contact_row = document.createElement('div');
		contact_row.classList.add('contact-row');



        var name_para = document.createElement('p');
        name_para.textContent = "Name: " + name;

        var email_para = document.createElement('p');
        email_para.textContent = "Email: " + email;

        var phone_para = document.createElement('p');
        phone_para.textContent = "Phone: " + phone;

		var delete_contact = document.createElement('button');
		delete_contact.textContent = "delete";
		
		delete_contact.addEventListener('click', function(){
			
			
			delete_contact_row(contact_row);

			
		});



        contact_row.appendChild(name_para);
        contact_row.appendChild(email_para);
        contact_row.appendChild(phone_para);
        contact_row.appendChild(delete_contact);
		contact_form.appendChild(contact_row);  
		
		contact_form.reset();
		
		
		
		
	}

}








}



window.onload = initialise;
font_incre.addEventListener('click',fontincrease);
font_decre.addEventListener('click',fontdecrease);
darkMode.addEventListener("click", darkmodetoggle);
contact_form.addEventListener('submit',formsubmit);