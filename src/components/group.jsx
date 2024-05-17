import React from 'react';
import './group.css';
import malik from '../assets/malik.png';
import fahry from '../assets/fahry.png';
import winata from '../assets/winata.png';
import razhib from '../assets/razhib.png';


function GroupPage() {
    return (
        <div class="body">
                    <div class="container">
                        <div class="card">
                            <img src= {malik} alt="Abdul Malik"/>
                                <div class="intro">
                            <h1><a href="https://www.instagram.com/panorapics.ture/"> Abdul Malik</a></h1>                 
                            </div>
                        </div>
                        <div class="card">
                            <img src= {fahry} alt="Fahry Pramatha"/>
                                <div class="intro">
                            <h1><a href="https://www.instagram.com/fahryprr/">Fahry Pramatha</a></h1>                           
                            </div>
                        </div>
                        <div class="card">
                            <img src= {winata} alt="Winata Chen"/>
                                <div class="intro">
                            <h1><a href="https://www.instagram.com/winata_chenn/"> Winata Chen</a></h1>                            
                            </div>
                        </div>
                        <div class="card">
                            <img src= {razhib} alt="Razhib Fauzul"/>
                                <div class="intro">
                            <h1><a href="https://www.instagram.com/razhib_/"> Razhib Fauzul</a></h1>                                
                            </div>
                        </div>   
                    </div>
        </div>
    );
}

export default GroupPage;