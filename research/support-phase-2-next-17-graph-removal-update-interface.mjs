// Research-only: checked graph removal; full UPDATE remains an open proof block.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF,axiomCertificate} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
const read=name=>readFileSync(new URL(name,import.meta.url),'utf8');
const old=read('./support-phase-2-next-17-annotated-separation-adapter.md').match(/```javascript\n([\s\S]*?)\n```/)[1];
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pack,num,record};')();
const kuratowski=read('./support-phase-2-next-17-kuratowski-proof-block.mjs');
const start=kuratowski.indexOf('const eq='),stop=kuratowski.indexOf('function existence(A)');
assert(start>=0&&stop>start,'committed factory markers');
const F=new Function('assert','operationProof',kuratowski.slice(start,stop)+
  '\nreturn {assemble,eq,mem,neg,and,ex,imp,all,iff,or,op,fv,same,arrow};')(assert,operationProof);
const {eq,mem,neg,and,ex,imp,all,iff,or,op,fv,same,arrow}=F;
const i0=20n,z0=21n,c0=22n;
const matrix=neg(ex(c0,op(i0,c0,z0)));
// This is independently written, not obtained by calling the certificate reconstructor.
const schema=all(0,all(i0,ex(1,all(z0,iff(mem(z0,1),and(mem(z0,0),matrix))))));
const certificate=[1n,P.num(matrix),z0];
const prune=(s,i,r)=>all(21,iff(mem(21,r),and(mem(21,s),neg(ex(22,op(i,22,21))))));
const coord=(r,i,c)=>ex(34,and(op(i,c,34),mem(34,r)));
export function removalProofs(){
  const A=F.assemble(),s=30n,i=31n,r=32n,c=33n,v=35n;
  assert(axiomCertificate(P.num(schema),P.pack(certificate)),'actual canonical Separation certificate');
  const ax=A.add(schema,0,certificate);
  const exists=A.alpha(A.ui(A.ui(ax,s),i),r);assert(same(A.at(exists),ex(r,prune(s,i,r))));
  const R=prune(s,i,r),S=prune(s,i,v),K=and(R,S),test=2n;
  const p=A.uiImp(R,test),q=A.uiImp(S,test),C=neg(ex(22,op(i,22,test)));
  const compare=A.pc([p,q],imp(K,iff(mem(test,v),mem(test,r))),[R,S,C,mem(test,s),mem(test,v),mem(test,r)]);
  const pointwise=A.cg(compare,test);
  const ext=A.q.findIndex(l=>l[1]===0&&l[2][0]===0n&&l[2][1]===0n);assert(ext>=0);
  const extAt=A.ui(A.ui(ext,v),r);
  const functional=A.pc([pointwise,extAt],imp(K,eq(v,r)),[K,all(test,iff(mem(test,v),mem(test,r))),eq(v,r)]);
  const curried=A.pc([functional],imp(R,imp(S,eq(v,r))),[R,S,eq(v,r)]);
  const unique=A.cg(curried,v),body=and(R,all(v,imp(S,eq(v,r))));
  const introduction=A.pc([unique],imp(R,body),[R,all(v,imp(S,eq(v,r)))]);
  let done=A.mp(exists,A.em(introduction,r));for(const x of [i,s])done=A.gen(done,x);
  const uniqueLength=A.q.length,uniqueEnd=A.at(done);
  // No ordered-pair theorem is assumed here: the same witness contradicts removal.
  const pvar=34n,atom=op(i,c,pvar),oldCoordinate=ex(22,op(i,22,pvar));
  const clause=A.uiImp(R,pvar),witness=A.ei(op(i,22,pvar),22n,c);
  const bad=and(atom,mem(pvar,r));
  const excluded=A.pc([clause,witness],imp(R,neg(bad)),[R,atom,oldCoordinate,mem(pvar,r),mem(pvar,s)]);
  const generalized=A.cg(excluded,pvar); // R -> not exists p not not bad.
  const dn=A.ax(imp(bad,neg(neg(bad))),[bad]),lift=A.em(dn,pvar);
  const emptyCoordinate=A.pc([generalized,lift],imp(R,neg(coord(r,i,c))),[R,ex(pvar,bad),ex(pvar,neg(neg(bad)))]);
  let removed=A.cg(emptyCoordinate,c);for(const x of [r,i,s])removed=A.gen(removed,x);
  return {lines:A.q,uniqueLength,uniqueEnd,noCoordinateEnd:A.at(removed),schema,certificate};
}
function finiteTests(){
  const sets=[],ids=new Map();
  const set=xs=>{const a=[...new Set(xs)].sort((x,y)=>x-y),k=a.join(',');if(!ids.has(k)){ids.set(k,sets.length);sets.push(a);}return ids.get(k);};
  const zero=set([]),one=set([zero]),two=set([zero,one]),pair=(a,b)=>set([set([a]),set([a,b])]);
  function components(p){const xs=[...new Set(sets[p].flatMap(x=>sets[x]))];
    for(const a of xs)for(const b of xs)if(pair(a,b)===p)return [a,b];return null;}
  const C=(s,i,c)=>sets[s].some(p=>{const x=components(p);return x!==null&&x[0]===i&&x[1]===c;});
  const remove=(s,i)=>set(sets[s].filter(p=>{const x=components(p);return x===null||x[0]!==i;}));
  const update=(s,i,b)=>set([...sets[remove(s,i)],pair(i,b)]);
  const values=[zero,one],indices=[zero,one,two],entries=values.flatMap(i=>values.map(b=>pair(i,b)));
  let identityCases=0,removedCoordinates=0,junkCases=0;
  for(let mask=0;mask<16;mask++)for(const junk of [false,true]){
    const s=set([...entries.filter((_,j)=>mask&(1<<j)),...(junk?[zero]:[])]);
    for(const i of indices){const r=remove(s,i);for(const c of values){assert(!C(r,i,c));removedCoordinates++;}
      for(const b of values){const t=update(s,i,b);if(junk){assert(sets[t].includes(zero));junkCases++;}
        for(const j of indices)for(const c of values){assert.equal(C(t,j,c),(j===i&&c===b)||(j!==i&&C(s,j,c)));identityCases++;}}}}
  function tuple(s,m,A){const rows=sets[s].map(components);return rows.every(x=>x!==null&&m.includes(x[0])&&A.includes(x[1]))&&
    m.every(i=>rows.filter(x=>x[0]===i).length===1);}
  let typedUpdates=0,emptyCases=0,negativeCases=0;
  for(let n=0;n<=2;n++)for(let mask=0;mask<(1<<n);mask++){
    const dom=indices.slice(0,n),s=set(dom.map((i,j)=>pair(i,values[(mask>>j)&1])));assert(tuple(s,dom,values));
    for(const i of dom)for(const b of values){assert(tuple(update(s,i,b),dom,values));typedUpdates++;}
    if(n===0){assert.equal(remove(s,zero),zero);assert(!tuple(update(s,zero,one),[],values));emptyCases++;}}
  const collision=set([pair(zero,zero),pair(zero,one)]);assert(!tuple(collision,[zero],values));
  assert.equal(update(collision,zero,one),set([pair(zero,one)]));negativeCases++;
  assert(!tuple(update(zero,zero,two),[zero],values));negativeCases++;
  assert(!tuple(update(set([pair(zero,zero)]),one,one),[zero],values));negativeCases++;
  return {identityCases,removedCoordinates,junkCases,typedUpdates,emptyCases,negativeCases};
}
function tests(){const q=removalProofs(),first=q.lines.slice(0,q.uniqueLength);
  const expected=all(30,all(31,ex(32,and(prune(30,31,32),all(35,imp(prune(30,31,35),eq(35,32)))))));
  const expectedAbsent=all(30,all(31,all(32,imp(prune(30,31,32),all(33,neg(coord(32,31,33)))))));
  assert(same(expected,q.uniqueEnd));assert(same(expectedAbsent,q.noCoordinateEnd));
  assert.equal(fv(expected).size,0);assert.equal(fv(expectedAbsent).size,0);
  const p1=P.pack(first.map(P.record)),a1=P.num(expected),p2=P.pack(q.lines.map(P.record)),a2=P.num(expectedAbsent);
  assert(verifyZF(p1,a1));assert(verifyZF(p2,a2));
  let rejected=0;
  const rows=()=>q.lines.map(l=>[l[0],l[1],[...l[2]]]);
  const badCert=rows(),schemaLine=badCert.findIndex(l=>l[1]===0&&l[2][0]===1n);
  badCert[schemaLine][2][2]=20n;assert(!verifyZF(P.pack(badCert.map(P.record)),a2));rejected++;
  const badMP=rows(),j=badMP.findIndex(l=>l[1]===7);badMP[j][2][0]=j;assert(!verifyZF(P.pack(badMP.map(P.record)),a2));rejected++;
  const schemaWrong=all(0,all(i0,ex(1,all(z0,iff(mem(z0,1),and(mem(z0,0),neg(matrix)))))));
  assert(!axiomCertificate(P.num(schemaWrong),P.pack(certificate)));rejected++;
  assert(!verifyZF(p2,P.num(all(30,eq(30,31)))));rejected++;
  console.log(JSON.stringify({uniqueRemovalLines:first.length,noCoordinateTotalLines:q.lines.length,uniqueRemovalBits:p1.toString(2).length,noCoordinateBits:p2.toString(2).length,mutationsRejected:rejected,finiteSemanticTests:finiteTests()}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
