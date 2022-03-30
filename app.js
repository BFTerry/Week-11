function twentygame() {
    do {
        com = 0;
        user = 0;
        coms = 0;
        users = 0;

        function askname() {
            var username = prompt(`Hello welcome to Twenty im the Computer. \n\n Whats your name?`)
            return username
        }

        var name = askname();

        function rng() {
            var number = Math.floor(Math.random() * 10 + 1);
            return number
        }

        function userf(usr) {
            do {
                usr = usr + rng()
                if (usr > 21) {
                    break
                }
                alert(`Now you have ${usr}.`)
                var userinput = prompt(`If you want to play again press "y"`)
            } while (userinput == "y");

        }

        function comf(cr) {
            do {
                cr = cr + rng()
                alert(`The Computer now has ${cr}.`)
            } while (cr <= 16);
        }

        

        

        

        function comparing(usr, cptr, plr) {
            if ((usr > cptr) && (usr <= 20)) {
                alert(`You Won!`)
                users++
            } else if ((cptr > usr) && (cptr <= 20)) {
                alert(`You Lost!`)
                coms = coms + 1
            } else {
                alert(`You Tied!`)
            }  
            
            alert(`Computer: ${coms}  |  ${plr}: ${users}`)    
        }
        
        comparing(userf(user), comf(com, rng()), name)
        
    } while (user1 == y);

}

twentygame()


//alert = `Welcome to 20!`;//

//do {

//    do {
//        var number = Math.floor(Math.random() * 10 + 1);
//        com = com + number
//        alert(`Computer got ${number}, the Computer now has ${com}.`)
//    } while (com <= 16);

//    alert(`Now it's your turn.`)

//    do {
//        var number = Math.floor(Math.random() * 10 + 1);
//        user = user + number
//        alert(`You got ${number}, You now have ${user}.`)
//        var userinput = prompt(`If you want to play again press "y"`)
//    } while (userinput == "y");

//    alert(`The Computer has ${com}, and You have ${user}`)

//    if ((com > user) && (com <= 20)) {
//        alert(`You Lost!`)
//        coms = coms + 1
//    } else if ((user > com) && (user <= 20)) {
//        alert(`You Won!`)
//        users++
//    } else {
//        alert(`You Tied!`)
//    }

//    alert(`Computer: ${coms}  |  You: ${users}`)

//    var user1 = prompt(`If you want to play again type "y"`)


//}   while (user1 == y)//
























