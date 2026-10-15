# Batch 37 Step 3a adjudication

Run: `statistical-models-experiments-62`. Group: `batch-37`. Dispatch: `3a-batch-37`, covers batch 37 only. The scope's original group `m` is preserved. Reviewed in the generated order: definition, moment lemma, quantile lemma, normal-limit theorem, heteroscedastic/censoring example, five-percent example. Each item's complete risk review was recorded before proceeding higher. Exactly three routed obligations are decided; no page obligation or reader finding is owed.

## Decisions and closed defects

| Obligation | Verdict | Closed defect |
|---|---|---|
| `refuter:37:2` | `confirmed_nonfatal` | `sme62-b37-3a-integrability-before-affine-transport` |
| `refuter:37:1` | `confirmed_nonfatal` | `sme62-b37-3a-median-symmetry-fact-scope` |
| `touched:37:ex-known-blank-normal-detection-and-quantification-limits` | `accepted_repair` | `sme62-b37-3a-unsupplied-quantile-decimal` |

Every completed repair has `repair_confidence: 1`. Three closed rows were appended through the serialized defect-ledger tool, owned at `caught_at_stage: "3a-adjudicate"`; each decision references exactly one row. These are mathematical justification gaps, not mechanical failures. The decisions file contains the exact obligation IDs, original observation digests, evidence and ledger references. No verdict was inferred solely from a reader/refuter report.

## Independent mathematical review

`def-critical-detection-and-quantification-levels`: read the complete Definition and all nine supplier interfaces. The identity response and threshold indicator are Borel measurable; the indicator expectation and complement identities give the declared null/alternative errors. Exact calibration can fail for discrete laws. Detection is explicitly the least positive concentration attaining equality, when it exists; quantification is the least positive qualifying concentration, when it exists. CV requires positive finite mean and finite variance. No monotonicity, existence or uniqueness is silently imposed on arbitrary experiments; zero concentration is the blank. No decision owed; complete risk review recorded.

`lem-normal-location-scale-mean-and-variance`: read all three proof steps, all nine supplier interfaces, and the full Gaussian-even-moment and expectation-change-of-variables proofs. Unit second moment makes Z integrable by Cauchy–Schwarz. The compact odd integral vanishes under reflection, and dominated convergence applies with |Z| as an integrable majorant. Original step 3.1 used signed expectation transport before explicitly checking integrability, and variance before square-integrability. The refuter finding is confirmed as nonfatal. Repaired step 3.1 puts W=m+sigma Z and bounds W² by 2m²+2sigma²Z². The nonnegative pushforward clause transfers E[X²]=E[W²]<infinity; Cauchy–Schwarz with 1 then establishes finite first moments before signed transport and variance. Arbitrary m and sigma=0 are covered. F4 now states the supplier's nonnegative versus integrable clauses accurately. Contract derivation, citation uses and erroneous sigma=0 boundary locators were synchronized. Statement and deps are unchanged; no consumer interface repair is necessary. Complete risk review recorded.

`lem-standard-normal-cdf-quantiles-and-symmetry`: read all four steps and fifteen supplier interfaces. The positive continuous density gives a positive lower bound on a subinterval; its global upper bound gives continuity. Reflection yields tail symmetry. Singleton nullity uses the one-dimensional zero-width box theorem under countable choice inherited from AC. Finite normal measure permits continuity above and below for the canonical half-lines; their empty/full limits bracket any q in (0,1). IVT gives existence and strict increase gives uniqueness. Reflection includes q=1/2 and hence the median is zero. The finite quantile claim excludes q=0,1. No extra selection principle is used. No decision owed; complete risk review recorded.

`thm-known-normal-blank-detection-and-quantification-limits`: read all three steps and fourteen supplier interfaces, including the repaired moment lemma. The four possible indicator preimages are Borel, so the measurable rejection-function supplier applies. Blank size is exactly alpha. Positive scale permits normal-tail inversion; quantile symmetry gives the unique detection concentration, and both quantiles are positive because alpha,beta<1/2. It is therefore the least positive solution. For c>0 the moments give CV=sigma_0/c; the qualifying concentrations form a closed ray with positive endpoint sigma_0/k_Q. Blank c=0 has no claimed CV; zero scale and error-target endpoints are excluded. AC is inherited. No decision owed; complete risk review recorded.

`ex-detection-limit-assumptions-and-left-censoring`: read all four verification steps and seven supplier interfaces. Original F1 limited symmetry to 0<beta<1/2 but step 1.1 applied it at 1/2. The exact cited quantile Statement and Proof 3.1 include every q in (0,1). Expanded F1 to that scope, confirming the nonfatal finding without changing the Example. Positive sigma(c)=sigma_0(1+rho c) permits tail inversion. The equation c(1-a rho sigma_0)=L_C+a sigma_0 has positive right side: a positive denominator gives its unique positive solution; a zero or negative denominator gives none at nonnegative concentration. CV=sigma_0/c+rho sigma_0 strictly exceeds its asymptotic floor at every finite c, proving both directions of the quantification criterion including equality failure. Checked rho=0, blank c=0, and both denominator boundaries. The recorded half-line category contributes its CDF probability to likelihood. No density-at-threshold substitution is valid for that report. Proof provenance and its manifest mirror were changed to ai-altered; dependencies and Example unchanged. Complete risk review recorded.

`ex-known-blank-normal-detection-and-quantification-limits`: independently read the exact original and reader-post carriers and four supplier interfaces. Substituting alpha=beta=1/20 yields z_0.95 sigma_0 and 2z_0.95 sigma_0; tolerance 1/10 gives 10 sigma_0. The original step 2.1 inserted z_0.95 approximately 1.64485 without a calculation or source supplying that precision. This is a nonfatal justification gap, not an incorrect numerical value. Accept the reader's removal of that unsupported calculation while preserving exact formulas and the independently sourced rounded table row. The current source remains byte-identical to reader-post; only the manifest summary was synchronized to it. No consumer statement depends on this example. Complete risk review recorded.

## Historical comparison

The exact original five-percent carrier is `research/statistical-models-experiments-62-owner-gate-boundary-measurement-before/items/ex-known-blank-normal-detection-and-quantification-limits.md`. Its raw SHA256 is `774724d6010a79643f8d3dd9161dbd89966ff706595456c91ad4a466c4acc3b5`, matching `step3-hash-37-pre.json`. The current carrier raw SHA256 is `21d528d86064a5e423c43ed9fddd49bd518fa8cb875bfabd61e157a8b43667f9`, matching `step3-hash-37-post.json`. Both complete carriers were read; historical delta is known. The observed refuter digests remain in the decisions; their original evidence describes the pre-repair content, not the corrected bytes. Neither edited item had a judge record to invalidate. No judge/audit stamp was added.

## Sources and prerequisite scope

Read actual current dependency statements and relevant qualifications, not only contract quotes. The mathematical argument uses local normal-law, density/moment, measure, expectation, substitution, IVT, measurability and testing suppliers. Extra full supplier-proof inspection is documented above. The owning cross-batch dependency artifact is empty, but this did not exempt checking the actual published interfaces.

Checked [NIST SP958, printed pp.164–166, official HTML](https://nvlpubs.nist.gov/nistpubs/sp958-lide/html/164-166.html), lines 8–19, especially Table I. It states the rounded well-known-blank row 1.64, 3.29 and 10 under normal, constant-scale and five-percent error assumptions. Its k_Q=10 is a multiplier, reciprocal to the batch's CV tolerance k_Q=0.10.

Checked the [Eurachem 2025 guide](https://www.eurachem.org/images/stories/Guides/pdf/MV_guide_3rd_ed_V1_EN.pdf), §5.3.1 printed p.31 (PDF p.38), §5.3.2 printed pp.31–33, §5.3.4 printed p.34, and Annex B printed p.64. These distinguish the three conventions, account for blank correction/averaging, relate multiplier 10 to ten-percent relative standard deviation, and explain approximate normal-tail calibration. They document conventions; the exact formulas and adopted heteroscedastic law are justified locally. No claim that the sources establish a universal censoring or variance-addition model is made.

## Maintenance, checks and handoff

Only the two refuter-target items were edited locally. The owning proof contracts gained six specific complete risk reviews and the repaired moment derivation/citation/boundary changes. The owning manifest mirrors the corrected proof provenance and reader-post numerical Example. Stable IDs, scope, dependencies and page inventories are retained. The task-authorized frontier ledger records owned consumer dispositions. No published item was changed; no defective published supplier, required outside consumer repair, withdrawal, escalation or substantial unmet prerequisite was identified.

Successful focused checks:

- Initial `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-37.proof-contracts.json`: six HIGH/CRITICAL items identified; zero tool errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-normal-location-scale-mean-and-variance.md items/ex-detection-limit-assumptions-and-left-censoring.md`: reflowed both.
- `node tools/tsx-run.mjs tools/precheck.mts` on those two paths: 2 checked, 0 failing.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-37.proof-contracts.json --strict`: 7/7 items, 0 errors, 0 warnings.
- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-37.proof-contracts.json --require-reviewed`: 0 errors, all six required reviews complete.
- Scoped `node tools/rendercheck.mjs` on the two edited items and the touched five-percent example: 3 files, all math and YAML parse.
- Final batched `node tools/proof-layout.mjs items/lem-normal-location-scale-mean-and-variance.md items/ex-detection-limit-assumptions-and-left-censoring.md`: 2 items, 7 steps, 0 defects, run after final item edits and reflow.
- Local exact-obligation/ledger consistency check: exactly 3/3 owed obligations, unique decisions, one closed row per decision, each at 3a-adjudicate. No hashes stamped.

The live status command reports this run running at Step 3; latest inspected Git commit is `79fa523`. Historical RESUME files were not used. These local checks are not a gate battery, mathematical certification or judge result. Blockers: none. Worker work is complete; engine owns decision stamping and subsequent gates/transitions.
