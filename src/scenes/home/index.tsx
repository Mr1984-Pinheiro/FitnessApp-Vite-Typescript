import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.jpg'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


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
    <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
       {/*MAIN HEADER */}
       <div className='z-10 mt-32 md:basis-3/5'>
         {/*HEADINGS */}
         <div className='md:-mt-20'>
          <div className='relative'>
            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
              <h1 className="font-bold text-gray-600 text-9xl">DEVGYM</h1>
              <h3 className="text-gray-600 text-5xl">transformation fitness</h3>
            </div>
          </div>

          <p>Your best option when leading a healthier life.
          The best equipment, infrastructure and much more with affordable monthly fees.
          Taking care of your health and well-being is also loving yourself!
          </p>
         </div>

         {/*ACTIONS */}
         <div>
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
         </div>
       </div>

        {/*IMAGE*/}
        <div>
          <img className='rounded-full w-5/6 h-5/6' src={HomePageGraphic} alt="Imagem de Steve Buissinne por Pixabay" />
        </div>
    </div>

        {/*SPONSORS*/}
        {isAboveMediumScreens && (
          <div>
            <div>
              <div>
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