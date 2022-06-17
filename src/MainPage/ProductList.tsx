import {Table} from 'antd';
import type {ColumnsType, TableProps} from 'antd/lib/table';
import { useState } from "react";

export function ProductList() {
    // const [data, setData] = useState("");
    interface DataType {
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'id',
            dataIndex: 'id',
            // filters: [
            //     {
            //         text: 'Joe',
            //         value: 'Joe',
            //     },
            //     {
            //         text: 'Category 1',
            //         value: 'Category 1',
            //         children: [
            //             {
            //                 text: 'Yellow',
            //                 value: 'Yellow',
            //             },
            //             {
            //                 text: 'Pink',
            //                 value: 'Pink',
            //             },
            //         ],
            //     },
            //     {
            //         text: 'Category 2',
            //         value: 'Category 2',
            //         children: [
            //             {
            //                 text: 'Green',
            //                 value: 'Green',
            //             },
            //             {
            //                 text: 'Black',
            //                 value: 'Black',
            //             },
            //         ],
            //     },
            // ],
            // filterMode: 'tree',
            // filterSearch: true,
            // onFilter: (value: string, record) => record.name.includes(value),
            width: '30%',
        },
        {
            title: 'price',
            dataIndex: 'price',
            // sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'image',
            dataIndex: 'image',
            // filters: [
            //     {
            //         text: 'London',
            //         value: 'London',
            //     },
            //     {
            //         text: 'New York',
            //         value: 'New York',
            //     },
            // ],
            // onFilter: (value: string, record) => record.address.startsWith(value),
            // filterSearch: true,
            width: '40%',
        },
    ];

    const data: DataType[] = [];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <Table columns={columns} dataSource={data} onChange={onChange}/>
    )

};

export default ProductList;