import { OnboardingFlow } from './components/OnboardingFlow';
import {Age, FullName, InspirationalQuote, Finished, WarningMinimumAge} from './components/OnboardingFormScreens'
import './styles/index.css';
import { useCallback, useState } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onboardingFlowData, setOnboardingFlowData] = useState({})

  const onNext = useCallback((stepData) => {
    setCurrentIndex(currentIndex + 1)
    setOnboardingFlowData({
      ...onboardingFlowData,
      ...stepData
    })
  }, [currentIndex, onboardingFlowData])

  return (
    <main className='bg-[#1e3a8a] h-screen w-screen flex justify-center items-center text-center p-5'>
      <OnboardingFlow currentIndex={currentIndex} onNext={onNext} currentData={onboardingFlowData}>
        <FullName />
        <Age />
        {onboardingFlowData.age < 16 && <WarningMinimumAge />} 
        <InspirationalQuote />
        <Finished />
      </OnboardingFlow>
    </main>
  );
}

export default App;
