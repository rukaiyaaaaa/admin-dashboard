import Header from "../components/commonComponents/header/Header"

import OverviewCards from "../components/analyticsPage/OverviewCards"
import RevenueChart from "../components/analyticsPage/RevenueChart"
import ChannelPerformance from "../components/analyticsPage/ChannelPerformance"
import UserRetention from "../components/analyticsPage/UserRetention"
import CustomerSegmentation from "../components/analyticsPage/CustomerSegmentation"
import AIPoweredInsights from "../components/analyticsPage/AIPoweredInsights"
import ProductPerformance from "../components/analyticsPage/ProductPerformance"

function AnalyticsPage() {
  return (
   <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Analytics Dashboard"} />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
      <OverviewCards />
      <RevenueChart />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        <ChannelPerformance />
        <ProductPerformance />
        <UserRetention />
        <CustomerSegmentation />
      </div>
      <AIPoweredInsights />

      </main>
		</div>
  )
}

export default AnalyticsPage
