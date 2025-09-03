import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import getBaseUrl from '../../utils/baseUrl';

const DashboardLayout = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({});; // object format
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${getBaseUrl()}/api/admin`, {
                    header: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-type': 'application/json',

                    },
                }) //get method

                setData(response.data);
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
    }, [])

    if (loading) return <div>Loading....</div>
    return (
        <div>DashboardLayout</div>
    )
}

export default DashboardLayout