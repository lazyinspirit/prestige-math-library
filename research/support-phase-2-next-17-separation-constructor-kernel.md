# The Separation proof constructor: quotation, environments, and exact endpoints

Date: 2026-09-12 (Australia/Sydney).

This is isolated authoring support, not an item, accepted proof, certification,
or workflow receipt. It changes no protected content. Its mathematical
constructions are proposals/deductions for a repair author; the outstanding
arithmetized verification is stated explicitly below.

Read this after [the formal-proof-translation package](support-phase-2-next-17-formal-proof-translation.md)
and [the U-AX/U-Cohen package](support-phase-2-next-17-uax-ucohen.md).
Those files already give the guarded logical compiler, finite-template
substitution interface, choice-free reflection construction, and Replacement
reduction. This supplement does **not** repeat their proposed reflection
proof. It expands the remaining Separation-specific interface, especially
the passage from an external formula to an actual witness for membership in
Def. The [integration map](support-phase-2-next-17-batch11-integration-map.md)
and [constructibility support](support-phase-2-next-17-constructibility.md)
retain their separate arbitrary-limit and GCH obligations.

## 1. The exact target and its present status

Fix the sentinel numerical presentation, the six-scheme/three-rule calculus,
the exact ZF axiom-certificate predicate, and the raw L-relativization τ from
the earlier packages. Let AdmSep(f,z) test that f is a membership formula
and z is its designated subset variable. The parameter list is computed
from FV(f) minus z, in increasing variable-index order, not supplied freely.
Let Sep(f,z) be the exact canonical sentence constructor of
`def-coded-first-order-zf-theory`, including its fresh variables and final
universal-closure order.

The required result is a **particular total primitive-recursive function** S
with its chosen graph definition and a proof in PA of

    ∀f,z (AdmSep(f,z) → Prf_ZF(S(f,z), τ(Sep(f,z)))).       (SEP)

On rejected input set S=0. The proof checker rejects this value; it is not
the sentinel encoding of an empty list, which is 2. Function notation in
(SEP) abbreviates the selected PA graph definitions.

The published `thm-separation-in-the-constructible-universe` proves the
fixed-formula set-theoretic result. It does not claim (SEP). The existing
support specifies conditional
constructor interfaces but does not yet provide the complete annotated
template library and arithmetic induction proving (SEP). This supplement
does not silently promote either kind of evidence into that theorem.

## 2. Three objects that cannot be identified

For a formula ψ distinguish the following objects throughout the compiler:

| Object | Where it lives | What is required |
|---|---|---|
| f, the sentinel number coding ψ | Arithmetic describing syntax/proofs | Parsing, substitution, certificates, output-line checks |
| eψ, the finite set-word coding ψ | The universe of the emitted ZF proof | Constructor identities, formula membership, free-variable bounds |
| Qψ(e), a pure-membership formula naming that word | The emitted formula syntax | A generated proof of unique existence and constructor compatibility |

The pure membership language has **variables only as terms**. Neither f nor
eψ may simply be inserted as a numeral/constant term in an emitted ZF
formula. A phrase such as Sat(A, code(ψ), s) is notation requiring the third
row. Conversely, a proof that a number codes a formula does not, by itself,
supply the internal set-word witness required by Def. The operative Def
contract is `def-definable-subsets-of-a-membership-structure`.

The set-word constructors are exactly the fully delimited finite-function
words in `def-set-coded-terms-and-formulas`, not Paulson's de Bruijn trees
and not the alternative pairing injection in
`lem-countable-henkin-syntax-coding`. A translation between presentations
may be used only with its own specified endpoint/constructor verification.

### 2.1 A direct quotation construction, with no proof search

Fix once a concrete hereditarily finite realization of the tagged membership
alphabet and its single binary relation symbol. Match the published tagged
union and serialization, and record that realization in the adapter; the
current definitions do not choose numerical values for every token. If an
author instead retains token parameters, the adapter must carry those
parameters and discharge its signature assumptions. Do not assume arbitrary
set-signature symbols are hereditarily finite.

For the fixed finite alphabet realization, build a finite acyclic construction
list for eψ. Its nodes use only these set operations:

    Empty(u)       := ∀t ¬(t∈u),
    Pair(u,v,w)    := ∀t(t∈w ↔ (t=u ∨ t=v)),
    Union(u,w)     := ∀t(t∈w ↔ ∃b(b∈u ∧ t∈b)).

Every node's inputs are earlier nodes. Kuratowski pairs and finite graphs
are compositions of these operations. Construct the finite ordinals needed
for variable indices by iterating successor u↦u∪{u}; construct a word as its
finite graph of index/token pairs. Duplicated graph entries cause no problem
for the set constructor, but word-function uniqueness is proved from the
distinct ordinal indices, not assumed from a list's appearance.

For a construction list h with final node r define Q_h(e) by existentially
binding all node variables, conjoining their node equations, and equating
the last node with e. Freshen these variables against every surrounding
interface. Each node has a unique value: use fixed ZF proofs of the three
operations' existence and Extensionality for uniqueness. Empty has a fixed
ZF derivation, for example from the stated Infinity sentence; this is an
ambient proof, not an assertion of Infinity in a constructible level.

Induction on the construction list supplies a proof of ∃!e Q_h(e). The same
induction supplies proofs relating parent and child words to the literal
published enc constructor. Appending the constructor-membership clauses
gives a proof that the named object is a formula; a syntax scan computes
and proves its free-variable bound. Thus quotation is a finite proof
construction, not an appeal to a hypothetical name for each arbitrary set.

There is no elementary-size claim here. An input variable index i may require
i successor stages despite a short binary encoding. Those stages are still
primitive recursion on i. All node and proof-list extensions use the fixed
primitive-recursive list operations. This construction does not run a
universal evaluator or search until a ZF proof happens to appear.

**Required verification, not supplied as an accepted template here:** the
concrete alphabet adapter, the three operation proof blocks, their logical
composition/uniqueness blocks, constructor equations, and the PA induction
for the generated quotation proof. Calling their combined interface Q is
not a claim that its proof object has already been authored.

## 3. The satisfaction bridge has three separately checked outputs

Normalize an admissible source matrix φ(z,p₁,…,pᵣ). Rename bound variables
away from its interface and rename its free variables so that the Def
matrix is

    χ(v₀,…,vᵣ₊₁) := v₀∈v₁ ∧ φ*(v₀,v₂,…,vᵣ₊₁).

Here v₁ will receive the bounding set a, and vᵢ₊₁ receives pᵢ. The renaming
is accompanied by a generated logical equivalence proof to the exact
original formula. It is not a modification of the source schema policy.
Even when r=0, a is still one parameter of χ.

Let m be one plus the greatest index occurring **anywhere** in χ, including
bound occurrences; choose m≥1. A finite assignment s:m→A is a finite
function graph. Use the published finite-tuple satisfaction convention.
All notation for ordinals, coordinates and graph update below is expanded
into fresh-variable membership formulas in actual endpoints. A displayed
numerical i or m is named by the §2 construction, not inserted as a term.

The internalization output must include all three proofs:

1. Qχ(e) names a formula e with FV(e)⊆{v₀,…,vᵣ₊₁}.
2. The parameter tuple (a,p₁,…,pᵣ) belongs to A^(r+1) under the stated
   membership assumptions. The empty original parameter-list case is valid.
3. Satisfaction of e with those values agrees with the syntactically
   constructed χ^A. This third assertion is not a consequence of 1–2 alone.

This separation of obligations is supported by Paulson's explicit
comprehension/internalization procedure: the formula equivalence, environment
typing, and internal formula membership are distinct subgoals. His implementation
uses a different binding representation; its generated proofs are not
certificates for this repository's checker. See
[Paulson, §§7.4–7.5](https://arxiv.org/html/2104.12674v1#S7.SS4).

### 3.1 A structural bridge constructor with an exact induction invariant

Use predicates Tuple_m(A,s), Coord(s,i,b), and Upd(s,i,b,s′), with their
finite-function definitions fixed. Generate an assignment-evaluation formula
Eψ(A,s) recursively from ψ:

    E_(vi=vj) := ∃u,v(Coord(s,i,u) ∧ Coord(s,j,v) ∧ u=v),
    E_(vi∈vj) := ∃u,v(Coord(s,i,u) ∧ Coord(s,j,v) ∧ u∈v),
    E_(¬θ) := ¬Eθ,
    E_(θ∧η) := Eθ ∧ Eη,
    E_(∃vi θ) := ∃b(b∈A ∧ ∃s′(Upd(s,i,b,s′) ∧ Eθ(A,s′))).

Every displayed copy is freshened; Eψ is a generated formula, not a uniform
truth predicate applied to a formula variable. For each parsed subformula
ψ, store its quotation interface and a proof with endpoint

    A≠∅ ∧ Qψ(e) ∧ Tuple_m(A,s)
        → (Sat_fin(A,e,s) ↔ Eψ(A,s)).                       (EVALψ)

The same fixed m is sufficient for every node of χ. At atoms use the
coordinate and satisfaction clauses. At negation/conjunction combine the
child endpoint(s) with the corresponding satisfaction clause. At ∃vᵢ use
i<m, existence/uniqueness of graph update, and preservation of Tuple_m;
instantiate the child endpoint at the updated assignment. No quantification
over an infinite assignment space is needed for these constructor cases.

Produce in parallel a value-substitution bridge. Under Tuple_m(A,s) and
Coord(s,j,bⱼ) for j∈FV(ψ), its endpoint is

    Eψ(A,s) ↔ ψ^A(bⱼ : j∈FV(ψ)).                          (VALUEψ)

Only free occurrences are replaced on the right, after protecting binders.
At an existential node, the update-coordinate identities give the child's
values; the quantified witness becomes its new i-coordinate. The coordinate
side conditions justify the equivalence in both directions. Quantifier
renaming and substitution yield the exact literal endpoint, not merely an
alpha-equivalent formula.

For the shorter tuple used in Def, pad to length m by assigning x to every
unused coordinate, while assigning v₀↦x, v₁↦a, and vᵢ₊₁↦pᵢ. For x∈A
this is an A-valued assignment. Constructor induction/coincidence proves
independence of the padding. This gives precisely the finite-tuple relation
in Def, rather than silently changing that definition to use m parameters.
For an empty bounding set a the same argument defines the empty subset of
the nonempty reflecting level, so no exceptional proof branch is needed.

`thm-relativization-and-set-satisfaction` supplies the mathematical fixed-
formula comparison. `lem-finite-tuple-satisfaction-is-absolute` also states
a transitive-ZF-model comparison, but **that hypothesis is not available for
an arbitrary Lλ**. Here only ambient ZF finite-assignment recursion and its
coincidence comparison are used. No internal Infinity or internal ZF in Lλ
is inferred, including when λ=ω. In particular, this bridge does not supply
the separate arbitrary-limit internal-history absoluteness theorem.

The required arithmetic assertion for the combined constructor B is

    PA ⊢ Form(f) → Prf_ZF(B(f), Bridge(f)),                  (BRIDGE)

where Bridge(f) is the literal universal closure of quotation existence,
formula/arity membership, and the appropriate EVAL/VALUE/padding conclusions.
This is a syntax-family verification, not just checking one standard input.
The missing quotation/finite-assignment/hygiene templates remain prerequisites
of (BRIDGE); the displayed semantic induction does not claim they are checked.

## 4. The Separation assembly, without a circular appeal to internal ZF

Use the reflection constructor H_L specified in the U-AX package, with the
**syntactic** endpoint asserting arbitrarily high nonzero limits λ where
φ*^L and φ*^(Lλ) agree on Lλ-valued free inputs. A reflection output using
set satisfaction instead must be converted using B; choose one interface
and make that conversion explicit. Do not substitute φ into an opaque
predicate slot and assume substitution commutes with relativization.
The fixed-formula source contract is
`lem-finite-reflection-along-constructible-levels`; it does not itself
assert the PA-verified constructor H_L.

Given H_L, B, and the fixed hierarchy/Def proof blocks, emit these steps:

1. Assume the exact D(a),D(pᵢ) guards and obtain a level containing a and
   all parameters. Choose a reflecting nonzero limit λ above that level;
   write A=Lλ. Prove A≠∅ and a,pᵢ∈A.
2. Apply the **ambient** canonical Separation instance for the already
   generated membership formula χ^A to form

       y = {x∈A : x∈a ∧ φ*^A(x,p̄)}.

   Recompute its complete parameter list, including A, and its certificate.
   A source formula's parameter list cannot be reused after translation.
3. Use the three outputs of B and the tuple in §3 to exhibit this very y
   as a definable subset of A. The named code is that of χ, not that of
   χ^A with A accidentally treated as an extra structure parameter.
4. The fixed Def/level block gives y∈Def(A)=L_(λ+1), hence D(y).
   Transitivity gives x∈A whenever x∈a; reflection then identifies the
   definition with x∈a∧φ^L(x,p̄).
5. Restore the source variable names, discharge the guards with their
   permitted-variable conditions, and close in the source constructor's
   order. Append Boolean/quantifier normalization so the final code is
   **exactly** τ(Sep(f,z)).

Step 2 is an ordinary ZF axiom line in the emitted proof. It is not an
invocation of the translated Separation instance being constructed. H_L's
least-witness bounds also use ambient schema instances. Thus the dependency
order is ambient ZF → reflected definability → L-Separation, not internal
Replacement → reflection → internal Separation → internal Replacement.
No set is asserted constructible merely because all its members are.

## 5. The PA proof needs a prefix invariant, not ordinal computation

Implement each construction by primitive recursion on finite syntax or on
the encoded construction-list length, retaining its finite history. At every
output append, rebase premise indices and rebuild annotations. The earlier
support's INST theorem is needed for formula-slot templates; a prose lemma
name is not a legal proof line of the specified calculus.

The PA induction invariant must include:

- each processed source node has the stated quotation, arity and EVAL/VALUE
  endpoints, with its exact variable-renaming environment;
- every output line passes its scheme/rule/certificate test and every cited
  premise index is earlier than that line;
- parameter lists and universal closures are recalculated from the actual
  emitted matrices, and logical substitutions match the checker's exact
  free-for constructor;
- each macro's open premises and generalized/eliminated variables satisfy
  the open-assumption restrictions; no guard is silently generalized away;
- the last line after assembly is τ(Sep(f,z)), by numerical syntax equality.

For **specified** primitive-recursive updates, PA proves totality by the
corresponding primitive-recursion induction. For **supplied and verified**
finite templates, the above syntax/prefix induction proves correctness.
These are different obligations. Neither follows here merely from the
published ZF assertions in
`lem-certified-syntax-coding-operations-are-primitive-recursive` and
`lem-primitive-recursive-syntax-and-proof-checking`. The chosen proof
predicates and verifier are those of
`def-effective-theory-and-certified-godel-numbering` and
`def-set-coded-formal-derivation`. No weaker arithmetic base is claimed
without its own proof.

The ω-iteration of ordinal bounds occurs inside the emitted ZF proof; S
only writes its finite derivation. Likewise PA verifies proof strings, not
the truth of every translated ZF axiom. Hence (SEP) would not amount to a
truth predicate or an arithmetic soundness assertion for ZF.

Useful adversarial constructor tests include a designated variable absent
from the matrix; no original parameters; a large bound-variable index; nested
rebinding; fresh-variable collisions with A and the quotation witnesses;
malformed codes; and a matrix whose ambient translation introduces new
free parameters. Each successful test checks exact endpoints/certificates;
finitely many tests still do not establish the uniform PA assertion.

## 6. How this port enters Replacement and finite interpretation

For an admissible Replacement matrix φ(z,w,p̄), start from its **translated**
functional hypothesis. On z∈a, ambient Replacement for

    D(w) ∧ φ^L(z,w,p̄)

gives the actual image Y. Ambient Replacement on the uniquely defined
constructibility ranks gives an ordinal γ with Y⊆Lγ. The fixed hierarchy
block gives Lγ∈L. This is a bound on all possible outputs, not a selection
of witness representatives; it uses no AC.

Invoke S on the original-language matrix

    η(w,a,p̄) := ∃z(z∈a ∧ φ(z,w,p̄)),

with subset variable w and bounding set Lγ. The result's relativization
defines exactly Y, so Y∈L. Supplying the actual ambient schema certificates,
fixed rank proof block, and exact closure/renaming macros turns this assembly
into the required PA-verified Replacement constructor. Do not pass φ^L as
S's original matrix: that would apply relativization a second time.
The relevant fixed-formula contracts are
`thm-replacement-in-the-constructible-universe` and
`prop-constructible-levels-transitivity-ordinals-and-rank`.

For a certified finite target axiom list Δ, dispatch its Separation entries
to S, Replacement entries to this constructor, and fixed entries to their
actual fixed translated-axiom proofs. After expanding all proof macros,
scan the emitted ZF axiom lines to obtain the finite source support Γ(Δ).
Their certificates prove membership in the exact ZF theory; Γ need not be
equal to Δ or closed under another application of the support operation.
Prefix induction then supplies the finite interpretation/proof translation.

This still needs the separate fixed AC and GCH translated proof blocks,
the generic guarded logical compiler and the contradiction bridge from the
earlier package. It preserves the intended conclusion
PA ⊢ Con(ZF)→Con(ZFC+GCH), conditional here on supplying all those proofs.
It neither assumes a countable transitive model of full ZFC nor asserts
that ZF proves its own consistency. The Cohen/¬(V=L) application has its
own remaining constructor obligations; nothing here closes them.

## 7. Minimal remaining lemma and handoff boundary

The smallest consumer-facing missing family remains **(SEP) for a specified
S**, not “each standard Separation instance is provable.” A finite accepted
template package for quotation, finite assignments, hygiene/INST, reflection
and hierarchy/Def, followed by the explicit recursions and PA invariant above,
is a sufficient way to supply it. Decimal proof-code dumps are not mandatory,
but complete formal macro derivations and their uniform verification are.

Closed at the level of this support's deductions are the separation of the
three coding layers; a direct finite-set quotation design; the full-index
assignment/padding interface; the noncircular Separation proof assembly;
and the exact matrix passed from Replacement to S. No new mathematical
axiom, countable-model premise, or internal-Infinity premise is needed for
these designs.

Still open in the supplied material are the concrete token/serialization
adapter and actual annotated proof templates, the PA proofs of BRIDGE and
the reflection constructor, and therefore SEP itself. The other fixed-axiom,
GCH, arbitrary-limit, and generic proof-translation obligations retain their
previous status. This is **not** a finding that a published fixed-formula
theorem is false, and it does not authorize changing an original consumer
into a theorem with these unproved obligations as added premises.

Paulson explicitly distinguishes the omitted metatheoretic consistency
inference from his object-theory proofs. This explains the evidential limit
of using that formalization as a source, not an impossibility of proving
(SEP) in PA. See
[Paulson, §§2 and 2.4](https://arxiv.org/html/2104.12674v1#S2).
The detailed constructor designs above are local deductions, not claims
that Paulson provided this repository's numerical proof map. His HTML
source was successfully read; a fresh browser request for Marks's UCLA PDF
returned an internal error, so it is not used as new source evidence here.

## 8. Referenced item-ID audit

The following IDs were checked against their actual item files; each was
present with status `published` when inspected. Publication is a file-state
observation, not a new proof audit or certification.

- `def-coded-first-order-zf-theory`
- `def-definable-subsets-of-a-membership-structure`
- `def-effective-theory-and-certified-godel-numbering`
- `def-set-coded-formal-derivation`
- `def-set-coded-terms-and-formulas`
- `lem-certified-syntax-coding-operations-are-primitive-recursive`
- `lem-countable-henkin-syntax-coding`
- `lem-finite-reflection-along-constructible-levels`
- `lem-finite-tuple-satisfaction-is-absolute`
- `lem-primitive-recursive-syntax-and-proof-checking`
- `prop-constructible-levels-transitivity-ordinals-and-rank`
- `thm-relativization-and-set-satisfaction`
- `thm-replacement-in-the-constructible-universe`
- `thm-separation-in-the-constructible-universe`

The principal downstream targets are
`lem-finite-fragment-l-interpretation-with-gch` and
`thm-formal-consistency-of-zfc-plus-gch-from-zf`. Both were verified in
`research/phase-2-next-17-batch-11.pages.json`; neither had an item file at
inspection. Their manifest identities are not introduced or modified here.
Q, B, H_L, INST, BRIDGE and SEP are local construction/obligation labels,
not proposed registered item IDs. No missing or invented item is used as a
load-bearing supplier in this document.
