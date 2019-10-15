// Test away!import React from 'react'
import { render, cleanup } from '@testing-library/react'	
import { render, cleanup } from '@testing-library/react'
// import '@testing-library/react/cleanup-after-each' 	// import '@testing-library/react/cleanup-after-each' 
import 'jest-dom/extend-expect'
import Display from './Display'	


afterEach(cleanup)
describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Display />)
    })

    it("renders unlocked/open as default values", () => {
        const { getByText } = render(<Display />)
        getByText(/unlocked/i)
        getByText(/open/i)
    })

    //closed

    it("displays closed if closed prop is true", () => {
        const { getByText } = render(<Display closed={true} />)
        getByText(/locked/i)
    })

    it("displays open if closed prop is false", () => {
        const { getByText } = render(<Display closed={false} />)
        getByText(/open/i)
    })
    //locked

    it("displays locked if locked prop is true", () => {
        const { getByText } = render(<Display locked={true} />)
        getByText(/locked/i)
    })
    it("displays unlocked if locked prop is false", () => {
        const { getByText } = render(<Display locked={false} />)
        getByText(/unlocked/i)
    })

it("use red-led class when locked and open", () => {
    // add data-testid to JSX
    // const wrapper = render(<Display locked={true} closed={false} />)
    // const lockedClass = wrapper.getByTestId('lockedClass')

    // console.log("hereeee", lockedClass)
    // expect(lockedClass.classList[1]).toBe('red-led')



})

it("use red-led class when unlocked and closed", () => {
    const wrapper = render(<Display locked={false} closed={true} />)

})
}) 	