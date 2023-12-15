import { FC, ReactElement, useEffect } from 'react'
import Header from './Header'
import HeroCotainer from './HeroContainer'

const Hero: FC<{}> = (): ReactElement => {
  useEffect(() => {
    document.title = 'Discord | Your Place to Talk and Hang Out'
  }, [])
  return (
    <div className="flex flex-col">
      <Header />
      <HeroCotainer />
    </div>
  )
}

export default Hero
