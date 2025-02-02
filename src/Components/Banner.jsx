import { Button } from '@heroui/react'

const Banner = () => {
  return (
    <div className='bg-blue-300'>
      <div className='max-w-6xl mx-auto py-20 space-y-4'>
        <h1 className='text-[80px] leading-none font-semibold w-[60%] text-white'>Embrace the future of finance</h1>
        <p className='mt-8 text-[16px] font-bold text-white max-w-[37rem] tracking-wide'>
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>
        <Button>React Out to Us </Button>
      </div>
    </div>
  )
}

export default Banner
