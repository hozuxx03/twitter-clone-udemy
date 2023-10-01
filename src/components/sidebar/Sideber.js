import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderTwoToneIcon from '@mui/icons-material/BookmarkBorderTwoTone';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { Button } from '@mui/material';
import "./Sidebar.css";


function Sideber() {
    return (
    <div className='sideber'>
        {/* Twitterアイコン */}
        <TwitterIcon className='sideber--twitterIcon'/>

        {/* SideberOption */}
        <SidebarOption text="ホーム" Icon={HomeSharpIcon}/>
        <SidebarOption text="話題を検索" Icon={SearchSharpIcon }/>
        <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
        <SidebarOption text="メッセージ" Icon={MailOutlineTwoToneIcon }/>
        <SidebarOption text="ブックマーク" Icon={BookmarkBorderTwoToneIcon }/>
        <SidebarOption text="リスト" Icon={ListAltIcon}/>
        <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>
        <SidebarOption text="もっと見る" Icon={MoreHorizTwoToneIcon}/>

        {/* ツイートボタン */}
        <Button variant='outlined' className='sidebar--tweet'>
            ツイートする
        </Button>
    </div>
    );
};

export default Sideber;
