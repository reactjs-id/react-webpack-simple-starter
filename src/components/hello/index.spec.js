import { expect } from 'chai';
import React from 'react';
import skinDeep from 'skin-deep';

import Hello from './index';

const $ = React.createElement;

describe('Hello Component', () => {
  const tree = skinDeep.shallowRender($(Hello));
  const vdom = tree.getRenderOutput();

  it('should render a React Component', () => {
    expect(vdom).to.have.property('type', 'div');
  });

  it('should have two children', () => {
    expect(vdom.props.children.length).to.equal(2);
  });

  it('should render `Halo Dunia` on h1', () => {
    let target = vdom.props.children[0];
    expect(target).to.have.property('type', 'h1');
    expect(target.props.children).to.equal('Halo Dunia!');
  });

  it('should render `Selamat belajar ReactJS` on p', () => {
    let target = vdom.props.children[1];
    expect(target).to.have.property('type', 'p');
    expect(target.props.children).to.equal('Selamat belajar ReactJS');
  });
});
