# Step 5 adjudication — group **d**, run `hopf-hecke-unfinished-15-2026-10-15`

You are the group Alpha for batches 10, 11, 12: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **10**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/hopf-hecke-unfinished-15-2026-10-15-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `hecke-parabolic-induction-and-symmetrizing-traces` | A | hopf-hecke-algebras | 1712 | `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis` |
| 10 | `hecke-parabolic-induction-and-symmetrizing-traces-examples` | B | hopf-hecke-algebras | 1713 | `hecke-parabolic-induction-and-symmetrizing-traces` |
| 11 | `hecke-base-change-semisimplicity-and-deformation` | A | hopf-hecke-algebras | 1714 | `tensor-coherence-and-algebraic-descent`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `hecke-parabolic-induction-and-symmetrizing-traces`, `chain-conditions-and-semisimple-modules`, `formal-power-series` |
| 11 | `hecke-base-change-semisimplicity-and-deformation-examples` | B | hopf-hecke-algebras | 1715 | `hecke-base-change-semisimplicity-and-deformation` |
| 12 | `type-a-affine-hecke-algebras-and-bernstein-pbw` | A | hopf-hecke-algebras | 1716 | `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `polynomial-rings-and-roots` |
| 12 | `type-a-affine-hecke-algebras-and-bernstein-pbw-examples` | B | hopf-hecke-algebras | 1717 | `type-a-affine-hecke-algebras-and-bernstein-pbw` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hecke-parabolic-induction-and-symmetrizing-traces` — Hecke Parabolic Induction and Symmetrizing Traces (4 item(s))

- `def-hh-parabolic-hecke-subalgebra-and-induced-module` · definition — Parabolic Hecke subalgebras, induction, and restriction
- `def-hh-canonical-hecke-trace-and-symmetrizing-form` · definition — The canonical Hecke trace and symmetrizing form
- `thm-hh-parabolic-hecke-freeness-and-induced-bases` · theorem — Parabolic freeness and bases of induced Hecke modules
- `thm-hh-canonical-hecke-trace-is-symmetric-and-perfect` · theorem — The canonical Hecke trace is symmetric and perfect

### `hecke-parabolic-induction-and-symmetrizing-traces-examples` — Hecke Parabolic Induction and Symmetrizing Traces — Examples (3 item(s))

- `ex-hh-parabolic-induction-from-rank-one-into-s3` · example — Inducing the rank-one Hecke module into type A2
- `ex-hh-dual-trace-basis-in-type-a2-hecke-algebra` · example — The dual trace basis for the type-A2 Hecke algebra
- `cex-hh-perfect-symmetrizing-trace-does-not-imply-semisimple` · counterexample — A perfect symmetrizing trace does not imply semisimplicity

### `hecke-base-change-semisimplicity-and-deformation` — Hecke Base Change, Semisimplicity, and Deformation (8 item(s))

- `def-hh-specialization-and-regular-trace-determinant` · definition — Finite Hecke specialization and its regular-trace determinant
- `lem-hh-one-parameter-formal-series-local-ring` · lemma — The one-parameter formal-series ring is complete, separated, and has residue field $k$
- `lem-hh-finite-direct-summands-over-khh-are-free` · lemma — Finite direct summands over a formal-series ring are free with rank read from reduction
- `lem-hh-idempotents-lift-over-formal-power-series-rings` · lemma — Orthogonal idempotents lift over a complete formal power-series ring
- `lem-hh-regular-trace-criterion-in-characteristic-zero` · lemma — A nondegenerate regular-trace pairing forces semisimplicity
- `lem-hh-formal-deformation-matrix-unit-lifting` · lemma — Matrix units lift through a finite free split formal deformation
- `thm-hh-generic-finite-hecke-semisimplicity` · theorem — Finite Coxeter Hecke algebras are semisimple over the generic characteristic-zero field
- `thm-hh-split-deformation-labels-and-exceptional-parameters` · theorem — Split formal deformations preserve simple-block labels; the trace determinant bounds exceptional parameters

### `hecke-base-change-semisimplicity-and-deformation-examples` — Hecke Base Change, Semisimplicity, and Deformation — Examples (2 item(s))

- `cex-hh-nondegenerate-symmetrizing-trace-does-not-imply-semisimplicity` · counterexample — A rank-one Hecke algebra with a perfect symmetrizing form and degenerate regular trace
- `ex-hh-two-dimensional-formal-split-deformation` · example — Explicitly lifting the two simple labels in a formal rank-two algebra

### `type-a-affine-hecke-algebras-and-bernstein-pbw` — Type A Affine Hecke Algebras and Bernstein PBW (7 item(s))

- `lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization` · lemma — The finite type-A Hecke basis over the multiplicative parameter ring
- `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences` · definition — The type-A weight lattice, Laurent ring, and divided differences
- `def-hh-type-a-rational-skew-group-algebra` · definition — The rational skew group algebra for type A
- `def-hh-type-a-affine-bernstein-presentation` · definition — The multiplicative Bernstein presentation of the affine Hecke algebra of type A
- `lem-hh-demazure-lusztig-operators-satisfy-affine-relations` · lemma — Demazure–Lusztig operators satisfy the affine type-A relations
- `thm-hh-affine-type-a-bernstein-pbw` · theorem — Bernstein PBW basis for the affine Hecke algebra of type A
- `thm-hh-affine-type-a-center` · theorem — The center of the universal affine Hecke algebra of type A

### `type-a-affine-hecke-algebras-and-bernstein-pbw-examples` — Type A Affine Hecke Algebras and Bernstein PBW — Examples (4 item(s))

- `ex-hh-type-a-negative-laurent-divided-difference` · example — A divided difference with negative Laurent exponents
- `ex-hh-type-a-rank-two-bernstein-relation` · example — The rank-two multiplicative Bernstein relation
- `ex-hh-type-a-polynomial-module-action` · example — The rank-two polynomial-module action
- `ex-hh-type-a-symmetric-central-elements` · example — Symmetric Laurent polynomials in the center

## Your seams

Another group's pages depend on yours:

- `cyclotomic-hecke-quotients-and-ariki-koike-pbw` (group e) requires your `type-a-affine-hecke-algebras-and-bernstein-pbw`
- `cyclotomic-murphy-bases-and-cellular-module-constructions` (group e) requires your `type-a-affine-hecke-algebras-and-bernstein-pbw`
- `hecke-symmetries-and-generic-quantum-schur-weyl-duality` (group e) requires your `hecke-base-change-semisimplicity-and-deformation`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/hopf-hecke-unfinished-15-2026-10-15-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `hopf-hecke-unfinished-15-2026-10-15`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
