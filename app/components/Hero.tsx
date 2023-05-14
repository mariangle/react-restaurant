import Image from "next/image"
import welcome from "@/public/assets/img/welcome.png"
import spoon from "@/public/assets/img/spoon.svg"

const Hero = () => {
  return (
    <div className="lg:flex items-center justify-between gap-4 min-h-[70vh]">
        <div>
            <p className="font-upright text-2xl italic">Gastronomisk forkælelse</p>
            <Image src={spoon} alt="hero-img" className="py-4"/>
            <h1 className="text-gold font-garamond text-6xl">FORKÆL DINE SMAGSLØG</h1>
            <p className="py-4">Oplev eksklusiv gastronomi på sit højeste i hjertet af København. Lad vores restaurant forføre dine smagsløg med de fineste ingredienser og enestående kreativitet.</p>
            <button>Se Menu</button>
        </div>
        <div className="max-w-sm">
            <Image  src={welcome} alt="hero-img"/>
        </div>
    </div>
  )
}

export default Hero