// Research-only numerical word schedule + actual finite truth-set history proofs.
// Not an internal set-word parser, quoted table graph, or uniform Sat_m formula.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {operationProof,verifyZF} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import {truthsetProof,truthDefinition} from './support-phase-2-next-17-satisfaction-truthset-operations.mjs';
import {appendDependencyClosure} from './support-phase-2-next-17-update-existence-proof.mjs';
import {numericalRecordVerifier} from './support-phase-2-next-17-update-tuple-preservation.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const old=read('./support-phase-2-next-17-annotated-separation-adapter.md').match(/```javascript\n([\s\S]*?)\n```/)[1];
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pack,num,record,word,term,enc,tok,con,punct};')();
const decoder=read('./support-phase-2-next-17-numerical-logical-proof-decoder.md').match(/```javascript\n([\s\S]*?)\n```/)[1];
const D=new Function(decoder+'\nreturn makeNumericalLogicalDecoder();')();
const src=read('./support-phase-2-next-17-kuratowski-proof-block.mjs'),start=src.indexOf('const eq='),stop=src.indexOf('function existence(A)');
assert(start>=0&&stop>start);
const F=new Function('assert','operationProof',src.slice(start,stop)+'\nreturn {assemble,eq,mem,neg,and,ex,imp,all,iff,op,fv,same,sub,arrow};')(assert,operationProof);
const {eq,mem,neg,and,ex,imp,all,iff,fv,same,sub,arrow}=F;
const tags={rel:1n,eq:2n,neg:3n,and:4n,exists:5n};
const byTag=['','rel','eq','neg','and','exists'];
const sort=xs=>[...xs].sort((a,b)=>a<b?-1:a>b?1:0);
const conj=xs=>xs.reduceRight((r,x)=>r===null?x:and(x,r),null);
const close=f=>sort(fv(f)).reduceRight((r,x)=>all(x,r),f);
const encodePlan=p=>P.pack([p.source,p.root,P.pack(p.rows.map(r=>P.pack([r.word,tags[r.kind],P.pack(r.indices),P.pack(r.children),P.pack(r.spans.map(P.pack))]))),P.pack(p.indices)]);

export function subformulaSchedule(source){
  const tree=D.parse(source);if(tree===null)return null;
  const rows=[],known=new Map(),indices=new Set();
  function visit(t,lo){const kind=t[0],tokens=P.word(t),children=[],payload=[];
    if(kind==='eq'||kind==='rel')payload.push(t[1],t[2]);
    else if(kind==='neg')children.push(visit(t[1],lo+3));
    else if(kind==='and'){children.push(visit(t[1],lo+3));children.push(visit(t[2],lo+4+P.word(t[1]).length));}
    else {payload.push(t[1]);children.push(visit(t[2],lo+5));}
    payload.forEach(x=>indices.add(x));const word=P.pack(tokens),span=[BigInt(lo),BigInt(lo+tokens.length)];
    if(known.has(word)){const n=known.get(word);rows[n].spans.push(span);return BigInt(n);}
    const n=rows.length;known.set(word,n);rows.push({word,kind,indices:payload,children,spans:[span]});return BigInt(n);}
  const root=visit(tree,0),plan={source,root,rows,indices:sort(indices)};return {...plan,code:encodePlan(plan)};
}

// The checker independently scans the original token word's matching brackets,
// rather than trusting the producer's AST offsets or its occurrence inventory.
export function verifySchedule(code){try{
  const [source,root,rowsCode,indicesCode,...extra]=D.list(code);assert.equal(extra.length,0);assert(D.parse(source)!==null);
  const word=D.list(source),rawRows=D.list(rowsCode);assert(rawRows.length>0&&root===BigInt(rawRows.length-1));
  const canonical=[],found=new Map(),stack=[];
  for(let i=0;i<word.length;i++){
    if(word[i]===P.punct(0))stack.push(i);
    else if(word[i]===P.punct(1)){assert(stack.length);const lo=stack.pop(),subword=P.pack(word.slice(lo,i+1));
      if(D.parse(subword)!==null){if(!found.has(subword)){found.set(subword,canonical.length);canonical.push({word:subword,spans:[]});}
        canonical[found.get(subword)].spans.push([BigInt(lo),BigInt(i+1)]);}}
  }
  assert.equal(stack.length,0);assert.equal(rawRows.length,canonical.length);
  const rows=[],allIndices=new Set();
  for(let n=0;n<rawRows.length;n++){
    const f=D.list(rawRows[n]);assert.equal(f.length,5);const [w,tag,iv,cv,sv]=f;assert(tag>=1n&&tag<=5n);
    const indices=D.list(iv),children=D.list(cv),spans=D.list(sv).map(x=>D.list(x));
    assert.equal(w,canonical[n].word);assert.deepEqual(spans,canonical[n].spans);
    children.forEach(c=>assert(c<BigInt(n)));indices.forEach(x=>allIndices.add(x));
    const child=k=>D.list(rows[Number(children[k])].word),term=k=>P.term(indices[k]);let expected;
    if(tag===1n){assert.equal(indices.length,2);assert.equal(children.length,0);expected=P.enc([P.con(1)],[P.tok(1,0)],term(0),term(1));}
    else if(tag===2n){assert.equal(indices.length,2);assert.equal(children.length,0);expected=P.enc([P.con(2)],term(0),term(1));}
    else if(tag===3n){assert.equal(indices.length,0);assert.equal(children.length,1);expected=P.enc([P.con(3)],child(0));}
    else if(tag===4n){assert.equal(indices.length,0);assert.equal(children.length,2);expected=P.enc([P.con(4)],child(0),child(1));}
    else {assert.equal(indices.length,1);assert.equal(children.length,1);expected=P.enc([P.con(5)],[P.tok(0,indices[0])],child(0));}
    assert.equal(P.pack(expected),w);for(const c of children)assert(D.list(rows[Number(c)].word).length<D.list(w).length);
    rows.push({word:w,kind:byTag[Number(tag)],indices,children,spans});
  }
  assert.equal(rows[Number(root)].word,source);assert.deepEqual(D.list(indicesCode),sort(allIndices));
  return {source,root,rows,indices:sort(allIndices)};
}catch{return null;}}

const parameters={eq:[71n,74n,75n],rel:[71n,74n,75n],neg:[71n,72n],and:[71n,72n,73n],exists:[70n,71n,72n,74n]};
export function historyProof(scheduleCode){
  const schedule=verifySchedule(scheduleCode);if(!schedule)return null;
  const A=F.assemble(),base=new Map(),indexSlots=new Map(schedule.indices.map((v,n)=>[v,100n+BigInt(n)]));
  const outputs=schedule.rows.map((_,n)=>100n+BigInt(schedule.indices.length+n)),facts=[],existences=[];
  for(const [n,row] of schedule.rows.entries()){
    if(!base.has(row.kind)){const proof=truthsetProof(row.kind).unique;
      const [root]=appendDependencyClosure(A.q,proof.lines,[proof.lines.length-1]);base.set(row.kind,root);}
    const assignment=new Map([[70n,70n],[71n,71n]]);
    if(row.kind==='eq'||row.kind==='rel'){assignment.set(74n,indexSlots.get(row.indices[0]));assignment.set(75n,indexSlots.get(row.indices[1]));}
    if(row.children.length)assignment.set(72n,outputs[Number(row.children[0])]);
    if(row.kind==='and')assignment.set(73n,outputs[Number(row.children[1])]);
    if(row.kind==='exists')assignment.set(74n,indexSlots.get(row.indices[0]));
    let theorem=base.get(row.kind);for(const x of parameters[row.kind])theorem=A.ui(theorem,assignment.get(x));
    const f=A.at(theorem),v=f[1],body=f[2];assert(f[0]==='exists'&&body[0]==='and');
    const projection=A.pc([],imp(body,body[1]),[body[1],body[2]]),plain=A.mp(theorem,A.em(projection,v));
    const existence=A.alpha(plain,outputs[n]);let fact=truthDefinition(row.kind,outputs[n]);
    for(const x of parameters[row.kind])fact=sub(fact,x,assignment.get(x));
    assert(same(A.at(existence),ex(outputs[n],fact)));facts.push(fact);existences.push(existence);
  }
  const C=conj(facts);let target=C,build=null;
  for(const v of [...outputs].reverse()){const ei=A.ei(target,v),next=ex(v,target);
    build=build===null?ei:A.pc([build,ei],imp(C,next),[C,target,next]);target=next;}
  const G=target;let current=build;
  for(let n=facts.length;n>0;n--){const rest=conj(facts.slice(0,n-1));
    const cur=n===1?current:A.pc([current],imp(facts[n-1],imp(rest,G)),[...facts.slice(0,n),G]);
    current=A.mp(existences[n-1],A.ee(cur,outputs[n-1]));}
  assert(same(A.at(current),G));for(const v of sort(fv(G)).reverse())current=A.gen(current,v);
  const lines=[];appendDependencyClosure(lines,A.q,[current]);
  return {lines,endpoint:A.at(current),schedule,indexSlots:[...indexSlots],outputs,facts};
}

// Finite set-valued history evaluation follows the verified schedule; the
// independent AST evaluator changes its environment map at each bound variable.
export function finiteHistoryChecks(){
  const samples=[eq(0,0),neg(eq(0,0)),and(eq(0,0),eq(0,0)),ex(0,neg(mem(0,1))),
    ex(1,and(mem(0,1),ex(1,eq(1,1))))];
  const HF=[[],[0],[0,1]],carriers=[[0],[0,1],[1,2]];let comparisons=0;
  for(const source of samples){const schedule=subformulaSchedule(P.num(source));assert(verifySchedule(schedule.code));
    const m=1+Number(schedule.indices.at(-1));for(const carrier of carriers){const envs=[];
      function enumerate(prefix){if(prefix.length===m){envs.push(prefix);return;}for(const b of carrier)enumerate([...prefix,b]);}enumerate([]);
      const key=env=>env.join(','),positions=new Map(envs.map((e,n)=>[key(e),n])),truth=[];
      for(const row of schedule.rows){const B=row.children.length?truth[Number(row.children[0])]:null,C=row.children.length===2?truth[Number(row.children[1])]:null;
        truth.push(envs.map((e,n)=>row.kind==='eq'?e[Number(row.indices[0])]===e[Number(row.indices[1])]:row.kind==='rel'?HF[e[Number(row.indices[1])]].includes(e[Number(row.indices[0])]):
          row.kind==='neg'?!B[n]:row.kind==='and'?B[n]&&C[n]:carrier.some(b=>{const t=[...e];t[Number(row.indices[0])]=b;return B[positions.get(key(t))];})));}
      function evaluate(t,e){if(t[0]==='eq')return e.get(t[1])===e.get(t[2]);if(t[0]==='rel')return HF[e.get(t[2])].includes(e.get(t[1]));
        if(t[0]==='neg')return !evaluate(t[1],e);if(t[0]==='and')return evaluate(t[1],e)&&evaluate(t[2],e);
        return carrier.some(b=>{const next=new Map(e);next.set(t[1],b);return evaluate(t[2],next);});}
      for(const [n,e]of envs.entries()){assert.equal(truth[Number(schedule.root)][n],evaluate(source,new Map(e.map((v,i)=>[BigInt(i),v]))));comparisons++;}
    }}return {samples:samples.length,carriers:carriers.length,comparisons};
}

function tests(){
  const huge=(1n<<80n)+7n,atoms=[];for(const i of [0n,1n,huge])for(const j of [0n,1n])atoms.push(eq(i,j),mem(i,j));
  const samples=[...atoms,...atoms.map(neg),...atoms.map(a=>ex(0,a)),...atoms.flatMap(a=>atoms.map(b=>and(a,b))),ex(1,and(mem(0,1),ex(1,eq(1,1))))];
  let schedules=0;for(const f of samples){const p=subformulaSchedule(P.num(f));assert(verifySchedule(p.code));assert.equal(p.code,subformulaSchedule(P.num(f)).code);schedules++;}
  let rejected=0;for(const x of [0n,1n,2n,P.pack(P.term(0)),P.pack([...P.word(eq(0,0)),...P.word(eq(0,0))])]){assert.equal(subformulaSchedule(x),null);rejected++;}
  const plan=subformulaSchedule(P.num(and(eq(0,0),eq(0,0))));assert.equal(plan.rows.length,2);assert.deepEqual(plan.rows[1].children,[0n,0n]);assert.equal(plan.rows[0].spans.length,2);
  const clone=()=>structuredClone(plan),reject=p=>{assert.equal(verifySchedule(encodePlan(p)),null);rejected++;};
  let p=clone();p.rows[0].spans.pop();reject(p);p=clone();p.rows[1].children[0]=1n;reject(p);
  p=clone();p.rows[0].indices[0]=1n;reject(p);p=clone();p.rows[1].kind='neg';reject(p);
  p=clone();p.rows[0].spans[0][0]++;reject(p);p=clone();p.indices.push(2n);reject(p);
  p=clone();p.rows.push(structuredClone(p.rows[0]));p.root=2n;reject(p);
  assert.equal(historyProof(0n),null);rejected++;
  const programs=[eq(0,0),neg(eq(0,0)),and(eq(0,0),eq(0,0)),ex(0,neg(eq(0,0))),and(eq(0,0),mem(0,1)),ex(1,and(mem(0,1),ex(1,eq(1,1))))];
  const check=numericalRecordVerifier(),proofStats=[];
  for(const f of programs){const h=historyProof(subformulaSchedule(P.num(f)).code),rows=h.lines.map(P.record),end=P.num(h.endpoint);
    assert(check(rows,end));assert.equal(fv(h.endpoint).size,0);
    // Independent postorder E-history formula rebuild; do not use h.facts.
    const iv=new Map(h.indexSlots),fs=h.schedule.rows.map((r,n)=>{let body=truthDefinition(r.kind,h.outputs[n]);const substitutions=[];
      if(r.kind==='eq'||r.kind==='rel')substitutions.push([74n,iv.get(r.indices[0])],[75n,iv.get(r.indices[1])]);
      if(r.children.length)substitutions.push([72n,h.outputs[Number(r.children[0])]]);
      if(r.kind==='and')substitutions.push([73n,h.outputs[Number(r.children[1])]]);
      if(r.kind==='exists')substitutions.push([74n,iv.get(r.indices[0])]);
      for(const [x,y]of substitutions)body=sub(body,x,y);return body;});
    assert(same(h.endpoint,close(h.outputs.reduceRight((r,v)=>ex(v,r),conj(fs)))));
    const bits=2+rows.length+rows.reduce((n,x)=>n+1+2*x.toString(2).length,0),whole=bits<500000000;
    if(whole)assert(verifyZF(P.pack(rows),end));proofStats.push({nodes:h.outputs.length,lines:h.lines.length,bits,wholeCodeChecked:whole});
    const bad=h.lines.map(l=>[l[0],l[1],[...l[2]]]),ix=bad.findIndex(l=>l[1]===7);bad[ix][2][0]=ix;assert(!check(bad.map(P.record),end));rejected++;
    console.log(JSON.stringify(proofStats.at(-1)));
  }
  console.log(JSON.stringify({schedules,duplicateOccurrenceTest:true,hugeIndexPreserved:true,proofs:proofStats,rejections:rejected,finite:finiteHistoryChecks()}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
