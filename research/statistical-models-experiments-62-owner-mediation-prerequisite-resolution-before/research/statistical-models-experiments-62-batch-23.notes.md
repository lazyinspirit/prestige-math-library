# Batch 23 notes — Mediation and cross-world assumptions

## Controlling scope and conflict disposition

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner direction, the full
  SME-23 design at `research/plan-statistical-models-experiments-track.md`
  L203, `research/plan-spec.json`, the batch task/dependency inputs, the
  models-03 dossier, and the SME-23 source audit record.
- The current track plan controls the claim bundle. The plan-spec entry has
  the same A/B IDs, category, order, and five required pages, but its scaffold
  `items` arrays are empty because item inventory is assigned to this authoring
  step; there is no mathematical scope conflict. The models-03 dossier's
  proposed item names for the three A-page obligations were retained. Its
  `ex-` prefix for the nonidentification item conflicts with SCHEMA's
  `counterexample` → `cex-` rule, so that item is named
  `cex-natural-effect-cross-world-nonidentification`. Extra A-page items supply the simple NPSEM-IE model
  and its local cross-world lemma, and extra B examples cover both kinds of
  confounding required by the controlling plan.
- The 2026-10-12 audit snapshot describes the MSF-01 definitions as planned and
  SME-19/20 pairs as not yet published. The current carriers differ: the MSF
  identifiability definition and statistical-experiment page are published;
  SME-19 and SME-20 now have draft page/item bodies. Current bodies, not the
  audit snapshot or dossier proposals, were used. The SME-20 recursive-SCM
  definition has no Step-1 readiness record at this handoff; its actual
  definition and stated interfaces were inspected, and no acceptance is
  inferred from this.

## Inventory and item levels

The current item inventory is in `statistical-models-experiments-62-batch-23.pages.json`.
The run-wide item dependency calculation gives these levels; outside-run
suppliers do not raise the in-run level.

| Item | Level | In-run suppliers |
|---|---:|---|
| `def-controlled-and-natural-mediation-effects` | 2 | SME-19 `def-potential-outcomes-and-consistency`, `def-causal-average-treatment-effects`; SME-20 `def-recursive-structural-causal-model-and-dag` |
| `def-simple-markovian-mediation-scm` | 3 | prior row; SME-20 recursive-SCM definition |
| `def-interventionist-mediation-effect` | 4 | prior row; simple mediation SCM |
| `lem-npsem-ie-implies-cross-world-independence-for-mediation` | 4 | simple mediation SCM |
| `def-natural-effect-identification-assumptions` | 5 | effects definition, simple SCM, cross-world lemma, SME-19 positivity definition |
| `thm-natural-effect-identification-under-cross-world-independence` | 6 | effect/model/assumption definitions and cross-world lemma |
| `cex-natural-effect-cross-world-nonidentification` | 6 | effect and assumption definitions |
| `ex-mediator-confounding-invalidates-natural-effects-formula` | 7 | A-page formula theorem and assumption/target definitions |
| `ex-treatment-induced-mediator-outcome-confounding-invalidates-natural-effects-formula` | 7 | A-page formula theorem and assumption/target definitions |

Batch 23 itself remains at `dependency_level: 2` with prerequisite batches 19
and 20, matching the supplied scheduling input. The source-fetch and
run-wide-level checks are recorded below after execution.

## Supplier inspection

- SME-19 `def-potential-outcomes-and-consistency`: read the current definition
  and its ready record. Treatment values are intervention versions, and
  consistency is not exchangeability. `def-causal-average-treatment-effects`
  fixes the target-population ATE convention; `def-positivity-for-discrete-treatment`
  specifies almost-sure positivity on target $L$ support. These conventions
  are used without strengthening the claims.
- SME-20 `def-recursive-structural-causal-model-and-dag`: read the actual
  definition. The four-node model here is a Markovian observed-only submodel;
  its intervention replaces only selected equations and has jointly measurable
  responses. The local proof does not use front-door sufficiency, faithfulness,
  or an observed-only factorization after latent marginalization.
- Published MSF-01 `def-identifiability-of-an-estimand`: read the definition
  and its exact model/estimand dependencies. Identifiability is constancy over
  full-data laws with the same observed sampling law. The 2026-10-12 audit
  record's `planned_not_in_active_items` status is stale; current published
  items are used.
- Published probability interfaces inspected for their actual conventions:
  conditional independence is a bounded conditional-product identity under
  AC; standard-Borel RCDs exist under AC; conditioning kernels factor through
  standard-Borel conditioning variables; RCD versions agree on one
  conditioning-law null set; and kernel integration gives the corresponding
  conditional-expectation version. The theorem uses overlap to transfer that
  version from $Q_a$ to $Q_{a'}$.

## Source reading and harvest

- Hernán–Robins, *Causal Inference: What If*: fetched the current author-hosted
  365-page PDF and inspected the complete focused Chapter 23 sections and
  Technical Points 23.1–23.3, printed pp. 323–331. The local items retain the
  nested estimands, require an explicit cross-world restriction, and define
  interventionist/separable targets separately. Technical Point 23.3's
  front-door/path-specific target is recorded as out of scope in coverage.
- Pearl, *Causal inference in statistics: An overview*: fetched the complete
  author PDF (52 pages per the fetch stamp) and inspected §5.1.1–§5.1.3, printed pp. 132–136 / PDF
  pp. 37–41. The assigned nested-effect passages are §5.1.2–§5.1.3, printed
  pp. 134–136 / PDF pp. 39–41. The local proof independently supplies the
  full standard-Borel conditional-kernel argument and its version/support
  qualifications.
- An initial attempt to fetch a Harvard-hosted What If mirror failed TLS
  certificate verification. I searched the author site and successfully
  fetched the current `miguelhernan.org` full-text PDF instead. This was one
  recovery attempt; no source was dropped or left unresolved. The actual
  fetch-check stamps and hashes are stored in `batch-23.coverage.json`.
- Every harvested result and its disposition is in
  `statistical-models-experiments-62-batch-23.coverage.json`.

## Checks and remaining blockers

- `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-23.coverage.json --stamp`: 2/2 sources fetched as full PDFs and stamped, 0 drops. The What If PDF stamp records 11,315,465 bytes, SHA-256 prefix `a1067af923e9156b`, 365 pages; Pearl records 593,923 bytes, SHA-256 prefix `1a5ecb7cb7c55a9b`, 52 pages. Check mode subsequently passed 2/2.
- `node tools/coverage-checklist.mjs research/statistical-models-experiments-62-batch-23.coverage.json --json`: 1 page, 10 harvested results, 0 errors, 0 warnings. No mediation check exists in `tools/finite-smoke.mjs`; finite-model arithmetic is instead fully enumerated in the three B-page verifications, and every contract records `finite_smoke: []` without inventing a registry result.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-23.proof-contracts.json --strict --json`: all 9 items checked, 0 errors, 0 warnings; 35 exact supplier excerpts and 19 numbered-step mappings.
- Scoped `node tools/tsx-run.mjs tools/precheck.mts --json ...`: 5 proof-bearing items checked, 0 failures. Their `verification.precheck` values are `pass`; the 4 definitions are `n/a`.
- `node tools/proof-layout.mjs` on all 9 changed item files: 19 steps, 0 defects.
- `node tools/rendercheck.mjs --json` on the 9 items and 2 pages: 11 files, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/statistical-models-experiments-62-batch-23-items.json --json`: 9 scoped items, dependency closure 695 items and 163 pages, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/statistical-models-experiments-62-batch-23.pages.json --json`: all 9 scoped items, 0 errors, 0 warnings.
- Scoped inventory comparison confirmed item frontmatter and manifest deps/levels match. Recomputed levels are 2, 3, 4, 4, 5, 6, 6, 7, 7 in manifest order. The required run-wide `node tools/item-dependency-levels.mjs check --run statistical-models-experiments-62` remains blocked by 24 unrelated records: 10 empty inventories (`response-surfaces-and-optimal-design` and its examples; `power-and-sample-size-planning` and its examples; `competing-risks-and-cumulative-incidence` and its examples; `spatial-field-summary-estimators` and its examples; `kriging-as-best-linear-prediction` and its examples), plus stale levels on `thm-standardization-identifies-a-causal-mean` (1 vs 3), `thm-inverse-probability-weighting-identifies-a-causal-mean` (1 vs 2), `ex-standardization-and-ipw-two-strata-calculation` (2 vs 4), `ex-extreme-ipw-weights-under-poor-overlap` (2 vs 3), `ex-weight-truncation-changes-the-ipw-target` (2 vs 3), `ex-logrank-crossing-hazards-zero-score` (2 vs 1), `thm-durbin-levinson-solves-the-prediction-equations` (3 vs 4), `ex-nongaussian-conditional-mean-not-best-affine-predictor` (3 vs 4), `def-random-field-stationarity-covariance-and-variogram` (0 vs 1), `lem-random-field-covariance-kernel-is-positive-semidefinite` (1 vs 2), `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel` (1 vs 2), `thm-order-two-field-variogram-is-conditionally-negative-definite` (1 vs 2), `thm-continuous-stationary-field-covariance-has-bochner-measure` (2 vs 3), and `ex-covariance-kernel-and-intrinsic-variogram-checks` (2 vs 3). No other batch was edited.
- `node tools/step1-decisions.mjs check --run statistical-models-experiments-62`: 460 run items, 246 ready, 214 still lacking a current ready record, 10 empty pages, `closed: false`. All 9 batch-23 records are current and hash-bound with `owner: false`; these records are authoring readiness, not independent approval.

The run status was recomputed from `.autopilot/statistical-models-experiments-62`: it remains running but held at `1-scaffold`, with 31/62 covered, missing batches 5, 6, 7, 9, 10, 11, 13, 15, and 23, and the blocker recorded in `research/statistical-models-experiments-62-step1-blockers.json` requiring owner repair and recertification. There is no in-flight work. This batch has not written a dispatch result or changed engine state.

The remaining cross-pair check is exact: SME-20 `def-recursive-structural-causal-model-and-dag` has a current definition body, which was inspected for recursive equation-replacement interventions, joint measurability, and mutually independent exogenous variables, but it has no Step-1 readiness record. Those interfaces support `def-controlled-and-natural-mediation-effects`, `def-simple-markovian-mediation-scm`, and `def-interventionist-mediation-effect`; every later batch-23 claim depends on those definitions directly or transitively. Cross-batch evidence records body/interface verification only and does not claim acceptance. The three interface hypotheses remain visible in the evidence for owner reconciliation. Draft source bodies and completion records are not independent approval.

