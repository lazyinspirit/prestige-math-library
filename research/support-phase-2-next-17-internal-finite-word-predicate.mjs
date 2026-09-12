// Research-only selected Delta_0 finite-word predicate; not a formula parser.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const fence=n=>read(n).match(/```javascript\n([\s\S]*?)\n```/)[1];
const producer=fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P=new Function(producer.slice(0,producer.indexOf('let cases=0;'))+'\nreturn {num,word,pack,tok};')();
const D=new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md')+'\nreturn makeNumericalLogicalDecoder();')();
const eq=(x,y)=>['eq',BigInt(x),BigInt(y)],mem=(x,y)=>['rel',BigInt(x),BigInt(y)];
const neg=p=>['neg',p],and=(p,q)=>['and',p,q],ex=(x,p)=>['exists',BigInt(x),p];
const imp=(p,q)=>neg(and(p,neg(q))),or=(p,q)=>neg(and(neg(p),neg(q)));
const conjunction=xs=>xs.reduceRight((r,p)=>r===null?p:and(p,r),null);
const disjunction=xs=>xs.reduceRight((r,p)=>r===null?p:or(p,r),null);

export function boundedFactories(start=100n){
  let cursor=start;const fresh=()=>cursor++;
  const some=(s,F)=>{const x=fresh();return ex(x,and(mem(x,s),F(x)));};
  const every=(s,F)=>{const x=fresh();return neg(ex(x,and(mem(x,s),neg(F(x)))));};
  const empty=x=>every(x,z=>neg(eq(z,z)));
  const transitive=x=>every(x,y=>every(y,z=>mem(z,x)));
  const successor=(a,b)=>conjunction([mem(a,b),every(a,z=>mem(z,b)),every(b,z=>or(mem(z,a),eq(z,a)))]);
  const ordinal=x=>conjunction([transitive(x),every(x,transitive),every(x,y=>every(x,z=>disjunction([eq(y,z),mem(y,z),mem(z,y)])))]);
  const zeroOrSuccessor=x=>or(empty(x),some(x,y=>successor(y,x)));
  const finiteOrdinal=x=>conjunction([ordinal(x),zeroOrSuccessor(x),every(x,zeroOrSuccessor)]);
  const pair=(a,b,p)=>conjunction([mem(a,p),mem(b,p),every(p,z=>or(eq(z,a),eq(z,b)))]);
  const ordered=(a,b,p)=>some(p,r=>some(p,s=>conjunction([pair(a,a,r),pair(a,b,s),pair(r,s,p)])));
  function token(t,K){return some(t,r=>some(r,k=>some(r,j=>and(ordered(k,j,t),disjunction([
    and(eq(k,K[0]),finiteOrdinal(j)),and(eq(k,K[1]),eq(j,K[0])),
    and(eq(k,K[2]),disjunction(K.map(c=>eq(j,c)))),and(eq(k,K[3]),mem(j,K[3]))])))));}
  function graph(s,m,value){
    const shape=every(s,p=>some(p,r=>some(r,i=>some(r,v=>conjunction([mem(i,m),ordered(i,v,p),value(v)])))));
    const domain=every(m,i=>some(s,p=>some(p,r=>some(r,v=>and(ordered(i,v,p),
      every(s,q=>every(q,t=>every(t,w=>imp(ordered(i,w,q),eq(q,p))))))))));
    return and(shape,domain);
  }
  const constants=K=>conjunction([empty(K[0]),...K.slice(1).map((k,i)=>successor(K[i],k))]);
  const word=(w,m,K)=>conjunction([constants(K),finiteOrdinal(m),graph(w,m,t=>token(t,K))]);
  return {fresh,some,every,empty,transitive,successor,ordinal,finiteOrdinal,pair,ordered,token,graph,constants,word};
}

export const wordParameters={word:0n,length:1n,constants:[2n,3n,4n,5n,6n,7n]};
export function internalWordFormula(){const B=boundedFactories();return B.word(0n,1n,wordParameters.constants);}

// Certify that the serialized pure-language AST has only bounded quantifiers.
// The bound variable must differ from its bounding-set variable.
export function isBoundedFormula(f){
  if(!Array.isArray(f))return false;
  if(f[0]==='eq'||f[0]==='rel')return f.length===3&&f.slice(1).every(x=>typeof x==='bigint'&&x>=0n);
  if(f[0]==='neg')return f.length===2&&isBoundedFormula(f[1]);
  if(f[0]==='and')return f.length===3&&isBoundedFormula(f[1])&&isBoundedFormula(f[2]);
  if(f[0]!=='exists'||f.length!==3||typeof f[1]!=='bigint'||f[1]<0n)return false;
  const b=f[2];return b?.[0]==='and'&&b.length===3&&b[1]?.[0]==='rel'&&b[1][1]===f[1]&&b[1][2]!==f[1]&&
    isBoundedFormula(b[1])&&isBoundedFormula(b[2]);
}

export function finiteSetUniverse(){
  const sets=[],index=new Map();
  function intern(xs){const members=[...new Set(xs)].sort((a,b)=>a-b);for(const x of members)assert(Number.isSafeInteger(x)&&x>=0&&x<sets.length);
    const k=members.join(',');if(!index.has(k)){index.set(k,sets.length);sets.push(members);}return index.get(k);}
  const zero=intern([]),ordinals=[zero],ordinal=n=>{assert(Number.isSafeInteger(n)&&n>=0);while(ordinals.length<=n)ordinals.push(intern(ordinals));return ordinals[n];};
  const pair=(a,b)=>intern([a,b]),ordered=(a,b)=>pair(pair(a,a),pair(a,b));
  const graph=values=>intern(values.map((v,i)=>ordered(ordinal(i),v)));
  const token=(k,j)=>ordered(ordinal(k),ordinal(j));
  const word=tokens=>graph(tokens.map(t=>{const fields=D.list(t);assert.equal(fields.length,2);const [k,j]=fields;return token(Number(k),Number(j));}));
  function closure(roots){const out=new Set(),visit=x=>{if(out.has(x))return;out.add(x);sets[x].forEach(visit);};roots.forEach(visit);return out;}
  return {sets,intern,zero,ordinal,pair,ordered,graph,token,word,closure};
}

// Evaluate only genuinely bounded formulas. The optional finite domain must
// be transitive and contain all supplied parameters, not model any ZF axioms.
export function evaluateBounded(f,environment,U,domain=null){
  assert(isBoundedFormula(f));if(domain){for(const x of domain){assert(U.sets[x]);for(const y of U.sets[x])assert(domain.has(y),'nontransitive domain');}
    for(const x of environment.values())assert(domain.has(x),'missing parameter');}
  const env=new Map(environment),value=x=>{assert(env.has(x),'unassigned variable');return env.get(x);};
  function go(t){if(t[0]==='eq')return value(t[1])===value(t[2]);if(t[0]==='rel')return U.sets[value(t[2])].includes(value(t[1]));
    if(t[0]==='neg')return !go(t[1]);if(t[0]==='and')return go(t[1])&&go(t[2]);
    const variable=t[1],bound=t[2][1][2],had=env.has(variable),old=env.get(variable);
    const result=U.sets[value(bound)].some(x=>{env.set(variable,x);return go(t[2][2]);});
    if(had)env.set(variable,old);else env.delete(variable);return result;}
  return go(f);
}

function tests(){
  const U=finiteSetUniverse(),f=internalWordFormula(),code=P.num(f),parsed=D.parse(code);
  assert.deepEqual(parsed,f);assert(isBoundedFormula(parsed));
  function free(t){if(t[0]==='eq'||t[0]==='rel')return new Set(t.slice(1));if(t[0]==='neg')return free(t[1]);
    if(t[0]==='and')return new Set([...free(t[1]),...free(t[2])]);const s=free(t[2]);s.delete(t[1]);return s;}
  assert.deepEqual([...free(parsed)].sort((a,b)=>a<b?-1:1),Array.from({length:8},(_,i)=>BigInt(i)));
  const K=Array.from({length:6},(_,i)=>U.ordinal(i)),env=(w,m)=>new Map([[0n,w],[1n,m],...K.map((x,i)=>[2n+BigInt(i),x])]);
  const samples=[[],P.word(eq(0,0)),P.word(['rel',0n,1n]),P.word(neg(eq(0,0))),P.word(and(eq(0,0),eq(1,1))),P.word(ex(1,eq(1,0)))];
  let words=0,transitiveChecks=0,rejections=0;
  for(const tokens of samples){const w=U.word(tokens),m=U.ordinal(tokens.length),params=env(w,m),small=U.closure([...params.values()]);
    assert(evaluateBounded(parsed,params,U,small));words++;transitiveChecks++;
    const noise=U.ordered(U.ordinal(42),U.ordinal(41)),large=U.closure([...params.values(),noise]);
    assert(evaluateBounded(parsed,params,U,large));transitiveChecks++;
  }
  const reject=(w,m,params=env(w,m))=>{assert(!evaluateBounded(parsed,params,U,U.closure([...params.values()])));rejections++;};
  const w=U.word(P.word(eq(0,0))),m=U.ordinal(P.word(eq(0,0)).length),entries=U.sets[w];
  reject(U.intern(entries.slice(1)),m); // hole in the exact domain
  reject(U.intern([...entries,U.ordered(U.ordinal(0),U.token(0,1))]),m); // collision
  reject(U.intern([...entries,U.ordered(m,U.token(0,1))]),m); // extraneous coordinate
  reject(U.intern([...entries,U.ordinal(3)]),m); // non-pair junk
  for(const [k,j]of [[1,1],[2,6],[3,3],[4,0]])reject(U.graph([U.token(k,j)]),U.ordinal(1));
  reject(U.graph([U.ordered(U.ordinal(0),U.pair(U.ordinal(1),U.ordinal(1)))]),U.ordinal(1)); // nonordinal variable payload
  const badConstants=env(w,m);badConstants.set(7n,U.ordinal(4));reject(w,m,badConstants);
  const B=boundedFactories(),fin=B.finiteOrdinal(0n);let ordinals=0;
  for(let n=0;n<=40;n++){assert(evaluateBounded(fin,new Map([[0n,U.ordinal(n)]]),U));ordinals++;}
  for(const x of [U.pair(U.ordinal(1),U.ordinal(1)),U.pair(U.ordinal(0),U.ordinal(2))]){
    assert(!evaluateBounded(fin,new Map([[0n,x]]),U));rejections++;}
  // A valid token graph need not be a formula. This guards the scope boundary.
  const nonformula=[P.tok(0,0)];assert.equal(D.parse(P.pack(nonformula)),null);
  assert(evaluateBounded(parsed,env(U.word(nonformula),U.ordinal(1)),U));
  assert(!isBoundedFormula(ex(0n,eq(0,0))));rejections++;
  assert(!isBoundedFormula(ex(0n,and(mem(0,0),eq(0,0)))));rejections++;
  assert(!isBoundedFormula(ex(0n,['and',mem(0,1),eq(0,0),eq(1,1)])));rejections++;
  const unclosed=new Set([w,m,...K]);assert.throws(()=>evaluateBounded(parsed,env(w,m),U,unclosed),/nontransitive/);rejections++;
  // Complete truth tables for the bounded-vs-exact pair and ordered-pair
  // meanings on a small independent HF pool; degenerate pairs are included.
  const pool=[U.ordinal(0),U.ordinal(1),U.ordinal(2),U.pair(U.ordinal(1),U.ordinal(1))];
  const pairFormula=boundedFactories().pair(0n,1n,2n),opFormula=boundedFactories().ordered(0n,1n,2n);let pairChecks=0;
  const candidates=new Set(pool);for(const a of pool)for(const b of pool){candidates.add(U.pair(a,b));candidates.add(U.ordered(a,b));}
  for(const a of pool)for(const b of pool)for(const p of candidates){const assignment=new Map([[0n,a],[1n,b],[2n,p]]);
    assert.equal(evaluateBounded(pairFormula,assignment,U),p===U.pair(a,b));
    assert.equal(evaluateBounded(opFormula,assignment,U),p===U.ordered(a,b));pairChecks+=2;}
  console.log(JSON.stringify({formulaCodeBits:code.toString(2).length,pureFormulaParsed:true,allQuantifiersBounded:true,words,
    transitiveDomainChecks:transitiveChecks,finiteOrdinalChecks:ordinals,pairChecks,rejections,nonformulaWordAccepted:true}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
