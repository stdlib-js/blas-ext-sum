"use strict";var t=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var u=t(function(_,a){
var e=require('@stdlib/ndarray-dtypes/dist'),c=require('@stdlib/blas-ext-base-ndarray-gsum/dist'),v=require('@stdlib/blas-ext-base-ndarray-dsum/dist'),m=require('@stdlib/blas-ext-base-ndarray-ssum/dist'),n=require('@stdlib/blas-ext-base-ndarray-csum/dist'),o=require('@stdlib/blas-ext-base-ndarray-zsum/dist'),p=require('@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-factory/dist'),l=e("numeric_and_generic"),q=e("numeric_and_generic"),d={output:"accumulation",casting:"none"},f={types:["float64","float32","complex128","complex64"],fcns:[v,m,o,n],default:c},y=p(f,[l],q,d);a.exports=y
});var g=u();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
