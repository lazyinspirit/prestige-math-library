# Annotated Separation adapter: a checked logical slice and the exact set-theory gap

Date: 2026-09-12 (Australia/Sydney).

Isolated support only. No item, manifest, receipt, state, or existing support
document is modified. This is not certification or a claim that full U-AX is
closed. Read alongside the [formal translation](support-phase-2-next-17-formal-proof-translation.md),
[U-AX](support-phase-2-next-17-uax-ucohen.md), and
[Separation kernel](support-phase-2-next-17-separation-constructor-kernel.md)
packages, all read fully for this investigation.

The new material is concrete: a numerical record adapter; annotated logical
macros with a uniform arithmetic preservation proof; and a complete constructor
for the Separation matrix z=z, including its **literal raw relativization**.
An executable conformance test is included below. This subfamily is not a
replacement for Separation on arbitrary matrices. Section 7 identifies the
remaining set-theoretic template obligations without hiding them in an import.

## 1. What the local interface fixes, and what this adapter instantiates

`def-effective-theory-and-certified-godel-numbering` fixes the sentinel list
encoding. `def-set-coded-formal-derivation` and
`lem-primitive-recursive-syntax-and-proof-checking` fix the logical rules and
the annotation fields that must be checked. They do **not** assign numerical
values to every tag or fix the order of every record field. An inspection of
the relevant tools found no executable first-order ZF proof checker supplying
those missing values; the content validator is not such a checker.

The following is an explicit realization of that published interface. It
preserves the sentinel encoding and the actual finite-word syntax; it is
not a claim that these integers were previously mandated. If a consumer has
already selected another realization, its token/record/certificate adapter
and PA preservation proof must be supplied, not silently identified with this
one. Likewise the published pairing injection for Henkin syntax is not the
sentinel numbering.

Write L(a₀,…,aₖ₋₁) for the published sentinel number. Use these token codes:

| Token | Numerical code | Set-token realization |
|---|---|---|
| variable symbol vᵢ | L(0,i) | Kuratowski pair ⟨0,i⟩ |
| membership relation symbol | L(1,0) | ⟨1,0⟩ |
| constructor var, rel, eq, neg, and, exists | L(2,j), j=0,…,5 respectively | ⟨2,j⟩ |
| punctuation left parenthesis, right parenthesis, comma | L(3,j), j=0,1,2 | ⟨3,j⟩ |

Here finite ordinals are sets in the right column; L is the arithmetic list
function in the middle column. The underlying membership signature has one
binary relation and no constants/functions. These are disjoint alphabet
tags, not extra nonlogical symbols. Unused const/fun tags may be reserved
separately if an adapter for the full signature is later needed.

Serialize formulas by the exact enc operation of
`def-set-coded-terms-and-formulas`: punctuation between fields, token fields
as singleton words, child expressions as their whole words. In particular,
a variable **term** is enc(var,vᵢ), not the bare variable token. A numerical
word is L of its token numbers. Its corresponding set-word is the finite
function graph taking each finite ordinal position to the right-column token.
The graph is not the arithmetic numeral denoting its sentinel number.

A line record is L(formula,tag,annotation), with zero-based premise indices:

| tag | annotation fields, encoded as a sentinel list |
|---|---|
| 0: nonlogical axiom | certificate |
| 1: Boolean axiom | Boolean skeleton, list of substituted formula codes |
| 2: universal instantiation | body, variable index, term code |
| 3: distribution | antecedent, consequent, variable index |
| 4: existential introduction | body, variable index, term code |
| 5: reflexivity | term code |
| 6: equality substitution | body, variable index, first term, second term |
| 7: MP | antecedent-line index, implication-line index |
| 8: generalization | premise index, variable index |
| 9: restricted existential elimination | premise index, variable index |

A Boolean skeleton uses L(0,i) for its i-th letter, L(1,b) for negation,
and L(2,b,c) for conjunction; its context distinguishes it from token codes.
All displayed implications/universals/equivalences are expanded into the
published primitive syntax before any comparison.

For ZF, use certificates L(0,j) for the six fixed axiom sentences in their
published order, L(1,f,z) for canonical Sep(f,z), and L(2,f,z,w) for canonical
Rep(f,z,w). Reconstruct the exact sentence and compare it to the line.
`def-coded-first-order-zf-theory` controls fresh indices, uniqueness expansion,
parameter order and universal closure. This does not add Empty Set as a
seventh axiom or replace the stated Power Set/Infinity formulas.

## 2. Primitive annotated building blocks

All primitives reject invalid inputs with 0. Proof lists themselves use 2
for the empty-list code; no nonempty accepted proof has code 0. Abbreviate
already available proof endpoints by p:A, never by an additional axiom.

**PC.** Given endpoints pᵢ:Aᵢ and a specified Boolean tautology skeleton
for A₁→(…→(Aₖ→B)…), emit its scheme-1 line with the actual substitution
list and then k MP lines. The last endpoint is B. The skeleton is a
propositional certificate, not a call to first-order completeness. With k=0
this is one axiom line. The fixed Boolean patterns below have finite truth
tables; inserting formulas for their letters does not change those tables.

**EM(p,x): existential monotonicity.** For p:A→B, append:

| local line | formula | annotation |
|---|---|---|
| 0 | B→∃x B | scheme 4: body B, variable x, term x |
| 1 | (A→B)→((B→∃x B)→(A→∃x B)) | scheme 1: composition skeleton |
| 2 | (B→∃x B)→(A→∃x B) | MP(p,1) |
| 3 | A→∃x B | MP(0,2) |
| 4 | ∃x A→∃x B | rule 9: premise 3, variable x |

The last side condition holds because x is not free in ∃x B. Identity
substitution B[x/x] is literal and free-for. There is no restriction on
x occurring in A or B.

**NEX(p,x).** From p:¬A produce ¬∃x A:

1. Generalize p to ∀x¬A, literally ¬∃x¬¬A.
2. Emit the Boolean axiom A→¬¬A and apply EM to obtain
   ∃x A→∃x¬¬A.
3. PC on these two endpoints gives ¬∃x A, using contraposition/MP.

This explicit double-negation step is necessary because universal
quantification is an abbreviation. Generalizing ¬A alone has the wrong
literal endpoint for the desired result.

**CG(p,x).** From p:K→A with x∉FV(K), produce K→∀x A by three lines:
generalize p; emit scheme 3 with matrix K,A and variable x; apply MP.
Universal instantiation uses scheme 2 followed by MP, with the actual
free-for substitution recorded, not a capture-avoiding variant with a
different output string.

**CEM(p,x).** From p:K→(A→B), x∉FV(K), produce
K→(∃x A→∃x B). Emit B→∃x B, then PC to obtain
A→(K→∃x B). Apply rule 9 in x; its consequent has no free x.
Finally PC permutes the antecedents. This is the conditional version of
EM; it does not generalize an undischarged K-assumption.

**CNEX(p,x).** From p:K→¬A, x∉FV(K), produce K→¬∃x A.
CG gives K→¬∃x¬¬A. EM applied to A→¬¬A gives
∃x A→∃x¬¬A. PC combines them. Thus closing a guarded quantifier
inside a context is an explicit macro rather than a hidden deduction rule.

**EA(θ,x,y): existential alpha conversion.** If y occurs nowhere in θ,
emit the following four lines; both indicated inverse substitutions are
literal free-for substitutions:

    θ[y/x] → ∃x θ                         scheme 4 (θ,x,y)
    ∃y θ[y/x] → ∃x θ                     rule 9 (previous,y)
    θ → ∃y θ[y/x]                        scheme 4 (θ[y/x],y,x)
    ∃x θ → ∃y θ[y/x]                     rule 9 (previous,x).

Combine the last two implication endpoints by PC to obtain their equivalence.
For a universal binder use its primitive ¬∃¬ expansion, EA on its inner
existential, and Boolean negation congruence. For a deeper occurrence,
propagate the equivalence through negation/conjunction by PC and through
an existential by two EM applications and PC.

All bound renamings can consequently be compiled: choose a fresh index above
every current index; rename one binder and its bound occurrences, respecting
nested rebinding; propagate EA through its enclosing constructors. Iterate
through the original binder-node list. Two alpha-equivalent formulas can be
renamed to the same globally fresh normal form and their proofs composed.
This algorithm supplies an actual proof of alpha equivalence, not a new
alpha-equivalence inference rule. Non-alpha-equivalent inputs are rejected.

## 3. A uniform PA preservation argument for these macros

Use the particular PA-total graph representations of the sentinel functions,
parsing, free-variable/free-for tests, exact substitution and rebuilding.
The permitted representation result is
`thm-primitive-recursive-numeralwise-representability`; bare standard-model
computability is not substituted for it.

The basic code equations also need proofs, not just total graphs. For the
sentinel encoding, induction on copied blocks proves decode(encode(xs))=xs:
the initial delimiter fixes the list length and each unary width fixes its
unique canonical binary payload. The finite-word parser's induction is on
interval length; every constructor's child interval is strictly shorter.
Induction on those parse entries proves the free-variable and exact
free-for-substitution equations used below. These are arithmetic inductions
on finite words and histories and are available in PA. They neither use a
set-theoretic truth predicate nor derive correctness from representability
alone. CheckedPrefix permits the empty prefix; final Prf requires a nonempty
list and its specified endpoint.

For a primitive emitter, its hypotheses are its tag's exact checker tests.
Appending the indicated line preserves the checked prefix, since all old
indices and annotations are retained and every imported endpoint index is
less than the old length. For PC, induction on the k MP lines proves that
the current endpoint is the remaining implication suffix. The initial
scheme-1 test uses the supplied skeleton and its substitution list. For a
fixed pattern it passes by that finite truth table; for a variable input
skeleton its validity is an explicit input hypothesis.

The harness below extracts a canonical Boolean skeleton instead of preserving
the smaller displayed schematic skeleton. Its corresponding arithmetic
lemma follows by induction on the Boolean tree: a valuation of its distinct
atomic/quantified subformulas assigns a Boolean value to every substituted
formula, and hence a valuation to the letters of the original pattern.
Evaluation of substitution agrees with evaluation under those values. Thus
a tautological original pattern produces a tautological extracted skeleton.
This extra induction justifies that implementation choice uniformly; the
sample truth-table runs alone would not justify it.

For EM the five rows above settle the five checker cases. For CG the
only nonautomatic side condition is x∉FV(K), its explicit input test.
NEX, CEM and CNEX are compositions of the verified emitters and PC. Their
Boolean skeletons are respectively contraposition, implication composition,
and permutation/currying; direct Boolean valuation verifies each one.
Nothing in these verifications evaluates a set-theoretic predicate.

For EA, induction on the finite parse tree proves:

    y absent from θ ⇒ FreeFor(y,x,θ),
    FreeFor(x,y,θ[y/x]),  (θ[y/x])[x/y]=θ,
    y∉FV(∃x θ),  x∉FV(∃y θ[y/x]).

At a binder rebinding x, substitution does not enter its scope; at any other
binder the fresh y cannot be captured. These observations give the induction
steps and discharge all four line checks. A second induction on the path to
the changed binder proves preservation by the enclosing congruence macros.
Induction on the binder-renaming loop proves the normal-form algorithm's
two endpoint identities and acceptance of every accumulated line.

In each induction retain the output-list code and an endpoint table. The
state update is a composition of fixed primitive-recursive functions, so
history recursion is primitive recursive even when the output grows rapidly.
PA proves totality of these chosen recursions and the prefix invariant

    CheckedPrefix(q) ∧ ValidInputs(data,q)
      → CheckedPrefix(AppendMacro(q,data))
        ∧ End(AppendMacro(q,data))=SpecifiedEnd(data).

This is a uniform syntactic argument, not merely numeralwise checks. It is
given as a mathematical PA-induction proof, **not** as a proof-assistant
artifact or a claim that the repository has executed a PA proof checker.
The executable tests in §8 corroborate only the tested instances.

### 3.1 Canonical schema use without unsafe predicate substitution

Define a schema node to build its actual matrix first, recompute FV and fresh
variables, emit its exact canonical Sep/Rep sentence and certificate, and
then specialize that sentence. Do not instantiate an old schema annotation
by textual replacement.

Before specialization alpha-rename its closure and internal binders above
all desired argument indices. Append the EA/congruence proof from the old
sentence to this one, and use MP. Universal-instantiation sweeps now have
literal free-for substitutions, even when two desired arguments are the same
variable. If a desired endpoint uses another safe bound-variable convention,
append the computed alpha bridge. This avoids capture by a not-yet-instantiated
parameter binder. It also handles the extra A parameter introduced by set
relativization. Every sweep is a finite loop with the same prefix invariant.

This is enough for a typed macro-program language whose primitive nodes are
the emitters above, canonical schema nodes, and imports of actual checked
proofs. A formula slot is expanded while constructing a node's formula;
there is no operation that declares an arbitrary substituted old proof valid.
The macro checker tracks exact endpoint formulas. Imports must carry proof
codes satisfying Prf_ZF, not theorem names or claims of semantic validity.

## 4. A complete Separation instance compiler: matrix z=z

This section has **no set-theoretic imports**. It works for every one-free-
variable formula D defining a domain, whether or not that domain is nonempty
or constructible. It produces a logical proof of the raw relativization of
the exact canonical Sep(z=z,z).

Let a,b be its canonical fresh bounding-set and witness variables. Fix one
hygiene realization of τ as follows. For the whole source sentence choose N
above all indices in it and in D. Rename the bound variables of D to distinct
indices beginning at N, leaving its designated free variable unchanged.
Use that same renamed body for every inserted Dᵢ, replacing only its free
variable by i. All introduced bound variables lie outside the source indices;
sharing them across separately scoped copies is harmless. Other already
fixed hygiene realizations require the EA bridge, not code identification.

Write U=Dₐ, V=D_b, W=D_z and

    θ(z,a,b) := (z∈b ↔ (z∈a ∧ z=z)),
    H(a) := ¬∃z(W ∧ ¬θ(z,a,a)),
    T(b) := V ∧ ¬∃z(W ∧ ¬θ(z,a,b)),
    F := ¬∃a(U ∧ ¬∃b T(b)).

F is the **literal** τ(Sep(z=z,z)), not a normalized guarded-universal
variant. In the declared common-copy hygiene, V[a/b]=U and substitution
of a for b in T is free-for. Define the output by these macro calls:

| step | emitted endpoint | justification |
|---|---|---|
| 1 | z=z | scheme 5 |
| 2 | θ(z,a,a) | PC(1), since R→(P↔(P∧R)) is Boolean tautological |
| 3 | ¬(W∧¬θ(z,a,a)) | PC(2) |
| 4 | H(a) | NEX(3,z) |
| 5 | U→T(b)[a/b] | PC(4), using the literal substitution identity |
| 6 | T(b)[a/b]→∃b T(b) | scheme 4 (T,b,a) |
| 7 | U→∃b T(b) | PC(5,6) |
| 8 | ¬(U∧¬∃b T(b)) | PC(7) |
| 9 | F | NEX(8,a) |

Every row expands into annotated primitive lines by §2; no row assumes U.
The proof merely uses the bounding set as the separating witness. The
source sentence has just the bounding variable in its universal closure,
since the original matrix has no other free parameter.

Let S_eq(d,z) implement this construction when d codes a formula with free
variables among its designated domain variable, and return 0 otherwise.
Canonical Sep and the declared τ are syntax algorithms, and the macros are
the particular finite algorithms above. The §3 proof gives, uniformly in PA,

    DomainFormula(d) →
      Prf_ZF(S_eq(d,z), τ_d(Sep(Eq(z,z),z))).              (EQ-SEP)

In fact the output uses logical lines only. PA verifies this without assuming
the domain formula's truth, ZF's consistency, internal Infinity, or a model
of ZF. This completes the stated **restricted family**, not the universal
family with arbitrary matrix f.

## 5. What the explicit adapter buys the set-word quotation construction

The set-token realization in §1 removes one unspecified choice from the
previous quotation design. Its finite graphs can be built using Empty,
Pair and Union, with finite ordinals built by successor. The quotation
formula is the existential closure of the acyclic node equations with its
last node equated to the output variable; it never inserts an arithmetic
numeral as a membership-language term.

The logical assembly can now use §2 directly. Suppose actual finite proof
imports give totality/uniqueness of the three operations. For the j-th
construction node let Cⱼ be the conjunction of node equations so far.
Instantiate its operation-totality proof at earlier node variables. From
the resulting ∃u R and the Boolean/EI implication
Cⱼ∧R→∃u(Cⱼ∧R), restricted elimination yields
Cⱼ→∃u(Cⱼ∧R), because u is fresh for Cⱼ. Lift through the already introduced
existentials with EM, and apply MP to the previous existence endpoint.

For uniqueness take two fresh copies of the node variables. Induct through
the nodes: previous input equalities, scheme 6, and operation uniqueness
give equality of the new outputs. Generalize only variables absent from the
retained context, then use restricted elimination for the two existential
node lists. PC and EI produce the exact unique-existence abbreviation.
The induction is on the finite construction list, not on the ranks of any
sets in a model. This makes the logical part of the quotation compiler
fully reducible to the specified adapter.

**Still not supplied here:** actual expanded proof imports for the operation,
finite-word concatenation/constructor, formula-membership and finite-assignment
clauses. Existence of a set-word is not yet a proof of its satisfaction
equivalence or membership in Def. Section 7 keeps these imports visible.

## 6. Full Separation and Replacement: retain the original endpoints

The full constructor must still emit a proof of

    Prf_ZF(S(f,z), τ(Sep(f,z)))

for every admissible f,z, not merely the z=z input. Its reflection/Def
assembly is exactly the one in the earlier Separation kernel. Instantiate
ambient Sep on the already expanded χ^(Lλ), then use the **set-code of χ**
and the finite-tuple satisfaction bridge to show the resulting subset is
in Def(Lλ). The new logical adapter can discharge guards and match the
canonical raw endpoint, but cannot supply those mathematical premises.

Replacement still forms its ambient image with matrix D(w)∧φ^L(z,w,p̄),
bounds the image in Lγ, and calls S on the **unrelativized** matrix
∃z(z∈a∧φ(z,w,p̄)), with designated subset variable w. Passing φ^L to S
would relativize twice. No change to the promised finite L-interpretation
or PA-relative-consistency strength is justified by completing EQ-SEP.

## 7. The smallest remaining obligations, stated without opaque imports

At the consumer boundary the missing theorem remains the full universal
SEP assertion. At the adapter boundary it can be reduced to the following
**one finite-library obligation plus one generated-program invariant**:

1. Supply a concrete finite library K of fully expanded membership proof
   blocks and formula-slot macro programs, accepted by §3's typed adapter.
   Its entries must include the actual defining formulas and the following
   endpoints, not merely their titles:

   - operation, finite-ordinal, finite-word constructor and formula-arity
     identities for §1's numerical/set-word correspondence;
   - finite-assignment update/coincidence and the five satisfaction clauses,
     with the exact finite-tuple relation consumed by Def;
   - the fixed hierarchy/transitivity/continuity/exhaustion/Def successor
     statements for the selected pure formula D;
   - the formula-slot least-witness-stage and ordinal-iteration programs:
     for each existential matrix already relativized to L, emit its actual
     least-stage graph, its canonical ambient Separation/Replacement
     instances, a bound on the tuple set, the finite-attempt recursion, and
     the Replacement-on-ω argument giving a reflecting limit;
   - the fixed final Def-membership and guard/closure assembly program.

2. For that particular K, prove in PA that Build_K(f,z) always passes the
   adapter's input/side-condition checks and has the exact final endpoint
   τ(Sep(f,z)), for every admissible f,z. Its postorder table must store the
   quoted code, full bound-variable index bound, satisfaction/value bridge,
   reflected equivalence, and output endpoint for every source node.

The least-stage/iteration entry is still a **formula-slot program**, not a
single fixed theorem applied to a universe truth predicate. Substitution
into such a program constructs its actual matrices and schema certificates.
The previous U-AX document supplies the choice-free mathematical design;
it does not contain this expanded program. The satisfaction entry likewise
requires a syntax-recursive EVAL/VALUE/padding proof, not the unjustified
assertion that every Lλ models ZF.

For any supplied K with these checks and invariants, the §3 theorem proves
full SEP by composition. Here K is not supplied: in particular the
least-stage finite-attempt block and the exact finite-word/satisfaction
imports have not been expanded to accepted annotations. Therefore a claim
that only an already known fixed number remains to be copied would be
false. These are finite mathematical/template authoring tasks, but not
completed tasks in this support.

This formulation localizes what remains beyond the logical adapter. It does
not assert that the obligation is independent of PA or mathematically
impossible, and it does not weaken an original consumer into a conditional
theorem. The original arbitrary-limit/GCH and Cohen obligations remain
separate and unchanged.

## 8. Executable conformance check for the logical slice

The following JavaScript is an independent, bounded test harness for the
displayed realization. It checks primitive annotations, literal endpoints,
sentinel round trips, and selected rejection cases. It is not a production
checker, a PA proof object, or a test of any omitted set-theoretic import.
Its finite JavaScript indices are suitable for these tests; the general
natural-number algorithms and their PA argument are in §§1–4.

```javascript
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const eq=(i,j)=>['eq',i,j], mem=(i,j)=>['rel',i,j];
const neg=a=>['neg',a], and=(a,b)=>['and',a,b], ex=(x,a)=>['exists',x,a];
const imp=(a,b)=>neg(and(a,neg(b))), all=(x,a)=>neg(ex(x,neg(a)));
const iff=(a,b)=>and(imp(a,b),imp(b,a));
const ui=a=>a?.[0]==='neg' && a[1]?.[0]==='and' &&
  a[1][2]?.[0]==='neg' ? [a[1][1],a[1][2][1]] : null;
function fv(a) {
  if(a[0]==='eq'||a[0]==='rel') return new Set([a[1],a[2]]);
  if(a[0]==='neg') return fv(a[1]);
  if(a[0]==='and') return new Set([...fv(a[1]),...fv(a[2])]);
  const s=fv(a[2]); s.delete(a[1]); return s;
}
function indices(a) {
  if(a[0]==='eq'||a[0]==='rel') return [a[1],a[2]];
  if(a[0]==='neg') return indices(a[1]);
  if(a[0]==='and') return [...indices(a[1]),...indices(a[2])];
  return [a[1],...indices(a[2])];
}
function freeFor(a,x,y) {
  if(a[0]==='eq'||a[0]==='rel') return true;
  if(a[0]==='neg') return freeFor(a[1],x,y);
  if(a[0]==='and') return freeFor(a[1],x,y)&&freeFor(a[2],x,y);
  if(a[1]===x) return true;
  return !(a[1]===y&&fv(a[2]).has(x)) && freeFor(a[2],x,y);
}
function sub(a,x,y) {
  if(!freeFor(a,x,y)) throw Error('capture');
  if(a[0]==='eq'||a[0]==='rel') return [a[0],a[1]===x?y:a[1],a[2]===x?y:a[2]];
  if(a[0]==='neg') return neg(sub(a[1],x,y));
  if(a[0]==='and') return and(sub(a[1],x,y),sub(a[2],x,y));
  return a[1]===x ? a : ex(a[1],sub(a[2],x,y));
}
function normalize(a,start) {
  let next=start;
  function go(f,env) {
    if(f[0]==='eq'||f[0]==='rel') return [f[0],env.get(f[1])??f[1],env.get(f[2])??f[2]];
    if(f[0]==='neg') return neg(go(f[1],env));
    if(f[0]==='and') return and(go(f[1],env),go(f[2],env));
    const y=next++, e=new Map(env); e.set(f[1],y); return ex(y,go(f[2],e));
  }
  return go(a,new Map());
}
function skeleton(f) {
  const slots=[];
  function go(a) {
    if(a[0]==='neg') return ['n',go(a[1])];
    if(a[0]==='and') return ['a',go(a[1]),go(a[2])];
    let i=slots.findIndex(s=>same(s,a)); if(i<0){i=slots.length;slots.push(a);}
    return ['p',i];
  }
  return [go(f),slots];
}
function rebuild(b,s) { return b[0]==='p'?s[b[1]]:
  b[0]==='n'?neg(rebuild(b[1],s)):and(rebuild(b[1],s),rebuild(b[2],s)); }
function bool(b,v) { return b[0]==='p'?!!(v&(1n<<BigInt(b[1]))):
  b[0]==='n'?!bool(b[1],v):bool(b[1],v)&&bool(b[2],v); }
function taut(b,n) { for(let v=0n;v<(1n<<BigInt(n));v++)if(!bool(b,v))return false;return true; }
function check(q) {
  try { return q.length>0 && q.every(([f,t,a],j)=>{
    const prev=i=>Number.isInteger(i)&&i>=0&&i<j;
    if(t===1)return same(f,rebuild(a[0],a[1]))&&taut(a[0],a[1].length);
    if(t===2||t===4){const [b,x,y]=a;if(!freeFor(b,x,y))return false;
      return same(f,t===2?imp(all(x,b),sub(b,x,y)):imp(sub(b,x,y),ex(x,b)));}
    if(t===3){const [b,c,x]=a;return !fv(b).has(x)&&same(f,imp(all(x,imp(b,c)),imp(b,all(x,c))));}
    if(t===5)return same(f,eq(a[0],a[0]));
    if(t===6){const [b,x,s,tv]=a;return freeFor(b,x,s)&&freeFor(b,x,tv)&&
      same(f,imp(eq(s,tv),imp(sub(b,x,s),sub(b,x,tv))));}
    if(t===7){if(!a.every(prev))return false;const d=ui(q[a[1]][0]);return d&&same(q[a[0]][0],d[0])&&same(f,d[1]);}
    if(t===8)return prev(a[0])&&same(f,all(a[1],q[a[0]][0]));
    if(t===9){if(!prev(a[0]))return false;const d=ui(q[a[0]][0]);return d&&!fv(d[1]).has(a[1])&&same(f,imp(ex(a[1],d[0]),d[1]));}
    return false; // The test slice imports no nonlogical axioms.
  }); } catch { return false; }
}
function assembler() {
  const q=[];
  const add=(f,t,a)=>(q.push([f,t,a]),q.length-1);
  const ax=f=>add(f,1,skeleton(f));
  const mp=(p,r)=>add(ui(q[r][0])[1],7,[p,r]);
  function pc(ps,c){let f=c;for(let i=ps.length-1;i>=0;i--)f=imp(q[ps[i]][0],f);
    let p=ax(f);for(const i of ps)p=mp(i,p);return p;}
  function em(p,x){const [a,b]=ui(q[p][0]);const e=add(imp(b,ex(x,b)),4,[b,x,x]);
    const r=pc([p,e],imp(a,ex(x,b)));return add(imp(ex(x,a),ex(x,b)),9,[r,x]);}
  function nex(p,x){const a=q[p][0][1];const g=add(all(x,neg(a)),8,[p,x]);
    const m=em(ax(imp(a,neg(neg(a)))),x);return pc([g,m],neg(ex(x,a)));}
  return {q,add,ax,mp,pc,em,nex};
}
function sepEq(z){let a=0;while(a===z)a++;let b=0;while(b===z||b===a)b++;
  const theta=iff(mem(z,b),and(mem(z,a),eq(z,z)));
  return {a,b,theta,source:all(a,ex(b,all(z,theta)))};
}
function pilot(d,z){
  if([...fv(d)].some(i=>i!==0))throw Error('domain interface');
  const {a,b,theta,source}=sepEq(z);
  const base=normalize(d,1+Math.max(...indices(source),...indices(d)));
  const D=i=>sub(base,0,i);
  function tr(f){if(f[0]==='eq'||f[0]==='rel')return f;
    if(f[0]==='neg')return neg(tr(f[1]));if(f[0]==='and')return and(tr(f[1]),tr(f[2]));
    return ex(f[1],and(D(f[1]),tr(f[2])));}
  const A=assembler(), {q,add,pc,nex}=A;
  const reflex=add(eq(z,z),5,[z]);
  const th=pc([reflex],sub(theta,b,a));
  const h=nex(pc([th],neg(and(D(z),neg(sub(theta,b,a))))),z);
  const body=and(D(b),neg(ex(z,and(D(z),neg(theta)))));
  const p=pc([h],imp(D(a),sub(body,b,a)));
  const e=add(imp(sub(body,b,a),ex(b,body)),4,[body,b,a]);
  const r=pc([p,e],imp(D(a),ex(b,body)));
  const end=nex(pc([r],neg(and(D(a),neg(ex(b,body))))),a);
  if(!check(q)||!same(q[end][0],tr(source)))throw Error('pilot failed');
  return q;
}
function pack(xs){let w='1'+'1'.repeat(xs.length)+'0';for(const x of xs){const b=BigInt(x).toString(2);w+='1'.repeat(b.length)+'0'+b;}return BigInt('0b'+w);}
function unpack(n){if(n<=0n)return null;const w=n.toString(2);let p=1,k=0;
  while(w[p]==='1'){p++;k++;}if(w[p++]!=='0')return null;const out=[];
  for(let i=0;i<k;i++){let m=0;while(w[p]==='1'){p++;m++;}if(m<1||w[p++]!=='0'||p+m>w.length)return null;
    const b=w.slice(p,p+m);p+=m;if(m>1&&b[0]!=='1')return null;out.push(BigInt('0b'+b));}
  return p===w.length?out:null;
}
const tok=(k,j)=>pack([k,j]), con=n=>tok(2,n), punct=n=>tok(3,n);
function enc(...fields){const w=[punct(0)];fields.forEach((f,i)=>{if(i)w.push(punct(2));w.push(...f);});w.push(punct(1));return w;}
const term=i=>enc([con(0)],[tok(0,i)]);
function word(a){if(a[0]==='eq')return enc([con(2)],term(a[1]),term(a[2]));
  if(a[0]==='rel')return enc([con(1)],[tok(1,0)],term(a[1]),term(a[2]));
  if(a[0]==='neg')return enc([con(3)],word(a[1]));
  if(a[0]==='and')return enc([con(4)],word(a[1]),word(a[2]));
  return enc([con(5)],[tok(0,a[1])],word(a[2]));}
const num=a=>pack(word(a));
const bn=b=>b[0]==='p'?pack([0,b[1]]):b[0]==='n'?pack([1,bn(b[1])]):pack([2,bn(b[1]),bn(b[2])]);
function record([f,t,a]){let v;
  if(t===1)v=pack([bn(a[0]),pack(a[1].map(num))]);
  else if(t===2||t===4)v=pack([num(a[0]),a[1],pack(term(a[2]))]);
  else if(t===3)v=pack([num(a[0]),num(a[1]),a[2]]);
  else if(t===5)v=pack([pack(term(a[0]))]);
  else if(t===6)v=pack([num(a[0]),a[1],pack(term(a[2])),pack(term(a[3]))]);
  else v=pack(a);return pack([num(f),t,v]);}
let cases=0;
for(const d of [eq(0,0),neg(eq(0,0)),mem(0,0),ex(1,mem(0,1)),and(eq(0,0),ex(0,mem(0,0)))])
  for(const z of [0,1,7,31]){const q=pilot(d,z),r=q.map(record),n=pack(r),back=unpack(n);
    if(!back||back.length!==r.length||back.some((v,i)=>v!==r[i]))throw Error('record round trip');cases++;}
const E=assembler(), phi=and(mem(0,1),ex(0,mem(0,2))), renamed=sub(phi,0,7);
const l1=E.add(imp(renamed,ex(0,phi)),4,[phi,0,7]);
E.add(imp(ex(7,renamed),ex(0,phi)),9,[l1,7]);
const l3=E.add(imp(phi,ex(7,renamed)),4,[renamed,7,0]);
E.add(imp(ex(0,phi),ex(7,renamed)),9,[l3,0]);
if(!check(E.q))throw Error('alpha test');
const extraSchemes=[
  [imp(all(0,mem(0,1)),mem(2,1)),2,[mem(0,1),0,2]],
  [imp(all(0,imp(eq(1,1),mem(0,1))),imp(eq(1,1),all(0,mem(0,1)))),3,[eq(1,1),mem(0,1),0]],
  [imp(eq(1,2),imp(mem(1,3),mem(2,3))),6,[mem(0,3),0,1,2]]
];
for(const line of extraSchemes)if(!check([line]))throw Error('primitive scheme test');
const R=assembler(), p=R.ax(imp(mem(0,1),mem(0,1)));
R.add(imp(ex(0,mem(0,1)),mem(0,1)),9,[p,0]);
if(check(R.q))throw Error('bad elimination accepted');
const C=ex(2,mem(0,2));
if(freeFor(C,0,2)||check([[imp(mem(2,2),ex(0,C)),4,[C,0,2]]]))throw Error('capture accepted');
const broken=pilot(eq(0,0),0);const mi=broken.findIndex(l=>l[1]===7);broken[mi][2][0]=mi;
if(check(broken))throw Error('forward reference accepted');
if(check([[mem(0,1),1,skeleton(mem(0,1))]]))throw Error('non-tautology accepted');
if(pack([])!==2n||unpack(0n)!==null||unpack(1n)!==null)throw Error('sentinel defaults');
console.log(JSON.stringify({pilotCases:cases,alphaCase:true,additionalPrimitiveSchemes:3,rejectionCases:4,sentinelRoundTrips:cases}));
```

The harness checks generated formulas before serialization, then round-trips
the numerical record list. It does not implement a standalone numerical
parser for arbitrary incoming formula words. The PA correspondence proof
must use the selected word parser's constructor equations; the runtime test
does not replace that proof.

Recorded local execution: 20 pilot instances and their sentinel round trips,
one nested-rebinding alpha-conversion instance, three additional primitive
axiom-scheme instances, and four expected rejections passed. The rejection
cases were a forbidden existential elimination, variable capture, a
self/forward premise reference, and a non-tautological Boolean certificate.
These are local tests, not independent review or full SEP verification.

## 9. Sources and referenced-ID validation

The local contracts named above were read directly, including their exact
axiom annotations and default conventions. The mathematical rules are the
local adapted calculus, not a purported unchanged import of another author's
equality axioms or proof-predicate argument order.

[Moschovakis, §§1H.1 and 4A.9](https://www.math.ucla.edu/~ynm/lectures/lnl.pdf)
supplies the primary comparison for the quantifier rules and proof checking;
the document was successfully retrieved and those passages read. Its axiom
list and proof-predicate order differ from the local interface. It does not
provide the sentinel adapter or the PA proof of this S_eq.
[Paulson, §§7.3–7.5](https://arxiv.org/html/2104.12674v1#S7.SS3)
was read for the internalization boundary: formula satisfaction, environment
typing, and formula membership must each be proved. His Isabelle development
does not establish the full metatheoretic Separation family for these codes.
All adapter algorithms and annotations here are local constructions.

Validated local item IDs, present with status `published` at inspection:

- `def-effective-theory-and-certified-godel-numbering`
- `def-set-coded-formal-derivation`
- `def-set-coded-terms-and-formulas`
- `def-coded-first-order-zf-theory`
- `lem-primitive-recursive-syntax-and-proof-checking`
- `thm-primitive-recursive-numeralwise-representability`

No invented item ID is an import. K, S_eq, PC, EM, NEX, CG, CEM, CNEX and EA
are local adapter labels, not registered suppliers. Full SEP and U-AX remain
unclosed despite completion of the annotated logical slice.
