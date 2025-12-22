document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("alertMessage").style.display = "none";
    let isValid = true;
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      isValid = false;
    }
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters long.";
      isValid = false;
    }
    if (isValid) {
      alert("Form submitted successfully!");
    } else {
      document.getElementById("alertMessage").textContent =
        "Please fix the errors in the form.";
      document.getElementById("alertMessage").style.display = "block";
    }
  });
function handleRatingClick() {
  var names = prompt("Please enter your name:");
  var rating = prompt("Please enter your rating:");
  if (names && rating) {
    var reviewContainer = document.getElementById("reviews");
    var reviewBlock = `
            <div class="snip">
                <figcaption>
                    <blockquote>
                        <p>${rating}</p>
                    </blockquote>
                    <h3>${names}</h3>
                </figcaption>
            </div>
        `;
    reviewContainer.innerHTML += reviewBlock;
  } else {
    alert("Both name and rating are required.");
  }
}
window.onload = function () {
  document
    .getElementById("rating")
    .addEventListener("click", handleRatingClick);
};
