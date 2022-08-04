function loadkitchen() {
    fetch("http://localhost:3000/kitchen.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadkitchenserve() {
    fetch("http://localhost:3000/kitchen-serve.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadkitchendinner() {
    fetch("http://localhost:3000/kitchen-dinner.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadkitchenplates() {
    fetch("http://localhost:3000/kitchen-plates.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }
  
  function loadkitchentextile() {
    fetch("http://localhost:3000/kitchen-textile.html")
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

  function loadbedroompillow() {
    fetch("http://localhost:3000/bedroom-pillows.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadbedroomlamp() {
    fetch("http://localhost:3000/bedroom-lamp.html")
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

  function loadlivingroomdecore() {
    fetch("http://localhost:3000/livingroom-decore.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }
  function loadlivingroomchairs() {
    fetch("http://localhost:3000/livingroom-chairs.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }
  function loadlivingroomtables() {
    fetch("http://localhost:3000/livingroom-tables.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }
  function loadlivingroompaints() {
    fetch("http://localhost:3000/livingroom-paint.html")
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

  function loadkidsnewborn() {
    fetch("http://localhost:3000/kids-newborn.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadkidstextile() {
    fetch("http://localhost:3000/kids-textile.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadkidsaccessories() {
    fetch("http://localhost:3000/kids-accessories.html")
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

  function loadadminOrders() {
    fetch("http://localhost:3000/adminOrders.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadAddNewUser() {
    fetch("http://localhost:3000/adminNewUser.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadNewProducts() {
    fetch("http://localhost:3000/AddnewProducts.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

 function loadalert() {
  alert("User Successfuly Added!")
}
  
function loadorder() {
  alert("We've recieved your order! Thank you")}

  function loadadminUsers() {
    fetch("http://localhost:3000/adminUsers.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadOpenOrders() {
    fetch("http://localhost:3000/adminOpenOrders.html")
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

  function loadEditUsers() {
    fetch("http://localhost:3000/adminEditUsers.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
}

function loadCheckout() {
  fetch("http://localhost:3000/checkout.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("renderPage").innerHTML = html;
    });
}

  
function getval(){ //search by category name
  const val = document.querySelector('input').value;
  if (val.toLowerCase() == "kitchen") {loadkitchen();}
  if(val.toLowerCase() == "dinner"){loadkitchendinner();}
  if(val.toLowerCase() == "plate"){loadkitchenplates();}
  if(val.toLowerCase() == "kitchen textile"){loadkitchentextile();}
  if(val.toLowerCase() == "serve"){loadkitchenserve();}
  if (val.toLowerCase() == "livingroom"){loadlivingroom();}
  if (val.toLowerCase() == "cahir"){loadlivingroomchairs();}
  if (val.toLowerCase() == "decore"){loadlivingroomdecore();}
  if (val.toLowerCase() == "paint"){loadlivingroompaints();}
  if (val.toLowerCase() == "table"){loadlivingroomtables();}
  if (val.toLowerCase() == "kids"){loadkids();}
  if (val.toLowerCase() == "new born"){loadkidsnewborn();}
  if (val.toLowerCase() == "accessories"){loadkidsaccessories();}
  if (val.toLowerCase() == "kids textile"){loadkidstextile();}
  if (val.toLowerCase() == "bedroom"){loadbedroom();}
  if (val.toLowerCase() == "lamp"){loadbedroomlamp();}
  if (val.toLowerCase() == "pillow"){loadbedroompillow();}
  if (val.toLowerCase() != "kitchen" && val.toLowerCase() != "dinner" && val.toLowerCase() != "plate" && val.toLowerCase() != "kitchen textile" && val.toLowerCase() != "serve"
    && val.toLowerCase() != "livingroom" && val.toLowerCase() != "cahir" && val.toLowerCase() != "decore" && val.toLowerCase() != "paint" && val.toLowerCase() != "table"
    && val.toLowerCase() != "kids" && val.toLowerCase() != "new born" && val.toLowerCase() != "accessories" && val.toLowerCase() != "kids textile" && val.toLowerCase() != "bedroom"
    && val.toLowerCase() != "lamp" && val.toLowerCase() != "pillow") {
    alert('no '+ val+ ' product')
  } 
}

function addToCart(){

}