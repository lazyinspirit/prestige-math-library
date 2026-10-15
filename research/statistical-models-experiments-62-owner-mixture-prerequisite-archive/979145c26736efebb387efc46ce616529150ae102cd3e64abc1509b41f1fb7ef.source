# Batch 60 authoring notes — statistical-models-experiments-62

## Scope and plan reconciliation

This batch authors the A/B pair `subgaussian-mixture-confidence-sequences` (A, order 2036) and `subgaussian-mixture-confidence-sequences-examples` (B, order 2037), following the complete SME-60 design at `research/plan-statistical-models-experiments-track.md` § “Sub-Gaussian mixture confidence sequences” (lines 321–322) and the controlling owner direction. The scope is a discrete-time, scalar conditional-sub-Gaussian mean process, a two-sided Gaussian mixture, closed confidence intervals, and worked positive and negative examples. The Gaussian precision parameter is positive and is not claimed to be optimal. No continuous-time extension is asserted.

The corresponding `research/plan-spec.json` records agree on page IDs, order, titles, companion relation, and required pages. Their empty item arrays are the pre-authoring scaffold, not a conflicting mathematical scope. No substantive plan/design conflict was found. The page-level requirement on batch 58 is consistent with the design and is now verified against its authored manifest and supplier proofs (details below).

The scheduling input read for this dispatch is `be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d`; batch 60 is dependency level 1 and requires batch 58. The local item DAG was recomputed from the completed manifest. Its levels are:

| Level | Items |
|---|---|
| 0 | `def-conditional-subgaussian-increments`; `def-gaussian-mixture-confidence-sequence-boundary`; `lem-gaussian-exponential-mixture-integral` |
| 1 | `lem-conditional-subgaussian-exponential-process`; `lem-gaussian-mixture-boundary-crossing-equivalence`; `cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence` |
| 2 | `thm-gaussian-mixture-test-supermartingale` |
| 3 | `thm-subgaussian-mixture-confidence-sequence` |
| 4 | `ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence` |

No cycle was found. The final level calculation used the current batch-58 and batch-60 manifests together, so `thm-discrete-ville-inequality` is included as an in-run supplier. The main theorem remains at level 3 because its level-2 mixture-test-supermartingale dependency is deeper. Published out-of-run dependencies do not raise item levels. The run-wide batch dependency input was left untouched for the owner to recompute after integrating authored batch manifests.

## Mathematical and supplier checks

The conditional-MGF definition requires the sub-Gaussian inequality at every time and each fixed real parameter; it does not assume a common exceptional null set for uncountably many parameters. The exponential-process proof establishes integrability and the one-step supermartingale inequality. The mixture proof checks product measurability, uses Tonelli under the stated sigma-finite product measures, and evaluates the normal-prior integral. The boundary calculation uses the closed-interval convention. The negative example distinguishes marginal from conditional sub-Gaussianity by an explicit repeated-Rademacher construction; the positive Gaussian example states the event-factorization condition it uses.

Supplier statements and relevant proofs were inspected for the batch-58 Ville theorem and its finite-horizon supplier; the published mixture-of-null-supermartingales and Ville results; the confidence-sequence and test-supermartingale definitions; conditional expectation, taking-out-what-is-known, and monotone convergence; the normal law and density normalization; Tonelli and expectation change of variables; substitution, logarithm, and square-root facts; and the independent-variable and conditional-Hoeffding arguments used by the examples. Exact supplier links, excerpts, and proof-step inputs are recorded in the item carriers and proof contracts. The earlier audit's “planned-not-in-items” note for published MSF-34 interfaces is stale for the current library: the relevant published carriers now exist and their bodies were inspected.

**Cross-batch verification and readiness-record history:** At the initial batch-60 dependency check, batch 58's manifest had empty item arrays, so both affected batch-60 items were recorded escalated. The current manifest now contains `lem-finite-horizon-test-supermartingale-crossing-bound` at level 0 and `thm-discrete-ville-inequality` at level 1. I read both complete draft carriers and the batch-58 A-page text. The finite-horizon proof uses bounded optional sampling at the first crossing truncated at (N), nonnegativity, and indicator expectation. The Ville proof takes the increasing finite-horizon limit, then uses strictly lower thresholds increasing to (1/\alpha) to justify the supremum event without assuming attainment. Its theorem has the required AC, null-law, nonnegative adapted integrable supermartingale, and (E_PM_0\le1) hypotheses, and states (P(\sup_{t\ge0}M_t\ge1/\alpha)\le\alpha). Both batch-58 Step-1 records are `ready` and hash-current. The batch-60 main theorem now cites `thm-discrete-ville-inequality`; manifest and proof contract are synchronized. All five page prerequisites are recorded `verified` in `research/statistical-models-experiments-62-batch-60.cross-batch-dependencies.json`.

The two batch-60 escalation records remain untouched, as required by the no-overwrite rule. Their original blocker has since changed: the supplier is now present and verified. The theorem's existing record still has the earlier dependency list that names the published Ville item, so the owner must reconcile its dependency evidence and the two escalation decisions before treating the theorem and positive example as ready. These records are authoring evidence only, not independent approval.

## Source record

The coverage record documents three treatments: Howard et al., *Time-uniform, nonparametric, nonasymptotic confidence sequences* (arXiv:1810.08240), complete 48-page PDF fetched, with the relevant pp. 1–6, 9–10, and 27–28 read; Howard et al., *Time-uniform Chernoff bounds via nonnegative supermartingales* (arXiv:1808.03204), complete 63-page PDF fetched, with pp. 9–18 and 45 read; and Ramdas, *Martingales 1: Concentration Inequalities — Conjugate Mixtures*, the complete five-page CMU lecture note read. URLs, locators, supported item IDs, and each harvested result's disposition are in `research/statistical-models-experiments-62-batch-60.coverage.json`.

`node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-60.coverage.json --stamp` verified 3/3 sources; zero new stamps were needed. There were no retrieval failures, recovery retries, or dropped sources, so no `source_resolution` entry was warranted.

## Scoped checks and readiness

Final scoped results after the last carrier edits:

- `precheck`: 7 proof-bearing items checked, 0 failing.
- `proof-contract --strict`: all 9 items checked, 0 errors and 0 warnings.
- `manifest-deps`: 9 items, 0 missing or normalized dependency arrays.
- Local dependency-level recomputation: 13 items across the current batch-58 and batch-60 manifests, no errors or cycles; batch-60 levels are as listed above.
- `proof-layout`: 9 items, 18 steps, 0 defects.
- `rendercheck`: 9 item carriers and both pages parsed; math, delimiters, and YAML passed.
- `content-policy`: 9 items in scope, 0 errors and 0 warnings.
- `depcheck`: focused scope passed with 0 errors and 0 warnings; dependency closure contained 996 items.
- `fwdcheck`: selected item/page checks and prerequisite graph checks passed over 988 items and 280 pages; the existing forward markers were reported as inherited.
- `extcheck`: 9 items, 0 recorded-not-proved items, 0 external-reference errors.
- Source fetch check: 3/3 verified.

Seven batch-60 items remain hash-current `ready`: both definitions, `lem-gaussian-exponential-mixture-integral`, `lem-conditional-subgaussian-exponential-process`, `lem-gaussian-mixture-boundary-crossing-equivalence`, `thm-gaussian-mixture-test-supermartingale`, and `cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence`. `thm-subgaussian-mixture-confidence-sequence` and `ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence` remain escalated in their existing records pending owner reconciliation, despite the now-verified batch-58 supplier. No published content, shared plan, engine state, or verdict was changed. The run-wide batch dependency-level input remains untouched for owner recomputation after manifest integration.

Read-only autopilot status after authoring still reports `1-scaffold` held: `research/statistical-models-experiments-62-step1-blockers.json` identifies units 21 and 54 as artifact-incomplete and no longer running, and status still lists batch 60's artifact as missing even though this requested pages manifest exists. The owner must reconcile that run-level artifact status and recompute shared dependency inputs; no engine state was changed here.
