import React from "react";
import './Contact.css';

var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
var alertTrigger = document.getElementById("liveAlertBtn");

function alert(message, type) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  alertPlaceholder.append(wrapper);
}

if (alertTrigger) {
  alertTrigger.addEventListener("click", function () {
    alert("Nice, you triggered this alert message!", "success");
  });
}

const Contact = () => {
  return (
    <>
      <div className="container intro">
          <h2>Hey wanna have a chat ?</h2>
      </div>
      <div className="container cnt">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Your email address ?
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Your email is safe with me !
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              What's your message ?
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div id="liveAlertPlaceholder"></div>
          <button type="button" class="btn btn-primary" id="liveAlertBtn">
            Show live alert
          </button>

          {/* <button type="submit" class="btn btn-primary">
            Submit
          </button> */}
        </form>
      </div>
    </>
  );
};

export default Contact;
