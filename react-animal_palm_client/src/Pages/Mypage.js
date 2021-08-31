import React, { useState } from 'react';
import { Profile } from './components/MypageComponent/Profile';
import { MyContents } from './components/MypageComponent/MyContents';
import { MyComments } from './components/MypageComponent/MyComments';
import { MySetting } from './components/MypageComponent/MySetting';
import './CSS/Mypage.css';
import Navigaitionbar from './components/navigationbar';

export const Mypage = ({
  userInfo
}) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenu = [
    {name : '내가 쓴 글', component: <MyContents userInfo={userInfo}/>},
    {name : '내가 쓴 댓글', component: <MyComments userInfo={userInfo}/>},
    {name : '회원정보 수정', component: <MySetting userInfo = {userInfo}/>}
  ];
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <>
    <Navigaitionbar/>
    <div id='wrap'>
      <div className='profile'>
        <Profile
          userInfo = {userInfo}
        />
      </div>
      <div className='tab-menu'>
      {tabMenu.map((tab, i) => (
          <li
          key={i}
          className={currentTab === i? "submenu focused": "submenu"}
          onClick={()=>selectMenuHandler(i)}
          >
            {tab.name}
          </li>
        ))}
      </div>
      {tabMenu[currentTab].component}
    </div>
    </>
  );
};