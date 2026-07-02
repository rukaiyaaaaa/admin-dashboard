import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import OverviewPage from './Pages/OverviewPage'
import ProductsPage from './Pages/ProductPage'
import UsersPage from './Pages/UsersPage'
import SettingsPage from './Pages/SettingsPage'
import SalesPage from './Pages/SalesPage'
import AnalyticsPage from './Pages/AnalyticsPage'
import OrdersPage from './Pages/OrdersPage'


import Sidebar from './components/commonComponents/sidebar/SideBar'

function App() {
  return (
   <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
   {/* Background */}
   <div className = "fixed inset-0 z-0">
    <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
    <div className="absolute inset-0 backdrop-blur-sm" />
   </div>

   {/* ---------------SideBar-------------------------------- */}

   <Sidebar />

   <Routes>
    <Route path="/" element={<OverviewPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/users" element={<UsersPage />} />
    <Route path="/sales" element={<SalesPage />} />
    <Route path="/settings" element={<SettingsPage />} />
    <Route path="/analytics" element={<AnalyticsPage />} />
    <Route path="/orders" element={<OrdersPage />} />
   </Routes>
    
   </div>
  )
}

export default App
