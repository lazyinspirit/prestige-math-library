# frontier-32 · Alpha group `c` · Step 3 recheck

Rechecked the current batch 4, 14, and 15 manifests and coverage ledgers,
their `## Step-3 fix pass` records, and the matching entries in
`research/plan-spec.json`.  The current A/B identities, order, companions, and
prerequisites agree with the plan; all three B pages remain paired leaves.

## Dispositions

1. **Batch 4 — `thm-banach-steinhaus-dichotomy` →
   `def-operator-norm`: closed.**  The current record explicitly declares
   `def-bounded-linear-operator`, `def-operator-norm`, and
   `thm-baire-category-for-complete-metric-spaces`; the operator-norm
   alternative is therefore no longer an undeclared interface.

2. **Batch 4 — `def-closable-linear-operator` →
   `def-metric-interior-closure-boundary`: closed.**  Its current dependencies
   are `def-graph-of-a-linear-operator` and
   `def-metric-interior-closure-boundary`, covering the graph-closure and
   density conventions used by the proposed definition.

3. **Batch 14 — `ex-real-and-imaginary-parts-of-holomorphic-monomials`:
   closed.**  The B-page item declares both published backward dependencies,
   `thm-complex-polynomials-and-rational-functions-are-holomorphic` and
   `thm-c2-holomorphic-components-are-harmonic`.  Its strategy describes a
   cross-reference rather than an attempted reproving of either result.

4. **Batch 14 — Schikorra I.2.5 mean inequalities: pushback stands.**  The
   current coverage row defers the subharmonic/superharmonic inequalities to
   `maximum-principles-harnack-and-liouville-in-rn`; the selected equality and
   Weyl route does not use them.

5. **Batch 14 — Schikorra I.2.17 Cauchy estimates: pushback stands.**  The
   coverage row defers them to
   `poisson-problems-and-interior-harmonic-estimates`; they are not a premise
   of the compactly-contained regularisation argument in this pair.

6. **Batch 15 — boundary-manifold dimension claim: closed.**  The theorem
   title and strategy now restrict the $(n-1)$-manifold conclusion to $n\ge1$
   and separately give the empty-boundary convention at $n=0$, so no
   negative-dimensional conclusion remains.

7. **Batch 15 — closed-ball/sphere examples: closed.**  The closed-ball
   example starts with $n\ge1$, takes boundary charts from
   `thm-euclidean-implicit-function-theorem`, and only then invokes
   $1-|x|^2$; the collar, double, and outward-normal sphere examples retain
   the same dimension guard and backward-only dependencies.

8. **Batch 15 — orientability/Möbius examples: closed.**  The false statement
   and Möbius example use determinant-line reversal and
   `def-oriented-smooth-manifold-and-oriented-chart`; the latter independently
   parametrizes its boundary circle and does not claim an induced orientation
   from a nonorientable ambient band.

## Scope decisions

`scope-decisions refresh --run frontier-32 --group c` and the subsequent
`check` find 35 current decline rows and no pending or invalid decision.  Every
row remains individually recorded as `stands` in
`research/frontier-32-alpha-c-scope-decisions.json`: 28 batch-4 rows, 2
batch-14 rows, and 5 batch-15 rows.  The deferred destinations named by those
rows are existing later pages, and the selected manifests do not use those
deferred results as premises.

## Checks run on current bytes

- `manifest-deps`: batches 4, 14, and 15 contain 21, 22, and 67 items,
  respectively; each run reported 0 normalized items and 0 errors.
- `coverage-checklist --require-destination`: 69, 29, and 61 harvested
  results, respectively; all three runs reported 0 errors and 0 warnings.
- `content-policy --manifest-only` on the three manifests: 110 scoped items,
  0 errors, 0 warnings.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: declared
  page order is acyclic and consistent, with no item-level cycle,
  forward-reference, B-page-dependency, or unresolved-ID error.

The coverage ledgers retain eight current full-text fetch-verification receipts
(three batch 4, two batch 14, three batch 15).  No direct fetch was asserted in
this recheck.

## Current closure

- Batch 4 — `the-baire-principles-of-functional-analysis`: **sufficient**.
- Batch 14 — `harmonic-functions-and-mean-values-in-rn`: **sufficient**.
- Batch 15 — `manifolds-with-boundary-collars-and-orientations`:
  **sufficient**.
