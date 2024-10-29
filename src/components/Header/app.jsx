


import * as React from 'react';
import logo from '../Home/assets/logo.svg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
<svg width="100" height="24" xmlns="http://www.w3.org/2000/svg">
 {/* <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --> */}

 <g>
  <title>background</title>
  <rect fill="none" id="canvas_background" height="15" width="100" y="-1" x="-1"/>
  <g display="none" overflow='visible' y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="2" x="2" height="36" width="164"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <g stroke="null" id="svg_5">
   <path stroke="null" id="svg_4" fill="#000" d="m0.33333,2.84514a2.83227,5.1168 0 0 0 2.04391,3.65562l3.19141,0l0.16351,0.11606l0,14.54857l1.99134,0l0,-14.52749l0.18104,-0.11606l3.19434,0a2.86731,5.1801 0 0 0 2.0439,-3.65559l0,-0.03694l-12.80944,0l0,0.01583zm69.67086,-0.02109l-1.98551,0l0,18.38354l9.09245,0a2.82643,5.10625 0 0 0 1.73441,-3.61868l-8.84721,0l0.00586,-14.76486zm-15.27965,3.61868c1.057,-0.52752 1.94464,-2.01507 2.15779,-3.62922l-11.12468,0.03163l0,10.84024l9.10121,0l0,3.81385l-7.14199,0a3.97101,7.17407 0 0 0 -2.54319,3.69254l11.64734,0l0,-11.11452l-9.0983,0l0,-3.63451l7.00182,0zm33.92006,14.75432l1.97383,0l0,-7.39562l7.17702,0l0,7.39562l1.97089,0l0,-11.08815l-11.12175,-0.02111l0,11.10927zm-63.39023,-14.71212l7.59164,0a2.79431,5.04822 0 0 0 2.0585,-3.69254l-11.70864,0a2.80599,5.06932 0 0 0 2.0585,3.69254zm0,7.26373l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69251l-11.70864,0a2.81183,5.07987 0 0 0 2.0585,3.69251zm0,7.45893l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69254l-11.70864,0a2.80891,5.0746 0 0 0 2.0585,3.69254zm65.14507,-14.71212l7.59164,0a2.79723,5.0535 0 0 0 2.06142,-3.69254l-11.71156,0a2.80015,5.05877 0 0 0 2.0585,3.69254z" class="tds-icon-fill--primary"/>
  </g>
 </g>
</svg>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center',
                

                   }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
                  <svg width="100" height="24" xmlns="http://www.w3.org/2000/svg">
 {/* <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --> */}

 <g>
  <title>background</title>
  <rect fill="none" id="canvas_background" height="15" width="100" y="-1" x="-1"/>
  <g display="none" overflow='visible' y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="2" x="2" height="36" width="164"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <g stroke="null" id="svg_5">
   <path stroke="null" id="svg_4" fill="#000" d="m0.33333,2.84514a2.83227,5.1168 0 0 0 2.04391,3.65562l3.19141,0l0.16351,0.11606l0,14.54857l1.99134,0l0,-14.52749l0.18104,-0.11606l3.19434,0a2.86731,5.1801 0 0 0 2.0439,-3.65559l0,-0.03694l-12.80944,0l0,0.01583zm69.67086,-0.02109l-1.98551,0l0,18.38354l9.09245,0a2.82643,5.10625 0 0 0 1.73441,-3.61868l-8.84721,0l0.00586,-14.76486zm-15.27965,3.61868c1.057,-0.52752 1.94464,-2.01507 2.15779,-3.62922l-11.12468,0.03163l0,10.84024l9.10121,0l0,3.81385l-7.14199,0a3.97101,7.17407 0 0 0 -2.54319,3.69254l11.64734,0l0,-11.11452l-9.0983,0l0,-3.63451l7.00182,0zm33.92006,14.75432l1.97383,0l0,-7.39562l7.17702,0l0,7.39562l1.97089,0l0,-11.08815l-11.12175,-0.02111l0,11.10927zm-63.39023,-14.71212l7.59164,0a2.79431,5.04822 0 0 0 2.0585,-3.69254l-11.70864,0a2.80599,5.06932 0 0 0 2.0585,3.69254zm0,7.26373l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69251l-11.70864,0a2.81183,5.07987 0 0 0 2.0585,3.69251zm0,7.45893l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69254l-11.70864,0a2.80891,5.0746 0 0 0 2.0585,3.69254zm65.14507,-14.71212l7.59164,0a2.79723,5.0535 0 0 0 2.06142,-3.69254l-11.71156,0a2.80015,5.05877 0 0 0 2.0585,3.69254z" class="tds-icon-fill--primary"/>
  </g>
 </g>
                 </svg>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 5,  color: 'white', display: 'block',                 
                
}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/v2/D5603AQFwmoLcwJzq0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727010309561?e=2147483647&v=beta&t=MGvdHlWXC3_rUVgVtI6g7xPudgTzXVHS2k4REeLbT_0" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;






// 'use client'

// import { useState } from 'react'
// import {
//   Dialog,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
// } from '@headlessui/react'
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-white">
//       <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
//         <div className="flex lg:flex-1">
//           <a href="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img
//               alt=""
//               src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//               className="h-8 w-auto"
//             />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//           </button>
//         </div>
//         <PopoverGroup className="hidden lg:flex lg:gap-x-12">
//           <Popover className="relative">
//             <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
//               Product
//               <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
//             </PopoverButton>

//             <PopoverPanel
//               transition
//               className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
//             >
//               <div className="p-4">
//                 {products.map((item) => (
//                   <div
//                     key={item.name}
//                     className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
//                   >
//                     <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                       <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
//                     </div>
//                     <div className="flex-auto">
//                       <a href={item.href} className="block font-semibold text-gray-900">
//                         {item.name}
//                         <span className="absolute inset-0" />
//                       </a>
//                       <p className="mt-1 text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                 {callsToAction.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
//                   >
//                     <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </PopoverPanel>
//           </Popover>

//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Features
//           </a>
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Marketplace
//           </a>
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Company
//           </a>
//         </PopoverGroup>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Log in <span aria-hidden="true">&rarr;</span>
//           </a>
//         </div>
//       </nav>
//       <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//         <div className="fixed inset-0 z-10" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 alt=""
//                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//                 className="h-8 w-auto"
//               />
//             </a>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(false)}
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Disclosure as="div" className="-mx-3">
//                   <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
//                     Product
//                     <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
//                   </DisclosureButton>
//                   <DisclosurePanel className="mt-2 space-y-2">
//                     {[...products, ...callsToAction].map((item) => (
//                       <DisclosureButton
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
//                       >
//                         {item.name}
//                       </DisclosureButton>
//                     ))}
//                   </DisclosurePanel>
//                 </Disclosure>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Features
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Marketplace
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Company
//                 </a>
//               </div>
//               <div className="py-6">
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   )
// }
