import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
       <div className={styles.user}>
                <div className={styles.userLeftSide} >
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                        <div>
                        <div>{user.name}</div>
                        {user.status ? user.status : <div className={styles.statusEmpty} >Status empty</div>}
                        {/* <div>{user.}</div> */}
                    </div>
                    
                </div>
               
                <div>
                        {user.followed
                            ? <button className={styles.followBtn} disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id) }}>
                                Unfollow</button>
                            : <button className={styles.followBtn} disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { follow(user.id) }}>
                                      Follow</button>}

                    </div>
            </div>)
}

export default User;