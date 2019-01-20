import React from 'react';

const pageTemplate = ({children}) => {
    return (
        <div className="main">
            {children}
            <div className="list">
              <span>리스트 영역</span>
            </div>
        </div>
    );
}

export default pageTemplate;