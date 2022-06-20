import {LikeOutlined, MessageOutlined, StarOutlined} from '@ant-design/icons';
import {Avatar, Button, Form, Input, List, Space, Table} from 'antd';
import React, {useEffect, useState} from 'react';
import {ColumnsType} from "antd/lib/table";


export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
    key: React.Key;
};


export function ProductList(props: any) {
    // const [selectedRow, setSelectedRow] = useState()
    const [data, setData] = useState([] )
    useEffect(() => {
        setData(props.data)
    })
    const columns: ColumnsType<CartItemType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
            key: 'id',
        },
        {
            title: 'Image of the Product',
            dataIndex: 'image',
            key: 'image',
            render: text => <img
                height={100}
                alt="image"
                src={text}
            />,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            sorter: true,
            render: (name) => `${name}`
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            filters: [{text: "Electronics", value: "electronics"},
                {text: "Jewelery", value: "jewelery"},
                {text: "Men's clothing", value: "men's clothing"},
                {text: "Women's Clothing", value: "women's clothing"},
            ]
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 100,
            render: (params) => <Button onClick={(e)=>props.handleAddToCart(params)}>Add To Cart</Button>,
        },
    ];

    return (
        <Table columns={columns}
               expandable={{
                   expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                     // rowExpandable: record => record.id == record.id,
               }} pagination={{pageSize: 5}}
               dataSource={data}/>
            // .map((i :number, data: CartItemType ) => ({...data, key:i+1}))


        // <List
        //     itemLayout="vertical"
        //     size="large"
        //     pagination={
        //         {
        //             // position: ['bottomCenter'],
        //             onChange: page => {
        //                 console.log(page);
        //             },
        //             pageSize: 3,
        //         }}
        //     dataSource={data}
        //     footer={
        //         <div>
        //
        //         </div>
        //     }
        //     renderItem={item => (
        //         <List.Item
        //             extra={
        //                 <img
        //
        //                     width={80}
        //                     alt="image"
        //                     src={props.item.image}
        //                 />
        //             }>
        //             <List.Item.Meta
        //                 title={<a href={item.title}>{item.title}</a>}
        //                 description={item.description}
        //             />
        //             {item.title}
        //         </List.Item>
        //     )}
        // />
    )

};