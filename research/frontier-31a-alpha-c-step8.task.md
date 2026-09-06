# Step 8 adjudication — group **c**, run `frontier-31a`

You are the group Alpha for batches **11**, **13**, **14**: 3 A/B pair(s), 6 page(s), 132 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 11 | `koszul-complexes-and-regular-sequences` | A | commutative-algebra | 365.901 | `zariski-topology-on-prime-spectra-examples`, `long-exact-sequences-in-homology` |
| 11 | `koszul-complexes-and-regular-sequences-examples` | B | commutative-algebra | 365.902 | `koszul-complexes-and-regular-sequences` |
| 13 | `projective-algebraic-sets-projective-morphisms-and-cones` | A | algebraic-geometry | 366.045 | `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` |
| 13 | `projective-algebraic-sets-projective-morphisms-and-cones-examples` | B | algebraic-geometry | 366.046 | `projective-algebraic-sets-projective-morphisms-and-cones` |
| 14 | `affine-schemes-and-the-structure-sheaf` | A | scheme-theory | 366.061 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples`, `zariski-topology-on-prime-spectra` |
| 14 | `affine-schemes-and-the-structure-sheaf-examples` | B | scheme-theory | 366.062 | `affine-schemes-and-the-structure-sheaf` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `koszul-complexes-and-regular-sequences` — Koszul Complexes and Regular Sequences (51 item(s))

- `def-exterior-algebra-of-a-finite-free-module` · definition
- `lem-exterior-algebra-basis-monomials` · lemma
- `lem-exterior-multiplication-koszul-sign-rule` · lemma
- `def-koszul-complex-of-a-sequence-with-coefficients` · definition
- `lem-koszul-differential-coordinate-formula` · lemma
- `lem-koszul-differential-square-pairwise-cancellation` · lemma
- `lem-koszul-differential-is-well-defined-and-squares-to-zero` · lemma
- `cor-empty-koszul-complex-is-the-coefficient-module` · corollary
- `lem-one-element-koszul-complex` · lemma
- `cor-one-element-koszul-homology` · corollary
- `thm-basic-koszul-homology` · theorem
- `lem-koszul-complex-concatenation-tensor-isomorphism` · lemma
- `lem-koszul-append-one-element-mapping-cone-identification` · lemma
- `lem-koszul-mapping-cone-homology-exact-sequence` · lemma
- `thm-koszul-concatenation-and-mapping-cone` · theorem
- `lem-koszul-generator-contraction-homotopy` · lemma
- `cor-sequence-ideal-annihilates-koszul-homology` · corollary
- `lem-koszul-generators-act-null-homotopically` · lemma
- `cor-koszul-homology-supported-on-sequence-vanishing-set` · corollary
- `lem-koszul-complex-localises-termwise` · lemma
- `cor-koszul-homology-localises` · corollary
- `lem-koszul-complex-flat-base-change` · lemma
- `cor-koszul-homology-flat-base-change` · corollary
- `lem-koszul-generator-matrix-chain-map` · lemma
- `cor-koszul-complex-invariant-under-invertible-generator-change` · corollary
- `thm-functoriality-base-change-and-generator-change-for-koszul-complexes` · theorem
- `def-regular-sequence-on-a-module` · definition
- `lem-regular-sequence-first-element-boundary` · lemma
- `lem-regular-sequence-tail-on-quotient` · lemma
- `cor-initial-subsequences-of-a-regular-sequence-are-regular` · corollary
- `thm-localisation-and-flat-base-change-of-regular-sequences` · theorem
- `lem-regular-one-element-koszul-acyclicity` · lemma
- `lem-regular-sequence-koszul-acyclicity-induction` · lemma
- `thm-regular-sequences-give-acyclic-koszul-complexes` · theorem
- `cor-koszul-complex-resolves-a-regular-quotient` · corollary
- `lem-local-koszul-h-one-detects-first-regularity-failure` · lemma
- `lem-local-koszul-acyclicity-inductive-converse` · lemma
- `thm-koszul-acyclicity-characterises-local-regular-sequences` · theorem
- `cor-local-koszul-acyclicity-iff-regular-sequence` · corollary
- `def-koszul-regular-and-h-one-regular-sequences` · definition
- `lem-koszul-regular-implies-h-one-regular` · lemma
- `lem-h-one-regular-local-implies-koszul-regular` · lemma
- `lem-regular-sequence-permutation-adjacent-swap` · lemma
- `cor-regular-sequences-permutable-local` · corollary
- `lem-positive-powers-of-a-regular-sequence-remain-regular` · lemma
- `cor-regularity-notions-coincide-local-finite` · corollary
- `thm-regularity-notions-and-permutation-invariance-local` · theorem
- `def-minimal-free-resolution-over-a-local-ring` · definition
- `def-koszul-betti-numbers-over-a-local-ring` · definition
- `lem-koszul-resolution-minimality-maximal-ideal-sequence` · lemma
- `cor-complete-intersection-betti-numbers-binomial` · corollary

### `koszul-complexes-and-regular-sequences-examples` — Koszul Complexes and Regular Sequences — Examples (12 item(s))

- `ex-koszul-complex-one-and-two-elements` · example
- `ex-koszul-complex-polynomial-variables` · example
- `ex-koszul-resolution-complete-intersection` · example
- `ex-koszul-homology-zero-divisor` · example
- `ex-nonpermutable-regular-sequence` · example
- `ex-koszul-homology-after-localisation` · example
- `ex-empty-and-unit-koszul-boundaries` · example
- `ex-koszul-d-square-sign-check-three-elements` · example
- `ex-koszul-homology-of-a-zero-divisor` · example
- `ex-generator-change-koszul-isomorphism` · example
- `ex-regular-sequence-powers-and-permutation` · example
- `ex-koszul-resolution-betti-table-complete-intersection` · example

### `projective-algebraic-sets-projective-morphisms-and-cones` — Projective Algebraic Sets Projective Morphisms and Cones (25 item(s))

- `def-projective-space-points` · definition — Projective space as scalar-equivalence classes
- `def-homogeneous-polynomial-and-homogeneous-ideal` · definition — Homogeneous polynomials and homogeneous ideals
- `lem-homogeneous-polynomial-zero-locus-well-defined` · lemma — A homogeneous zero locus is well-defined on projective points
- `def-projective-algebraic-set` · definition — Projective algebraic set
- `thm-projective-zariski-topology` · theorem — Projective Zariski topology
- `lem-standard-projective-opens-are-affine-spaces` · lemma — Standard projective opens are affine spaces
- `lem-homogenization-dehomogenization-correspondence` · lemma — Homogenization and dehomogenization
- `def-projective-closure-affine-set` · definition — Projective closure of an affine algebraic set
- `def-homogeneous-ideal-saturation` · definition — Saturation of a homogeneous ideal
- `thm-ideal-projective-closure-saturation` · theorem — Ideal of a projective closure via saturation
- `def-homogeneous-coordinate-ring` · definition — Homogeneous coordinate ring
- `def-projective-variety-classical` · definition — Classical projective variety
- `lem-projective-irreducibility-homogeneous-prime` · lemma — Irreducibility and homogeneous prime ideals
- `def-regular-function-projective-variety` · definition — Regular functions on a projective variety
- `lem-projective-regular-function-chart-compatibility` · lemma — Compatibility of projective regular-function charts
- `thm-global-regular-functions-projective-variety` · theorem — Global regular functions on an irreducible projective variety
- `def-morphism-to-projective-space-homogeneous-coordinates` · definition — Projective morphisms in homogeneous coordinates
- `lem-projective-coordinate-morphisms-well-defined` · lemma — Homogeneous coordinate formulas define morphisms
- `thm-closed-projective-embedding-by-homogeneous-generators` · theorem — Closed projective embedding from a radical homogeneous ideal
- `def-affine-cone-projective-set` · definition — Affine cone over a projective algebraic set
- `lem-projective-variety-cone-irreducible` · lemma — The cone over a projective variety is irreducible
- `lem-projective-closure-dense-affine-chart` · lemma — The affine chart is dense in a projective closure
- `def-degree-projective-hypersurface` · definition — Degree of a reduced projective hypersurface
- `lem-projective-hypersurface-affine-pieces` · lemma — Affine pieces of a projective hypersurface
- `rem-projective-coordinate-ring-not-function-ring` · remark — A homogeneous coordinate ring is not the global function ring

### `projective-algebraic-sets-projective-morphisms-and-cones-examples` — Projective Algebraic Sets Projective Morphisms and Cones — Examples (7 item(s))

- `ex-projective-line-two-affine-charts` · example — The two standard affine charts of the projective line
- `ex-projective-closure-parabola` · example — Projective closure of a parabola
- `cex-naive-homogenization-adds-component` · counterexample — Raw homogenized generators can add a projective component
- `ex-projective-conic-standard-charts` · example — Standard affine charts of a projective conic
- `ex-affine-cone-over-conic` · example — Affine cone over a smooth projective conic
- `cex-inhomogeneous-equation-not-projectively-well-defined` · counterexample — An inhomogeneous equation does not define a projective zero locus
- `ex-morphism-projective-line-power-map` · example — The power map on the projective line

### `affine-schemes-and-the-structure-sheaf` — Affine Schemes and the Structure Sheaf (28 item(s))

- `def-affine-scheme-spectrum` · definition — The underlying space of an affine spectrum
- `def-structure-presheaf-on-basic-opens` · definition — The localization presheaf on distinguished opens
- `lem-structure-presheaf-basic-open-well-defined` · lemma — Localization sections are independent of a distinguished-open presentation
- `thm-structure-sheaf-affine-scheme` · theorem — The localization construction extends to the structure sheaf on Spec A
- `thm-sections-basic-open-affine-scheme` · theorem — Sections and restrictions on distinguished opens of an affine scheme
- `thm-stalk-structure-sheaf-prime-localization` · theorem — The stalk of the affine structure sheaf at a prime is A_p
- `cor-spectrum-with-structure-sheaf-locally-ringed` · corollary — Spec A with its structure sheaf is a locally ringed space
- `def-residue-field-scheme-point` · definition — The residue field at a point of an affine scheme
- `thm-global-sections-affine-scheme` · theorem — Global functions on Spec A recover A
- `lem-spectrum-localization-open-immersion` · lemma — A principal localization identifies its spectrum with a distinguished open
- `def-affine-scheme` · definition — Affine schemes and their coordinate rings
- `def-morphism-affine-schemes-from-ring-map` · definition — The map of affine spectra induced by a ring homomorphism
- `lem-spectrum-map-stalk-homomorphisms-local` · lemma — The stalk maps induced by a ring map are local
- `thm-affine-scheme-ring-anti-equivalence` · theorem — Affine schemes are contravariantly equivalent to commutative rings
- `cor-affine-scheme-isomorphism-ring-isomorphism` · corollary — Affine-scheme isomorphisms are exactly coordinate-ring isomorphisms in reverse direction
- `def-closed-point-scheme` · definition — Closed points of an affine scheme
- `lem-classical-points-inside-affine-scheme` · lemma — Classical k-points give closed points over an algebraically closed field
- `def-generic-point-irreducible-closed-subset` · definition — Generic points of irreducible closed subsets
- `thm-spectrum-sober` · theorem — Every irreducible closed subset of an affine spectrum has a unique generic point
- `def-reduced-affine-scheme` · definition — Reduced affine schemes
- `def-integral-affine-scheme` · definition — Integral affine schemes
- `def-nonreduced-infinitesimal-thickening-affine` · definition — An affine nilpotent thickening
- `def-functor-of-points-affine-scheme` · definition — The functor of points of an affine scheme
- `thm-affine-schemes-determined-by-functor-of-points` · theorem — An affine scheme is determined by its functor of points
- `def-dual-numbers-scheme` · definition — The affine scheme of dual numbers
- `lem-basic-opens-quasi-compact` · lemma — Every distinguished open of an affine spectrum is quasi-compact
- `cor-affine-scheme-quasi-compact` · corollary — Every affine scheme is quasi-compact
- `rem-spec-contravariance-and-points` · remark — Contravariance reverses coordinates and scheme points are not only classical points

### `affine-schemes-and-the-structure-sheaf-examples` — Affine Schemes and the Structure Sheaf — Examples (9 item(s))

- `ex-spectrum-field-one-point` · example — The spectrum of a field is a one-point affine scheme
- `ex-spectrum-zero-ring-empty` · example — The zero ring has empty spectrum
- `ex-spectrum-integers-generic-and-closed-points` · example — Spec Z has one generic point and closed prime-number points
- `ex-dual-numbers-one-point-nonreduced` · example — Dual numbers give a one-point nonreduced affine scheme
- `ex-spectrum-product-ring-disjoint-union` · example — The spectrum of a product ring is a disjoint union
- `ex-basic-open-affine-line` · example — A basic open of the affine line is affine
- `cex-scheme-not-determined-by-underlying-space` · counterexample — The underlying topological space does not determine a scheme
- `ex-functor-points-affine-line` · example — Relative points of the affine line are elements of a test k-algebra
- `cex-nonclosed-scheme-point-no-k-valued-coordinate` · counterexample — A nonclosed scheme point need not be a k-valued coordinate

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-78cf866a9faa8e832d5e5c09 · `def-affine-cone-projective-set`** (from group c, would-be-fatal) — The definition allows arbitrary X⊂P_k^n, including X=∅, but asserts that C(X)=V(I_+(X)) “contains 0”. For X=∅, I_+(X) is the whole homogeneous ring (including 1), so C(X)=∅ and does not contain 0.
- **s8a-ce319a5e775a3a9ede422908 · `ex-koszul-complex-one-and-two-elements`** (from group c, would-be-fatal) — With the fixed increasing-wedge convention, d(e_1∧e_2)=u e_2-v e_1 for the sequence (u,v). The example instead states d_2(1)=v e_1-u e_2 without declaring that 1 corresponds to −e_1∧e_2, so its asserted explicit differential has the opposite sign.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-31a-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-31a`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-31a-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-31a-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-31a-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-31a-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-31a-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
