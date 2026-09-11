# Step 7 adjudication — group **f**, run `phase-2-next-20`

You are the group Alpha for batches **10**, **11**: 3 A/B pair(s), 6 page(s), 66 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-f-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-20-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `finite-weyl-invariants-bruhat-and-kostant-harmonics` | A | lie-theory | 510.0002 | `semisimple-lie-algebras-cohomology-and-levi-theory`, `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `highest-weight-theory-for-complex-semisimple-lie-algebras`, `depth-and-cohen-macaulay-modules` |
| 10 | `finite-weyl-invariants-bruhat-and-kostant-harmonics-examples` | B | lie-theory | 510.0004 | `finite-weyl-invariants-bruhat-and-kostant-harmonics` |
| 10 | `integrable-highest-weight-kac-moody-modules` | A | lie-theory | 510.027 | `kac-moody-algebras-from-generalized-cartan-matrices`, `verma-modules-and-shapovalov-forms` |
| 10 | `integrable-highest-weight-kac-moody-modules-examples` | B | lie-theory | 510.028 | `integrable-highest-weight-kac-moody-modules` |
| 11 | `vertices-sources-and-the-green-correspondence` | A | representation-theory | 510.059 | `blocks-defect-groups-and-the-brauer-homomorphism`, `modular-representations-and-projective-covers` |
| 11 | `vertices-sources-and-the-green-correspondence-examples` | B | representation-theory | 510.06 | `vertices-sources-and-the-green-correspondence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-weyl-invariants-bruhat-and-kostant-harmonics` — Finite Weyl Invariants, Bruhat Order, and Kostant Harmonics (26 item(s))

- `def-finite-weyl-root-system-lattice-and-chamber-conventions` · definition — Finite Weyl root system, lattice and chamber conventions
- `lem-finite-weyl-positive-roots-and-simple-reflections` · lemma — Finite Weyl positive roots and simple reflections
- `lem-finite-weyl-strong-exchange-and-deletion` · lemma — Finite weyl strong exchange and deletion
- `lem-finite-weyl-closed-chambers-and-stabilizers` · lemma — Finite Weyl closed chambers and stabilizers
- `def-bruhat-order-on-a-finite-weyl-group` · definition — Bruhat order on a finite weyl group
- `def-weyl-orbit-sum-in-a-group-algebra` · definition — Weyl orbit sum in a group algebra
- `lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants` · lemma — Weyl orbit sums form a basis of finite weyl invariants
- `def-finite-linear-invariant-and-coinvariant-polynomial-algebras` · definition — Finite linear invariant and coinvariant polynomial algebras
- `lem-finite-linear-group-invariant-polynomials-separate-orbits` · lemma — Finite linear group invariant polynomials separate orbits
- `def-weyl-discriminant-and-reflecting-hyperplane-arrangement` · definition — Weyl discriminant and reflecting hyperplane arrangement
- `lem-weyl-anti-invariants-are-divisible-by-the-discriminant` · lemma — Weyl anti invariants are divisible by the discriminant
- `lem-finite-reflection-invariant-generators-are-algebraically-independent` · lemma — Finite reflection invariant generators are algebraically independent
- `lem-reflection-basic-invariants-form-a-regular-sequence` · lemma — Reflection basic invariants form a regular sequence
- `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension` · lemma — Weyl coinvariant hilbert series has order w dimension
- `thm-chevalley-shephard-todd-for-finite-weyl-groups` · theorem — Chevalley shephard todd for finite weyl groups
- `def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action` · definition — Finite semisimple Lie algebras and the symmetric adjoint action
- `lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy` · lemma — Engel, the trace criterion, and Killing nondegeneracy
- `lem-finite-lie-triangularization-and-rank-one-complete-reducibility` · lemma — Finite Lie triangularization and rank-one complete reducibility
- `lem-finite-semisimple-cartan-root-and-string-structure` · lemma — Finite semisimple Cartan, root and string structure
- `lem-finite-semisimple-pbw-and-highest-weight-construction` · lemma — Finite semisimple PBW and highest-weight construction
- `def-kostant-harmonic-subspace-of-the-symmetric-algebra` · definition — Kostant harmonic subspace of the symmetric algebra
- `lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums` · lemma — Highest-weight characters are unitriangular in Weyl orbit sums
- `lem-kostant-harmonics-give-an-invariant-polynomial-complement` · lemma — Kostant harmonics give an invariant polynomial complement
- `lem-local-chevalley-restriction-for-kostant-freeness` · lemma — Local Chevalley restriction for Kostant freeness
- `thm-kostant-harmonic-decomposition-of-the-symmetric-algebra` · theorem — Kostant harmonic decomposition of the symmetric algebra
- `lem-filtered-freeness-lifts-from-associated-graded-algebras` · lemma — Filtered freeness lifts from associated graded algebras

### `finite-weyl-invariants-bruhat-and-kostant-harmonics-examples` — Finite Weyl Invariants, Bruhat Order, and Kostant Harmonics: Examples (3 item(s))

- `ex-s3-bruhat-order-and-inversion-sets` · example — S3 bruhat order and inversion sets
- `ex-a2-coinvariant-algebra-and-basic-invariants` · example — A2 coinvariant algebra and basic invariants
- `ex-sl2-kostant-harmonic-decomposition` · example — Sl2 kostant harmonic decomposition

### `integrable-highest-weight-kac-moody-modules` — Integrable Highest Weight Kac Moody Modules (20 item(s))

- `thm-universal-property-and-pbw-character-of-kac-moody-verma-modules` · theorem — Universal property and pbw character of kac moody verma modules
- `thm-kac-moody-verma-module-has-a-unique-simple-quotient` · theorem — Kac moody verma module has a unique simple quotient
- `def-kac-moody-integral-and-dominant-integral-weights` · definition — Kac moody integral and dominant integral weights
- `def-integrable-kac-moody-module` · definition — Integrable kac moody module
- `lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras` · lemma — Integrability can be checked on simple root sl2 subalgebras
- `lem-dominance-is-necessary-for-an-integrable-highest-weight-module` · lemma — Dominance is necessary for an integrable highest weight module
- `lem-simple-root-power-relations-generate-the-integrable-quotient` · lemma — Simple root power relations generate the integrable quotient
- `thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules` · theorem — Integrability criterion for simple highest weight kac moody modules
- `prop-integrable-weight-sets-and-multiplicities-are-weyl-invariant` · proposition — Integrable weight sets and multiplicities are weyl invariant
- `def-kac-moody-real-coroot-inversions` · definition — Real coroot signs, word length and inversion sets
- `lem-kac-moody-reduced-words-and-coroot-signs` · lemma — Reduced words, root signs and finite coroot inversions
- `lem-kac-moody-chamber-boundary-stabilizers` · lemma — Dominant representatives, wall stabilizers and terminating reflection descent
- `prop-every-integrable-weight-is-weyl-conjugate-toward-the-dominant-chamber` · proposition — Every integrable weight is weyl conjugate toward the dominant chamber
- `lem-an-integrable-o-module-is-generated-by-dominant-maximal-weights` · lemma — Maximal and primitive weights in integrable category O modules
- `lem-casimir-separates-comparable-dominant-primitive-weights` · lemma — Casimir separates comparable dominant primitive weights
- `thm-complete-reducibility-of-integrable-kac-moody-o-modules` · theorem — Complete reducibility of integrable kac moody o modules
- `cor-tensor-products-of-integrable-highest-weight-modules-decompose` · corollary — Tensor products of integrable highest weight modules decompose
- `lem-affine-central-coroot-from-the-transpose-null-ray` · lemma — Affine central coroot from the transpose null ray
- `prop-integrable-affine-highest-weights-have-nonnegative-integral-level` · proposition — Integrable affine highest weights have nonnegative integral level
- `prop-level-zero-integrable-affine-highest-weight-simples-are-one-dimensional` · proposition — Level zero integrable affine highest weight simples are one dimensional

### `integrable-highest-weight-kac-moody-modules-examples` — Integrable Highest Weight Kac Moody Modules — Examples (5 item(s))

- `ex-integrable-highest-weight-modules-for-rank-one-gcm` · example — Integrable highest weight modules for rank one gcm
- `ex-the-basic-level-one-weight-of-affine-sl2` · example — The basic level one weight of affine sl2
- `ex-simple-root-string-in-an-integrable-kac-moody-module` · example — Simple root string in an integrable kac moody module
- `cex-a-kac-moody-verma-module-is-not-integrable-in-general` · counterexample — A kac moody verma module is not integrable in general
- `cex-local-nilpotence-of-only-the-ei-does-not-imply-integrability` · counterexample — Local nilpotence of only the ei does not imply integrability

### `vertices-sources-and-the-green-correspondence` — Vertices Sources and the Green Correspondence (9 item(s))

- `def-green-exceptional-intersection-families` · definition — Green exceptional intersection families
- `lem-green-exceptional-family-containment-and-fusion` · lemma — Green exceptional family containment and fusion
- `lem-green-vertex-retention-and-inducing-lift` · lemma — Green vertex retention and inducing lift
- `lem-green-mackey-intersections-force-proper-vertices` · lemma — Green mackey intersections force proper vertices
- `lem-green-restriction-has-one-distinguished-summand` · lemma — Green restriction has one distinguished summand
- `lem-green-induction-has-one-distinguished-summand` · lemma — Green induction has one distinguished summand
- `lem-green-distinguished-summands-are-mutually-inverse` · lemma — Green distinguished summands are mutually inverse
- `thm-green-correspondence-with-exceptional-families` · theorem — Green correspondence with exceptional families
- `cor-green-correspondence-for-modules-of-vertex-exactly-p` · corollary — Green correspondence for modules of vertex exactly p

### `vertices-sources-and-the-green-correspondence-examples` — Vertices Sources and the Green Correspondence — Examples (3 item(s))

- `ex-green-restriction-summand-with-the-same-vertex` · example — Green restriction summand with the same vertex
- `ex-green-correspondence-for-a-trivial-intersection-subgroup` · example — Green correspondence for a trivial intersection subgroup
- `ex-green-correspondence-identity-boundaries` · example — Green correspondence identity boundaries

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

3 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-6d07714e355f8bd14c90cdd8 · `finite-weyl-invariants-bruhat-and-kostant-harmonics`** (from group f, presentation) — Of the five page-level requires declared for this page (semisimple-lie-algebras-cohomology-and-levi-theory, cartan-subalgebras-and-root-space-decompositions, root-systems-dynkin-diagrams-and-cartan-killing-classification, highest-weight-theory-for-complex-semisimple-lie-algebras, depth-and-cohen-macaulay-modules), only depth-and-cohen-macaulay-modules exists as a file under library/; the other four have no page file anywhere in the repository and are absent from research/phase-2-next-20-scope-ledger.json, so they are not built by this run either. Every item-level dependency of the page resolves to a published item, so this is a page-metadata/ownership reconciliation item (the dispatch claim that every declared requires points at published content is not satisfied on disk), not a defect of the mathematical content.
- **s8a-9ecac2abfcd1f8238bc8e2b0 · `finite-weyl-invariants-bruhat-and-kostant-harmonics`** (from group f, presentation) — The closing page prose still reads 'The companion gives complete direct calculations for S3 Bruhat order, the A2 coinvariant quotient and the sl2 harmonic decomposition. These special cases do not assert the unresolved general results.' The general results are no longer unresolved on this page: strong exchange and both Bruhat descriptions, Chevalley–Shephard–Todd for finite Weyl groups, the unitriangular characters, local Chevalley restriction, the harmonic complement and the Kostant decomposition are all proved by items of this same page. Calling them 'unresolved' is stale wording that can mislead a reader about the page's own state.
- **s8a-1a41e5c626882aaeb6cb3989 · `lem-green-vertex-retention-and-inducing-lift`** (from group f, gap-a-reader-closes) — Step 3.1 asserts 'Relative T-projectivity supplies the counit splitting V | Ind_T^L Res_T^L V from F4', but F4 only lists Mackey, transitivity, preservation of summands, vertex containment and finite summand extraction (lem-relative-projectivity-mackey-intersections-for-finite-modules), none of which states the counit form V | Ind_T^L Res_T^L V of relative projectivity; that equivalence is the (nontrivial) Higman form, and thm-higman-criterion-for-relative-projectivity is not in this item's fact list (it is only named indirectly in the Definition of a vertex). A reader closes the step in seconds via Higman, which the item's F1 names as the detection tool, but the citation as written attributes more to F4 than the cited statement contains.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-20`

Read `research/phase-2-next-20-judge-closure.json`,
`research/phase-2-next-20-judge.jsonl`,
`research/phase-2-next-20-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-20-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-20-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-20-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
