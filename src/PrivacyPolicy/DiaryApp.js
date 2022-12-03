import React from "react";
import "../css/PrivacyPolicy.css"

function DiaryApp() {
    return (
        <div>
            <br/>
            <br/>
            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>Điều khoản sử dụng</span>
            <br/><br/><br/>

            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', paddingLeft: '20px'}}>1. GIỚI THIỆU</p>

            <p style={{textAlign: 'left' , paddingLeft: '20px'}}>Ứng dụng Diary - Nhật kí là ứng dụng giúp lưu lại những kỉ niệm đẹp của bạn trên điện thoại với những tùy chỉnh giao diện, font chữ bắt mắt</p>
        
            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', paddingLeft: '20px'}}>2. Diary - Nhật kí sẽ thu thập những dữ liệu gì?</p>

            <p style={{textAlign: 'left', paddingLeft: '20px'}}>Ứng dụng sử dụng iCloud, hoàn toàn không thu thập dữ liệu cá nhân người dùng.</p>

            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' , paddingLeft: '20px'}}>3. THẮC MẮC, QUAN NGẠI HOẶC KHIẾU NẠI?</p>

            <p style={{textAlign: 'left', paddingLeft: '20px'}}>Liên hệ với tôi qua email: <a href="mailto:thuyetngocluong.working@gmail.com">thuyetngocluong.working@gmail.com</a></p>

            <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '15px' , paddingLeft: '20px'}}>Lần cập nhật cuối 03/11/2022</p>
        </div>
       
    );
}

export default DiaryApp;