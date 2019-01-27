import React from 'react';

const LunchItem = ({ categoryName, placeName, phone, placeUrl, isItem }) => {
    return (
        isItem ? 
        <div>
            <span>{categoryName.substring(5, 10)}</span>
            <span>{placeName}</span>
            <span>{phone}</span>
            <span>{placeUrl}</span>
        </div> :
        <div>
            <span>로딩중</span>
        </div>
    );
}

export default LunchItem;