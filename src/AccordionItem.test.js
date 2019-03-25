import React from 'react';
import renderer from 'react-test-renderer';

import AccordionItem from './AccordionItem';

describe('AccordionItem', () => {
  it('shallow render', () => {
    const component = renderer.create(
      <AccordionItem title="Hello World">
        <p>Item</p>
        <p>Another</p>
      </AccordionItem>
    );

    const tree = component.toJSON();

    console.log(tree);
    console.log(tree.props);
  });
});
