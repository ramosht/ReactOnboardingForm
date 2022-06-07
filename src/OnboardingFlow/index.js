import React from "react"

// @ts-ignore: verify type later
export const OnboardingFlow = ({children, currentIndex, onNext, currentData}) => {
    const CurrentChildren = React.Children.toArray(children)[currentIndex];

    if(React.isValidElement(CurrentChildren)) {
        return React.cloneElement(CurrentChildren, {onNext, currentData})
    }

    return CurrentChildren;
}