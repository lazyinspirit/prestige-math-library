// Research-only selected Tab/FV/word-Decode formulas and finite interpretation.
// Formula/arity-number enumeration agreement and proof-code compilation remain open.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {parserFactories,parsingCertificate,certificateEnvironment,certificateParameters} from './support-phase-2-next-17-internal-word-parse-certificate.mjs';
import {finiteSetUniverse,isBoundedFormula,evaluateBounded} from './support-phase-2-next-17-internal-finite-word-predicate.mjs';
import {subformulaSchedule} from './support-phase-2-next-17-subformula-truthset-history.mjs';
const read=n=>readFileSync(new URL(n,import.meta.url),'utf8');
const fence=n=>read(n).match(/```javascript\n([\s\S]*?)\n```/)[1];
const old=fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {num,word,term,pack,tok,con,punct};')();
const D=new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md')+'\nreturn makeNumericalLogicalDecoder();')();
const eq=(x,y)=>['eq',BigInt(x),BigInt(y)],mem=(x,y)=>['rel',BigInt(x),BigInt(y)];
const neg=p=>['neg',p],and=(p,q)=>['and',p,q],ex=(x,p)=>['exists',BigInt(x),p];
const imp=(p,q)=>neg(and(p,neg(q))),or=(p,q)=>neg(and(neg(p),neg(q))),iff=(p,q)=>and(imp(p,q),imp(q,p));
const all=(x,p)=>neg(ex(x,neg(p))),conj=xs=>xs.reduceRight((r,p)=>r===null?p:and(p,r),null);
const disj=xs=>xs.reduceRight((r,p)=>r===null?p:or(p,r),null);
const bind=(xs,f)=>xs.reduceRight((r,x)=>ex(x,r),f),K=certificateParameters.constants;
export const semanticParameters={word:0n,certificate:1n,parseLength:2n,constants:K,A:20n,m:21n,U:22n,H:23n,FV:24n,arity:25n,parameters:26n,decoded:27n};

// The producer's historical `word` routine is recursive in formula depth.
// Tab and Decode contain long right-associated bounded formulas, so serializing
// them with that routine can exhaust the JavaScript call stack even though the
// finite formula is perfectly valid.  This streaming serializer is the same
// coding, but uses an explicit stack and also gives us a useful independent
// round-trip check against the numerical decoder.
export function iterativeFormulaCode(root){
  const out=[],stack=[root],pushTokens=tokens=>{for(let i=tokens.length-1;i>=0;i--)stack.push(tokens[i]);};
  while(stack.length){
    const node=stack.pop();if(typeof node==='bigint'){out.push(node);continue;}
    const kind=node[0];stack.push(P.punct(1));
    if(kind==='eq'){pushTokens(P.term(node[2]));stack.push(P.punct(2));pushTokens(P.term(node[1]));
      stack.push(P.punct(2),P.con(2),P.punct(0));}
    else if(kind==='rel'){pushTokens(P.term(node[2]));stack.push(P.punct(2));pushTokens(P.term(node[1]));
      stack.push(P.punct(2),P.tok(1,0),P.punct(2),P.con(1),P.punct(0));}
    else if(kind==='neg')stack.push(node[1],P.punct(2),P.con(3),P.punct(0));
    else if(kind==='and')stack.push(node[2],P.punct(2),node[1],P.punct(2),P.con(4),P.punct(0));
    else if(kind==='exists')stack.push(node[2],P.punct(2),P.tok(0,node[1]),P.punct(2),P.con(5),P.punct(0));
    else throw Error(`unknown formula constructor ${kind}`);
  }
  return P.pack(out);
}

function formulaStats(root){
  let nodes=0,depth=0;const free=new Set(),stack=[[root,1,new Set()]];
  while(stack.length){const [node,d,bound]=stack.pop();nodes++;depth=Math.max(depth,d);
    if(node[0]==='eq'||node[0]==='rel'){for(const v of node.slice(1))if(!bound.has(v))free.add(v);}
    else if(node[0]==='neg')stack.push([node[1],d+1,bound]);
    else if(node[0]==='and')stack.push([node[1],d+1,bound],[node[2],d+1,bound]);
    else {const next=new Set(bound);next.add(node[1]);stack.push([node[2],d+1,next]);}}
  return {nodes,depth,free:[...free].sort((a,b)=>a<b?-1:a>b?1:0).map(String)};
}

export function formulaVariables(root){
  const out=new Set(),stack=[root];
  while(stack.length){const node=stack.pop();
    if(node[0]==='eq'||node[0]==='rel'){out.add(node[1]);out.add(node[2]);}
    else if(node[0]==='neg')stack.push(node[1]);
    else if(node[0]==='and')stack.push(node[1],node[2]);
    else {out.add(node[1]);stack.push(node[2]);}}
  return [...out].sort((a,b)=>a<b?-1:a>b?1:0);
}

// Independent of parsingCertificate's AST traversal: scan the canonical word
// from left to right, collect formula subwords when their closing parenthesis
// is reached, and keep the first closing-order occurrence.  This is the exact
// postorder enumeration used by both the internal certificate and the external
// finite truth-table schedule, including repeated-subformula deduplication.
export function canonicalFormulaRows(source){
  const tokens=D.list(source),open=[],seen=new Set(),rows=[];
  for(let i=0;i<tokens.length;i++){
    if(tokens[i]===P.punct(0))open.push(i);
    else if(tokens[i]===P.punct(1)){
      assert(open.length,'unmatched closing punctuation');const start=open.pop(),candidate=P.pack(tokens.slice(start,i+1));
      const tree=D.parse(candidate);if(tree!==null&&!seen.has(candidate)){seen.add(candidate);rows.push({word:candidate,tree});}
    }
  }
  assert.equal(open.length,0);assert(rows.length);assert.equal(rows.at(-1).word,source);return rows;
}

export function semanticFormulas(){
  const R=parserFactories(),{B,coord,fields}=R,c=1n,q=2n,w=0n,A=20n,m=21n,U=22n,H=23n,FV=24n,n=25n,a=26n,b=27n;
  const parse=R.parse(w,c,q),subset=(s,t)=>B.every(s,x=>mem(x,t)),tuple=(s,length)=>B.graph(s,length,x=>mem(x,A));
  const formWord=u=>B.some(q,i=>coord(c,i,r=>fields(r,[0,2],([v,t])=>and(eq(u,v),neg(eq(t,K[0]))))));
  const child=(index,F)=>coord(c,index,r=>fields(r,[0,3],([u,v])=>F(u,v)));
  function rowGraph(h,value,clause){
    const shape=B.every(h,p=>B.some(p,r=>B.some(r,u=>B.some(r,s=>conj([B.ordered(u,s,p),formWord(u),value(s)])))));
    const rows=B.every(q,i=>coord(c,i,r=>fields(r,[0,2,3,4,5],([u,t,v,l,d])=>imp(neg(eq(t,K[0])),coord(h,u,s=>and(
      B.every(h,p=>B.every(p,z=>B.every(z,x=>imp(B.ordered(u,x,p),eq(x,s))))),clause(s,t,v,l,d)))))));
    return and(shape,rows);
  }
  const adequate=B.every(q,i=>coord(c,i,r=>fields(r,[2,3],([t,v])=>imp(or(eq(t,K[0]),eq(t,K[5])),mem(v,m)))));
  const coordinateUpdate=(s,i,value,t)=>B.every(m,j=>coord(t,j,x=>or(and(eq(j,i),eq(x,value)),and(neg(eq(j,i)),coord(s,j,y=>eq(x,y))))));
  function truthClause(s,t,v,l,d,Rset){
    const left=F=>child(l,(u)=>coord(H,u,F)),right=F=>child(d,(u)=>coord(H,u,F));
    const atom=relation=>child(l,(_,i)=>child(d,(_,j)=>coord(s,i,x=>coord(s,j,y=>relation?mem(x,y):eq(x,y)))));
    const test=disj([and(eq(t,K[1]),atom(true)),and(eq(t,K[2]),atom(false)),
      and(eq(t,K[3]),left(x=>neg(mem(s,x)))),and(eq(t,K[4]),left(x=>right(y=>and(mem(s,x),mem(s,y))))),
      and(eq(t,K[5]),left(x=>B.some(A,value=>B.some(U,next=>and(coordinateUpdate(s,v,value,next),mem(next,x))))))]);
    return iff(mem(s,Rset),test);
  }
  const truthRows=rowGraph(H,r=>subset(r,U),(r,t,v,l,d)=>B.every(U,s=>truthClause(s,t,v,l,d,r)));
  const rowsMatrix=conj([parse,B.finiteOrdinal(m),adequate,B.every(U,s=>tuple(s,m)),truthRows]);
  const variable=B.fresh(),universe=all(variable,iff(mem(variable,U),tuple(variable,m)));
  const tabMatrix=and(rowsMatrix,universe),tab=bind([c,q,...K],tabMatrix);
  function freeClause(r,t,v,l,d){
    const left=F=>child(l,u=>coord(FV,u,F)),right=F=>child(d,u=>coord(FV,u,F));
    const atomic=child(l,(_,i)=>child(d,(_,j)=>B.pair(i,j,r)));
    const union=(x,y)=>conj([subset(x,r),subset(y,r),B.every(r,z=>or(mem(z,x),mem(z,y)))]);
    const difference=x=>and(B.every(r,z=>and(mem(z,x),neg(eq(z,v)))),B.every(x,z=>imp(neg(eq(z,v)),mem(z,r))));
    return disj([and(or(eq(t,K[1]),eq(t,K[2])),atomic),and(eq(t,K[3]),left(x=>eq(r,x))),
      and(eq(t,K[4]),left(x=>right(y=>union(x,y)))),and(eq(t,K[5]),left(difference))]);
  }
  const freeRows=rowGraph(FV,r=>B.every(r,B.finiteOrdinal),freeClause),freeMatrix=and(parse,freeRows);
  const allowed=and(B.finiteOrdinal(n),coord(FV,w,r=>B.every(r,i=>or(mem(i,n),eq(i,n)))));
  const prefix=(s,x)=>and(coord(s,K[0],y=>eq(x,y)),B.every(n,j=>coord(a,j,value=>B.some(m,k=>
    and(B.successor(j,k),coord(s,k,y=>eq(value,y)))))));
  const decodeMatrix=conj([tabMatrix,freeRows,allowed,mem(n,m),tuple(a,n),subset(b,A),B.some(A,x=>eq(x,x)),
    B.every(A,x=>iff(mem(x,b),B.some(U,s=>and(prefix(s,x),coord(H,w,r=>mem(s,r))))))]);
  const decodeWord=bind([c,q,...K,m,U,H,FV],decodeMatrix);
  return {rowsMatrix,universe,tabMatrix,tab,freeMatrix,freeRows,allowed,decodeMatrix,decodeWord,coordinateUpdate};
}

// Pure AST interpretation in an explicitly supplied finite transitive domain.
// Bounded guards are an evaluation optimization, not an added logical oracle.
export function evaluateInDomain(f,environment,U,domain){
  for(const x of domain)for(const y of U.sets[x])assert(domain.has(y),'nontransitive domain');
  for(const x of environment.values())assert(domain.has(x),'missing parameter');
  const env=new Map(environment),get=x=>{assert(env.has(x),'unassigned variable');return env.get(x);};
  function go(t){if(t[0]==='eq')return get(t[1])===get(t[2]);if(t[0]==='rel')return U.sets[get(t[2])].includes(get(t[1]));
    if(t[0]==='neg')return !go(t[1]);if(t[0]==='and')return go(t[1])&&go(t[2]);
    assert.equal(t[0],'exists');const x=t[1],body=t[2],guard=body[0]==='and'&&body[1][0]==='rel'&&body[1][1]===x&&body[1][2]!==x;
    const range=guard?U.sets[get(body[1][2])]:domain,old=env.get(x),had=env.has(x);
    let result=false;for(const value of range){env.set(x,value);if(go(guard?body[2]:body)){result=true;break;}}
    if(had)env.set(x,old);else env.delete(x);return result;}
  return go(f);
}

export function semanticCertificate(tree,carrierValues,length,U=finiteSetUniverse()){
  const p=parsingCertificate(P.num(tree),U),A=U.intern(carrierValues),environments=[];
  function enumerate(prefix){if(prefix.length===length){environments.push(prefix);return;}for(const b of carrierValues)enumerate([...prefix,b]);}enumerate([]);
  const assignments=environments.map(U.graph),assignmentUniverse=U.intern(assignments),lookup=new Map(environments.map((e,i)=>[e.join(','),assignments[i]]));
  const truth=[],free=[];
  for(const [i,row]of p.rows.entries()){
    const payload=U.sets[row.values[3]].length,l=row.children[0],r=row.children[1],kind=row.kind;
    if(kind==='var'){free[i]=new Set([payload]);continue;}
    const left=row.children.length?truth[l]:null,right=row.children.length===2?truth[r]:null;
    const indices=(kind==='eq'||kind==='rel')?row.children.map(k=>[...free[k]][0]):[];
    const accepted=assignments.filter((s,j)=>{const e=environments[j];return kind==='eq'?e[indices[0]]===e[indices[1]]:
      kind==='rel'?U.sets[e[indices[1]]].includes(e[indices[0]]):kind==='neg'?!left.has(s):kind==='and'?left.has(s)&&right.has(s):
      carrierValues.some(b=>{const updated=[...e];updated[payload]=b;return left.has(lookup.get(updated.join(',')));});});
    truth[i]=new Set(accepted);free[i]=new Set([...free[l],...(r===undefined?[]:free[r])]);if(kind==='exists')free[i].delete(payload);
  }
  const H=U.intern(p.rows.flatMap((row,i)=>row.kind==='var'?[]:[U.ordered(row.values[0],U.intern([...truth[i]]))]));
  const FV=U.intern(p.rows.flatMap((row,i)=>row.kind==='var'?[]:[U.ordered(row.values[0],U.intern([...free[i]].map(U.ordinal)))]));
  const environment=certificateEnvironment(p);for(const [v,x]of [[20n,A],[21n,U.ordinal(length)],[22n,assignmentUniverse],[23n,H],[24n,FV]])environment.set(v,x);
  return {...p,A,environments,assignments,assignmentUniverse,H,FV,truth,free,environment};
}

function tests(){
  const forms=semanticFormulas(),stats={};
  for(const name of ['rowsMatrix','universe','tabMatrix','tab','freeMatrix','decodeMatrix','decodeWord']){
    const code=iterativeFormulaCode(forms[name]),parsed=D.parse(code);assert(parsed!==null);assert.deepEqual(parsed,forms[name]);
    stats[name]={bits:code.toString(2).length,bounded:isBoundedFormula(forms[name]),...formulaStats(forms[name])};}
  assert(stats.rowsMatrix.bounded&&stats.freeMatrix.bounded&&!stats.universe.bounded);
  let deep=['eq',0n,0n];for(let i=0;i<12000;i++)deep=['neg',deep];
  const deepParsed=D.parse(iterativeFormulaCode(deep));assert(deepParsed);assert.equal(formulaStats(deepParsed).depth,12001);
  const huge=(1n<<80n)+7n,hugeFormula=['eq',huge,huge];assert.deepEqual(D.parse(iterativeFormulaCode(hugeFormula)),hugeFormula);
  const enumerationSamples=[['eq',0n,0n],['rel',0n,1n],['neg',['eq',0n,0n]],['and',['eq',0n,0n],['rel',0n,1n]],
    ['and',['eq',0n,0n],['eq',0n,0n]],['exists',1n,['and',['rel',0n,1n],['exists',1n,['eq',1n,1n]]]]];
  let accepted=0,freeChecks=0,negative=0,decoded=0,canonicalRows=0,scheduleChecks=0;const canonicalArities=[];
  for(const tree of enumerationSamples){const source=P.num(tree),U=finiteSetUniverse(),p=parsingCertificate(source,U);
    assert.equal(iterativeFormulaCode(tree),source);
    const canonical=canonicalFormulaRows(source),formulaRows=p.rows.filter(row=>row.kind!=='var');
    assert.deepEqual(formulaRows.map(row=>row.word),canonical.map(row=>row.word));canonicalRows+=canonical.length;
    const schedule=subformulaSchedule(source),variables=formulaVariables(tree);assert(schedule);
    assert.deepEqual(formulaRows.map(row=>row.word),schedule.rows.map(row=>row.word));assert.deepEqual(schedule.indices,variables);scheduleChecks++;
    canonicalArities.push(variables.length?String(variables.at(-1)+1n):'0');
  }
  const samples=[['eq',0n,0n]];
  for(const tree of samples){const U=finiteSetUniverse(),p=semanticCertificate(tree,[U.ordinal(0)],1,U),domain=U.closure([...p.environment.values()]);
    assert(evaluateBounded(forms.rowsMatrix,p.environment,U,domain));assert(evaluateInDomain(forms.universe,p.environment,U,domain));
    assert(evaluateInDomain(forms.tabMatrix,p.environment,U,domain));accepted++;
    assert(evaluateBounded(forms.freeMatrix,p.environment,U,domain));freeChecks++;
    const bad=new Map(p.environment);bad.set(22n,U.intern(p.assignments.slice(1)));const big=U.closure([...domain,...bad.values()]);
    assert(!evaluateInDomain(forms.universe,bad,U,big));negative++;
    const root=p.rows.at(-1).values[0],wrongRow=U.intern(p.assignments.filter(s=>!p.truth.at(-1).has(s))),badH=U.intern(p.rows.flatMap((r,i)=>r.kind==='var'?[]:
      [U.ordered(r.values[0],r.values[0]===root?wrongRow:U.intern([...p.truth[i]]))]));
    const corrupted=new Map(p.environment);corrupted.set(23n,badH);assert(!evaluateBounded(forms.rowsMatrix,corrupted,U,U.closure([...corrupted.values()])));negative++;
    const conflicting=new Map(p.environment),conflictingH=U.intern([...U.sets[p.H],U.ordered(root,wrongRow)]);
    conflicting.set(23n,conflictingH);assert(!evaluateBounded(forms.rowsMatrix,conflicting,U,U.closure([...conflicting.values()])));negative++;
    const missing=new Map(p.environment),withoutRoot=U.intern(U.sets[p.H].filter(pair=>{
      const singleton=U.sets[pair].find(x=>U.sets[x].length===1),key=U.sets[singleton][0];return key!==root;}));
    missing.set(23n,withoutRoot);assert(!evaluateBounded(forms.rowsMatrix,missing,U,U.closure([...missing.values()])));negative++;
    const outsiderWord=U.word(P.word(['eq',9n,9n])),outsiderRow=U.intern([]),extraH=U.intern([...U.sets[p.H],U.ordered(outsiderWord,outsiderRow)]),extra=new Map(p.environment);
    extra.set(23n,extraH);assert(!evaluateBounded(forms.rowsMatrix,extra,U,U.closure([...extra.values()])));negative++;
    const wrongFV=new Map(p.environment);wrongFV.set(24n,U.intern([]));assert(!evaluateBounded(forms.freeMatrix,wrongFV,U,U.closure([...wrongFV.values()])));negative++;
    console.log(JSON.stringify({kind:tree[0],tabAccepted:true,freeVariables:[...p.free.at(-1)]}));
  }
  // Canonical arity and padding checks for Decode.  Coordinate zero is the
  // decoded element; a length-n parameter graph occupies coordinates 1..n.
  // The assignment length m may be larger, and the selected formula is
  // required to use no variable above n.
  {
    const U=finiteSetUniverse(),carrier=[U.ordinal(0)],tree=['rel',0n,1n],p=semanticCertificate(tree,carrier,3,U);
    const parameter=carrier[0],a=U.graph([parameter]),expected=U.intern(carrier.filter(x=>p.truth.at(-1).has(U.graph([x,parameter,carrier[0]]))));
    const env=new Map(p.environment);env.set(25n,U.ordinal(1));env.set(26n,a);env.set(27n,expected);
    assert(evaluateInDomain(forms.decodeMatrix,env,U,U.closure([...env.values()])));decoded++;
    const wrongDecoded=new Map(env);wrongDecoded.set(27n,U.intern(carrier));
    assert(!evaluateInDomain(forms.decodeMatrix,wrongDecoded,U,U.closure([...wrongDecoded.values()])));negative++;
    const tooSmall=new Map(env);tooSmall.set(25n,U.ordinal(0));assert(!evaluateInDomain(forms.decodeMatrix,tooSmall,U,U.closure([...tooSmall.values()])));negative++;
    const shortM=new Map(env);shortM.set(21n,U.ordinal(1));assert(!evaluateInDomain(forms.decodeMatrix,shortM,U,U.closure([...shortM.values()])));negative++;
  }
  {
    const U=finiteSetUniverse(),carrier=[U.ordinal(0)],p=semanticCertificate(['eq',0n,0n],carrier,3,U);
    const parameters=U.graph([carrier[0],carrier[0]]),expected=U.intern(carrier),env=new Map(p.environment);
    env.set(25n,U.ordinal(2));env.set(26n,parameters);env.set(27n,expected);
    assert(evaluateInDomain(forms.decodeMatrix,env,U,U.closure([...env.values()])));decoded++;
  }
  {
    const U=finiteSetUniverse(),p=semanticCertificate(['eq',0n,0n],[],1,U),env=new Map(p.environment);
    env.set(25n,U.ordinal(0));env.set(26n,U.graph([]));env.set(27n,U.intern([]));
    assert(!evaluateInDomain(forms.decodeMatrix,env,U,U.closure([...env.values()])));negative++;
  }
  console.log(JSON.stringify({formulas:stats,accepted,freeChecks,canonicalRows,scheduleChecks,negative,decoded,
    canonicalArities,finiteRowEnumerationAgreement:true,publishedFormulaArityNumberingAgreement:false,
    deepSerializationDepth:12001,hugeVariablePreserved:String(huge),unusedParameterAndPaddingChecks:true,emptyCarrierRejected:true}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
