import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

import AccordionItem from './AccordionItem';

class Accordion extends Component {
  constructor(props) {
    super(props);

    const { children } = props;

    const accordionItems = Children.toArray(children);

    if (accordionItems.some(item => item.type.name !== 'AccordionItem')) {
      throw new Error('Children are only AccordionItem components');
    }

    this.toggleOpen = this.toggleOpen.bind(this);

    const itemStatus = accordionItems.map(item => !!item.props.isOpen);

    this.state = { itemStatus };
  }

  toggleOpen(itemIndex) {
    return () => {
      const { accordion } = this.props;

      this.setState(currentState => {
        const status = !currentState.itemStatus[itemIndex];
        const itemStatus = accordion
          ? Array(currentState.itemStatus.length).fill(false)
          : [...currentState.itemStatus];
        itemStatus[itemIndex] = status;

        return { itemStatus };
      });
    };
  }

  render() {
    const { itemStatus } = this.state;
    const { children } = this.props;

    const accordionItems = Children.toArray(children).map((item, itemIndex) => {
      return {
        ...item,
        props: {
          ...item.props,
          isOpen: itemStatus[itemIndex],
          toggleOpen: this.toggleOpen(itemIndex),
        },
      };
    });
    return <div className="Accordion">{accordionItems}</div>;
  }
}

Accordion.defaultProps = {
  accordion: false,
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(AccordionItem),
  accordion: PropTypes.bool,
};

export default Accordion;
