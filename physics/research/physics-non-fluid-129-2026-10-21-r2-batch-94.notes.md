# Batch 94 authoring and dependency notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `csm-frontier-fluctuation-theorems` / `csm-frontier-fluctuation-theorems-examples`  
Assigned items: eight on A and one B example.

## Plan and design comparison

`plan-spec.json` agrees with the track on page ID, title, A/B pairing, category, library, order 885, and the exact page requirements `csm-stochastic-response` and `csm-frontier-large-deviation-ensembles`. It specifies no item-level dependency graph. The detailed design's scope and proof routes are retained: finite irreducible homogeneous chains with symmetric support, a measure-level finite-time identity without a density assumption, a driven finite-state Jarzynski identity under instantaneous Gibbs detailed balance, dimensional conventions, the common energy-shift property, and the rare-path/physical-model caveats.

Two item edges in the detailed inventory/supplier scaffold do not support its own stated scope or proof route:

- The planned dependency of `def-csm-frontier-stationary-path-entropy` on `def-csm-dk-finite-reversible-rate-model` supplies only a reversible model, while the design explicitly permits non-reversible chains. The carrier therefore cannot support the requested interface. The batch defines general bounded finite-state rates locally, assumes only a positive generator-stationary law and symmetric support for the entropy statistic, and proves stationarity from the forward equation. It makes no claim that the reversible supplier proves the non-reversible result.
- The planned `thm-csm-frontier-finite-jarzynski` dependency on `thm-csm-frontier-finite-path-fluctuation` is not an input to the design's weighted-forward proof route. The Jarzynski identity instead depends on the locally proved finite-state Feynman–Kac evolution and the candidate weighted law. This removes an irrelevant proof dependency and follows the design's stated route.

The local auxiliary carriers are `def-csm-frontier-finite-rate-process`, `lem-csm-frontier-finite-jump-path-density`, `thm-csm-frontier-finite-rate-forward-equation`, `lem-csm-frontier-finite-rate-jump-count-expectation`, and `lem-csm-frontier-finite-jump-feynman-kac`. Each has explicit mathematical dependencies and a complete proof where it is proof-bearing. The Jarzynski result now includes the zero-duration boundary; for positive duration, energies are C1, and at zero duration finite energy values suffice.

## Required pages and inspected interfaces

The current published `csm-stochastic-response` page was inspected, including its finite reversible-rate model and nonexplosion result. Its reversible-only rate interface is not used as proof of the non-reversible path-fluctuation theorem. The page requirement is retained as planned context. This page is outside the current run, so the run's cross-batch collector does not emit a row for it.

For batch 88, the page `csm-frontier-large-deviation-ensembles` and its four current carriers were read and checked using `loadStep1Record` and `step1Decision`: `def-csm-frontier-mean-field-ensemble`, `thm-csm-frontier-compact-laplace-tilt`, `thm-csm-frontier-mean-field-supporting-lines`, and `thm-csm-frontier-curie-weiss-bifurcation` have current `ready` records. Their large-deviation results are not used as proofs of the exact finite-time path relation. The scoped page edge is recorded as `verified` in `physics-non-fluid-129-2026-10-21-r2-batch-94.cross-batch-dependencies.json`.

The authored item dependency levels are:

| Item | Level |
|---|---:|
| `def-csm-frontier-finite-rate-process` | 0 |
| `lem-csm-frontier-finite-jump-path-density` | 1 |
| `thm-csm-frontier-finite-rate-forward-equation` | 2 |
| `lem-csm-frontier-finite-rate-jump-count-expectation` | 2 |
| `lem-csm-frontier-finite-jump-feynman-kac` | 2 |
| `def-csm-frontier-stationary-path-entropy` | 3 |
| `thm-csm-frontier-finite-jarzynski` | 3 |
| `thm-csm-frontier-finite-path-fluctuation` | 4 |
| `ex-csm-frontier-biased-ring-entropy` | 5 |

The batch remains dependency level 2 with `requires: ["88"]` in the scheduling graph. The A page has eight items and the B page one, below the 100-item cap. No dependency cycles were found in the batch-94 item inventory.

## Source record

Full-text sources were inspected and recorded in the batch coverage file, with locators, supported items, limitations, retrieval history, and per-result dispositions. The A page has independent treatments in Seifert's complete 2017 lecture notes, Lebowitz–Spohn, Jarzynski, Seifert's 2012 review, and Crooks; Touchette is recorded only as long-time large-deviation context. The B page records Seifert and Lebowitz–Spohn. Source-fetch verification reports 8/8 source records verified, with zero newly stamped and zero drops. The source-resolution list is empty because no retrieval failed; there are no invented or dropped sources.

## Scoped checks and blockers

- `proof-layout.mjs` on the nine assigned items: 26 numbered steps, 0 defects.
- `precheck.mts` on the nine assigned items: 7 proof-bearing items pass; the two definitions are not applicable.
- `proof-contract.mjs --strict`: 9/9 items checked, 0 errors, 0 warnings.
- `rendercheck.mjs` on the nine items and both pages: 11 files, 0 errors, 0 warnings.
- `content-policy.mjs ... --manifest-only --authored`: 9 items, 0 errors, 0 warnings.
- `depcheck.mjs --items-file`: 812-item dependency closure, 0 errors, 0 warnings.
- `manifest-deps.mjs`: 9 items, no missing dependency arrays or errors.
- Scoped dependency calculation for the batch-94 manifest: all nine levels match the authored item frontmatter (table above).
- `source-fetch-check.mjs --coverage ... --stamp`: 8/8 sources fetch-verified; no new stamps or drops.
- The selected-item Step-1 readiness audit using `loadStep1Record` and `step1Decision`: all nine batch-94 items have current `ready` records with `owner: false`.

The run-wide `item-dependency-levels.mjs check` still reports empty inventories in unrelated batches (QFT, CSM, and TGRx) and reports no level mismatch among batch 94's items. `batch-dependency-levels.mjs check` reports the shared run-level file stale after this manifest's authoring changes. The current recorded graph still says batch 94 is level 2 and requires batch 88. These run-wide inventories and the shared scheduling file are owner-controlled and were not edited in this batch.

The read-only `frontier-dependency-ledger.collect()` inspection also stops at batch 97's existing cross-batch review with `invalid review or consumer ownership`. The batch-94 JSON itself is a one-row array with the exact batch-88 page edge and no orphaned local entries; the run-wide collector issue is unrelated and remains for the owner.
