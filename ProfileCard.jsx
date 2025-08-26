import React from "react";
import "./ProfileCard.css"; 
function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-info">Frontend Developer</p>
    </div>
  );
}

export default ProfileCard;
