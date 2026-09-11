// Research-only finite UPDATE existence/uniqueness proof composition.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import {kuratowskiProofs} from './support-phase-2-next-17-kuratowski-proof-block.mjs';
import {removalProofs} from './support-phase-2-next-17-graph-removal-update-interface.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const old=read('./support-phase-2-next-17-annotated-separation-adapter.md').match(/```javascript\n([\s\S]*?)\n```/)[1];
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pack,num,record};')();
const ks=read('./support-phase-2-next-17-kuratowski-proof-block.mjs'),start=ks.indexOf('const eq='),stop=ks.indexOf('function existence(A)');
assert(start>=0&&stop>start);
const F=new Function('assert','operationProof',ks.slice(start,stop)+'\nreturn {assemble,eq,mem,neg,and,ex,imp,all,iff,or,op,pair,fv,same,arrow};')(assert,operationProof);
const {eq,mem,neg,and,ex,imp,all,iff,or,op,pair,fv,same,arrow}=F;
const conjunction=xs=>xs.reduceRight((r,x)=>r===null?x:and(x,r),null);
const prune=(s,i,r)=>all(21,iff(mem(21,r),and(mem(21,s),neg(ex(22,op(i,22,21))))));
const union=(a,u)=>all(2,iff(mem(2,u),ex(3,and(mem(3,a),mem(2,3)))));
export const update=(s,i,b,t)=>all(50,iff(mem(50,t),or(and(mem(50,s),neg(ex(22,op(i,22,50)))),op(i,b,50))));

// Only premise-index fields are rebased. Formula/variable/certificate fields are copied.
export function appendDependencyClosure(target,source,roots){
  const formulaKey=f=>JSON.stringify(f,(_,x)=>typeof x==='bigint'?x.toString():x),known=new Map();
  target.forEach((l,j)=>{const k=formulaKey(l[0]);if(!known.has(k))known.set(k,j);});
  const selected=new Set();
  function visit(j){assert(Number.isInteger(j)&&j>=0&&j<source.length);if(selected.has(j))return;selected.add(j);
    const [,tag,a]=source[j],refs=tag===7?a:tag===8||tag===9?[a[0]]:[];
    for(const r of refs){assert(Number.isInteger(r)&&r>=0&&r<j,'non-earlier imported premise');visit(r);}}
  roots.forEach(visit);const order=[...selected].sort((a,b)=>a-b),map=new Map();
  for(const j of order){const [f,tag,annotation]=source[j],a=[...annotation];
    const k=formulaKey(f);if(known.has(k)){map.set(j,known.get(k));continue;}
    if(tag===7){a[0]=map.get(a[0]);a[1]=map.get(a[1]);}else if(tag===8||tag===9)a[0]=map.get(a[0]);
    map.set(j,target.length);known.set(k,target.length);target.push([f,tag,a]);}
  return roots.map(j=>map.get(j));
}
export function updateProof(){
  const A=F.assemble(),s=40n,i=41n,b=42n,t=43n,h=44n,r=45n,w=46n,k=47n,v=48n,p=50n,e=3n;
  const kop=kuratowskiProofs(),existsIndex=kop.lines.findIndex(l=>same(l[0],ex(22,op(20,21,22))));
  const funIndex=kop.lines.findIndex(l=>same(l[0],imp(and(op(20,21,22),op(20,21,23)),eq(23,22))));
  assert(existsIndex>=0&&funIndex>=0);
  const [opExistsOpen,opFunOpen]=appendDependencyClosure(A.q,kop.lines,[existsIndex,funIndex]);
  let opExists=opExistsOpen;for(const x of [21n,20n])opExists=A.gen(opExists,x);
  let opFun=opFunOpen;for(const x of [23n,22n,21n,20n])opFun=A.gen(opFun,x);
  const opAt=[i,b,h,p].reduce((q,x)=>A.ui(q,x),opFun);
  const H=op(i,b,h),R=prune(s,i,r),S=pair(h,h,w),K=pair(r,w,k),T=union(k,t),facts=[R,H,S,K,T],J=conjunction(facts);
  A.setOpaque([J]);const fact=Q=>A.pc([],imp(J,Q),facts);
  const fr=fact(R),fh=fact(H),fs=fact(S),fk=fact(K),ft=fact(T);
  function clause(q,formula,x){const ui=A.uiImp(formula,x),C=arrow(A.at(ui))[1];return A.pc([q,ui],imp(J,C),[J,formula,C]);}
  const sAt=clause(fs,S,p),kAt=clause(fk,K,e),uAt=clause(ft,T,p);
  const L=ex(e,and(mem(e,k),mem(p,e))),D=or(mem(p,r),eq(p,h));
  // Forward Union implication: a witness in {r,{h}} lies in one of those sets.
  const er=A.transport(e,r,x=>mem(p,x)),ew=A.transport(e,w,x=>mem(p,x));
  const forwardPoint=A.pc([kAt,sAt,er,ew],imp(J,imp(and(mem(e,k),mem(p,e)),D)),[J,mem(e,k),mem(p,e),mem(p,r),mem(p,w),eq(p,h),eq(e,r),eq(e,w)]);
  const curried=A.pc([forwardPoint],imp(and(mem(e,k),mem(p,e)),imp(J,D)),[J,and(mem(e,k),mem(p,e)),D]);
  const elim=A.ee(curried,e),forward=A.pc([elim],imp(J,imp(L,D)),[J,L,D]);
  // Reverse Union implication: use r or the singleton as the actual existential witness.
  const kr=clause(fk,K,r),kw=clause(fk,K,w);
  const rin=A.pc([kr,A.reflex(r)],imp(J,mem(r,k)),[J,mem(r,k),eq(r,r),eq(r,w)]);
  const win=A.pc([kw,A.reflex(w)],imp(J,mem(w,k)),[J,mem(w,k),eq(w,r),eq(w,w)]);
  const witnessR=A.ei(and(mem(e,k),mem(p,e)),e,r),witnessW=A.ei(and(mem(e,k),mem(p,e)),e,w);
  const backward=A.pc([rin,win,sAt,witnessR,witnessW],imp(J,imp(D,L)),[J,mem(r,k),mem(w,k),mem(p,r),mem(p,w),eq(p,h),L]);
  const unionEquation=A.pc([uAt,forward,backward],imp(J,iff(mem(p,t),D)),[J,mem(p,t),L,D]);
  // Replace the singleton equality by the precise ordered-pair predicate.
  const forwardOP=A.pc([fh,opAt],imp(J,imp(op(i,b,p),eq(p,h))),[J,H,op(i,b,p),eq(p,h)]);
  const backwardOP=A.pc([fh,A.transport(p,h,x=>op(i,b,x),true)],imp(J,imp(eq(p,h),op(i,b,p))),[J,H,op(i,b,p),eq(p,h)]);
  const rAt=clause(fr,R,p),retained=and(mem(p,s),neg(ex(22,op(i,22,p)))),newMember=or(retained,op(i,b,p));
  const pointwise=A.pc([unionEquation,forwardOP,backwardOP,rAt],imp(J,iff(mem(p,t),newMember)),[J,mem(p,t),mem(p,r),eq(p,h),retained,op(i,b,p)]);
  const updateUnderJ=A.cg(pointwise,p);assert(same(A.at(updateUnderJ),imp(J,update(s,i,b,t))));
  const G=ex(t,update(s,i,b,t)),introduce=A.ei(update(s,i,b,t),t);
  let current=A.pc([updateUnderJ,introduce],imp(J,G),[J,update(s,i,b,t),G]);
  function plainExist(uniqueProof){const f=A.at(uniqueProof),x=f[1],body=f[2];assert(f[0]==='exists'&&body[0]==='and');
    const project=A.pc([],imp(body,body[1]),[body[1],body[2]]);return A.mp(uniqueProof,A.em(project,x));}
  const up=operationProof('union'),[upEnd]=appendDependencyClosure(A.q,up.lines,[up.lines.length-1]);
  const unionExists=A.alpha(plainExist(A.ui(upEnd,k)),t);
  const pairK=A.pairExist(r,w,k),pairS=A.pairExist(h,h,w);
  const orderedExists=A.alpha(A.ui(A.ui(opExists,i),b),h);
  const rem=removalProofs(),[remEnd]=appendDependencyClosure(A.q,rem.lines,[rem.uniqueLength-1]);
  const removalExists=A.alpha(plainExist(A.ui(A.ui(remEnd,s),i)),r);
  const existences=[removalExists,orderedExists,pairS,pairK,unionExists],variables=[r,h,w,k,t];
  for(let n=facts.length;n>0;n--){const predicate=facts[n-1],x=variables[n-1],rest=conjunction(facts.slice(0,n-1));
    assert(same(A.at(existences[n-1]),ex(x,predicate)));
    const cur=rest===null?current:A.pc([current],imp(predicate,imp(rest,G)),[...facts.slice(0,n),G]);
    current=A.mp(existences[n-1],A.ee(cur,x));}
  assert(same(A.at(current),G));
  const existenceIndex=current;
  // Uniqueness is Extensionality for the identical update element equation.
  const U=update(s,i,b,t),V=update(s,i,b,v),B=and(U,V),test=2n;
  const compare=A.pc([A.uiImp(U,test),A.uiImp(V,test)],imp(B,iff(mem(test,v),mem(test,t))),[U,V,mem(test,v),mem(test,t),or(and(mem(test,s),neg(ex(22,op(i,22,test)))),op(i,b,test))]);
  const generalized=A.cg(compare,test),ext=A.q.findIndex(l=>l[1]===0&&l[2][0]===0n&&l[2][1]===0n);assert(ext>=0);
  const unique=A.pc([generalized,A.ui(A.ui(ext,v),t)],imp(B,eq(v,t)),[B,all(test,iff(mem(test,v),mem(test,t))),eq(v,t)]);
  const curry=A.pc([unique],imp(U,imp(V,eq(v,t))),[U,V,eq(v,t)]),conditional=A.cg(curry,v);
  const body=and(U,all(v,imp(V,eq(v,t)))),inclusion=A.pc([conditional],imp(U,body),[U,all(v,imp(V,eq(v,t)))]);
  let end=A.mp(existenceIndex,A.em(inclusion,t));for(const x of [b,i,s])end=A.gen(end,x);
  const rawLines=A.q.length,out=[];appendDependencyClosure(out,A.q,[end]);
  return {lines:out,endpoint:A.at(end),rawLines};
}
function tests(){const q=updateProof(),expected=all(40,all(41,all(42,ex(43,and(update(40,41,42,43),all(48,imp(update(40,41,42,48),eq(48,43))))))));
  assert(same(expected,q.endpoint));assert.equal(fv(expected).size,0);
  const proof=P.pack(q.lines.map(P.record)),endpoint=P.num(expected);assert(verifyZF(proof,endpoint));
  const labels=[...new Set(q.lines.filter(l=>l[1]===0).map(l=>l[2][0]===0n?'fixed:'+l[2][1]:'schema:'+l[2][0]))].sort();
  assert.deepEqual(labels,['fixed:0','fixed:1','fixed:2','schema:1']);
  let rejected=0;const copy=()=>q.lines.map(l=>[l[0],l[1],[...l[2]]]);
  const reject=rows=>{assert(!verifyZF(P.pack(rows.map(P.record)),endpoint));rejected++;};
  const wrongSep=copy(),sep=wrongSep.findIndex(l=>l[1]===0&&l[2][0]===1n);wrongSep[sep][2][2]=20n;reject(wrongSep);
  const badMP=copy(),j=badMP.findIndex(l=>l[1]===7);badMP[j][2][0]=j;reject(badMP);
  const badEE=copy(),n=badEE.findIndex(l=>l[1]===9&&fv(arrow(badEE[l[2][0]][0])[1]).size>0);
  const [a,b]=arrow(badEE[badEE[n][2][0]][0]),forbidden=[...fv(b)][0];badEE[n]=[imp(ex(forbidden,a),b),9,[badEE[n][2][0],forbidden]];reject(badEE);
  assert(!verifyZF(proof,P.num(all(40,eq(40,41)))));rejected++;
  const prefixed=[[eq(80,80),5,[80n]]],roots=appendDependencyClosure(prefixed,q.lines,[q.lines.length-1]);
  assert.equal(roots[0],prefixed.length-1);assert(verifyZF(P.pack(prefixed.map(P.record)),endpoint));
  const duplicate=[[eq(80,80),5,[80n]]];assert.deepEqual(appendDependencyClosure(duplicate,[[eq(80,80),5,[80n]]],[0]),[0]);assert.equal(duplicate.length,1);
  const shifted=[[eq(81,81),5,[81n]]];appendDependencyClosure(shifted,[[eq(80,80),5,[80n]],[all(82,eq(80,80)),8,[0,82n]]],[1]);
  assert.deepEqual(shifted[2][2],[1,82n]);assert(verifyZF(P.pack(shifted.map(P.record)),P.num(all(82,eq(80,80)))));
  assert.throws(()=>appendDependencyClosure([],[[eq(80,80),7,[0,0]]],[0]),/non-earlier/);
  console.log(JSON.stringify({rawLines:q.rawLines,retainedLines:q.lines.length,proofBits:proof.toString(2).length,axiomLabels:labels,mutationRejections:rejected,rebasedPrefix:true,importerChecks:3}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
