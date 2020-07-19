import React from 'react'

import { USERS_QUERY } from '../usersQuery';
import { useQuery } from '@apollo/client';

function Table() {
    const { loading, error, data } = useQuery(USERS_QUERY(1, 4));
    if (error) return <h4>{error.message}</h4>
    return (
        <div className="stats_container">
            {loading ? <div>Loading</div> :
                <div className="table_container">
                    {data.users[0].id}
                </div>}
            <div>

            </div>
        </div>
    )
}

export default Table
