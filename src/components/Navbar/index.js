import React, { useEffect, useState } from "react";
import { ReactComponent as sunny } from '../../assests/icons/sunny.svg';
import { ReactComponent as moon } from '../../assests/icons/moon.svg';
import { ReactComponent as system } from '../../assests/icons/computer.svg'
const menulist = [
    {
        name: 'Home',
        slug: '/',
    },
    {
        name: 'TimeSheet',
        slug: '/timesheet'
    }
]

const modeOptions = [
    {
        name: 'dark',
        icon: sunny,
    },
    {
        name: 'light',
        icon: moon,
    },
    {
        name: 'system',
        icon: system
    }
]


const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(darkQuery)

    const themeModeHandler = (themeName) => {
        setTheme(themeName)
    }

    function onWindowMatch() {
        if (localStorage.getItem('theme') === 'dark' || !('theme' in localStorage) && darkQuery.matches) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark')
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break;
            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break;
        }
    }, [theme]);

    return (
        <nav className="dark:text-gray-100 dark:bg-slate-900 md:flex justify-between items-center py-2 px-0">
            <div className="mx-10">
                <h1>IRFAN </h1>
            </div>
            <div className="mx-10 md:flex justify-between">
                <ul className="md:flex md:items-center md:space-x-9 px-10">
                    {
                        menulist.map((menu) => {
                            return <li href={menu.slug} key={menu.name} className="hover:text-red-300">{menu.name}</li>
                        })
                    }
                </ul>
                <div className="dark:bg-slate-800 bg-gray-100 rounded flex">
                    {
                        modeOptions.map((options) => {
                            return <button className={`w-9 h-8 leading-9 text-xl rounded-full m-1 ${options.name === theme && `text-sky-600`}`} key={options.name}
                                onClick={() => themeModeHandler(options.name)}>
                                <options.icon />
                            </button>
                        })
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar