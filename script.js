



//deals with forms
const form = document.getElementById("myForm")
console.log(form)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputField = document.getElementById("textarea");
if(inputField.value === " ") {
  alert(" Please fill up the input field.")
}


  formData = inputField.value
console.log(formData);



inputField.value = " ";
})

























//deals with light mode
const sun = document.getElementById("sun");
sun.addEventListener("click", () => {
  document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

})

//deals with dark mode
const moon = document.getElementById("moon");
moon.addEventListener("click", () => {
  document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';

})

 
const logIn = document.getElementById("logIn");
console.log(logIn)
logIn.addEventListener("click", () => {
  console.log("logIn clicked");
  

})




















const imgContainer = document.querySelectorAll(".imgContainer");

imgContainer.forEach(container => {
const button = document.createElement("button");
button.innerHTML ="Add to Cart";
button.classList.add("buttonImg");

 button.style.backgroundColor = "orange";
 button.style.borderRadius = "15px";

button.addEventListener("click", handleButton);

container.appendChild(button);
}) 

 function handleButton() {
  const cartDisplay = document.getElementById("cartDisplay");
  

 }