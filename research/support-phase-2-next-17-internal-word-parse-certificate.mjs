// Research-only bounded set-word parser certificate. No Sat/table/Decode claim.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {boundedFactories,finiteSetUniverse,isBoundedFormula,evaluateBounded} from './support-phase-2-next-17-internal-finite-word-predicate.mjs';
import {subformulaSchedule} from './support-phase-2-next-17-subformula-truthset-history.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const fence=n=>read(n).match(/```javascript\n([\s\S]*?)\n```/)[1];
const old=fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {num,word,term,pack,tok};')();
const D=new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md')+'\nreturn makeNumericalLogicalDecoder();')();
const eq=(x,y)=>['eq',BigInt(x),BigInt(y)],mem=(x,y)=>['rel',BigInt(x),BigInt(y)];
const neg=p=>['neg',p],and=(p,q)=>['and',p,q];
const imp=(p,q)=>neg(and(p,neg(q))),or=(p,q)=>neg(and(neg(p),neg(q)));
const conj=xs=>xs.reduceRight((r,p)=>r===null?p:and(p,r),null);
const disj=xs=>xs.reduceRight((r,p)=>r===null?p:or(p,r),null);
const K=Array.from({length:13},(_,i)=>3n+BigInt(i));
export const certificateParameters={word:0n,certificate:1n,length:2n,constants:K};

export function parserFactories(){
  const B=boundedFactories(100n),le=(a,b)=>or(eq(a,b),mem(a,b));
  const coord=(s,i,F)=>B.some(s,p=>B.some(p,r=>B.some(r,v=>and(B.ordered(i,v,p),F(v)))));
  function fields(row,positions,F){
    function go(n,values){return n===positions.length?F(values):coord(row,K[positions[n]],v=>go(n+1,[...values,v]));}
    return go(0,[]);
  }
  const tokenAt=(w,i,k,j)=>coord(w,i,t=>B.ordered(k,j,t));
  function segment(w,m,u,n,a,b,g){return conj([
    le(a,b),le(b,m),B.graph(g,n,x=>and(le(a,x),mem(x,b))),
    B.every(b,x=>imp(le(a,x),B.some(n,i=>coord(g,i,y=>eq(x,y))))),
    B.every(n,i=>B.every(n,j=>imp(mem(i,j),coord(g,i,x=>coord(g,j,y=>mem(x,y)))))),
    B.every(n,i=>coord(g,i,x=>coord(u,i,t=>coord(w,x,v=>eq(t,v)))))
  ]);}
  function local(c,index,row){return fields(row,Array.from({length:12},(_,i)=>i),v=>{
    const [w,m,tag,payload,left,right,a,b,d,e,g,h]=v;
    const unused=positions=>conj(positions.map(i=>eq(v[i],K[0])));
    const edge=(child,want,start,end,shift)=>and(mem(child,index),coord(c,child,r=>fields(r,[0,1,2],([u,n,t])=>
      and(want==='term'?eq(t,K[0]):disj(K.slice(1,6).map(k=>eq(t,k))),segment(w,m,u,n,start,end,shift)))));
    const common=[B.word(w,m,K.slice(0,6)),tokenAt(w,K[0],K[3],K[0]),tokenAt(w,K[1],K[2],tag),tokenAt(w,K[2],K[3],K[2])];
    const term=conj([eq(tag,K[0]),eq(m,K[5]),B.finiteOrdinal(payload),
      tokenAt(w,K[3],K[0],payload),tokenAt(w,K[4],K[3],K[1]),unused([4,5,6,7,8,9,10,11])]);
    function unary(kind,start,quantifier){return conj([eq(tag,K[kind]),eq(a,K[start]),B.successor(b,m),
      tokenAt(w,b,K[3],K[1]),edge(left,'formula',a,b,g),unused([5,8,9,11]),
      ...(quantifier?[B.finiteOrdinal(payload),tokenAt(w,K[3],K[0],payload),tokenAt(w,K[4],K[3],K[2])]:[eq(payload,K[0])])]);}
    function binary(kind,start,want){return conj([eq(tag,K[kind]),eq(payload,K[0]),eq(a,K[start]),B.successor(b,d),B.successor(e,m),
      tokenAt(w,b,K[3],K[2]),tokenAt(w,e,K[3],K[1]),edge(left,want,a,b,g),edge(right,want,d,e,h),
      ...(kind===1?[tokenAt(w,K[3],K[1],K[0]),tokenAt(w,K[4],K[3],K[2])]:[])]);}
    return and(conj(common),disj([term,binary(1,5,'term'),binary(2,3,'term'),unary(3,3,false),binary(4,3,'formula'),unary(5,5,true)]));
  });}
  function parse(w,c,q){
    const rows=B.graph(c,q,row=>B.graph(row,K[12],x=>eq(x,x)));
    const rules=B.every(q,i=>coord(c,i,row=>local(c,i,row)));
    const distinct=B.every(q,i=>B.every(q,j=>imp(neg(eq(i,j)),coord(c,i,r=>fields(r,[0],([u])=>
      coord(c,j,s=>fields(s,[0],([v])=>neg(eq(u,v)))))))));
    const root=B.some(q,i=>and(B.successor(i,q),coord(c,i,r=>fields(r,[0,2],([u,t])=>and(eq(u,w),neg(eq(t,K[0])))))));
    // Every nonroot has an incoming edge from a later row. Finite acyclicity
    // then forces every row to be an actual subexpression of the root.
    const reachable=B.every(q,i=>or(B.successor(i,q),B.some(q,j=>and(mem(i,j),coord(c,j,r=>fields(r,[2,4,5],([t,l,h])=>disj([
      and(disj([eq(t,K[1]),eq(t,K[2]),eq(t,K[4])]),or(eq(i,l),eq(i,h))),
      and(or(eq(t,K[3]),eq(t,K[5])),eq(i,l))
    ])))))));
    return conj([B.constants(K),B.finiteOrdinal(q),rows,rules,distinct,root,reachable]);
  }
  return {B,coord,fields,segment,local,parse};
}
export const internalParseCertificateFormula=()=>parserFactories().parse(0n,1n,2n);
export function internalFormulaPredicate(){return [1n,2n,...K].reduceRight((f,v)=>['exists',v,f],internalParseCertificateFormula());}

// Producer parses only the incoming numerical formula; the internal verifier
// later evaluates the expanded membership formula against its HF certificate.
export function parsingCertificate(source,U=finiteSetUniverse()){
  const tree=D.parse(source);if(tree===null)return null;
  const rows=[],seen=new Map();
  function visit(t){const kind=t[0],term=kind==='var',tokens=term?P.term(t[1]):P.word(t),word=P.pack(tokens);
    if(seen.has(word))return seen.get(word);
    const children=kind==='eq'||kind==='rel'?[visit(['var',t[1]]),visit(['var',t[2]])]:kind==='and'?[visit(t[1]),visit(t[2])]:
      kind==='neg'?[visit(t[1])]:kind==='exists'?[visit(t[2])]:[];
    const tag={var:0,rel:1,eq:2,neg:3,and:4,exists:5}[kind],n=tokens.length;
    const payload=term||kind==='exists'?Number(t[1]):0;assert(Number.isSafeInteger(payload));
    const start=kind==='rel'||kind==='exists'?5:3,left=children[0]??0,right=children[1]??0;
    const a=children.length?start:0,b=children.length?start+rows[left].tokens.length:0,
      d=children.length===2?b+1:0,e=children.length===2?n-1:0;
    const shift=(child,offset)=>U.graph(rows[child].tokens.map((_,i)=>U.ordinal(offset+i)));
    const values=[U.word(tokens),U.ordinal(n),U.ordinal(tag),U.ordinal(payload),U.ordinal(left),U.ordinal(right),
      U.ordinal(a),U.ordinal(b),U.ordinal(d),U.ordinal(e),children.length?shift(left,a):U.zero,children.length===2?shift(right,d):U.zero];
    const index=rows.length;seen.set(word,index);rows.push({word,tokens,kind,children,values});return index;
  }
  const root=visit(tree),certificate=U.graph(rows.map(r=>U.graph(r.values)));
  assert.equal(root,rows.length-1);
  return {U,rows,root,word:U.word(D.list(source)),length:U.ordinal(rows.length),certificate};
}
export function certificateEnvironment(p){return new Map([[0n,p.word],[1n,p.certificate],[2n,p.length],
  ...K.map((k,i)=>[k,p.U.ordinal(i)])]);}

function tests(){
  const f=internalParseCertificateFormula(),code=P.num(f),parsed=D.parse(code);assert.deepEqual(parsed,f);assert(isBoundedFormula(parsed));
  const formulaPredicate=internalFormulaPredicate(),predicateCode=P.num(formulaPredicate);assert.deepEqual(D.parse(predicateCode),formulaPredicate);
  function free(t){if(t[0]==='eq'||t[0]==='rel')return new Set(t.slice(1));if(t[0]==='neg')return free(t[1]);
    if(t[0]==='and')return new Set([...free(t[1]),...free(t[2])]);const s=free(t[2]);s.delete(t[1]);return s;}
  assert.deepEqual([...free(parsed)].sort((a,b)=>a<b?-1:1),Array.from({length:16},(_,i)=>BigInt(i)));
  assert.deepEqual([...free(formulaPredicate)],[0n]);
  const examples=[['eq',0n,0n],['rel',0n,1n],['neg',['eq',0n,0n]],['and',['eq',0n,0n],['eq',0n,0n]],
    ['exists',1n,['and',['rel',0n,1n],['exists',1n,['eq',1n,1n]]]]];
  let accepted=0,domainChecks=0,projected=0,rejected=0;
  for(const tree of examples){const p=parsingCertificate(P.num(tree)),env=certificateEnvironment(p),small=p.U.closure([...env.values()]);
    assert(evaluateBounded(parsed,env,p.U,small));accepted++;domainChecks++;
    const noise=p.U.ordered(p.U.ordinal(40),p.U.ordinal(39)),large=p.U.closure([...env.values(),noise]);
    assert(evaluateBounded(parsed,env,p.U,large));domainChecks++;
    const schedule=subformulaSchedule(P.num(tree));assert.deepEqual(p.rows.filter(r=>r.kind!=='var').map(r=>r.word),schedule.rows.map(r=>r.word));projected++;
    console.log(JSON.stringify({sourceKind:tree[0],rows:p.rows.length,accepted:true}));
  }
  const base=parsingCertificate(P.num(['eq',0n,1n]));
  function reject(edit){const p={...base,rows:base.rows.map(r=>({...r,values:[...r.values]}))};edit(p);
    p.certificate=p.U.graph(p.rows.map(r=>p.U.graph(r.values)));p.length=p.U.ordinal(p.rows.length);
    const env=certificateEnvironment(p);assert(!evaluateBounded(parsed,env,p.U,p.U.closure([...env.values()])));rejected++;}
  reject(p=>{p.rows.at(-1).values[4]=p.U.ordinal(p.rows.length-1);}); // self child
  reject(p=>{p.rows.at(-1).values[2]=p.U.ordinal(4);}); // wrong constructor/tag
  reject(p=>{p.rows.at(-1).values[6]=p.U.ordinal(4);}); // wrong left start
  reject(p=>{p.rows.at(-1).values[10]=p.U.zero;}); // missing shift map
  reject(p=>{p.rows.at(-1).values[10]=p.U.graph([3,4,5,7,6].map(i=>p.U.ordinal(i)));}); // nonmonotone shift
  reject(p=>{p.rows[0].values[3]=p.U.ordinal(2);}); // wrong variable payload
  reject(p=>{p.rows.at(-1).values[0]=p.U.word(P.word(['eq',1n,0n]));}); // reversed child words
  reject(p=>{p.rows.push({...p.rows[0],values:[...p.rows[0].values]});}); // duplicate row/nonformula root
  reject(p=>{p.rows.at(-1).values[9]=p.U.ordinal(0);}); // wrong final boundary
  reject(p=>{const unused=parsingCertificate(P.num(['eq',2n,2n]),p.U).rows[0];p.rows.splice(p.rows.length-1,0,unused);}); // valid but unreachable term
  const env=certificateEnvironment(base);env.set(0n,base.U.word(P.word(['rel',0n,1n])));
  assert(!evaluateBounded(parsed,env,base.U,base.U.closure([...env.values()])));rejected++;
  assert.equal(parsingCertificate(0n),null);rejected++;
  assert.equal(parsingCertificate(P.pack(P.term(0n))),null);rejected++;
  console.log(JSON.stringify({formulaCodeBits:code.toString(2).length,predicateCodeBits:predicateCode.toString(2).length,allMatrixQuantifiersBounded:true,accepted,transitiveDomainChecks:domainChecks,
    projectedExternalSchedules:projected,rejections:rejected}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
