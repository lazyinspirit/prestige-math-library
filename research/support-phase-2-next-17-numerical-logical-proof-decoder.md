# Numerical logical-proof decoding for the Separation adapter

Date: 2026-09-12 (Australia/Sydney).

This bounded support artifact completes an **encoding adapter**, not full
Separation, L-reflection, or U-AX. It changes no item, manifest, receipt,
workflow code, process, or run state. It is not certification.

## 1. Audited boundary and exact scope

Commit `39832220f` fixes frontmatter ID-list parsing. It does not change the
mathematical proof-word parser. The later committed
[annotated Separation adapter](support-phase-2-next-17-annotated-separation-adapter.md)
explicitly checks its generated formula trees **before** numerical
serialization and does not parse arbitrary incoming numerical formula words.
That is the narrow missing adapter completed here.

Use exactly its token tags, finite-word serialization, line-record fields,
sentinel encoding and pure-membership signature. This is a realization of
the published abstract coding interface, not a universal adapter between
every possible Gödel numbering. The decoder accepts all six specified
logical axiom schemes and the three rules. It deliberately rejects tag 0:
there is **no nonlogical axiom oracle** in this logical-only profile.
Consequently every accepted proof is also a ZF proof by weakening, but the
decoder is not a complete recognizer for all certified ZF proofs.

The complete restricted constructor for the matrix z=z uses no nonlogical
axioms, so it fits this profile. Finishing this decoder does not expand that
constructor to arbitrary Separation matrices. The separate
[Separation kernel](support-phase-2-next-17-separation-constructor-kernel.md)
and [U-AX package](support-phase-2-next-17-uax-ucohen.md) keep their unmet
set-theoretic template obligations.

## 2. Mathematical adapter lemma

Let NumForm be the numerical formula encoding of the preceding adapter,
and NumProof its nested sentinel encoding of annotated line lists. Let
AbsLogCheck be the nine-case logical checker on the decoded finite trees,
with exact annotation arities, literal free-for substitution and earlier
premise indices. Its rules are `def-set-coded-formal-derivation`.

There is a total primitive-recursive numerical predicate NLogPrf(p,a) such
that:

1. Parsing NumForm(φ) returns exactly φ. Conversely, every successful
   numerical parse has a unique formula φ and its input is NumForm(φ).
2. For any finite well-formed annotated list q, NLogPrf(NumProof(q),a)
   holds exactly when AbsLogCheck accepts q and its final formula has
   numerical code a. Empty lists are rejected as proofs.
3. For arbitrary p,a, acceptance supplies such a decoded list q. No invalid
   token, extra field, ill-sorted child, unmatched delimiter, malformed
   Boolean certificate, or non-earlier premise is ignored.

These statements are about **codes and specified rule checks**, not the
soundness or consistency of ZF. For PA-total representations of the concrete
arithmetic algorithms, the same identities and checker correspondence have
PA proofs by the inductions below. This is a mathematical formalizability
argument, not a supplied machine-checked PA derivation.

### Proof and arithmetic bounds

For a positive integer, scan its canonical binary expansion. The first
delimiter determines the list length; each following unary width determines
one canonical binary payload. Require all declared blocks and exact exhaustion
of the word. A zero-length list is the valid code 2; 0 and 1 are invalid.
Induction on blocks proves both inverse identities for list encoding. Every
scan is bounded by input bit length; the corresponding arithmetic operations
are those of `lem-certified-syntax-coding-operations-are-primitive-recursive`.

Decode each token as a list of exactly two naturals and check its tag/payload.
Parse a formula with a stack of unfinished parenthesized frames. A comma
terminates exactly one field; a close parenthesis builds one node and appends
it to its parent field. Each field must contain exactly one token or already
parsed child node of the prescribed sort. A complete root must consume the
whole word. A variable term and a variable symbol token are different sorts.
Negation takes a formula, and an existential binder takes a variable token.

Induct on the token position with the invariant that completed nodes have
exactly their consumed word intervals and each unfinished frame records the
unique field prefixes determined by the scanned delimiters. Each stack action
is fixed finite work apart from copying already bounded lists. The constructor
cases prove exact recovery and unique serialization. This specializes
`lem-unique-parsing-of-set-coded-syntax` to the adapter's actual alphabet.
The abstract arithmetic implementation stores the stack as a coded list and
runs at most one transition per token plus a fixed final check.

Free-variable collection scans the tree with its bound-variable environment.
The free-for test stops below a binder of the variable being replaced and
rejects a free occurrence of that variable below a binder of the proposed
replacement variable. Exact substitution changes only those free leaves and
does not rename binders. Structural induction proves precisely the equations
tested by schemes 2, 4 and 6. Variable indices are natural-number payloads,
not floating-point numbers or positions in the enclosing token list.

Boolean annotation nodes are separately tagged sentinel lists with exact
arities. A child code is smaller than the containing nonempty sentinel list
code. Thus course-of-values recursion bounded by that code decodes the
Boolean tree. Letter indices must be less than the supplied substitution-list
length. Substitute the fully parsed formula words; compare the resulting
formula literally; check all Boolean valuations. If there are k supplied
slots, 2^k is a primitive-recursive bound. Unused slots are allowed, but every
supplied slot must still be a valid formula.

Finally scan the decoded proof list. Each line has exactly three fields and
an annotation of the prescribed arity. Its formula is parsed independently,
even if the line will later be rejected by another test. For MP and the two
quantifier rules, first check the index is strictly earlier; only then retrieve
the premise. Rebuild the exact scheme/rule conclusion and compare it with
the parsed line. The final code must equal a, not merely be equivalent to it.
Induction on this scan proves assertions 2–3 using assertion 1.

All numerical loops above have input-derived primitive-recursive bounds;
rebuilding is fixed-register history recursion. There is no unbounded proof
search, universal evaluator, ordinal computation, or truth test for a proper
class. In PA, first prove the list and parser invariants, then substitution
and Boolean rebuilding by structural induction, then the proof-prefix
invariant by ordinary induction. The chosen total graph representations can
be those of `thm-primitive-recursive-numeralwise-representability`. Totality
alone is not used as a substitute for these correctness inductions.

The correspondence with a **set-word** is only the coordinatewise replacement
of each numerical token by its tagged set token, giving a finite function
graph. This lemma does not construct a ZF proof quoting that graph, prove its
satisfaction clauses inside a weak model, or put a subset into Def(Lα).

## 3. Executable numerical decoder

This is an independent executable reference for the bounded adapter. Inputs
and variable payloads are BigInts. Native array positions are used only after
a BigInt bound check against an already allocated finite list. No large
variable index is rounded to a JavaScript Number. As with any host program,
available memory/stack/time bound executable tests; the total arithmetic
algorithm and its primitive-recursive implementation are specified in §2.

```javascript
function makeNumericalLogicalDecoder() {
  const bad = () => { throw new Error('invalid numerical proof data'); };
  const need = b => { if (!b) bad(); };
  const nat = n => typeof n === 'bigint' && n >= 0n;
  function pack(xs) {
    let w='1'+'1'.repeat(xs.length)+'0';
    for (const x of xs) { need(nat(x)); const b=x.toString(2); w+='1'.repeat(b.length)+'0'+b; }
    return BigInt('0b'+w);
  }
  function list(n) {
    need(nat(n)&&n>0n); const w=n.toString(2); let p=1,k=0;
    while(w[p]==='1'){p++;k++;} need(w[p++]==='0'); const out=[];
    for(let i=0;i<k;i++) {
      let m=0; while(w[p]==='1'){p++;m++;}
      need(m>0&&w[p++]==='0'&&p+m<=w.length);
      const b=w.slice(p,p+m); p+=m; need(m===1||b[0]==='1');
      out.push(BigInt('0b'+b));
    }
    need(p===w.length); return out;
  }
  function fields(n,k) { const a=list(n); need(a.length===k); return a; }
  const tk=(a,b)=>pack([BigInt(a),BigInt(b)]);
  const LP=tk(3,0), RP=tk(3,1), COM=tk(3,2);
  function token(n) {
    const [k,v]=fields(n,2);
    need(k===0n||(k===1n&&v===0n)||(k===2n&&v<=5n)||(k===3n&&v<=2n));
    return {kind:'token',k,v};
  }
  function build(fs) {
    need(fs.every(f=>f.length===1)); const f=fs.map(x=>x[0]);
    const head=f[0]; need(head?.kind==='token'&&head.k===2n);
    const sym=(j,k,v=null)=>{const x=f[j];need(x?.kind==='token'&&x.k===k&&(v===null||x.v===v));return x.v;};
    const node=(j,sort)=>{const x=f[j];need(x?.kind==='node'&&x.sort===sort);return x.ast;};
    let sort='formula',ast;
    if(head.v===0n){need(f.length===2);ast=['var',sym(1,0n)];sort='term';}
    else if(head.v===1n){need(f.length===4);sym(1,1n,0n);ast=['rel',node(2,'term')[1],node(3,'term')[1]];}
    else if(head.v===2n){need(f.length===3);ast=['eq',node(1,'term')[1],node(2,'term')[1]];}
    else if(head.v===3n){need(f.length===2);ast=['neg',node(1,'formula')];}
    else if(head.v===4n){need(f.length===3);ast=['and',node(1,'formula'),node(2,'formula')];}
    else {need(head.v===5n&&f.length===3);ast=['exists',sym(1,0n),node(2,'formula')];}
    return {kind:'node',sort,ast};
  }
  function parse(n,sort='formula') {
    const w=list(n), stack=[]; let root=null;
    for(const t of w) {
      const tok=token(t); need(root===null);
      if(t===LP){stack.push({done:[],current:[]});continue;}
      need(stack.length>0); const top=stack[stack.length-1];
      if(t===COM){need(top.current.length>0);top.done.push(top.current);top.current=[];}
      else if(t===RP){need(top.current.length>0);top.done.push(top.current);const value=build(top.done);stack.pop();
        if(stack.length)stack[stack.length-1].current.push(value);else root=value;}
      else top.current.push(tok);
    }
    need(stack.length===0&&root!==null&&root.sort===sort);return root.ast;
  }
  const neg=a=>['neg',a], and=(a,b)=>['and',a,b], ex=(x,a)=>['exists',x,a];
  const eq=(x,y)=>['eq',x,y], imp=(a,b)=>neg(and(a,neg(b))), all=(x,a)=>neg(ex(x,neg(a)));
  function equal(a,b) {const work=[[a,b]];while(work.length){const [x,y]=work.pop();
    if(Array.isArray(x)||Array.isArray(y)){if(!Array.isArray(x)||!Array.isArray(y)||x.length!==y.length)return false;
      for(let i=0;i<x.length;i++)work.push([x[i],y[i]]);}else if(x!==y)return false;}return true;}
  function arrow(a) {need(a[0]==='neg'&&a[1][0]==='and'&&a[1][2][0]==='neg');return [a[1][1],a[1][2][1]];}
  function fv(a) {
    const out=new Set(),work=[[a,new Set()]];
    while(work.length){const [f,bound]=work.pop();
      if(f[0]==='eq'||f[0]==='rel'){for(const x of [f[1],f[2]])if(!bound.has(x))out.add(x);}
      else if(f[0]==='neg')work.push([f[1],bound]);
      else if(f[0]==='and')work.push([f[1],bound],[f[2],bound]);
      else {const next=new Set(bound);next.add(f[1]);work.push([f[2],next]);}}
    return out;
  }
  function freeFor(a,x,y) {
    const work=[[a,false]];
    while(work.length){const [f,captured]=work.pop();
      if(f[0]==='eq'||f[0]==='rel'){if(captured&&(f[1]===x||f[2]===x))return false;}
      else if(f[0]==='neg')work.push([f[1],captured]);
      else if(f[0]==='and')work.push([f[1],captured],[f[2],captured]);
      else if(f[1]!==x)work.push([f[2],captured||f[1]===y]);}
    return true;
  }
  function substitute(a,x,y) {
    need(freeFor(a,x,y));const values=new Map(),work=[[a,false]];
    while(work.length){const [f,ready]=work.pop();if(values.has(f))continue;
      if(f[0]==='eq'||f[0]==='rel'){values.set(f,[f[0],f[1]===x?y:f[1],f[2]===x?y:f[2]]);continue;}
      if(f[0]==='exists'&&f[1]===x){values.set(f,f);continue;}
      if(!ready){work.push([f,true]);if(f[0]==='neg')work.push([f[1],false]);
        else if(f[0]==='and')work.push([f[1],false],[f[2],false]);else work.push([f[2],false]);}
      else values.set(f,f[0]==='neg'?neg(values.get(f[1])):f[0]==='and'?
        and(values.get(f[1]),values.get(f[2])):ex(f[1],values.get(f[2])));}
    return values.get(a);
  }
  function boolean(code,slots) {
    const nodes=[],known=new Map(),work=[[code,false]];
    while(work.length){const [n,ready]=work.pop();if(known.has(n))continue;const a=list(n);
      need(a.length>0);const k=a[0];need((k===0n&&a.length===2)||(k===1n&&a.length===2)||(k===2n&&a.length===3));
      if(k===0n){need(a[1]<BigInt(slots.length));known.set(n,nodes.length);nodes.push([0,Number(a[1])]);continue;}
      const children=a.slice(1);need(children.every(c=>c<n));
      if(!ready){work.push([n,true]);for(const child of children)work.push([child,false]);}
      else {need(children.every(c=>known.has(c)));known.set(n,nodes.length);nodes.push([Number(k),...children.map(c=>known.get(c))]);}}
    const root=known.get(code),forms=[];
    for(const node of nodes)forms.push(node[0]===0?slots[node[1]]:node[0]===1?neg(forms[node[1]]):and(forms[node[1]],forms[node[2]]));
    for(let mask=0n;mask<(1n<<BigInt(slots.length));mask++){
      const v=[];for(const node of nodes)v.push(node[0]===0?!!(mask&(1n<<BigInt(node[1]))):node[0]===1?!v[node[1]]:v[node[1]]&&v[node[2]]);
      need(v[root]);}
    return forms[root];
  }
  function verify(p,a) {
    try {
      need(nat(a));const codes=list(p);need(codes.length>0);const q=[];
      for(let j=0;j<codes.length;j++) {
        const [fcode,tag,acode]=fields(codes[j],3),f=parse(fcode);let expected;
        need(tag>=1n&&tag<=9n); // No nonlogical axioms in this profile.
        const prev=i=>{need(i<BigInt(j));return q[Number(i)].formula;};
        if(tag===1n){const [b,s]=fields(acode,2);expected=boolean(b,list(s).map(n=>parse(n)));}
        else if(tag===2n||tag===4n){const [b,x,t]=fields(acode,3),body=parse(b),y=parse(t,'term')[1];
          const instance=substitute(body,x,y);expected=tag===2n?imp(all(x,body),instance):imp(instance,ex(x,body));}
        else if(tag===3n){const [b,c,x]=fields(acode,3),B=parse(b),C=parse(c);need(!fv(B).has(x));expected=imp(all(x,imp(B,C)),imp(B,all(x,C)));}
        else if(tag===5n){const [t]=fields(acode,1),x=parse(t,'term')[1];expected=eq(x,x);}
        else if(tag===6n){const [b,x,s,t]=fields(acode,4),body=parse(b),u=parse(s,'term')[1],v=parse(t,'term')[1];
          expected=imp(eq(u,v),imp(substitute(body,x,u),substitute(body,x,v)));}
        else if(tag===7n){const [i,k]=fields(acode,2),left=prev(i),[A,B]=arrow(prev(k));need(equal(left,A));expected=B;}
        else if(tag===8n){const [i,x]=fields(acode,2);expected=all(x,prev(i));}
        else {const [i,x]=fields(acode,2),[A,B]=arrow(prev(i));need(!fv(B).has(x));expected=imp(ex(x,A),B);}
        need(equal(f,expected));q.push({code:fcode,formula:f});
      }
      return q[q.length-1].code===a;
    } catch { return false; }
  }
  function tryParse(n,sort='formula'){try{return parse(n,sort);}catch{return null;}}
  return {pack,list,parse:tryParse,verify,tokenCode:tk};
}
```

## 4. Reproducible tests and rejection boundaries

The test producer is read from the committed preceding artifact; it is not
edited. Its code generates the existing restricted proofs and serializes
them. The decoder above receives **only their numerical codes**, not their
formula-tree objects or the producer's Boolean checker.

```javascript
const {readFileSync}=await import('node:fs');
const previous=readFileSync('research/support-phase-2-next-17-annotated-separation-adapter.md','utf8');
const previousCode=previous.match(/```javascript\n([\s\S]*?)\n```/)[1];
const prefix=previousCode.slice(0,previousCode.indexOf('let cases=0;'));
if(!prefix)throw Error('producer extraction failed');
const producer=new Function(prefix+'\nreturn {pilot,record,pack,word,num,term,enc,tok,con,punct,eq,mem,neg,and,ex,imp,all,skeleton,bn};')();
const D=makeNumericalLogicalDecoder(), ok=(b,name)=>{if(!b)throw Error(name);};
const P=xs=>D.pack(xs.map(BigInt));
const {eq,mem,neg,and,ex,imp,all}=producer;
const N=f=>producer.num(f), T=i=>producer.pack(producer.term(i));
const line=(f,tag,annotation)=>P([N(f),tag,P(annotation)]);
const axProof=(f,tag,ann)=>P([line(f,tag,ann)]);
let acceptedPilots=0;
for(const domain of [eq(0,0),neg(eq(0,0)),mem(0,0),ex(1,mem(0,1)),and(eq(0,0),ex(0,mem(0,0)))])
  for(const z of [0,1,7,31]){const q=producer.pilot(domain,z),p=producer.pack(q.map(producer.record));
    ok(D.verify(p,N(q[q.length-1][0])),'numerical pilot');acceptedPilots++;}
const extra=[
  [imp(all(0,mem(0,1)),mem(2,1)),2,[N(mem(0,1)),0,T(2)]],
  [imp(all(0,imp(eq(1,1),mem(0,1))),imp(eq(1,1),all(0,mem(0,1)))),3,[N(eq(1,1)),N(mem(0,1)),0]],
  [imp(eq(1,2),imp(mem(1,3),mem(2,3))),6,[N(mem(0,3)),0,T(1),T(2)]]
];
for(const [f,t,a]of extra)ok(D.verify(axProof(f,t,a),N(f)),'remaining primitive schemes');
const huge=(1n<<80n)+123n, hugeFormula=eq(huge,huge);
const hugeCode=N(hugeFormula);
ok(D.verify(axProof(hugeFormula,5,[T(huge)]),hugeCode),'large variable proof');
ok(D.parse(hugeCode)[1]===huge,'large variable exactness');
const named=and(mem(0,1),ex(0,mem(0,2)));
ok(D.parse(N(named))[2][1]===0n,'nested rebinding parser');
const atoms=[];for(const i of [0,1])for(const j of [0,1])atoms.push(eq(i,j),mem(i,j));
const formulaSamples=[...atoms,...atoms.map(neg),...atoms.flatMap(f=>[ex(0,f),ex(1,f)]),...atoms.flatMap(f=>atoms.map(g=>and(f,g)))];
for(const f of formulaSamples){const n=N(f),decoded=D.parse(n);ok(decoded!==null&&N(decoded)===n,'formula encode/decode inverse');}
const rejected=[];
function rejectWord(n,name){ok(D.parse(n)===null,name);rejected.push(name);}
function rejectProof(p,a,name){ok(!D.verify(p,a),name);rejected.push(name);}
const good=N(eq(0,0)),goodLine=line(eq(0,0),5,[T(0)]),goodProof=P([goodLine]);
rejectWord(0n,'zero formula');rejectWord(1n,'missing delimiter');rejectWord(2n,'empty formula');
rejectWord(-1n,'negative input');rejectWord(3,'non-BigInt input');
const w=producer.word(eq(0,0));
rejectWord(producer.pack(w.slice(0,-1)),'missing closing parenthesis');
rejectWord(producer.pack([...w,...w]),'second root');
rejectWord(producer.pack([...w,producer.punct(2)]),'trailing token');
const malformed=[...w];malformed[1]=producer.tok(2,6);
rejectWord(producer.pack(malformed),'unknown constructor');
const badToken=[...w];badToken[1]=producer.pack([2n,2n,0n]);
rejectWord(producer.pack(badToken),'surplus token field');
rejectWord(producer.pack([producer.tok(0,0)]),'bare variable as formula');
rejectWord(T(0),'term word as formula');
rejectWord(producer.pack(producer.enc([producer.con(2)],[producer.tok(0,0)],[producer.tok(0,0)])),'bare variables as terms');
rejectWord(producer.pack(producer.enc([producer.con(1)],[producer.tok(1,1)],producer.term(0),producer.term(0))),'wrong relation symbol');
rejectWord(producer.pack(producer.enc([producer.con(2)],producer.term(0))),'wrong equality arity');
rejectWord(producer.pack(producer.enc([producer.con(3)],producer.term(0))),'term under negation');
rejectWord(producer.pack(producer.enc([producer.con(5)],producer.term(0),w)),'term instead of binder token');
rejectWord(producer.pack([producer.punct(0),producer.con(3),producer.punct(2),producer.punct(1)]),'empty child field');
rejectProof(2n,good,'empty proof');rejectProof(0n,good,'invalid proof list');
rejectProof(P([P([good,5n])]),good,'short line record');
rejectProof(P([P([good,5n,P([T(0)]),0n])]),good,'long line record');
rejectProof(axProof(eq(0,0),99,[T(0)]),good,'unknown rule tag');
rejectProof(axProof(eq(0,0),0,[0]),good,'nonlogical tag outside profile');
rejectProof(axProof(eq(0,0),5,[T(0),T(0)]),good,'surplus annotation');
rejectProof(axProof(eq(0,0),5,[]),good,'short annotation');
rejectProof(axProof(eq(0,0),5,[N(eq(0,0))]),good,'formula in term annotation');
rejectProof(axProof(eq(0,1),5,[T(0)]),N(eq(0,1)),'incorrect reflexivity endpoint');
rejectProof(axProof(eq(huge,huge+1n),5,[T(huge)]),N(eq(huge,huge+1n)),'distinct large variable indices');
const atom=N(mem(0,1));
rejectProof(axProof(mem(0,1),1,[P([0,0]),P([atom])]),atom,'non-tautological skeleton');
rejectProof(axProof(eq(0,0),1,[P([0,1]),P([good])]),good,'out-of-range Boolean letter');
rejectProof(axProof(eq(0,0),1,[P([0,huge]),P([good])]),good,'large out-of-range Boolean letter');
rejectProof(axProof(eq(0,0),1,[P([1]),P([good])]),good,'short Boolean node');
rejectProof(axProof(eq(0,0),1,[P([0,0,0]),P([good])]),good,'surplus Boolean node field');
rejectProof(axProof(eq(0,0),1,[P([0,0]),P([2])]),good,'invalid substitution formula');
const boolIdentity=producer.skeleton(imp(eq(0,0),eq(0,0)));
rejectProof(axProof(imp(eq(0,0),eq(0,0)),1,[producer.bn(boolIdentity[0]),P([good,2])]),N(imp(eq(0,0),eq(0,0))),'invalid unused substitution slot');
const cap=ex(2,mem(0,2));
rejectProof(axProof(imp(all(0,cap),ex(2,mem(2,2))),2,[N(cap),0,T(2)]),N(imp(all(0,cap),ex(2,mem(2,2)))),'capturing universal instantiation');
const dist=imp(all(0,imp(mem(0,1),eq(1,1))),imp(mem(0,1),all(0,eq(1,1))));
rejectProof(axProof(dist,3,[N(mem(0,1)),N(eq(1,1)),0]),N(dist),'distribution free-variable condition');
rejectProof(P([goodLine,line(eq(0,0),7,[1,0])]),good,'self premise');
rejectProof(P([goodLine,line(eq(0,0),7,[0,2])]),good,'forward premise');
rejectProof(P([goodLine,line(eq(0,0),8,[huge,0])]),good,'large invalid premise index');
const reflexImp=imp(mem(0,1),mem(0,1)), sk=producer.skeleton(reflexImp);
const tautLine=line(reflexImp,1,[producer.bn(sk[0]),producer.pack(sk[1].map(N))]);
const illicit=imp(ex(0,mem(0,1)),mem(0,1));
rejectProof(P([tautLine,line(illicit,9,[0,0])]),N(illicit),'existential-elimination side condition');
rejectProof(goodProof,N(eq(1,1)),'wrong final endpoint');
const noncanonical=BigInt('0b11011001'); // one declared two-bit payload 01
try {D.list(noncanonical);throw Error('noncanonical list accepted');}catch(e){ok(e.message!=='noncanonical list accepted','noncanonical sentinel');}
rejected.push('noncanonical binary payload');
console.log(JSON.stringify({acceptedPilots,additionalLogicalAxioms:extra.length,formulaRoundTrips:formulaSamples.length,largeVariableExact:true,nestedRebinding:true,rejections:rejected.length,rejected},null,2));
```

Recorded local execution: 20 serialized pilot proofs, three additional
logical axiom schemes, 96 formula encode/decode inverse cases, the exact
index 2^80+123, nested rebinding, and all 44 expected rejections passed.
This is local implementation testing, not independent review or a machine
verification of the PA argument.

## 5. What closes, and what does not

The local numerical-to-formula/proof adapter is now specified end to end,
with a proof of its arithmetic construction and checker correspondence.
The executable decoder independently checks the previously generated logical
proofs after serialization. It does not rely on their producer's acceptance
decision. This closes the limited adapter omission recorded in the preceding
support, subject to its explicitly selected token/record realization.

It does **not** close any of these obligations:

- The exact nonlogical ZF certificate recognizer and generated schema proofs
  for arbitrary matrices; tag 0 remains rejected here.
- Internal set-word quotation, finite-assignment satisfaction/value/padding
  proofs, and the Def-membership proof.
- Least-witness-stage, ordinal-bound, and finite-attempt reflection templates,
  and their uniform PA correctness for every input formula.
- The complete Separation constructor, its Replacement composition, the
  fixed translated AC/GCH blocks, or the formal relative-consistency consumer.

The next mathematical authoring unit is still the finite-word/satisfaction
template library or the least-witness/finite-attempt reflection library,
not another expansion of the tested z=z subfamily. Preserve the Replacement
input ∃z(z∈a∧φ(z,w,p̄)) **before** L-relativization. Nothing in numerical
parsing licenses a second relativization, internal Infinity in Lω, a full
transitive-model premise, or a change to consistency strength.

## 6. Sources and validation

Local definitions checked: `def-effective-theory-and-certified-godel-numbering`,
`def-set-coded-terms-and-formulas`, `def-set-coded-formal-derivation`,
`lem-unique-parsing-of-set-coded-syntax`,
`lem-primitive-recursive-syntax-and-proof-checking`,
`lem-certified-syntax-coding-operations-are-primitive-recursive`, and
`thm-primitive-recursive-numeralwise-representability`. All named IDs were
verified present with status `published`; that file-state observation is not
a new certification or whole-dependency audit.

[Moschovakis, *Lecture Notes in Logic*, Propositions 1B.4–1B.5 and Lemma 4A.9](https://www.math.ucla.edu/~ynm/lectures/lnl.pdf)
was successfully retrieved for unique parsing and primitive-recursive syntax
and proof checking. His encoding and equality axioms are not substituted for
the local ones. The explicit sentinel realization, decoder and rejection
tests above are local work; the source is not represented as a checked proof
of this implementation or of U-AX.
