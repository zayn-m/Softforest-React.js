(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{752:function(e,t,a){"use strict";a.r(t);var c=a(8),r=a(26),n=a(14),l=a(15),o=a(17),s=a(16),i=a(18),m=a(0),u=a.n(m),d=a(38),h=a.n(d),p=a(22),E=a(150),f=a(23),k=function(e){return u.a.createElement("div",{className:"row col-12 mx-auto border-bottom bg-white text-dark"},u.a.createElement("div",{className:"col-3 col-sm-3 col-md-3 "},u.a.createElement("img",{className:"img-fluid my-4",src:e.src,alt:e.src})),u.a.createElement("div",{className:"col-7 mt-3 col-sm-7 col-md-7"},u.a.createElement("div",{className:"col-12"},u.a.createElement("h3",null,e.title),u.a.createElement("span",null,e.description.substring(0,40)))),u.a.createElement("div",{className:"col-2 mt-3 col-sm-2 col-md-2 "},u.a.createElement("h3",null,u.a.createElement("strong",null,"$",e.price),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",{style:{cursor:"pointer"}}," ",u.a.createElement("i",{onClick:e.delete,className:"fas fa-trash ml-5"})))))},b=a(436),v=a(114),g=a(31),N=b.a.confirm,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),m=0;m<l;m++)i[m]=arguments[m];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={cart:[],loading:!0,totalPrice:0,status:!1},a.deleteHandler=function(){console.log(a.state.check)},a.showConfirm=function(e,t,n){N({title:"Are you sure?",content:n,onOk:function(){var e=Object(r.a)(a.props.check.projects),n=Object(r.a)(a.state.cart),l=e.indexOf(t),o=Math.round(n[l].price);e.splice(l,1),n.splice(l,1);var s=Object(c.a)({},a.props.check,{projects:e});h.a.patch("http://127.0.0.1:8000/api/cart/".concat(a.props.userId,"/"),s).then(function(e){a.props.onCheckToCart(a.props.userId,0),a.setState({status:!0,cart:n,check:s,totalPrice:a.state.totalPrice-o})}).catch(function(e){return console.log(e)})},onCancel:function(){console.log("Cancel")}})},a.onCheckout=function(){var e={cart_id:a.props.cart_id,cart:a.state.cart,totalPrice:a.state.totalPrice};0!==e.cart.length&&a.props.history.push({pathname:"/order",search:"",state:e})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.token&&this.props.userId&&h.a.get("http://127.0.0.1:8000/api/cart-details/".concat(this.props.userId,"/")).then(function(t){var a=Math.round(t.data.total);e.setState({cart:t.data.projects,loading:!1,totalPrice:a})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.cart.map(function(t){return u.a.createElement(k,{key:t.id,src:t.image,title:t.title,description:t.description,price:t.price,delete:function(a){return e.showConfirm(a,t.id,t.title)}})}),a=u.a.createElement("div",{className:"mx-auto"},u.a.createElement(E.a,null));return this.state.loading||0==this.state.cart.length?0==this.state.cart.length&&(a=u.a.createElement(v.a,null)):a=u.a.createElement(u.a.Fragment,null,t,u.a.createElement("h1",{className:"ml-auto mt-4"}," Total ",u.a.createElement("strong",null," $",Math.round(this.state.totalPrice)))),u.a.createElement("section",{className:"container"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"d-md-flex flex-md-row"},u.a.createElement("div",{className:"row  border d-flex col-md-7  "},u.a.createElement("div",{className:"row col-12"},u.a.createElement("h1",{className:""},"Your cart")),u.a.createElement("div",{className:"row col-12 "},a)),u.a.createElement("div",{className:"d-flex col-md-1 "}),u.a.createElement("div",{className:"row col-md-3 border mr-auto text-center bg-white",style:{height:"20rem"}},u.a.createElement("h1",{className:"col-12 mt-3"},"Your cart total"),u.a.createElement("h1",{className:"col-12"},"$",Math.round(this.state.totalPrice)),u.a.createElement(f.a,{btnType:"Btn-primary Btn-md btn-block mx-auto d-block",clicked:this.onCheckout},"Checkout"),0===this.state.cart.length?u.a.createElement("div",{className:"col-12"},u.a.createElement("span",{className:"text-danger"},"Please add items in order to checkout")):null))))}}]),t}(m.Component);t.default=Object(p.b)(function(e){return{userId:e.authReducer.userId,token:e.authReducer.token,check:e.cartReducer.check,cart_id:e.cartReducer.check.id}},function(e){return{onCheckToCart:function(t,a){return e(g.p(t,a))}}})(w)}}]);
//# sourceMappingURL=15.d5f9fb50.chunk.js.map