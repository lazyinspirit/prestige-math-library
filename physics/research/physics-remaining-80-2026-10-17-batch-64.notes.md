# Batch 64 notes — Constructed independent cell Gibbs states

Run `physics-remaining-80-2026-10-17`, role **beta**, batch **64**. This is the assigned `tgr-et03` A page and `tgr-et03-examples` B page in `thermodynamics-and-general-relativity-mathematics`. Both pages and all six items remain drafts. No publication or independent proof acceptance is claimed.

## Scope, plan, and design reconciliation

Read the workspace/root authoring instructions, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction, `plan-spec.json`, batch-64 task, complete `tgr-et03` plan-design section, the dependency-level inventory, current direct suppliers and their proofs, and the current owner TGR readiness disposition.

- The design reservation names four A claims (`thm-tgr-finite-cell-gibbs-factorization`, `thm-tgr-kms-orbit-time-rescaling`, `thm-tgr-finite-response-redshift`, `prop-tgr-rotating-mode-gibbs-obstruction`) and one B example (`ex-tgr-proper-clock-qubit-response`). All five are present. The proof audit required one additional same-page mathematical supplier, `lem-tgr-countable-l2-completeness`, to establish the completeness of the explicitly defined sequence space before the one-mode unbounded-operator claim uses it. This local result and its complete proof were added to A; page inventory is six items and remains well below the 100-item cap.
- The old design reservation lists `tgr-et01` and `tgr-et02`; current `plan-spec.json`/dispatch page prerequisites are `qsm-dt-response`, `qsm-kms-equilibrium`, and `tgr-et02`. The A page follows the controlling plan/dispatch exactly. ET01 remains in the transitive closure through ET02; its stationary thermal carrier is also an inspected transitive input to orbit normalization. No prerequisite is removed from a claim.
- The plan-spec item inventory was a pre-authoring placeholder and supplies no competing item list. The final item IDs and order follow the binding owner reservation, with the local completeness supplier placed before its consuming proposition.
- Stored batch-level dependencies list batches 41, 47, and 63, while the direct item graph additionally uses batch-36 QSM matrix/KMS/response suppliers and batch-62 Killing thermal normalization. Those additional supplier levels are 0–1, so the stored batch-64 dispatch level remains 4. This schedule discrepancy is recorded here and in `batch-64.dependency-inputs.json`; the shared schedule was not edited.
- Older batch-62/63 notes recorded missing TGR pages and escalations. The current owner disposition supersedes those observations: the required prerequisite pages now exist, and the actual `lem-tgr-killing-thermal-normalization` and `thm-tgr-electrochemical-stationarity` carriers have current owner-authored Step 1 ready records. Their draft proofs remain conditional and are not treated as independently approved.

## Final inventory and levels

The scoped recomputation rule is zero without an in-run supplier, otherwise one plus the largest in-run supplier level. The scoped closure contains 34 items across batches 36, 38, 39, 41, 47, 62, 63, and 64.

| Page | Item | Level | Direct dependencies |
|---|---|---:|---|
| A | `thm-tgr-finite-cell-gibbs-factorization` | 4 | `lem-qsm-matrix-state-calculus`, `lem-qsm-finite-gibbs-kms`, `thm-tgr-electrochemical-stationarity` |
| A | `thm-tgr-kms-orbit-time-rescaling` | 8 | `def-qsm-kms-state`, `lem-tgr-killing-thermal-normalization` |
| A | `thm-tgr-finite-response-redshift` | 5 | `thm-qsm-dt-finite-kubo`, `thm-qsm-dt-spectral-fdt`, `lem-qsm-matrix-exponential-response`, `thm-tgr-finite-cell-gibbs-factorization` |
| A | `lem-tgr-countable-l2-completeness` | 0 | `def-square-summable-family-on-an-arbitrary-index-set`, `thm-complex-plane-is-complete`, `def-hilbert-space` |
| A | `prop-tgr-rotating-mode-gibbs-obstruction` | 1 | `def-square-summable-family-on-an-arbitrary-index-set`, `lem-tgr-countable-l2-completeness`, `thm-cauchy-schwarz-in-an-inner-product-space` |
| B | `ex-tgr-proper-clock-qubit-response` | 6 | `thm-tgr-finite-response-redshift` |

All direct supplier statements and proofs were inspected. Draft status and current Step 1 records are reported at the exact interfaces in `batch-64.dependency-inputs.json`; those records indicate authoring readiness only. Page-level prerequisites remain `qsm-dt-response`, `qsm-kms-equilibrium`, and `tgr-et02` on A, and `tgr-et03` on B.

## Mathematical and physical scope

- The finite-cell theorem assumes finitely many independent finite-dimensional cells, commuting local Hamiltonian/number matrices, and the actual charged TGR-ET02 hypotheses: connected stationary Lorentzian data, positive smooth temperature, global potential symmetry compensator, and whole-future-mass-shell stationarity. It constructs an exact product Gibbs density; it does not assert interacting reduced states are Gibbs.
- The KMS rescaling is a direct composition of the exact physical-time strip functions. Its geometric use is one orbit with constant lapse; it does not define a global automorphism using a spatially varying lapse.
- Finite response claims use neutral observables and controls on the constructed cell. The proof distinguishes physical and grand-generator controls, preserves the QSM fixed-preparation remainder, keeps the Kubo–Mori static derivative separate from the finite-time response, and retains zero-frequency atoms. No relaxation, infinite-time limit, dc coefficient, or generic interacting-state result is inferred.
- The rotating result is a single bosonic mode. At `a=0`, the algebraic zero operator on the dense occupation domain is not self-adjoint; the item correctly defines the rotating generator as its self-adjoint closure, which has full domain there. The partition sum diverges for `a<=0`; no continuum field or spacetime equilibrium is claimed.
- The qubit page is an exact 2×2 model calculation with explicit Pauli matrices, spectral weights, and static Gibbs derivative. It reports no apparatus, observation, or measurement precision. All physics content is a conditional mathematical/model deduction, not an experimental proof or statistical inference.

## Sources and retrieval

The A page has two independent full-text treatments for the Gibbs/KMS convention (Naaijkens and Ruelle) and two for linear response (Kubo and MIT 8.512). Exact locators, supporting items, conventions, and every inline/out-of-scope disposition are in `research/physics-remaining-80-2026-10-17-batch-64-sources/source-reading.md` and `batch-64.coverage.json`. Naaijkens’s Chapter 2 §2.1 Exercise 2.1.2 leaves ℓ² completeness to the reader; the local lemma supplies a full coordinate proof. Kubo/MIT use their stated perturbation/weak-field conventions; the local proof checks the sign against `G−εhB`, restores ħ, and relies on the exact finite-remainder supplier rather than source authority. No retrieval failure, recovery retry, or source drop occurred; the source-fetch check reuses authentic current-run stamps.

## Contracts, dependencies, and final checks

`batch-64.proof-contracts.json` contains contracts for all six proof-bearing items, with mapped numbered steps, exact supplier excerpts, finite checks, and all standard boundary dispositions. `batch-64.cross-batch-dependencies.json` records one verified row per direct out-of-batch item/page edge; `verified` means this scoped interface check only, not independent proof approval. `batch-64.dependency-inputs.json` records the schedule discrepancy, current supplier interfaces, page prerequisites, and recomputed levels.

Final scoped results:

- `author-check.mts physics-remaining-80-2026-10-17 64`: pass. Its precheck, rendercheck, content-policy, and strict proof-contract gates each returned code 0.
- `proof-layout.mjs` on the six explicit item files: 6 items, 25 steps, 0 defects.
- `coverage-checklist.mjs` on batch-64 coverage: 2 pages, 11 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --stamp`: 6/6 source entries fetch-verified, 0 newly stamped, 0 source drops.
- Scoped item dependency-level recomputation: 34-item transitive closure across batches 36, 38, 39, 41, 47, 62, 63, and 64; the six declared levels `4, 8, 5, 0, 1, 6` all match. The direct batch-36/batch-62 schedule discrepancy remains documented above.
- Focused `depcheck`: 6 target items plus both page carriers; 0 errors and 0 warnings, including 1,855 prerequisite item-cycle checks and 523 page-cycle checks.
- All six Step 1 records are `ready`, `owner: false`, and hash-current against their actual item/dependency closures. These are authoring-readiness receipts only.
- The optional aggregate `proof-contract-coverage.mjs` run could not inspect the whole frontier because it reports `Empty or invalid frontier page inventory emg-mp03`, an unrelated out-of-scope page. The current batch’s strict per-item proof-contract validation passes in `author-check`; no shared inventory or unassigned page was changed.

Only the six assigned item carriers, their two page carriers, the batch-64 manifest and batch evidence were changed. Imported mathematical content, unassigned items, shared plans, engine state, and verdicts remain untouched.
