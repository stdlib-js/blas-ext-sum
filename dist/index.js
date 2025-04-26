"use strict";var i=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var t=i(function(y,a){
var e=require('@stdlib/ndarray-dtypes/dist'),s=require('@stdlib/blas-ext-base-ndarray-gsum/dist'),c=require('@stdlib/blas-ext-base-ndarray-dsum/dist'),o=require('@stdlib/blas-ext-base-ndarray-ssum/dist'),v=require('@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-factory/dist'),n=e("numeric_and_generic"),m=e("numeric_and_generic"),p={output:"accumulation",casting:"promoted"},d={types:["float64","float32"],fcns:[c,o],default:s},l=v(d,[n],m,p);a.exports=l
});var q=t();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
