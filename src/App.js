import { OnboardingFlow } from './OnboardingFlow';
import {Age, FullName, InspirationalQuote, Finished, WarningMinimumAge} from './OnboardingFormScreens'
import './App.css';
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
    <OnboardingFlow currentIndex={currentIndex} onNext={onNext} currentData={onboardingFlowData}>
      <FullName />
      <Age />
      {onboardingFlowData.age < 16 && <WarningMinimumAge />} 
      <InspirationalQuote />
      <Finished />
    </OnboardingFlow>
  );
}

export default App;
