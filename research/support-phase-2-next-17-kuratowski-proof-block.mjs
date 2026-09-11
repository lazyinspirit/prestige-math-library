// Research-only annotated Kuratowski proof construction; no workflow writes.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
const text=readFileSync(new URL('./support-phase-2-next-17-annotated-separation-adapter.md',import.meta.url),'utf8');
const src=text.match(/```javascript\n([\s\S]*?)\n```/)[1];
const P=new Function(src.slice(0,src.indexOf('let cases=0;'))+'\nreturn {pack,num,record};')();
const eq=(x,y)=>['eq',BigInt(x),BigInt(y)],mem=(x,y)=>['rel',BigInt(x),BigInt(y)];
const neg=a=>['neg',a],and=(a,b)=>['and',a,b],ex=(x,a)=>['exists',BigInt(x),a];
const imp=(a,b)=>neg(and(a,neg(b))),all=(x,a)=>neg(ex(x,neg(a)));
const iff=(a,b)=>and(imp(a,b),imp(b,a)),or=(a,b)=>neg(and(neg(a),neg(b)));
const key=a=>JSON.stringify(a,(_,x)=>typeof x==='bigint'?x.toString():x),same=(a,b)=>key(a)===key(b);
function fv(a){if(a[0]==='eq'||a[0]==='rel')return new Set([a[1],a[2]]);if(a[0]==='neg')return fv(a[1]);
  if(a[0]==='and')return new Set([...fv(a[1]),...fv(a[2])]);const s=fv(a[2]);s.delete(a[1]);return s;}
function vars(a){if(a[0]==='eq'||a[0]==='rel')return new Set([a[1],a[2]]);if(a[0]==='neg')return vars(a[1]);
  if(a[0]==='and')return new Set([...vars(a[1]),...vars(a[2])]);return new Set([a[1],...vars(a[2])]);}
function sub(a,x,y){if(a[0]==='eq'||a[0]==='rel')return [a[0],a[1]===x?y:a[1],a[2]===x?y:a[2]];
  if(a[0]==='neg')return neg(sub(a[1],x,y));if(a[0]==='and')return and(sub(a[1],x,y),sub(a[2],x,y));
  if(a[1]===x)return a;assert(a[1]!==y||!fv(a[2]).has(x),'capture');return ex(a[1],sub(a[2],x,y));}
function arrow(a){assert(a[0]==='neg'&&a[1][0]==='and'&&a[1][2][0]==='neg');return [a[1][1],a[1][2][1]];}
function univ(a){assert(a[0]==='neg'&&a[1][0]==='exists'&&a[1][2][0]==='neg');return [a[1][1],a[1][2][1]];}
const pair=(a,b,u)=>all(3,iff(mem(3,u),or(eq(3,a),eq(3,b))));
const triple=(a,b,p,r,s)=>and(pair(a,a,r),and(pair(a,b,s),pair(r,s,p)));
const op=(a,b,p,r=24n,s=25n)=>ex(r,ex(s,triple(a,b,p,r,s)));
function assemble(){
  const imported=operationProof('pair'),q=imported.lines.map(l=>[l[0],l[1],[...l[2]]]);
  const at=i=>q[i][0],add=(f,t,a)=>(q.push([f,t,a]),q.length-1);let opaque=[];
  function ax(f,stops=opaque){const blocked=new Set(stops.map(key)),slots=[],seen=new Map();
    function go(a){const k=key(a),quantified=a[0]==='exists'||(a[0]==='neg'&&a[1][0]==='exists'&&a[1][2][0]==='neg');
      if(!blocked.has(k)&&!quantified){if(a[0]==='neg')return ['n',go(a[1])];if(a[0]==='and')return ['a',go(a[1]),go(a[2])];}
      if(!seen.has(k)){seen.set(k,slots.length);slots.push(a);}return ['p',seen.get(k)];}
    return add(f,1,[go(f),slots]);}
  function mp(p,r){const [a,b]=arrow(at(r));assert(same(a,at(p)));return add(b,7,[p,r]);}
  function pc(ps,b,stops=opaque){
    if(ps.length>=2){
      function join(xs){if(xs.length===1)return xs[0];const cut=Math.floor(xs.length/2),l=join(xs.slice(0,cut)),r=join(xs.slice(cut));
        const lemma=ax(imp(at(l),imp(at(r),and(at(l),at(r)))),[at(l),at(r)]);return mp(r,mp(l,lemma));}
      return pc([join(ps)],b,stops);
    }
    let f=b;for(let i=ps.length-1;i>=0;i--)f=imp(at(ps[i]),f);let p=ax(f,stops);for(const i of ps)p=mp(i,p);return p;}
  function uiImp(f,y){const [x,b]=univ(f);return add(imp(f,sub(b,x,y)),2,[b,x,y]);}
  const ui=(p,y)=>mp(p,uiImp(at(p),y));
  function ee(p,x){const [a,b]=arrow(at(p));assert(!fv(b).has(x),'EE side condition');return add(imp(ex(x,a),b),9,[p,x]);}
  function ei(b,x,y=x){return add(imp(sub(b,x,y),ex(x,b)),4,[b,x,y]);}
  function em(p,x){const [a,b]=arrow(at(p)),i=ei(b,x),r=pc([p,i],imp(a,ex(x,b)),[a,b,ex(x,b)]);return ee(r,x);}
  const gen=(p,x)=>add(all(x,at(p)),8,[p,x]);
  function cg(p,x){const [k,a]=arrow(at(p));assert(!fv(k).has(x));const g=gen(p,x),d=add(imp(all(x,imp(k,a)),imp(k,all(x,a))),3,[k,a,x]);return mp(g,d);}
  function alphaImp(f,y){assert(f[0]==='exists');const [_,x,b]=f;assert(!vars(b).has(y));const c=sub(b,x,y);return ee(ei(c,y,x),x);}
  const alpha=(p,y)=>mp(p,alphaImp(at(p),y));
  function transport(x,y,F,reverse=false){const h=99n,b=reverse?neg(F(h)):F(h);
    assert(!vars(b).has(x)||x===h||same(F(x),sub(F(h),h,x)));
    const p=add(imp(eq(x,y),imp(sub(b,h,x),sub(b,h,y))),6,[b,h,x,y]);
    return reverse?pc([p],imp(eq(x,y),imp(F(y),F(x))),[eq(x,y),F(x),F(y)]):p;}
  function reflex(x){return add(eq(x,x),5,[x]);}
  function symmetry(x,y){const p=transport(x,y,h=>eq(h,x));return pc([p,reflex(x)],imp(eq(x,y),eq(y,x)),[eq(x,y),eq(y,x),eq(x,x)]);}
  const pairUnique=imported.lines.findIndex(l=>same(l[0],imp(and(pair(10,11,12),pair(10,11,13)),eq(13,12))));
  assert(pairUnique>=0);let fun=pairUnique;for(const x of [13n,12n,11n,10n])fun=gen(fun,x);
  function functionality(a,b,u,v){return [a,b,u,v].reduce((p,x)=>ui(p,x),fun);}
  function pairExist(a,b,u){const p=ui(ui(imported.lines.length-1,a),b),f=at(p),x=f[1],body=f[2];
    const proj=pc([],imp(body,body[1]),[body[1],body[2]]),lift=em(proj,x);return alpha(mp(p,lift),u);}
  function freshOpBridge(a,b,p){const start=op(a,b,p),inner=start[2];
    const renamedInner=alphaImp(inner,27n),lift=em(renamedInner,24n),mid=arrow(at(lift))[1],outer=alphaImp(mid,26n);
    return pc([lift,outer],imp(start,op(a,b,p,26n,27n)),[start,mid,op(a,b,p,26n,27n)]);}
  return {q,at,add,ax,pc,mp,ui,uiImp,ee,ei,em,gen,cg,alpha,transport,reflex,symmetry,functionality,pairExist,freshOpBridge,setOpaque:x=>{opaque=x;}};
}
function existence(A){const a=20n,b=21n,p=22n,r=24n,s=25n,C=triple(a,b,p,r,s),G=ex(p,op(a,b,p));
  const P1=pair(a,a,r),P2=pair(a,b,s),P3=pair(r,s,p);
  const i1=A.ei(C,s),i2=A.ei(ex(s,C),r),i3=A.ei(op(a,b,p),p);
  const toG=A.pc([i1,i2,i3],imp(C,G),[C,ex(s,C),op(a,b,p),G]);
  const cur=A.pc([toG],imp(P3,imp(and(P1,P2),G)),[P1,P2,P3,G]);
  const eliminateP=A.ee(cur,p),first=A.mp(A.pairExist(r,s,p),eliminateP);
  const curryS=A.pc([first],imp(P2,imp(P1,G)),[P1,P2,G]);
  const second=A.mp(A.pairExist(a,b,s),A.ee(curryS,s));return A.mp(A.pairExist(a,a,r),A.ee(second,r));
}
function discharge(A,p,a,b,c,d,x,y,withEquality){
  const C1=triple(a,b,x,24n,25n),C2=triple(c,d,y,26n,27n),G=arrow(A.at(p))[1];
  const rest=withEquality?and(C2,eq(x,y)):C2;
  let k=A.pc([p],imp(C1,imp(rest,G)),[C1,C2,eq(x,y),G]);k=A.ee(A.ee(k,25n),24n);
  const O1=op(a,b,x),tail=withEquality?imp(eq(x,y),imp(O1,G)):imp(O1,G);
  k=A.pc([k],imp(C2,tail),[C2,eq(x,y),O1,G]);k=A.ee(A.ee(k,27n),26n);
  const O2=op(c,d,y),bridge=A.freshOpBridge(c,d,y);
  const J=withEquality?and(O1,and(O2,eq(x,y))):and(O1,O2);
  return A.pc([k,bridge],imp(J,G),[O1,O2,op(c,d,y,26n,27n),eq(x,y),G]);
}
function uniqueness(A){const a=20n,b=21n,p=22n,q=23n,r=24n,s=25n,t=26n,u=27n;
  const C1=triple(a,b,p,r,s),C2=triple(a,b,q,t,u),J=and(C1,C2);A.setOpaque([J]);
  const fact=F=>A.pc([],imp(J,F),[]),F1=fact(pair(a,a,r)),F2=fact(pair(a,b,s)),F3=fact(pair(r,s,p));
  const F4=fact(pair(a,a,t)),F5=fact(pair(a,b,u)),F6=fact(pair(t,u,q));
  const tr=A.pc([F1,F4,A.functionality(a,a,r,t)],imp(J,eq(t,r)));
  const us=A.pc([F2,F5,A.functionality(a,b,s,u)],imp(J,eq(u,s)));
  const change1=A.pc([tr,F6,A.transport(t,r,h=>pair(h,u,q))],imp(J,pair(r,u,q)));
  const change2=A.pc([us,change1,A.transport(u,s,h=>pair(r,h,q))],imp(J,pair(r,s,q)));
  const done=A.pc([F3,change2,A.functionality(r,s,p,q)],imp(J,eq(q,p)));
  return discharge(A,done,a,b,a,b,p,q,false);
}
function injectivity(A){const a=20n,b=21n,c=30n,d=31n,p=22n,q=23n,r=24n,s=25n,t=26n,u=27n;
  const C1=triple(a,b,p,r,s),C2=triple(c,d,q,t,u),J=and(C1,and(C2,eq(p,q)));A.setOpaque([J]);
  const fact=F=>A.pc([],imp(J,F),[]),PQ=fact(eq(p,q));
  const ps=[[a,a,r],[a,b,s],[r,s,p],[c,c,t],[c,d,u],[t,u,q]];
  const pf=ps.map(([x,y,z])=>fact(pair(x,y,z)));
  function clause(i,x){const [a,b,z]=ps[i],R=pair(a,b,z),C=iff(mem(x,z),or(eq(x,a),eq(x,b))),r=A.uiImp(R,x);
    return A.pc([pf[i],r],imp(J,C),[J,R,C]);}
  function member(i,x){return A.pc([clause(i,x),A.reflex(x)],imp(J,mem(x,ps[i][2])));}
  function move(h,x,y,F,reverse=false){return A.pc([PQ,h,A.transport(x,y,F,reverse)],imp(J,reverse?F(x):F(y)));}
  const rp=member(2,r),sp=member(2,s),uq=member(5,u);
  const rq=move(rp,p,q,h=>mem(r,h)),sq=move(sp,p,q,h=>mem(s,h)),up=move(uq,p,q,h=>mem(u,h),true);
  const rtu=A.pc([rq,clause(5,r)],imp(J,or(eq(r,t),eq(r,u))));
  const ct=member(3,c),cu=member(4,c);
  const cr=A.pc([rtu,ct,cu,A.transport(r,t,h=>mem(c,h),true),A.transport(r,u,h=>mem(c,h),true)],imp(J,mem(c,r)));
  const ca=A.pc([cr,clause(0,c)],imp(J,eq(c,a)));
  const ac=A.pc([ca,A.symmetry(c,a)],imp(J,eq(a,c)));
  const stu=A.pc([sq,clause(5,s)],imp(J,or(eq(s,t),eq(s,u))));
  const bs=member(1,b),bt=clause(3,b),bu=clause(4,b);
  const bcd=A.pc([stu,bs,bt,bu,A.transport(s,t,h=>mem(b,h)),A.transport(s,u,h=>mem(b,h))],imp(J,or(eq(b,c),eq(b,d))));
  const bad=A.pc([bcd,ac,A.transport(a,c,h=>eq(b,h),true)],imp(J,or(eq(b,a),eq(b,d))));
  const urs=A.pc([up,clause(2,u)],imp(J,or(eq(u,r),eq(u,s))));
  const du=member(4,d),dr=clause(0,d),ds=clause(1,d);
  const dab=A.pc([urs,du,dr,ds,A.transport(u,r,h=>mem(d,h)),A.transport(u,s,h=>mem(d,h))],imp(J,or(eq(d,a),eq(d,b))));
  const bd=A.pc([bad,dab,A.symmetry(d,b),A.transport(d,a,h=>eq(b,h),true)],imp(J,eq(b,d)));
  const done=A.pc([ac,bd],imp(J,and(eq(a,c),eq(b,d))));
  return discharge(A,done,a,b,c,d,p,q,true);
}
export function kuratowskiProofs(){const A=assemble();
  const exists=existence(A),unique=uniqueness(A),a=20n,b=21n,p=22n,q=23n;
  const Ru=op(a,b,p),Rv=op(a,b,q);A.setOpaque([Ru,Rv]);
  const cur=A.pc([unique],imp(Ru,imp(Rv,eq(q,p))),[Ru,Rv,eq(q,p)]);
  const g=A.cg(cur,q),body=and(Ru,all(q,imp(Rv,eq(q,p))));
  const intro=A.pc([g],imp(Ru,body),[Ru,all(q,imp(Rv,eq(q,p)))]);
  const out=A.mp(exists,A.em(intro,p));let total=out;for(const x of [b,a])total=A.gen(total,x);
  const uniqueLength=A.q.length,uniqueEnd=A.at(total);
  const inj=injectivity(A);let injEnd=inj;for(const x of [31n,30n,23n,22n,21n,20n])injEnd=A.gen(injEnd,x);
  return {lines:A.q,uniqueLength,uniqueEnd,injectiveEnd:A.at(injEnd)};
}
function tests(){const result=kuratowskiProofs(),q=result.lines;
  const expectedUnique=all(20,all(21,ex(22,and(op(20,21,22),all(23,imp(op(20,21,23),eq(23,22)))))));
  const expectedInjective=[20n,21n,22n,23n,30n,31n].reduceRight((f,x)=>all(x,f),
    imp(and(op(20,21,22),and(op(30,31,23),eq(22,23))),and(eq(20,30),eq(21,31))));
  assert(same(result.uniqueEnd,expectedUnique));assert(same(result.injectiveEnd,expectedInjective));
  assert.equal(fv(result.uniqueEnd).size,0);assert.equal(fv(result.injectiveEnd).size,0);
  assert.deepEqual([...new Set(q.filter(l=>l[1]===0).map(l=>l[2][1].toString()))].sort(),['0','1']);
  const first=q.slice(0,result.uniqueLength),uniqueCode=P.pack(first.map(P.record)),uniqueEnd=P.num(result.uniqueEnd);
  assert(verifyZF(uniqueCode,uniqueEnd),'unique existence numerical acceptance');
  const allCode=P.pack(q.map(P.record)),end=P.num(result.injectiveEnd);assert(verifyZF(allCode,end),'injectivity numerical acceptance');
  let rejected=0;
  function reject(rows,target){assert(!verifyZF(P.pack(rows.map(P.record)),target));rejected++;}
  const mutate=(index,line)=>{const rows=q.map(x=>[x[0],x[1],[...x[2]]]);rows[index]=line;return rows;};
  const ax=q.findIndex(l=>l[1]===0);reject(mutate(ax,[q[ax][0],0,[0n,6n]]),end);
  const mp=q.findIndex(l=>l[1]===7);reject(mutate(mp,[q[mp][0],7,[mp,q[mp][2][1]]]),end);
  const subst=q.findIndex(l=>l[1]===6);reject(mutate(subst,[q[subst][0],6,[...q[subst][2].slice(0,3),98n]]),end);
  const ee=q.findIndex(l=>l[1]===9&&fv(arrow(q[l[2][0]][0])[1]).size>0);
  const [eeAntecedent,eeConsequent]=arrow(q[q[ee][2][0]][0]),forbidden=[...fv(eeConsequent)][0];
  reject(mutate(ee,[imp(ex(forbidden,eeAntecedent),eeConsequent),9,[q[ee][2][0],forbidden]]),end);
  reject(q,P.num(all(20,eq(20,21))));
  console.log(JSON.stringify({uniqueExistenceLines:first.length,injectivityTotalLines:q.length,uniqueProofBits:uniqueCode.toString(2).length,injectivityProofBits:allCode.toString(2).length,mutationsRejected:rejected}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
