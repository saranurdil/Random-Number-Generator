function generatePassword(length, lowCase, upperCase, numbers, symbols){

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
        window.prompt("The length of the password must be at least 1");
        return;
    }

    if (allowedchars.length == 0){
        window.prompt("At least one of the options must be checked");
        return;
    }

    // generate a random index for allowedchars and concatenate it into password
    for (let i = 0; i < length; i++){

        const random_index = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[random_index];
    }

    return password;
        
}
