import "./topNavBar.css";
import { useNavigate } from 'react-router-dom';

export function TopNavBar() {
    const navigate = useNavigate();
  
    var userDetails = localStorage.getItem("user");
    userDetails = userDetails && JSON.parse(userDetails);
    const userName = userDetails.userName;
    // console.log(userDetails);


  return (
    <div className="topNavContainer">
        <div className="logo">
            <div className="logoText">
                <span>ZEN</span>
                CLASS
            </div>
        </div>
        <div className="userProfile">
            <div className="userWrapper">
                <div className="profileImage">{userName.charAt(0)}</div>
                <div className="name">{userName}</div>
            </div>
        </div>
    </div>
  );
}