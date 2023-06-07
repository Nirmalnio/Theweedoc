'use client';
import Image from 'next/image'
import Header from './components/Layout/Header/Header'
import { Carousel } from 'antd';
import Style from "./page.module.css"
import { bannerplayicon,bannersave } from '@/Assests/Svg/Commonsvg';
export default function Home() {

const img1 = "https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
const img2 = "https://scifibloggers.com/wp-content/uploads/The-Avengers-Banner-276443869-e1429647138196.jpeg"  
const img3 = "https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg"
const img4 = "https://houseofgeekery.files.wordpress.com/2022/08/bullet-train-movie-posters-give-stunning-new-look-at-brad-pitts-rivals90ff50be-291f-475d-8c0d-af36b4dfb6c1-415x250-1.jpeg"

const userimg1 = "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="

return (
    <main>
      <Header />

       <Carousel autoplay>

       <div className={Style.BannerDiv}>
          <img src={img1} alt='banner' width="100" height="100" />
          <div className={Style.mask}></div>
          <div className={Style.bannercontDiv}>
                  <div className={Style.usernameDiv}>
                    <img src={userimg1} alt='user'/>
                    <h4>Wilson Andrew</h4>
                    <button>Follow</button>
                  </div>
                  <h1 className={Style.titlename}>Avengers-End Game</h1>
                  <div className={Style.catagoryDiv}>
                            <div>Action</div>
                            <div>Triller</div>
                            <div>English</div>
                            <div>U/A 13+</div>
                  </div>
                <p className={Style.description}>“Billa 2" shows the transformation of a Sri Lankan Tamil refugee, David Billa, to the most feared underworld don. While corruption and bureaucracy... See more</p>
                <div className={Style.playbtnDiv}>
                        <button>{bannerplayicon} Play</button>
                        <div>{bannersave}</div>
                </div>
          </div>
      </div>


      <div className={Style.BannerDiv}>
          <img src={img2} alt='banner' width="100" height="100" />
          <div className={Style.mask}></div>
          <div className={Style.bannercontDiv}>
                  <div className={Style.usernameDiv}>
                    <img src={userimg1} alt='user'/>
                    <h4>Wilson Andrew</h4>
                    <button>Follow</button>
                  </div>
                  <h1 className={Style.titlename}>Avengers-End Game</h1>
                  <div className={Style.catagoryDiv}>
                            <div>Action</div>
                            <div>Triller</div>
                            <div>English</div>
                            <div>U/A 13+</div>
                  </div>
                <p className={Style.description}>“Billa 2" shows the transformation of a Sri Lankan Tamil refugee, David Billa, to the most feared underworld don. While corruption and bureaucracy... See more</p>
                <div className={Style.playbtnDiv}>
                        <button>{bannerplayicon} Play</button>
                        <div>{bannersave}</div>
                </div>
          </div>
      </div>
      <div className={Style.BannerDiv}>
          <img src={img3} alt='banner' width="100" height="100" />
          <div className={Style.mask}></div>
          <div className={Style.bannercontDiv}>
                  <div className={Style.usernameDiv}>
                    <img src={userimg1} alt='user'/>
                    <h4>Sadhan Bose</h4>
                    <button>Follow</button>
                  </div>
                  <h1 className={Style.titlename}>Dark knight Rise</h1>
                  <div className={Style.catagoryDiv}>
                            <div>Action</div>
                            <div>Triller</div>
                            <div>English</div>
                            <div>U/A 13+</div>
                  </div>
                <p className={Style.description}>“Billa 2" shows the transformation of a Sri Lankan Tamil refugee, David Billa, to the most feared underworld don. While corruption and bureaucracy... See more</p>
                <div className={Style.playbtnDiv}>
                        <button>{bannerplayicon} Play</button>
                        <div>{bannersave}</div>
                </div>
          </div>
      </div>
      <div className={Style.BannerDiv}>
          <img src={img4} alt='banner' width="100" height="100" />
          <div className={Style.mask}></div>
          <div className={Style.bannercontDiv}>
                  <div className={Style.usernameDiv}>
                    <img src={userimg1} alt='user'/>
                    <h4>Wilson Andrew</h4>
                    <button>Follow</button>
                  </div>
                  <h1 className={Style.titlename}>Deadpool - 2</h1>
                  <div className={Style.catagoryDiv}>
                            <div>Action</div>
                            <div>Triller</div>
                            <div>English</div>
                            <div>U/A 13+</div>
                  </div>
                <p className={Style.description}>“Billa 2" shows the transformation of a Sri Lankan Tamil refugee, David Billa, to the most feared underworld don. While corruption and bureaucracy... See more</p>
                <div className={Style.playbtnDiv}>
                        <button>{bannerplayicon} Play</button>
                        <div>{bannersave}</div>
                </div>
          </div>
      </div>
    
  </Carousel>
    </main>
  )
}
