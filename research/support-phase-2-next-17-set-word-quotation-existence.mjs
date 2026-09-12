// Research-only E/P/U quotation existence. Not an internal word parser or Sat.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import {appendDependencyClosure} from './support-phase-2-next-17-update-existence-proof.mjs';
import {numericalRecordVerifier} from './support-phase-2-next-17-update-tuple-preservation.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const fence=n=>read(n).match(/```javascript\n([\s\S]*?)\n```/)[1];
const old=fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pack,num,record,word};')();
const D=new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md')+'\nreturn makeNumericalLogicalDecoder();')();
const quotationSource=fence('./support-phase-2-next-17-finite-word-satisfaction-templates.md');
const Q=new Function('D',quotationSource.slice(quotationSource.indexOf('const need='),quotationSource.indexOf('function evaluation'))+
  '\nreturn {traceBuilder,predicates,quoteTrace,quotation,freshAfter,vars};')(D);
const source=read('./support-phase-2-next-17-kuratowski-proof-block.mjs');
const F=new Function('assert','operationProof',source.slice(source.indexOf('const eq='),source.indexOf('function existence(A)'))+
  '\nreturn {assemble,eq,mem,neg,and,ex,imp,all,iff,or,fv,same,sub,univ,arrow};')(assert,operationProof);
const {eq,mem,neg,and,ex,imp,all,iff,or,fv,same,sub,univ}=F;
const conj=xs=>xs.reduceRight((r,x)=>r===null?x:and(x,r),null);
const bind=(xs,f)=>xs.reduceRight((r,x)=>ex(x,r),f);
const imported=new Map();
function operation(kind){if(!imported.has(kind))imported.set(kind,operationProof(kind));return imported.get(kind);}

export function traceDepth(h,r){try{
  assert(Array.isArray(h)&&h.length>0&&Number.isSafeInteger(r)&&r>=0&&r<h.length);
  const depths=[];
  for(const [j,n] of h.entries()){
    assert(Array.isArray(n));const tag=n[0];assert(['E','P','U'].includes(tag));
    assert.equal(n.length,tag==='E'?1:tag==='P'?3:2);
    for(const k of n.slice(1))assert(Number.isSafeInteger(k)&&k>=0&&k<j);
    depths.push(tag==='E'?1:tag==='P'?1+Math.max(depths[n[1]],depths[n[2]]):1+depths[n[1]]);
  }
  return {root:depths[r],witnesses:depths.reduce((a,b)=>Math.max(a,b),0),nodes:depths};
}catch{return null;}}

// Fixed kernel binders are 2/3; the historical quotation allocator is monotone
// above all source indices and e. Restrict this adapter's public slot e >= 90.
function rowAdapter(A,oldRow,newRow){
  const [t,body]=univ(newRow),special=A.uiImp(oldRow,t),oldBody=F.arrow(A.at(special))[1];
  let point=special;
  if(!same(oldBody,body)){
    // Only Union has an additional existential binder to rename.
    const oldEx=F.arrow(oldBody[1])[1],newEx=F.arrow(body[1])[1];
    assert(oldEx[0]==='exists'&&newEx[0]==='exists');
    const x=oldEx[1],y=newEx[1];assert(same(sub(oldEx[2],x,y),newEx[2]));
    const forward=A.ee(A.ei(newEx[2],y,x),x),backward=A.ee(A.ei(oldEx[2],x,y),y);
    const atom=F.arrow(body[1])[0];
    point=A.pc([special,forward,backward],imp(oldRow,body),[oldRow,atom,oldEx,newEx]);
  }
  const result=A.cg(point,t);assert(same(A.at(result),imp(oldRow,newRow)));return result;
}

// Associativity is compiled using at most four opaque Boolean atoms per local
// tautology, not a 2^n truth table over all trace rows.
function appendConjunction(A,xs,z){
  assert(xs.length>0);
  if(xs.length===1)return A.pc([],imp(and(xs[0],z),and(xs[0],z)),[xs[0],z]);
  const head=xs[0],tail=conj(xs.slice(1)),extended=conj([...xs.slice(1),z]);
  const smaller=appendConjunction(A,xs.slice(1),z);
  return A.pc([smaller],imp(and(conj(xs),z),conj([...xs,z])),[head,tail,z,...(xs.length===2?[]:[extended])]);
}

export function quotationExistence(h,r,e=90n,sourceIndices=[]){
  const depth=traceDepth(h,r);if(!depth||typeof e!=='bigint'||e<90n||
    !Array.isArray(sourceIndices)||sourceIndices.some(x=>typeof x!=='bigint'||x<0n))return null;
  const next=Q.freshAfter([...sourceIndices,e]),outputs=h.map(()=>next()),relations=Q.predicates(next);
  const rows=h.map((n,j)=>n[0]==='E'?relations.empty(outputs[j]):n[0]==='P'?
    relations.pair(outputs[n[1]],outputs[n[2]],outputs[j]):relations.union(outputs[n[1]],outputs[j]));
  const formula=Q.quoteTrace(h,r,e,Q.freshAfter([...sourceIndices,e]));
  const C=conj([...rows,eq(outputs[r],e)]);assert(same(formula,bind(outputs,C)));
  const A=F.assemble(),bases=new Map(),existences=[];
  for(const [j,n] of h.entries()){
    const kind={E:'empty',P:'pair',U:'union'}[n[0]];
    if(!bases.has(kind)){const p=operation(kind);const [root]=appendDependencyClosure(A.q,p.lines,[p.lines.length-1]);bases.set(kind,root);}
    let p=bases.get(kind);for(const k of n.slice(1))p=A.ui(p,outputs[k]);
    const [_,v,body]=A.at(p),projection=A.pc([],imp(body,body[1]),[body[1],body[2]]);
    p=A.alpha(A.mp(p,A.em(projection,v)),outputs[j]);
    const adapter=rowAdapter(A,A.at(p)[2],rows[j]);
    p=A.mp(p,A.em(adapter,outputs[j]));assert(same(A.at(p),ex(outputs[j],rows[j])));existences.push(p);
  }
  let target=C,build=null;
  for(const v of [...outputs].reverse()){
    const ei=A.ei(target,v),nextTarget=ex(v,target);
    build=build===null?ei:A.pc([build,ei],imp(C,nextTarget),[C,target,nextTarget]);target=nextTarget;
  }
  const ei=A.ei(target,e),G=ex(e,target);
  build=A.pc([build,ei],imp(C,G),[C,target,G]);
  build=A.ui(A.gen(build,e),outputs[r]);
  // Remove the reflexive last conjunct, without flattening every row to atoms.
  const J=conj(rows),self=eq(outputs[r],outputs[r]);
  const append=appendConjunction(A,rows,self);
  let current=A.pc([build,append,A.reflex(outputs[r])],imp(J,G),[J,self,...(rows.length===1?[]:[sub(C,e,outputs[r])]),G]);
  for(let n=rows.length;n>0;n--){
    let cur=current;
    if(n>1){const rest=conj(rows.slice(0,n-1)),last=rows[n-1],joined=conj(rows.slice(0,n));
      const association=appendConjunction(A,rows.slice(0,n-1),last);
      cur=A.pc([current,association],imp(last,imp(rest,G)),[rest,last,...(n===2?[]:[joined]),G]);}
    current=A.mp(existences[n-1],A.ee(cur,outputs[n-1]));
  }
  assert(same(A.at(current),G));assert.equal(fv(G).size,0);
  const lines=[];appendDependencyClosure(lines,A.q,[current]);
  return {lines,endpoint:G,formula,outputs,rows,h:structuredClone(h),r,e,depth};
}

export function wordQuotationExistence(f,e=90n){
  const quoted=Q.quotation(f,e);if(quoted===null)return null;
  const result=quotationExistence(quoted.h,quoted.r,e,Q.vars(D.parse(f)));
  assert(result===null||same(result.formula,quoted.formula));return result;
}

// Extensional finite-set evaluator: this is not a finite model of unbounded ZF.
export function finiteQuotationChecks(){
  const sets=[],interned=new Map(),intern=xs=>{const members=[...new Set(xs)].sort((a,b)=>a-b),key=members.join(',');
    if(!interned.has(key)){interned.set(key,sets.length);sets.push(members);}return interned.get(key);};
  const E=intern([]),pair=(a,b)=>intern([a,b]),ordered=(a,b)=>pair(pair(a,a),pair(a,b));
  function evaluate(h){assert(traceDepth(h,h.length-1));return h.map((_,i)=>i).reduce((values,j)=>{
    const n=h[j];values.push(n[0]==='E'?E:n[0]==='P'?pair(values[n[1]],values[n[2]]):intern(sets[values[n[1]]].flatMap(x=>sets[x])));return values;},[]);}
  const ordinals=[E];for(let n=1;n<=100;n++)ordinals.push(intern(ordinals));
  let ordinalChecks=0,words=0,coordinates=0;
  for(let n=0;n<=20;n++){const b=Q.traceBuilder(),r=b.ordinal(BigInt(n));assert.equal(evaluate(b.h)[r],ordinals[n]);ordinalChecks++;}
  const formulas=[eq(0n,0n),mem(0n,1n),neg(eq(0n,0n)),and(eq(0n,0n),mem(0n,1n)),ex(1n,eq(1n,0n))];
  for(const f of formulas){const tokens=P.word(f),b=Q.traceBuilder(),r=b.word(tokens),values=evaluate(b.h),graph=values[r];
    const expected=tokens.map((token,i)=>{const [k,j]=D.list(token);return ordered(ordinals[i],ordered(ordinals[Number(k)],ordinals[Number(j)]));});
    assert.equal(graph,intern(expected));assert.equal(sets[graph].length,tokens.length);coordinates+=tokens.length;words++;
    for(const [j,n]of b.h.entries())assert.equal(values[j],n[0]==='E'?E:n[0]==='P'?pair(values[n[1]],values[n[2]]):intern(sets[values[n[1]]].flatMap(x=>sets[x])));
  }
  return {ordinalChecks,words,coordinates};
}

function tests(){
  const cases=[['empty',[['E']],0],['singleton',[['E'],['P',0,0]],1],
    ['union-empty',[['E'],['U',0]],1],['ordered-zero',[['E'],['P',0,0],['P',0,0],['P',1,2]],3]];
  for(const n of [1n,2n]){const b=Q.traceBuilder(),r=b.ordinal(n);cases.push([`ordinal-${n}`,b.h,r]);}
  const check=numericalRecordVerifier(),stats=[];let rejected=0;
  for(const [name,h,r]of cases){if(process.argv[2]&&process.argv[2]!==name)continue;
    const proof=quotationExistence(h,r),records=proof.lines.map(P.record),endpoint=P.num(proof.endpoint);
    assert(check(records,endpoint));
    // Independently construct every literal row and its allocator positions.
    const outputs=h.map((_,j)=>91n+BigInt(j));let cursor=91n+BigInt(h.length);
    const literal=h.map((n,j)=>{const t=cursor++,u=outputs[j];if(n[0]==='E')return all(t,neg(mem(t,u)));
      if(n[0]==='P')return all(t,iff(mem(t,u),or(eq(t,outputs[n[1]]),eq(t,outputs[n[2]]))));
      const v=cursor++;return all(t,iff(mem(t,u),ex(v,and(mem(v,outputs[n[1]]),mem(t,v)))));});
    assert(same(proof.endpoint,ex(90n,bind(outputs,conj([...literal,eq(outputs[r],90n)])))));
    const bits=2+records.length+records.reduce((n,x)=>n+1+2*x.toString(2).length,0),whole=bits<500000000;
    if(whole)assert(verifyZF(P.pack(records),endpoint));
    const bad=proof.lines.map(l=>[l[0],l[1],[...l[2]]]),mp=bad.findIndex(l=>l[1]===7);bad[mp][2][0]=mp;
    assert(!check(bad.map(P.record),endpoint));rejected++;
    assert(!check(records,P.num(ex(90n,eq(90n,91n)))));rejected++;
    const cert=proof.lines.map(l=>[l[0],l[1],[...l[2]]]),ax=cert.findIndex(l=>l[1]===0);cert[ax][2]=[0n,6n];
    assert(!check(cert.map(P.record),endpoint));rejected++;
    const ui=proof.lines.map(l=>[l[0],l[1],[...l[2]]]),index=ui.findIndex(l=>l[1]===2);ui[index][2][2]+=1n;
    assert(!check(ui.map(P.record),endpoint));rejected++;
    stats.push({name,nodes:h.length,lines:records.length,bits,wholeCodeChecked:whole,depth:proof.depth.witnesses});console.log(JSON.stringify(stats.at(-1)));
  }
  for(const [h,r]of [[[],0],[[['E',0]],0],[[['P',0,0]],0],[[['E'],['U',1]],1],[[['E'],['X',0]],1],[[['E']],1]]){
    assert.equal(quotationExistence(h,r),null);rejected++;}
  assert.equal(quotationExistence([['E']],0,2n),null);rejected++;
  assert.equal(wordQuotationExistence(0n),null);rejected++;
  const huge=1n<<80n,q=quotationExistence([['E']],0,90n,[huge]);assert.equal(q.outputs[0],huge+1n);
  assert(check(q.lines.map(P.record),P.num(q.endpoint)));
  console.log(JSON.stringify({proofs:stats,rejections:rejected,hugeBinderChecked:true,finite:finiteQuotationChecks()}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
