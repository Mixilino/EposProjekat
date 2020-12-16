function validateForm() {
    let x = document.forms["myForm"]["ime"].value;
    if (x.length < 3) {
        alert("Ime mora imati bar 3 karaktera");
        return false;
    }
    x = document.forms["myForm"]["prezime"].value;
    if (x.length < 3) {
        alert("Prezime mora imati bar 3 karaktera");
        return false;
    }
    x = document.getElementById("mejl").value;
    if (!proveriMejl(x)) {
        alert("Mejl nije ispravan");
        return false;
    }
    x = document.forms["myForm"]["telefon"].value;
    if (x.length>15 || x.length<5) {
        alert("Broj telefona nije validan");
        return false;
    }
    x = document.forms["myForm"]["poruka"].value;
    console.log(x.length)
    if (x.length<=1) {
        alert("Unesite poruku");
        return false;
    }
    if(document.forms["myForm"]["check"].checked === false){
        alert("Prihvatite uslove koriscenja");
        return false;
    }
    alert("Poslali ste poruku");
    console.log("AJAX se kao poziva");
    resetForm();
    return true;
}

function proveriMejl(mail){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}

function resetForm(){
    document.forms["myForm"]["ime"].value="";
    document.forms["myForm"]["prezime"].value="";
    document.forms["myForm"]["mejl"].value="";
    document.forms["myForm"]["telefon"].value="";
    document.forms["myForm"]["poruka"].value="";
    triggerUslove();
    return true;
}
function triggerUslove(){
    document.forms["myForm"]["check"].checked = false;
}