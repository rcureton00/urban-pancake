import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GoogleApiComponent} from 'google-maps-react';
let secretKeys = null;
if(!process.env['MONGOOSE_URI']) {
  secretKeys = require('../../env/config');
}

import Map from '../components/Map.jsx'
class Container extends Component {
  render(){
    console.log("AHHHHHH REED!" , this.props)
    if(!this.props.loaded){
      return (
        <div> Loading... </div>
      )
    }
    if(this.props.loaded){
      return (
        <div className="map-container">
          <h4>There should be a map below:</h4>
          <Map visible={true} google={this.props.google}/>
        </div>
      )
    }
  }
}

export default GoogleApiComponent({
  apiKey: secretKeys.GMAP_API_KEY
})(Container)



