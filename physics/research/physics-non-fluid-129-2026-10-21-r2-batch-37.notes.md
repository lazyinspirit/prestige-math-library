# Batch 37 — Bootstrap closure and nonlinear stability boundaries

Run: `physics-non-fluid-129-2026-10-21-r2`  
Date: 2026-10-22  
Scope: the pair `gr-fx09-bootstrap-and-stability-boundaries` and its examples page only.

## Plan comparison and ordering

The assigned task and current `research/plan-spec.json` agree on A-page order **771**, B-page order **772**, title, category, library, and required pages. The GR track at `research/plan-general-relativity-frontier-expansion-track.md` L146 gives order **8017**. This is the only plan/design conflict found; the current plan controls, so this pair retains order 771. The plan-spec item arrays are empty staging inventories; the complete five-item inventory comes from the cited design module and its matching source inventory. No owner-authoring-direction file was present.

## Inventory and dependency levels

The current run record sets this batch's page dependency level to **3**, requiring batches 31 and 36. Item levels were computed before carrier authoring from current in-run supplier levels: the batch-31 finite-slab theorem is level 1 and the fixed-gauge data definition is level 0. Therefore the bootstrap contract is level 2; its closure theorem and source-boundary remark are level 3; both examples are level 4. The new item edge to `def-gr-fx-fixed-gauge-data-topology` is an explicit mathematical prerequisite for the time, state and units conventions. The other added item dependencies are imported mathematical statements required for the real-infimum argument and the scalar integral estimates. No cycles were found.

| Item | Home | Direct dependencies | Level |
|---|---|---|---:|
| `def-gr-fx-bootstrap-continuation-contract` | A | `thm-gr-fx-finite-slab-stability`, `def-gr-fx-fixed-gauge-data-topology` | 2 |
| `thm-gr-fx-bootstrap-closure` | A | contract, `def-infimum`, `thm-infimum-property` | 3 |
| `rem-gr-fx-kerr-stability-source-boundary` | A | contract | 3 |
| `ex-gr-fx09-1` | B | contract, closure theorem, Gronwall, real powers, chain rule, FTC, exponential positivity | 4 |
| `ex-gr-fx09-2` | B | contract, closure theorem, Gronwall, real powers, chain rule, FTC, logarithm integral | 4 |

## Supplier inspection

- Read the complete Statement and Proof of `thm-gr-fx-finite-slab-stability`. Its current Step-1 record is `ready` and hash-current (owner record dated 2026-10-21). Its actual hypotheses include Countable Choice and Dependent Choice, `s >= 5`, one fixed periodic symmetric-hyperbolic gauge, finite slabs, compact-state and regularity bounds, and—when using the geometric clause—complete constraints, matter, gauge propagation and reconstruction. It proves finite-time comparison and neighborhood persistence, not an estimate uniform as `T` tends to infinity. Draft status and `verification.precheck: pending` are not treated as a proof gap or as independent acceptance.
- Read `def-gr-fx-fixed-gauge-data-topology`, including its normalized state, Sobolev regularity and SI convention `x^0 = c t_phys` in metres. The contract declares fixed length and energy scales and uses dimensionless time and energy.
- All four manifested A-page items on the current batch-31 `gr-fx03-geometric-cauchy-stability` page have current ready records. All eight manifested A-page items on the current batch-36 `gr-fx08-wave-energy-and-black-hole-perturbations` page have current ready records. This includes `lem-gr-fx-schwarzschild-gaussian-beam-concentration`, which is also the coverage-canonical result; I read its complete current Statement and Proof. It is outside this pair's item dependency closure and is not used here.
- Read the imported mathematical Statements and Proofs used for the first-threshold infimum and the scalar examples. `thm-infimum-property` is choice-free. The examples use the exact continuous-function, monotonicity and regularity hypotheses of the published Gronwall, power, logarithm and FTC suppliers. Imported mathematics is read-only.

The A page preserves both declared page requirements. The batch-31 finite-slab result is consumed at its exact fixed-gauge, finite-time scope. The batch-36 wave-energy/Kerr page remains required context; this pair asserts no decay estimate, optical construction, trapping control, nonlinear gauge theorem or final-parameter modulation.

## Source reading and dispositions

Full-text sources, exact locators, supported items and each harvested result's disposition are recorded in `research/physics-non-fluid-129-2026-10-21-r2-batch-37.coverage.json`. The two independent mathematical treatments are Métivier's complete Chapter 3 and Wang's complete §6.3 proof section. Both are context, not logical suppliers for the local argument. The coverage record distinguishes their PDE-specific hypotheses from the exact scalar and continuation claims proved here.

The candidate Shao lecture-notes URL returned HTTP 404; a searched author-site alternative was also unavailable. It was not a planned source and is not cited. Métivier and Wang provide two accessible independent full-text treatments, and the local proofs are complete, so no source blocker remains. The source-resolution list is empty because no unavailable source is a required or cited input; the failed search candidate and its disposition are retained in coverage.

A search on 2026-10-22 also surfaced Jérémie Szeftel's arXiv:2609.40068, dated 2026-09-30, whose search-result abstract claims full subextremal Kerr stability. Only that search-result abstract was inspected; the full text was not read, the result is not used in these items, and the source-boundary remark deliberately makes no current-status claim. It is recorded for owner awareness if a current literature-status item is separately commissioned.

## Authored scope and readiness

The three A items are the planned definition, abstract conditional closure theorem and source-boundary remark. The two B leaves give the integrable-weight and logarithmic-weight scalar examples. The polynomial example includes an explicit equality case that defeats the required strict improvement on a finite slab. Both pages are frontmatter-only, as required by the current construction policy; no new local item was needed.

Readiness records bind each finished carrier and its actual direct and transitive inputs. A `ready` record here records Step-1 input readiness only; it does not assert independent proof approval or a gate pass.

## Scoped checks

- `source-fetch-check.mjs --coverage ...batch-37.coverage.json --stamp` verified and stamped all 6 listed source records (4 A-page sources and 2 B-page sources); the repeat check reported 6/6 fetch-verified and 0 unresolved.
- `coverage-checklist.mjs` reported 0 errors and one advisory low-yield warning: 2/10 harvested A-page source results were scaffolded as items. The declined results have item-specific dispositions; this warning is retained for Alpha's review.
- `content-policy.mjs` passed all 5 items with 0 errors and warnings. `manifest-deps.mjs` passed all 5 manifest rows. `manifest-integrity.mjs --run ... --json` reported 258/258 planned rows present and no added rows.
- Scoped `depcheck.mjs` passed the 5 items and their prerequisite closure (2,301 closure items, 300 pages; 0 errors/warnings). `rendercheck.mjs` passed all 5 items and both pages (7 files). `proof-layout.mjs` passed all 5 changed items, 10 numbered steps, 0 defects. The `precheck.mts` scoped run passed all 3 proof-bearing items with 0 failures. `proof-contract.mjs --strict` passed all 5 contracts with 0 errors or warnings.
- Scoped item-level computation over the complete in-run item dependency closure found no cycles or label errors and confirmed levels 2, 3, 3, 4, 4 for the five authored items. The stored scheduling row records batch 37 at level 3 with batch requirements 31 and 36.
- Run-wide `item-dependency-levels.mjs check` reports unrelated empty scaffold inventories in batches 80, 96–98 and 129. `batch-dependency-levels.mjs check` reports the shared run record as stale; I left that owner-level scheduling state unchanged. Run-wide `step1-decisions.mjs check` is not closed (761 of 803 items ready, with outstanding items and empty pages elsewhere in the run). The individual records for this batch and all required page suppliers were checked separately by `step1Decision` and are hash-current.
- `proof-contract-coverage.mjs --run ...` cannot load the whole run because another batch has an empty inventory (`tgrx-jt-disk-model`); the explicit batch-37 `proof-contract.mjs --strict` check passed. The run-wide cross-batch ledger collector likewise stops at the pre-existing invalid review in batch 97; batch-37's four exact edges were separately checked against current page/item ownership and are recorded in its JSON array.

## Final Step-1 readiness

Each authored item has a local `ready` record with `owner: false`; `step1Decision` confirms all five records are hash-current after the final carrier edits. The exact direct dependencies and supporting evidence are stored in each record.

| Item | Record |
|---|---|
| `def-gr-fx-bootstrap-continuation-contract` | `research/physics-non-fluid-129-2026-10-21-r2-step1-def-gr-fx-bootstrap-continuation-contract.json` |
| `thm-gr-fx-bootstrap-closure` | `research/physics-non-fluid-129-2026-10-21-r2-step1-thm-gr-fx-bootstrap-closure.json` |
| `rem-gr-fx-kerr-stability-source-boundary` | `research/physics-non-fluid-129-2026-10-21-r2-step1-rem-gr-fx-kerr-stability-source-boundary.json` |
| `ex-gr-fx09-1` | `research/physics-non-fluid-129-2026-10-21-r2-step1-ex-gr-fx09-1.json` |
| `ex-gr-fx09-2` | `research/physics-non-fluid-129-2026-10-21-r2-step1-ex-gr-fx09-2.json` |
