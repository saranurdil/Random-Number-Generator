function generatePassword(length, lowCase, upperCase, numbers, symbols){

    //possible options
    const lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersOption = "1234567890";
    const symbolOptions = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";

    let allowedchars; //includes all allowed characters based on user's input
    let password;

    // if the user entered true for any of them, all possible options are concatenated to allowedchars
    allowedchars += lowCase ? lowerCaseOptions : ""; 
    allowedchars += upperCase ? upperCaseOptions : "";
    allowedchars += numbers ? numbersOptions : "";
    allowedchars += symbols ? symbolOptions : "";
}