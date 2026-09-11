// Isolated research reference. Not the production checker or a workflow input.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const read = name => readFileSync(new URL(name, root), 'utf8');
const fence = name => read(name).match(/```javascript\n([\s\S]*?)\n```/)[1];
const previous = fence('research/support-phase-2-next-17-annotated-separation-adapter.md');
const P = new Function(previous.slice(0, previous.indexOf('let cases=0;')) +
  '\nreturn {pack,num,record,pilot,eq};')();
const source = fence('research/support-phase-2-next-17-numerical-logical-proof-decoder.md');
const D = new Function(source + '\nreturn makeNumericalLogicalDecoder();')();

const nat = x => typeof x === 'bigint' && x >= 0n;
const V = x => BigInt(x);
const eq = (x,y) => ['eq',V(x),V(y)], mem = (x,y) => ['rel',V(x),V(y)];
const neg = a => ['neg',a], and = (a,b) => ['and',a,b], ex = (x,a) => ['exists',V(x),a];
const imp = (a,b) => neg(and(a,neg(b))), all = (x,a) => neg(ex(x,neg(a)));
const iff = (a,b) => and(imp(a,b),imp(b,a)), or = (a,b) => neg(and(neg(a),neg(b)));
const key = a => JSON.stringify(a,(_,x)=>typeof x==='bigint'?x.toString():x);
const same = (a,b) => key(a)===key(b);
function variables(a) {
  if(a[0]==='eq'||a[0]==='rel')return new Set([a[1],a[2]]);
  if(a[0]==='neg')return variables(a[1]);
  if(a[0]==='and')return new Set([...variables(a[1]),...variables(a[2])]);
  return new Set([a[1],...variables(a[2])]);
}
function fv(a) {
  if(a[0]==='eq'||a[0]==='rel')return new Set([a[1],a[2]]);
  if(a[0]==='neg')return fv(a[1]);
  if(a[0]==='and')return new Set([...fv(a[1]),...fv(a[2])]);
  const s=fv(a[2]);s.delete(a[1]);return s;
}
function freeFor(a,x,y) {
  if(a[0]==='eq'||a[0]==='rel')return true;
  if(a[0]==='neg')return freeFor(a[1],x,y);
  if(a[0]==='and')return freeFor(a[1],x,y)&&freeFor(a[2],x,y);
  return a[1]===x||((a[1]!==y||!fv(a[2]).has(x))&&freeFor(a[2],x,y));
}
function sub(a,x,y) {
  assert(freeFor(a,x,y),'non-free substitution');
  if(a[0]==='eq'||a[0]==='rel')return [a[0],a[1]===x?y:a[1],a[2]===x?y:a[2]];
  if(a[0]==='neg')return neg(sub(a[1],x,y));
  if(a[0]==='and')return and(sub(a[1],x,y),sub(a[2],x,y));
  return a[1]===x?a:ex(a[1],sub(a[2],x,y));
}
const fresh = used => {let x=0n;while(used.has(x))x++;return x;};
function close(a) {
  const xs=[...fv(a)].sort((x,y)=>x<y?-1:x>y?1:0);
  return xs.reduceRight((r,x)=>all(x,r),a);
}
function separation(phi,z) {
  assert(nat(z));const used=new Set([...variables(phi),z]);
  const a=fresh(used);used.add(a);const b=fresh(used);
  return close(ex(b,all(z,iff(mem(z,b),and(mem(z,a),phi)))));
}
function replacement(phi,z,w) {
  assert(nat(z)&&nat(w)&&z!==w);
  const used=new Set([...variables(phi),z,w]),a=fresh(used);used.add(a);const b=fresh(used);
  // Unique-existence freshness is local to phi,w, not silently strengthened.
  const v=fresh(new Set([...variables(phi),w]));
  const unique=ex(w,and(phi,all(v,imp(sub(phi,w,v),eq(v,w)))));
  return close(imp(all(z,imp(mem(z,a),unique)),
    ex(b,all(w,iff(mem(w,b),ex(z,and(mem(z,a),phi)))))));
}
const fixed = [
  all(0,all(1,imp(all(2,iff(mem(2,0),mem(2,1))),eq(0,1)))),
  all(0,all(1,ex(2,all(3,iff(mem(3,2),or(eq(3,0),eq(3,1))))))),
  all(0,ex(1,all(2,iff(mem(2,1),ex(3,and(mem(3,0),mem(2,3))))))),
  all(0,ex(1,all(2,imp(all(3,imp(mem(3,2),mem(3,0))),mem(2,1))))),
  ex(0,and(ex(1,and(mem(1,0),neg(ex(2,mem(2,1))))),
    all(3,imp(mem(3,0),ex(4,and(mem(4,0),all(2,iff(mem(2,4),or(mem(2,3),eq(2,3)))))))))),
  all(0,imp(ex(1,mem(1,0)),ex(2,and(mem(2,0),neg(ex(3,and(mem(3,2),mem(3,0))))))))
];
const fixedCodes=fixed.map(P.num);
export function axiomCertificate(formula,certificate) {
  try {
    if(!nat(formula))return false;
    const a=D.list(certificate);
    if(a.length===2&&a[0]===0n&&a[1]<6n)return formula===fixedCodes[Number(a[1])];
    if(a.length===3&&a[0]===1n){const phi=D.parse(a[1]);return phi!==null&&formula===P.num(separation(phi,a[2]));}
    if(a.length===4&&a[0]===2n){const phi=D.parse(a[1]);return phi!==null&&a[2]!==a[3]&&formula===P.num(replacement(phi,a[2],a[3]));}
    return false;
  }catch{return false;}
}
function arrow(f) {assert(f[0]==='neg'&&f[1][0]==='and'&&f[1][2][0]==='neg');return [f[1][1],f[1][2][1]];}
function universal(f) {assert(f[0]==='neg'&&f[1][0]==='exists'&&f[1][2][0]==='neg');return [f[1][1],f[1][2][1]];}
export function verifyZF(proof,endpoint) {
  try {
    if(!nat(endpoint))return false;const records=D.list(proof);if(!records.length)return false;const q=[];
    for(let j=0;j<records.length;j++) {
      const fields=D.list(records[j]);if(fields.length!==3)return false;
      const [fc,tag,ac]=fields,f=D.parse(fc);if(f===null)return false;
      if(tag===0n){if(fv(f).size!==0||!axiomCertificate(fc,ac))return false;}
      else if(tag>=1n&&tag<=6n){if(!D.verify(D.pack([records[j]]),fc))return false;}
      else {
        const a=D.list(ac);if(a.length!==2)return false;
        const previous=i=>{assert(i<BigInt(j));return q[Number(i)].formula;};let expected;
        if(tag===7n){const A=previous(a[0]),[B,C]=arrow(previous(a[1]));if(!same(A,B))return false;expected=C;}
        else if(tag===8n)expected=all(a[1],previous(a[0]));
        else if(tag===9n){const [A,B]=arrow(previous(a[0]));if(fv(B).has(a[1]))return false;expected=imp(ex(a[1],A),B);}
        else return false;
        if(!same(f,expected))return false;
      }
      q.push({formula:f,code:fc});
    }
    return q.at(-1).code===endpoint;
  }catch{return false;}
}
function skeleton(f) {
  const slots=[],seen=new Map();
  function go(a){if(a[0]==='neg')return ['n',go(a[1])];if(a[0]==='and')return ['a',go(a[1]),go(a[2])];
    const k=key(a);if(!seen.has(k)){seen.set(k,slots.length);slots.push(a);}return ['p',seen.get(k)];}
  return [go(f),slots];
}
function assembler() {
  const q=[];const add=(f,t,a)=>(q.push([f,t,a]),q.length-1),at=p=>q[p][0];
  const ax=f=>add(f,1,skeleton(f));
  const mp=(p,r)=>{const [a,b]=arrow(at(r));assert(same(at(p),a));return add(b,7,[p,r]);};
  function pc(ps,b){let f=b;for(let i=ps.length-1;i>=0;i--)f=imp(at(ps[i]),f);let r=ax(f);for(const p of ps)r=mp(p,r);return r;}
  const zf=j=>add(fixed[j],0,[0n,BigInt(j)]);
  function uiImp(a,y){const [x,b]=universal(a);return add(imp(a,sub(b,x,y)),2,[b,x,y]);}
  const ui=(p,y)=>mp(p,uiImp(at(p),y));
  function em(p,x){const [a,b]=arrow(at(p)),ei=add(imp(b,ex(x,b)),4,[b,x,x]);
    const r=pc([p,ei],imp(a,ex(x,b)));return add(imp(ex(x,a),ex(x,b)),9,[r,x]);}
  function cg(p,x){const [k,a]=arrow(at(p));assert(!fv(k).has(x));const g=add(all(x,at(p)),8,[p,x]);
    const d=add(imp(all(x,imp(k,a)),imp(k,all(x,a))),3,[k,a,x]);return mp(g,d);}
  function alpha(p,y){const f=at(p);assert(f[0]==='exists');const [_,x,b]=f;assert(!variables(b).has(y));const c=sub(b,x,y);
    const ei=add(imp(b,ex(y,c)),4,[c,y,x]);
    const r=add(imp(ex(x,b),ex(y,c)),9,[ei,x]);return mp(p,r);}
  const gen=(p,x)=>add(all(x,at(p)),8,[p,x]);
  return {q,at,add,ax,mp,pc,zf,uiImp,ui,em,cg,alpha,gen};
}
const empty = u=>all(2,neg(mem(2,u)));
const pair = (a,b,u)=>all(3,iff(mem(3,u),or(eq(3,a),eq(3,b))));
const union = (a,u)=>all(2,iff(mem(2,u),ex(3,and(mem(3,a),mem(2,3)))));
function emptyExistence(A) {
  const old=neg(ex(2,mem(2,1))),E=empty(1),nonemptyPart=ex(1,and(mem(1,0),old));
  const dn=A.ax(imp(neg(neg(mem(2,1))),mem(2,1))),lift=A.em(dn,2n);
  const bridge=A.pc([lift],imp(old,E));
  const p=A.pc([bridge],imp(and(mem(1,0),old),E)),e=A.em(p,1n);
  const inner=fixed[4][2],prem=A.pc([e],imp(inner,ex(1,E)));
  assert(same(inner[1],nonemptyPart));
  const ee=A.add(imp(fixed[4],ex(1,E)),9,[prem,0n]);return A.alpha(A.mp(A.zf(4),ee),12n);
}
export function operationProof(kind) {
  const A=assembler(),u=12n,v=13n,t=2n;let R,params,existence;
  if(kind==='empty'){R=empty;params=[];existence=emptyExistence(A);}
  else if(kind==='pair'){R=w=>pair(10,11,w);params=[10n,11n];existence=A.alpha(A.ui(A.ui(A.zf(1),10n),11n),u);}
  else if(kind==='union'){R=w=>union(10,w);params=[10n];existence=A.alpha(A.ui(A.zf(2),10n),u);}
  else throw Error('unsupported operation');
  assert(same(A.at(existence),ex(u,R(u))));
  const K=and(R(u),R(v)),left=A.uiImp(R(u),t),right=A.uiImp(R(v),t);
  const compare=A.pc([left,right],imp(K,iff(mem(t,v),mem(t,u))));
  const pointwise=A.cg(compare,t),ext=A.ui(A.ui(A.zf(0),v),u);
  const unique=A.pc([pointwise,ext],imp(K,eq(v,u)));
  const curried=A.pc([unique],imp(R(u),imp(R(v),eq(v,u))));
  const universalUnique=A.cg(curried,v),body=and(R(u),all(v,imp(R(v),eq(v,u))));
  const intro=A.pc([universalUnique],imp(R(u),body)),lift=A.em(intro,u);
  let end=A.mp(existence,lift);for(const x of [...params].reverse())end=A.gen(end,x);
  const expected=params.reduceRight((r,x)=>all(x,r),ex(u,body));assert(same(A.at(end),expected));
  const code=P.pack(A.q.map(P.record)),endpoint=P.num(expected);
  return {code,endpoint,lines:A.q,expected};
}
function tests() {
  let certificates=0,schemas=0,rejections=0;
  const cert=a=>D.pack(a.map(BigInt));
  for(let j=0;j<6;j++){assert(axiomCertificate(fixedCodes[j],cert([0,j])));assert(verifyZF(P.pack([P.record([fixed[j],0,[0n,BigInt(j)]])]),fixedCodes[j]));certificates++;}
  const huge=(1n<<80n)+123n;
  const cases=[eq(0,0),mem(0,1),ex(0,mem(0,2)),and(mem(0,1),ex(1,eq(1,1))),eq(huge,huge)];
  for(const phi of cases)for(const z of [0n,1n,7n]){
    const f=P.num(phi),s=separation(phi,z),c=cert([1,f,z]);assert.equal(fv(s).size,0);assert(axiomCertificate(P.num(s),c));
    assert(verifyZF(P.pack([P.record([s,0,[1n,f,z]])]),P.num(s)));schemas++;
    const w=z===1n?2n:1n,r=replacement(phi,z,w),d=cert([2,f,z,w]);assert.equal(fv(r).size,0);assert(axiomCertificate(P.num(r),d));
    assert(verifyZF(P.pack([P.record([r,0,[2n,f,z,w]])]),P.num(r)));schemas++;
  }
  // Independently assembled exact schema endpoints, not only builder/recognizer round trips.
  const explicitSep=all(1,ex(2,all(0,iff(mem(0,2),and(mem(0,1),eq(0,0))))));
  assert(same(separation(eq(0,0),0n),explicitSep));
  const phi=mem(5,6),unique=ex(6,and(phi,all(0,imp(mem(5,0),eq(0,6)))));
  const explicitRep=all(0,imp(all(5,imp(mem(5,0),unique)),ex(1,all(6,iff(mem(6,1),ex(5,and(mem(5,0),phi)))))));
  assert(same(replacement(phi,5n,6n),explicitRep));
  const reject=(f,c)=>{assert(!axiomCertificate(f,c));rejections++;};
  reject(fixedCodes[0],0n);reject(fixedCodes[0],2n);reject(fixedCodes[0],cert([0,6]));
  reject(fixedCodes[0],cert([0,0,0]));reject(fixedCodes[1],cert([0,0]));
  reject(fixedCodes[0],cert([1,2,0]));reject(fixedCodes[0],cert([2,P.num(eq(0,0)),0,0]));
  reject(P.num(ex(12,empty(12))),cert([0,6])); // Empty is derived, never seventh fixed axiom.
  reject(P.num(eq(0,0)),cert([3,0]));reject(P.num(explicitSep),cert([1,P.num(eq(0,0)),1]));
  reject(P.num(replacement(phi,5n,6n)),cert([2,P.num(phi),6,5]));
  // Stronger biconditional Power Set is not accepted under the implication-only fixed tag.
  reject(P.num(all(0,ex(1,all(2,iff(all(3,imp(mem(3,2),mem(3,0))),mem(2,1)))))),cert([0,3]));
  const proofs={};
  for(const kind of ['empty','pair','union']){const q=operationProof(kind);assert(verifyZF(q.code,q.endpoint));
    assert(!D.verify(q.code,q.endpoint)); // Old logical-only profile remains unchanged.
    const mutated=q.lines.map(line=>[...line]);const j=mutated.findIndex(l=>l[1]===0);
    mutated[j]=[mutated[j][0],0,[0n,6n]];assert(!verifyZF(P.pack(mutated.map(P.record)),q.endpoint));
    proofs[kind]={lines:q.lines.length,proofBits:q.code.toString(2).length};}
  const pilot=P.pilot(P.eq(0,0),0),p=P.pack(pilot.map(P.record)),e=P.num(pilot.at(-1)[0]);assert(D.verify(p,e)&&verifyZF(p,e));
  assert(!verifyZF(2n,fixedCodes[0]));assert(!verifyZF(P.pack([P.record([fixed[0],0,[0n,0n]]),P.record([eq(0,0),7,[1,0]])]),P.num(eq(0,0))));
  console.log(JSON.stringify({fixedAxiomCertificates:certificates,schemaCertificates:schemas,independentSchemaEndpoints:2,certificateRejections:rejections,operationProofs:proofs,mutatedProofRejections:3,logicalPilot:true}));
}
if(process.argv[1]===fileURLToPath(import.meta.url))tests();
