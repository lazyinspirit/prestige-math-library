// Research-only: exact ambient assignment-universe existence for any set domain.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF,axiomCertificate} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import {appendDependencyClosure} from './support-phase-2-next-17-update-existence-proof.mjs';
import {tuple,tupleClauses,numericalRecordVerifier} from './support-phase-2-next-17-update-tuple-preservation.mjs';
import {coordinate} from './support-phase-2-next-17-update-coordinate-proof.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const old=read('./support-phase-2-next-17-annotated-separation-adapter.md').match(/```javascript\n([\s\S]*?)\n```/)[1];
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pack,num,record};')();
const src=read('./support-phase-2-next-17-kuratowski-proof-block.mjs'),start=src.indexOf('const eq='),stop=src.indexOf('function existence(A)');
assert(start>=0&&stop>start);
const F=new Function('assert','operationProof',src.slice(start,stop)+'\nreturn {assemble,eq,mem,neg,and,ex,imp,all,iff,or,op,pair,triple,fv,same,arrow};')(assert,operationProof);
const {eq,mem,neg,and,ex,imp,all,iff,or,op,pair,triple,fv,same,arrow}=F;
const conj=xs=>xs.reduceRight((r,x)=>r===null?x:and(x,r),null);
const close=f=>[...fv(f)].sort((a,b)=>a<b?-1:a>b?1:0).reduceRight((r,x)=>all(x,r),f);
const subset=(a,b)=>all(3,imp(mem(3,a),mem(3,b)));
export const powerCover=(a,b)=>all(2,imp(subset(2,a),mem(2,b)));
const union=(a,b)=>all(2,iff(mem(2,b),ex(3,and(mem(3,a),mem(2,3)))));
const cover=(a,m,c)=>all(66,imp(or(mem(66,m),mem(66,a)),mem(66,c)));
export const assignmentUniverse=(a,m,d)=>all(40,iff(mem(40,d),tuple(a,m,40)));

export function assignmentUniverseProof(){
  const A=F.assemble(),a=70n,m=71n,d=72n,v=73n,w=80n,c=81n,p1=82n,p2=83n,p3=84n,s=40n,j=60n,b=61n,p=65n;
  const C=cover(a,m,c),W1=powerCover(c,p1),W2=powerCover(p1,p2),W3=powerCover(p2,p3),B=conj([C,W1,W2,W3]);
  // A pair with both entries in a carrier is a subset of that carrier.
  function pairSubset(x,y,r,carrier){const R=pair(x,y,r),K=conj([R,mem(x,carrier),mem(y,carrier)]),e=3n;
    const point=A.pc([A.uiImp(R,e),A.transport(e,x,z=>mem(z,carrier),true),A.transport(e,y,z=>mem(z,carrier),true)],
      imp(K,imp(mem(e,r),mem(e,carrier))),[R,mem(x,carrier),mem(y,carrier),mem(e,r),mem(e,carrier),eq(e,x),eq(e,y)]);
    return A.cg(point,e);}
  // The literal O expansion puts an ordered pair in the second power cover.
  const q=24n,r=25n,Q=triple(j,b,p,q,r),small=conj([mem(j,c),mem(b,c),W1,W2]),J=and(Q,small);
  const qr=pairSubset(j,j,q,c),rr=pairSubset(j,b,r,c),pr=pairSubset(q,r,p,p1);
  const qIn=A.pc([qr,A.uiImp(W1,q)],imp(J,mem(q,p1)),[pair(j,j,q),pair(j,b,r),pair(q,r,p),mem(j,c),mem(b,c),W1,W2,subset(q,c),mem(q,p1)]);
  const rIn=A.pc([rr,A.uiImp(W1,r)],imp(J,mem(r,p1)),[pair(j,j,q),pair(j,b,r),pair(q,r,p),mem(j,c),mem(b,c),W1,W2,subset(r,c),mem(r,p1)]);
  const pIn=A.pc([qIn,rIn,pr,A.uiImp(W2,p)],imp(J,mem(p,p2)),
    [pair(j,j,q),pair(j,b,r),pair(q,r,p),mem(j,c),mem(b,c),W1,mem(q,p1),mem(r,p1),W2,subset(p,p1),mem(p,p2)]);
  const curry=A.pc([pIn],imp(Q,imp(small,mem(p,p2))),[Q,small,mem(p,p2)]);
  const opBound=A.ee(A.ee(curry,r),q);
  const typedWitness=and(mem(j,m),and(mem(b,a),op(j,b,p)));
  const typedPoint=A.pc([opBound,A.uiImp(C,j),A.uiImp(C,b)],imp(typedWitness,imp(B,mem(p,p2))),
    [C,W1,W2,W3,mem(j,m),mem(j,a),mem(b,m),mem(b,a),mem(j,c),mem(b,c),op(j,b,p),mem(p,p2)]);
  const typedElim=A.ee(A.ee(typedPoint,b),j),T=tuple(a,m,s),sh=tupleClauses(a,m,s).shape;
  const project=A.pc([],imp(T,sh),Object.values(tupleClauses(a,m,s)));
  const graphPoint=A.pc([project,A.uiImp(sh,p),typedElim],imp(and(B,T),imp(mem(p,s),mem(p,p2))),
    [B,T,sh,mem(p,s),mem(p,p2),ex(j,ex(b,typedWitness))]);
  const graphAll=A.cg(graphPoint,p),oldAll=all(p,imp(mem(p,s),mem(p,p2)));
  const alphaPoint=A.pc([graphAll,A.uiImp(oldAll,3n)],imp(and(B,T),imp(mem(3,s),mem(3,p2))),[B,T,oldAll,mem(3,s),mem(3,p2)]);
  const graphSubset=A.cg(alphaPoint,3n);
  const graphBound=A.pc([graphSubset,A.uiImp(W3,s)],imp(B,imp(T,mem(s,p3))),[C,W1,W2,W3,T,subset(s,p2),mem(s,p3)]);

  // Separation uses the exact T matrix, not just graph shape or partial maps.
  const schema=all(0,all(a,all(m,ex(1,all(s,iff(mem(s,1),and(mem(s,0),T)))))));
  const cert=[1n,P.num(T),s];assert(axiomCertificate(P.num(schema),P.pack(cert)));
  const sep=A.add(schema,0,cert),sepExists=A.alpha(A.ui(A.ui(A.ui(sep,p3),a),m),d);
  const R=all(s,iff(mem(s,d),and(mem(s,p3),T))),E=assignmentUniverse(a,m,d),G=ex(d,E);
  const exactPoint=A.pc([graphBound,A.uiImp(R,s)],imp(and(B,R),iff(mem(s,d),T)),[B,R,T,mem(s,p3),mem(s,d)]);
  const exact=A.cg(exactPoint,s),introduce=A.ei(E,d);
  const local=A.pc([exact,introduce],imp(R,imp(B,G)),[B,R,E,G]);
  const boundedExistence=A.mp(sepExists,A.ee(local,d));assert(same(A.at(boundedExistence),imp(B,G)));

  // Pairing/Union supply a carrier containing every element of m or A.
  const PW=pair(m,a,w),UC=union(w,c),K=and(PW,UC),x=66n,L=ex(3,and(mem(3,w),mem(x,3)));
  const mIn=A.pc([A.uiImp(PW,m),A.reflex(m)],imp(PW,mem(m,w)),[PW,mem(m,w),eq(m,m),eq(m,a)]);
  const aIn=A.pc([A.uiImp(PW,a),A.reflex(a)],imp(PW,mem(a,w)),[PW,mem(a,w),eq(a,m),eq(a,a)]);
  const coverPoint=A.pc([mIn,aIn,A.ei(and(mem(3,w),mem(x,3)),3n,m),A.ei(and(mem(3,w),mem(x,3)),3n,a),A.uiImp(UC,x)],
    imp(K,imp(or(mem(x,m),mem(x,a)),mem(x,c))),[PW,UC,mem(m,w),mem(a,w),mem(x,m),mem(x,a),mem(x,c),L]);
  const carrierCover=A.cg(coverPoint,x),facts=[PW,UC,W1,W2,W3],H=conj(facts);
  let goal=A.pc([carrierCover,boundedExistence],imp(H,G),[PW,UC,C,W1,W2,W3,G]);

  // Fixed tag 3 is the implication-only Power Set axiom, exactly as certified.
  const powerAxiom=all(0,ex(1,powerCover(0,1))),powerCert=[0n,3n];assert(axiomCertificate(P.num(powerAxiom),P.pack(powerCert)));
  const power=A.add(powerAxiom,0,powerCert),powExists=(u,v)=>A.alpha(A.ui(power,u),v);
  const up=operationProof('union'),[upRoot]=appendDependencyClosure(A.q,up.lines,[up.lines.length-1]);
  const ux=A.ui(upRoot,w),uf=A.at(ux),uv=uf[1],ub=uf[2];
  const strip=A.pc([],imp(ub,ub[1]),[ub[1],ub[2]]),unionExists=A.alpha(A.mp(ux,A.em(strip,uv)),c);
  const existence=[A.pairExist(m,a,w),unionExists,powExists(c,p1),powExists(p1,p2),powExists(p2,p3)],variables=[w,c,p1,p2,p3];
  for(let n=facts.length;n>0;n--){const f=facts[n-1],v=variables[n-1],rest=conj(facts.slice(0,n-1));
    assert(same(A.at(existence[n-1]),ex(v,f)));
    const cur=n===1?goal:A.pc([goal],imp(f,imp(rest,G)),[...facts.slice(0,n),G]);
    goal=A.mp(existence[n-1],A.ee(cur,v));}
  assert(same(A.at(goal),G));
  // The assignment universe is unique by Extensionality.
  const EV=assignmentUniverse(a,m,v),both=and(E,EV),test=2n;
  const compare=A.pc([A.uiImp(E,test),A.uiImp(EV,test)],imp(both,iff(mem(test,v),mem(test,d))),[E,EV,tuple(a,m,test),mem(test,v),mem(test,d)]);
  const ext=A.q.findIndex(l=>l[1]===0&&l[2][0]===0n&&l[2][1]===0n);assert(ext>=0);
  const un=A.pc([A.cg(compare,test),A.ui(A.ui(ext,v),d)],imp(both,eq(v,d)),[both,all(test,iff(mem(test,v),mem(test,d))),eq(v,d)]);
  const cur=A.pc([un],imp(E,imp(EV,eq(v,d))),[E,EV,eq(v,d)]),uvAll=A.cg(cur,v),uniqueBody=and(E,all(v,imp(EV,eq(v,d))));
  const make=A.pc([uvAll],imp(E,uniqueBody),[E,uniqueBody[2]]),unique=A.mp(goal,A.em(make,d));
  const results={};for(const [name,root] of Object.entries({bound:graphBound,existence:goal,unique})){let end=root;
    for(const x of [...fv(A.at(root))].sort((a,b)=>a>b?-1:a<b?1:0))end=A.gen(end,x);
    const lines=[];appendDependencyClosure(lines,A.q,[end]);results[name]={lines,endpoint:A.at(end)};}
  return {...results,schema,certificate:cert};
}

export function finiteUniverseTests(){
  const sets=[],ids=new Map(),set=xs=>{const a=[...new Set(xs)].sort((x,y)=>x-y),k=a.join(',');if(!ids.has(k)){ids.set(k,sets.length);sets.push(a);}return ids.get(k);};
  const z=set([]),o=set([z]),two=set([z,o]),op=(a,b)=>set([set([a]),set([a,b])]);
  const subfamilies=xs=>{const out=[];for(let mask=0;mask<2**xs.length;mask++)out.push(xs.filter((_,n)=>mask&(1<<n)));return out;};
  const cases=[[[],[]],[[],[z]],[[z],[]],[[z],[z]],[[z],[z,o]],[[z,o],[z]],[[z,o],[z,o]],[[o,two],[two]]];
  let graphs=0,assignments=0,nonfunctions=0,partial=0;
  for(const [carrier,domain] of cases){
    const union=[...new Set([...carrier,...domain])],p1=subfamilies(union).map(set),p2=subfamilies(p1).map(set);
    const components=new Map();for(const p of p2){const candidates=[...new Set(sets[p].flatMap(x=>sets[x]))];let found=null;
      for(const a of candidates)for(const b of candidates)if(op(a,b)===p)found=[a,b];components.set(p,found);}
    const isTyped=entries=>{const rows=entries.map(p=>components.get(p));
      const shape=rows.every(q=>q!==null&&domain.includes(q[0])&&carrier.includes(q[1]));
      const coverage=domain.every(j=>rows.some(q=>q!==null&&q[0]===j&&carrier.includes(q[1])));
      const functional=rows.every(q=>q===null||rows.every(r=>r===null||r[0]!==q[0]||r[1]===q[1]));
      if(shape&&!functional)nonfunctions++;if(shape&&!coverage)partial++;
      return shape&&coverage&&functional;};
    const chosen=[];for(const entries of subfamilies(p2)){graphs++;if(isTyped(entries))chosen.push(set(entries));}
    // Independent enumeration of total functions, not filtering the same T test.
    const expected=[];function enumerate(n,entries){if(n===domain.length){expected.push(set(entries));return;}
      for(const b of carrier)enumerate(n+1,[...entries,op(domain[n],b)]);}
    enumerate(0,[]);assert.equal(set(chosen),set(expected));assignments+=expected.length;
    for(const g of expected)assert(sets[g].every(p=>p2.includes(p)));
    if(!domain.length)assert.deepEqual(expected,[z]);if(!carrier.length&&domain.length)assert.equal(expected.length,0);
  }
  return {cases:cases.length,boundedGraphsChecked:graphs,assignments,shapeButNonfunctional:nonfunctions,shapeButPartial:partial,
    emptyDomain:true,emptyCarrier:true,nonOrdinalDomain:true,nontransitiveCarrier:true};
}

function tests(){const q=assignmentUniverseProof(),check=numericalRecordVerifier(),stats={};
  const literalT=s=>and(all(65,imp(mem(65,s),ex(60,ex(61,and(mem(60,71),and(mem(61,70),op(60,61,65))))))),
    and(all(60,imp(mem(60,71),ex(61,and(mem(61,70),coordinate(s,60,61))))),
      all(60,all(61,all(64,imp(and(coordinate(s,60,61),coordinate(s,60,64)),eq(61,64)))))));
  const E=d=>all(40,iff(mem(40,d),literalT(40)));
  const B=conj([cover(70,71,81),powerCover(81,82),powerCover(82,83),powerCover(83,84)]);
  const expected={bound:close(imp(B,imp(literalT(40),mem(40,84)))),existence:all(70,all(71,ex(72,E(72)))),
    unique:all(70,all(71,ex(72,and(E(72),all(73,imp(E(73),eq(73,72)))))))};
  for(const name of ['bound','existence','unique']){const p=q[name];assert(same(p.endpoint,expected[name]));assert.equal(fv(p.endpoint).size,0);
    const records=p.lines.map(P.record),end=P.num(p.endpoint);
    if(!check(records,end)){let lo=0,hi=records.length-1;while(lo<hi){const mid=Math.floor((lo+hi)/2);if(check(records.slice(0,mid+1),P.num(p.lines[mid][0])))lo=mid+1;else hi=mid;}
      throw Error(`${name}: first invalid numerical line ${lo}, tag ${p.lines[lo][1]}`);}
    const bits=2+records.length+records.reduce((n,x)=>n+1+2*x.toString(2).length,0),whole=bits<500000000;
    if(whole)assert(verifyZF(P.pack(records),end));stats[name]={lines:p.lines.length,bits,wholeCodeChecked:whole};console.log(JSON.stringify({name,...stats[name]}));}
  let rejected=0;const p=q.unique,end=P.num(p.endpoint),copy=()=>p.lines.map(l=>[l[0],l[1],[...l[2]]]);
  const reject=rows=>{assert(!check(rows.map(P.record),end));rejected++;};
  const mp=copy(),mi=mp.findIndex(l=>l[1]===7);mp[mi][2][0]=mi;reject(mp);
  const sep=copy(),si=sep.findIndex(l=>l[1]===0&&l[2][0]===1n);sep[si][2][2]=70n;reject(sep);
  const pow=copy(),pi=pow.findIndex(l=>l[1]===0&&l[2][0]===0n&&l[2][1]===3n);pow[pi][2][1]=2n;reject(pow);
  const ee=copy(),ei=ee.findIndex(l=>l[1]===9&&fv(arrow(ee[l[2][0]][0])[1]).size>0),[a,b]=arrow(ee[ee[ei][2][0]][0]),v=[...fv(b)][0];
  ee[ei]=[imp(ex(v,a),b),9,[ee[ei][2][0],v]];reject(ee);
  const wrong=all(70,all(71,ex(72,all(40,iff(mem(40,72),tupleClauses(70,71,40).shape)))));assert(!check(p.lines.map(P.record),P.num(wrong)));rejected++;
  const labels=[...new Set(p.lines.filter(l=>l[1]===0).map(l=>l[2][0]===0n?'fixed:'+l[2][1]:'schema:'+l[2][0]))].sort();
  assert.deepEqual(labels,['fixed:0','fixed:1','fixed:2','fixed:3','schema:1']);
  const prefix=[[eq(90,90),5,[90n]]];appendDependencyClosure(prefix,p.lines,[p.lines.length-1]);assert(check(prefix.map(P.record),end));
  console.log(JSON.stringify({proofs:stats,rejections:rejected,nonlogicalCertificates:labels,rebasedPrefix:true,finite:finiteUniverseTests()}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
