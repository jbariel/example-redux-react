import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';


const mockStore = configureStore([]);

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = { addTodo: jest.fn() };
    const enzymeWrapper = shallow(<Counter {...props} />);
  
    return {
        props,
        enzymeWrapper
    };
}

describe('Counter tests', () => {
    let store;
    let component;
    
    beforeEach(() => {
        store = mockStore({
            count: 0
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should fire actions on button click', () => {
        renderer.act(() => {
            let btns = component.root.findAllByType('button');
            expect(btns.length).toBe(2);
            btns.forEach(b => b.props.onClick());
        });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
    });

    
});