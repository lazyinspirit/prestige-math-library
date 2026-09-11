# Graph removal: checked proofs and the exact remaining update interface

Date: 2026-09-12 (Australia/Sydney).

This isolated support completes **graph removal only at the annotated
proof level**. The [executable companion](support-phase-2-next-17-graph-removal-update-interface.mjs)
numerically verifies unique existence of the pruned set and deletion of
every value at its removed coordinate. Full insertion, the coordinate
identity, and tuple preservation have the mathematical arguments below
and finite executable tests, **not yet emitted accepted proof lists**.
Nothing here closes graph UPDATE as a whole, Sat, BRIDGE, SEP, reflection,
relativized L, GCH, or U-AX. No live inputs/state, owner/controller files,
items, or existing support files were edited.

## 1. Exact graph formulas and a useful hypothesis correction

Use the literal Kuratowski formula from the
[checked ordered-pair block](support-phase-2-next-17-kuratowski-proof-block.md):

    P(a,b,u) := ∀v₃(v₃∈u ↔ (v₃=a ∨ v₃=b)),
    O(a,b,p) := ∃v₂₄∃v₂₅
       (P(a,a,v₂₄) ∧ (P(a,b,v₂₅) ∧ P(v₂₄,v₂₅,p))).

All abbreviations expand into the existing primitive membership syntax.
The external interfaces below avoid v₃,v₂₄,v₂₅. For other indices,
freshen the internal binders and append the actual alpha bridge before
identifying proof endpoints.

The removal predicate in the executable is exactly

    R(s,i,r) := ∀v₂₁
      (v₂₁∈r ↔ (v₂₁∈s ∧ ¬∃v₂₂ O(i,v₂₂,v₂₁))).

Its coordinate predicate, with another protected witness index, is

    C(r,i,c) := ∃v₃₄(O(i,c,v₃₄) ∧ v₃₄∈r).

The eventual update predicate is the universal element equation

    U(s,i,b,t) := ∀p(p∈t ↔
       ((p∈s ∧ ¬∃v O(i,v,p)) ∨ O(i,b,p))).             (UPDATE-DEF)

All helper binders in this last display are to be freshened before code
generation; unlike R and C, its complete proof program is not supplied
here. This is ambient set quantification, not relativization to a carrier.

**The coordinate identity does not need functionality or a domain
hypothesis.** Assuming U, it holds for arbitrary sets s,i,b,t,j,c:

    C(t,j,c) ↔ ((j=i ∧ c=b) ∨ (j≠i ∧ C(s,j,c))).      (UPDATE-COORD)

Functionality/domain/value assumptions enter only when proving that the
updated graph is still an assignment of the prescribed type. Treating
them as prerequisites for the displayed identity would overstate its needs.

## 2. Actual canonical Separation certificate

The numerical matrix is

    φ(v₂₁,v₂₀) := ¬∃v₂₂ O(v₂₀,v₂₂,v₂₁).

Its designated subset variable is v₂₁. Its occurring indices are
3,20,21,22,24,25, so the canonical fresh bounding/witness variables are
v₀,v₁. Its other free parameter is v₂₀. The actual axiom sentence is

    ∀v₀∀v₂₀∃v₁∀v₂₁
      (v₂₁∈v₁ ↔ (v₂₁∈v₀ ∧ φ(v₂₁,v₂₀))).

The companion constructs this sentence directly and submits the sentinel
certificate L(1,NumForm(φ),21) to the committed
[ZF certificate checker](support-phase-2-next-17-zf-axiom-operation-kernel.md).
The checker independently reconstructs the canonical schema endpoint and
requires literal code equality. The certificate is not a theorem-name
assumption, and the matrix is not a relativized Separation instance.

The emitted proof instantiates v₀ at s=v₃₀ and v₂₀ at i=v₃₁, then
uses the checked existential-renaming macro to move v₁ to r=v₃₂. These
indices are absent from the internal binders. The resulting endpoint is
exactly ∃r R(s,i,r), with no free-for substitution collision.

## 3. The two numerically proved results

With s=v₃₀,i=v₃₁,r=v₃₂,c=v₃₃ and alternate output v=v₃₅, the
two complete proof endpoints are

    ∀s∀i∃r(R(s,i,r) ∧ ∀v(R(s,i,v)→v=r));             (REMOVE-UNIQUE)

    ∀s∀i∀r(R(s,i,r)→∀c ¬C(r,i,c)).                  (REMOVE-ALL)

The uniqueness binder is the explicitly selected v₃₅, not an assertion
that the local canonical ∃! abbreviation chooses that index.

### Unique existence

Start with the actual Separation line of §2. Under the implication context
K=R(s,i,r)∧R(s,i,v), instantiate both universal element equations at
v₂. They have identical right-hand sides. Propositional composition gives
K→(v₂∈v↔v₂∈r); conditional generalization in v₂ and the actual
Extensionality axiom give K→v=r. Curry, generalize v conditionally,
retain R(s,i,r), and lift through its existential with EM. MP with the
Separation existence proof and universal closure give REMOVE-UNIQUE.

These are actual annotated UI/CG/EM/MP/Boolean lines. The checker sees
the exact instance certificate, not the phrase “by Separation.”

### Every old value at i is removed

Under R(s,i,r), instantiate its element equation at p=v₃₄. Scheme 4
with witness c=v₃₃ gives

    O(i,c,p) → ∃v₂₂ O(i,v₂₂,p).

The element equation therefore implies
R(s,i,r)→¬(O(i,c,p)∧p∈r). To obtain absence of a coordinate, use
conditional generalization in p, the Boolean theorem B→¬¬B, and EM;
PC supplies R(s,i,r)→¬∃p(O(i,c,p)∧p∈r). This double-negation
bridge is necessary because ∀ is the primitive abbreviation ¬∃¬.
Generalize c conditionally, then close r,i,s. This is REMOVE-ALL.

No ordered-pair injectivity or functionality theorem is needed for this
part: the very same witness p,c contradicts the removal criterion. Thus
multiple conflicting old pairs at i are all deleted, not just one selected
representative. The proof applies even when s is not a function or includes
objects that are not ordered pairs.

## 4. Full update mathematics: proved argument, uncompiled annotations

The following is the repair-ready mathematical proof of the remaining
interface. It is **not** represented as a numerically checked derivation
by this artifact.

### Existence and uniqueness

Obtain the unique r of REMOVE-UNIQUE and the unique ordered pair h
satisfying O(i,b,h), from the committed ordered-pair block. Pairing and
Union form t=r∪{h}. Ordered-pair uniqueness gives O(i,b,p) iff p=h,
so the element equation for t is exactly UPDATE-DEF. Extensionality makes
any two sets satisfying that equation equal. No Power Set, Replacement,
Choice, or internal Infinity is needed; all constructions are ambient.

### Forward coordinate implication

Suppose O(j,c,p) and p∈t. If the removal disjunct of UPDATE-DEF holds,
then p∈s and there is no v with O(i,v,p). If j=i, equality transport
would give O(i,c,p), contradicting that clause. Thus j≠i and C(s,j,c).
If instead O(i,b,p), ordered-pair injectivity gives j=i and c=b.
This proves the forward implication of UPDATE-COORD.

### Reverse coordinate implication

If j=i and c=b, ordered-pair existence supplies h with O(i,b,h).
UPDATE-DEF puts h in t, and equality transport gives C(t,j,c).
If j≠i and C(s,j,c), choose its witness p. Were O(i,v,p) true for
some v, ordered-pair injectivity would imply j=i. Hence no such v
exists, so UPDATE-DEF retains p and C(t,j,c) follows.

The argument does not assume that i or j is an ordinal, that s has a
prescribed domain, or that old values are unique. Junk elements of s that
are not ordered pairs are retained by UPDATE-DEF but never become
coordinate witnesses. That is why UPDATE-COORD remains valid for arbitrary
sets, while well-typed tuple preservation requires the next hypotheses.

## 5. Exact domain/functionality hypotheses and boundary cases

For set parameters A,m,s, define T(A,m,s) as the conjunction of

    ∀p(p∈s → ∃j∃c(j∈m ∧ c∈A ∧ O(j,c,p))),
    ∀j(j∈m → ∃c(c∈A ∧ C(s,j,c))),
    ∀j∀c∀d((C(s,j,c) ∧ C(s,j,d)) → c=d).

For finite tuples require additionally that m is a finite von Neumann
ordinal. The preservation proof itself works for any set domain m.
The first clause excludes junk and out-of-domain/value entries; the
second states domain coverage; the third is genuine functionality, not
an assumption that follows from sethood of the graph.

The correct preservation statement is

    T(A,m,s) ∧ i∈m ∧ b∈A ∧ U(s,i,b,t) → T(A,m,t).

For each j∈m, UPDATE-COORD supplies value b if j=i and preserves the
old value otherwise. Two updated values at the same coordinate equal b
in the first case and agree by old functionality in the second. Every
retained graph element has its old typing, while the inserted pair has
the stated i∈m,b∈A typing. This proves all three clauses.

Boundary cases must not be suppressed:

- If the old graph has several values at i, all are removed and only b
  remains there. This validates UPDATE-COORD but does not repair possible
  nonfunctionality at other coordinates.
- If an old value at i already is b, it is removed and then reinserted;
  no multiset or duplicate-entry convention is used.
- If s is the empty graph, removal leaves it empty and update gives the
  singleton graph {<i,b>}. UPDATE-COORD still holds.
- If m=0, T(A,m,s) permits the empty tuple, but i∈m is impossible.
  Updating at some external index must not be claimed to preserve a
  zero-length tuple. One may enlarge the domain separately; that is a
  different endpoint.
- If i∉m or b∉A, preservation of the original T(A,m,–) is generally
  false. The tests include both failures.
- If A=∅, the empty tuple is legitimate; a nonempty-domain A-valued tuple
  and a new b∈A are impossible. First-order satisfaction still has its
  separate nonempty-carrier requirement.

None of these ambient graph facts says that a constructible level contains
the graph or its construction history. There is no internal Infinity claim
about Lω and no replacement of a set-word by a numerical code term.

## 6. Executable evidence and what it checks

Run:

```bash
node research/support-phase-2-next-17-graph-removal-update-interface.mjs
```

Recorded local execution:

- REMOVE-UNIQUE: **87 lines, 68,182,332 bits**, accepted numerically.
- REMOVE-ALL: **116 total lines, 88,039,174 bits**, accepted numerically.
- Both independently assembled closed endpoint formulas match literally.
- Four rejection tests pass: wrong designated variable in the actual
  Separation certificate, MP self-reference, the wrong removal matrix
  under the original certificate, and wrong requested final endpoint.
- Independent extensional-HF tests pass **1,152 full coordinate identities**,
  **192 removal cases**, **96 junk-retention cases**, **20 typed updates**,
  the empty-domain case, and **three collision/type/domain boundary cases**.

The HF tests enumerate all relations on a two-element coordinate/value
set, optionally with a non-pair junk element, and also update at an outside
coordinate. They use actual extensional finite sets and Kuratowski pairs,
not just arrays with a silently overwritten key. The old relation may be
nonfunctional. These are semantic tests of the construction on finitely
many finite sets, **not a numerical proof of UPDATE-COORD** and not a
finite model of ZF.

The proof compiler reuses the committed Kuratowski module's exact
formula/assembler factory slice, selected between checked source markers,
and passes the committed ZF operation constructor into that factory. The
factory begins with the checked Pair prefix. Some of those earlier
theorems are not needed for removal, but they remain valid earlier lines;
they are not new axiom assumptions. All imported code is read-only. This
research source extraction is not advertised as a stable production API.

PA verification is limited to the two stated finite proof constants and
their chosen numerical checker: imports are actual earlier proof lines,
the canonical schema certificate is reconstructed, literal UI/renaming
and rule side conditions are checked, and a checked-prefix induction
preserves every appended line. The code uses fixed primitive-recursive
syntax/list operations, not unbounded proof search. The standard
PA-total graph representations supply the arithmetic interpretation of
these operations. This is a mathematical PA-verification argument, not
a machine-checked PA proof or a universal formula-slot UPDATE compiler.

## 7. Exact remaining imports/programs

The largest verified block delivered here is REMOVE-UNIQUE + REMOVE-ALL.
To claim the full requested update theorem as an accepted annotated proof,
the following work remains. Already checked mathematical suppliers are
listed separately from their still-unwritten composition programs:

1. **Ordered-pair witness import and binder alignment.** Inline the actual
   OP-UNIQUE proof, specialize it to i,b, and retain the exact O(i,b,h)
   witness endpoint. The committed block supplies the theorem, but this
   update program does not yet inline or align it.
2. **Finite insertion assembly.** Instantiate the actual Pair and Union
   unique-existence blocks to build {h} and r∪{h}, with the required
   literal membership biconditionals. Emit equality substitution from
   O(i,b,p) to p=h, derive UPDATE-DEF, and discharge the existential
   construction witnesses. Then append its Extensionality uniqueness
   proof. This is a new finite annotated composition, not a missing set
   axiom or permission to insert the statement as tag 0.
3. **Coordinate proof composition.** Inline/specialize the committed
   OP-INJECTIVE block at the two coordinate witnesses, supply exact
   equality-renaming bridges, and emit both implications of §4 with
   all existential side conditions. The semantic argument and HF tests
   do not substitute for these proof lines.
4. **Typed-domain preservation.** Expand T with fresh variables, emit
   the three proofs in §5 from UPDATE-COORD, and check their universal
   closures. The finite-ordinal naming/quotation adapter is additionally
   required when the tuple length comes from a numerical source formula.

There is no unidentified large mathematical theorem in this list; these
are exact finite proof-composition obligations still unsupplied here.
Their completion is not represented as automatic merely because the
source theorem proofs are available.

All Sat_m defining-formula/recursive-clause imports, finite-word syntax
membership, generated EVAL/VALUE/padding proofs, Def membership, reflection,
and full SEP/U-AX remain outside this unit. Replacement retains the
unrelativized input matrix ∃z(z∈a∧φ(z,w,p̄)) for the eventual
L-Separation constructor. No consistency-strength or live workflow
transition is claimed.

## 8. Provenance and source boundary

Imported committed-file SHA-256 observations:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-kuratowski-proof-block.mjs` | `fe7d18bb4f91535327245132d428b3192b8855650d70944b9b531546f645c303` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These hashes document reproducibility, not certification or controller
receipts. Any upstream change requires new test execution. The actual
local axiom/calculus contracts remain `def-coded-first-order-zf-theory`
and `def-set-coded-formal-derivation`; neither is edited or replaced.

The relational pair/graph conventions agree with the primary comparison
in [Paulson, §4.1](https://arxiv.org/html/2104.12674v1#S4.SS1), already read
for the preceding kernel. The specific removal certificate, arithmetic
proof lines, and stronger arbitrary-set coordinate analysis are local
constructions, not claimed imports from his different implementation.
No invented item ID, hidden truth predicate, or semantic-test acceptance
is used as an axiom supplier.
