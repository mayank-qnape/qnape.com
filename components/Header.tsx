import { R } from 'constants/R'
import { Comp } from './Components'

const Header = () => {
  return (
    <header className="md:container mx-auto flex py-10">
      <div className="flex-1">
        <p className='text-lg font-medium tracking-widest text-black dark:text-white'>{R.title.siteTitle}</p>
      </div>
      <div className='flex items-stretch'>
        <Comp.ThemeToggle />
        <Comp.Menu.UserMenu />
      </div>
    </header>
  )
}

export default Header