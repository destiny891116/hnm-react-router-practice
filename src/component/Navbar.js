import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];  
    const navigate = useNavigate();

    const loginPage = () => {
        navigate("/login");
    }
  return (
    <div>
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} />
                <div onClick={loginPage}>로그인</div>
             </div>
        </div>
        <div className="nav-section">
            <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s"></img>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu) => (
                    <li key={menu}>{menu}</li>
                ))}
            </ul>
            <div className="serach-box">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" className="search-btn"  placeholder="검색을 입력해주세요."  />
            </div>
        </div>
    </div>)
}

export default Navbar
