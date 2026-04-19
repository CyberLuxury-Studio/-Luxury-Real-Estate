"use client";
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="py-40 px-8 max-w-screen-2xl mx-auto relative">
      <div className="absolute top-20 right-20 text-surface-container-highest/20 font-headline text-9xl font-black select-none architectural-heading -z-10 uppercase">
        Features
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-auto md:h-[800px]"
      >
        <motion.div variants={item} className="md:col-span-2 md:row-span-2 relative glass-card p-14 flex flex-col justify-end group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-1000">
            <img
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU4Htg41uJy0WPoPl20htXv-Ofib-6uzk5dMVZiI7BPJ1x3AmbR1Y40QwlSlm0fR9se_fFRttf_IpuJxz_Ir7FERnLh_PXRn9acB7JLbm7bYfxuKYNppbJkDFOOIeJKuV885u7NoBJVoHA0oMbmj5v0sWLAPSTvya-ihRFz0JWJ-G8BC3D8O2OcMSxTC65_FWFwUFVeQzPBjV5cETGgxT9wIE6I2oPGnjif6hTlSd-_18HuXfcug-OwuIZbw_8OHg6FIVzy5oqAAI"
              alt="AI Climate Core"
            />
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container text-5xl mb-8">
              thermostat
            </span>
            <h3 className="font-headline text-4xl font-bold mb-6 architectural-heading uppercase">
              AI Climate Core
            </h3>
            <p className="text-on-surface-variant font-body leading-relaxed max-w-sm text-sm">
              Sentient environmental systems that learn your biological rhythms to
              optimize atmosphere and oxygen levels in real-time.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="md:col-span-2 relative glass-card p-12 flex flex-col justify-center group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrpvNGsZOjVmLTFSWO4Q7ncui-jDpQKJaR_DFB43VEiXzPCVE4DZLvjDsPMJ6L9Y3avRyhPHo2T8_pV-9aIpue6wT9k0xKteR2EJg3sCg8FP4MAlZXsx5UC_-_2WtyBQlNVCANrp04PQYWcj2xkkG-GgGi3cgvqNMnvT5Rp80Ra9vLV05eETu-PcZYqqzyNHIk6tRfPzVWDkkfYKK3hf-uV_v0FTn7ywykb4C72JdumakdSCXJkB_zR8EbyZjtflh6puo78eiEH5k"
              alt="Biometric Vault"
            />
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-secondary-container text-4xl mb-5">
              fingerprint
            </span>
            <h3 className="font-headline text-3xl font-bold mb-3 architectural-heading uppercase">
              Biometric Vault
            </h3>
            <p className="text-on-surface-variant font-body text-sm max-w-xs">
              DNA-encrypted entry protocols ensuring absolute privacy and security
              for the discerning resident.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="md:col-span-2 relative glass-card p-12 flex flex-col justify-center group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoSYZ0HgZzfU4LnESJt_4GEu6ZgK2ONBtA0ljhwGyCpOkBwigp4-PVWERkTXFW9qtd_LjAoWRwjHpiW8F0e9HBZOT-o4jd7w0LjxGXqIec1C5ozM2Ht0SXTIEYNDAlx0tvHtgf822EdIAuRjVRvC6pFBEYHsnf9lRFLH-ipEMqMH4PXPMVnLtlPK-Hqec6jDwcENBBPMG6rCMzxl3z4ZZwHXERDtaVRpNchgpqH77BMEL2NTeV608tsctAGKnqvjXwntxsQUnFXTI"
              alt="Gravity Pools"
            />
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-5">
              pool
            </span>
            <h3 className="font-headline text-3xl font-bold mb-3 architectural-heading uppercase">
              Gravity Pools
            </h3>
            <p className="text-on-surface-variant font-body text-sm max-w-xs">
              Zero-gravity filtration systems in sky-high aquatic sanctuaries
              suspended above the clouds.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
