import {Button, Checkbox, Form, Input, List} from 'antd';
import Modal from "antd/lib/modal/Modal";
import {useState} from "react";

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
    // @ts-ignore
    return (
        <>
            <Button style={{float: "right", background: "green"}} type="primary" onClick={showModal}>
                Cart
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <List
                    dataSource={props.cartItems}
                    renderItem={item => (
                        <List.Item>
                            extra={
                            <img

                                width={80}
                                alt="image"
                                src={props.item.title}
                            />
                        }
                            {/*<List.Item.Meta*/}
                            {/*    title={<a href={props.item.title}>{item.title}</a>}*/}
                            {/*    description={item.description}*/}
                            {/*/>*/}
                        </List.Item>
                    )}
                />

            </Modal>
        </>
    )

};

