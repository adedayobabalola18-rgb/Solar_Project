      // THEMETOGGLE BUTTON

  const toggleBtn = document.getElementById("themeToggle");
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } 
    else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });







    // BILL RANGE SLIDER

const slider = document.getElementById("billRange");
const billDisplay = document.querySelector(".billValue");

// values (spans)
const monthly = document.querySelector(".dollar1");
const annual = document.querySelector(".dollar2");
const costReduction = document.querySelector(".dollar3");
const net = document.querySelector(".dollar4");

slider.addEventListener("input", function () {

    let bill = Number(slider.value);

    // show current bill value
    billDisplay.textContent = "₦" + bill.toLocaleString();

    // savings logic
    let savingsRate = 0.4; // 40% savings assumption

    let monthlySavings = bill * savingsRate;
    let annualSavings = monthlySavings * 12;

    // cost reduction (slightly lower due to system factors)
    let costReductionValue = annualSavings * 0.85;

    // net savings (after maintenance/cost deduction)
    let netSavings = annualSavings * 0.9;

    // update UI
    monthly.textContent = "₦" + monthlySavings.toLocaleString();
    annual.textContent = "₦" + annualSavings.toLocaleString();
    costReduction.textContent = "₦" + costReductionValue.toLocaleString();
    net.textContent = "₦" + netSavings.toLocaleString();

});






  

    // PAGE MOVE UP BUTTON 
  const moveTopBtn = document.getElementById("movetop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        moveTopBtn.style.display = "block";
    } else {
        moveTopBtn.style.display = "none";
    }
});

moveTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: "smooth"})
});








// SIDEBAR

function showsidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex'
}


function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none'
}







// CONTACT FORM

const formButton = document.querySelector(".submit-button");

const successMessage = document.getElementById("successMessage");

const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".mail");
const phoneInput = document.querySelector(".number");
const messageInput = document.querySelector("textarea");

formButton.addEventListener("click", function(e){

    e.preventDefault();



    // CHECKS FOR EMPTY FIELDS

    if(
        nameInput.value === "" ||
        emailInput.value === "" ||
        phoneInput.value === "" ||
        messageInput.value === ""
    ){
        alert("Please fill all fields");
        return;
    }

    successMessage.style.display = "flex";

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);

    // CLEARING THE FIELDS AFTER SUBMISSION

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";

});















const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_nuwdppn",
        "template_bs8n3eo",
        this
    )

    .then(() => {

        document.getElementById("successMessage").style.display = "block";

        form.reset();

    })

    .catch((error) => {

        alert("Failed to send message");

        console.log(error);

    });

});




