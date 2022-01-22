import React from 'react';
import myImage from '../../images/rafik.jpg'
function ProfilePhoto() {
  return (
    <div>
      <img src={myImage} width={300} height={300}/>
    </div>
  )
}

export default ProfilePhoto;
