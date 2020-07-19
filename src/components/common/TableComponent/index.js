import React from 'react'
import { Table } from 'antd'

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Ip Address',
        dataIndex: 'ip_address',
        key: 'ip_address',
    },
    {
        title: 'Total Clicks',
        dataIndex: 'total_clicks',
        key: 'total_clicks',
    },
    {
        title: 'Total Views ',
        dataIndex: 'total_views',
        key: 'total_views',
    },


];
export default function TableComponent({ data, loading }) {

    let toAntData = data.users.map(obj => Object.assign({}, obj, { key: obj.id },
        { total_clicks: obj.stats.reduce((a, b) => a + b.clicks, 0) },
        { total_views: obj.stats.reduce((a, b) => a + b.page_views, 0) }
    ));
    return (
        <Table
            loading={loading}
            columns={columns}
            dataSource={toAntData}
            scroll={{ x: 1500 }}
            pagination={false}
            size="middle"
            bordered={true}
        />
    )
}

