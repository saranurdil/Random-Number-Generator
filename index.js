
function generatePassword(){

    event.preventDefault();
    // fetch values from the html
    let length = Number(document.getElementById("length").value);
    let lowCase = document.getElementById("lower").checked;
    let upperCase = document.getElementById("upper").checked;
    let numbers = document.getElementById("number").checked;
    let symbols = document.getElementById("symbol").checked;
    let result = document.getElementById("result");

    //possible options
    const lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersOptions = "1234567890";
    const symbolOptions = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";

    let allowedchars = ""; //includes all allowed characters based on user's input
    let password = "";

    // if the user entered true for any of them, all possible options are concatenated to allowedchars
    allowedchars += lowCase ? lowerCaseOptions : ""; 
    allowedchars += upperCase ? upperCaseOptions : "";
    allowedchars += numbers ? numbersOptions : "";
    allowedchars += symbols ? symbolOptions : "";

    // return if the user input an invalid length or no options
    if (length <= 0){
        window.alert("The length of the password must be at least 1");
        return;
    }

    if (allowedchars.length == 0){
        window.alert("At least one of the options must be checked");
        return;
    }

    // generate a random index for allowedchars and concatenate it into password
    for (let i = 0; i < length; i++){

        const random_index = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[random_index];
    }

    result.textContent = `Generated password: ${password}`;
        
}
