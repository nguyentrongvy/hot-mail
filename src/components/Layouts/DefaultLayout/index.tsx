import classNames from "classnames/bind";

import Header from "../components/Header";
import AccountCommitMent from '../components/AccountCommitMent';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }: any) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <AccountCommitMent />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
