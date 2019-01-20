import React from 'react';

const LunchSearch = ({ onSearch }) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onSearch();
        }
    }

    return (
        <div className="leftMenu">
            <span>주소 : </span><input type="text" />
            <div>
                <span>메뉴 : </span> 
                <select>
                    <option>랜덤</option>
                </select>
            </div>
            <div>
                <span>거리 : </span>
                <select>
                    <option>
                        300m
                    </option>
                </select>
            </div>
            <div>
                <button onClick={onSearch}>검색</button>
            </div>
        </div>
    );
};

export default LunchSearch;
