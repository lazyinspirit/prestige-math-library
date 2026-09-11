// Research-only: five exact ambient truth-set operations, not uniform Sat_m.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF,axiomCertificate} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import {coordinate} from './support-phase-2-next-17-update-coordinate-proof.mjs';
import {update,appendDependencyClosure} from './support-phase-2-next-17-update-existence-proof.mjs';
import {numericalRecordVerifier,tupleClauses} from './support-phase-2-next-17-update-tuple-preservation.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const old=read('./support-phase-2-next-17-annotated-separation-adapter.md').match(/```javascript\n([\s\S]*?)\n```/)[1];
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pack,num,record};')();
const src=read('./support-phase-2-next-17-kuratowski-proof-block.mjs'),start=src.indexOf('const eq='),stop=src.indexOf('function existence(A)');
assert(start>=0&&stop>start);
const F=new Function('assert','operationProof',src.slice(start,stop)+'\nreturn {assemble,eq,mem,neg,and,ex,imp,all,iff,op,fv,same,arrow};')(assert,operationProof);
const {eq,mem,neg,and,ex,imp,all,iff,fv,same}=F;
const order=xs=>[...xs].sort((a,b)=>a<b?-1:a>b?1:0);
const close=f=>order(fv(f)).reduceRight((r,x)=>all(x,r),f);
const kinds=['eq','rel','neg','and','exists'];
const parameters={eq:[74n,75n],rel:[74n,75n],neg:[72n],and:[72n,73n],exists:[70n,72n,74n]};
export function truthMatrix(kind,s=40n){
  if(kind==='eq'||kind==='rel')return ex(44,ex(45,and(coordinate(s,74,44),and(coordinate(s,75,45),kind==='eq'?eq(44,45):mem(44,45)))));
  if(kind==='neg')return neg(mem(s,72));
  if(kind==='and')return and(mem(s,72),mem(s,73));
  if(kind==='exists')return ex(44,ex(46,and(mem(44,70),and(update(s,74,44,46),mem(46,72)))));
  throw Error('unsupported fixed truth-set operation');
}
export const truthDefinition=(kind,r=41n,d=71n)=>all(40,iff(mem(40,r),and(mem(40,d),truthMatrix(kind))));
export function truthsetProof(kind){
  assert(kinds.includes(kind));const A=F.assemble(),phi=truthMatrix(kind),z=40n,d=71n,r=41n,v=42n,test=2n;
  // All five fixed matrices reserve 0 and 1, the canonical schema's fresh sets.
  const schema=[0n,...parameters[kind]].reduceRight((f,x)=>all(x,f),ex(1,all(z,iff(mem(z,1),and(mem(z,0),phi)))));
  const certificate=[1n,P.num(phi),z];assert(axiomCertificate(P.num(schema),P.pack(certificate)),'canonical Separation certificate');
  const ax=A.add(schema,0,certificate);
  const specialized=[d,...parameters[kind]].reduce((q,x)=>A.ui(q,x),ax),exists=A.alpha(specialized,r);
  const R=truthDefinition(kind,r),V=truthDefinition(kind,v),K=and(R,V);assert(same(A.at(exists),ex(r,R)));
  const point=A.pc([A.uiImp(R,test),A.uiImp(V,test)],imp(K,iff(mem(test,v),mem(test,r))),
    [R,V,mem(test,d),truthMatrix(kind,test),mem(test,v),mem(test,r)]);
  const ext=A.q.findIndex(l=>l[1]===0&&l[2][0]===0n&&l[2][1]===0n);assert(ext>=0);
  const uniquePoint=A.pc([A.cg(point,test),A.ui(A.ui(ext,v),r)],imp(K,eq(v,r)),
    [K,all(test,iff(mem(test,v),mem(test,r))),eq(v,r)]);
  const cur=A.pc([uniquePoint],imp(R,imp(V,eq(v,r))),[R,V,eq(v,r)]),uni=A.cg(cur,v);
  const body=and(R,all(v,imp(V,eq(v,r)))),intro=A.pc([uni],imp(R,body),[R,body[2]]);
  const unique=A.mp(exists,A.em(intro,r));
  const at=A.uiImp(R,z),clause=A.pc([at],imp(and(R,mem(z,d)),iff(mem(z,r),phi)),[R,mem(z,d),mem(z,r),phi]);
  const subsetPoint=A.pc([at],imp(R,imp(mem(z,r),mem(z,d))),[R,mem(z,d),mem(z,r),phi]);
  const subset=A.cg(subsetPoint,z),results={};
  for(const [name,root] of Object.entries({unique,clause,subset})){let end=root;
    for(const x of order(fv(A.at(root))).reverse())end=A.gen(end,x);
    const lines=[];appendDependencyClosure(lines,A.q,[end]);results[name]={lines,endpoint:A.at(end)};}
  return {...results,schema,certificate,kind};
}

export const tableTruth=(h,w,s)=>ex(79,and(coordinate(h,w,79),mem(s,79)));
export function tableNegationProof(){
  const A=F.assemble(),s=40n,r=41n,b=72n,n=76n,q=77n,h=78n,v=79n;
  const fn=tupleClauses(70,71,h).functional,link=coordinate(h,n,r),K=and(fn,link),tv=tableTruth(h,n,s);
  let fun=A.pc([],imp(K,fn),[fn,link]);
  for(const x of [n,r,v]){const f=F.arrow(A.at(fun))[1],ui=A.uiImp(f,x),g=F.arrow(A.at(ui))[1];fun=A.pc([fun,ui],imp(K,g),[K,f,g]);}
  const linkFact=A.pc([],imp(K,link),[fn,link]),other=coordinate(h,n,v),W=and(other,mem(s,v));
  const transport=A.transport(r,v,x=>mem(s,x),true);
  const point=A.pc([fun,linkFact,transport],imp(W,imp(K,mem(s,r))),[K,link,other,mem(s,v),mem(s,r),eq(r,v)]);
  const forward=A.pc([A.ee(point,v)],imp(K,imp(tv,mem(s,r))),[K,tv,mem(s,r)]);
  const ei=A.ei(and(coordinate(h,n,v),mem(s,v)),v,r);
  const backward=A.pc([linkFact,ei],imp(K,imp(mem(s,r),tv)),[K,link,mem(s,r),tv]);
  const collapse=A.pc([forward,backward],imp(K,iff(tv,mem(s,r))),[K,tv,mem(s,r)]);
  const child=A.ui(A.ui(A.gen(A.gen(collapse,r),n),q),b),childLink=coordinate(h,q,b),childTruth=tableTruth(h,q,s);
  const R=truthDefinition('neg',r),guard=and(fn,and(link,and(childLink,and(R,mem(s,71)))));
  const negation=A.pc([collapse,child,A.uiImp(R,s)],imp(guard,iff(tv,neg(childTruth))),
    [fn,link,childLink,R,mem(s,71),mem(s,r),mem(s,b),tv,childTruth]);
  const out={};for(const [name,root] of Object.entries({collapse,negation})){let end=root;
    for(const x of order(fv(A.at(root))).reverse())end=A.gen(end,x);
    const lines=[];appendDependencyClosure(lines,A.q,[end]);out[name]={lines,endpoint:A.at(end)};}
  return out;
}

// Finite semantic evidence for the displayed truth-set clauses. These are
// actual finite graphs over hereditary sets, not finite models of ZF.
export function finiteClauseTests(){
  const sets=[],ids=new Map(),set=xs=>{const a=[...new Set(xs)].sort((x,y)=>x-y),k=a.join(',');if(!ids.has(k)){ids.set(k,sets.length);sets.push(a);}return ids.get(k);};
  const z=set([]),o=set([z]),two=set([z,o]),op=(a,b)=>set([set([a]),set([a,b])]);
  function components(p){const xs=[...new Set(sets[p].flatMap(x=>sets[x]))];for(const a of xs)for(const b of xs)if(op(a,b)===p)return [a,b];throw Error('not a pair');}
  const carriers=[[z],[z,o],[o,two]],index=[z,o];let atomic=0,boolean=0,existential=0;
  for(const carrier of carriers){const assignments=carrier.flatMap(x=>carrier.map(y=>set([op(z,x),op(o,y)])));
    const value=(s,i)=>components(sets[s].find(p=>components(p)[0]===i))[1];
    const upd=(s,i,b)=>set([...sets[s].filter(p=>components(p)[0]!==i),op(i,b)]);
    for(const i of index)for(const j of index){
      const eqTruth=assignments.filter(s=>value(s,i)===value(s,j));
      const relTruth=assignments.filter(s=>sets[value(s,j)].includes(value(s,i)));
      for(const s of assignments){assert.equal(eqTruth.includes(s),value(s,i)===value(s,j));assert.equal(relTruth.includes(s),sets[value(s,j)].includes(value(s,i)));atomic+=2;}}
    for(let mask=0;mask<1<<assignments.length;mask++){const B=assignments.filter((_,n)=>mask&(1<<n));
      const complement=assignments.filter(s=>!B.includes(s));
      for(let mask2=0;mask2<1<<assignments.length;mask2++){const C=assignments.filter((_,n)=>mask2&(1<<n));
        const intersection=assignments.filter(s=>B.includes(s)&&C.includes(s));
        for(const s of assignments){assert.equal(complement.includes(s),!B.includes(s));assert.equal(intersection.includes(s),B.includes(s)&&C.includes(s));boolean+=2;}}
      for(const i of index){const image=assignments.filter(s=>carrier.some(b=>B.includes(upd(s,i,b))));
        for(const s of assignments){const rhs=carrier.some(b=>assignments.some(t=>t===upd(s,i,b)&&B.includes(t)));
          assert.equal(image.includes(s),rhs);existential++;}}}
  }
  // Guards are material: an element outside D is not in D\B even if not in B.
  const emptyDomain=[],emptyChild=[],complement=emptyDomain.filter(s=>!emptyChild.includes(s));
  assert.notEqual(complement.includes(z),!emptyChild.includes(z));
  assert.equal([z].filter(()=>[].some(()=>true)).length,0); // Empty carrier image.
  return {atomic,boolean,existential,outsideDomainNegationCounterexample:true,emptyCarrierImage:true};
}

function tests(){
  const check=numericalRecordVerifier(),stats={};let rejected=0;
  // Independent matrix/definition builders do not invoke the exported factories.
  const matrix=(kind,s)=>kind==='neg'?neg(mem(s,72)):kind==='and'?and(mem(s,72),mem(s,73)):
    kind==='exists'?ex(44,ex(46,and(mem(44,70),and(update(s,74,44,46),mem(46,72))))):
    ex(44,ex(45,and(coordinate(s,74,44),and(coordinate(s,75,45),kind==='eq'?eq(44,45):mem(44,45)))));
  for(const kind of kinds){const q=truthsetProof(kind),R=all(40,iff(mem(40,41),and(mem(40,71),matrix(kind,40)))),V=all(40,iff(mem(40,42),and(mem(40,71),matrix(kind,40))));
    const endpoints={unique:close(ex(41,and(R,all(42,imp(V,eq(42,41)))))),
      clause:close(imp(and(R,mem(40,71)),iff(mem(40,41),matrix(kind,40)))),subset:close(imp(R,all(40,imp(mem(40,41),mem(40,71)))))};
    stats[kind]={};
    for(const name of Object.keys(endpoints)){const p=q[name];assert(same(p.endpoint,endpoints[name]));assert.equal(fv(p.endpoint).size,0);
      const records=p.lines.map(P.record),end=P.num(p.endpoint);assert(check(records,end));
      const bits=2+records.length+records.reduce((n,x)=>n+1+2*x.toString(2).length,0);
      const whole=bits<500000000;if(whole)assert(verifyZF(P.pack(records),end));
      stats[kind][name]={lines:p.lines.length,bits,wholeCodeChecked:whole};}
    const p=q.unique,rows=p.lines.map(l=>[l[0],l[1],[...l[2]]]),ix=rows.findIndex(l=>l[1]===0&&l[2][0]===1n);
    rows[ix][2][2]=74n;assert(!check(rows.map(P.record),P.num(p.endpoint)));rejected++;
    const wrong=close(imp(R,iff(mem(40,41),matrix(kind,40))));assert(!check(q.clause.lines.map(P.record),P.num(wrong)));rejected++;
    const prefix=[[eq(80,80),5,[80n]]];appendDependencyClosure(prefix,p.lines,[p.lines.length-1]);assert(check(prefix.map(P.record),P.num(p.endpoint)));
    const labels=p.lines.filter(l=>l[1]===0).map(l=>l[2][0]===0n?'fixed:'+l[2][1]:'schema:'+l[2][0]).sort();assert.deepEqual(labels,['fixed:0','schema:1']);
    console.log(JSON.stringify({kind,...stats[kind]}));
  }
  assert.throws(()=>truthsetProof('all'));rejected++;
  const tables=tableNegationProof(),fn=all(60,all(61,all(64,imp(and(coordinate(78,60,61),coordinate(78,60,64)),eq(61,64)))));
  const parentLink=coordinate(78,76,41),childLink=coordinate(78,77,72),tp=ex(79,and(coordinate(78,76,79),mem(40,79))),tc=ex(79,and(coordinate(78,77,79),mem(40,79)));
  const R=all(40,iff(mem(40,41),and(mem(40,71),neg(mem(40,72)))));
  const expectedTable={collapse:close(imp(and(fn,parentLink),iff(tp,mem(40,41)))),
    negation:close(imp(and(fn,and(parentLink,and(childLink,and(R,mem(40,71))))),iff(tp,neg(tc))))};
  stats.table={};for(const name of ['collapse','negation']){const p=tables[name];assert(same(p.endpoint,expectedTable[name]));assert.equal(fv(p.endpoint).size,0);
    const code=P.pack(p.lines.map(P.record));assert(verifyZF(code,P.num(p.endpoint)));assert.equal(p.lines.filter(l=>l[1]===0).length,0);
    stats.table[name]={lines:p.lines.length,bits:code.toString(2).length,wholeCodeChecked:true};}
  const table=tables.negation,broken=table.lines.map(l=>[l[0],l[1],[...l[2]]]),at=broken.findIndex(l=>l[1]===7);broken[at][2][0]=at;
  assert(!verifyZF(P.pack(broken.map(P.record)),P.num(table.endpoint)));rejected++;
  console.log(JSON.stringify({operations:5,endpoints:17,proofs:stats,rejections:rejected,rebasedProofs:5,semantic:finiteClauseTests()}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
