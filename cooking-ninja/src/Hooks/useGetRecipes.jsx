import { useState, useEffect } from 'react';
import firestore from '../firebase/useFirestore';
import { collection, getDocs } from 'firebase/firestore'

export default function useGetRecipes() {
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