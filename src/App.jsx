
import './App.css'
import ImageAlert from './components/Alert with Custom Image'
import BasicAlert from './components/Basic Alert'
import ConfirmAlert from './components/Confirmation Alert'
import CustomButtonAlert from './components/Custom Button Text'
import InputAlert from './components/Input Alert'
import LoadingAlert from './components/Loading Animation Alert'
import StatusAlerts from './components/Success and Error Alerts'
import TimerAlert from './components/Timer-Based Alert'

function App() {
  

  return (
    <div>
      <BasicAlert/>
      <ConfirmAlert/>
      <InputAlert/>
      <CustomButtonAlert/>
      <TimerAlert/>
      <StatusAlerts/>
      <LoadingAlert/>
      <ImageAlert/>
    </div>
  )
}

export default App
