webpackJsonp([3],{34:function(e,t,a){"use strict";function n(e){p||a(341)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(343),r=a.n(s),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"play-list-manager__wrapper"},[a("ul",{staticClass:"play-list-manager__tags"},[e._l(e.webScrapersOrdered,function(t){return a("li",{class:{active:e.currentWebScraper===t},on:{click:function(a){e.initWebScraper(t),e.selectMediaSource({type:"tv",id:t})}}},[a("div",{staticClass:"play-list-manager__drag-handle"}),e._v(" "),a("div",{staticClass:"play-list-manager__tag-body"},[a("div",[e._v(" "+e._s(t)+" ")]),e._v(" "),e.webScrapers[t]&&e.webScrapers[t].playList?a("div",[e._v(e._s(e.webScrapers[t].playList.length-Object.keys(e.webScrapers[t].playedMedia).length)+" New "+e._s(e.numWatched(t))+" Watched ")]):e._e()]),e._v(" "),e.webScrapers[t]&&e.webScrapers[t].settings?a("div",{staticClass:"play-list-manager__menu"},[a("span",{staticClass:"wmp-icon-mode_edit",attrs:{title:"Edit channel"},on:{click:function(a){a.stopPropagation(),e.setShowMediumSettings({medium:"tv",id:t})}}}),e._v(" "),a("span",{staticClass:"wmp-icon-close",attrs:{title:"Delte channel"},on:{click:function(a){a.stopPropagation(),e.showConfirmDelte=t}}})]):e._e()])}),e._v(" "),a("li",{staticClass:"play-list-manager__input ws-manager__input"},[a("div",{staticClass:"play-list-manager__tag-body"},[a("input",{attrs:{type:"text",placeholder:"... new channel"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e._addWebScraper(t)}}})]),e._v(" "),a("div",{staticClass:"play-list-manager__create"},[a("span",{staticClass:"wmp-icon-add",attrs:{title:"Create channel"},on:{click:function(t){t.stopPropagation(),e._addWebScraper(t)}}})])])],2),e._v(" "),e.showConfirmDelte?a("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation(),e.showConfirmDelte=!1}}},[a("div",{staticClass:"modal__body",on:{click:function(e){e.stopPropagation()}}},[e._v("\n\t\t\tAre you sure you want to delete this channel?\n\t\t\t"),a("div",{staticClass:"modal__btn-group"},[a("button",{staticClass:"button",on:{click:function(t){e.showConfirmDelte=!1}}},[e._v("Cancel")]),e._v(" "),a("button",{staticClass:"button btn btn--blue",on:{click:function(t){t.stopPropagation(),e.deleteWebScraper(e.showConfirmDelte),e.showConfirmDelte=!1}}},[e._v("Remove")])])])]):e._e()])},o=[];i._withStripped=!0;var c={render:i,staticRenderFns:o},l=c,p=!1,u=a(1),d=n,_=u(r.a,l,!1,d,null,null);_.options.__file="src/components/web-scraper-manager.vue",_.esModule&&Object.keys(_.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");t.default=_.exports},341:function(e,t,a){var n=a(342);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(3)("0da672bf",n,!1)},342:function(e,t,a){t=e.exports=a(2)(void 0),t.push([e.i,"\n.play-list-manager__menu .wmp-icon-mode_edit {\n  font-size: .9rem;\n}\n",""])},343:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=a(0);t.default={data:function(){return{showConfirmDelte:!1}},methods:n({},(0,s.mapMutations)(["selectMediaSource","setShowMediumSettings","addWebScraper","deleteWebScraper"]),(0,s.mapActions)(["initWebScraper"]),{_addWebScraper:function(){var e=document.querySelector(".ws-manager__input input");this.addWebScraper(e.value),e.value=""},numWatched:function(e){return e in this.webScrapers?(this.webScrapers[e].archive?this.webScrapers[e].archive.length:0)+Object.keys(this.webScrapers[e].playedMedia).length:0}}),computed:n({},(0,s.mapState)(["webScrapersOrdered","webScrapers","currentWebScraper"]))}}});