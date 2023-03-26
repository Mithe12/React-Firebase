import { useState, useEffect } from 'react';
import firestore from '../firebase/useFirestore';
import { collection, getDocs } from 'firebase/firestore'

// Single Doc: we need doc refs: doc(firestoreDb, "Name of collections", "ID or anyother")
// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef)
// Get multiple doc: we need have a query: query(collection(db,cities), where(captial))
// const q = query(collection(db, "cities"), where("capital", "==", true));
// const querySnapshot = await getDocs(q);
// all docs: getDocs(collection (db, cities)):
// const querySnapshot = await getDocs(collection(db, "cities"));
// Real time: 
// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {

export default function useFetch(method = 'GET',) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "recipes"));
            if (querySnapshot.empty) {
                setError('No recipes to load');
                setLoading(false);
            } else {
                let res = []
                console.log(querySnapshot)
                querySnapshot.forEach(doc => {
                    res.push({ id: doc.id, ...doc.data() })
                })
                setData(res)
                setLoading(false)
            }
        } catch (e) {
            setError(e.message);
            setLoading(false)
        }
    }

    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);
        getData()
    }, [])

    return { data, loading, error }

}