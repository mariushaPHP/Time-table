import firebase from "../../firebaseConfig";



export const getAllWorks=(onGetWorks)=>{

    firebase
        .firestore()
        .collection('works')
        .onSnapshot((snapshot) => {
            const allWorks = snapshot.docs.map((doc) => ({
                id:doc.id,
                    ...doc.data()
            }))
            onGetWorks(allWorks)
        })

}

export const addWork=(data)=>{

    firebase

        .firestore()
        .collection('works')
        .add(data)
}

export const deleteWork=(id)=>{

    firebase
        .firestore()
        .collection('works')
        .doc(id)
        .delete()
}

export const updateWork=(id, data)=>{
    firebase
        .firestore()
        .collection('works')
        .doc(id)
        .set(data)
    console.log(data)
    console.log()
}

export const getWorkById=(item, id)=>{

    firebase
        .firestore()
        .collection('works')
        .doc(id)
        .get()
        .then((docRef)=>{item(docRef.data())})
}