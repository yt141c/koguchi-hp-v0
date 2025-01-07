import HeroSection from '@/components/HeroSection'
import ClinicIntro from '@/components/ClinicIntro'
import AppointmentInfo from '@/components/AppointmentInfo'
import Testimonials from '@/components/Testimonials'
import StaffIntro from '@/components/StaffIntro'
import FAQ from '@/components/FAQ'
import AccessMap from '@/components/AccessMap'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClinicIntro />
      <AppointmentInfo />
      <Testimonials />
      <StaffIntro />
      <FAQ />
      <AccessMap />
    </>
  )
}

