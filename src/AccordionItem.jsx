import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AccordionItem({ title, children, isOpen, toggleOpen }) {
  const AccordionItemClasses = classNames({
    AccordionItem: true,
    'AccordionItem--open': isOpen,
  });

  const AccordionItemIconClasses = classNames({
    AccordionItem__Icon: true,
    fa: true,
    'fa-plus': !isOpen,
    'fa-minus': isOpen,
  });

  return (
    <div className={AccordionItemClasses}>
      <div className="AccordionItem__Head" onClick={toggleOpen}>
        <h3 class="AccordionItem__Title">{title}</h3>
        <div>
          <i className={AccordionItemIconClasses} />
        </div>
      </div>
      <div className="AccordionItem__Body">
        <div className="AccordionItem__BodyInner">{children}</div>
      </div>
    </div>
  );
}

AccordionItem.defaultProps = {
  isOpen: false,
};

AccordionItem.propTypes = {
  // children: PropTypes.oneOfType([
  //   PropTypes.element,
  //   PropTypes.arrayOf(PropTypes.element),
  // ]).isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  // toggleOpen: PropTypes.fun,
};

export default AccordionItem;
