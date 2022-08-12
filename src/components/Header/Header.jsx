import React from 'react';
import "./Header.css"
import headerr from "../Header/Header.img/headerr.png"
import frame1 from "./Header.img/img1.png"
import frame2 from "./Header.img/img2.png"
import frame3 from "./Header.img/img3.png"
import work from "./Header.img/Group 4.png"
import bussines from "./Header.img/Group 5.png"
import hobby from "./Header.img/Group 6.png"
import pers from "./Header.img/pers.png"


const Header = () => {
    return (
        <div className='header  '>
            <div className='top-header container '>
             <div className='left-top-header' >
                
                 <h1>МОБИЛОГРАФИЯ</h1>
                 <p>Заманбап видео тартуу жана монтаждоо практикалык программасы
100% жыйынтык менен чыгуучу жалгыз курс
Себеби, биз кунумдук "фишкаларды" айтуудан тышкары, кадам сайын нөлдөн тарта профессионалдуу жыйынтыкка жеткиребиз.
</p>

<button> start your course </button>
             </div>

             <div className='right-top-header' >
              <img src={headerr} alt="" />
             </div>
                
            </div>
            <div className='header-frame container ' >
                <img src={frame1} alt="" />
                <img src={frame2} alt="" />
                <img src={frame3} alt="" />

            </div>
            <div className='header-block container '>
                <div> <img src={hobby} alt="" /> <p>Өзү үчүн кызыгып, тартып, жаны хобби менен алек болгусу келгендерге</p></div>
                <div> <img src={work} alt="" /> <p>Мобилография кесибин аркалап, андан жакшы киреше табууну көздөгөндөргө</p></div>
                <div> <img src={bussines} alt="" /> <p>Өз бизнеси же компаниясы үчүн мыкты видео-контент жаратууну ойлогондорго</p> </div>

                </div>
                <div className='header-about container '>
                    <img src={pers} alt="" />
                    <p>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
                </div>
                <div className='call-header' >
                    <button className='button-header1' >CALL</button>
                    <button  className='button-header2' > WHAT"S APP MASSAGE</button>
                </div>
            </div>
        
    );
}

export default Header;
