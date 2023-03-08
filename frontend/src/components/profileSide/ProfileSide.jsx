import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileSide.css';

const ProfileSide = () => {
  return (
    <div>
       <div className="ProfileSide">
        <h1>Welcome to the ProfileSide page !</h1>
        {/* <LogoSearch/> */}
        <ProfileCard/>
        {/* <FollowersCard/> */}
    </div>
    </div>
  );
}

export default ProfileSide;
