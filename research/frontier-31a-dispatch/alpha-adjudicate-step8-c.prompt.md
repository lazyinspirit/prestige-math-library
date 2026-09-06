# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-31a
role: alpha-adjudicate
label: step8-c
covers: 11, 13, 14

# Step 8 adjudication — group **c**, run `frontier-31a`

You are the group Alpha for batches **11**, **13**, **14**: 3 A/B pair(s), 6 page(s), 132 item(s), 35 open rejection(s) over 35 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-nonclosed-scheme-point-no-k-valued-coordinate` | `affine-schemes-and-the-structure-sheaf-examples` | gpt-5.6-terra | `bfbb15eb92c78d29ca7c8c46febece42275490353076829c53fdaf39d50bff94` |
| `cor-koszul-complex-invariant-under-invertible-generator-change` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `e82fead6258d01dc974f38758a918fa2ade5dc60fe8680ef58d2c06fbcdb85dc` |
| `cor-koszul-homology-flat-base-change` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `0e1bbc0002e37e21eddf058a402905cb149025667a8e3a16612859a750b5fefb` |
| `cor-koszul-homology-localises` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `9831a9451ce937a9d415646189f675065ab7d9d05793ad75a1fc47132b906763` |
| `cor-spectrum-with-structure-sheaf-locally-ringed` | `affine-schemes-and-the-structure-sheaf` | gpt-5.6-terra | `6e4b48c55f2a88b017f5cdbe188b2700055e683fcd5b4694031e0a04506e0c3a` |
| `def-affine-cone-projective-set` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `751be102a10c6a4be4fc3ad6cf1b265fd658272a654878cbecff7662edae18a9` |
| `def-closed-point-scheme` | `affine-schemes-and-the-structure-sheaf` | gpt-5.6-terra | `ad05870ccbe32e99ac25014584a27b3607296ab6f5314d8a36907cccd7892221` |
| `def-exterior-algebra-of-a-finite-free-module` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `bdac0aa71b5cca0f992b995a8dc6f513c34d4e76f3fd83dd4286bfd8bfffea1a` |
| `def-homogeneous-polynomial-and-homogeneous-ideal` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `b17d594f8497e3f339c6621f5d3467901c8e100956abb48040fd021fcac6af3e` |
| `def-integral-affine-scheme` | `affine-schemes-and-the-structure-sheaf` | gpt-5.6-terra | `9d53595114c83d9296f3cc07907eb6838a6e336f7694f4f4bf43b3aba57efec4` |
| `def-koszul-complex-of-a-sequence-with-coefficients` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `e53bf522bfb1d1024d04aeca16e2867254e24c1a1db14bae461f93d40319c945` |
| `def-koszul-regular-and-h-one-regular-sequences` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `cda284930cbfeabba7aee44b37c3884169bdcae54d78f7abe49463882f1a2fa3` |
| `def-morphism-to-projective-space-homogeneous-coordinates` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `3283e7d8e63471d9d93cb9a1068669fc8a6f50be12edd7c1d7e1eb55517bfa8b` |
| `def-regular-function-projective-variety` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `2e6cf89230a8a1b9b8d04275e2af858b6c98d552d638d541b82c9381513fc4cd` |
| `def-regular-sequence-on-a-module` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `2733f24bb5f34626f8beb9af057a738b4ffd2a4812b6a4b44dcf17770f1cb2b3` |
| `def-residue-field-scheme-point` | `affine-schemes-and-the-structure-sheaf` | gpt-5.6-terra | `e9e9d8dc812188f6bf2d37238ffd79667583899a019ad6282f4b8e89310fd8ee` |
| `ex-functor-points-affine-line` | `affine-schemes-and-the-structure-sheaf-examples` | gpt-5.6-terra | `833a8e244ffd8af9d58a2e4518bcb1f87ef3511637b3eb5a9e952bc86917269f` |
| `ex-koszul-complex-one-and-two-elements` | `koszul-complexes-and-regular-sequences-examples` | gpt-5.6-terra | `c4a8833ec760bca9b1dbd2051aa488cb6c9051068dcf77c4f321fdf80e89db66` |
| `ex-spectrum-integers-generic-and-closed-points` | `affine-schemes-and-the-structure-sheaf-examples` | gpt-5.6-terra | `1ce0f53b1942abc6e0666d9ffd924f457c0e522593bfe7132e927f8546689323` |
| `lem-basic-opens-quasi-compact` | `affine-schemes-and-the-structure-sheaf` | gpt-5.6-terra | `6163da021e89ef66fb9cd491151c7381efa1a537a7cb54ebc6b91a501b2354b9` |
| `lem-classical-points-inside-affine-scheme` | `affine-schemes-and-the-structure-sheaf` | gpt-5.6-terra | `9036a0614a5ecd71d54d82be1001cf95203e8ec2e7370fc2a163a443e654923c` |
| `lem-koszul-differential-coordinate-formula` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `e5af0c107b8f3dec4948b9543bbe6b1b713c98940d48e754a88bfc67bd8298dc` |
| `lem-koszul-differential-is-well-defined-and-squares-to-zero` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `10dbd53b5780853a879124dfe1ba9b4b74f0c4276779649e5f85486227b47b5b` |
| `lem-local-koszul-acyclicity-inductive-converse` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `bebd339223a59b26ac0fdbdf86793c2d0dd29388becb84c48909588b493ad5fe` |
| `lem-one-element-koszul-complex` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `8befd33cc1d369bf2ea0ace18535d8aa65ea405ecece2e189fd14f85c4cf0412` |
| `lem-projective-irreducibility-homogeneous-prime` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `dce79d78869bc04526076d4ca24093f90b0928ed4eb0e4386464b65a6aa0a08d` |
| `lem-projective-regular-function-chart-compatibility` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `59300c578ce726209fc13d22c41db094a25586e3b9a1e48536e610c91707e8ba` |
| `lem-standard-projective-opens-are-affine-spaces` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `963f312f08e9adf433270e43f01cde96878c9d735c786b7eade13d99cfa888c3` |
| `rem-projective-coordinate-ring-not-function-ring` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `14a7c5d423dcb8fa3f64660f5b5a299b422608966558df70f68e6545bce6599e` |
| `thm-affine-scheme-ring-anti-equivalence` | `affine-schemes-and-the-structure-sheaf` | gpt-5.6-terra | `5035b686d9465c4bc17770249cd71e3616c09512d39d7d69a648fd86901f612a` |
| `thm-affine-schemes-determined-by-functor-of-points` | `affine-schemes-and-the-structure-sheaf` | gpt-5.6-terra | `f439dce9e8291be5d4b70f32f3e948091b21b1b4c52c809a2e2ac3ee12659f50` |
| `thm-closed-projective-embedding-by-homogeneous-generators` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `05e324892c4be0d05ddd81890f97ccf314b5491896668a4a1ccf6391c5731ce3` |
| `thm-global-regular-functions-projective-variety` | `projective-algebraic-sets-projective-morphisms-and-cones` | gpt-5.6-terra | `02ce331e2db5df19f5cecd1fb382567380b3d76f8e0e75fd51a12ed8658d4da5` |
| `thm-koszul-concatenation-and-mapping-cone` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `387cf5a5c611fe8966c056304ccff33730de5d6a4733c893078f9c0edf4de2fe` |
| `thm-localisation-and-flat-base-change-of-regular-sequences` | `koszul-complexes-and-regular-sequences` | gpt-5.6-terra | `3510af1da11fb3ca32402e524fdcc7826c634db06a75325bb11b3f1c448229c1` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

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


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
