# Batch 48 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Pair: `generalized-eigenvalue-pencils-and-qz-methods`  
Dispatch role: beta; batch dependency level 3; declared prerequisite batches 1 and 33.

## Scope, design, and inventory

- Read the current owner direction, the complete LIN-QZ design section, its incorporated audit contract, the `plan-spec.json` record, and the assigned task before authoring. The plan and `plan-spec.json` agree on the pair identity, four page prerequisites, scope, examples, and real/complex conventions; no design conflict remains to record.
- The assigned A page has 17 items and the B page has 3 examples (20 total), below the 100-item page cap. The manifest, carriers, and page frontmatter list the same inventories and direct dependencies.
- The local dependency graph was recomputed over current batches 1, 33, and 48. All 20 batch-48 item labels match; levels are 0–6 on A and 1–3 on B. The manifest and A/B page lists are ordered by ascending item level.
- The A-page prerequisites are the exact four in the task and plan: direct matrix factorisations, the spectral theorem/SVD, finite-precision direct factorizations, and computed Schur decompositions. Published linear-algebra pages and the actual Cholesky/spectral theorem carriers were inspected. The page-level `requires` fields match the manifest.

## Supplier checks and unresolved QZ update theory

Read the actual relevant statements and proofs, including the batch-1 operationwise floating-point model and residual-certificate lemma, and the batch-33 unitary-similarity accumulation lemma and computed Francis backward-error theorem. The current facts and uses are recorded in `batch-48.cross-batch-dependencies.json`.

The following established result is still missing: a local backward-error bound for the *actual two-sided QZ Givens update*. The batch-1 Householder supplier proves a one-sided real target-column/separate-panel estimate; the batch-33 Francis theorem proves its concrete Householder QR instance and leaves its general update premise conditional. Neither proves complex/real Givens generation, paired left/right updates to both A and B, or QZ structural zero writes.

Proposed A-page supplier: `lem-qz-two-sided-local-computed-update-bound`. It would need to state and prove (i) the exact success/range and factor representation for Givens generation, including the deviation of rounded stored coefficients from exact unitary factors; (ii) dimension-explicit normwise bounds for applying the factors on both sides of each of A and B under the current operationwise model; (iii) exact perturbation-pair bounds for every explicit structural zero/deflation; and (iv) a bound compatible with the existing two-sided accumulated-error lemma. Do not treat the source’s generic QZ stability statement, the Householder-only supplier, or the conditional Francis premise as this result.

Affected consumers/claims:

- `alg-finite-budget-qz-iteration-with-deflation-and-residual`: presently returns `certificate-inconclusive` when such a local bound is unavailable; it makes no unconditional convergence or O(u) claim.
- `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence`: finite termination and the conditional perturbation identity are proved, but no concrete Givens update error bound is instantiated.
- `thm-computed-qz-pair-has-certified-backward-error`: the exact residual-based pair backward perturbation identity is proved; its local-update bound is explicitly conditional and no unconditional O(u) coefficient is claimed.

These three items are marked `escalated` in Step 1 readiness records. The gap is preserved rather than filled with an unverified supplier excerpt or coefficient.

## Source reading and resolution

Five final full-text URLs are recorded and fetch-stamped: Kressner’s dissertation, Arbenz’s full lecture notes, Netlib GNEP, Netlib generalized nonsymmetric error bounds, and Netlib’s complete generalized symmetric-definite section. Kressner and Arbenz are the two independent full treatments for the A page. The full locators, content-to-item map, dispositions, retrieval history, and source hashes are in `batch-48.source-coverage.json`; local downloads/extractions and the noncredited-source log are in `batch-48-source-reading/`.

The short Netlib `node34.html` driver overview was rejected by the full-text fetch check at 1,956 extracted characters (the threshold is 2,048). Search found the complete computational section `node54.html`, which was opened, fully read, substituted for the affected Hermitian-definite references, and stamped. No item remains dependent on node34.

The optional Golub–Van Loan textbook candidate is not credited: the IITB-hosted copy returned 404, and a retrieved UChicago mirror produced unreadable MuPDF text. It is not cited by a final carrier; no item depends on it. The complete local arguments and the two independent readable full-text sources provide the mathematical coverage.

## Scheduling and shared-evidence blockers

- The dispatched task records scheduling input hash `bbea1572b1a46f2c515fbb6183725e9fa01ec577ff3078beaea99ec975e8b229`; the current batch-dependency JSON records `fe58fcd8d079fbe3cf342c8e22dcc5d2030d251f9aa5c7f4f21e36d3e7e97da2`. The current JSON still reports batch 48 at level 3 with prerequisites 1 and 33. `node tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` reports stale batch dependency levels. This owner/shared scheduling record was left untouched.
- `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16` stops on `numerical-optimization-dynamics-2026-10-16-batch-11.cross-batch-dependencies.json: invalid review or consumer ownership`. Batch 11 is outside this assignment and was not edited.

## Scoped check results

These are authoring and mechanical checks only; they do not constitute independent approval.

- Batch-48 local manifest/carrier/page audit: pass for all 20 items. Dependencies and levels match; both page inventories match the manifest and are level-ordered.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-48.proof-contracts.json --strict`: pass, 20/20 items, zero errors and warnings.
- `node tools/tsx-run.mjs tools/precheck.mts --json <all 20 assigned item paths>`: pass, 20 files, 15 proof-bearing carriers, zero failures.
- `node tools/proof-layout.mjs <assigned item paths>`: a 20-file renderer call timed out once; the same explicit 20 paths were then checked in four groups of five. All groups passed (4 + 10 + 17 + 14 = 45 numbered steps; zero defects).
- `node tools/rendercheck.mjs <20 assigned items and both pages>`: pass, 22 files; all YAML and KaTeX spans parse. After the final two item clarifications, the four changed items were rechecked: pass, 4/4.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-48.source-coverage.json`: pass, 5/5 final unique URLs stamped and resolved (the two coverage rows reuse stamps).
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-48.coverage.json`: pass, 2 pages, 39 harvested results, zero errors or warnings.
- Step 1 record decisions: 17 `ready` and the 3 stated QZ `escalated` records. Ready hashes for changed carriers were refreshed through `node tools/step1-decisions.mjs record`; attempts on unchanged ready items confirmed they were current, and all escalations were preserved without overwrite.
- Full-run `node tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16`: blocked by empty inventories and stale labels in other batches, with no batch-48 item errors. Examples reported include `verified-linear-systems-and-spectral-enclosures: empty scaffold inventory`, `thm-na-clenshaw-curtis-interpolation-coefficients: dependency_level 4 differs from computed 5`, and `def-resolvent-of-a-monotone-relation: dependency_level 0 differs from computed 1`. The separately recomputed graph for batches 1, 33, and 48 passes for all 20 batch-48 labels.
- `node tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16`: blocked because the current whole-run dependency-level JSON is stale; its recorded hash differs from the dispatched task hash as listed above.
- `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16`: blocked by the batch-11 input `numerical-optimization-dynamics-2026-10-16-batch-11.cross-batch-dependencies.json: invalid review or consumer ownership`; no foreign batch input was edited.
