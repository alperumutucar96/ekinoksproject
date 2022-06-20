import {Button, Checkbox, Form, Input, List} from 'antd';
import Modal from "antd/lib/modal/Modal";
import {useState} from "react";
import {CartItemType} from "../App";
import VirtualList from 'rc-virtual-list';

export function Cart(props: any) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button style={{float: "right", background: "green"}} type="primary" onClick={showModal}>
                Cart
            </Button>
            <Modal title="Shopping Cart" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <List>
                    <VirtualList
                        data={props.cartItems}
                        itemKey="id"
                    >
                        {(item: CartItemType) => (
                            <List.Item key={item.id}>
                                <p>{item.id}</p>
                            </List.Item>
                        )}
                    </VirtualList>
                </List>

            </Modal>
        </>
    )

};

