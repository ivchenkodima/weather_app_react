import React from 'react';

const LIST = [{
    name: 'For today',
    count: 1,
  }, {
    name: 'For 7 days',
    count: 7,
  }, {
    name: 'For all month',
    count: 31,
}];

class Selector extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    this.props.onSelect(e.target.value);
  }

  render() {
    return (
      <div>
        {
          LIST.map((i, key) => <span key={key}>
            <label>{i.name}</label>
            <input type="radio" name="select" value={i.count} onChange={this.onSelect} />
          </span>)
        }
      </div>
    );
  }
}
export default Selector;
