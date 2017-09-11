import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  render(){
    return (
        <div>
            <div className="box box-primary">
              <div className="title">运营主题库管理</div>
              <div className="box-body">
                主题库内容
              </div>
            </div>
        </div>
    );
  }
}

ReactDOM.render (<App />, document.getElementById('app'));
