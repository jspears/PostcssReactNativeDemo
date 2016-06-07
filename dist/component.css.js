
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
     
          var IMPORTS = [];
          function importCss(imp){
              IMPORTS.push(imp.default);
              Object.keys(imp).map((key)=>{
                 if (key === 'default' || key == 'onChange' || key === 'DimensionComponent' || key == 'unpublish')
                   return;
                 exports[key] = imp[key]; 
              });
          }
          
         importCss(require("./welcome.css"));
          

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
if(!css["green"]) css["green"] = {};


 css["green"].marginTop = 10;
 css["green"].marginRight = 10;
 css["green"].marginBottom = 10;
 css["green"].marginLeft = 10;;

if (!css) var css = {};
if(!css["text"]) css["text"] = {};

css["text"].color = "purple";
if ((FEATURES['orientation'] && FEATURES['orientation']( "landscape", config ))
){

if (!css) var css = {};
if(!css["text"]) css["text"] = {};

css["text"].color = "red";
}

         
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
     
    var pkgs = {};
    pkgs.Native = require("react-native").View;
pkgs.Text = require("react-native").Text;
 
     
     //tagsToType
     
(function(e){
       var _style = function(config){
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
if(!css["__current:checked"]) css["__current:checked"] = {};

css["__current:checked"].color = "blue";

 css["__current:checked"].backgroundColor = "white";




if (!css) var css = {};
if(!css["__current"]) css["__current"] = {};

css["__current"].color = "red";

 css["__current"].backgroundColor = "teal";

 css["__current"].marginTop = 10;
 css["__current"].marginRight = 10;
 css["__current"].marginBottom = 10;
 css["__current"].marginLeft = 10;

 css["__current"].paddingTop = 5;
 css["__current"].paddingRight = 5;
 css["__current"].paddingBottom = 5;
 css["__current"].paddingLeft = 5;
if ((FEATURES['orientation'] && FEATURES['orientation']( "landscape", config ))
){


if (!css) var css = {};
if(!css["__current"]) css["__current"] = {};

css["__current"].color = "yellow";

 css["__current"].backgroundColor = "purple";
}

         
        return StyleSheet.create(flatten(IMPORTS, css));
    };
       var _sstyle;
       //keep style in sync with
       publish.subscribe( config =>{
            _sstyle = _style(config);    
       });
        
       function handleClass(start, className){
          return (className || '').split(/s+?/).reduce(function(ret, name){
             if (e.StyleSheet && e.StyleSheet[name]) ret.push(e.StyleSheet[name]);
             if (_sstyle[name]) ret.push(_sstyle[name]);
             return ret;
           },start);
       }
       e["StyledText"] = React.createClass({
       displayName: "StyledText",
       componentWillMount(){
          //forceUpdate when orientation changes.
          var forceUpdate = this.forceUpdate.bind(this);
          this._unlisten = publish.subscribe(function(){ 
             forceUpdate()
          });
       },
       componentWillUnmount(){
          //stop forceUpdate when unmounting.
          this._unlisten && this._unlisten();
       },
       onLayout(e){
         console.log('layout', e);
       },
       handleChecked:function(){
                this.setState({checked:!(this.state && this.state.checked)});
            },

       render(){
            
            var children = this.props.children;   
            var props = Object.assign({}, this.props);
            delete props.children;
            props.style = handleClass( [_sstyle.__current], this.props.className);
            
            props.onPress = this.handleChecked;
            if (this.state && this.state.checked){
              
                props.style = handleClass(props.style, '__current:checked');
            }
            
            return React.createElement(pkgs.Text, props, children);  
       }
    
    });
})(exports);
;

(function(e){
       var _style = function(config){
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
if(!css["__current"]) css["__current"] = {};


  css["__current"].borderTopWidth = 2;
  css["__current"].borderStyle = "solid";
  css["__current"].borderTopColor = "red";
  css["__current"].borderRightWidth = 2;
  css["__current"].borderStyle = "solid";
  css["__current"].borderRightColor = "red";
  css["__current"].borderBottomWidth = 2;
  css["__current"].borderStyle = "solid";
  css["__current"].borderBottomColor = "red";
  css["__current"].borderLeftWidth = 2;
  css["__current"].borderStyle = "solid";
  css["__current"].borderLeftColor = "red";
css["__current"].height = 100;
css["__current"].width = 200;

  css["__current"].borderTopColor = "green";
if ((FEATURES['orientation'] && FEATURES['orientation']( "landscape", config ))
){


if (!css) var css = {};
if(!css["__current"]) css["__current"] = {};


  css["__current"].borderTopColor = "purple";
  css["__current"].borderRightColor = "purple";
  css["__current"].borderBottomColor = "purple";
  css["__current"].borderLeftColor = "purple";
css["__current"].width = 500;
}

         
        return StyleSheet.create(flatten(IMPORTS, css));
    };
       var _sstyle;
       //keep style in sync with
       publish.subscribe( config =>{
            _sstyle = _style(config);    
       });
        
       function handleClass(start, className){
          return (className || '').split(/s+?/).reduce(function(ret, name){
             if (e.StyleSheet && e.StyleSheet[name]) ret.push(e.StyleSheet[name]);
             if (_sstyle[name]) ret.push(_sstyle[name]);
             return ret;
           },start);
       }
       e["View"] = React.createClass({
       displayName: "View",
       componentWillMount(){
          //forceUpdate when orientation changes.
          var forceUpdate = this.forceUpdate.bind(this);
          this._unlisten = publish.subscribe(function(){ 
             forceUpdate()
          });
       },
       componentWillUnmount(){
          //stop forceUpdate when unmounting.
          this._unlisten && this._unlisten();
       },
       onLayout(e){
         console.log('layout', e);
       },
       
       render(){
            
            var children = this.props.children;   
            var props = Object.assign({}, this.props);
            delete props.children;
            props.style = handleClass( [_sstyle.__current], this.props.className);
            
            return React.createElement(pkgs.Native, props, children);  
       }
    
    });
})(exports);


     //publish current config;
     publish(makeConfig());
     //export default
     exports.default = exports.StyleSheet;
  
  