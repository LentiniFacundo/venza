import React from 'react'
import heroimg from '../../assets/heroimg.webp'

const HomeMain = () => {
  return (
    <>
        <section id='Home' className='flex flex-col items-start sm:items-center mt-11 bg-grid-pattern'>
            <div className='mt-1.5 pl-4 w-full'>
                <div className='inline-flex w-fit items-center mb-4 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary'>
                <p>Buenos Aires, Argentina.</p>
                </div>
                <h1 className='font-bold text-4xl sm:text-8xl text-white'>DESARROLLO WEB
                    <br />
                    <span className='font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent'>FRONT-END.</span>
                </h1>
            </div>
            <div className='flex flex-col gap-7 pl-4 w-full'>
                <p className='sm:max-w-175 text-lg text-slate-400 leading-relaxed p-4'>Desarrollamos ecosistemas web de alto rendimiento. 
                    Desde E-commerce robustos hasta portafolios de alta gama y blogs. Combinamos estética moderna con código sólido.
                    Sitios ultrarrápidos que mejoran la retención de usuarios y el posicionamiento en Google.
                    Interfaces intuitivas que guían al visitante hacia la acción.</p>
                <div className='flex flex-col gap-5 mb-3'>
                    <button className='metallic-glow bg-primary text-gray-800 font-[1000] p-4 rounded-lg tracking-widest mr-2 shadow-md shadow-emerald-400 cursor-pointer'>VER PROYECTOS</button>
                    <button className='bg-white/5 border border-white/10 text-base text-white font-[1000] p-4 rounded-lg tracking-widest mr-2 shadow-md cursor-pointer'>CONTACTAR</button>
                </div>
            </div>
            <div className='flex flex-row justify-center mb-6 w-full bg-grid-pattern'>
                <div className='mt-5 w-xs sm:w-3xl rounded-xl metallic-glow border -inset-4 bg-primary/20'>
                    <img src={heroimg} alt="Hero Image" />
                </div>
            </div>
            <section className='mt-26 border-y border-white/5 bg-white/[0.02] py-12 w-full'>
                <div className='mx-auto max-w-[1200px] px-6'>
                    <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
                        <div className='flex flex-col gap-1 border-l border-primary/20 pl-6'>
                            <span className='text-3xl font-black text-white'>95%</span>
                            <span className='text-xs font-bold uppercase tracking-widest text-primary'>aceptacion</span>
                        </div>
                        <div className='flex flex-col gap-1 border-l border-primary/20 pl-6'>
                            <span className='text-3xl font-black text-white'>140%</span>
                            <span className='text-xs font-bold uppercase tracking-widest text-primary'>nuevos clientes</span>
                        </div>
                        <div className='flex flex-col gap-1 border-l border-primary/20 pl-6'>
                            <span className='text-3xl font-black text-white'>100+</span>
                            <span className='text-xs font-bold uppercase tracking-widest text-primary'>proyectos desarrollados</span>
                        </div>
                        <div className='flex flex-col gap-1 border-l border-primary/20 pl-6'>
                            <span className='text-3xl font-black text-white'>24/7</span>
                            <span className='text-xs font-bold uppercase tracking-widest text-primary'>soporte</span>
                        </div>
                    </div>
                </div>
            </section>
    </section>
    </>
  )
}

export default HomeMain