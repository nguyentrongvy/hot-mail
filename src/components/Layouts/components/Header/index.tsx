import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";

import images from "../../../../assets/images";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.hotMail} alt="" />
        </div>
        <div className={cx("contact")}>
          <div className={cx('phone-number')}>
            <PhoneOutlined />
            <span>079.254.0628</span>
          </div>
          <div className={cx('email')}>
            <MailOutlined />
            <span>nguyentrongvy264@gmail.com</span>
          </div>
        </div>
        <div className={cx("action")}>
          <button className={cx("login")}>Login</button>
          <button className={cx("register")}>Register</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
