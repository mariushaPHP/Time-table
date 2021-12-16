import firebase from "../../firebaseConfig";

export const getUserData = (user, setUserHandler) => {
    try {
        firebase.firestore().collection("users").where("uid", "==", user?.uid).get()
            .then((userData) => {setUserHandler(userData.docs[0].data())})
    } catch (err) {
        console.log(err)
    }
}