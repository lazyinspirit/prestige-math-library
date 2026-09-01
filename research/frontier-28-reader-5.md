# frontier-28 reader-5 report

Date: Tuesday, September 1, 2026
Batch: `5`
Pages: `bounded-linear-operators-and-quotient-spaces`, `bounded-linear-operators-and-quotient-spaces-examples`

## Opened scope

Assigned pages opened:

- `library/functional-analysis/bounded-linear-operators-and-quotient-spaces.md`
- `library/functional-analysis/bounded-linear-operators-and-quotient-spaces-examples.md`

Assigned items opened:

- `def-bounded-linear-operator`
- `thm-bounded-linear-operator-equivalences`
- `def-operator-norm`
- `lem-operator-norm-is-a-norm`
- `lem-composition-operator-norm-inequality`
- `def-space-of-bounded-linear-operators`
- `thm-bounded-operator-space-is-banach`
- `thm-extension-of-a-bounded-map-from-a-dense-subspace`
- `def-topological-isomorphism-of-normed-spaces`
- `def-bounded-bilinear-map`
- `thm-bounded-bilinear-map-equivalences`
- `def-quotient-vector-space-coset-notation`
- `def-quotient-seminorm`
- `lem-quotient-seminorm-is-representative-independent`
- `lem-quotient-seminorm-triangle-inequality`
- `thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed`
- `thm-quotient-map-is-open`
- `thm-quotient-of-banach-by-closed-subspace-is-banach`
- `thm-universal-property-of-the-normed-quotient`
- `def-complemented-subspace`
- `thm-complemented-subspace-iff-range-of-a-bounded-projection`
- `def-bounded-below-operator`
- `thm-bounded-below-iff-injective-with-closed-range`
- `def-bounded-left-and-right-inverses`
- `thm-bounded-right-inverse-iff-kernel-is-complemented`
- `thm-bounded-left-inverse-iff-range-is-complemented`
- `ex-coordinate-projections-and-inclusions-on-product-banach-spaces`
- `ex-shift-operators-on-classical-sequence-spaces`
- `ex-evaluation-functional-on-c-of-k`
- `ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm`
- `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm`
- `ex-c-mod-constants-and-oscillation-norm`
- `cex-a-closed-subspace-need-not-have-a-best-approximation`
- `cex-an-algebraic-complement-need-not-be-topological`

Dependencies opened for verification:

- `def-banach-space`
- `def-bounded-linear-operator`
- `def-complemented-subspace`
- `def-dependent-choice`
- `def-injection-surjection-bijection`
- `def-kernel-and-image-of-a-linear-map`
- `def-linear-map`
- `def-linear-subspace`
- `def-lipschitz-holder-contraction`
- `def-metric-continuity`
- `def-metric-interior-closure-boundary`
- `def-norm-and-normed-space`
- `def-normed-subspace`
- `def-operator-norm`
- `def-product-norms-on-finitely-many-normed-spaces`
- `def-quotient-seminorm`
- `def-quotient-vector-space-and-canonical-projection`
- `def-space-of-bounded-linear-operators`
- `def-vector-space`
- `def-vector-space-of-linear-maps`
- `lem-closed-subspace-of-a-banach-space-is-banach`
- `lem-metric-limits-unique`
- `lem-vector-operations-are-continuous-in-a-normed-space`
- `prop-quotient-vector-space-operations-and-projection`
- `thm-baire-category-for-complete-metric-spaces`
- `thm-banach-series-criterion`
- `thm-extreme-value-metric`
- `thm-finite-products-of-banach-spaces-are-banach`
- `thm-linear-kernel-image-and-injectivity`
- `thm-metric-closure-characterisation`
- `thm-metric-regularity-hierarchy`
- `thm-quotient-vector-space-universal-property`

Supporting examples/dependencies also opened where they were still cited at the
time of review:

- `ex-c0-is-a-banach-space`
- `ex-ell-infinity-is-a-banach-space`
- `ex-c-of-a-compact-space-is-banach`

Run artifacts opened:

- `CLAUDE.md`
- `README.md`
- `research/frontier-28-reader.task.md`
- `research/frontier-28-beta-5.task.md`
- `research/frontier-28-batch-5.pages.json`
- `research/frontier-28-batch-5.coverage.json`
- `research/frontier-28-batch-5.proof-contracts.json`
- `research/frontier-28-batch-5.notes.md`
- `research/plan-functional-analysis-track.md`

## Edits made

1. Repaired the A-page summary so the one-sided inverse criteria are not stated
   without the Dependent Choice hypothesis.
2. Repaired `thm-bounded-bilinear-map-equivalences` by fixing the final step
   reference.
3. Repaired `thm-complemented-subspace-iff-range-of-a-bounded-projection` by
   proving that `ker(P)` is closed before using it as a topological complement,
   then reindexed the proof into precheck-canonical form.
4. Repaired `thm-bounded-below-iff-injective-with-closed-range`,
   `thm-bounded-right-inverse-iff-kernel-is-complemented`, and
   `thm-bounded-left-inverse-iff-range-is-complemented` so each theorem and
   title carries the Dependent Choice hypothesis already required by the
   published Baire-category dependency; I also made the bounded-below converse's
   Baire/rescaling step explicit.
5. Repaired `ex-coordinate-projections-and-inclusions-on-product-banach-spaces`,
   `ex-shift-operators-on-classical-sequence-spaces`, and
   `ex-evaluation-functional-on-c-of-k` so exact operator-norm claims cite the
   operator-norm definition.
6. Repaired `ex-shift-operators-on-classical-sequence-spaces`,
   `ex-evaluation-functional-on-c-of-k`, and
   `cex-an-algebraic-complement-need-not-be-topological` to remove B-page-only
   dependencies that were unnecessary for the current mathematics.
7. Repaired `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm`
   by routing it through the algebraic quotient universal property and the
   quotient seminorm directly, avoiding an unjustified closed-subspace use of
   the normed quotient theorem.
8. Repaired `cex-a-closed-subspace-need-not-have-a-best-approximation` by
   supplying an inline proof that `c_0` is Banach, restructuring the witness
   proof into precheck-canonical form, and removing its B-page-only dependency.
9. Updated `research/frontier-28-batch-5.proof-contracts.json` to match the
   repaired proofs and dependency routes.

No `verification.judge` record was present on the edited draft items, so there
was nothing stale to remove.

## Page verdicts

- `bounded-linear-operators-and-quotient-spaces`: repaired and verified. No
  remaining reader defect found in the A-page prose or assigned A-page items.
- `bounded-linear-operators-and-quotient-spaces-examples`: repaired item-level
  defects and verified. The B-page body was left unchanged as required.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...` on all edited Markdown items:
  clean after reflow.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the 11 edited items:
  `11 checked, 0 failing — all clean`.
- `node -e "JSON.parse(...frontier-28-batch-5.proof-contracts.json...)"`:
  passed.
- `git diff --check -- ...` on all edited files: clean.
- `node tools/depcheck.mjs --quiet` still reports unrelated pre-existing
  repository diagnostics, but a targeted grep of its output produced no hit for
  any assigned batch-5 item after these repairs.

## Uneditable defects

None in the opened batch-5 scope or in the dependency targets I opened for this
review.

## Blockers

None.
