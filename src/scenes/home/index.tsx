import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.jpg'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion'; //para efeitos de animaçoes

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
  >
    {/*IMAGE AND MAIN HEADER */}
    <motion.div 
      className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}  
    >
       {/*MAIN HEADER */}
       <div className='mt-32 md:basis-3/5'>
         {/*HEADINGS */}
         <motion.div  
          className='md:-mt-20 '
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50},
            visible: { opacity: 1, x: 0 },
          }}
         >
          <div className='relative'>
            <div className=''>
              <h1 className="font-bold text-gray-600 text-9xl">DEVGYM</h1>
              <h3 className="text-gray-600 text-5xl">transformation fitness</h3>
            </div>
          </div>

          <p className='mt-8 text-sm'>Your best option when leading a healthier life.
          The best equipment, infrastructure and much more with affordable monthly fees.
          Taking care of your health and well-being is also loving yourself!
          </p>
        </motion.div>

         {/*ACTIONS */}
         <motion.div 
            className='mt-8 flex items-center gap-8 md:justify-start'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -50},
            visible: { opacity: 1, x: 0 },
          }}
         >
          <ActionButton setSelectedPage={setSelectedPage} >
              Join now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
              <p>Learn More</p>
          </AnchorLink>
         </motion.div>
       </div>

        {/*IMAGE*/}
        <div className='flex md:justify-items-end basis-3/5 justify-center mt-8'
          
        >
          <img className='rounded-full w-96 h-96 mt-8  ' src={HomePageGraphic} alt="Imagem de Steve Buissinne por Pixabay" />
        </div>
    </motion.div>

        {/*SPONSORS*/}
        {isAboveMediumScreens && (
          <div className='h-[150px] w-full bg-primary-100 py-10'>
            <div className=' mx-auto w-5/6'>
              <div className='flex w-3/5 items-center justify-between gap-8'>
                <img src={SponsorRedBull} alt="redbull-sponsor" />
                <img src={SponsorForbes} alt="forbes-sponsor" />
                <img src={SponsorFortune} alt="fortune-sponsor" />
              </div>
            </div>
          </div>
        )}
  </section>;
  
};

export default Home