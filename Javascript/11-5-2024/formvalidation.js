function validate() {
    var un = document.getElementById("uname").value
    var unp = /^[a-zA-Z]+$/

    var ph = document.getElementById("phone").value
    var php = /^[6-9]{1}[0-9]{9}$/

    if (un == "") {
        document.getElementById("msg").innerHTML = "Enter the Username"
        return false
    }
    if (un.match(unp))
    true
    else
    {
        document.getElementById("msg").innerHTML = "Username should contain alphabets only"
        return false
    }
    if (un.length < 3) {
        document.getElementById("msg").innerHTML = "Username should contain minimum 3 characters"
        return false
    }
    if (un.length > 8) {
        document.getElementById("msg").innerHTML = "Username should contain maximum 8 characters"
        return false
    }

    if(ph=""){
        document.getElementById("msg1").innerHTML = "Enter phone number"
        return false
    }
    if(!(ph.match(php))){
        document.getElementById("msg1").innerHTML = "Invalid phone number"
        return false;
    }

}

