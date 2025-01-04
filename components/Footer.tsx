import { R } from "constants/R"
import { Comp } from "./Components"


const Footer = () => {
  return (
    <div className="md:container mx-auto py-3 border-t-[1px] border-black dark:border-white">
      <p className="text-center text-black dark:text-white"><Comp.Icons.Copyright /> &nbsp;{R.title.siteTitle}</p>
    </div>
  )
}

export default Footer