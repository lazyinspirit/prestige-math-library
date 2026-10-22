# Batch 124 — Linearized focusing and quantum entropy inequalities

## Scope and plan comparison

The assigned design at research/plan-thermodynamics-and-general-relativity-frontier-expansion-track.md, section “Linearized focusing and quantum entropy inequalities” (around L311), and current research/plan-spec.json agree on the A/B IDs, order (945/946), titles, category, library, companion and exact page requirements:

- A tgrx-focusing-boundary requires tgrx-regulated-second-law, tgr-phs01, and tgrx-renormalized-stress.
- B tgrx-focusing-boundary-examples requires the A page.

The canonical plan's empty item arrays are unpopulated inventory slots. The detailed prose scaffold supplies exactly two A items and one B remark; these were transcribed into this batch manifest and the two frontmatter-only library pages. No shared plan was edited. research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md is absent.

The detailed design's convention and route are preserved: c=ħ=k_B=1, future affine parameter λ, stationary reference horizon, adopted first-order equation ∂λδθ=−8πG_NδT_kk, final condition δθ(∞)=0, first-order-only omission of quadratic expansion/shear, compact transverse area integration and absolute weighted-stress integrability. The proof stops at the geometric weighted null moment. It does not infer positivity, a modular generator, entropy, QNEC, QFC, or a generalized second law.

The inventory/dependency levels used before authoring were:

| Item | Direct item dependencies | In-run level |
|---|---|---:|
| post-tgrx-linearized-horizon-model | post-tgrx-semiclassical-equation; published math def-tgr-horizon-screen-family | 6 |
| pthm-tgrx-linearized-area-modular-moment | post-tgrx-linearized-horizon-model; published math def-tgr-horizon-screen-family | 7 |
| rem-tgrx-qnec-qfc-status | post-tgrx-linearized-horizon-model | 7 |

The current batch dependency-levels snapshot assigns batch 124 level 3 with requires [121,123]; these remain the only in-run batch suppliers. The new postulate's edge to batch 121 is explicit. The page-level edge to batch 123 is represented separately from item-level logical dependencies. The published mathematical screen definition is an external prerequisite and does not raise the in-run item levels. The published classical area theorem is a nonlogical motivated_by relation only; its NEC, ACω and monotonicity result are not premises of this model.

## Prerequisite inspection and current readiness

The local screen definition def-tgr-horizon-screen-family was read in full, including its exact null-hypersurface, affine-generator, screen quotient, screen metric, deformation form and expansion conventions. Its complete justified_by proof lem-tgr-null-screen-quotient-positive was also read. The local proof derives the cut-area variation directly from this definition, torsion freedom, the commuting flow coordinates, the determinant derivative and compact integration. No extra mathematical supplier or choice axiom is needed.

The published tgr-phs01 page and its post-tgr-smooth-horizon-energy-condition and pthm-tgr-restricted-classical-area interfaces were inspected. The complete conditional area-theorem proof was read, including its separate null-energy and ACω premises. The new linearized model does not use those premises. The page supplier is published and is not a cross-batch edge in this run.

For tgrx-regulated-second-law, the current A-page postulate, complete theorem proof and mathematical prop-tgrx-finite-modular-balance proof were inspected. Current loadStep1Record / step1Decision checks return ready for post-tgrx-regulated-horizon-balance and pthm-tgrx-regulated-gsl (the finite modular proposition is also ready). The page edge is therefore verified for this scoped page-prerequisite check only; no independent proof approval or continuum conclusion is inferred.

For tgrx-renormalized-stress, the exact current post-tgrx-semiclassical-equation carrier was inspected and matched to the new Einstein-Hilbert subcase (α=β=0). The current `loadStep1Record` / `step1Decision` checks now return ready for all four page items: def-tgrx-curvature-squared-variation-tensors, def-tgrx-hadamard-stress-contract, post-tgrx-semiclassical-equation, and pthm-tgrx-state-difference-stress. The page's listed tgrx-hawking-approximation and gr-fx12-covariant-phase-space suppliers were inspected; their owned items also return ready. The current relevant closure checks are:

- post-tgrx-semiclassical-equation: ready.
- def-tgrx-hadamard-stress-contract: ready.
- def-qftx-wavefront-hadamard: ready.
- post-tgrx-free-collapse-scattering: ready.
- def-tgrx-curvature-squared-variation-tensors: ready.
- pthm-tgrx-state-difference-stress and ex-tgrx-quasistatic-is-not-backreaction: ready.

The exact Hadamard stress Definition, free-collapse Postulate, curvature-squared Definition and semiclassical equation were inspected. The free-collapse item is a fixed-background source model, not evidence for a metric solution or an experiment. The α=β=0 specialization removes higher-curvature terms from the local focusing model; no such theory is treated as a focusing theorem supplier.

The model, its area theorem and the status remark were completed conditionally. Their first Step 1 records were recorded as escalated while upstream records appeared unresolved. The current supplier snapshot has since become ready, but each authored item's escalation record is sticky: attempting to record ready returned `Only the owner may resolve this record`. No `--owner` flag was used and no escalation was overwritten. Therefore all three item records still report escalated with now-stale reasons; an owner must refresh these records against the current ready supplier snapshot. This is a record-resolution blocker, not a missing argument or missing carrier. The exact current records are the three physics-non-fluid-129-2026-10-21-r2-step1-*.json files.

## Source reading and disposition

Two independent authoritative treatments were inspected for the A page, including complete lecture notes: Wall, §2.2 equations (14)–(23), and Reall, §§4.6/4.8 equations (4.26)–(4.40). Wall's later modular/entropy bridge was marked out of scope. The local area identity proves its own screen-area derivative, absolute-convergence and Fubini obligations. Reall's full null Raychaudhuri equation includes the twist term; the local model's null-hypersurface generators are hypersurface-orthogonal, and its first-order truncation is explicitly stated.

For B, the QNEC proof, original QFC proposal, higher-curvature counterexample, and 2026-version restricted-QFC/JT study were opened as full texts. QNEC scope is restricted to the cited proof's field theories and stationary null surfaces. QFC remains a conjecture in general; the d≥5 EHGB counterexample and JT results are kept at their cited dimensions and regimes. The item does not define or assume an entropy shape derivative.

The seven source records, exact URLs and locators, each result's included/out-of-scope disposition, reading extent and fetch evidence are in research/physics-non-fluid-129-2026-10-21-r2-batch-124.coverage.json. The fetch stamp command succeeded for all seven PDFs; five were newly stamped and the Wall/Reall stamps were reused from current-run batch evidence. The planned islands review was inspected as generalized-entropy context and marked out-of-scope for QNEC/QFC status because its complete text contains no QNEC or QFC formulation. No retrieval failed, so source_resolution is empty and no drop or alternative-proof record is applicable.

## Cross-batch dependency dispositions

research/physics-non-fluid-129-2026-10-21-r2-batch-124.cross-batch-dependencies.json is a JSON array with one row per owned in-run edge:

- The A-page requirement tgrx-regulated-second-law is verified for the scoped current interface check.
- The A-page requirement tgrx-renormalized-stress is verified against its current page interface and four ready page-item records; the listed page suppliers and their owned items were also inspected and are ready.
- The item edge from post-tgrx-linearized-horizon-model to post-tgrx-semiclassical-equation is verified against the inspected α=β=0 interface and its current ready record.

The published tgr-phs01 page is external context, so it is not an in-run cross-batch row. The same-batch B→A page requirement and same-batch item dependencies are not cross-batch rows. Verified above is a scoped interface/readiness check, not independent proof acceptance.

## Run-level owner hold

The recorded controller status at .physics-autopilot/physics-non-fluid-129-2026-10-21-r2/status.md reports Step 1 held on research/physics-non-fluid-129-2026-10-21-r2-step1-blockers.json and an engine-loop error that recorded scheduling scope differs from run manifests. This is owner-controlled shared run state, outside batch-124 write scope. It was left unchanged; the batch artifacts do not resolve that run-level hold.

## Checks

Final scoped checks after the carrier, contract and readiness-record edits:

- JSON and YAML parse: five batch JSON files and five item/page frontmatter blocks parsed successfully.
- `precheck.mts` on the three items: 3 files, 2 proof-bearing items checked, 0 failed; the remark correctly reports not-applicable.
- `proof-layout.mjs` on the three changed items: 3 items, 5 proof steps, 0 defects.
- `rendercheck.mjs` on the three items and two pages: all 5 files passed, including KaTeX and renderer YAML parsing.
- `content-policy.mjs` on the batch manifest: scope 3, 0 errors, 0 warnings.
- Focused `depcheck.mjs` on the manifest: 3 items and 2 pages checked, 0 errors, 0 warnings; the transitive closure contains 2510 items and 426 pages with no prerequisite cycles.
- Strict `proof-contract.mjs` on the batch contracts: all 3 contracts checked, 0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage` on the batch coverage: all 7 sources fetch-verified and resolved.
- Dependency-level recomputation on the assigned batch and its transitive item suppliers returned batch 124 at level 3 with prerequisites 121 and 123, and item levels 6, 7 and 7 for the three authored items; no errors or cycles.
- `step1-decisions.mjs record` initially recorded all three authored items as escalated with exact dependencies. A later `loadStep1Record` / `step1Decision` inspection found the relevant supplier records current and ready, but attempts to resolve the escalations with non-owner `record --decision ready` calls were rejected with `Only the owner may resolve this record`. No `--owner` was used; the three existing escalations remain and require owner refresh.

The run-wide `proof-contract-coverage` command remains blocked by an unrelated empty inventory for `tgrx-jt-disk-model` in the global run scope. The batch-local strict proof-contract check above passes; the unrelated page inventory was not changed. The recorded run-level owner hold described above also remains outside this batch's scope.
