// Research-only: exact ambient graph typing/domain/functionality preservation.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import {coordinate,coordinateProofs} from './support-phase-2-next-17-update-coordinate-proof.mjs';
import {update,appendDependencyClosure} from './support-phase-2-next-17-update-existence-proof.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const old=read('./support-phase-2-next-17-annotated-separation-adapter.md').match(/```javascript\n([\s\S]*?)\n```/)[1];
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pack,num,record};')();
const src=read('./support-phase-2-next-17-kuratowski-proof-block.mjs'),start=src.indexOf('const eq='),stop=src.indexOf('function existence(A)');
assert(start>=0&&stop>start);
const F=new Function('assert','operationProof',src.slice(start,stop)+'\nreturn {assemble,eq,mem,neg,and,ex,imp,all,iff,or,op,fv,same,arrow};')(assert,operationProof);
const {eq,mem,neg,and,ex,imp,all,iff,or,op,fv,same,arrow}=F;
export function tupleClauses(a,m,s){
  const shape=all(65,imp(mem(65,s),ex(60,ex(61,and(mem(60,m),and(mem(61,a),op(60,61,65)))))));
  const domain=all(60,imp(mem(60,m),ex(61,and(mem(61,a),coordinate(s,60,61)))));
  const functional=all(60,all(61,all(64,imp(and(coordinate(s,60,61),coordinate(s,60,64)),eq(61,64)))));
  return {shape,domain,functional};
}
export function tuple(a,m,s){const {shape,domain,functional}=tupleClauses(a,m,s);return and(shape,and(domain,functional));}
const close=f=>[70n,71n,40n,41n,42n,43n].reduceRight((a,x)=>all(x,a),f);
export function tupleProof(){
  const A=F.assemble(),a=70n,m=71n,s=40n,i=41n,b=42n,t=43n,j=60n,c=61n,d=64n,p=65n;
  const U=update(s,i,b,t),S=tupleClauses(a,m,s),T=tupleClauses(a,m,t),Ts=tuple(a,m,s),Tt=tuple(a,m,t);
  const im=mem(i,m),ba=mem(b,a),K=and(Ts,and(im,and(ba,U))),si=eq(j,i);
  A.setOpaque([K]);
  const facts=[S.shape,S.domain,S.functional,im,ba,U];
  const fact=f=>A.pc([],imp(K,f),facts);
  function underUI(q,x){const f=arrow(A.at(q))[1],r=A.uiImp(f,x),g=arrow(A.at(r))[1];return A.pc([q,r],imp(K,g),[K,f,g]);}
  function finish(q,variables){for(const x of variables)q=A.cg(q,x);return q;}
  const cq=coordinateProofs().equivalence;
  const C=coordinate(t,j,c),Cs=coordinate(s,j,c),B=or(and(si,eq(c,b)),and(neg(si),Cs));
  const openIndex=cq.lines.findIndex(l=>same(l[0],imp(U,iff(C,B))));assert(openIndex>=0);
  const [coord]=appendDependencyClosure(A.q,cq.lines,[openIndex]);
  const coordGeneral=A.gen(coord,c),coordB=A.ui(coordGeneral,b),coordD=A.ui(coordGeneral,d);

  // Graph shape: U explicitly distinguishes retained old elements and a new pair.
  const W=and(mem(j,m),and(mem(c,a),op(j,c,p))),G=ex(j,ex(c,W));
  const insertC=A.ei(W,c,b),insertJ=A.ei(ex(c,W),j,i);
  // First eliminate c by choosing b, then j by choosing i, with no capture.
  const first=A.ui(A.gen(insertC,j),i);
  const newShape=A.pc([first,insertJ],imp(and(im,and(ba,op(i,b,p))),G),
    [im,ba,op(i,b,p),ex(c,and(im,and(mem(c,a),op(i,c,p)))),G]);
  const shapeOld=underUI(fact(S.shape),p),up=A.uiImp(U,p);
  const shapePoint=A.pc([shapeOld,up,newShape,fact(im),fact(ba),fact(U)],imp(K,imp(mem(p,t),G)),
    [K,mem(p,s),mem(p,t),neg(ex(22,op(i,22,p))),op(i,b,p),im,ba,G,U]);
  const shape=finish(shapePoint,[p]);assert(same(A.at(shape),imp(K,T.shape)));

  // Domain coverage: the equal-index branch uses b; the other branch transports
  // the old domain witness, then removes that witness by restricted EE.
  const V=ex(c,and(mem(c,a),C)),Cb=coordinate(t,j,b),Csb=coordinate(s,j,b);
  const vb=A.ei(and(mem(c,a),C),c,b);
  const sameCase=A.pc([coordB,A.reflex(b),vb,fact(ba),fact(U)],imp(K,imp(si,V)),
    [K,U,si,eq(b,b),Cb,Csb,ba,V]);
  const vc=A.ei(and(mem(c,a),C),c),oldW=and(mem(c,a),Cs);
  const oldPoint=A.pc([coord,vc,fact(U)],imp(oldW,imp(K,imp(neg(si),V))),
    [K,U,si,eq(c,b),mem(c,a),Cs,C,V]);
  const oldElim=A.ee(oldPoint,c),domainOld=underUI(fact(S.domain),j);
  const domainPoint=A.pc([domainOld,oldElim,sameCase],imp(K,imp(mem(j,m),V)),
    [K,mem(j,m),ex(c,oldW),si,V]);
  const domain=finish(domainPoint,[j]);assert(same(A.at(domain),imp(K,T.domain)));

  // Functionality: both values equal b at i, otherwise use old functionality.
  const Cd=coordinate(t,j,d),Csd=coordinate(s,j,d);
  const oldFun=underUI(underUI(underUI(fact(S.functional),j),c),d);
  const trans=A.transport(d,b,x=>eq(c,x),true);
  const funPoint=A.pc([coord,coordD,oldFun,trans,fact(U)],imp(K,imp(and(C,Cd),eq(c,d))),
    [K,U,si,C,Cd,Cs,Csd,eq(c,b),eq(d,b),eq(c,d)]);
  const functional=finish(funPoint,[d,c,j]);assert(same(A.at(functional),imp(K,T.functional)));
  const total=A.pc([shape,domain,functional],imp(K,Tt),[K,T.shape,T.domain,T.functional]);
  const roots={shape,domain,functional,total},result={};
  for(const [name,root] of Object.entries(roots)){let end=root;for(const x of [43n,42n,41n,40n,71n,70n])end=A.gen(end,x);
    const rows=[];appendDependencyClosure(rows,A.q,[end]);result[name]={lines:rows,endpoint:A.at(end)};}
  return {...result,rawLines:A.q.length};
}

// The original sentinel list may exceed V8's single-string limit. Change only
// its outer list acquisition, retaining the kernel's entire line-checking body.
// Each member is still the actual BigInt-encoded record, decoded by D.list.
export function numericalRecordVerifier(){
  const kernel=read('./support-phase-2-next-17-zf-axiom-operation-kernel.mjs');
  const cut=kernel.indexOf('function skeleton(f)');assert(cut>0);
  let body=kernel.slice(0,cut).replaceAll('export function ','function ');
  body=body.replace(/^import .*;\n/gm,'');
  const original='const records=D.list(proof);',replacement='const records=proof;';
  assert.equal(body.split(original).length,2);body=body.replace(original,replacement);
  // The source-relative URL must retain the imported kernel's exact directory.
  body=body.replaceAll('import.meta.url','kernelURL');
  return new Function('readFileSync','assert','fileURLToPath','kernelURL',body+'\nreturn verifyZF;')(
    readFileSync,assert,fileURLToPath,new URL('./support-phase-2-next-17-zf-axiom-operation-kernel.mjs',import.meta.url));
}

export function boundaryTests(){
  // Finite hereditary-set model, separate from the numerical proof checker.
  const sets=[],ids=new Map(),set=xs=>{const ys=[...new Set(xs)].sort((x,y)=>x-y),key=ys.join(',');
    if(!ids.has(key)){ids.set(key,sets.length);sets.push(ys);}return ids.get(key);};
  const z=set([]),o=set([z]),two=set([z,o]),three=set([z,o,two]);
  const pair=(x,y)=>set([set([x]),set([x,y])]);
  function components(p){const xs=[...new Set(sets[p].flatMap(x=>sets[x]))];
    for(const x of xs)for(const y of xs)if(pair(x,y)===p)return [x,y];return null;}
  const C=(s,j,c)=>sets[s].some(p=>{const q=components(p);return q!==null&&q[0]===j&&q[1]===c;});
  const upd=(s,i,b)=>set([...sets[s].filter(p=>{const q=components(p);return q===null||q[0]!==i;}),pair(i,b)]);
  function clauses(a,m,s){const rows=sets[s].map(components);
    return {shape:rows.every(q=>q!==null&&sets[m].includes(q[0])&&sets[a].includes(q[1])),
      domain:sets[m].every(j=>sets[a].some(c=>C(s,j,c))),
      functional:rows.every(q=>q===null||rows.every(r=>r===null||r[0]!==q[0]||r[1]===q[1]))};}
  const typed=(a,m,s)=>Object.values(clauses(a,m,s)).every(Boolean),indices=[z,o,two],values=[z,o],a=set(values);
  let preservation=0,idempotent=0,nonOrdinalDomains=0;
  for(let mask=0;mask<8;mask++){const dom=indices.filter((_,n)=>mask&(1<<n)),m=set(dom);
    for(let assignment=0;assignment<(1<<dom.length);assignment++){
      const s=set(dom.map((j,n)=>pair(j,values[(assignment>>n)&1])));assert(typed(a,m,s));
      for(const j of dom)for(const b of values){const t=upd(s,j,b);assert(typed(a,m,t));preservation++;
        if(C(s,j,b)){assert.equal(t,s);idempotent++;}if(mask===4)nonOrdinalDomains++;}}}
  assert(typed(z,z,z));assert(typed(a,z,z));
  assert(!typed(a,z,upd(z,z,o))); // Empty domain: insertion leaves the domain.
  assert(!typed(z,o,set([pair(z,z)]))); // No value belongs to the empty carrier.
  const s=set([pair(z,z)]),outside=upd(s,three,o),badValue=upd(s,z,two);
  assert(typed(a,o,s));assert(!clauses(a,o,outside).shape);assert(!typed(a,o,outside));
  assert(!clauses(a,o,badValue).shape);assert(!clauses(a,o,badValue).domain);assert(!typed(a,o,badValue));
  const collision=set([pair(z,z),pair(z,o)]);assert(!clauses(a,o,collision).functional);
  assert.equal(upd(collision,z,o),set([pair(z,o)]));
  const otherCollision=set([pair(z,z),pair(o,z),pair(o,o)]);
  assert(!clauses(a,two,upd(otherCollision,z,o)).functional);
  const junk=set([z,pair(z,z)]);assert(!clauses(a,o,junk).shape);assert(!clauses(a,o,upd(junk,z,o)).shape);
  return {preservation,idempotent,nonOrdinalDomains,boundaryAssertions:15};
}

function tests(){
  const check=numericalRecordVerifier(),small=operationProof('pair');
  assert.equal(check(small.lines.map(P.record),small.endpoint),verifyZF(small.code,small.endpoint));
  assert.equal(check(small.lines.map(P.record),0n),verifyZF(small.code,0n));
  const invalidSmall=small.lines.map(l=>[l[0],l[1],[...l[2]]]),badMP=invalidSmall.findIndex(l=>l[1]===7);
  invalidSmall[badMP][2][0]=badMP;const invalidRecords=invalidSmall.map(P.record);
  assert(!check(invalidRecords,small.endpoint));assert(!verifyZF(P.pack(invalidRecords),small.endpoint));
  const qs=tupleProof(),a=70n,m=71n,s=40n,i=41n,b=42n,t=43n;
  // Independent literal construction: do not call tuple()/tupleClauses().
  const sh=r=>all(65,imp(mem(65,r),ex(60,ex(61,and(mem(60,m),and(mem(61,a),op(60,61,65)))))));
  const dm=r=>all(60,imp(mem(60,m),ex(61,and(mem(61,a),coordinate(r,60,61)))));
  const fn=r=>all(60,all(61,all(64,imp(and(coordinate(r,60,61),coordinate(r,60,64)),eq(61,64)))));
  const K=and(and(sh(s),and(dm(s),fn(s))),and(mem(i,m),and(mem(b,a),update(s,i,b,t))));
  const expected={shape:sh(t),domain:dm(t),functional:fn(t),total:and(sh(t),and(dm(t),fn(t)))};
  const stats={};let records;
  for(const name of Object.keys(expected)){const q=qs[name];assert(same(q.endpoint,close(imp(K,expected[name]))));assert.equal(fv(q.endpoint).size,0);
    records=q.lines.map(P.record);assert(check(records,P.num(q.endpoint)),name+' numerical record acceptance');
    const bits=2+records.length+records.reduce((n,x)=>n+1+2*x.toString(2).length,0);
    if(name==='shape'){const code=P.pack(records);assert.equal(code.toString(2).length,bits);
      assert(verifyZF(code,P.num(q.endpoint)),'original whole-code checker agrees');}
    stats[name]={lines:q.lines.length,sentinelProofBits:bits,nonlogicalLines:q.lines.filter(l=>l[1]===0).length};
    console.log(JSON.stringify({checked:name,...stats[name]}));}
  const q=qs.total,end=P.num(q.endpoint),copy=()=>q.lines.map(l=>[l[0],l[1],[...l[2]]]);let rejected=0;
  const reject=rows=>{assert(!check(rows.map(P.record),end));rejected++;};
  const mp=copy(),mi=mp.findIndex(l=>l[1]===7);mp[mi][2][0]=mi;reject(mp);
  const ee=copy(),ei=ee.findIndex(l=>l[1]===9&&fv(arrow(ee[l[2][0]][0])[1]).size>0);
  const [left,right]=arrow(ee[ee[ei][2][0]][0]),v=[...fv(right)][0];ee[ei]=[imp(ex(v,left),right),9,[ee[ei][2][0],v]];reject(ee);
  const transport=copy(),ti=transport.findIndex(l=>l[1]===6);transport[ti][2][3]=98n;reject(transport);
  assert(!check(records,P.num(close(imp(and(and(sh(s),and(dm(s),fn(s))),and(mem(b,a),update(s,i,b,t))),expected.total)))));rejected++;
  assert(!check(records,P.num(close(imp(and(and(sh(s),and(dm(s),fn(s))),and(mem(i,m),update(s,i,b,t))),expected.total)))));rejected++;
  const prefix=[[eq(80,80),5,[80n]]];appendDependencyClosure(prefix,q.lines,[q.lines.length-1]);assert(check(prefix.map(P.record),end));
  const labels=[...new Set(q.lines.filter(l=>l[1]===0).map(l=>l[2][0]+':'+l[2][1]))].sort();assert.deepEqual(labels,['0:0','0:1']);
  const badRecord=[...records];badRecord[0]=0n;assert(!check(badRecord,end));rejected++;
  assert(!check([],end));rejected++;
  console.log(JSON.stringify({rawLines:qs.rawLines,proofs:stats,nonlogicalCertificates:labels,mutationsRejected:rejected,rebasedPrefix:true,
    boundaryTests:boundaryTests(),outerSerialization:'record-array, exact sentinel records'}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
