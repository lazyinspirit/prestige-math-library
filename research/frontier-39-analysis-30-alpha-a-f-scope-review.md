# Frontier 39 owner scope review: Alpha groups a and f

Reviewed 2026-10-05 against `research/plan-spec.json`, the controlling PDE,
Fourier-analysis and Lie-theory design sections, the current batch coverage and
cross-batch dependencies, the six pair manifests, and their author handoff
notes. This review covers the current decline rows in Alpha groups a and f;
each evidence field is recorded in the corresponding decision ledger.

## Decisions

All 70 rows **stand** as `out-of-scope` or `deferred`; no approved claim is
missing, so none needs `proceed`, `merge` or `enrich`.

| Group | Batch and pages | Current declines | Decision |
|---|---|---:|---|
| a | 1 — Heat Equation Maximum Principles, Duhamel and Smoothing | 18 | 18 stand |
| a | 11 — Fredholm Elliptic Problems and the Elliptic Spectrum (A/B) | 16 | 16 stand |
| a | 28 — Finite Fourier Analysis and the Fast Fourier Transform | 10 | 10 stand |
| f | 10 — Lax–Milgram and Weak Elliptic Solutions (A/B) | 16 | 16 stand |
| f | 21 — Weyl Character and Multiplicity Formulas (A/B) | 4 | 4 stand |
| f | 22 — Tensor-Product Multiplicities and Littlewood–Richardson | 6 | 6 stand |

The plan inventories and current manifests retain the complete commissioned
claims and the documented local proof prerequisites/additions. The declined
heat-generator theory, elliptic regularity/spectral extensions, general-LCA
Fourier theorems, additional Lie-theory formulas, and unrelated PDE topics do
not add a missing item to those inventories. Deferred rows point to approved
pages in the current plan; companion-page rows sent to an A page remain covered
there. In particular, FR-18 keeps its finite-dimensional proof scope while its
general Fourier interfaces remain on FR-16/17/19, and PDE-17 receives its
variational and Poincaré interfaces from the designated PDE pages.

The ledgers were refreshed after recording decisions so their row and closure
context hashes bind to current coverage and plan bytes. Checks passed:

```text
scope-decisions check --group a: 44 current declines, 0 errors
scope-decisions check --group f: 26 current declines, 0 errors
```

This owner review does not resolve the run's separate Step-3 gate or autopilot
controller blockers.
