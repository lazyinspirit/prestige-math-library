# Exact ZF certificates and three checked operation proof blocks

Date: 2026-09-12 (Australia/Sydney).

This is isolated research support. It supplies no item certification, engine
decision, or claim of full BRIDGE, SEP, U-AX, reflection, or GCH. No live
inputs/state or existing support files were edited. The companion
[executable kernel](support-phase-2-next-17-zf-axiom-operation-kernel.mjs)
provides the concrete code discussed below.

The completed slice is: a numerical recognizer for the exact ambient ZF
axiom certificates; its composition with the existing numerical logical
checker; and actual numerically accepted unique-existence proofs for
Empty, unordered Pair, and Union. These three finite proofs use only the
fixed ZF axioms and logical rules. Recognizing ambient schema instances
does **not** construct proofs of their relativizations to L.

## 1. Coding and exact axiom endpoints

Use the sentinel list encoding and the selected token/record realization
from the [annotated adapter](support-phase-2-next-17-annotated-separation-adapter.md)
and [numerical decoder](support-phase-2-next-17-numerical-logical-proof-decoder.md).
Write L(xs) for the sentinel number. Empty lists are 2, rejected numerical
proofs are 0. Tokens, complete formula words, and line records use the same
nested encoding. A proof line is L(formula,tag,annotation); for tag 0 the
annotation is **the certificate itself**, not a singleton list containing it.

Certificates have exactly these forms:

| Certificate | Reconstructed axiom |
|---|---|
| L(0,j), 0≤j<6 | The j-th fixed sentence below |
| L(1,f,z) | Canonical ambient Sep(f,z) |
| L(2,f,z,w), z≠w | Canonical ambient Rep(f,z,w) |

All other tags, arities, malformed formula payloads, or mismatching endpoints
are rejected. There is no theorem-name certificate, Empty Set tag, AC/GCH
tag, or search for a proof. A certificate is not evidence of arbitrary
logical equivalence: reconstruction must give the **identical formula code**.

The local definition displays letters rather than assigning numerical
indices to every binder of the six fixed sentences. This realization fixes
those remaining names explicitly. The order and bodies are exactly those
in `def-coded-first-order-zf-theory`; all abbreviations are expanded into
negation, conjunction, and existential quantification:

1. Extensionality: x=v₀, y=v₁, z=v₂.
2. Pairing: x=v₀, y=v₁, z=v₂, t=v₃.
3. Union: x=v₀, y=v₁, z=v₂, s=v₃.
4. Power Set: x=v₀, y=v₁, z=v₂, t=v₃.
5. Infinity: I=v₀, e=v₁, t=v₂, y=v₃, s=v₄. Both displayed t
   binders use v₂ in their separate scopes.
6. Foundation: S=v₀, t=v₁, s=v₂, u=v₃.

Power Set retains the implication-only sentence, not a biconditional
variant. Infinity retains von Neumann successor, not singleton closure.
Another already selected realization requires an explicit axiom-name
adapter and logical alpha-conversion proofs; it must not be identified
with these codes without checking.

**Power Set boundary.** In the presence of the separately certified ambient
Separation scheme, the implication-only axiom implies the usual exact Power
Set axiom: given X, obtain Y containing every subset of X; use Separation
on Y with the actual matrix ∀t(t∈z→t∈X) to obtain
P={z∈Y:z⊆X}. Every subset of X belongs to Y and hence P, while every
member of P is a subset of X. Conversely the exact Power Set conclusion
immediately supplies the implication-only conclusion. This is a mathematical
explanation of equivalence **with Separation**, not a claim of equivalence
of the isolated fixed sentence or an emitted proof of that equivalence.
The matrix and its complete parameter list must be reconstructed by the
ambient schema certificate mechanism if this argument is compiled. The
kernel does not accept exact Power Set directly under fixed tag 3.

For Sep, the two bounding/witness indices are the least unused indices
outside Var(f) and the designated index z, successively. For Rep they also
avoid w. Avoiding the designated places is required even when they are
absent from the input matrix: the bounding variable is distinct from the
element/output variable. Variables occurring only bound in f still count
as used. Freshness here needs no preliminary renaming because the new
indices are absent everywhere in f.

The uniqueness variable in Rep is selected **separately**: it is the least
index absent from f and distinct from w, precisely as required by the local
unique-existence expansion. It need not avoid the fresh bounding variables
A,B, whose occurrences lie outside that inner binder. The executable tests
include the case φ=v₅∈v₆, where A=v₀ and the uniqueness binder is also v₀
in its separate inner scope. Globally over-freshening this binder would
change the canonical code and is not silently allowed.

Finally compute the actual remaining free-variable list of the completed
axiom matrix, sort it in increasing numerical order, and universally close
with that order outermost first. Do not reuse a stale parameter list or
sort large indices lexicographically. All payload indices stay BigInts in
the executable implementation; tests include 2^80+123.

## 2. Composition with the existing logical decoder

`verifyZF(p,a)` decodes the entire proof list, rejects emptiness, and for
each line requires exactly three fields and a valid formula word. Its cases
are explicit:

- Tag 0: require sentencehood and `axiomCertificate(formula,annotation)`.
- Tags 1–6: invoke the existing logical decoder on this **single line**.
  These are axioms, so they reference no previous proof lines. This reuses
  all Boolean, free-for, grammar, equality, and annotation checks without
  changing or bypassing the logical decoder.
- Tags 7–9: require a two-field annotation; check earlier indices before
  retrieval; rebuild exactly MP, generalization, or restricted existential
  elimination. The last rule checks absence of its variable from the
  consequent's free-variable list.

The final formula number must equal a. Malformed inputs return false. The
logical-only decoder remains unchanged and still rejects all three operation
proofs because they contain nonlogical axioms. No caller-supplied assumption
list is smuggled into the sentence-theory checker.

## 3. Literal operation predicates and proof endpoints

The following abbreviations are expanded by the executable constructor:

    E(u) := ∀v₂ ¬(v₂∈u).
    P(a,b,u) := ∀v₃(v₃∈u ↔ (v₃=a ∨ v₃=b)).
    U(a,u) := ∀v₂(v₂∈u ↔ ∃v₃(v₃∈a ∧ v₂∈v₃)).

Use a=v₁₀, b=v₁₁, u=v₁₂, and v=v₁₃. For each operation R(u), the
actual conclusion is

    ∃u(R(u) ∧ ∀v(R(v)→v=u)),

universally closed over a,b for Pair, over a for Union, and over no
parameters for Empty. This is a unique-existence sentence with the **stated
v₁₃ binder**, not a claim that the local canonical ∃! macro picks v₁₃.
These are derived theorems, so no schema-certificate policy is altered.

The names differ from the fresh copies emitted by the
[finite-word template compiler](support-phase-2-next-17-finite-word-satisfaction-templates.md).
Its consumer must instantiate these closed proofs and append the annotated
adapter's alpha-equivalence bridges to obtain its exact defining-formula
copies. It cannot simply declare alpha-equivalent strings identical.

### Empty existence: derived from the actual Infinity sentence

Write B(t,e) for t∈e, O(e)=¬∃t B(t,e), and E(e)=∀t¬B(t,e), with
e=v₁,t=v₂. Because ∀ is ¬∃¬, O and E have different literal codes.
The following annotated macro sequence handles that difference:

1. Scheme 1 gives ¬¬B→B. Existential monotonicity EM gives
   ∃t¬¬B→∃tB. Propositional composition PC yields O(e)→E(e).
2. PC yields (e∈I∧O(e))→E(e). EM in e yields
   ∃e(e∈I∧O(e))→∃e E(e).
3. Drop the successor-conjunct of Infinity by PC. Restricted elimination
   in I yields the exact Infinity sentence → ∃e E(e); I is absent from
   the consequent. Append the fixed Infinity axiom and apply MP.
4. Rename the existential e binder to u=v₁₂ using the two primitive
   lines described below and MP.

This uses no Separation instance and adds no seventh fixed axiom. Infinity
is an **ambient** ZF proof premise, not a statement that a constructible
level or finite carrier satisfies Infinity.

### Pair and Union existence

For Pairing, append its fixed axiom, instantiate x at v₁₀ and y at v₁₁
with scheme 2 and MP, then rename its witness v₂ to v₁₂. For Union,
instantiate x at v₁₀ and rename the witness v₁ to v₁₂. Every recorded
substitution is literally free-for. No open assumption is generalized.

The existential rename used here starts with ∃x θ and y absent everywhere
in θ. Put η=θ[y/x]. Scheme 4 for (η,y,x) gives
θ→∃yη, because η[x/y]=θ. Rule 9 in x gives
∃xθ→∃yη, because x∉FV(∃yη). MP supplies the new endpoint. This is
the required direction of EA, not a new alpha-conversion inference rule.

### One explicit uniqueness assembly for all three operations

Let K=R(u)∧R(v), t=v₂. Universal instantiation of the two R formulas
gives their element clauses at t. For Empty these clauses are ¬(t∈u)
and ¬(t∈v); for Pair/Union both compare to the identical defining matrix.
PC therefore proves K→(t∈v↔t∈u). Conditional generalization CG in t
gives K→∀t(t∈v↔t∈u); t is not free in K. Instantiate Extensionality
at x=v,y=u and combine by PC to obtain K→v=u.

PC curries this to R(u)→(R(v)→v=u). CG in v is legitimate because
v∉FV(R(u)); it gives R(u)→∀v(R(v)→v=u). PC gives
R(u)→(R(u)∧∀v(R(v)→v=u)). EM in u, followed by MP with the
existence proof, gives the stated unique-existence endpoint. Generalize
the actual parameter indices in reverse order so the outer universal
closure is increasing.

PC emits an actual Boolean skeleton certificate followed by MP lines.
CG emits generalization, scheme 3, and MP. EM emits scheme 4, PC, and
restricted elimination. The executable code retains every primitive line;
there is no unexpanded operation theorem or semantic oracle in these proofs.

## 4. PA-verifiable arithmetic claims and proof traces

Fix the PA-total graph representations of the concrete sentinel, parser,
FV/free-for, substitution, and finite-history operations, as permitted by
`thm-primitive-recursive-numeralwise-representability`. The following is a
mathematical PA-verification argument, not a machine-checked PA derivation.

**Certificate reconstruction.** Formula parsing and substitution use the
previous decoder's finite-tree algorithms. A least unused index is bounded
by the number of forbidden indices, so fresh-index search is bounded, even
when some input indices are enormous. List union/sorting/deletion and
closure use bounded finite loops. Structural induction proves that Sep/Rep
outputs are formulas, that the designated binders capture only the intended
original free occurrences, that the uniqueness substitution is free-for,
and that the final free-variable list is empty. Closure-loop induction
proves the increasing-order endpoint. Consequently the displayed
certificate predicate is primitive recursive and PA proves its exact
reconstruction characterization, including all rejection cases.

**Whole proof checking.** Induct on decoded proof length, retaining the
parsed formula/code pairs for the checked prefix. For tag 0 use the
certificate theorem and sentencehood. For tags 1–6 use the previous
decoder's numerical/abstract correspondence; the single-line call is
correct precisely because these tags have no premise indices. For the
three rules, earlier-index checks and the prefix table supply exactly the
formulas used by the reconstructed conclusion. This proves in PA that
`verifyZF` accepts exactly the annotated derivations of the selected
ZF presentation with the requested final code. This is a syntactic
checker-correspondence theorem, **not arithmetic soundness of ZF**.

**Finite operation blocks.** PC, CG, EM, UI, and the displayed one-direction
EA preserve CheckedPrefix under their explicit side conditions. Their
checks are the corresponding finite rule cases, plus substitution/FV
induction for EA and the Boolean substitution induction for PC. The three
operation programs use the fixed numeral indices listed above. They emit
three particular finite proof codes q_E,q_P,q_U and endpoints a_E,a_P,a_U.
The trace argument therefore gives

    PA ⊢ Prf_ZF(q_E,a_E) ∧ Prf_ZF(q_P,a_P) ∧ Prf_ZF(q_U,a_U).

Here numeral bars and PA graph expansions are suppressed, not omitted
from the intended arithmetic sentences. Equivalently these are three
positive closed checker computations under the chosen representation.
The output program is not a claimed general formula-slot compiler: the
finite constants can be selected by j=0,1,2, with rejected selector output
0 otherwise. No Q totality theorem for arbitrary primitive recursion is
claimed. Decimal expansions are unnecessary because the supplied finite
programs determine the proof constants and expose all their annotations.

## 5. Executed tests and inspection command

From the repository root:

```bash
node research/support-phase-2-next-17-zf-axiom-operation-kernel.mjs
```

The test suite checks:

- All six fixed axiom certificates and their one-line proofs.
- Thirty canonical ambient schema certificates and one-line proofs:
  Separation and Replacement over five matrices and three designated
  variables; cases include absent designated variables, nested rebinding,
  unused parameters, and the exact variable index 2^80+123.
- Two separately assembled literal schema endpoints, including the local
  uniqueness-binder/bounding-variable reuse case. This supplements rather
  than replaces constructor/recognizer round trips.
- Twelve malformed/mismatched certificate rejections, including no seventh
  Empty axiom, no extra tag, wrong distinguished places, and rejection of
  biconditional Power Set under its implication-only tag.
- Accepted Empty, Pair, Union proof lists of **52, 39, 36 lines**. Their
  sentinel encodings have respectively 7,461,558, 26,193,324, 10,657,306 bits;
  no compactness or feasible scaling claim is made.
- All three proofs rejected by the unchanged logical-only profile; all
  three rejected after replacing one axiom certificate with an illegal tag.
- The existing serialized logical pilot accepted by both profiles; empty
  proofs and a self-referencing MP line rejected by the new profile.

These are executed local tests, not independent review or acceptance by an
engine gate. The code imports the existing Markdown reference factories
read-only. The full imported-file SHA-256 values at the successful test run
were:

| Imported file | SHA-256 |
|---|---|
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These record reproducibility provenance, not engine receipts or acceptance.
The first JavaScript fence is selected; the producer prefix stops before
its `let cases=0;` test section. Future edits to those factories require
rerunning the tests; this support does not freeze or certify their hashes.

## 6. The next exact missing imports

This closes the previous tag-0 recognizer omission for the selected ZF
presentation and supplies three concrete ambient operation proof imports.
It does **not** close the following blocks:

1. The instantiated/alpha-aligned quotation-list proof composer using the
   exact fresh relational copies produced by the finite-word compiler.
2. Kuratowski ordered-pair existence/uniqueness and injectivity as accepted
   annotated blocks. Its defining formula is three nested Pair relations;
   our three operation proofs do not themselves emit this composite proof.
3. Tuple-domain/functionality, update existence, and the coordinate identity
   C(t,j,c)↔((j=i∧c=b)∨(j≠i∧C(s,j,c))) under the exact tuple predicate.
   The canonical ambient Separation certificate needed to remove the old
   graph coordinate can now be checked, but the complete derived update
   proof has not been emitted.
4. The literal finite-word constructor/formula-membership clauses, a fixed
   expanded Sat_m formula, its five accepted recursive clause blocks, and
   finite-to-infinite assignment/coincidence and padding proofs.
5. The generated EVAL/VALUE/Def bridge's proof-prefix induction over arbitrary
   source formulas, using those actual imports and exact numerical endpoints.

Thus the next small proof-authoring unit is the **composite Kuratowski pair
block, including injectivity**, followed by the graph-update block; the
separate satisfaction clauses remain explicitly unsupplied. The earlier
finite-word document's mathematical update/value/padding proofs are useful
input, not already accepted proof records. No theorem-name oracle is an
acceptable shortcut for any of these imports.

Full L-Separation still additionally needs reflection and hierarchy/Def
blocks. Replacement must still pass the original unrelativized matrix
∃z(z∈a∧φ(z,w,p̄)) to the eventual L-Separation constructor. Nothing
here proves a general relativized Separation/Replacement family, GCH,
reflection, U-AX, a total PA-verified L interpretation, or Con(ZF). In
particular these ambient operation proofs do not prove that their
L-relativizations hold. The intended arithmetic consistency strength
is unchanged; no full transitive-model premise or internal Infinity in
Lω is introduced.

## 7. Sources and checked local IDs

The exact contracts read directly for this unit are:

- `def-coded-first-order-zf-theory`
- `def-set-coded-formal-derivation`
- `def-effective-theory-and-certified-godel-numbering`
- `lem-primitive-recursive-syntax-and-proof-checking`
- `thm-primitive-recursive-numeralwise-representability`

All are actual item IDs, not newly proposed suppliers. Their current
published status is a file-state observation, not a new audit stamp.

[Paulson, §4.1 and §4.3](https://arxiv.org/html/2104.12674v1#S4.SS1)
was read for relational empty/pair/union definitions and the distinction
between an ambient schema and its relativized instance. His alternative
Replacement formulation and variable representation are not imported as
the local certificate format. The concrete axioms, arithmetic programs,
proof annotations, and checks here are local constructions governed by
the repository contracts, not a claim that this source checked them.
