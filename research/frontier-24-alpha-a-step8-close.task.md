# Step 8 — group **a**, run `frontier-24`

You are the group Alpha for batches **1**, **2**, **7**: 3 A/B pair(s), 6 page(s), 114 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-24-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `noether-normalisation-and-nullstellensatz` | A | commutative-algebra | 111.013 | `integral-extensions-and-going-up-examples`, `algebraic-closure-embeddings-and-separability`, `finite-fields-and-cyclotomic-extensions` |
| 1 | `noether-normalisation-and-nullstellensatz-examples` | B | commutative-algebra | 111.014 | `noether-normalisation-and-nullstellensatz` |
| 2 | `induced-representations-and-frobenius-reciprocity` | A | abstract-algebra | 149 | `characters-and-the-orthogonality-relations`, `free-modules-and-exact-sequences` |
| 2 | `induced-representations-and-frobenius-reciprocity-examples` | B | abstract-algebra | 150 | `induced-representations-and-frobenius-reciprocity` |
| 7 | `the-diagram-lemmas-in-an-abelian-category` | A | category-theory | 365.021 | `exactness-and-the-member-calculus-examples` |
| 7 | `the-diagram-lemmas-in-an-abelian-category-examples` | B | category-theory | 365.022 | `the-diagram-lemmas-in-an-abelian-category` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `noether-normalisation-and-nullstellensatz` — Noether Normalisation and Nullstellensatz (28 item(s))

- `lem-maximal-algebraically-independent-subset-is-a-transcendence-basis` · lemma — A maximal algebraically independent set is a transcendence basis
- `lem-transcendence-basis-exchange` · lemma — One element of a transcendence basis can be exchanged for a suitable rival
- `cor-transcendence-degree-tower-additivity` · corollary — Transcendence degree is additive in finite towers
- `lem-noether-normalisation-nonzero-polynomial-made-monic` · lemma — Over an infinite field, a triangular change makes a nonzero polynomial monic
- `lem-noether-normalisation-finite-field-exponent-substitution` · lemma — Rapidly increasing power substitutions isolate one highest x_n-term
- `lem-noether-normalisation-one-relation-reduction` · lemma — A monic relation makes the last generator integral over the earlier ones
- `lem-noether-normalisation-inductive-integrality` · lemma — Induction produces a polynomial subalgebra over which the affine algebra is integral
- `cor-noether-normalisation-module-finiteness` · corollary — Noether normalisation yields module finiteness over a polynomial subring
- `cor-noether-normalisation-dimension-lower-bound` · corollary — A domain finite over a polynomial ring has dimension at least the number of variables
- `lem-zariski-lemma-one-variable-localisation-not-finite` · lemma — The rational function field k(t) is not finite over k[t]
- `lem-zariski-lemma-localised-polynomial-ring-not-field` · lemma — A finitely localized polynomial ring in positive dimension is not a field
- `lem-zariski-lemma-transcendence-basis-reduction` · lemma — A finite-type field reduces to a localization over a transcendence basis
- `cor-field-finite-type-over-a-field-is-a-finite-extension` · corollary — A field finitely generated as a k-algebra is a finite extension of k
- `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite` · lemma — A maximal ideal of an affine algebra has finite residue field over the base field
- `lem-evaluation-ideal-is-maximal` · lemma — Evaluation at a point has kernel (x_1-a_1, ..., x_n-a_n)
- `cor-weak-nullstellensatz-algebraically-closed-coordinate-form` · corollary — Over an algebraically closed field, every maximal ideal is an evaluation ideal
- `lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus` · lemma — The Rabinowitsch auxiliary ideal has no common zero
- `lem-rabinowitsch-unit-ideal-consequence` · lemma — The auxiliary ideal is the unit ideal
- `lem-rabinowitsch-substitution-clears-denominators` · lemma — Substituting y = 1/f and clearing denominators yields a power of f in I
- `cor-strong-nullstellensatz-two-inclusions` · corollary — Strong Nullstellensatz: I(V(I)) equals the radical of I
- `lem-affine-algebra-points-as-k-algebra-maps` · lemma — k-points of k[x_1, ..., x_n]/I are exactly k-algebra maps to k
- `cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field` · corollary — Over an algebraically closed field, maximal ideals of an affine algebra are kernels of points
- `lem-vanishing-ideal-is-radical` · lemma — A vanishing ideal is always radical
- `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical` · lemma — An ideal and its radical have the same zero locus
- `cor-affine-radical-ideal-point-separation` · corollary — A radical ideal can be separated from an outside element by a point
- `lem-jacobson-ring-prime-as-intersection-of-maximals` · lemma — A ring is Jacobson exactly when every prime is an intersection of maximal ideals above it
- `lem-finite-type-jacobson-residue-extension` · lemma — Finite-type maps from Jacobson rings induce finite residue-field extensions at maximal ideals
- `cor-affine-closed-points-detect-radicals` · corollary — In a finite-type algebra over a field, radical ideals are intersections of maximal ideals

### `noether-normalisation-and-nullstellensatz-examples` — Noether Normalisation and Nullstellensatz — Examples (7 item(s))

- `ex-transcendence-basis-and-algebraic-remainder` · example — A transcendence basis of k(s, t, sqrt(s+t)) over k
- `ex-noether-normalisation-triangular-change` · example — A triangular change makes a bivariate relation monic
- `ex-noether-normalisation-finite-field-weight-choice` · example — Finite-field normalization needs the weight trick
- `ex-zariski-lemma-denominator-obstruction` · example — A new irreducible denominator stays outside a finitely generated subalgebra of k(t)
- `ex-weak-nullstellensatz-over-real-numbers` · example — Over R, not every maximal ideal is an evaluation ideal
- `ex-strong-nullstellensatz-nonradical-ideal` · example — I(V(x^2, xy)) keeps only the radical information
- `ex-rabinowitsch-identity-explicit` · example — A small Rabinowitsch identity written out completely

### `induced-representations-and-frobenius-reciprocity` — Induced Representations, Frobenius Reciprocity and Applications (27 item(s))

- `def-induced-r-linear-g-module-by-h-covariant-functions` · definition — The induced $R$-linear $G$-module $\operatorname{Ind}_H^G W$ as $H$-covariant functions on $G$
- `prop-induced-module-decomposes-over-a-left-transversal` · proposition — A left transversal identifies $\operatorname{Ind}_H^G W$ with a direct sum of $[G:H]$ copies of $W$
- `cor-dimension-of-an-induced-finite-dimensional-representation` · corollary — The dimension of an induced finite-dimensional representation is $[G:H]\dim W$
- `rem-induced-representation-agrees-with-the-tensor-product-model` · remark — The function model of induction agrees with the tensor-product model $k[G]\otimes_{k[H]}W$
- `def-induced-character-of-a-complex-representation` · definition — The induced character $\operatorname{Ind}_H^G\chi$ of a complex character
- `thm-frobenius-formula-for-induced-characters` · theorem — Frobenius' formula for the character of an induced representation
- `thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets` · theorem — Inducing the trivial representation gives the permutation representation on $G/H$
- `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules` · theorem — Induction is left adjoint to restriction for finite-group modules over a commutative ring
- `cor-frobenius-reciprocity-for-complex-characters` · corollary — Frobenius reciprocity for complex characters
- `def-virtual-character-and-character-ring-of-a-finite-group` · definition — Virtual characters and the character ring $R(G)$ of a finite group
- `thm-transitivity-of-induction-for-finite-groups` · theorem — Induction is transitive along subgroup chains
- `prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings` · proposition — Induction and restriction satisfy the projection formula on character rings
- `cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction` · corollary — Every irreducible complex character occurs in the induction of an irreducible constituent of its restriction
- `def-double-cosets-of-two-subgroups` · definition — Double cosets $K\backslash G/H$ of two subgroups
- `def-conjugate-representation-and-conjugate-character` · definition — Conjugate representations and conjugate characters on conjugate subgroups
- `thm-mackey-double-coset-formula-for-restricting-an-induced-character` · theorem — Mackey's double-coset formula for restricting an induced character
- `thm-mackeys-irreducibility-criterion-for-finite-groups` · theorem — Mackey's irreducibility criterion for finite groups
- `def-central-character-of-an-irreducible-complex-character` · definition — The central character of an irreducible complex character
- `prop-class-sums-act-by-central-character-scalars` · proposition — Class sums act on an irreducible representation by central-character scalars
- `thm-central-characters-are-algebraic-integers` · theorem — The values of a central character are algebraic integers
- `thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order` · theorem — The degree of an irreducible complex character divides $|G|$
- `thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center` · theorem — The degree of an irreducible complex character divides $[G:Z(G)]$
- `cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian` · corollary — A finite group with an irreducible complex character of degree greater than $1$ is nonabelian
- `lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant` · lemma — An algebraic-integer average of roots of unity is either $0$ or a common root of unity
- `thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action` · theorem — A conjugacy class of size coprime to $\chi(1)$ forces either $\chi(g)=0$ or scalar action
- `thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup` · theorem — A conjugacy class of prime-power size forces a proper nontrivial normal subgroup
- `thm-burnsides-p-a-q-b-theorem` · theorem — Burnside's $p^aq^b$ theorem

### `induced-representations-and-frobenius-reciprocity-examples` — Induced Representations, Frobenius Reciprocity and Applications — Examples (9 item(s))

- `ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character` · example — Inducing a nontrivial character of a three-cycle subgroup of $S_3$ gives an irreducible degree-two character
- `ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters` · example — Restricting that degree-two $S_3$ character to the three-cycle subgroup gives the two nontrivial linear characters
- `ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character` · example — Inducing the trivial character of a subgroup of order two in $S_3$ gives $1$ plus an irreducible degree-two character
- `ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions` · example — Frobenius reciprocity matches multiplicities in the two preceding $S_3$ inductions
- `ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence` · example — $C_4$ shows that divisibility of irreducible degrees by $|G|$ is not an equivalence
- `fs-an-induced-irreducible-complex-character-is-always-irreducible` · false-statement — An induced irreducible complex character is always irreducible
- `fs-induction-followed-by-restriction-is-the-identity-on-complex-representations` · false-statement — Induction followed by restriction is the identity on complex representations
- `fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible` · false-statement — Restriction of an irreducible complex representation is always irreducible
- `fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree` · false-statement — Every divisor of $|G|$ is an irreducible character degree

### `the-diagram-lemmas-in-an-abelian-category` — The Diagram Lemmas in an Abelian Category (35 item(s))

- `thm-short-five-lemma-in-an-abelian-category` · theorem — Short five lemma in an abelian category
- `cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible` · corollary — A morphism of short exact sequences with invertible outer maps is invertible
- `thm-short-five-lemma-by-pullback-without-members` · theorem — Short five lemma by pullback without members
- `def-snake-data` · definition — Snake data
- `thm-the-connecting-morphism-exists-and-is-unique` · theorem — The connecting morphism exists and is unique
- `rem-the-connecting-morphism-depends-on-no-choices` · remark — The connecting morphism depends on no choices
- `thm-snake-lemma-in-an-abelian-category` · theorem — Snake lemma in an abelian category
- `thm-snake-lemma-under-the-weaker-stacks-hypotheses` · theorem — Snake lemma under the weaker Stacks hypotheses
- `def-the-arrow-category-of-an-abelian-category` · definition — The arrow category of an abelian category
- `thm-naturality-of-the-connecting-morphism` · theorem — Naturality of the connecting morphism
- `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake` · corollary — The kernel-cokernel sequence of a composite is a snake
- `thm-four-lemma-in-an-abelian-category` · theorem — Four lemma in an abelian category
- `thm-weak-four-lemma-with-the-exactness-hypotheses-named` · theorem — Weak four lemma with the exactness hypotheses named
- `rem-the-two-halves-of-the-four-lemma-are-mutually-dual` · remark — The two halves of the four lemma are mutually dual
- `thm-sharp-five-lemma-in-an-abelian-category` · theorem — Sharp five lemma in an abelian category
- `thm-five-lemma-in-an-abelian-category` · theorem — Five lemma in an abelian category
- `rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle` · remark — Why the five lemma asks for isomorphisms in the middle
- `lem-half-nine-lemma` · lemma — Half nine lemma
- `thm-nine-lemma-in-an-abelian-category` · theorem — Nine lemma in an abelian category
- `thm-nine-lemma-variants-by-which-rows-are-assumed-exact` · theorem — Nine lemma variants by which rows are assumed exact
- `rem-why-the-middle-nine-lemma-needs-a-zero-composite` · remark — Why the middle nine lemma needs a zero composite
- `thm-sharp-nine-lemma` · theorem — Sharp nine lemma
- `thm-symmetric-nine-lemma` · theorem — Symmetric nine lemma
- `thm-the-nine-lemma-follows-from-the-snake-lemma` · theorem — The nine lemma follows from the snake lemma
- `thm-the-splitting-lemma-follows-from-the-nine-lemma` · theorem — The splitting lemma follows from the nine lemma
- `thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma` · theorem — Noether isomorphism theorems recovered from the nine lemma
- `thm-the-pullback-and-pushout-theorems` · theorem — The pullback and pushout theorems
- `thm-the-diagram-lemmas-hold-in-the-opposite-category` · theorem — The diagram lemmas hold in the opposite category
- `thm-an-exact-functor-transports-every-diagram-lemma` · theorem — An exact functor transports every diagram lemma
- `thm-five-lemma-for-a-morphism-of-long-exact-sequences` · theorem — Five lemma for a morphism of long exact sequences
- `fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction` · false-statement — FALSE: the connecting morphism depends on the choices made in its construction
- `fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic` · false-statement — FALSE: the five lemma needs only that the two middle maps are monic
- `fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero` · false-statement — FALSE: the middle nine lemma holds without assuming the composite is zero
- `fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows` · false-statement — FALSE: the snake lemma is just a pair of short exact kernel and cokernel rows
- `fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem` · false-statement — FALSE: the diagram lemmas in an abelian category follow from the module case by the embedding theorem

### `the-diagram-lemmas-in-an-abelian-category-examples` — The Diagram Lemmas in an Abelian Category — Examples (8 item(s))

- `ex-the-published-module-five-lemma-as-an-instance` · example — The published module five lemma as an instance
- `ex-the-published-module-snake-lemma-as-an-instance` · example — The published module snake lemma as an instance
- `ex-the-published-module-four-lemma-as-an-instance` · example — The published module four lemma as an instance
- `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups` · example — The connecting morphism computed for a short exact sequence of abelian groups
- `ex-the-snake-lemma-applied-to-multiplication-by-an-integer` · example — The snake lemma applied to multiplication by an integer
- `ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups` · example — The nine lemma verified on a diagram of cyclic groups
- `cex-a-snake-configuration-whose-kernel-row-is-not-short-exact` · counterexample — A snake configuration whose kernel row is not short exact
- `ex-the-short-five-lemma-chased-with-members` · example — The short five lemma chased with members

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-24-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-24`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
