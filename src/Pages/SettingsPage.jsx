import Header from "../Components/commonComponents/header/Header"

import Profile from "../Components/settingsPage/Profile"
import Notifications from "../Components/settingsPage/Notifications"
import Security from "../Components/settingsPage/Security"
import ConnectedAccounts from "../Components/settingsPage/ConnectedAccounts"
import DangerZone from "../Components/settingsPage/DangerZone"
function SettingsPage() {
  return (
  	<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
  )
}

export default SettingsPage
