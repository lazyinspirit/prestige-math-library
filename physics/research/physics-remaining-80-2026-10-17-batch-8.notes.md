# Batch 8 authoring notes — EMG-CP03

Run: `physics-remaining-80-2026-10-17`  
Role: beta  
Owned pair: `emg-cp03` / `emg-cp03-examples` only  
Pages: A order 451, B order 452  
Status: authoring complete; all seven readiness decisions are escalated on unresolved draft suppliers.

## Scope and authored items

The A page contains `def-emg-strict-charged-barotropic-system`, `lem-emg-charged-fluid-current-conservation`, `lem-emg-charged-fluid-positive-symmetric-reduction`, `thm-emg-local-charged-barotropic-development`, and `prop-emg-compact-charge-compatibility`. The B page contains `ex-emg-linear-eos-variables` and `cex-emg-uniform-one-sign-torus-charge`. All seven remain drafts; the page capacity is 5/100 A items and 2/100 B items.

The theorem preserves the planned strict interior EOS scope, uses SI tensor signs and the stated (K) convention, and has separate periodic (H^s) and smooth geometric branches. It excludes dust, shocks, vacuum/free boundaries, finite conductivity, global existence, and empirical validation. The local proof initializes the harmonic metric jet explicitly, extends the CP02 field-strength principal block by the algebraic current as a lower-order term, verifies Maxwell residual transport from the sourced Gauss constraints, derives pre-Einstein total-stress conservation conditionally on the exact CP01 identity, and recovers Einstein’s equations by the subsidiary wave energy estimate.

## Plan and inventory conflicts

The controlling `plan-spec.json` entry for `emg-cp03` requires only `emg-cp02`; the old reservation in the proposed inventory lists both CP01 and CP02. The page therefore declares CP02 as its direct page prerequisite. CP01 remains a transitive item dependency through the strict-system definition and the Maxwell-stress lemma. This follows the current plan, as required by the owner direction.

The reserved theorem dependency list included CP02’s source-free high-Sobolev and smooth-uniqueness results as if those alone established a charged-fluid development. They do not supply the charged source, its matter principal block, current conservation, or either subsidiary propagation argument. The authored theorem instead uses the inspected CP02 field-strength principal interface with an explicit algebraic-source check, the local CP03 current and fluid lemmas, the published periodic symmetric-hyperbolic existence supplier, and the published generic smooth Einstein-matter development theorem. Its CP01/CP02 uses remain explicitly conditional because their current carriers are drafts.

The current batch-6 and batch-7 manifests now both list their planned A-page items. These manifest updates supersede the earlier empty-inventory inspection. Their CP01/CP02 carriers were reread at the current exact draft interfaces; batch 8 did not edit sibling items or pages.

## Cross-batch inputs and unresolved proof status

- `def-emg-electrovacuum-cauchy-system` is listed in the current batch-6 manifest and exists at `items/def-emg-electrovacuum-cauchy-system.md`, status `draft`. Its actual Definition fixes the source-free equations and Einstein-Maxwell SI stress normalization; the strict CP03 definition adds the sourced extension with its declared sign. The carrier has no accepted readiness receipt, so it is not treated as proved.
- `lem-emg-maxwell-stress-conservation` is listed in the current batch-6 manifest and exists at `items/lem-emg-maxwell-stress-conservation.md`, status `draft`. Its current Statement has the required sign `nabla^a T_EM_ab = -F_bc j^c` under `nabla_a F^ab = -mu_0 j^b`; the displayed product-rule/cyclic-identity argument was inspected. Its proof/readiness has not been accepted.
- `lem-emg-fieldstrength-positive-symmetric-reduction` is now listed in the current batch-7 manifest and exists at `items/lem-emg-fieldstrength-positive-symmetric-reduction.md`, status `draft` with precheck pending. Its latest Statement fixes the lapse, spatial metric, spatial divergence/curl, cross-product and covector decomposition conventions, and supplies the source-free block `P(zeta)=zeta(n)I_6+S(zeta_perp)` with positive time matrix `alpha^-1 I_6`. CP03 separately checks that `j=cNZ u` adds only an algebraic source. The CP02 item’s own [L1] still says its CP01 definition is not listed in batch 6, although it is listed there now; this is a stale administrative statement in that external draft. The earlier Statement typo noted during the first inspection has since been corrected. The CP02 proof/readiness remains unaccepted, so CP03 use remains conditional.

The exact evidence for each cross-batch consumer/supplier pair is in `physics-remaining-80-2026-10-17-batch-8.cross-batch-dependencies.json`. All seven Step 1 records are `escalated`, never `ready`, because the CP01 and CP02 proof inputs remain drafts. The theorem's pre-existing escalation reason was recorded before the latest CP02 manifest and Statement update and still describes its prior empty placement and typo; Step 1 forbids overwriting that escalation. These notes and the cross-batch evidence record the current carrier state for owner reconciliation. No sibling supplier was authored or modified.

## Dependency levels

The batch dependency-level file places batch 8 at level 2 after batch 7. Recomputed item levels using the current batch-6 inventory, the listed CP02 field-strength item at batch 7, and the assigned batch-8 inventory passed with no discrepancies (20 graph items checked). Recomputed CP03 item levels are:

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-emg-strict-charged-barotropic-system` | CP01 electrovacuum definition (level 0) | 1 |
| `lem-emg-charged-fluid-current-conservation` | strict definition (1), CP01 stress lemma (1) | 2 |
| `lem-emg-charged-fluid-positive-symmetric-reduction` | strict definition (1) | 2 |
| `thm-emg-local-charged-barotropic-development` | current and fluid-symmetric lemmas (2), strict definition, CP01/CP02 drafts (1) | 3 |
| `prop-emg-compact-charge-compatibility` | strict definition (1) | 2 |
| `ex-emg-linear-eos-variables` | charged-fluid symmetric lemma (2), strict definition (1) | 3 |
| `cex-emg-uniform-one-sign-torus-charge` | compact-charge proposition (2), strict definition (1) | 3 |

Thus suppliers authored within this pair precede consumers. The external draft suppliers were not treated as a wait barrier; each available conditional consuming argument and both B items were completed.

## Sources and retrieval record

Two independent full texts were inspected for the A page: Choquet-Bruhat’s complete 300-page book PDF, with Chapter IX, printed pp. 208–240, and Pugliese–Valiente Kroon’s complete 26-page paper, especially §§3–4.6 and Appendix A. The source-harvest rows and per-item support/dispositions are in `physics-remaining-80-2026-10-17-batch-8.coverage.json`.

The original OUP chapter URL returned HTTP 403 on the initial attempt and all five recovery retries (six attempts total). The same book and full chapter were located and inspected as a complete PDF at `https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76`; only the blocked URL route is recorded as dropped. The source text is retained through the PDF record. The OUP route’s complete search/retry history remains in `source_resolution`; no mathematical source coverage was dropped. The active book-PDF and Pugliese records retain successful fetch stamps. `source-resolution.mjs` was inspected; the documented drop has no harvest items of its own because all covered items are assigned to the retained full-book PDF record.

## Contracts and pending checks

The seven-item proof contract is `physics-remaining-80-2026-10-17-batch-8.proof-contracts.json`. Its citations quote exact supplier sections; its step worksheets map each numbered step to the printed facts and earlier steps; and it includes all eight standard boundary dispositions. The scoped layout, contract, retrieval, coverage, and dependency-level command results are recorded below.

### Scoped check results

- `proof-contract.mjs ... --strict`: pass, 7/7 assigned items, 0 errors and 0 warnings.
- `proof-layout.mjs` on the seven explicitly changed item files: pass, 7 items and 20 numbered steps, 0 defects.
- Scoped `content-policy.mjs` on the batch-8 manifest: pass, 7 items, 0 errors and 0 warnings.
- `manifest-deps.mjs` on batch 8: pass, 7 items, all explicit dependency arrays present.
- `manifest-integrity.mjs` for the run: pass, all 160 planned pages present, no missing or added pages.
- `physics-check.mjs --plan ... --pages-file ...` for the two assigned page IDs: pass, 0 errors. The plan has empty item arrays for these pages, so this is page metadata/import verification only; the seven current item files were separately covered by `content-policy.mjs`.
- Scoped `dependencyLevels` graph using current batch-6 items, CP02 field-strength item, and batch-8 items: pass, 20 items, 0 errors; levels are 1/2/2/3/2/3/3 for the seven assigned items.
- `source-fetch-check` in check mode: pass, 2/3 active sources fetch-verified and all 3/3 resolved, with one documented OUP URL-route drop. The successful stamps were recorded earlier with `--stamp` and are present.
- `coverage-checklist ... --require-destination`: pass with 0 errors and 1 warning: 1/13 harvested results scaffolded; remaining headings have recorded inline or out-of-scope dispositions, for Alpha confirmation.
- `proof-contract-coverage --run physics-remaining-80-2026-10-17 --contracts ...`: blocked before contract comparison by unrelated empty frontier page inventory `emg-pcp01`. The assigned contract itself passes the strict item validator above; the run-wide inventory is outside batch 8 scope.
- Step 1: all seven assigned decisions are `escalated`; current recorded dependency arrays match the items. The theorem’s pre-existing escalation explanation predates the latest CP02 status update and remains untouched as required.
