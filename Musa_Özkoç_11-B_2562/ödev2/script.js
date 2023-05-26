function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        document.getElementById("message").innerHTML = "Bak Güzel Kardeşim Tarih Gir!";
        return false;
    } else {

        var month_diff = Date.now() - dob.getTime();

        var age_dt = new Date(month_diff);
 
        var year = age_dt.getUTCFullYear();

        var age = Math.abs(year - 1970);

        return document.getElementById("result").innerHTML =
            "Yaşın " + age + "  ";
    }
}