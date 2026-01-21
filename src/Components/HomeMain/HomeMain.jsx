import React from 'react'

const HomeMain = () => {
  return (
    <section className='flex flex-col items-start sm:items-center mt-11 bg-grid-pattern'>
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
            <p className='sm:max-w-175 text-lg text-slate-400 leading-relaxed'>Desarrollamos ecosistemas web de alto rendimiento. 
                Desde E-commerce robustos hasta portafolios de alta gama y blogs. Combinamos estética moderna con código sólido.
                Sitios ultrarrápidos que mejoran la retención de usuarios y el posicionamiento en Google.
                Interfaces intuitivas que guían al visitante hacia la acción.</p>
            <div>
                <button>VER PROYECTOS</button>
                <button>CONTACTAR</button>
            </div>
        </div>
    </section>
  )
}

export default HomeMain