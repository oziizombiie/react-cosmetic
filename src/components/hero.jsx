import React from 'react';

function Hero(){
    return(
        <div className='w-full h-2/3 relative'>
            <div className='w-full absolute h-full p-4 space-y-20'>
                <p className='text-2xl pt-8'>Something awesome goes here</p>
                <p>lorem </p>
                <div className='bottom-0 w-full justify-center space-x-4 self-center flex pt-16'>
                    <div className='w-12 h-4 rounded-2xl border-2 border-slate-800 bg-slate-100 opacity-90 '></div>
                    <div className='w-12 h-4 rounded-2xl border-slate-600 bg-slate-100 opacity-60 '></div>
                    <div className='w-12 h-4 rounded-2xl border-slate-600 bg-slate-100 opacity-60 '></div>
                    <div className='w-12 h-4 rounded-2xl border-slate-600 bg-slate-100 opacity-60 '></div>
                </div>
            </div>
            <img alt="hero" className='w-full object-cover h-96' src='https://picsum.photos/1920/1080'/>
        </div>
    );
}

export default Hero;