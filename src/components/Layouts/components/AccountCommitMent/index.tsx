import classNames from 'classnames/bind';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import styles from './AccountCommitMent.module.scss';

const cx = classNames.bind(styles);

function AccountCommitMent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2 className={cx('title')}>Hỗ Trợ và Chính Sách Bảo Hành</h2>
                <div className={cx('item')}>
                    <ExclamationCircleOutlined />
                    <span className={cx('text')}>Mỗi tài khoản MAIL được bán duy nhất và một lần ( Không chia sẻ )</span>
                </div>
                <div className={cx('item')}>
                    <ExclamationCircleOutlined />
                    <span className={cx('text')}>Đối với Hotmail New thời gian sống ít nhất 24-48 giờ. Còn Hotmail TRUSTED Sống ít nhất 6-12 tháng.</span>
                </div>
                <div className={cx('item')}>
                    <ExclamationCircleOutlined />
                    <span className={cx('text')}>Nhằm bảo mật phải đúng thiết bị + trình duyệt đã mua mới có thể xem được dữ liệu và tải xuống. Tất cả Dữ liệu đơn hàng sẽ được tự động xóa sau 24h</span>
                </div>
            </div>
        </div>
    );
};

export default AccountCommitMent;
