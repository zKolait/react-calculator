import React from 'react';
import { shallow } from 'enzyme';
import CalculatorScreen from '../../components/CalculatorScreen';
import toJSON from 'enzyme-to-json'



test('Should render calculator screen', () => {
    const wrapper = shallow(<CalculatorScreen expression="1+2" value="3" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
})


test('Should render calculator screen with good expression', () => {
    const wrapper = shallow(<CalculatorScreen expression="1+2" value="3" />)

    expect(wrapper.find('p.calculator-expression').text()).toBe('1+2')
})


test('Should render calculator screen with good value', () => {
    const wrapper = shallow(<CalculatorScreen expression="1+2" value="3" />)

    expect(wrapper.find('p.calculator-value').text()).toBe('3')
})
