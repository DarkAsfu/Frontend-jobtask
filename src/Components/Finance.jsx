// import React from 'react'
// import img from '../assets/finance.avif'
// const Finance = () => {
//   return (
//     <div className='grid grid-cols-2 items-center gap-14 max-w-6xl mx-auto '>
//       <div>
//         <h4 className='title'>POWERING THE FUTURE OF FINANCE</h4>
//         <h2 className='sub-title'>Uncovering new ways to delight customers</h2>
//         <h5 className='text-[#164377] font-bold mt-10'>
//           AnyTech is revolutionising financial technology by introducing
//           innovative and real-time transaction account processing capabilities,
//           specifically designed for retail financial services.
//         </h5>
//         <p className='text-[#164377] mt-4'>
//           Our modern approach surpasses traditional banking and card processing
//           systems, empowering you with the most advanced technology for lasting
//           success.
//         </p>
//       </div>
//       <div>
//         <img src={img} alt='' />
//       </div>
//     </div>
//   )
// }

// export default Finance

import React from 'react';

const Finance = () => {
  return (
    <section className="max-w-6xl mx-auto pt-32 pb-20">
      <section className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-[15px] relative">
        <div className="md:space-y-sm space-y-xs">
          <h6 className="title">
            POWERING THE FUTURE OF FINANCE
          </h6>
          <h2 className="sub-title">
            Uncovering new ways to delight customers
          </h2>
          <div className="!my-[60px] md:hidden block relative h-fit lg:text-clip">
            <figure
              className="w-[76%] mx-auto"
              style={{ boxShadow: '0px 23px 30px 0px #16437763' }}
            >
              <img
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=320&auto=format 320w, https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&auto=format 640w, https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format 960w, https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124&auto=format 1124w"
                src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?auto=format"
                width="1124"
                height="1364"
                
                alt="POWERING THE FUTURE OF FINANCE"
                className="object-cover w-full h-full"
                sizes="(min-width: 1024px) 45vw, 95vw"
                loading="lazy"
              />
            </figure>
            <div>
              <figure
                className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
                style={{
                  transform: 'translateX(var(--motion-translateX)) translateY(var(--motion-translateY))',
                  '--motion-translateX': '50%',
                }}
              >
                <img
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format 116w"
                  src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
                  width="116"
                  height="115"
                  alt="anybass"
                  sizes="115px"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </figure>
              <figure
                className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
                style={{ transform: 'translateY(var(--motion-translateY))' }}
              >
                <img
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format 89w"
                  src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
                  width="89"
                  height="88"
                  alt="anypass"
                  sizes="87px"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </figure>
              <figure
                className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
                style={{
                  transform: 'translateX(var(--motion-translateX)) translateY(var(--motion-translateY))',
                  '--motion-translateX': '-50%',
                }}
              >
                <img
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format 74w"
                  src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
                  width="74"
                  height="75"
                  className="object-contain w-full h-full"
                  alt="anycaas"
                  sizes="73px"
                  loading="lazy"
                />
              </figure>
            </div>
            <figure
              className="absolute inset-0 w-full h-full -z-10"
              style={{
                transform: 'translate3d(0%, -5%, 0px)',
                transition: 'transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                animationFillMode: 'forwards',
              }}
            >
              <img
                className="object-cover w-full h-full overflow-visible"
                loading="lazy"
                src="https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
                alt="background frame"
              />
            </figure>
            <figure
              className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
              style={{
                transform: 'translate3d(0%, 2%, 0px)',
                transition: 'transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                animationFillMode: 'forwards',
              }}
            >
              <img
                className="object-cover w-full h-full overflow-visible"
                loading="lazy"
                src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
                alt="foreground frame"
              />
            </figure>
          </div>
          <div className="lg:pt-2">
            <div>
              <div className='text-[#164377] font-bold mt-10'>
                <p>
                  <strong>
                    AnyTech is revolutionising financial technology by introducing innovative and real-time transaction
                    account processing capabilities, specifically designed for retail financial services.
                  </strong>
                </p>
              </div>
              <div className='text-[#164377] mt-4'>
                <p>
                  <br />
                  Our modern approach surpasses traditional banking and card processing systems, empowering you with the
                  most advanced technology for lasting success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative h-fit lg:text-clip">
          <figure
            className="w-[76%] mx-auto"
            style={{ boxShadow: '0px 23px 30px 0px #16437763' }}
          >
            <img
              srcSet="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=320&auto=format 320w, https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&auto=format 640w, https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format 960w, https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124&auto=format 1124w"
              src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?auto=format"
              width="1124"
              height="1364"
             
              alt="POWERING THE FUTURE OF FINANCE"
              className="object-cover w-full h-full"
              sizes="(min-width: 1024px) 45vw, 95vw"
              loading="lazy"
            />
          </figure>
          <div>
            <figure
              className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
              style={{
                transform: 'translateX(var(--motion-translateX)) translateY(var(--motion-translateY))',
                '--motion-translateX': '50%',
              }}
            >
              <img
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format 116w"
                src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
                width="116"
                height="115"
                alt="anybass"
                sizes="115px"
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </figure>
            <figure
              className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
              style={{ transform: 'translateY(var(--motion-translateY))' }}
            >
              <img
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format 89w"
                src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
                width="89"
                height="88"
                alt="anypass"
                sizes="87px"
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </figure>
            <figure
              className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
              style={{
                transform: 'translateX(var(--motion-translateX)) translateY(var(--motion-translateY))',
                '--motion-translateX': '-50%',
              }}
            >
              <img
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format 74w"
                src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
                width="74"
                height="75"
                className="object-contain w-full h-full"
                alt="anycaas"
                sizes="73px"
                loading="lazy"
              />
            </figure>
          </div>
          <figure
            className="absolute inset-0 w-full h-full -z-10"
            style={{
              transform: 'translate3d(0%, -5%, 0px)',
              transition: 'transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animationFillMode: 'forwards',
            }}
          >
            <img
              className="object-cover w-full h-full overflow-visible"
              loading="lazy"
              src="https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
              alt="background frame"
            />
          </figure>
          <figure
            className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
            style={{
              transform: 'translate3d(0%, 2%, 0px)',
              transition: 'transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animationFillMode: 'forwards',
            }}
          >
            <img
              className="object-cover w-full h-full overflow-visible"
              loading="lazy"
              src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
              alt="foreground frame"
            />
          </figure>
        </div>
      </section>
    </section>
  );
};

export default Finance;