# Batch 3 authoring notes — Bialgebras, Convolution, and Antipode Identities

## Plan and inventory comparison

The controlling HH-4 design at `research/plan-hopf-hecke-algebras-track.md` §HH-4 and its `plan-spec.json` entries agree on page IDs, category, order, companions, and the three page prerequisites. The plan-spec pages have `items: []`, while the source-grounded HH-4 inventory in `research/hopf-hecke-scaffold/inventory.json` specifies six local claims. I treated the empty arrays as the pre-authoring scaffold, not a scope reduction; all six planned claims are retained. The following two A-page suppliers were added because the planned formulation needs them for complete local arguments: `lem-hh-tensor-product-coalgebra` (to make coalgebra maps out of $H\otimes H$ well-defined) and `lem-hh-bialgebra-compatibility-equivalence` (to prove the four structure-map equations equivalent to the coalgebra-map formulation).

The original batch-3 manifest was empty when authoring began. I derived the item inventory and dependency graph from the complete HH-4 design and proposed inventory before writing the carriers, then populated the batch manifest with those IDs, dependencies and labels. The final manifest, A/B page lists, carrier dependencies, contracts, and levels agree. This note records that the manifest itself was materialized after carrier files were first written.

## Inventory and item levels

The pair remains at run-level `dependency_level: 2`, requiring batches 1 and 2. The current batch-1 manifest places `def-hh-coalgebra-and-coalgebra-map` at item level 0: its declared suppliers are published context and it has no in-run logical supplier. A scoped recomputation over batches 1–3 checked 6 pages and 32 items with no errors; all 11 batch-3 item labels match. The global item-level check reports 9 errors, all in batch 9's Drinfeld-double pages; no batch-3 item has a level error. The global batch-level `check` reports the shared run-level artifact as stale. A read-only recomputation gives batch 3 level 2 with prerequisites 1 and 2 and current input hash `e573df8dcf8db930f345b38d05b88506d317cc12fc937414eb8e79c1784080aa`. I did not rewrite the shared dependency artifact; the run owner can refresh it after all batch manifests settle. No out-of-scope carrier or engine state was changed.

| Item | Kind | Item level | In-run logical supplier(s) |
|---|---:|---:|---|
| `lem-hh-tensor-product-coalgebra` | lemma | 1 | `def-hh-coalgebra-and-coalgebra-map` |
| `def-hh-bialgebra-and-bialgebra-map` | definition | 1 | `def-hh-coalgebra-and-coalgebra-map` |
| `lem-hh-convolution-algebra-associativity-and-unit` | lemma | 1 | `def-hh-coalgebra-and-coalgebra-map` |
| `lem-hh-bialgebra-compatibility-equivalence` | lemma | 2 | `def-hh-bialgebra-and-bialgebra-map`, `lem-hh-tensor-product-coalgebra` |
| `def-hh-hopf-algebra-and-antipode` | definition | 2 | `def-hh-bialgebra-and-bialgebra-map`, `lem-hh-convolution-algebra-associativity-and-unit` |
| `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` | theorem | 3 | `def-hh-hopf-algebra-and-antipode`, `lem-hh-convolution-algebra-associativity-and-unit`, `lem-hh-tensor-product-coalgebra` |
| `lem-hh-group-and-polynomial-hopf-algebras-exist` | lemma | 3 | `def-hh-bialgebra-and-bialgebra-map`, `def-hh-hopf-algebra-and-antipode` |
| `lem-hh-commutative-or-cocommutative-antipode-is-involutive` | lemma | 4 | `def-hh-hopf-algebra-and-antipode`, `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` |
| `ex-hh-group-and-function-algebras-for-s3` | example | 4 | `lem-hh-group-and-polynomial-hopf-algebras-exist` |
| `ex-hh-convolution-is-not-composition` | example | 4 | `def-hh-hopf-algebra-and-antipode`, `lem-hh-convolution-algebra-associativity-and-unit`, `lem-hh-group-and-polynomial-hopf-algebras-exist` |
| `ex-hh-polynomial-primitives-characteristic` | example | 4 | `lem-hh-group-and-polynomial-hopf-algebras-exist` |

The complete dependency arrays, including published suppliers, are in the batch manifest and the item frontmatter. `justified_by` records the planned existence witnesses on the two definitions and does not introduce graph edges.

## Cross-batch prerequisite verification

At first inspection, batches 1 and 2 had empty item inventories and the HH-2/HH-3 item bodies were absent. While authoring continued, their authors populated the carriers. I then read the current HH-2 coalgebra definition and its finite-comatrix existence justifier, and read the HH-3 page summary and right-comodule and rational-dual definitions. The item-level coalgebra interface now matches the HH-4 hypotheses and is recorded `verified` in the batch-3 cross-batch input.

- Exact item supplier: `def-hh-coalgebra-and-coalgebra-map` (batch 1). Its current Definition gives the field, algebraic tensors, associator and unit maps, coassociativity, both counit equations, and coalgebra-map equations preserving comultiplication and counit. The named finite-comatrix justifier defines maps on a finite basis, reindexes the finite double sums for coassociativity, and checks both counits; it proves the promised nonzero example. These hypotheses and conventions match the local tensor-product coalgebra, bialgebra, and convolution arguments. No source excerpt or approval was invented.
- Exact page supplier: `coalgebras-counits-and-the-fundamental-coalgebra-theorem` (batch 1). Its current A page and the exact coalgebra definition/justifier were inspected; the page edge is recorded `verified`.
- Exact page supplier: `comodules-matrix-coefficients-and-coalgebra-duality` (batch 2). Its current manifest contains six A items and three B examples. After the earlier inspection, the batch-2 authors corrected the availability wording: the current A page lists the HH-2 coalgebra page as a prerequisite and says the coalgebra supplier is present; the two definitions likewise state that the current coalgebra supplier is present. I reinspected the complete current page summary and both definition bodies; no stale missing-supplier statement remains. HH-4 has no item-level dependency on an HH-3 item and uses no comodule theorem as a premise, but the declared page-level edge is present and its body/interface is now available. The batch-3 cross-batch input records this edge `verified`; this records current-source inspection, not independent approval.

The required batch-1 and batch-2 page interfaces and the direct coalgebra-definition supplier have been inspected and are recorded `verified`. No unresolved cross-batch supplier check remains in this pair's evidence. The A/B claims remain as planned; two local A-page prerequisites were added with complete proofs.

## Source reading and dispositions

Three independent full-text treatments were retrieved and inspected for the complete relevant reasoning: Schneider, *Lectures on Hopf algebras*, §1 definitions/examples and Theorem 1.5; Etingof–Semenyakin, *A brief introduction to quantum groups*, §§2.1.2–2.2.2; and Rüd, *Hopf Algebras and rooted trees*, §§2.3.1–2.4. Schneider and Etingof–Semenyakin are the two full lecture-note treatments for the A page; the MIT thesis is an additional check on convolution and the compatibility equivalence. Relevant text was inspected from the full-text PDF extracts after direct PDF downloads succeeded. The local shell lacks `pdfinfo`/`pdftotext`; the PDF text views were read through the source browser. No source retrieval failed, no recovery retry or source drop was needed, and `source_resolution` has no failure disposition to record.

`research/hopf-hecke-unfinished-15-2026-10-15-batch-3.coverage.json` records exact URLs, locators, supported items, harvested results, dispositions and retrieval stamps. `source-fetch-check --stamp` and the final check mode succeeded for all 3 sources. The coverage is source support only; all active algebraic claims and examples have local proofs or verifications.

Mathematical scope checks kept explicit: convolution is defined on all linear maps without finite-dimensionality; the full function Hopf algebra is claimed only for finite groups; group algebra formulas are checked on the group basis; polynomial Hopf maps are proved in every characteristic; characteristic-dependent primitive behavior is calculated separately; and $S^2=\mathrm{id}$ is proved under two separate hypotheses only. The Hopf definition does not assert compositional invertibility of $S$.

## Scoped checks and readiness

Final scoped results after the carrier and contract edits:

- `precheck`: 9 proof-bearing items, 9 pass, 0 failures.
- `proof-layout`: 9 items, 44 steps, 0 defects.
- `rendercheck`: 13 files (11 items and 2 pages), 0 errors, 0 warnings.
- `content-policy`: 11 items, 0 errors, 0 warnings.
- `proof-contract --strict`: 11/11 items, 0 errors, 0 warnings.
- `source-fetch-check`: 3/3 sources fetch-verified; coverage check: 1 page, 17 harvested results, 0 errors, 0 warnings.
- Focused `depcheck`: 11 items, 2 pages, 229-item dependency closure, 0 errors, 0 warnings.
- Manifest/frontmatter consistency: 2 pages, 11 items, no mismatches. Scoped item-level calculation across batches 1–3: 6 pages, 32 items, no errors; HH-4 levels are 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4 in manifest order.
- `step1-decisions check`: all 11 HH-4 records are current and hash-bound; the run-wide check remains open at 21/138 ready because 117 other item records are still open.
- The global item-level and batch-level checks remain blocked only by the out-of-scope errors and stale shared artifact stated above. The autopilot status recomputes the run as active at `1-scaffold` with no in-flight worker; the engine state was not edited.

Each of the 11 item-level Step-1 records is `ready`: placement, dependency level, complete statement/proof or verification, prerequisite interfaces and proof contract are present and checked. Each record includes its item dependencies and examined justifiers. These completion records describe authoring readiness only and are not independent mathematical approval.
