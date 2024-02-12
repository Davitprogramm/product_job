import React, { useEffect, useState } from "react";
import "./style.css"
export const Error = React.memo(() => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate an API call that might throw an error
        fetchData()
            .then((result) => setData(result))
            .catch((error) => setError(error));
    }, []);

    const fetchData = async () => {
        // Simulating an API call that might throw an error
        const response = await fetch('https://example.com/api/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    };
    return (
        <div>
            <div>
                <h1 className="h1">Oops! Something went wrong.</h1>
                {error && <p className="p">Error details: {error.message}</p>}
                <p className="p">Please try again later.</p>
            </div>
        </div>
    )
})