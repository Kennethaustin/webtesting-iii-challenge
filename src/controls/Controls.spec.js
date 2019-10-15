// Test away!
import React from 'react';
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer'

/*import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
*/
afterEach(cleanup)

describe("<Controls />", () => {
    it("button is off",() => {
        const { input, testid}
    }
    )
    it("renders w/o crash", () => {
      //dom tree
      const tree = renderer.create(<Controls/>)

      expect(tree.toJSON()).toMatchSnapshot()
    })
    it("close gate on click", () =>{
      const wrapper = render(<Controls />)
    })
})