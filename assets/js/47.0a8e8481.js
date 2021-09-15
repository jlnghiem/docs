(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{439:function(a,t,e){"use strict";e.r(t);var s=e(5),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"market"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#market"}},[a._v("#")]),a._v(" Market")]),a._v(" "),e("h2",{attrs:{id:"query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[a._v("#")]),a._v(" Query")]),a._v(" "),e("h3",{attrs:{id:"swap-rate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swap-rate"}},[a._v("#")]),a._v(" Swap Rate")]),a._v(" "),e("p",[a._v("The Market module also allows you determine the result from a swap operation without actually executing the swap. To simulate a swap operation, run:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli query market swap "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("offer_coin"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ask_denom"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Where "),e("code",[a._v("offer_coin")]),a._v(" is the coin to be traded and "),e("code",[a._v("ask_denom")]),a._v(" the denomination to be swapped into.")]),a._v(" "),e("h3",{attrs:{id:"terra-pool-delta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terra-pool-delta"}},[a._v("#")]),a._v(" Terra Pool Delta")]),a._v(" "),e("p",[a._v("To get the current value of the Terra Pool Delta:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("terracli query market terra-pool-delta\n")])])]),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),e("p",[a._v("To get the market module's parameters:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("terracli query market params\n")])])]),e("h2",{attrs:{id:"transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[a._v("#")]),a._v(" Transaction")]),a._v(" "),e("h3",{attrs:{id:"swap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swap"}},[a._v("#")]),a._v(" Swap")]),a._v(" "),e("p",[a._v("All currencies in the Terra ecosystem can be directly swapped into another at the effective oracle exchange rate. To swap one currency for another, run:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli tx market swap "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("offer_coin"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ask_denom"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from mykey "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n")])])]),e("ul",[e("li",[e("code",[a._v("offer_coin")]),a._v(": coin to be traded, e.g. "),e("code",[a._v("1000ukrw")])]),a._v(" "),e("li",[e("code",[a._v("ask_denom")]),a._v(": denomination of the coin to be swapped into.")])]),a._v(" "),e("p",[a._v("For Terra<>Luna swaps, Constant-Product spread pricing model is enforced to limit consensus-related attack vectors. Terra<>Terra swaps have a constant Tobin Tax.")]),a._v(" "),e("h3",{attrs:{id:"swap-send"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swap-send"}},[a._v("#")]),a._v(" Swap Send")]),a._v(" "),e("p",[a._v("You can specify optionally specify a recipient during a swap and perform a swap and send in one transaction.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("terracli tx market swap "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("offer_coin"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ask_denom"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("recipient"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    --from mykey "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);