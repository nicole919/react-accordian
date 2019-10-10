import React from "react";

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };
  state = {
    show: null
  };

  handleClick = currentIndex => {
    this.setState({
      show: currentIndex
    });
  };

  render() {
    return (
      <ul className="Accordion">
        {this.props.sections.map((section, index) => {
          return (
            <li>
              <button
                onClick={() => {
                  this.handleClick(index);
                }}
              >
                {section.title}
              </button>
              {this.state.show === index && <p>{section.content}</p>}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Accordion;
