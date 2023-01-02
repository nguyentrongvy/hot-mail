import classNames from "classnames/bind";
import { Button, Form, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

function Register() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={cx("wrapper")}>
        <div className={cx("inner")}>
        <div className={cx('logo')}>
        <UserAddOutlined />
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            className={cx('username')}
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input maxLength={100} />
          </Form.Item>

          <Form.Item
            className={cx('username')}
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input maxLength={100} />
          </Form.Item>

          <Form.Item
            className={cx('password')}
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password maxLength={100} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
