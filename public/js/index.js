function fetchPage(whatPage) { //fetch page
  fetch(whatPage)
    .then((response) => response.text())
    .then((data) => (document.getElementById("renderpage").innerHTML = data));
}

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
function loadcart() {
  fetch("http://localhost:3000/cart.html")
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

  function loadlogin() {
    fetch("http://localhost:3000/login.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }



  function loadadminEditUsers() {
    fetch("http://localhost:3000/adminEditUsers.html")
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

  function loadCheckout() {
    fetch("http://localhost:3000/checkout.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadadminOpenOrders() {
    fetch("http://localhost:3000/adminOpenOrders.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  function loadOrderCompleted() {
    fetch("http://localhost:3000/OrderCompleted.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        document.getElementById("renderPage").innerHTML = html;
      });
  }

  /* ADMIN JS */


function showUsers() { // create table to see all the exist users
  fetch("/getusers")
    .then((response) => response.text())
    .then((data) => {
      var userTypes = JSON.parse(data);
      var myTables = `<table class="styled-table-openOrders" >
          <tr>
          <th style="width:100px">User Name </th>
          <th style="width:100px">Password</th>
          <th style="width:100px">Delete</th>
      </tr>
  </table>`;
     userTypes.forEach((element) => {
        myTables += ` <form action="/delete">
                  <table class="styled-table-openOrders" >
 
                      <tr>
                          <td style="width:130px"><input type="hidden" name="name" value="${element.user}">${element.user}</td>
                          <td style="width:130px"><input type="hidden" name="password" value="${element.password}">${element.password}</td>
                          <td> <button onclick="deleteUser()"> Delete User</button></td>
                          
                      </tr>
                   
                      </table>
                      </form>
                  `;
      });
      document.getElementById("activeUsers").innerHTML = myTables;
    });
}



function loadalert2() {
  alert("Order Successfuly Send!")
}


function showOpenOrders() { // create table to see all the open orders
  fetch("/getOpenOrders")
    .then((response) => response.text())
    .then((data) => {
      var OrdersTypes = JSON.parse(data);
      var myTables = `<table class="styled-table-openOrders" >
          <tr>
          <th style="width:100px">Name </th>
          <th style="width:100px">Address</th>
          <th style="width:100px">City</th>
          <th style="width:100px">Status</th>
          <th style="width:130px">Order date</th>
          <th style="width:100px">Order_close</th>

      </tr>
  </table>`;
      OrdersTypes.forEach((element) => {
        myTables += ` <form action ="/getclose">
                  <table class="styled-table-openOrders" >
 
                      <tr>
                      <td><input type="hidden" name="_id" value="${element._id}></td>
                          <td style="width:100px"><input type="hidden" name="name" value="${element.first_name}">${element.first_name}</td>
                          <td style="width:130px">${element.address}</td>
                          <td style="width:100px">${element.payment}</td>
                          <td style="width:100px">${element.status}</td>
                          <td style="width:100px">${element.order_date}</td>
                          <td> <button onclick="closeOrder()"> Close order</button></td>
                          
                      </tr>
                   
                      </table>
                      </form>
                  `;
      });
      document.getElementById("OpenOrders").innerHTML = myTables;
    });
}



/* Products */ 

function showProducts() { //create table for iWatch products
  fetch("/getproduct")
    .then((response) => response.text())
    .then((data) => {
      var productTypes = JSON.parse(data);
      var myTables = `<table class="styled-table">
        <tr>
        <th></th>
        <th>Name</th>
        <th>Color</th>
        <th>Image</th>
        <th>Price $</th>
        <th>Quantity</th>
        <th> </th>
      
    </tr>
</table>`;
      productTypes.forEach((element) => {
        myTables += `
        <datalist id="quantity">
        <option value ="1">
        <option value ="2">
        <option value ="3">
        <option value ="4">
        </datalist>
        <form action="/addNewOrder">
  <table class="styled-table" >
 
      <tr>
          <td><input type="hidden" name="name" value="${element.Name}">${element.Name}</td>
          <td><input type="hidden" name="color" value="${element.Category}">${element.Category}</td>
         
          <td ><input type="hidden" name="img" value="${element.Img}">
          <img src="./img/${element.Img}.jpg" alt="${element.Img}" width="150" height="120">
          </td>
          <td> <input type="hidden" name="price" value="${element.Price}">${element.Price}</td>
          <td>
          <input list="quantity" id="quantity" placeholder="quantity" name="quantity" required></td>
          <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
      </tr>
      </form>
      </table>
                `;
      });
      document.getElementById("myProduct").innerHTML = myTables;
    });
}


function showorder() { //show the cart
  fetch("/getorder")
    .then((response) => response.text())
    .then((data) => {
      var Types = JSON.parse(data);
      var myTables = `
      <table class="styled-table">
                <tr>
                <th> Name </th>
                <th>&nbsp Image</th>
                <th>&nbsp Price $</th>
                <th>&nbsp Quantity</th>
                <th>&nbsp Total</th>
              
            </tr>
        </table>
        `;
      Types.forEach((element) => {
        myTables += ` 
                <table class="styled-table" >
                    <tr>
                    <td><input type="hidden" name="nameProduct" value="${element.Name}">${element.Name}</td>
                        <td ><input type="hidden" name="img" value="${element.Img}">
                        <img src="./img/${element.Img}.jpg" alt="${element.Img}" width="150" height="120">
                        </td>
                        <td><input type="hidden" name="priceProduct" value="${element.Price}"> ${element.Price}</td>
                        <td><input type="hidden" name="quantityProduct" value="${element.quantity}"> ${element.quantity}</td>
                        <td><input type="hidden" name="total" value="${element.total}"> ${element.total}</td>
                    </tr>
                    </table>
                    `; 
         
                    
      });
      document.getElementById("myOrder").innerHTML = myTables;
    });
}