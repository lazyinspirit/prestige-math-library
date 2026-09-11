# Finite-word quotation and assignment templates: exact syntax, bounded closure

Date: 2026-09-12 (Australia/Sydney).

Isolated support, not an item, certificate, accepted proof, or engine input.
This document leaves reflection, GCH, full Separation, and U-AX open. It
consumes the [annotated adapter](support-phase-2-next-17-annotated-separation-adapter.md)
and [numerical decoder](support-phase-2-next-17-numerical-logical-proof-decoder.md),
not a different coding convention. The [Separation kernel](support-phase-2-next-17-separation-constructor-kernel.md),
[formal translation](support-phase-2-next-17-formal-proof-translation.md), and
[U-AX/U-Cohen](support-phase-2-next-17-uax-ucohen.md) packages were read fully.

The new bounded deliverable is an executable, deterministic quotation and
assignment-evaluation **formula** constructor, with exact pure-language
expansions and finite graph traces. The mathematical finite-assignment,
value, and padding comparisons are proved below. The arithmetic theorem
proved here concerns construction, well-formedness, and syntax/trace
identities, **not acceptance of generated nonlogical proof lines**. Section 7
states the remaining finite imports needed to make this a ZF proof compiler.

## 1. Three sorts remain distinct

An input number f is the sentinel code of the completely delimited word of
a membership formula ψ. The decoder's token realization is unchanged:
variable (0,i), membership (1,0), constructor (2,j), punctuation (3,j).
The corresponding set tokens are Kuratowski pairs of finite ordinals.
The word itself is the finite function graph

    wψ = { <k, tokenψ(k)> : k < length(wordψ) }.

Neither f nor wψ is a term in pure membership logic. The quotation formula
Qψ(e) constructed below names wψ using only variables, equality, membership,
negation, conjunction, and existential quantification. Decimal numbers in
the mathematical description are metanotation, never constant symbols in
the emitted formula. No assertion places the whole graph of a satisfaction
relation in an arbitrary constructible level.

Use `def-set-coded-terms-and-formulas` and
`def-set-signature-and-finite-syntax-strings` for the actual finite-word
contract. In particular variable terms are enc(var,vᵢ), not naked tokens;
child formulas are inserted as complete words, not pointers or tree tags.

## 2. A fully specified quotation graph and its defining formula

Use the following relational formulas, with all displayed abbreviation
occurrences expanded and every auxiliary binder fresh:

    Empty(u)       := ∀t ¬(t∈u).
    Pair(a,b,u)    := ∀t(t∈u ↔ (t=a ∨ t=b)).
    Union(a,u)     := ∀t(t∈u ↔ ∃b(b∈a ∧ t∈b)).
    OP(a,b,p)      := ∃r∃s(Pair(a,a,r) ∧ Pair(a,b,s) ∧ Pair(r,s,p)).

The construction list h has only nodes E, P(r,s), U(r), with predecessor
indices strictly earlier than the node. Start with E. Define the following
macros on node references (not extra set operations):

    singleton(r) = P(r,r)
    join(r,s)    = U(P(r,s))
    successor(r) = join(r,singleton(r))
    ordered(r,s) = P(singleton(r),P(r,s))
    insert(g,r)  = join(g,singleton(r)).

Build ordinal references by successor from E, caching the previously built
references. For each decoded word token L(k,j), build ordered(ord(k),ord(j)).
Starting with g=E, at position t insert ordered(ord(t),tokenRef) into g.
This is an explicit E/P/U program for precisely the finite function graph,
including all delimiters and field punctuation.

For h of length n, reserve distinct variables u₀,…,uₙ₋₁, none equal to the
output variable e. Let Rᵢ be its actual Empty, Pair, or Union formula. With
conjunction associated to the right, and final node reference r, set

    Q_h(e) := ∃u₀ ... ∃uₙ₋₁ (R₀ ∧ (... ∧ (Rₙ₋₁ ∧ uᵣ=e)...)).

The executable constructor below fixes precisely this binder/association
policy. For an ordinal quote it uses the same construction and selects the
ordinal node as r. No separate numeral syntax is introduced.

**Existence and uniqueness in ambient ZF.** Empty exists by Separation
from any set (a nonempty first-order universe supplies a set); Pairing and
Union give the other operations. Extensionality makes all three outputs
unique. Induct on n, successively introducing each unique output and then
the existential node variables. Any two satisfying node lists agree at E;
agreement on preceding inputs and operation uniqueness gives agreement at
each new node. Hence ∃!e Q_h(e). Induction on the ordinal-building loop
identifies ord(k) with the von Neumann ordinal k. Kuratowski pair injectivity
then identifies every inserted graph entry and its unique coordinate.
Distinct finite ordinal positions prevent conflicting values; repeated
tokens cause no difficulty. Thus Qψ names exactly wψ, whose term/formula
membership follows by the five parsed formula constructors and the variable
term constructor. This is a mathematical proof, not a supplied annotated
derivation in the repository calculus.

The program is primitive recursive even if a binary-coded variable index i
causes i successor steps. There is no feasible-size or elementary-size claim.
The test implementation has ordinary host memory limits; it does not impose
an arithmetic cutoff or replace a large index by a floating-point number.

## 3. Exact finite graph predicates and update proof

Coordinates and updates use Kuratowski graph coding, not sequence trees:

    C(s,i,b) := ∃p(OP(i,b,p) ∧ p∈s).

    U(s,i,b,t) := ∀p(p∈t ↔
                  ((p∈s ∧ ¬∃c OP(i,c,p)) ∨ OP(i,b,p))).

For a quoted finite ordinal m, define T(A,m,s) by the conjunction of:

    ∀p(p∈s → ∃i∃b(i∈m ∧ b∈A ∧ OP(i,b,p))),
    ∀i(i∈m → ∃b(b∈A ∧ C(s,i,b))),
    ∀i∀b∀c((C(s,i,b) ∧ C(s,i,c)) → b=c).

Thus T says exactly that s is an A-valued function with domain m. The final
clause intentionally ranges over all i,b,c; it does not ignore junk pairs.
The first clause excludes non-pair elements and coordinates outside m.
These are finite fixed membership formulas after expanding OP and C.

If T(A,m,s), i∈m and b∈A, Separation removes the old i-pair from s;
Pairing/Union insert <i,b>. Extensionality proves uniqueness of t satisfying
U. For any j,c, pair injectivity and the defining biconditional give exactly

    C(t,j,c) ↔ ((j=i ∧ c=b) ∨ (j≠i ∧ C(s,j,c))).       (UPDATE)

Consequently T(A,m,t). No AC or Replacement is needed for this single
update. For arbitrary s, the formula U still defines a unique set by this
construction, but the coordinate identity is only asserted under T.

Finite tuples from a nonempty A exist by finite Pairing/Union constructions.
An arbitrary set A need not be transitive, and need not contain its tuples,
their coordinates as ordinals, or these graph-operation witnesses. All
graph construction and quantifiers in this section are **ambient**, not
relativized to A. Confusing these two uses would invalidate the bridge.

## 4. Generated EVAL and VALUE, including shadowed binders

For a fixed ψ, let m=max(1,1+max Var(ψ)), counting **bound** occurrences.
For each numerical index i occurring in ψ let Qᵢ name the finite ordinal i.
Define the generated open formula Eψ(A,s) recursively:

    E_(vi ⋈ vj) := ∃i*∃j*∃b∃c
       (Qᵢ(i*) ∧ Qⱼ(j*) ∧ C(s,i*,b) ∧ C(s,j*,c) ∧ b⋈c),
    E_(¬θ)      := ¬Eθ,
    E_(θ∧η)     := Eθ ∧ Eη,
    E_(∃vi θ)   := ∃i*∃b∃t
       (Qᵢ(i*) ∧ b∈A ∧ U(s,i*,b,t) ∧ Eθ(A,t)).

Here ⋈ is equality or membership. Each expansion allocates fresh indices
above every input/interface index, retaining A,s and the intended local
b,t bindings. Freshness is enforced by a shared monotone allocator.
There is no generalized predicate slot, implicit capture-avoiding rewrite,
or membership numeral among the output terms. FV(Eψ)⊆{A,s}.

Let Sat_m(A,wψ,s) be the ambient finite-assignment recursion of
`lem-finite-tuple-satisfaction-is-absolute`, proof step 2. Its mathematical
definition is recursion on subformulas into P(A^m): projections for atoms,
complement/intersection, and the update operation for existential witnesses.
This invocation uses its **ambient construction**, not the lemma's
transitive-ZF-model hypothesis to infer anything about an arbitrary Lλ.

For T(A,m,s) and A≠∅, constructor induction proves

    Sat_m(A,wψ,s) ↔ Eψ(A,s).                              (EVAL)

At atoms quote uniqueness and graph coordinates identify the same two
values. Negation/conjunction use the child comparisons. At ∃vᵢ, i<m by
the chosen bound. Every b∈A has exactly the updated tuple supplied by
UPDATE, so the child comparison transfers each witness in both directions.
The bound m remains unchanged, including below a rebinding of vᵢ.

For clarity, the parallel VALUE induction is on an **environment map** ρ
from the free indices of the current subformula to distinct protected
variable slots. At ∃vᵢ introduce a fresh witness slot b and use the map
ρ[i↦b] for the child; other slots are untouched. Renaming the original
binder to b is alpha conversion with its explicit adapter proof, not
simultaneous substitution beneath a binder for i. Under T(A,m,s), values
in A, and C(s,j,ρ(j)) for j∈FV(ψ), this gives

    Eψ(A,s) ↔ ψ^A[ρ].                                   (VALUE)

At the existential step UPDATE supplies the child's i-coordinate, and its
other free coordinates retain their values. If i is not free in the child,
there is no additional coordinate premise to discharge. This also handles
vᵢ rebound again deeper inside. Both directions use the same actual witness
b∈A. The right side is a syntactically produced, hygienically renamed
set-relativization, not an evaluation of arbitrary universe truth.

These are complete fixed-formula mathematical inductions using the stated
graph and satisfaction definitions. They are not yet the uniform assertion
PA ⊢ Prf_ZF(B(f),Bridge(f)); a mathematical invocation of a clause is not
an accepted imported proof record. Section 7 makes that gap precise.

## 5. Padding and the exact Def endpoint

For a finite tuple a:k→A and k≤m, select one d∈A and define

    pad_m(a,d) = a ∪ { <j,d> : k≤j<m }.

Finite graph construction gives a function m→A, including k=0. If two
m-tuples agree on FV(ψ), constructor induction proves agreement of their
finite satisfaction values: at ∃vᵢ update both by the same b, so they agree
on FV(child). The same induction compares different adequate lengths
m,m′ by agreement on free coordinates; both lengths exceed all indices
in the relevant formula. This proves independence of the padding and of
the adequate bound.

To compare with the repository's ordinary satisfaction, extend a finite
tuple to ω by the constant d beyond m, using ambient Replacement. The
clauses in `thm-set-structure-satisfaction-recursion` identify its value
with Sat_m, and `lem-satisfaction-coincidence` removes the chosen extension.
This is exactly the finite-tuple convention consumed by
`def-definable-subsets-of-a-membership-structure`.

For χ(v₀,…,vᵣ₊₁)=v₀∈v₁∧φ*(v₀,v₂,…,vᵣ₊₁), take the tuple
(x,a,p₁,…,pᵣ), length r+2, and choose

    m=max(r+2,1+max Var(χ)).

The r+2 term matters when some declared parameters are unused. For x∈A,
pad by d=x. The parameter tuple in Def has length r+1, namely (a,p̄),
**not m−1**: unused padding is not an extra list of structure parameters.
The case r=0 still has the bounding-set parameter a. Since A is nonempty,
an empty a causes no failure; the defined subset is empty. This argument
does not require internal Infinity in A, even if A=Lω. It does not show
that A contains its own satisfaction tables or their finite histories.

## 6. Executable reference and reproducible bounded tests

This block imports only the decoder and the preceding producer from the
existing support files, read-only. Q/E formulas are serialized and parsed
by the numerical decoder; the established logical pilot is checked again
after serialization. The HF test model is an extensional interning of
finite sets, used to evaluate E/P/U construction traces and finite-carrier
satisfaction. It is **not a finite model of ZF**, nor is it used to evaluate
unbounded quantifiers of Q or the full E formula as though it were ZF.

```javascript
const {readFileSync}=await import('node:fs');
const blocks=p=>[...readFileSync(p,'utf8').matchAll(/```javascript\n([\s\S]*?)\n```/g)].map(m=>m[1]);
const old=blocks('research/support-phase-2-next-17-annotated-separation-adapter.md')[0];
const producer=new Function(old.slice(0,old.indexOf('let cases=0;'))+'\nreturn {pilot,record,pack,num,eq,mem,word};')();
const decoderSource=blocks('research/support-phase-2-next-17-numerical-logical-proof-decoder.md')[0];
const D=new Function(decoderSource+'\nreturn makeNumericalLogicalDecoder();')();
const need=(b,msg)=>{if(!b)throw Error(msg);};
const eq=(a,b)=>['eq',a,b], mem=(a,b)=>['rel',a,b], neg=a=>['neg',a];
const and=(a,b)=>['and',a,b], ex=(x,a)=>['exists',x,a];
const imp=(a,b)=>neg(and(a,neg(b))), iff=(a,b)=>and(imp(a,b),imp(b,a));
const or=(a,b)=>neg(and(neg(a),neg(b))), all=(x,a)=>neg(ex(x,neg(a)));
const conj=xs=>xs.reduceRight((r,x)=>r===null?x:and(x,r),null);
const bind=(xs,f)=>xs.reduceRight((r,x)=>ex(x,r),f);
function vars(f){if(f[0]==='eq'||f[0]==='rel')return [f[1],f[2]];
  if(f[0]==='neg')return vars(f[1]);if(f[0]==='and')return [...vars(f[1]),...vars(f[2])];return [f[1],...vars(f[2])];}
function free(f){if(f[0]==='eq'||f[0]==='rel')return new Set([f[1],f[2]]);
  if(f[0]==='neg')return free(f[1]);if(f[0]==='and')return new Set([...free(f[1]),...free(f[2])]);const s=free(f[2]);s.delete(f[1]);return s;}
const freshAfter=xs=>{let n=xs.reduce((a,b)=>a>b?a:b,0n)+1n;return ()=>n++;};
function traceBuilder(){
  const h=[['E']],os=[0];const put=n=>(h.push(n),h.length-1);
  const pair=(a,b)=>put(['P',a,b]), union=a=>put(['U',a]);
  const single=a=>pair(a,a), join=(a,b)=>union(pair(a,b));
  const ordered=(a,b)=>pair(single(a),pair(a,b));
  const ordinal=n=>{need(typeof n==='bigint'&&n>=0n,'ordinal index');
    while(BigInt(os.length)<=n){const r=os[os.length-1];os.push(join(r,single(r)));}
    return os[Number(n)];}; // n is now bounded by this already allocated array.
  function word(tokens){let g=0;tokens.forEach((t,i)=>{const [k,j]=D.list(t);
    const token=ordered(ordinal(k),ordinal(j));g=join(g,single(ordered(ordinal(BigInt(i)),token)));});return g;}
  return {h,ordinal,word};
}
function predicates(next){
  function empty(u){const t=next();return all(t,neg(mem(t,u)));}
  function pair(a,b,u){const t=next();return all(t,iff(mem(t,u),or(eq(t,a),eq(t,b))));}
  function union(a,u){const t=next(),b=next();return all(t,iff(mem(t,u),ex(b,and(mem(b,a),mem(t,b)))));}
  function op(a,b,p){const r=next(),s=next();return bind([r,s],conj([pair(a,a,r),pair(a,b,s),pair(r,s,p)]));}
  function coord(s,i,b){const p=next();return ex(p,and(op(i,b,p),mem(p,s)));}
  function update(s,i,b,t){const p=next(),c=next();return all(p,iff(mem(p,t),or(and(mem(p,s),neg(ex(c,op(i,c,p)))),op(i,b,p))));}
  return {empty,pair,union,op,coord,update};
}
function quoteTrace(h,r,e,next){const u=h.map(()=>next()),P=predicates(next);
  const rows=h.map((n,j)=>n[0]==='E'?P.empty(u[j]):n[0]==='P'?P.pair(u[n[1]],u[n[2]],u[j]):P.union(u[n[1]],u[j]));
  return bind(u,conj([...rows,eq(u[r],e)]));}
function quotation(f,e){const tree=D.parse(f);if(tree===null||typeof e!=='bigint'||e<0n)return null;
  const b=traceBuilder(),r=b.word(D.list(f)),next=freshAfter([...vars(tree),e]);
  return {h:b.h,r,formula:quoteTrace(b.h,r,e,next)};}
function evaluation(f,A,s){const tree=D.parse(f);if(tree===null||typeof A!=='bigint'||typeof s!=='bigint'||A<0n||s<0n||A===s)return null;
  const next=freshAfter([...vars(tree),A,s]),P=predicates(next);
  function qord(i,e){const b=traceBuilder(),r=b.ordinal(i);return quoteTrace(b.h,r,e,next);}
  function go(t,env){if(t[0]==='eq'||t[0]==='rel'){
      const i=next(),j=next(),b=next(),c=next();return bind([i,j,b,c],conj([qord(t[1],i),qord(t[2],j),P.coord(env,i,b),P.coord(env,j,c),t[0]==='eq'?eq(b,c):mem(b,c)]));}
    if(t[0]==='neg')return neg(go(t[1],env));if(t[0]==='and')return and(go(t[1],env),go(t[2],env));
    const i=next(),b=next(),u=next();return bind([i,b,u],conj([qord(t[1],i),mem(b,A),P.update(env,i,b,u),go(t[2],u)]));}
  return go(tree,s);
}
function hf(){const sets=[],ids=new Map();
  function set(xs){const a=[...new Set(xs)].sort((x,y)=>x-y),key=a.join(',');
    if(!ids.has(key)){ids.set(key,sets.length);sets.push(a);}return ids.get(key);}
  const empty=set([]), pair=(a,b)=>set([a,b]), union=a=>set(sets[a].flatMap(x=>sets[x]));
  const op=(a,b)=>pair(pair(a,a),pair(a,b));const os=[empty];
  const ord=n=>{while(os.length<=n){const a=os.at(-1);os.push(set([...sets[a],a]));}return os[n];};
  function run(h){const values=[];for(let j=0;j<h.length;j++){const n=h[j];
    need(n[0]==='E'?n.length===1:n[0]==='P'?n.length===3:n[0]==='U'&&n.length===2,'trace tag/arity');
    for(const i of n.slice(1))need(Number.isInteger(i)&&i>=0&&i<j,'trace predecessor');
    values.push(n[0]==='E'?empty:n[0]==='P'?pair(values[n[1]],values[n[2]]):union(values[n[1]]));}return values;}
  return {sets,set,empty,pair,union,op,ord,run};
}
const H=hf();
const atom=(tag,i,j)=>[tag,BigInt(i),BigInt(j)];
const atoms=[];for(let i=0;i<2;i++)for(let j=0;j<2;j++)atoms.push(atom('eq',i,j),atom('rel',i,j));
const samples=[...atoms,...atoms.map(neg),...atoms.map(t=>ex(0n,t)),...atoms.flatMap(a=>atoms.map(b=>and(a,b))),
  ex(1n,and(mem(0n,1n),ex(1n,eq(1n,1n)))),ex(7n,eq(7n,7n))];
let quotes=0,evalSyntax=0;
for(const tree of samples){const f=producer.num(tree),q=quotation(f,90n),values=H.run(q.h);
  const expected=H.set(D.list(f).map((t,i)=>{const [k,j]=D.list(t);return H.op(H.ord(i),H.op(H.ord(Number(k)),H.ord(Number(j))));}));
  need(values[q.r]===expected,'wrong set-word');need([...free(q.formula)].every(v=>v===90n),'quote hygiene');
  need(D.parse(producer.num(q.formula))!==null,'quote grammar');quotes++;
  const E=evaluation(f,0n,1n);need([...free(E)].every(v=>v===0n||v===1n),'eval hygiene');
  need(D.parse(producer.num(E))!==null,'eval grammar');evalSyntax++;
}
// Independent finite-assignment semantics: graph coordinates versus environment maps.
const carriers=[[H.ord(0)],[H.ord(0),H.ord(1)],[H.ord(1),H.ord(2)]];
const graph=a=>H.set(a.map((b,i)=>H.op(H.ord(i),b)));
function components(p){const candidates=[...new Set(H.sets[p].flatMap(x=>H.sets[x]))];
  for(const a of candidates)for(const b of candidates)if(H.op(a,b)===p)return [a,b];throw Error('not an ordered pair');}
function coordinate(g,i){for(const p of H.sets[g]){const [a,b]=components(p);if(a===H.ord(i))return b;}throw Error('missing coordinate');}
// This bounded HF decoding is test machinery; production coordinate is the formula C.
function upd(g,i,b){return H.set([...H.sets[g].filter(p=>components(p)[0]!==H.ord(i)),H.op(H.ord(i),b)]);}
function sat(t,A,g){if(t[0]==='eq'||t[0]==='rel'){const b=coordinate(g,Number(t[1])),c=coordinate(g,Number(t[2]));return t[0]==='eq'?b===c:H.sets[c].includes(b);}
  if(t[0]==='neg')return !sat(t[1],A,g);if(t[0]==='and')return sat(t[1],A,g)&&sat(t[2],A,g);return A.some(b=>sat(t[2],A,upd(g,Number(t[1]),b)));}
function value(t,A,env){if(t[0]==='eq'||t[0]==='rel'){const b=env.get(t[1]),c=env.get(t[2]);return t[0]==='eq'?b===c:H.sets[c].includes(b);}
  if(t[0]==='neg')return !value(t[1],A,env);if(t[0]==='and')return value(t[1],A,env)&&value(t[2],A,env);
  return A.some(b=>{const e=new Map(env);e.set(t[1],b);return value(t[2],A,e);});}
let comparisons=0,padding=0,updates=0,emptyTuplePadding=0,unusedPadding=0;
for(const A of carriers)for(const t of samples){const m=1+Number(vars(t).reduce((a,b)=>a>b?a:b,0n));
  for(const x of A)for(const y of A){const a=Array(m).fill(x);if(m>1)a[1]=y;const g=graph(a),env=new Map(a.map((v,i)=>[BigInt(i),v]));
    need(sat(t,A,g)===value(t,A,env),'VALUE comparison');comparisons++;
    for(const d of A){const long=graph([...a,d,d]);need(sat(t,A,g)===sat(t,A,long),'padding invariance');padding++;}
    for(let i=0;i<m;i++)for(const b of A){const u=upd(g,i,b);for(let j=0;j<m;j++)need(coordinate(u,j)===(j===i?b:a[j]),'UPDATE identity');updates++;}
  }}
for(const A of carriers){
  const sentence=ex(0n,eq(0n,0n));
  for(const d of A){need(sat(sentence,A,graph([d]))===true,'empty tuple padding');emptyTuplePadding++;}
  const formula=ex(7n,and(eq(0n,0n),eq(7n,7n)));
  for(const x of A)for(const d of A){const padded=Array(8).fill(d);padded[0]=x;
    need(sat(formula,A,graph(padded))===value(formula,A,new Map([[0n,x]])),'unused coordinate padding');unusedPadding++;}
}
let rejections=0;for(const f of [0n,1n,2n]){need(quotation(f,0n)===null&&evaluation(f,0n,1n)===null,'malformed input');rejections++;}
need(evaluation(producer.num(eq(0n,0n)),0n,0n)===null,'interface collision');rejections++;
try{H.run([['E'],['P',0,1]]);throw Error('accepted self reference');}catch(e){need(e.message!=='accepted self reference','self ref rejected');rejections++;}
const pilot=producer.pilot(producer.eq(0,0),0),proof=producer.pack(pilot.map(producer.record));
need(D.verify(proof,producer.num(pilot.at(-1)[0])),'consumed numerical logical checker');
console.log(JSON.stringify({quotes,evalSyntax,comparisons,padding,updates,emptyTuplePadding,unusedPadding,rejections,logicalPilot:true}));
```

Run the block by reading this Markdown file, extracting its sole JavaScript
fence, and evaluating it as an async function from the repository root. It
does not write files. The tests compare actual extensional HF graph values,
not merely a list serialization round trip. Finite-carrier cases include
a singleton, a transitive two-element carrier, and the nontransitive carrier
{1,2}; the latter prevents accidentally assuming transitivity of A. Nested
rebinding and a bound variable absent from the free-variable interface are
included. Tests do not prove the uniform PA assertion or ZF soundness.

Recorded final execution: 90 quotation graph/value checks and numerical
formula parses; 90 E-formula parsing/hygiene checks; 810 VALUE comparisons;
1,530 adequate-length padding comparisons; 2,992 UPDATE checks; five
empty-tuple padding cases; nine unused-coordinate padding cases; five
expected rejections; and the serialized logical pilot all passed. The seven
listed item IDs and five relative support links exist. Whitespace checking
of this new file produced no diagnostics. No independent review is claimed.

## 7. Arithmetic invariants and the remaining proof-library gap

The natural-number implementation uses coded finite lists throughout;
JavaScript array indices merely realize already bounded positions in tests.
Decode f first and reject malformed input (null here; use numerical 0 for
a rejected output code). Quotation loops over decoded tokens, their finite
ordinal payloads, and node lists. Its state updates use fixed primitive
recursive append/concatenation functions. Formula construction expands
finite relational templates with a monotone fresh-variable counter.
The variable allocator is independent of the ordinals denoted by quotes.

PA, for the specified PA-total primitive-recursive graph definitions, proves
by induction on these loops the following arithmetic assertions:

1. Every trace is an E/P/U list with earlier predecessors, and its symbolic
   expansion has exactly the stated ordinal/token/position construction.
2. Every emitted Q/E code parses in the existing numerical decoder;
   FV(Qψ(e))⊆{e}, FV(Eψ(A,s))⊆{A,s}. All auxiliary binders exceed the
   reserved interfaces and are distinct at their allocation sites.
3. Quotation emits exactly the full decoded word's graph construction;
   E follows precisely the five displayed recursive equations, with the
   same environment variable at Boolean children and the updated variable
   at an existential child. These are syntactic identities, not truth claims.

For (1), retain the trace prefix and ordinal-reference table; predecessor
checks and the successor equation are preserved on every append. For (2),
induct first on each fixed relational expansion, then on the node-list
existential closure and the formula parse tree. The allocator supplies
capture-freedom; intentional binding of b,t in the existential E clause
leaves only A,s free. For (3), token-list induction verifies the literal
insertion sequence, and constructor induction verifies E's cases. These
are ordinary finite syntax/history inductions available in PA, not an
application of representability alone. No satisfaction calculation in a
set universe occurs in PA's verification.

**What these assertions do not say.** There is no new function B with a
proved Prf_ZF(B(f),Bridge(f)) judgment in this artifact. The exact remaining
finite nonlogical-template task, before that judgment can be claimed, is:

- Fix an expanded membership formula for the repository's uniformly
  definable Sat_m relation and for the finite-tuple satisfaction endpoint.
  The current content asserts uniform definability but does not provide a
  literal formula or accepted numerical clause proofs for this realization.
- Supply accepted finite proof blocks for Empty/Pair/Union unique existence,
  ordered-pair injectivity, graph formation/update, word-constructor and
  formula-membership identities, and all five Sat_m clauses. Include the
  finite-to-infinite extension/coincidence block, or prove an equivalent
  exact finite-tuple endpoint and its definitional bridge.
- Expand their actual ambient schema uses with canonical certificates and
  extend the logical-only verifier's tag-0 boundary by the **exact** ZF
  certificate recognizer. Do not reinterpret tag 0 as a theorem-name oracle.
- Feed those checked blocks to the annotated adapter's PC/EM/CG/CEM/EA and
  schema-specialization programs; induct on quotation nodes and formula
  nodes with a CheckedPrefix and exact-endpoint table. This is the additional
  proof-prefix invariant needed beyond the formula/trace invariants above.

The least small unit still absent at that boundary is a selected pure Sat_m
formula plus its five accepted finite clause blocks (and their finite-word
constructor side conditions), not another numerical decoder. The operation
blocks and tag-0 implementation also remain prerequisite work; no fixed
proof constant is claimed supplied merely because its theorem is familiar.
There is no evidence here that this work is impossible or independent of PA.

Even a completed BRIDGE would leave the least-stage/finite-attempt
L-reflection program and hierarchy/Def proof blocks open. Replacement must
continue to call the eventual Separation constructor on the **unrelativized**
matrix ∃z(z∈a∧φ(z,w,p̄)), not φ^L. The GCH derivation, arbitrary-limit
history absoluteness, full U-AX, and Cohen application remain separate.
No consistency-strength change or full-transitive-model premise is licensed.

## 8. Primary source, local IDs, and scope of closure

[Paulson, §§7.2–7.5](https://arxiv.org/html/2104.12674v1#S7.SS2)
was read for relational definitions and the separation of formula membership,
environment typing, satisfaction equivalence, and reflection. His formulas
use de Bruijn syntax; they are not this repository's tagged finite words or
proof records. The code and detailed graph constructions here are local
deductions, not attributed to an imported implementation. His discussion
supports keeping internalization distinct from absoluteness and full
metatheoretic proof translation.

The following actual item files were read and their IDs checked:

- `def-set-coded-terms-and-formulas`
- `def-set-signature-and-finite-syntax-strings`
- `def-definable-subsets-of-a-membership-structure`
- `lem-finite-tuple-satisfaction-is-absolute`
- `thm-set-structure-satisfaction-recursion`
- `lem-satisfaction-coincidence`
- `thm-relativization-and-set-satisfaction`

Closure here means: exact quote/E formula programs, finite-graph semantic
lemmas, finite-tuple padding comparison, and the stated PA syntax/trace
invariants. It does not mean an accepted item, a checked nonlogical proof
compiler, or closure of any currently escalated batch-11 consumer. No new
item ID is proposed or silently imported. All linked support files remain
support rather than certified prerequisites.
