import React from 'react'

const Services = () => {
  return (
    <section id='Services' className='flex flex-col items-center mt-12 mb-6'>
        <div className='text-white font-extrabold text-center flex flex-col gap-5'>
            <h1 className='text-xl sm:text-5xl'>SERVICIOS</h1>
            <p className='text-sm text-slate-400'>Soluciones web a medida. Enfocados al crecimiento de tu emprendimiento</p>
        </div>
        <div className='flex flex-col sm:flex-row mt-20 gap-7 justify-center items-center'>
          <figure className="group  flex flex-col gap-6 rounded-xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:border-primary/50 hover:bg-white/[0.05] max-w-100 h-60">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#0a0d0a] transition-all">
              <span className="material-symbols-outlined">Person</span>
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className="text-xl font-bold text-white">Sitio web personal</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                Portafolios de alta gama para creadores y profesionales que buscan destacarse con una marca y una estética únicas.
              </p>
            </div>
          </figure>
          <figure className="group  flex flex-col gap-6 rounded-xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:border-primary/50 hover:bg-white/[0.05] max-w-100 h-60">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#0a0d0a] transition-all">
              <span className="material-symbols-outlined">Shopping_cart</span>
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className="text-xl font-bold text-white">E-Commerce</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                Tiendas escalables diseñadas a medida, pagos integrados y experiencias de usuario fluidas a escala
              </p>
            </div>
          </figure>
          <figure className="group  flex flex-col gap-6 rounded-xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:border-primary/50 hover:bg-white/[0.05] max-w-100 h-60">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#0a0d0a] transition-all">
              <span className="material-symbols-outlined">Groups</span>
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className="text-xl font-bold text-white">Blogs y Redes Sociales</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                Community Manager experto en hacer crecer tu marca en las redes sociales y lograr obtener seguidores legitimos.
              </p>
            </div>
          </figure>
        </div>
    </section>
  )
}

export default Services