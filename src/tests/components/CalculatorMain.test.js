import React from 'react';
import { shallow, mount } from 'enzyme';
import CalculatorMain from '../../components/CalculatorMain';
import toJSON from 'enzyme-to-json'


test('Should render CalculatorMain correctly', () => {
    const wrapper = shallow(<CalculatorMain />)

    expect(toJSON(wrapper)).toMatchSnapshot()
})



// onSubmit
test('Should execute onSubmit method and mutate the state properly', () => {
    const wrapper = mount(<CalculatorMain />)

    wrapper.setState({ expression: "3+2" })
    wrapper.instance().onSubmit()

    expect(wrapper.state('value')).toEqual(5)
})



// onPadClick
test('Should execute onPadClick method and mutate the state properly', () => {
    const wrapper = mount(<CalculatorMain />)

    wrapper.setState({ expression: "3+2" })
    wrapper.instance().onPadClick('+5')

    expect(wrapper.state('expression')).toEqual('3+2+5')
})



// onAns
test('Should execute onAns method and mutate the state properly', () => {
    const wrapper = mount(<CalculatorMain />)

    wrapper.setState({ ans: "45", value: '', expression: "25+20+" })
    wrapper.instance().onAns()

    expect(wrapper.state('expression')).toEqual('25+20+45')
})



// onDelete
test('Should execute onDelete method and mutate the state properly', () => {
    const wrapper = mount(<CalculatorMain />)

    wrapper.setState({ expression: "25+20+" })
    wrapper.instance().onDelete()

    expect(wrapper.state('expression')).toEqual('25+20')
})



// onClear
test('Should execute onClear method and mutate the state properly', () => {
    const wrapper = mount(<CalculatorMain />)

    wrapper.setState({ expression: "25+20+" })
    wrapper.instance().onClear()

    expect(wrapper.state('expression')).toEqual('')
})
