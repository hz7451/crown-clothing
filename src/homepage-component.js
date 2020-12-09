import React from 'react';
import './homepage.style.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Hats</h1>
                    <h2 className='subtitle'>SHop Now</h2>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Shoes</h1>
                    <h2 className='subtitle'>SHop Now</h2>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Jacket</h1>
                    <h2 className='subtitle'>SHop Now</h2>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Womens</h1>
                    <h2 className='subtitle'>SHop Now</h2>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Mens</h1>
                    <h2 className='subtitle'>SHop Now</h2>
                </div>
            </div>
        </div>
    </div>
);
export default HomePage;