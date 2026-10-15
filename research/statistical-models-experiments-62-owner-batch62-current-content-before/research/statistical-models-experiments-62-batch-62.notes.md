# Statistical models and experiments — batch 62

Run: `statistical-models-experiments-62`  
Pair: `two-stage-conditional-error-adaptation` / `two-stage-conditional-error-adaptation-examples`  
Assigned A/B pages only; all new items remain drafts.

## Controlling plan, inventory, and dependencies

The owner direction makes `research/plan-statistical-models-experiments-track.md` controlling. SME-62 and `research/plan-spec.json` agree on the A/B IDs, category, order, and page prerequisites: the published finite-sample tests/p-values page and conditional-expectation page. The older audit dossier labels the MSF-08 item interfaces “planned, not in active items”; that observation is stale. The current published MSF page contains `def-p-value`, `def-test-size-and-power`, and `thm-p-value-superuniformity`, while the current conditional-expectation page contains the conditional-expectation class, order, taking-out, and tower suppliers. I read the current supplier bodies and used their actual hypotheses and AC conventions.

The design dossier proposes a conditional-error theorem and an example. The A page adds two proof-bearing local results needed to close that route: a countable sample-size-stratification lemma and a random-threshold corollary. The core theorem remains pointwise for one fixed null law. The corollary assumes conditional superuniformity for each fixed threshold and proves the random threshold by dyadic approximation; unconditional p-value validity alone is not treated as sufficient. The example separately exhibits a calibrated sample-size choice and an uncalibrated inverse-normal weight change. Treatment-allocation learning, endpoint and multiarm selection, and multi-stage closed testing remain excluded.

The four-item manifest inventory and computed item levels are:

| Item | Home | In-run dependencies | Level |
|---|---|---:|---:|
| `lem-selected-sample-size-conditionally-superuniform-pvalue` | A | none | 0 |
| `thm-conditional-error-budget-two-stage-adaptation` | A | none | 0 |
| `cor-conditionally-superuniform-stage-two-pvalue` | A | theorem above | 1 |
| `ex-two-stage-conditional-error-sample-size-and-weight-adaptation` | B | selected-size lemma and corollary | 2 |

Batch 62 remains dependency level 0 with no prerequisite batches. The scoped item graph is acyclic. The page inventories are 3 A items and 1 B example, within the page cap.

The current published supplier interfaces were inspected for the 24 external item edges recorded in `research/statistical-models-experiments-62-batch-62.cross-batch-dependencies.json`. AC is declared because the conditional-expectation existence interface uses it. The countable sample-size index is a subset of the positive integers and is summed in increasing order; no further choice principle is used. The selected-size conditional null law remains an assumption of the adaptation, not an empirical consequence of the theorem.

## Source reading and fetch evidence

I read the complete relevant reasoning in two independent treatments:

- Sugiura–Uesaka, *Theoretical Basis of Adaptive Designs for Clinical Trials in Phase II and III*: stage separation and fresh stage-2 data (PDF pp. 1–2), conditional-error integration and the selected-size inverse-normal weight warning (PDF pp. 6–8), and conditional-power/sample-size calculations (PDF pp. 8–9).
- Minas, *Multivariate Global Testing and Adaptive Designs*: complete Chapter 5, printed pp. 66–83 (PDF pp. 87–104), including conditional invariance, conditional superuniformity, the conditional-error argument, sample-size changes, and the chapter’s planning cautions. The thesis’s later chapters were not used.

The locators, supported items, and each used or excluded source result are recorded in `research/statistical-models-experiments-62-batch-62.coverage.json`. `source-fetch-check --stamp` fetched and stamped both full-text PDFs (2/2); the final check verified both stamps. No retrieval failures occurred, so there are no recovery attempts or source-drop decisions to record. Each A-page result cites both treatments. The B example also cites the two treatments for its independent-sample and weight-change context; its probability calculations are local.

## Carriers and scoped checks

The assigned item carriers, A/B pages, item manifest, coverage, proof contracts, cross-batch inputs, and item-scope selection are mutually consistent. The proof contracts include exact supplier excerpts, actual numbered-step claims and inputs, all eight boundary dispositions, and no unsupported finite-smoke registry claim. The example’s finite-state calculation and analytic weight counterexample are proved directly in its Verification.

Final scoped results:

- Item dependency levels: pass; levels 0, 0, 1, 2.
- Manifest dependency arrays: pass, 4 items.
- Proof contracts: pass, 4/4 items, 0 errors and warnings.
- Precheck: pass, 4/4 proof-bearing items.
- Proof layout: pass, 4 items and 10 numbered steps, 0 defects.
- Rendercheck: pass, 6 changed item/page files, 0 errors and warnings.
- Depcheck: pass for the four items and two pages; 0 errors and warnings across the selected prerequisite closures.
- Extcheck and fwdcheck: pass for the assigned items; 0 errors and warnings.
- Content policy: pass for the 4-item batch manifest; 0 errors and warnings.
- Source fetch check: pass, 2/2 verified and resolved.
- Step-1 decisions: all four items are `ready`, with `owner: false`; their records bind the current carriers and examined direct dependencies. These records are authoring readiness, not independent mathematical approval.

An unscoped `item-dependency-levels.mjs check --run` was also attempted. It reported empty inventories in other unassigned batches and three existing level mismatches outside batch 62: `alg-response-probability-weighting` (recorded 0, computed 1), `thm-missing-at-random-weighting-identity` (recorded 1, computed 2), and `def-pattern-mixture-sensitivity-parameter` (recorded 1, computed 2). No outside item, manifest, or engine file was changed; the scoped batch-62 calculation above passes.

## Live run handoff

The latest autopilot status shows the run still at `1-scaffold`, with batch 62 covered and no worker in flight. The owner blocker record identifies artifact-incomplete units 21 and 22; it does not identify this pair. The controller requires owner repair/recertification before transition. I left the blocker record, run state, shared plans, published suppliers, and verdicts unchanged.
