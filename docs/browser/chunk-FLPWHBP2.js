import{W as o}from"./chunk-P72I4GTT.js";var n=(()=>{let t=class t{constructor(){this.itens=[]}obtemCarrinho(){return this.itens=JSON.parse(localStorage.getItem("carrinho")||"[]"),this.itens}adicionarAoCarrinho(i){this.itens.push(i),localStorage.setItem("carrinho",JSON.stringify(this.itens))}limparCarrinho(){this.itens=[],localStorage.clear()}removerProdutoCarrinho(i){this.itens=this.itens.filter(e=>e.id!==i),localStorage.setItem("carrinho",JSON.stringify(this.itens))}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{n as a};
