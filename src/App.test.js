import React from 'react';
import ReactDOM from 'react-dom';
import App, { reducer } from './App';

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('Test reducer', () => {
    it('uses 6 as the default state value', () => {
      expect(reducer(undefined,{type:''}).count).toBe(6);
    });

    it('will increment correctly', () => {
      expect(reducer({count:0},{type:'GIMME_SOME'}).count).toBe(1);
    });

    it('will decrement correctly', () => {
      expect(reducer({count:0},{type:'TAKE_SOME'}).count).toBe(-1);
    });

    it('will ignore invalid actions correctly', () => {
      expect(reducer({count:0},{type:'FOO'}).count).toBe(0);
    });
  });
});
