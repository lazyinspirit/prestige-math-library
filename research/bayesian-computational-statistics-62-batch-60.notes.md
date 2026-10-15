# Batch 60 — authoring and evidence notes

Run `bayesian-computational-statistics-62`; role beta; assigned pair `randomized-quasi-monte-carlo-and-replicates` and its examples page. All new library content remains draft.

## Inventory and dependency levels

The A page contains 20 items and the B page contains 4 examples. The page inventories match `bayesian-computational-statistics-62-batch-60.pages.json`; the proof-contract scope also matches all 24 IDs.

| Item dependency level | Count |
|---:|---:|
| 0 | 2 |
| 1 | 4 |
| 2 | 3 |
| 3 | 3 |
| 4 | 5 |
| 5 | 2 |
| 6 | 2 |
| 7 | 2 |
| 8 | 1 |

Levels were computed from the run manifests and checked against each assigned carrier. Three direct prerequisite edges were made explicit: the digital-shift definition cites the nested-scramble definition, and both gain-bound statements cite the scrambled-net variance identity named in their statements. The digital-shift definition moved from level 2 to 3, its marginal/net lemma from 3 to 4, and the digital-shift example from 4 to 5. All assigned manifest levels and carrier dependencies now agree with the computed run DAG.

## Design and scheduling reconciliation

The BCS-57 design says “Requires: BCS-54, BCS-56”; the controlling `plan-spec.json` row and generated assignment require only the BCS-56 QMC page. The A-page manifest follows that page-level edge. BCS-54 context remains transitive through the BCS-56 page requirement recorded on the actual batch-59 manifest. This is recorded as a plan/design conflict, not a prerequisite waiver.

The dispatch snapshot lists prerequisite batch 59 only. The current recomputed batch graph lists batches 28, 57, and 59 for batch 60, still at dependency level 3. The task snapshot hash is `44c42dcfbf838913d324468437a7d214ccd5cd979b607a8e98a5bdaa22f1dc6a`; the shared graph records `d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610`; recomputation from the current manifests yields `1c9f34beaa8014a6d5e9c90c010ba6715f7710f5792f855d2c902559dbc4109e`. The shared dependency-level file was left untouched for owner reconciliation.

## Cross-batch supplier inspection

The current supplier statements and proofs were inspected for each direct cross-batch item dependency:

- `def-star-discrepancy-and-digital-net` (batch 59): half-open anchored boxes, base-b elementary intervals, and the exact `(t,m,d)`-net count interface.
- `thm-independent-replicate-variance-estimator` (batch 57): `R >= 2`, IID real outputs, finite mean and variance, and the unbiased variance estimate for the replicate mean.
- `cor-independent-replicate-mean-clt` (batch 57): AC, IID outputs, positive finite variance, and the limit as replicate count `R` tends to infinity at fixed target and rule.
- `thm-iid-monte-carlo-sample-variance-consistency` (batch 28): IID real observations with finite second moment and almost-sure consistency of the usual sample variance.

The supplier bodies are present and their hypotheses are repeated at the consumers. Their Step-1 records now fail the current-hash check; the records for `def-star-discrepancy-and-digital-net` and `thm-iid-monte-carlo-sample-variance-consistency` are owner-owned. These records were not changed. The cross-batch dependency artifact now distinguishes verified mathematical interfaces from stale upstream readiness receipts. No supplier body is missing and no source-only result is imported.

## Mathematical scope, repairs, and axioms

The complete BCS-57 scope is retained: single-rule unbiasedness; independent full-set replicate variance; finite-R caveats; digital shifts versus nested scrambling; scrambled-net ANOVA variance and gain; smooth-integrand rate; sharp zero-net bound; and the singular-integrand limitation. The proofs distinguish point count `n` from replicate count `R` and keep computation-randomization uncertainty separate from data-sampling uncertainty.

The smooth ANOVA coefficient bound uses the explicit contrast `L1` estimate and the corrected factor `4^|u|(b-1)^|u|`; the previous smaller constant would not follow from the contrast norm. The bounded Borel Riemann-to-Lebesgue equality hypothesis and the L2/Hilbert Parseval route state Countable Choice where used. The digit construction modifies the null endpoint event before claiming `[0,1)`-valued uniforms. The tensor-product orthogonality proof cites Fubini. The scrambled variance identity gives the conditional child-vector covariance calculation and a finite-sum L2 limit argument. The replicate CLT requires `R >= 2` for the sample variance. The skewed two-point example states AC for its chi-square and Student quantile facts and computes coverage exactly as `98/2500 = 0.0392`.

Choice branches remain separate: Countable Choice enters through the specified L2/Parseval and bounded Borel integration suppliers; AC enters through the independent-replicate CLT and the Student/chi-square quantile calculation. No general RQMC CLT or finite-R coverage guarantee is claimed.

## Sources and retrieval history

The coverage file records four fetched, stamped full-text treatments and 40 harvested results with per-result dispositions:

- Owen, *Monte Carlo Book: The Quasi-Monte Carlo Parts* (2019), full 152-page PDF; Chapter 17 §§17.1, 17.3, 17.5–17.6 read. URL: <https://artowen.su.domains/mc/qmcstuff.pdf>.
- Owen, “Monte Carlo Variance of Scrambled Net Quadrature” (1997), full 27-page paper; §§2, 4, 6–7 and the complete Theorem 3 proof read. URL: <https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf>.
- Owen, “Local Antithetic Sampling with Scrambled Nets” (2008 correction), full paper; all of §5.1, including Lemmas 2–3 and Theorem 3, read. URL: <https://artowen.su.domains/reports/localanti.pdf>.
- L’Ecuyer and Lemieux, “Recent Advances in Randomized Quasi-Monte Carlo Methods” (2002), full 56-page PDF; §§1, 5.2–5.3, and 6.2 inspected in the full-text rendering. The PDF was fetched and stamped; its embedded font mapping prevents useful local text extraction, and no source-only proof is imported. URL: <https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf>.

The Project Euclid route for Owen 1997b returned anti-bot HTML; the complete corrected Owen 2008 proof was read and used as the alternative proof route. The 2018 L’Ecuyer ResearchGate route returned HTTP 403 on the initial attempt and five retries. Its alternate author-hosted 24-page PDF was found and inspected, but it is not cited as an item source. The failed ResearchGate URL alone is recorded as a certain dropped fetch route in `source_resolution`, with nine local alternative arguments and dependency lists; no mathematical result or coverage was dropped. `source-fetch-check` reports 4/5 URLs fetch-verified and 5/5 resolved, with one documented URL-only drop.

## Scoped checks

- `content-policy.mjs`: 24 items, 0 errors, 0 warnings.
- Scoped `depcheck.mjs`: 0 errors, 0 warnings; both assigned pages checked.
- `precheck.mts`: 24 files, 19 proof-bearing items checked, 0 failures.
- `proof-layout.mjs`: 24 items, 63 proof steps, 0 defects.
- `rendercheck.mjs`: 26 changed item/page files, 0 errors, 0 warnings.
- Strict `proof-contract.mjs`: all 24 contracts checked, 0 errors, 0 warnings; contracts now match final proof labels, inputs, citations, and step uses.
- `coverage-checklist.mjs`: 1 A page, 40 harvested results, 0 errors; one low-yield warning says 10/40 results are scaffolded and asks Alpha to confirm the inline dispositions.
- `source-fetch-check.mjs`: 4/5 fetch-verified, 5/5 resolved; the dropped ResearchGate route passes `sourceResolutionErrors`.
- A custom assigned-scope check confirms all 24 carrier dependencies and levels match the manifest and current run DAG, and both page inventories match the manifest.

The run-wide item-level check currently reports five unrelated stale labels: `ex-cylinder-gaussian-process-is-not-banach-valued` (1 vs 2), `thm-gaussian-process-posterior-contraction` (10 vs 9), `ex-log-gaussian-uniform-density-posterior` (11 vs 10), `ex-binary-regression-logistic-intercept-gp` (11 vs 10), and `ex-fixed-design-gaussian-constant-process-and-unknown-scale` (11 vs 10). The run-wide batch dependency check reports the shared graph stale. Neither shared state nor other batches’ carriers were edited.

Run-wide proof-contract coverage is an owner-level merged-contract check; `research/bayesian-computational-statistics-62-proof-contracts.json` does not exist yet. Batch-local contract strict validation and scope equality pass.

## Step-1 and live-run handoff

All 24 assigned items have current `ready` Step-1 records with their direct dependency IDs. These are authoring-readiness records, not independent approval; the four stale upstream receipts above remain for owner reconciliation.

The recomputed autopilot status is `running`, stage `1-scaffold`, with 55/62 batches covered and batches 15, 16, 36, 40, 45, 60, and 62 still missing. It reports no in-flight dispatch. The global Step-1 blocker is the malformed YAML in the unassigned item “Uniform endpoint: ordinary bootstrap failure and the m-out-of-n remedy” (line 3, column 8), followed by the owner-repair/recertification hold in `research/bayesian-computational-statistics-62-step1-blockers.json`. Batch 60’s native stage artifact remains incomplete under that run-wide hold. No owner state, shared graph, verdict, or unassigned carrier was changed.
