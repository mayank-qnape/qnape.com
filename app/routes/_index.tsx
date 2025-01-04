import type { MetaFunction } from "@remix-run/node";
import { Comp } from "components/Components";
import { R } from "constants/R";

export const meta: MetaFunction = () => {
  return [
    { title: R.title.siteTitle },
    { name: "description", content: R.title.siteDescription },
  ];
};

export default function Index() {
  return (
    <div className='h-screen flex flex-col'>
      <Comp.Header />
      <Comp.Body />
      <Comp.Footer />
    </div>
  );
}



{/* 
<div className="flex h-screen items-center justify-center">
  <div className="flex flex-col items-center gap-16">

    <header className="flex flex-col items-center gap-9">

      <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
        Welcome to {R.title.siteTitle}
      </h1>
      <Comp.ThemeToggle />
      <div className="h-[144px] w-[434px]">
        <Comp.Image
          src="/logo-dark.png"
          alt="Remix"
          className="dark:block"
          style={{ borderRadius: "8px" }} // Extra inline prop
          onClick={() => console.log("Logo clicked!")} // Event handler
        />
      </div>
    </header>
    <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
      <p className="leading-6 text-gray-700 dark:text-gray-200">
        What&apos;s next?
      </p>
      <ul>
        {resources.map(({ href, text, icon }) => (
          <li key={href}>
            <a
              className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</div> 
*/}