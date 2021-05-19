import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" alt="" />
            <div className="home__row">
            <Product
            id="100"
            title="Redmi Note 10 Pro"
            price={15000}
            rating={5}
            image="https://www.gizmochina.com/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-Pro-Max.jpg"
            />
            <Product
            id="101"
            title="MI-STS In the Ear Single Ear TWS-L21 Headphone Wireless Earphone Bluetooth"
            price={1123}
            rating={3}
            image="https://rukminim1.flixcart.com/image/416/416/kmax8y80/headphone/g/x/q/in-the-ear-single-ear-tws-l21-headphone-wireless-earphone-mi-sts-original-imagf89ufsjhftyg.jpeg?q=70"
            />
        </div>
        <div className="home__row">
            <Product
            id="102"
            title="Lenovo ThinkPad E15 Core i3 11th Gen"
            price={44990}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/kngd0nk0/computer/k/q/5/na-laptop-lenovo-original-imag24kvhrgqvjut.jpeg?q=70"
            />
            <Product
            id="103"
            title="ASUS VIVO V222FAK Pentium Quad Core"
            price={35490}
            rating={2}
            image="https://rukminim1.flixcart.com/image/416/416/km9ht3k0/allinone-desktop/y/r/a/vivo-v222fak-wa018ts-asus-original-imagf7jpgzmdstyq.jpeg?q=70"
            />
            <Product
            id="104"
            title="JOFIX M4 BAND"
            price={449}
            rating={2}
            image="https://rukminim1.flixcart.com/image/416/416/k6fd47k0/smart-band-tag/f/g/t/b102-avvic-original-imafzptapa8wfwfv.jpeg?q=70"
            />
        </div>
        <div className="home__row">
            <Product
            id="105"
            title="Mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android TV"
            price={14999}
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg?q=70"
            />
        </div>

        </div>
    )
}

export default Home
