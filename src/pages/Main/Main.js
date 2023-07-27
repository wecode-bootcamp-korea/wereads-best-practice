import React from "react";
import "./Main.scss";
import Content from "../Content/Content"

const Main = () => {

const contentData = [
	{
		contentText: "지나가는 개발자 쓰친들 심쿵시키기💗",
		contentMedia: "/images/video1.mp4",
		datePublished: "1일"
	}, {
		contentText: "개발자인 쓰친들은 컴포넌트 이름 어떻게 짓나요?",
		contentMedia: "/images/video2.mp4",
		datePublished: "1주"
	}
]
	return (
		<div className="main">
			<header>
				<img className="thread-logo" alt="thread-logo" src="https://i.namu.wiki/i/Lh2uKlo8uZB09rO3F49bLuXk38c8AgLl5oCdyxJimxmInUk9pBFJKO9Psd71mYqQkRPplYjoRgIz_Frafz-ETw.svg"/>
			</header>
			<div className="account">
				<div className="account-profile">
					<div className="account-name">
						<h1 className="account-name-title">wecode life | 위코드 일상 계정</h1>
						<div className="account-id">wecode_life <span className="thread-tag">thread.net</span></div>
					</div>
					<img alt="profile_image" src="https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg" className="profile-image"/>
				</div>
				<div className="account-introduction">
					함께해서 위코드🙌🏻 <a className="mentioned-account" href="https://www.threads.net/@wecode_premium">@wecode_premium</a><br/>⁃<br/>개발자가 되어가는 공감 일상!<br/>교육생을 밀착 관찰하는 멘토가 직접 촬영하고 업로드합니다
				</div>
				<div className="account-footer">
					<div className="follower-and-service-link">
						<div className="number-of-followers fsl"> 팔로워 16명 </div>
						<div className="fsl">・</div>
						<div className="fsl service-link"> wecode.co.kr	</div>
					</div>
					<div className="instagram-and-more">
						<a><img className="instagram-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA2rJWe1WYoj6axbO2ZT57o-9DrUsYAEveHEgYIwD2g&s"/></a>
						<a><img className="instagram-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA2rJWe1WYoj6axbO2ZT57o-9DrUsYAEveHEgYIwD2g&s"/></a>
					</div>
				</div>
			</div>
			<div className="content-body">
				<div className="tab">
						<div className="tab-name">Threads</div>
						<div className="tab-name inactive-tab-name">답글</div>
				</div>
				<div className="content-list">
					{
						contentData.map(content => {
							return <Content text={content.contentText} media={content.contentMedia} date={content.datePublished} />
						})
					}
				</div>
			</div>
		</div>
	);
};

export default Main;