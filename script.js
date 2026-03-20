//your JS code here. If required.

const btn = document.getElementById("submit");
btn.addEventListener('click',(e)=>{
	// e.preventDefault();
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const PhoneNumber = document.getElementById("PhoneNumber").value;
const EmailId = document.getElementById("EmailId").value;
if (!firstName || !lastName || !PhoneNumber || !EmailId) {
  alert("Please fill all fields");
  return; 
}
alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${PhoneNumber} Email Id: ${EmailId}`);
});