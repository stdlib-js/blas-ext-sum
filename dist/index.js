"use strict";var s=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=s(function(x,a){
var e=require('@stdlib/ndarray-dtypes/dist'),t=require('@stdlib/blas-ext-base-ndarray-gsum/dist'),c=require('@stdlib/blas-ext-base-ndarray-dsum/dist'),v=require('@stdlib/blas-ext-base-ndarray-ssum/dist'),m=require('@stdlib/blas-ext-base-ndarray-csum/dist'),n=require('@stdlib/blas-ext-base-ndarray-zsum/dist'),o=require('@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-factory/dist'),p=e("numeric_and_generic"),l=e("numeric_and_generic"),q={output:"accumulation",casting:"none"},d={types:["float64","float32","complex128","complex64"],fcns:[c,v,n,m],default:t},f=o(d,[p],l,q);a.exports=f
});var y=u();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
