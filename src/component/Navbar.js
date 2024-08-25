import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['Women', 'Man', 'Baby', 'Kids', 'H&M HOME', 'Sport', 'Sale', '지속가능성'];  
    const [width, setWidth] = useState(0);
    const navigate = useNavigate();

    const mainPage = () => {
        navigate("/");
    }

    const loginPage = () => {

        if(authenticate) {
            
        if(window.confirm("로그아웃 하시겠습니까?")) {
            setAuthenticate(false);
            navigate("/");
        }
        } else {
        navigate("/login");
        }
        
    }

    const search = (event) => {
        if( event.key === "Enter") {
            let keyword = event.target.value;
            
            navigate(`/?q=${keyword}`);
        }
    }

  return (
    <div>
        <div className="side-menu" style={{ width: width }}>
            <button className="closebtn" onClick={() => setWidth(0)}>&times;</button>
            <div className="side-menu-list" id="menu-list">
            {menuList.map((menu, index) => (
                <button key={index}>{menu}</button>
            ))}
            </div>
        </div>

        <div className="nav-header">
            <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
            </div>
            {authenticate ? (
            <div onClick={() => setAuthenticate(false)}>
                <FontAwesomeIcon icon={faUser} />
                <span style={{ cursor: "pointer" }}>로그아웃</span>
            </div>
            ) : (
            <div onClick={() => navigate("/login")}>
                <FontAwesomeIcon icon={faUser} />
                <span style={{ cursor: "pointer" }}>로그인</span>
            </div>
            )}
        </div>

        <div className="nav-section">
            <img onClick={mainPage}width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s"></img>
        </div>
        
        <div className="nav-menu-area">
            <ul className="menu-list">
                {menuList.map((menu) => (
                    <li key={menu}>{menu}</li>
                ))}
            </ul>
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" className="search-btn" placeholder="검색을 입력해주세요." onKeyPress={(event)=>search(event)}  />
            </div>
        </div>
    </div>)
}

export default Navbar
