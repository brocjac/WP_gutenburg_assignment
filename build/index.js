!function(){"use strict";var e,t={2:function(){var e=window.wp.blocks,t=window.wp.element,l=(window.wp.i18n,window.wp.blockEditor),o=window.wp.components,r=window.wp.data;class a extends React.Component{render(){let{attributes:e,setAttributes:a}=this.props;(0,r.select)("core/editor").getEditorSettings();const n=[{value:"small",label:"Small"},{value:"normal",label:"Normal"},{value:"large",label:"Large"},{value:"huge",label:"Huge"}],[s,c]=(0,t.useState)(),[i,u]=(0,t.useState)(n);return(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:"Basic",initialOpen:!0},(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.SelectControl,{className:"Color",label:"Quote Background Color",value:e.backgroundColorClass,onChange:e=>a({backgroundColorClass:e}),options:[{label:"default",value:""},{label:"Primary Blue",value:"bg-primary-blue"},{label:"Primary Red",value:"bg-primary-red"}]})),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(l.ColorPalette,{colors:[{name:"Very Light Grey",color:"#ededed"},{name:"Light Grey",color:"#a8a8a8"}],label:"Background Color",value:e.backgroundColor,onChange:e=>a({backgroundColor:e})})),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.ColorPicker,{color:e.textColor,onChangeComplete:e=>{a({textColor:e.hex})},disableAlpha:!0}))),(0,t.createElement)(o.PanelBody,{title:"Text Layout"},(0,t.createElement)(o.ComboboxControl,{label:"Font Size",value:s,onChange:c,options:i,onFilterValueChange:e=>u(n.filter((t=>t.label.toLowerCase().startsWith(e.toLowerCase()))))})))}}(0,e.registerBlockType)("jbrock/dat-assignment",{edit:function(e){let{attributes:r,setAttributes:n}=e;const{date:s}=r;return(0,t.createElement)("p",(0,l.useBlockProps)(),(0,t.createElement)(a,{attributes:r,setAttributes:n}),(0,t.createElement)("div",{className:"assets"},(0,t.createElement)("div",{className:"photo"},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{allowedTypes:["image"],onSelect:e=>{n({imgUrl:e.sizes.thumbnail.url})},render:e=>{let{open:l}=e;return(0,t.createElement)("img",{src:r.imgUrl,onClick:l})}}))),(0,t.createElement)(o.DateTimePicker,{currentDate:s,onChange:e=>(e=>{var t=moment(e).format("YYYY-MM-DD HH:mm");n({date:t})})(e),is12Hours:!0})),(0,t.createElement)(l.RichText,{tagName:"div",placeholder:"Lorem ipsum...",allowFormats:["core/bold","core/italic"],value:r.quote,onChange:e=>n({quote:e})}))},save:function(e){let{attributes:o}=e;const{date:r}=o;let a={color:o.textColorClass?"":o.textColor,backgroundColor:o.backgroundColor},n=[o.backgroundColorClass,o.textColorClass];return(0,t.createElement)("div",l.useBlockProps.save({className:n,style:a}),(0,t.createElement)("div",{className:"quote-profile"},(0,t.createElement)("div",{className:"photo"},(0,t.createElement)("img",{src:o.imgUrl,alt:"photo of _____"})),(0,t.createElement)("p",null,r)),(0,t.createElement)(l.RichText.Content,{tagName:"div",className:"quote",value:o.quote}))}})}},l={};function o(e){var r=l[e];if(void 0!==r)return r.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=function(t,l,r,a){if(!l){var n=1/0;for(u=0;u<e.length;u++){l=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<l.length;c++)(!1&a||n>=a)&&Object.keys(o.O).every((function(e){return o.O[e](l[c])}))?l.splice(c--,1):(s=!1,a<n&&(n=a));if(s){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[l,r,a]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,a,n=l[0],s=l[1],c=l[2],i=0;if(n.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(l);i<n.length;i++)a=n[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},l=self.webpackChunkdat_assignment=self.webpackChunkdat_assignment||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var r=o.O(void 0,[431],(function(){return o(2)}));r=o.O(r)}();