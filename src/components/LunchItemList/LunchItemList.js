import React, { Component } from 'react';
import LunchItem from './LunchItem';

class LunchItemList extends Component {
    
    render() {
        const { lunchDatas } = this.props;
        const lunchItems = lunchDatas ? lunchDatas.map( 
            lunchItem => (
                <LunchItem 
                key = { lunchItem.id}
                categoryName = {lunchItem.category_name}
                placeName = {lunchItem.place_name}
                phone = {lunchItem.phone}
                placeUrl = {lunchItem.place_url}
                isItem={true}
                />
            )
        ) : <LunchItem isItem= {false}/>;
        return (
            <div className="list">
                <div>
                    <span>음식 리스트</span>
                </div>
                {lunchItems}
            </div>
        );
    }
}

export default LunchItemList;