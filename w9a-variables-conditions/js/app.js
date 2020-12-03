var userAge= 17

var isSubscribed= true


if (userAge > 18  && isSubscribed) {
    console.log("the user is older than 18 and subscribed");
} else if (userAge < 18 && isSubscribed) {
     console.log("the user is younger 18 and subscribed");
} else if (userAge > 18 && !isSubscribed) {
    console.log("the user is over 18 and not subscribed");
} else if (userAge < 18 && !isSubscribed) {
    console.log("the user is 18 and younger and not subscribed");
} else {
    console.log("error, not valid");
}

