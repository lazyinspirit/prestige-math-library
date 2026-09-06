# frontier-32 · Alpha group `b` · Step 3 recheck

Rechecked the current batch-3, batch-5, and batch-6 manifests and coverage
ledgers; their Step-3 fix-pass notes; MT-20, PT-4, and FR-4; and the current
`plan-spec.json`. The dispositions below are based on these current bytes.

## Dispositions

1. **Batch 3 — missing `rem-rmk-functional-analysis-uses`: closed.**
   The A manifest contains the exact required remark immediately after
   `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`, with
   `deps: []`. Its orientation-only strategy names FA-9's positive form,
   FA-18's compact/`C_0` form, FA-20's scalar/complex-measure form, and MT-20
   as their unique mathematical supplier. This satisfies the MT-20 receipt at
   `research/plan-measure-theory-track.md:3647-3651` without adding a
   load-bearing cross-page or A-to-B edge.

2. **Batch 3 — Choice qualification: closed.**
   `research/frontier-32-batch-3.notes.md:145-151` retains the exact
   Dependent-Choice qualification inherited from `thm-urysohn-lemma`, together
   with the Choice plus Dependent Choice ledger for the published compact
   partition when that route is used. It expressly bars presenting the
   Urysohn-dependent construction as a ZF proof.

3. **Batch 3 — Directorate source repair: source support sufficient; reported
   URL normalization is not present in the current coverage bytes.** The
   coverage record still uses the Internet Archive URL and records the direct
   URL as `original_url`; it does not, despite the fix-pass note's wording,
   cite the direct URL as its current `url`. This creates no source-closure
   blocker: `source-fetch-check` verifies the current 200-page PDF receipt,
   and the exact three regularity headings and their dispositions remain
   present. The preliminary atomic wedge-space measure is correctly
   out-of-scope because MT-20 uses the later outer-regularisation witness, not
   a separate failure-of-outer-regularity item. The refresh-created scope row
   `c3d5ceb0e9995673dbc992833b3a8ba4a59094a397d9b4ba22c46bfb088cbf44`
   is resolved as `stands` on that evidence. No manifest, destination,
   dependency, or plan-order change is warranted.

4. **Batch 5 — no assigned finding: stands.** The 32-item A/B scaffold keeps
   the measurable almost-sure event and `d_0` well-definedness through
   `justified_by`; its B witnesses remain declared `forward_refs`, rather than
   A dependencies. The 69-result coverage ledger is valid. Its one low-yield
   advisory is explained by specifically deferred results whose destinations
   exist later in plan order and by explicitly out-of-scope model-specific
   results; it is not a missing PT-4 route obligation.

5. **Batch 6 — no assigned finding: stands.** The 13-item A/B scaffold retains
   the finite Parseval and additive-representation inputs before the finite
   lacunary norm theorem, the Riesz-product input before the Sidon theorem,
   and the Fejer prerequisites for the continuous-Sidon corollary. The B page
   alone depends on A. All four source receipts and all 37 coverage results
   remain current; the 11 declines are non-load-bearing out-of-scope
   extensions.

## Pair verdicts

- `radon-measures-and-the-riesz-markov-kakutani-theorem`: **sufficient**.
- `modes-of-convergence-for-random-variables`: **sufficient**.
- `lacunary-fourier-series-and-sidon-sets`: **sufficient**.

## Current-byte checks

- `node tools/scope-decisions.mjs refresh --run frontier-32 --group b`, then
  `check`: 72 current decline rows and 0 errors after resolving the one new
  pending row.
- `manifest-deps`: 43 / 32 / 13 items for batches 3 / 5 / 6, all with 0
  errors.
- `coverage-checklist --require-destination`: 65 / 69 / 37 results and 0 / 1
  / 0 warnings. The sole warning is the reviewed batch-5 low-yield advisory.
- `source-fetch-check`: 3/3, 2/2, and 4/4 receipts verified for batches 3, 5,
  and 6.
- `content-policy --manifest-only` over these manifests: 88 scoped items, 0
  errors, 0 warnings.
- `validate-plan research/plan-spec.json`: declared page order is acyclic and
  consistent; no relevant item cycle, forward-reference violation, B-page
  dependency, or unresolved id was reported.
