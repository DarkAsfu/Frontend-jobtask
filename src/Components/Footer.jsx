import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <div>
      <div className='bg-[#002045] '>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center py-11'>
            <img src={logo} alt='' />
            <div>
              <ul className='text-[#00E9EA] md:flex text-center md:text-right justify-end gap-6 text-[16px] font-semibold'>
                <li className='border-blue-900 md:border-r-1 py-4 md:pr-6 '>
                  Our Solutions
                </li>
                <li className='py-4'>AnyCaaS</li>
                <li className='py-4'>AnyBaaS</li>
                <li className='py-4'>AnyPaaS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#00152D]'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center py-6 text'>
            <p className='text-[#1f80f0] text-[12px] font-bold'>
              <span className='font-extrabold'>©2023 All rights reserved.</span> Any Technology Pte Ltd.
            </p>
            <p className='text-[#1f80f0] font-bold text-[12px]'>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
