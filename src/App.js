import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import { withRouter  } from 'react-router';

class App extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { value: this.props.match.params.resistance };

    this.handleChange = this.handleChange.bind(this);
  }

  // https://reactjs.org/docs/forms.html
  handleChange(event) {
    var new_resistance_val = event.target.value;
    this.props.history.push(`/${new_resistance_val}`, { resistance : new_resistance_val });
    this.setState({ value : new_resistance_val });

  }

  render() {

    const color_map = {
      0: '#000000',
      1: '#5f3f27',
      2: '#dd1010',
      3: '#c88e13',
      4: '#f0f223',
      5: '#4aac36',
      6: '#1eb6bd',
      7: '#be49e1',
      8: '#afafaf',
      9: '#ffffff',

    }


    const convert = function (n) {
      //Gives number of digits
      // convert(9999)->3
      // convert(10000)->4
      var order = Math.floor(Math.log(n) / Math.LN10
        + 0.000000001); // because float math sucks like that
      // return Math.pow(10, order);
      return order;
    }

    //The only case it gets wrong are single-digits
    var resistance_val = this.props.match.params.resistance;
    var oom = convert(resistance_val);
    var num_digits = oom + 1;

    var index1, index2, index3;

    index3 = num_digits - 2; //2 digits can remain
    var lead = Math.floor(resistance_val / Math.pow(10, index3));
    if (resistance_val < 10) {

      index1 = 0;
      index2 = resistance_val;

    } else {

      index1 = Math.floor(lead / 10);
      index2 = lead % 10;
    }

    var color1 = color_map[index1];
    var color2 = color_map[index2];
    var color3 = color_map[index3];

    var color4 = 'gold';


    const svg_style = {
      'width': '110%',
      'height': 'auto',
      'marginLeft': '-10%'
    };

    const input_style = {
      fontSize: '25vh',
      backgroundColor: 'transparent',
      position: 'fixed',
      width: '80%',
      top: '50%',
      border: '0px',
      left: '10%',
      color:'white'
    }
    //<Router> 
    return <div>

      <input type="text" value={this.state.value} onChange={this.handleChange} style={input_style} />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg8"
        version="1.1"
        viewBox="0 0 492.69214 328.4613"
        height="328.4613mm"
        width="492.69214mm"
        style={svg_style}>
        <g
          transform="translate(133.61049,0.25170138)"
          id="layer1">
          <g id="background">
            <path
              id="background_pane_1"
              d="M -133.50466,-0.26058045 H 60.76207 l 0,340.04816045 H -44.771175 Z"
              transform="matrix(1,0,-0.25881905,0.96592583,0,0)"
              fill={color1} />
            <path
              id="background_pane_2"
              d="M 60.762066,-0.26057881 H 211.19659 V 339.78758 H 60.762066 Z"

              fill={color2}
              transform="matrix(1,0,-0.25881905,0.96592583,0,0)" />
            <path
              id="background_pane_3"
              d="M 211.19659,-0.26057881 H 361.63112 V 339.78758 H 211.19659 Z"

              fill={color3}
              transform="matrix(1,0,-0.25881905,0.96592583,0,0)" />
            <path
              id="background_pane_4"
              d="m 361.6311,-0.26057881 v 0 L 448.45548,339.78758 H 361.6311 Z"

              fill={color4}
              transform="matrix(1,0,-0.25881905,0.96592583,0,0)" />
          </g>
          <path
            id="rect4576"
            d="M -1.5002731,43.391687 H 261.88036 c 1.85084,0 3.34087,1.171057 3.34087,2.625687 0,1.454631 -1.49003,2.625688 -3.34087,2.625688 H -1.5002731 c -1.850842,0 -3.34087,-1.171057 -3.34087,-2.625688 0,-1.45463 1.490028,-2.625687 3.34087,-2.625687 z"

            fill="#b2b2b3" />
          <path
            id="rect4485"
            d="m 70.73683,22.304816 c -4.755732,0 -8.584488,4.603681 -8.584488,10.32185 v 23.965651 c 0,5.718167 3.828756,10.321851 8.584488,10.321851 h 19.570382 c 3.646522,0 7.994346,-3.373437 7.994346,-3.373437 h 49.348082 c 0,0 4.34733,3.373437 7.99382,3.373437 h 21.68705 c 4.75573,0 8.58449,-4.603684 8.58449,-10.321851 V 32.626666 c 0,-5.718169 -3.82876,-10.32185 -8.58449,-10.32185 h -21.68705 c -3.77214,0 -8.1163,3.773929 -8.1163,3.773929 H 98.424031 c 0,0 -4.344599,-3.773929 -8.116819,-3.773929 z"
            fill="#dac9ae"
          />

          <g id="bands">
            <rect
              ry="0"
              rx="0"
              y="22.304823"
              x="77.050888"
              height="44.5644"
              width="11.966142"
              id="rect4530"

              fill={color1}
            />
            <rect
              ry="0"
              rx="0"
              y="26.078733"
              x="98.093033"
              height="37.461983"
              width="11.966142"
              id="rect4530-7"

              fill={color2}
            />
            <rect
              ry="0"
              rx="0"
              y="26.078733"
              x="117.92078"
              height="37.461983"
              width="11.966142"
              id="rect4530-7-7"

              fill={color3}
            />
            <rect
              ry="0"
              rx="0"
              y="22.304892"
              x="165.39787"
              height="44.609203"
              width="11.966142"
              id="rect4530-7-7-8"

              fill={color4}
            />

          </g>
          <g id="highlights">

            <path
              id="rect4485-4-0"
              d="m 66.154378,38.186262 v -3.87449 c 0,-5.34835 3.58114,-9.65431 8.029305,-9.65431 h 18.30471 c 3.410691,0 7.477328,3.15527 7.477328,3.15527 h 46.156409 c 0,0 4.06618,-3.15527 7.47685,-3.15527 h 20.28448 c 4.44816,0 8.02931,4.30596 8.02931,9.65431 v 3.87449 c 0,-5.34835 -3.58115,-9.65431 -8.02931,-9.65431 h -20.28448 c -3.41067,0 -7.47685,3.15527 -7.47685,3.15527 H 99.965721 c 0,0 -4.066637,-3.15527 -7.477328,-3.15527 h -18.30471 c -4.448165,0 -8.029305,4.30596 -8.029305,9.65431 z"
              fill="white"
              fillOpacity="0.3"

            />

            <path
              id="rect4485-4"
              d="m 62.152342,52.422862 v 4.14239 c 0,5.71816 3.828757,10.32185 8.584489,10.32185 h 19.570382 c 3.646522,0 7.994345,-3.37344 7.994345,-3.37344 h 49.347882 c 0,0 4.34733,3.37344 7.99383,3.37344 h 21.68704 c 4.75573,0 8.58449,-4.60369 8.58449,-10.32185 v -4.14239 c 0,5.71816 -3.82876,10.32185 -8.58449,10.32185 h -21.68704 c -3.6465,0 -7.99383,-3.37344 -7.99383,-3.37344 H 98.301558 c 0,0 -4.347823,3.37344 -7.994345,3.37344 H 70.736831 c -4.755732,0 -8.584489,-4.60369 -8.584489,-10.32185 z"
              fill="black"
              fillOpacity="0.4"
            />
          </g>
        </g>
      </svg >
    </div>
      //</Router>
      ;
  }
}

export default withRouter(App);
