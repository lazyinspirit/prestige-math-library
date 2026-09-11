// Research-only: arbitrary-set UPDATE coordinate equivalence, not tuple typing.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import {kuratowskiProofs} from './support-phase-2-next-17-kuratowski-proof-block.mjs';
import {update,appendDependencyClosure} from './support-phase-2-next-17-update-existence-proof.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const old=read('./support-phase-2-next-17-annotated-separation-adapter.md').match(/```javascript\n([\s\S]*?)\n```/)[1];
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pack,num,record};')();
const src=read('./support-phase-2-next-17-kuratowski-proof-block.mjs'),start=src.indexOf('const eq='),stop=src.indexOf('function existence(A)');
assert(start>=0&&stop>start);
const F=new Function('assert','operationProof',src.slice(start,stop)+'\nreturn {assemble,eq,mem,neg,and,ex,imp,all,iff,or,op,fv,same,arrow};')(assert,operationProof);
const {eq,mem,neg,and,ex,imp,all,iff,or,op,fv,same,arrow}=F;
export const coordinate=(s,j,c)=>ex(62,and(op(j,c,62),mem(62,s)));
const close=f=>[40n,41n,42n,43n,60n,61n].reduceRight((a,x)=>all(x,a),f);
export function coordinateProofs(){
  const A=F.assemble(),s=40n,i=41n,b=42n,t=43n,j=60n,c=61n,p=62n,h=63n;
  const U=update(s,i,b,t),Ct=coordinate(t,j,c),Cs=coordinate(s,j,c),sameIndex=eq(j,i),sameValue=eq(c,b);
  const positive=and(sameIndex,sameValue),negative=and(neg(sameIndex),Cs),B=or(positive,negative);
  A.setOpaque([U]);const kop=kuratowskiProofs();
  const existenceIndex=kop.lines.findIndex(l=>same(l[0],ex(22,op(20,21,22))));assert(existenceIndex>=0);
  const [inj,existsOpen]=appendDependencyClosure(A.q,kop.lines,[kop.lines.length-1,existenceIndex]);
  let existsClosed=existsOpen;for(const x of [21n,20n])existsClosed=A.gen(existsClosed,x);
  const newPairExists=A.alpha(A.ui(A.ui(existsClosed,i),b),h);
  function inject(x,y,z,w){return [x,y,p,p,z,w].reduce((r,v)=>A.ui(r,v),inj);}
  function updateClause(point){const x=A.uiImp(U,point);return {line:x,formula:arrow(A.at(x))[1]};}
  function closeLine(q){let r=q;for(const x of [61n,60n,43n,42n,41n,40n])r=A.gen(r,x);return r;}

  // Forward: an output witness is either retained with a different coordinate,
  // or is the newly inserted pair, whose coordinates are identified by injectivity.
  const Ojc=op(j,c,p),oldExists=ex(22,op(i,22,p)),N=op(i,b,p),retained=and(mem(p,s),neg(oldExists));
  const Cw=and(Ojc,mem(p,t)),oldWitness=and(Ojc,mem(p,s)),uc=updateClause(p);
  const sameCoordinate=A.transport(j,i,x=>op(x,c,p));
  const oldEI=A.ei(op(i,22,p),22n,c);
  const contradiction=A.pc([sameCoordinate,oldEI],imp(and(sameIndex,Ojc),oldExists),[sameIndex,Ojc,op(i,c,p),oldExists]);
  const csEI=A.ei(and(op(j,c,p),mem(p,s)),p);
  const injNew=inject(j,c,i,b),pp=A.reflex(p);
  const newCase=A.pc([injNew,pp],imp(and(Ojc,N),positive),[Ojc,N,eq(p,p),sameIndex,sameValue]);
  const forwardPoint=A.pc([uc.line,contradiction,csEI,newCase],imp(U,imp(Cw,B)),
    [U,Ojc,mem(p,t),mem(p,s),oldExists,N,Cs,sameIndex,sameValue]);
  const curry=A.pc([forwardPoint],imp(Cw,imp(U,B)),[Cw,U,B]);
  const forward=A.pc([A.ee(curry,p)],imp(U,imp(Ct,B)),[U,Ct,B]);
  const forwardClosed=closeLine(forward);

  // Reverse at the replaced coordinate: instantiate the actual ordered-pair
  // existence proof and use equality transport for both coordinates.
  const H=op(i,b,h),jh=op(j,b,h),ch=op(j,c,h),uh=updateClause(h);
  const first=A.transport(j,i,x=>op(x,b,h),true),second=A.transport(c,b,x=>op(j,x,h),true);
  const newCtEI=A.ei(and(op(j,c,p),mem(p,t)),p,h);
  const newBackward=A.pc([first,second,uh.line,newCtEI],imp(H,imp(U,imp(positive,Ct))),
    [H,jh,ch,U,sameIndex,sameValue,mem(h,t),and(mem(h,s),neg(ex(22,op(i,22,h)))),Ct]);
  const newElim=A.ee(newBackward,h),positiveBackward=A.mp(newPairExists,newElim);
  assert(same(A.at(positiveBackward),imp(U,imp(positive,Ct))));

  // Reverse at an unchanged coordinate: injectivity excludes every possible
  // removed value, not just the supplied value c.
  const Oiv=op(i,22,p),K=and(Ojc,neg(sameIndex)),injOld=inject(j,c,i,22n);
  const impossible=A.pc([injOld,pp],imp(K,neg(Oiv)),[Ojc,Oiv,eq(p,p),sameIndex,eq(c,22)]);
  const generalized=A.cg(impossible,22n),dn=A.ax(imp(Oiv,neg(neg(Oiv))),[Oiv]),lift=A.em(dn,22n);
  const noOld=A.pc([generalized,lift],imp(K,neg(oldExists)),[K,oldExists,ex(22,neg(neg(Oiv)))]);
  const retainedCtEI=A.ei(and(Ojc,mem(p,t)),p);
  const retainedBackward=A.pc([uc.line,noOld,retainedCtEI],imp(oldWitness,imp(U,imp(neg(sameIndex),Ct))),
    [U,Ojc,mem(p,s),mem(p,t),oldExists,N,sameIndex,Ct]);
  const oldElim=A.ee(retainedBackward,p),negativeBackward=A.pc([oldElim],imp(U,imp(negative,Ct)),[U,Cs,Ct,sameIndex]);
  const backward=A.pc([positiveBackward,negativeBackward],imp(U,imp(B,Ct)),[U,positive,negative,Ct]);
  const backwardClosed=closeLine(backward);
  const result=A.pc([forward,backward],imp(U,iff(Ct,B)),[U,Ct,B]),closed=closeLine(result);
  function slice(root){const rows=[];appendDependencyClosure(rows,A.q,[root]);return {lines:rows,endpoint:A.at(root)};}
  return {forward:slice(forwardClosed),backward:slice(backwardClosed),equivalence:slice(closed),rawLines:A.q.length};
}
function tests(){
  const qs=coordinateProofs(),U=update(40,41,42,43),Ct=coordinate(43,60,61),Cs=coordinate(40,60,61);
  const B=or(and(eq(60,41),eq(61,42)),and(neg(eq(60,41)),Cs));
  const expected={forward:close(imp(U,imp(Ct,B))),backward:close(imp(U,imp(B,Ct))),equivalence:close(imp(U,iff(Ct,B)))};
  const stats={};
  for(const name of ['forward','backward','equivalence']){const q=qs[name];assert(same(q.endpoint,expected[name]));assert.equal(fv(q.endpoint).size,0);
    const code=P.pack(q.lines.map(P.record)),end=P.num(q.endpoint);assert(verifyZF(code,end),name+' numerical acceptance');
    stats[name]={lines:q.lines.length,bits:code.toString(2).length,nonlogicalLines:q.lines.filter(l=>l[1]===0).length};}
  const q=qs.equivalence,end=P.num(q.endpoint),copy=()=>q.lines.map(l=>[l[0],l[1],[...l[2]]]);let rejected=0;
  const reject=rows=>{assert(!verifyZF(P.pack(rows.map(P.record)),end));rejected++;};
  const mp=copy(),m=mp.findIndex(l=>l[1]===7);mp[m][2][0]=m;reject(mp);
  const ee=copy(),n=ee.findIndex(l=>l[1]===9&&fv(arrow(ee[l[2][0]][0])[1]).size>0);
  const [a,b]=arrow(ee[ee[n][2][0]][0]),v=[...fv(b)][0];ee[n]=[imp(ex(v,a),b),9,[ee[n][2][0],v]];reject(ee);
  const equality=copy(),e=equality.findIndex(l=>l[1]===6);equality[e][2][3]=98n;reject(equality);
  const wrong=close(imp(U,iff(Ct,or(and(eq(60,41),eq(61,42)),and(eq(60,41),Cs)))));
  assert(!verifyZF(P.pack(q.lines.map(P.record)),P.num(wrong)));rejected++;
  const prefix=[[eq(80,80),5,[80n]]];appendDependencyClosure(prefix,q.lines,[q.lines.length-1]);assert(verifyZF(P.pack(prefix.map(P.record)),end));
  assert.equal(stats.forward.nonlogicalLines,0); // The implication forward needs no existence axiom.
  const labels=[...new Set(q.lines.filter(l=>l[1]===0).map(l=>l[2][0]+':'+l[2][1]))].sort();
  assert.deepEqual(labels,['0:0','0:1']);
  console.log(JSON.stringify({rawLines:qs.rawLines,proofs:stats,nonlogicalCertificates:labels,mutationsRejected:rejected,rebasedPrefix:true}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
