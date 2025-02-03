import React from 'react';

const OurPhilosophy = () => {
    const philosophy = [
        {
            id: 1,
            icon: "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format",
            title: "Full-suite solutions",
            desc: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions."
        },
        {
            id: 2,
            icon: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format",
            title: "Simplify the complex",
            desc: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data."
        },
        {
            id: 3,
            icon: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format",
            title: "Cutting-edge tech",
            desc: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions."
        }
    ]
    return (
        <div className='max-w-6xl mx-auto pb-20 px-6'>
            <h4 className='title text-center'>OUR PHILOSOPHY</h4>
            <h2 className='sub-title text-center'>Human-centred innovation</h2>
            <img className='mt-8 mb-8' src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1920&auto=format" alt="" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
                {
                    philosophy.map((item) => (
                        <div key={item.id} className='mt-8 bg-[#F8FCFF] p-8 rounded-[20px]'>
                            <img src={item.icon} alt="" />
                            <div>
                                <h4 className='font-semibold text-[24px] text-[#0b3058] my-8'>{item.title}</h4>
                                <p className='leading-[160%]'>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurPhilosophy;