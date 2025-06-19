import Hero from './components/hero'
import Pentagon from './ui/svg/Pentagon'
import color from './utils/constants/color'
import { cn } from './utils/style/cn'
import doctor1Img from '/images/doctor1.png'
import doctor2Img from '/images/doctor2.png'

function App() {

  return (
    <section
      className={cn(
        'w-dvw h-dvh overflow-auto overflow-x-hidden',
        'bg-no-repeat bg-cover bg-[url(/public/images/mobile.png)] sm:bg-[url(/public/images/desktop.png)] relative',
      )}
    >
      <Hero.Container className='flex sm:flex-row flex-col '>
        <div className='flex-1'>
          <div className={cn(
            'relative sm:mt-32 -mt-8 -ml-12',
            'w-[80dvw] sm:w-[clamp(200px,50dvw,50dvw)] aspect-[1/1.5]'
          )}>
            <Hero.PentagonImage
              src={doctor1Img}
              pentagonProps={{
                borderColor: 'white',
                borderWidth: 2,
              }}
              imageClassName={cn(
                'h-[calc(100%-24px)] aspect-[365/396]',
              )}
            >
              <Pentagon className='absolute w-[16%] sm:w-[24%] -right-[6%] top-[18%] rotate-12 sm:rotate-0 -sm:right-[4%] sm:top-[4%] mix-blend-normal' fill={color.overlay} />
            </Hero.PentagonImage>
            <Hero.PentagonImage
              containerClassName='absolute left-[45%] top-[40%] w-[80%]'
              src={doctor2Img}
              pentagonProps={{
                borderColor: color.cyan,
                borderWidth: 2,
                fill: color.cyan,
              }}
              imageClassName={cn(
                'h-[calc(100%-4px)] w-[calc(100%-4px)]',
              )}
            />
          </div>
        </div>
        <div className='flex-1 p-8 sm:ml-[15%] sm:mt-32'>
          <div className='sm:max-w-[clamp(200px,50dvw,400px)]'>
            <div className='sm:text-28u text-base font-semibold'>
              Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và giản dị.
            </div>
            <div className='mt-8'>
              <div className='uppercase text-sm sm:text-28u font-bold text-yellow'>Thu quỳnh</div>
              <div className='mt-4 text-xs sm:text-18u'>Bác sĩ</div>
            </div>
          </div>
        </div>
      </Hero.Container>
    </section>
  )
}

export default App
