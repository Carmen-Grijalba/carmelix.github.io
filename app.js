// bienvenida
alert ("Welcome to our shop!");

//primera pregunta
let firstq = prompt ("Do you want to buy a book?")
console.log(firstq)

if (firstq === "Yes") {
    let secondq = prompt ("What book?")
    console.log(secondq)
    alert ("Let me check if we have it, please.")
    let secondqq = prompt ("We do! Can I help you with anything else?")
    console.log (secondqq)
    if (secondqq === "No") {
        alert ("Great! That'll be 20€, please")
    } else {
        let fourthqq = prompt ("What are you looking for?")
        alert ("One moment while I check if we have any left, please")
        let fourthq = prompt ("We do! How many do you need?")
        console.log(fourthq)
        if (fourthqq === "<3") {
        let fifthq = prompt ("Sorry, we don't have that many. Are 2 enough?")
        console.log (fifthq)
        if (fifthq === "Yes") {
            alert ("Great! That'll be 35.99€, please")
            alert ("Thanks for shopping with us!")
        } else {
            let sixthq = prompt ("We can save your details and call you when we recieve more. Do you want to do that?")
            console.log (sixthq)
            if (sixthq === "Yes") {
                alert ("Great! We will call you as soon as possible!")
                alert ("Have a nice day!")
            } else {
                alert ("Sorry we couldn't help you today.")
                alert ("Hope to see you back soon!")
            }
        } 
    } else {
        alert ("Great! That'll be 6.25€ please")
        alert ("Thanks for shopping with us!")
    }
    }
}else {
    let thirdq = prompt ("What do you want to buy, then?")
    console.log (thirdq)
    alert ("Let me check if we have any left, please")
    let fourthq = prompt ("We do! How many do you need?")
    console.log(fourthq)
    if (">4") {
        let fifthq = prompt ("Sorry, we don't have that many. Are 4 enough?")
        console.log (fifthq)
        if (fifthq === "Yes") {
            alert ("Great! That'll be 5,50€, please")
            alert ("Thanks for shopping with us!")
        } else {
            let sixthq = prompt ("We can save your details and call you when we recieve more. Do you want to do that?")
            console.log (sixthq)
            if (sixthq === "Yes") {
                alert ("Great! We will call you as soon as possible!")
                alert ("Have a nice day!")
            } else {
                alert ("Sorry we couldn't help you today.")
                alert ("Hope to see you back soon!")
            }
        }
    } else {
        alert ("Great! That'll be 6.25€ please")
        alert ("Thanks for shopping with us!")
    }
}

