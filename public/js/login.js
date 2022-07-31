function login() {
    let myForm = document.getElementById('login_Form')

    myForm.addEventListener('submit', function (e) {
        e.preventDefault()

        const formData = new FormData(this)

        fetch('login.html', {
            method: 'post',
            body: formData,
        })
            .then(function (response) {
                return response.text()
            })
            .then(function (text) {
                console.log(text)
            })
    })
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
