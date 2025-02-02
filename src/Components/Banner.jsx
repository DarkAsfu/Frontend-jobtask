import CustomButton from "../Shared/CustomButton"

const Banner = () => {
  return (
    <div className='bg-blue-300'>
      <div className='max-w-6xl mx-auto py-20 space-y-4'>
        <h1 className='text-[80px] leading-none font-semibold w-[60%] text-white'>
          Embrace the future of finance
        </h1>
        <p className='mt-8 text-[16px] font-bold text-white max-w-[37rem] tracking-wide'>
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>
        <CustomButton
          text='Contact Us'
          bgColor='bg-[#FE8B53]'
          textColor='text-white'
          borderColor=''
          hoverBgColor=''
          hoverTextColor=''
          hoverBorderColor='border-[#FE8B53]'
        >
          <svg
            className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            ></path>
          </svg>
        </CustomButton>
      </div>
    </div>
  )
}

export default Banner
