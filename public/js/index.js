function loadkitchen() {
    fetch("http://localhost:3000/kitchen.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }


  function loadlogin() {
    fetch("http://localhost:3000/login.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }



  function loadbedroom() {
    fetch("http://localhost:3000/bedroom.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadlivingroom() {
    fetch("http://localhost:3000/livingroom.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadkids() {
    fetch("http://localhost:3000/kids.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }
  function loadcart() {
    fetch("http://localhost:3000/cart.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadcheckout() {
    fetch("http://localhost:3000/checkout.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  