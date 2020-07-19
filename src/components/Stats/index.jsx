import React, { useState } from 'react'

import { USERS_QUERY } from '../query/usersQuery'
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/client';
import TableComponent from '../common/TableComponent';






const Stats = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10)
    const { loading, error, data } = useQuery(USERS_QUERY(((current - 1) * pageSize) + 1, current * pageSize));


    if (error) return <h4>{error.message}</h4>

    function onChange(pageNumber) {
        setCurrent(pageNumber)
    }
    return (
        <div className="stats_container">
            {loading ? <div>Loading...</div> :
                <div className="table_container">
                    <div>
                        <TableComponent data={data} loading={loading} />
                    </div>
                    <div className="pagination_container">
                        <Pagination
                            defaultCurrent={1}
                            current={current}
                            total={data.total}
                            onChange={onChange}
                            showSizeChanger={false}
                        />
                    </div>
                </div>}
            <div>
            </div>
        </div>
    )
}

export default Stats
