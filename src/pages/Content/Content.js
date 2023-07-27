import React from "react";
import "./Content.scss"

const Content = ({text, media, date}) => {
	return (
		<div className="content">
			<div className="content-profile-and-division">
				<img className="content-profile-image" alt="content-profile-image" src="https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg"/>
				<div className="thread-vertical-division">
					<div className="thread-vertical-line"></div>
				</div>
			</div>
			<div className="content-wrapper">
				<div className="content-header">
					<div className="content-profile-name">
						wecode_life	
					</div>
					<div className="content-header-etc">
						<div className="etc publishedDate">{date}</div>
						<div className="etc">・・・</div>
					</div>
				</div>
				<div className="content-text">{text}</div>
				<div className="video-wrapper">
					<video src={media} type="video/mp4" className="content-media" autoPlay muted loop controls></video>
				</div>
			</div>
		</div>
	)
}

export default Content;