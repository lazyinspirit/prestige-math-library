# Batch 101 authoring notes

## Scope and controlling design

- Pair: `finite-element-pde-constrained-optimization` and its examples page; only these draft carriers, pages, and batch evidence were edited.
- The current task and `plan-spec.json` both declare the same seven page-level requirements: inequality KKT, finite-element meshes, proximal gradient, Céa/Aubin–Nitsche, parabolic FEM, Strang, and discrete/continuous PDE adjoints.
- CTRL2's complete contract in the optimization audit controls the mathematical scope and hypotheses. The plan section preserves the distinction between P0 control discretization and variational control discretization, the conditional H1 and H2 rates, the L2 tracking objective with alpha>0, the separate parabolic branch, and the boundary-control caveat. No claim was weakened to fit the page.
- A local prerequisite was added for the L2 projection onto a cellwise-constant box: `lem-p0-box-projection-is-clipped-cell-average`. It proves the clipped-cell-average formula and nonexpansiveness used by the finite projected-gradient method.

## Dependency and ownership reconciliation

- The user dispatch lists prerequisite batches 6, 24, 27, 38, 56, 89, and 96. The current run-level `batch-dependency-levels.json` lists those plus batch 85, still at dependency level 8. The extra edge comes from the SQP carriers' exact item dependencies on the four OPT6 Newton/QR items. Their current supplier bodies and complete proof interfaces were inspected. A later readiness audit found stale Step 1 hashes in the finite-precision OPT6 chain; affected batch-101 SQP items are escalated and the exact supplier chain is recorded in `cross-batch-dependencies.json`. The task/page `requires` list also omits the OPT6 page, although the controlling SQP clause imports its local conditions. The item edge is preserved; the shared plan and batch schedule were not edited.
- The current DIF3 page in batch 96 now contains 17 items (the earlier empty-inventory observation is stale). The relevant current item bodies were read: `lem-elliptic-state-map-c1-under-uniform-coercivity`, `thm-elliptic-adjoint-reduced-gradient`, `thm-elliptic-fe-gradient-error-in-energy-norms`, `cor-elliptic-l2-gradient-rate-under-dual-regularity`, `thm-parabolic-adjoint-gradient-sensitivity`, and `thm-parabolic-fe-gradient-error-with-time-dependent-ritz`. Their Step 1 readiness records are missing, so no supplier acceptance is claimed. Their parameter domain is finite-dimensional R^m and the FE error theorems require their listed derivative-data defects. CTRL2's distributed control parameter is L2; the local carriers derive that control-direction formula directly from the bounded linear load and the energy adjoint. The parabolic carrier also retains the exact P_h'(t)u residual term from batch 56. These page-level interface/readiness checks are recorded in the cross-batch file; the local proofs do not quote absent excerpts or rely on supplier approval.
- The KKT active-set theorem was not used as a premise for the finite box-QP solver. Its soundness is proved directly from the coordinate signs and exact quadratic expansion, so the stale KKT Step 1 record does not enter that item’s direct dependency list.

## Sources

- Full relevant text was inspected for Hannes Meinlschmidt's complete FAU notes (65 pages), Casas–Tröltzsch's complete 12-page paper, Hinze's complete 19-page paper, Peter Clason's complete FEM notes (Chapter 11), and Nocedal–Wright (Section 18.1 and Theorem 18.4). The active A-page set has five sources; the FAU notes provide the full lecture-note treatment, with independent elliptic-control/FEM and optimization treatments. The B page has two active sources. Existing fetch stamps were reused where available.
- Peter Philip's complete 102-page LMU notes were read in the web reader, but both author-hosted endpoints returned HTTP 404 after their initial attempt and five fetch retries. Those URL histories are preserved as documented drops; no item cites them as active support. Tröltzsch's AMS parabolic-control chapter was also unavailable after the initial attempt and five recovery retries. Its search history and complete local alternative proof/dependencies are recorded under `source_resolution`; the parabolic gradient is proved from the actual energy-space suppliers.
- Coverage records 55 harvested results across the two pages. `source-fetch-check --stamp` reports 7/10 fetch-verified, 10/10 resolved, and 3 documented drops; unavailable sources retain their initial attempts, searches, and five-retry histories.

## Readiness and owner reconciliation

- The final Step 1 record audit has dispositions for all 26 assigned items: 24 `ready` and 2 `escalated`, with no missing or stale assigned-item records. No escalation was overwritten. The escalated SQP pair is `alg-fem-control-active-set-sqp-with-finite-residual-status` and `thm-fem-control-active-set-sqp-finite-budget-certificate`.
- A fresh assigned-item hash audit after final edits confirms 24 current `ready` records, 2 escalations, and no missing or stale batch-101 records. The run-wide `step1-decisions check` scans the entire scaffold and reports 1,124 of 2,010 items ready; that broader status includes work outside batch 101 and does not change the assigned-item totals.
- The two escalations depend on stale Step 1 records in the finite-precision SQP supplier chain from batch 85 and batch 1. Exact supplier IDs, hypotheses, inspected proof interfaces, and the supplier-first reconciliation request are in `cross-batch-dependencies.json`. Their claims remain conditional; they do not assert forward accuracy or global optimality from a residual certificate.
- The formal page/task prerequisite list declares seven pages, while the current scheduling input also includes batch 85 because of these exact SQP item edges. The current batch-96 DIF3 page has six relevant inspected supplier bodies without Step 1 records. Both discrepancies and the evidence are recorded for owner reconciliation; neither is represented as supplier acceptance.

## Checks

- Proof layout: 26 assigned items, 60 numbered steps, 0 defects.
- Scoped precheck: 26 files, 21 proof-bearing items checked, 0 failed; 5 definitions/algorithms marked not applicable.
- Rendercheck: 28 files, 0 errors or warnings. Scoped dependency check: 0 errors or warnings. Content policy: 26 items, 0 errors or warnings.
- Strict proof-contract check: 21/21 contracts, 0 errors or warnings. Coverage checklist: 2 pages, 55 harvested results, 0 errors or warnings.
- Cross-batch consistency: 62 expected and 62 recorded direct item edges, with no missing or extra edges; 2 owner-reconciliation issues remain open.
- Scoped batch dependency levels: 26 items, maximum level 8, no assigned mismatch. Whole-run item dependency levels: 2,010 items across 214 pages, maximum level 16, passed.
- No tests were added or run. Step 1 records document author completion and are not independent mathematical approval.
