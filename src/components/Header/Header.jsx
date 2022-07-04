import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>

        <div >
            { props.isAuth
                ? <div className={s.loginBlock} > <div  >{props.login}  </div> <button className={s.logout} onClick={props.logout}>Log out</button> </div> 
                : <NavLink to={'/login'}><button className={s.logout}>Login</button></NavLink> }
        </div>
    </header>
}

export default Header;