import React from 'react'
import Product from '../components/Product';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'

function Home() {
    return (
        <>
            <NavBar />
            <div className='bg-light'>
                <div>
                    {/* productos */}
                    <div className='grid grid-cols-1 justify-items-center tablet:grid-cols-2 desktop:grid-cols-3 wide:grid-cols-4 '>
                        <Product
                            title="Shoes!"
                            img="https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg"
                            desciption="If a dog chews shoes whose shoes does he choose?"
                            price={16000}
                        />
                        <Product
                            title="Coffe Machine"
                            img="https://http2.mlstatic.com/D_NQ_NP_779943-MLA51092558112_082022-V.jpg"
                            desciption="Excellent single group coffee machine with pressure above 1.5 bars."
                            price={250000}
                        />
                        <Product
                            title="Xbox X"
                            img="https://images.start.com.ar/RRT-00002.jpg"
                            desciption="Xbox X series video game console, 4K video, 1TB storage and joystick."
                            price={160000}
                        />
                        <Product
                            title="Notebook Gamer Nitro"
                            img="https://www.latercera.com/resizer/Cvhw1u5fKsLCcMVmni7yiB5Q8Sc=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/N56AK5VCJNAUNNOEWJUT73QWWI.png"
                            desciption="Processor I5, Ram16gb, SSD 256gb + 1tb (HHD) videp board Gtx 1650, operating system W11.s"
                            price={260000}
                        />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home