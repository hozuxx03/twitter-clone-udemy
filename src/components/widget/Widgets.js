import { Search } from '@mui/icons-material';
import React from 'react';

function Widgets() {
    return (
    <div className='widgets'>
        <div className='widgets--input'>
            <Search className='widgets--search--Icon'/>
            <input placeholder='キーワード検索' type='text'/>
        </div>

        <div className='widgets--widgetContainer'>
            <h2>いまどうしてる？</h2>

            {/*ライブラリを追加・追記*/}
            
        </div>
    </div>
    );
};

export default Widgets;
