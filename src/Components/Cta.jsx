import { Button } from '@heroui/react'
import { IoIosArrowForward } from 'react-icons/io'
import ctaMobile from '../assets/ctaMobileWaveLines.svg'
import wavelinesvg from '../assets/WaveLinesDesktop2.svg' // use it for desktop bg
const Cta = () => {
  return (
    <div
      className='w-full py-20 text-white'
      style={{
        background:
          'radial-gradient(24.45% 88.58% at 23.57% 2%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)'
      }}
    >
        
      <div className='max-w-6xl mx-auto py-20'>
        <h2 className='text-[56px] font-bold mb-4'>Legacy no longer</h2>
        <p className='text-[20px] mb-6 '>
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <Button className='flex items-center gap-2 px-6 py-3 text-lg bg-white text-blue-700 hover:bg-gray-200 transition'>
          Contact Us <IoIosArrowForward />
        </Button>
      </div>
      
    </div>
  )
}

export default Cta
