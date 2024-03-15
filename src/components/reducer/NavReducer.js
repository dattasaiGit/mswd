export default function NavReducer(state="Login",action) {
    switch(action.type){
        case "Registration":
            return "Registration"
        case "Login":
            return "Login"
        case "Show":
            return "Show"
        case "Book":
            return "Book"
        case "Update":
            console.log("Inside update")
            return "Update"
        default:
            return "Login"  
                  
    }
}