import {LikeOutlined, MessageOutlined, StarOutlined} from '@ant-design/icons';
import {Avatar, Button, Form, Input, List, Space, Table} from 'antd';
import React from 'react';
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
            key: 'id',
            render: text => <img
                height={100}
                alt="image"
                src={text}
            />,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'id',
            sorter: true,
            render: (name) => `${name}`
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'id',
            filters: [{text: "Electronics", value: "electronics"},
                {text: "Jewelery", value: "jewelery"},
                {text: "Men's clothing", value: "men's clothing"},
                {text: "Women's Clothing", value: "women's clothing"},
            ]
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'id',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Action',
            key: 'id',
            fixed: 'right',
            width: 100,
            render: () => <a onClick={props.handleAddToCart}>Add To Cart</a>,
        },
    ];

    return (
        <Table columns={columns}
               // rowKey={props.data[0].id}
               expandable={{
                   expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                    // rowExpandable: record => record.id == 1,
               }} pagination={{pageSize: 5}}
               dataSource={props.data}/>
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