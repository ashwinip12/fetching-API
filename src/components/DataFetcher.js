import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);
           
    return (
        <div>
        <h1>Data from API</h1>
        
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}
export default DataFetcher;
