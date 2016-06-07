
     var listen = require('postcss-react-native/dist/listen').default;
     var FEATURES = require('postcss-react-native/dist/features').default;
     var flatten = require('postcss-react-native/dist/flatten').default;
     var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
     const publish = listen();
     const unpublish = listen();
     function makeConfig(){
          var c = Dimensions.get('window');
          c.vendor = Platform.OS;
          return c;
     }
     RCTDeviceEventEmitter.addListener('didUpdateDimensions', function(update) {
         publish(makeConfig());
     });

     Object.defineProperty(exports, "__esModule", {
            value: true
     });
     //imports
     var IMPORTS = []
     exports.unsubscribe = unpublish.subscribe(publish.property(exports, 'StyleSheet', function(config){
         if (!css) var css = {};
         
const px = 1, 
      vendor = config.vendor,
      inch = 96,
      vh = config.height / 100,
      vw = config.width / 100, 
      percentageW = config.componentWidth || config.width,
      percentageH = config.componentHeight || 0,
      units = {
      px : px,
      vh : vh,
      vw : vw,
      'in':inch, 
      pt:(inch/72), 
      em:1, 
      pc:12 * (inch/72),
      vmin:Math.min(vw, vh),
      vmax: Math.max(vw, vh) };




if (!css) var css = {};
if(!css["container"]) css["container"] = {};


 css["container"].flex = 1;

 css["container"].justifyContent = "center";

 css["container"].alignItems = "center";

 css["container"].backgroundColor = "#c0c0c0";;



if (!css) var css = {};
if(!css["welcome"]) css["welcome"] = {};


 css["welcome"].fontSize = 20;
 css["welcome"].fontFamily = "Thonburi";

 css["welcome"].textAlign = "center";

 css["welcome"].marginTop = 0;
 css["welcome"].marginRight = 0;
 css["welcome"].marginBottom = 0;
 css["welcome"].marginLeft = 0;;




if (!css) var css = {};
if(!css["instructions"]) css["instructions"] = {};


 css["instructions"].textAlign = "center";
css["instructions"].color = "#333333";

 css["instructions"].marginBottom = 5;

  css["instructions"].borderTopWidth = 1;
  css["instructions"].borderStyle = "solid";
  css["instructions"].borderTopColor = "green";
  css["instructions"].borderRightWidth = 1;
  css["instructions"].borderStyle = "solid";
  css["instructions"].borderRightColor = "green";
  css["instructions"].borderBottomWidth = 1;
  css["instructions"].borderStyle = "solid";
  css["instructions"].borderBottomColor = "green";
  css["instructions"].borderLeftWidth = 1;
  css["instructions"].borderStyle = "solid";
  css["instructions"].borderLeftColor = "green";

         
        return StyleSheet.create(flatten(IMPORTS, css));
    }));

     exports.onChange = publish;
     
     var ReactNative = require('react-native');

     var Dimensions = ReactNative.Dimensions;
     var StyleSheet = ReactNative.StyleSheet;
     var Platform = ReactNative.Platform;
     var React = require('react');
     exports.DimensionComponent = React.createClass({
        componentWillMount:function() {
            var self = this;
            this._listen = publish.subscribe(function(){
              self.forceUpdate()
            });
        },
        componentWillUnmount:function() {
            this._listen && this._listen();
        },
        render(){
          throw new Error("Should implement render");
        }
     });
     
     //
 
     
     //namespace require
     
     
     //tagsToType
     

     //publish current config;
     publish(makeConfig());
     //export default
     exports.default = exports.StyleSheet;
  
  