import React from 'react'
import {motion} from 'framer-motion'
import { BarChart2, ShoppingBag, Users, DollarSign, ShoppingCart, TrendingUp, Settings, Menu } from 'lucide-react'
import { s } from 'framer-motion/m';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

  const SIDEBAR_ITEMS = [
        {name: 'Overview', icon:BarChart2, color: "#6366f1", href: "/"},
        {name: 'Products', icon:ShoppingBag, color: "#8B5CF6", href: "/products"},
        {name: 'Users', icon:Users, color: "#EC4899", href: "/users"},
        {name: 'Sales', icon:DollarSign, color: "#10B981", href: "/sales"},
        {name: 'Orders', icon:ShoppingCart, color: "#F59E0B", href: "/orders"},
        {name: 'Analytics', icon:TrendingUp, color: "#3B82F6", href: "/analytics"},
        {name: 'Settings', icon:Settings, color: "#6EE7B7", href: "/settings"},
    ];

function SideBar() {

    const [sideBarOpen, setSideBarOpen] = React.useState(true);
  
  return (
    <motion.div
    className = {`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${sideBarOpen ? 'w-64' : 'w-20'}`}
    animate={{width: sideBarOpen ? 256 : 80}}
    >
        <div className = " h-full bg-gray-800 text-gray-100 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
            <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{ scale: 0.9}}
            onClick={()=> setSideBarOpen(!sideBarOpen)}
            className='p-2 rounded-full hover:bg-gray-700 transition-color max-w-fit' 
            >
                <Menu size={24} />
               
            </motion.button>

        <nav className='mt-8 grow'>
            {SIDEBAR_ITEMS.map((items) => (
                <Link key={items.href} to={items.href}>
                    <motion.div  className=' flex items-center p-4 text-sm font-md rounded-lg hover:bg-gray-700  transition-colors mb-2'>

                        <items.icon size={20} style={{color: items.color, minWidth: "20px"}} />

                        <AnimatePresence>
                            {sideBarOpen && (
                                <motion.span
                                className=' ml-4 whitespace-nowrap'
                                initial = {{opacity:0, width:0}}
                                animate = {{opacity:1, width:"auto"}}
                                exit = {{opacity:0, width:0}}
                                transition={{duration:0.2,delay:0.3 }}

                                >
                                    {items.name}

                                </motion.span>
                            )}
                        </AnimatePresence>
                        
                    </motion.div>
                </Link>
            ))}

            </nav>    

        </div>
    </motion.div>
  )
}
export default SideBar
