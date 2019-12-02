import React from 'react';
import { shallow } from 'enzyme';
import CalculatorPad from '../../components/CalculatorPad';
import toJSON from 'enzyme-to-json'



// Snapshot
test('Should render CalculatorPad correctly', () => {
    const wrapper = shallow(<CalculatorPad />)

    expect(toJSON(wrapper)).toMatchSnapshot()
})
