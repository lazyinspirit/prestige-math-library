// Bounded falsification fixtures only, never proofs of the general source claims.
const result = (ok, summary) => ({ok, summary});
const eq = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const fixed = (s,k,v) => s[k] === undefined || eq(s[k],v);
function guarded(s, selectors, compute) {
  for (const [k,v] of Object.entries(selectors)) if (!fixed(s,k,v)) return result(false, `source fixture requires ${k}=${JSON.stringify(v)}`);
  try { return compute(); } catch (e) { return result(false, e.message); }
}
const need = (p,m) => { if (!p) throw Error(m); };
const key = pairs => pairs.map(p=>[...p].sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0]).map(p=>p.join(',')).join(';');
// Enumerate every perfect matching, then filter interlacing endpoints independently.
function matchings(points) {
  if (!points.length) return [[]];
  const [a,...rest]=points, out=[];
  rest.forEach((b,i)=>matchings(rest.filter((_,j)=>j!==i)).forEach(t=>out.push([[a,b],...t])));
  return out;
}
function planar(n) { return matchings(Array.from({length:2*n},(_,i)=>i)).filter(m=>!m.some(([a,b])=>m.some(([c,d])=>a<c&&c<b&&b<d))); }
function words(n) {
  const out=[];
  for(let mask=0;mask<2**(2*n);mask++) {
    let h=0,w='',valid=true;
    for(let i=0;i<2*n;i++){ const open=Boolean(mask&2**i); h+=open?1:-1;w+=open?'(':')';if(h<0)valid=false; }
    if(valid&&h===0)out.push(w);
  }
  return out.sort();
}
function stackPairs(w) { const stack=[],out=[];[...w].forEach((c,i)=>c==='('?stack.push(i):out.push([stack.pop(),i]));return out; }
function normalForms(n) {
  const out=[];
  function visit(lastJ,lastK,w){out.push(w);for(let j=lastJ+1;j<n;j++)for(let k=lastK+1;k<=j;k++)visit(j,k,[...w,...Array.from({length:j-k+1},(_,i)=>j-i)]);}
  visit(0,0,[]);return out;
}
function identity(n) {return {top:n,bottom:n,pairs:Array.from({length:n},(_,i)=>[i,n+i])};}
function generator(n,i){const pairs=[[i-1,i],[n+i-1,n+i]];for(let j=0;j<n;j++)if(j!==i-1&&j!==i)pairs.push([j,n+j]);return {top:n,bottom:n,pairs};}
// Stack pairings, identify the middle boundary, and count components without
// external vertices. A middle double edge must remain a loop, not disappear.
function compose(a,b){
  need(a.bottom===b.top,'incompatible diagram boundaries');
  const middle=a.bottom, total=a.top+middle+b.bottom;
  const parent=Array.from({length:total},(_,i)=>i);
  const find=x=>parent[x]===x?x:(parent[x]=find(parent[x]));
  const unite=(x,y)=>{parent[find(x)]=find(y);};
  a.pairs.forEach(([x,y])=>unite(x,y));
  b.pairs.forEach(([x,y])=>unite(a.top+x,a.top+y));
  const groups=new Map();for(let i=0;i<total;i++){const r=find(i);if(!groups.has(r))groups.set(r,[]);groups.get(r).push(i);}
  let loops=0;const pairs=[];
  for(const g of groups.values()){
    const ext=g.filter(i=>i<a.top||i>=a.top+middle).map(i=>i<a.top?i:i-middle);
    if(!ext.length)loops++;else{need(ext.length===2,'component has other than two endpoints');pairs.push(ext);}
  }
  return {diagram:{top:a.top,bottom:b.bottom,pairs},loops};
}
function evaluate(n,w){let diagram=identity(n),loops=0;for(const i of w){const p=compose(diagram,generator(n,i));diagram=p.diagram;loops+=p.loops;}return {diagram,loops};}
function state(n,arcs,defects){return {top:defects.length,bottom:n,pairs:[...arcs.map(([a,b])=>[defects.length+a,defects.length+b]),...defects.map((d,i)=>[i,defects.length+d])]};}
function reflect(d){return {top:d.bottom,bottom:d.top,pairs:d.pairs.map(p=>p.map(i=>i<d.top?d.bottom+i:i-d.top))};}
function gram(x,y){const p=compose(x,reflect(y));const through=p.diagram.pairs.filter(([a,b])=>(a<x.top)!==(b<x.top)).length;return through===x.top?{zero:false,loops:p.loops}:{zero:true,loops:0};}
function catalanCheck(max){
  const counts=[];for(let n=0;n<=max;n++){
    const ws=words(n), ds=planar(n);counts.push(ws.length);
    need(eq(ws.map(w=>key(stackPairs(w))).sort(),ds.map(key).sort()),`stack pairing is not bijective at n=${n}`);
    for(const d of ds){const opens=new Set(d.map(p=>p[0]));const w=Array.from({length:2*n},(_,i)=>opens.has(i)?'(':')').join('');need(key(stackPairs(w))===key(d),'inverse bracket map fails');}
  }
  need(eq(counts,[1,1,2,5]),'Catalan endpoint counts differ');return counts;
}
function normalCheck(max){for(let n=0;n<=max;n++){
  const ns=normalForms(n), diagrams=ns.map(w=>evaluate(n,w));
  need(ns.length===words(n).length&&new Set(ns.map(w=>w.join(','))).size===ns.length,`normal-form enumeration differs at n=${n}`);
  need(diagrams.every(p=>p.loops===0)&&new Set(diagrams.map(p=>key(p.diagram.pairs))).size===ns.length,`normal forms collide or have loops at n=${n}`);
}return [1,1,2,5];}
function rank3(){const ns=normalForms(3);need(eq(ns.map(w=>w.join('')).sort(),['','1','12','2','21']), 'rank-three index set differs');for(const i of [1,2]){const p=evaluate(3,[i,3-i,i]);need(p.loops===0&&key(p.diagram.pairs)===key(generator(3,i).pairs),'adjacent triple fails');}}
// Sparse exact polynomial vectors, coefficients small integers or halves.
const trim=p=>{while(p.length&&p.at(-1)===0)p.pop();return p;};
const sub=(a,b)=>trim(Array.from({length:Math.max(a.length,b.length)},(_,i)=>(a[i]??0)-(b[i]??0)));
const scale=(p,c)=>trim(p.map(v=>v*c));
const mulX=p=>p.length?[0,...p]:[];
const derivative=p=>trim(p.slice(1).map((v,i)=>v*(i+1)));
const monomial=n=>[...Array(n).fill(0),1];
function dunkl(p,c){const reflected=p.map((v,i)=>i%2?-v:v);const diff=sub(p,reflected);need((diff[0]??0)===0,'reflection difference not divisible by x');return sub(derivative(p),scale(diff.slice(1),c));}
function recurrence(n,c){let a=0;for(let k=0;k<n;k++)a+=1-2*c*((-1)**k);return scale(monomial(Math.max(0,n-1)),a);}
const matMul=(a,b)=>a.map(row=>b[0].map((_,j)=>row.reduce((s,x,k)=>s+x*b[k][j],0)));
const matSub=(a,b)=>a.map((row,i)=>row.map((x,j)=>x-b[i][j]));
const diagonal=x=>[[x,0],[0,x]];
export const frontier81TLCherednikChecks={
 'parenthesis-enumeration-n0-through-n3': (s={})=>guarded(s,{max_n:3},()=>{catalanCheck(3);return result(true,'exhaustive 0..3 pairings and binary words: stack pairing and inverse give counts 1,1,2,5');}),
 'normal-form-index-sets-n0-through-n3':(s={})=>guarded(s,{max_n:3},()=>{normalCheck(3);return result(true,'all admissible block lists at n=0..3 give 1,1,2,5 distinct loop-free diagram words');}),
 'rank-zero-through-three-basis-and-product-table':(s={})=>guarded(s,{max_n:3},()=>{
   normalCheck(3);const basis=[[],[1],[2],[1,2],[2,1]];
   // Transcribed claimed table: [power of delta, resulting basis index].
   const table=[[[0,0],[0,1],[0,2],[0,3],[0,4]],[[0,1],[1,1],[0,3],[1,3],[0,1]],[[0,2],[0,4],[1,2],[0,2],[1,4]],[[0,3],[0,1],[1,3],[0,3],[1,1]],[[0,4],[1,4],[0,2],[1,2],[0,4]]];
   for(let i=0;i<5;i++)for(let j=0;j<5;j++){const p=evaluate(3,[...basis[i],...basis[j]]),[power,k]=table[i][j];need(p.loops===power&&key(p.diagram.pairs)===key(evaluate(3,basis[k]).diagram.pairs),`table entry ${i},${j} differs`);}
   return result(true,'all 25 displayed products independently recomputed by graph stacking with symbolic loop exponents; basis counts 1,1,2,5');}),
 'rank-three-normal-form-enumeration':(s={})=>guarded(s,{n:3},()=>{rank3();return result(true,'all admissible rank-three lists and both adjacent triples verified by graph stacking');}),
 'rank-two-loop-zero-boundary':(s={})=>guarded(s,{n:2,delta:0},()=>{const d=generator(2,1),p=compose(d,d);need(planar(2).length===2&&key(d.pairs)!==key(identity(2).pairs),'rank-two generator not a distinct basis vector');need(p.loops===1&&key(p.diagram.pairs)===key(d.pairs),'square is not delta times generator');return result(true,'two distinct free Z-module basis diagrams; d1 squared creates one loop, hence is zero at delta=0');}),
 'zero-loop-small-boundaries':(s={})=>guarded(s,{method:'explicit hand calculation'},()=>{
   const empty=state(0,[],[]),cup=state(2,[[0,1]],[]),a=state(3,[[0,1]],[2]),b=state(3,[[1,2]],[0]);
   need(eq([gram(empty,empty),gram(cup,cup),gram(a,b)],[{zero:false,loops:0},{zero:false,loops:1},{zero:false,loops:0}]),'empty/cup/shifted form boundary differs');
   return result(true,'overlay graph gives Gram entries 1 at (0,0), delta at (2,0), and 1 for shifted (3,1) states');}),
 'TL2-zero-loop-head-counterexample':(s={})=>guarded(s,{method:'explicit hand calculation'},()=>{
   const x=state(2,[[0,1]],[]),one=compose(x,identity(2)),d=compose(x,generator(2,1));
   need(key(one.diagram.pairs)===key(x.pairs)&&one.loops===0&&key(d.diagram.pairs)===key(x.pairs)&&d.loops===1,'rank-two action differs');need(gram(x,x).loops===1,'rank-two form differs');
   // Enumerate all subsets of F2, retain additive scalar-closed subspaces,
   // and test invariance under the actual stacked identity/generator action.
   const submodules=[];
   const actions=[Number(one.loops===0),Number(d.loops===0)];
   for(let mask=0;mask<4;mask++){
     const V=[0,1].filter(v=>mask&(1<<v));
     if(!V.includes(0)||!V.every(a=>V.every(b=>V.includes((a+b)%2))))continue;
     if(V.every(v=>actions.every(a=>V.includes((a*v)%2))))submodules.push(V);
   }
   need(eq(submodules,[[0],[0,1]]),'one-dimensional F2 module has a proper nonzero submodule');
   return result(true,'stacking gives x.1=x, x.d1=delta*x and Gram delta; at delta=0 the nonzero one-dimensional F2 module has only 0/full subspaces but zero cell quotient');}),
 'rank-three-one-defect-module':(s={})=>guarded(s,{method:'explicit hand calculation'},()=>{
   const states=[state(3,[[0,1]],[2]),state(3,[[1,2]],[0])];const target=[[0,1],[0,1]],powers=[[1,0],[0,1]];
   for(let i=0;i<2;i++)for(let j=0;j<2;j++){const p=compose(states[i],generator(3,j+1));need(key(p.diagram.pairs)===key(states[target[i][j]].pairs)&&p.loops===powers[i][j],'rank-three generator action differs');const g=gram(states[i],states[j]);need(!g.zero&&g.loops===Number(i===j),'Gram entry differs');}
   const G=states.map(x=>states.map(y=>{const g=gram(x,y);return g.zero||g.loops>0?0:1;}));need(G[0][0]*G[1][1]-G[0][1]*G[1][0]===-1,'zero-loop determinant differs');
   // For bounded fields, a proper nonzero subspace of k^2 is a line.
   // Build the zero-loop action matrices from the computed output states.
   const A=[1,2].map(j=>states.map(x=>{const p=compose(x,generator(3,j));return states.map(y=>Number(p.loops===0&&key(p.diagram.pairs)===key(y.pairs)));}));
   for(const prime of [2,3,5])for(const v of [...Array.from({length:prime},(_,a)=>[1,a]),[0,1]]){
     const invariant=A.every(M=>{const w=[0,1].map(j=>v.reduce((sum,x,i)=>sum+x*M[i][j],0)%prime);return (v[0]*w[1]-v[1]*w[0])%prime===0;});
     need(!invariant,`proper invariant line over F${prime}`);
   }
   return result(true,'all four state actions and Gram entries computed by graph stacking; zero-loop determinant -1, and no invariant lines over F2,F3,F5');}),
 'rank-one-boundary-recurrence':(s={})=>guarded(s,{c:0.5,max_degree:3},()=>{for(let n=0;n<=3;n++){need(eq(dunkl(monomial(n),0.5),recurrence(n,0.5)),`Dunkl and commutator recurrence differ at n=${n}`);if(n>0)need(eq(dunkl(monomial(n),0.5),scale(monomial(n-1),n%2?n-1:n)),`even/odd source coefficient differs at n=${n}`);}return result(true,'degrees 0..3: independent divided-difference and summed commutator recurrence give y1=0,yx=0,yx^2=2x,yx^3=2x^2');}),
 'weyl-commutator-on-monomials':(s={})=>guarded(s,{max_degree:2},()=>{for(let m=0;m<=2;m++){const p=monomial(m);need(eq(sub(derivative(mulX(p)),mulX(derivative(p))),p),`Weyl commutator fails at degree ${m}`);}return result(true,'coefficient-array differentiation/multiplication verifies [d/dx,x]=1 on degrees 0,1,2');}),
 'rank-one-dunkl-values':(s={})=>guarded(s,{c:0.5,max_degree:2},()=>{for(let n=0;n<=2;n++)need(eq(dunkl(monomial(n),0.5),recurrence(n,0.5)),`Dunkl normalization differs at n=${n}`);need(eq(dunkl([0,1],0.5),[])&&eq(dunkl([0,0,1],0.5),[0,2]),'source monomial values differ');return result(true,'exact coefficient reflection, division by x and differentiation give yx=0,yx^2=2x at c=1/2');}),
 'extension-obstruction-matrix':(s={})=>guarded(s,{mu:2},()=>{const I=diagonal(1),N=[[0,1],[0,0]],T=[[1,1],[0,1]];need(eq(matMul(N,N),diagonal(0)),'N squared nonzero');const p=matMul(matSub(T,I),matSub(T,diagonal(2)));need(eq(p,[[0,-1],[0,0]]),'extension obstruction formula differs');need(T[1][0]===0&&T[0][0]===1&&T[1][1]===1&&p[0][1]!==0,'composition factor or nonzero obstruction fails');return result(true,'exact 2x2 Jordan extension at mu=2: both factors have eigenvalue 1, but (T-I)(T-2I)=-N is nonzero');}),
 'rank-one-repeated-root':(s={})=>guarded(s,{e:2,c:0.5},()=>{
   const residues=[0,1].map(j=>0.5*(1-(-1)**j));
   // Exponent mu_j=exp(pi*i*(j-r_j)). All exponents here are
   // integral, so exact parity replaces approximate complex exponentials.
   const roots=residues.map((r,j)=>{need(Number.isInteger(j-r),'nonintegral phase');return (-1)**(j-r);});
   const polynomial=[roots[0]*roots[1],-roots[0]-roots[1],1];need(eq(residues,[0,1])&&eq(roots,[1,1])&&eq(polynomial,[1,-2,1]),'residue/root polynomial differs');
   return result(true,'e=2,c=1/2: exact endpoint/transport exponents give residues 0,1, roots 1,1 and polynomial T^2-2T+1');}),
 'rank-one-low-degree-reduction':(s={})=>guarded(s,{max_degree:2},()=>{
   // Evaluate the three claimed ordered identities on monomials 0..4,
   // for t=-2,0,1,3 using y=t*d/dx; no rewrite relation is assumed.
   let cases=0;for(const t of [-2,0,1,3])for(let m=0;m<=4;m++){const p=monomial(m),y=q=>scale(derivative(q),t);need(eq(sub(y(mulX(p)),mulX(y(p))),scale(p,t)),'yx reduction differs');need(eq(sub(y(mulX(mulX(p))),mulX(mulX(y(p)))),scale(mulX(p),2*t)),'yx^2 reduction differs');need(eq(sub(y(y(mulX(p))),mulX(y(y(p)))),scale(y(p),2*t)),'y^2x reduction differs');cases+=3;}
   return result(true,`${cases} exact polynomial evaluations verify yx=xy+t, yx^2=x^2y+2tx and y^2x=xy^2+2ty; no general PBW independence claimed`);}),
};
