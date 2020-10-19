(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(91)),i={id:"contributing-segment",title:"Add Segment",sidebar_label:"Add Segment"},c={unversionedId:"contributing-segment",id:"contributing-segment",isDocsHomePage:!1,title:"Add Segment",description:"Create the logic",source:"@site/docs/contributing-segment.md",slug:"/contributing-segment",permalink:"/docs/contributing-segment",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/contributing-segment.md",version:"current",sidebar_label:"Add Segment",sidebar:"docs",previous:{title:"Time",permalink:"/docs/time"}},p=[{value:"Create the logic",id:"create-the-logic",children:[]},{value:"Create a name for your Segment",id:"create-a-name-for-your-segment",children:[]},{value:"Add the SegmentType mapping",id:"add-the-segmenttype-mapping",children:[]},{value:"Test your functionality",id:"test-your-functionality",children:[]},{value:"Add the documentation",id:"add-the-documentation",children:[]},{value:"Map the new documentation in the sidebar",id:"map-the-new-documentation-in-the-sidebar",children:[]},{value:"Create a pull request",id:"create-a-pull-request",children:[]}],s={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-the-logic"},"Create the logic"),Object(o.b)("p",null,"Add a new file following this convention: ",Object(o.b)("inlineCode",{parentName:"p"},"new_segment.go"),".\nEnsure ",Object(o.b)("inlineCode",{parentName:"p"},"new")," is a single verb indicating the context the segment renders."),Object(o.b)("p",null,"You can use the following template as a guide."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\ntype new struct {\n    props          *properties\n    env            environmentInfo\n}\n\nconst (\n    //NewProp switches something\n    NewProp Property = "newprop"\n)\n\nfunc (n *new) enabled() bool {\n    true\n}\n\nfunc (n *new) string() string {\n    newText := n.props.getString(NewProp, "\\uEFF1")\n    return newText\n}\n\nfunc (n *new) init(props *properties, env environmentInfo) {\n    n.props = props\n    n.env = env\n}\n')),Object(o.b)("p",null,'When it comes to properties, make sure to use the UTF32 representation (e.g. "\\uEFF1") rather than the icon itself.\nThis will facilitate the review process as not all environments display the icons based on the font being used.\nYou can find these values and query for icons easily at ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nerdfonts.com/cheat-sheet"}),"Nerd Fonts"),"."),Object(o.b)("p",null,"For each segment, there's a single test file ensuring the functionality going forward. The convention\nis ",Object(o.b)("inlineCode",{parentName:"p"},"new_segment_test.go"),", have a look at existing segment tests for inspiration."),Object(o.b)("h2",{id:"create-a-name-for-your-segment"},"Create a name for your Segment"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/blob/main/segment.go"}),Object(o.b)("inlineCode",{parentName:"a"},"segment.go"))," contains the list of available ",Object(o.b)("inlineCode",{parentName:"p"},"SegmentType"),"'s, which gives them a name we can map from the\n",Object(o.b)("inlineCode",{parentName:"p"},".json")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/tree/main/themes"}),"themes"),"."),Object(o.b)("p",null,"Add your segment."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'//New is brand new\nNew SegmentType = "new"\n')),Object(o.b)("h2",{id:"add-the-segmenttype-mapping"},"Add the SegmentType mapping"),Object(o.b)("p",null,"Map your ",Object(o.b)("inlineCode",{parentName:"p"},"SegmentType")," to your Segment in the ",Object(o.b)("inlineCode",{parentName:"p"},"mapSegmentWithWriter")," function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"New: &new{},\n")),Object(o.b)("h2",{id:"test-your-functionality"},"Test your functionality"),Object(o.b)("p",null,"Even with unit tests, it's a good idea to build and validate the changes."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"go build -o $GOPATH/bin/oh-my-posh\n")),Object(o.b)("h2",{id:"add-the-documentation"},"Add the documentation"),Object(o.b)("p",null,"Create a new ",Object(o.b)("inlineCode",{parentName:"p"},"markdown")," file underneath the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/tree/main/docs/docs"}),Object(o.b)("inlineCode",{parentName:"a"},"docs/docs"))," folder called ",Object(o.b)("inlineCode",{parentName:"p"},"new-segment.md"),".\nUse the following template as a guide."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markdown"}),'---\nid: new\ntitle: New\nsidebar_label: New\n---\n\n## What\n\nDisplay something new.\n\n## Sample Configuration\n\n```json\n{\n  "type": "new",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#193549",\n  "background": "#ffeb3b",\n  "properties": {\n    "newprop": "\\uEFF1"\n  }\n}\n```\n\n## Properties\n\n- newprop: `string` - the new text to show - defaults to `\\uEFF1`\n')),Object(o.b)("h2",{id:"map-the-new-documentation-in-the-sidebar"},"Map the new documentation in the sidebar"),Object(o.b)("p",null,"Open ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/blob/main/docs/sidebars.js"}),Object(o.b)("inlineCode",{parentName:"a"},"sidebars.js"))," and add your document id (",Object(o.b)("inlineCode",{parentName:"p"},"new"),") to the items of the Segments category."),Object(o.b)("h2",{id:"create-a-pull-request"},"Create a pull request"),Object(o.b)("p",null,"And be patient, I'm going as fast as I can \ud83c\udfce"))}l.isMDXComponent=!0},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(t),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);