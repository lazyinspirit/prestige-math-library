# Batch 10 — Stratification and allocation

## Plan and inventory

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the complete
  owner-authoring direction, the generated task, the complete SME-10 design
  paragraph, current `plan-spec.json` page entries, and batch 8/9 manifests,
  coverage, contracts, cross-batch inputs, source evidence, and supplier items.
- The plan and `plan-spec.json` agree on both page IDs, category, order, and
  page prerequisites (`finite-populations-and-sampling-designs`,
  `horvitz-thompson-variance-and-srswor`, and
  `probability-spaces-random-variables-and-expectation`). The plan's “None” in
  the SME-10 pair table means no additional MSF pair is imported; it separately
  says SME-08/09 supply the survey contracts. There is no substantive conflict.
  The two `plan-spec.json` `items: []` arrays were construction slots and are
  now populated in the batch manifest.
- Batch dependency input is
  `e30b5fb0846f99901227f66c3b959023af70584f5401bde09898c86d2ddbe743`.
  Batch 10 is level 4 and requires batches 8 and 9. The item inventory and
  logical dependencies were set in `statistical-models-experiments-62-batch-10.pages.json`
  before the item carriers were created. Item levels are 4 for the local
  design definition, 6 for the stratified estimator theorem, 7 for the two
  allocation theorems and proportional/disproportionate example, and 8 for the
  zero-variance and rounding examples. Each level is one plus its greatest
  in-run supplier level.

## Mathematical scope and supplier checks

- The design keeps all population values fixed, partitions the finite
  population into nonempty strata, and draws independent SRSWOR samples with
  integer sizes `1 <= n_h <= N_h`. The product law is explicitly normalized.
  For every noncertainty stratum, `N_h > 1` follows from these integer bounds;
  certainty strata have deterministic total contributions and need no `S_h^2`.
- The total theorem verifies `pi_i = n_h/N_h > 0`, identifies the weighted
  stratified estimator with the Horvitz–Thompson total, applies the SRSWOR
  within-stratum variance, and factors the finite product law to prove that
  cross-stratum covariances vanish. It makes no Gaussian inference claim.
- Both allocation theorems prove global minima of the stated continuous
  relaxations by explicit pairwise-square identities. They require strictly
  positive within-stratum variances on the variable noncertainty strata. They
  do not impose integer, minimum-sample, lower-bound, or capacity constraints.
  The B examples show the zero-variance and nearest-integer boundaries; no
  constrained integer optimum is claimed. No choice axiom is used.
- Read the actual current bodies and proofs of the finite-population design,
  SRSWOR definition and variance, HT unbiasedness and variance, covariance and
  finite-sum results, finite probability-space definitions, and the HT theorem's
  estimator, integrability, indicator, and expectation prerequisites. The
  direct supplier statements and proof steps are recorded in the contracts.
- **Readiness blocker:**
  `def-finite-population-and-sampling-design` and
  `thm-horvitz-thompson-total-is-design-unbiased` currently have Step-1
  `decision: escalated`. Their exact reason is that
  `def-fixed-design-linear-regression-model` remains escalated due an earlier
  empty `scientific-statistical-model-contracts` item claim, while the current
  batch-2 cross-batch record says ready. The actual supplier bodies were
  inspected, including their precise interfaces and the positive-inclusion
  hypothesis; no owner resolution is claimed. This blocks readiness for the
  stratified definition and all dependent batch-10 claims, so all seven final
  decisions are recorded `escalated`. See the batch 10 cross-batch file for
  exact affected items, checked SRSWOR suppliers, and the published probability
  page.
- The native run state remains owner-held at `1-scaffold`; the recorded stage
  blocker names batches 20, 21, and 8 as artifact-incomplete. This authoring
  continued independently and made no changes to `.autopilot/`, verdicts, or
  supplier files.

## Source reading and disposition

- Shalabh, *Sampling Theory*, MTH 417, Chapter 4: complete 26-page chapter
  read. Locators: PDF pp. 1–6 for stratification, weighting, unbiasedness and
  variance; pp. 8–11 for proportional/Neyman/cost allocation; pp. 12–16 for
  variance comparisons and capacity adjustment. Every harvested result is
  mapped to its item in `batch-10.coverage.json`.
- STAT392 *Sample Surveys*, Chapter 8: read full relevant sections §§8.1–8.3,
  §8.8, Example 8.8.1 and notes 8.8.1.2. These give definitions, independent
  sampling, estimator/variance formulas, allocation formulas, a cost example,
  and rounding/capacity cautions. The local proofs do not rely on the source as
  proof.
- Tommy Wright, U.S. Census Bureau report: read §2.1 and relevant parts of
  §§2.2–2.3, including its integer allocation derivation and the example where
  controlled rounding is not the exact discrete optimum. It is recorded as a
  scope warning; the local B example makes only its own stated calculations.
- `node tools/source-fetch-check.mjs --coverage
  research/statistical-models-experiments-62-batch-10.coverage.json --stamp`
  completed successfully: 3/3 source URLs fetch-verified, 3 newly stamped,
  zero drops or retrieval failures. No `source_resolution` drop/escalation was
  needed.

## Scoped checks and decisions

- `node tools/tsx-run.mjs tools/precheck.mts --json <seven item paths>`: pass;
  6 proof-bearing items checked, 0 failures, and the definition is
  not-applicable.
- `node tools/proof-layout.mjs <seven item paths>`: pass, 7 items, 21 steps,
  0 defects.
- `node tools/rendercheck.mjs <two pages and seven items>`: pass, all nine
  changed content files parse and render.
- `node tools/depcheck.mjs --items-file <batch-10 scope> --json`: pass, 7
  selected items, 0 errors or warnings; its prerequisite closure includes 357
  items and 265 pages.
- `node tools/content-policy.mjs research/statistical-models-experiments-62-batch-10.pages.json --json`:
  pass, 7 items, 0 errors or warnings.
- `node tools/source-fetch-check.mjs --coverage
  research/statistical-models-experiments-62-batch-10.coverage.json`: pass,
  3/3 sources fetch-verified.
- `node tools/proof-contract.mjs ... --items <seven IDs> --strict --json`:
  pass, all seven item contracts checked with 0 errors or warnings.
- Scoped recomputation from the run manifests matched every declared local
  item level: `4, 6, 7, 7, 7, 8, 8`; no cycle or level error occurs in the
  batch-10 dependency closure.
- The full-run `item-dependency-levels` check previously reported nine
  unrelated errors: empty inventories for
  `kriging-as-best-linear-prediction` and its examples page, plus stale labels
  on `def-central-composite-design`,
  `def-random-field-stationarity-covariance-and-variogram`,
  `lem-random-field-covariance-kernel-is-positive-semidefinite`,
  `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel`,
  `thm-order-two-field-variogram-is-conditionally-negative-definite`,
  `thm-continuous-stationary-field-covariance-has-bochner-measure`, and
  `ex-covariance-kernel-and-intrinsic-variogram-checks`. A later full-run
  attempt could not parse another in-progress manifest:
  `research/statistical-models-experiments-62-batch-42.pages.json`, line 244.
  This file is outside batch 10 and was not edited.
- The full `batch-dependency-levels check` is blocked before recomputation by
  a renderer-YAML error (`Invalid escape sequence \\m`, line 3, column 66) in
  an unassigned supplier input whose diagnostic excerpt mentions a
  translation-invariant Borel measure on $\\mathbb R^d$. No unrelated supplier
  or shared dependency-level artifact was edited.
- The first `step1-decisions.mjs record` attempt was blocked while the
  concurrent batch-42 manifest was malformed. A final attempt succeeded after
  it became parseable. All seven batch-10 records now say `decision: escalated`
  and `owner: false`, because the exact upstream readiness conflict listed
  above remains unresolved. No owner flag or owner resolution was used.
- `pathcheck` on the draft page selection checked zero published frontier
  pages and warned that the category has no `_category.md`; this pair is not
  authorized to edit that category file.
