(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(n,e,t){n.exports=t(25)},22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(7),i=(t(22),t(3)),c=t(8),u=t(9),s=t(14),l=t(10),f=t(15),d=t(1),p=[{question:"What is React",answers:["JavaScript library","HTML Framework","CSS Framework","SCSS Framework"],correct:"JavaScript library"},{question:"data type in JS is not",answers:["Null","Boolean","String","isNaN(x)"],correct:"isNaN(x)"},{question:"Random Question",answers:["Good Answer","Wrong","Wrong","Wrong"],correct:"Good Answer"},{question:"Random Question",answers:["Good Answer","Wrong","Wrong","Wrong"],correct:"Good Answer"},{question:"Random Question",answers:["Good Answer","Wrong","Wrong","Wrong"],correct:"Good Answer"}],b=t(2);function m(){var n=Object(d.a)(["\n    height:25px;\n    width:25px;\n    background-color:grey;\n    ",";\n    border-radius:50%;\n    margin-right: 5px;\n    transition: .3s ease-in;\n"]);return m=function(){return n},n}function h(){var n=Object(d.a)(["\nmargin: 15px 0;\ndisplay: flex;\njustify-content: center;\n"]);return h=function(){return n},n}var g=b.a.div(h()),v=b.a.div(m(),(function(n){return function(n){switch(n){case!0:return"background:#42f581;";case!1:return"background: #f54e42;";default:return"background: #e6edea"}}(n.balls)})),x=function(n){var e=n.questionBank,t=n.historyAnswers,r=e.map((function(n,e){var r=t[e];return o.a.createElement(v,{key:e,balls:r})}));return o.a.createElement(g,null,r)};function w(){var n=Object(d.a)(["\n  font-weight:bold;\n  font-size: 16px;\n  height: 50px;\n  width:80%;\n  background-color:#eee;\n  color:cadetblue;\n  margin: 5px 0;\n  border: 1px solid #5990C4;\n  border-radius:25px;\n  color:#004A7C;\n  cursor: pointer;\n  position:relative;\n  transition: .2s ease-in;\n  background:transparent;\n\n  &:hover {\n      background-color: #5990C4;\n      color:#fff;\n  }\n\n  &:before{\n      content:'A';\n      position:absolute;\n      display:flex;\n      justify-content:center;\n      align-items:center;\n      top:50%;\n      left:10px;\n      height:30px;\n      width:30px;\n      transform:translateY(-50%);\n      background-color: #5990C4;\n      border-radius:50%;\n      color:#fff;\n      font-size:13px;\n\n  }\n\n  &:nth-of-type(2)::before{\n      content:'B';\n  }\n  &:nth-of-type(3)::before {\n      content:'C';\n\n  }\n  &:nth-of-type(4)::before{\n      content:'D';\n  }\n  &:hover::before {\n      border:1px solid #fff;\n  }\n"]);return w=function(){return n},n}function k(){var n=Object(d.a)(["\n    font-size:25px;\n"]);return k=function(){return n},n}function q(){var n=Object(d.a)(["\n    font-size:25px;\n    width:100%;\n    padding:20px 0;\n"]);return q=function(){return n},n}function y(){var n=Object(d.a)(["\n    background-color:#5990C4;\n    padding:25px;\n"]);return y=function(){return n},n}function j(){var n=Object(d.a)(["\n    padding:20px 0;\n    background-color:#f9f9f9;\n    \n"]);return j=function(){return n},n}function O(){var n=Object(d.a)(["\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n   height:10px;\n   ",";\n   background-color: #42F581;\n"]);return O=function(){return n},n}function S(){var n=Object(d.a)(["\n    position:relative;\n    border:2px solid #5990C4;\n    color:#004A7C;\n    color:#fff;\n  \n"]);return S=function(){return n},n}function A(){var n=Object(d.a)(["\n    position:absolute;\n    padding:2.5rem;\n    font-size:2.5rem;\n    color:#fff;\n    background-color: #5270C4;\n    height:60px;\n    width:60px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    border-radius:50%;\n"]);return A=function(){return n},n}var E=b.a.div(A()),I=b.a.section(S()),C=b.a.div(O(),(function(n){return function(n){return"width:".concat(10*n,"%")}(n.width)})),Q=b.a.div(j()),z=b.a.div(y()),T=b.a.h1(q()),N=b.a.div(k()),W=b.a.button(w()),B=function(n){var e=n.questionTime,t=n.questionNumber,r=n.currentQuestionIndex,a=n.questionBank,i=n.fn,c=a[r],u="".concat(r+1," / ").concat(t),s=c.answers.map((function(n,e){return o.a.createElement(W,{key:e,value:n,onClick:function(){return i(n)}},n)}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,null,o.a.createElement(z,null,o.a.createElement(E,null,e),o.a.createElement(T,null,c.question),o.a.createElement(N,null,u),o.a.createElement(C,{width:e}),o.a.createElement(x,n)),o.a.createElement(Q,null,s)))};function F(){var n=Object(d.a)(["\nfont-size:25px;\ncolor:#fff;\npadding: 25px;\n\n"]);return F=function(){return n},n}function G(){var n=Object(d.a)(["\nfont-size:25px;\ncolor:#fff;\npadding: 5px 15px;\nbackground-color:#004A7C;\nborder:none;\ncursor:pointer;\n    &:hover {\n    opacity: .5\n    }\n"]);return G=function(){return n},n}var H=b.a.button(G()),J=b.a.h1(F()),R=function(n){var e=n.props,t=n.fn;return o.a.createElement(o.a.Fragment,null,o.a.createElement(J,null,"Your Score : ",e.score,o.a.createElement(x,e),o.a.createElement(H,{onClick:t},"Reset")))};function D(){var n=Object(d.a)(["\n  margin-top:40%;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n  min-width:500px;\n"]);return D=function(){return n},n}var M=b.a.section(D()),Y=function(n){function e(){var n,t;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(s.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(o)))).state={questionBank:Object(i.a)(p),currentQuestionIndex:0,score:0,historyAnswers:[],questionNumber:Object(i.a)(p).length,quizStatus:!0,questionTime:10},t.questionClickHandler=function(n){clearInterval(t.timer),t.checkAnswer(n),t.incrementIndexHandler(),t.setState({questionTime:10}),t.state.questionNumber!==t.state.currentQuestionIndex+1&&(t.timer=setInterval(t.tick,1e3))},t.tick=function(){t.state.questionTime>0?t.setState({questionTime:t.state.questionTime-1}):(clearInterval(t.timer),t.timer=setInterval(t.tick,1e3),t.incrementIndexHandler(),t.setState({questionTime:10}))},t.checkAnswer=function(n){var e=t.state;n===e.questionBank[e.currentQuestionIndex].correct?t.setState((function(n){return{score:n.score+1,historyAnswers:[].concat(Object(i.a)(n.historyAnswers),[!0])}})):t.setState((function(n){return{historyAnswers:[].concat(Object(i.a)(n.historyAnswers),[!1])}}))},t.incrementIndexHandler=function(){var n=t.state;if(n.currentQuestionIndex+1===n.questionNumber)return t.checkAnswer(),setTimeout((function(){t.changeQuizStatus()}),600),void clearInterval(t.timer);0===t.state.questionTime?t.setState((function(n){return{currentQuestionIndex:n.currentQuestionIndex+1,historyAnswers:[].concat(Object(i.a)(n.historyAnswers),[!1])}})):t.setState((function(n){return{currentQuestionIndex:n.currentQuestionIndex+1}}))},t.changeQuizStatus=function(){t.setState({quizStatus:!1})},t.resetQuiz=function(){t.setState({questionBank:Object(i.a)(p),currentQuestionIndex:0,score:0,historyAnswers:[],questionNumber:Object(i.a)(p).length,quizStatus:!0,questionTime:10}),clearInterval(t.timer),t.timer=setInterval(t.tick,1e3)},t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.state.quizStatus&&(this.timer=setInterval(this.tick,1e3))}},{key:"render",value:function(){var n=this.state;return o.a.createElement(o.a.Fragment,null,o.a.createElement(M,null,this.state.quizStatus?o.a.createElement(B,Object.assign({fn:this.questionClickHandler},n)):o.a.createElement(R,{props:this.state,fn:this.resetQuiz})))}}]),e}(r.Component);Object(a.render)(o.a.createElement(Y,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fdee3d84.chunk.js.map