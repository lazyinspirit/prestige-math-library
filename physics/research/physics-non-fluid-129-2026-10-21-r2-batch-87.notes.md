# Batch 87 authoring notes — Polymer analyticity and dilute continuum correlations

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `87` · role `beta` · page orders `871–872`  
Assigned output manifest: `research/physics-non-fluid-129-2026-10-21-r2-batch-87.pages.json`

## Inventory and dependency levels

The batch owns five A-page items and one B-page example. Local item levels were recomputed from direct in-batch dependencies and agree with the authored frontmatter:

| Item | In-batch dependencies | Level |
|---|---|---:|
| `def-csm-frontier-abstract-polymer` | none | 0 |
| `lem-csm-frontier-polymer-tree-majorant` | abstract polymer definition | 1 |
| `thm-csm-frontier-polymer-analyticity` | abstract polymer definition; polymer tree majorant | 2 |
| `lem-csm-frontier-stable-mayer-tree-bound` | none | 0 |
| `thm-csm-frontier-dilute-mayer-domain` | stable Mayer tree bound | 1 |
| `ex-csm-frontier-hard-core-dilute-bound` | dilute Mayer domain theorem | 2 |

Batch scheduling metadata records batch 87 at level 2 with batch 86 as its run dependency. A/B page capacity is 5/100 items and 1/100 examples.

## Design conflicts and resolutions

- The detailed assigned design section lists `csm-continuum-limits` and `csm-frontier-quantitative-dlr` as A-page prerequisites. The current plan/task manifest adds `csm-gibbs-lattice`. The plan/task manifest controls, so the A page retains all three requirements. The Gibbs lattice page is a distinct published prerequisite; the inspected `csm-continuum-limits` page does not itself list it as a page requirement. The stable continuum interaction definition used in the tree proof is also carried as an exact item dependency.
- The planned inventory lists `thm-csm-frontier-dilute-mayer-domain` as depending on `thm-csm-frontier-polymer-analyticity`. The inspected polymer theorem proves a finite abstract pairwise-incompatibility system. Its statement does not supply the continuum Lebesgue integrals or the stable, potentially attractive Boltzmann graph expansion used by the dilute theorem. The dilute theorem therefore proves its finite-volume graph/component identity locally and then uses the separately proved stable tree bound; its actual `deps`, facts and proof contract omit that unsupported edge. No consuming argument or prerequisite was omitted. If an explicit bridge is desired in a later plan revision, it needs a separate continuum cluster-expansion/limit supplier on the A page, proved under the actual continuum hypotheses.

## External prerequisites and cross-batch interface

The single cross-batch review row is the A-page edge to `csm-frontier-quantitative-dlr`, marked `verified`. The supplier is batch 86; its A/B carriers were inspected and all four A-page item Step-1 records were current and `ready` at interface review. This records authored readiness and the scoped interface check, not independent proof approval.

The other required pages, `csm-continuum-limits` and `csm-gibbs-lattice`, are published pages outside this run. Their current page statements/bodies were inspected. They are recorded as external page context here rather than as unsupported cross-batch review rows. The batch JSON contains one row per actual in-run cross-batch edge.

## Source harvest and proof route

The A-page harvest has four independent treatments, including the Friedli–Velenik textbook chapter; the B page has the textbook and Poghosyan–Ueltschi paper. Full relevant source sections and proofs were inspected. `source-fetch-check --stamp` fetched and stamped all six source entries (0 failures); `coverage-checklist` reports 2 pages, 17 harvested results, 0 errors and 0 warnings. There were no retrieval failures, so `source_resolution` and its history are empty.

The proofs are conditional mathematical deductions only. The polymer theorem establishes a finite abstract zero-free disk. The continuum theorem proves its own finite-volume graph expansion, stable tree estimate input, centered-cube coefficient limit, explicit sufficient disk, and compact-subdisk pressure/derivative convergence. The hard-core example proves evenness, Borel measurability, stability with `B=0`, and `C_beta=|B(0,a)|`; it does not claim the disk is sharp or predict freezing/coexistence. All six items use `domain: mathematics`, `library: physics`, and `physical_scope: null`.

## Scoped checks

- `depcheck --items-file` on the six assigned items and their dependency closure: 0 errors, 0 warnings; 696 dependency items and 381 dependency pages checked.
- `precheck.mts` through `tsx-run.mjs`: 5 proof-bearing items checked, 0 failures; the definition is not applicable.
- `proof-layout.mjs` on the six changed items: 6 items, 21 numbered steps, 0 defects.
- Strict proof-contract check: 5 proof-bearing contracts checked, 0 errors, 0 warnings. The definition has no proof contract because it has no proof.
- `rendercheck` on six items and both page files: 8 files checked, 0 errors, 0 warnings.
- `content-policy --manifest-only --authored`: 6 items in scope, 0 errors, 0 warnings.
- `manifest-integrity --run`: 258 planned items present, 0 missing and 0 added.
- `coverage-checklist`: 2 pages, 17 harvested results, 0 errors, 0 warnings.
- `source-fetch-check` check mode: 6/6 stamped and resolved.
- The scoped `item-dependency-levels` calculation on both batch-87 pages reports all six authored levels matching the table above, with no local errors. The full-run `item-dependency-levels check` currently reports unrelated empty scaffold inventories in other batches; it reports no findings for batch 87. No other batch was edited.
- The full-run `batch-dependency-levels check` is blocked by an unrelated legacy string-only item inventory in batch 89 (`research/physics-non-fluid-129-2026-10-21-r2-batch-89.pages.json`): the current collector encounters repeated `undefined` item identities and reports `Duplicate item undefined`. The recorded scheduling entry for batch 87 remains level 2, requiring batch 86. Shared scheduling metadata and other batches were left to the owner.
- `proof-contract-coverage.mjs --run ... --contracts` cannot reach the batch-87 scoped coverage report because its run-wide frontier load stops at the unrelated empty inventory `qsmx-quantum-double-examples`. The strict batch-87 `proof-contract.mjs` check still validates all five proof-bearing contracts with no errors or warnings.

## Step-1 readiness

All six assigned items have current `decision: ready`, `owner: false` Step-1 records with their complete direct dependency lists and current hashes. The stable Mayer bound, dilute Mayer theorem, and hard-core example records were refreshed after the last proof edits, in supplier-before-consumer order. These records confirm authored prerequisites, placement and contracts only; they are not independent mathematical acceptance.
