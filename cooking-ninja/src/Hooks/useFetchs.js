import React from 'react';

const API = 'http://localhost:3000'
export default function useFetch(path, method = 'GET', body = '') {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)



    React.useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        const options = {
            method,
            ...(body ? JSON.stringify(body) : {}),
            headers: {
                "Content-type": "application/json"
            }
        }

        const controller = new AbortController()
        fetch(`${API}${path}`, { ...options })
            .then(res => res.json())
            .then(({ body }) => body ? JSON.parse(body) : null)
            .then(data => {
                if (!controller.aborted) {
                    setData(data)
                    setLoading(false)
                    setError(null)
                }
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })

        return () => controller.abort()
    }, [path, method, body])

    return { data, loading, error }
}