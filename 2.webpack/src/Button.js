import React, { useState } from 'react';

const Button = () => {
    const [liked, setLiked] = useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';

    return (
        <button onClick={() => setLiked(!liked)}>{text}</button>
    );
};

export default Button;
