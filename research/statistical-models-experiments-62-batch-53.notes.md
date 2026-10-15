# Batch 53 authoring notes

## Plan and design reconciliation

- The pair identity, category, order, A/B pages, and current plan-spec page prerequisites agree with the assignment. The current plan-spec requirements are retained: valid-p-values-bonferroni-and-simultaneous-coverage, finite-sample-tests-neyman-pearson-and-valid-p-values, and probability-spaces-random-variables-and-expectation.
- The track design states the Holm claim as a step-down procedure with arbitrary dependence and the earliest-true-null proof. The authored theorem follows that route and explicitly includes the no-true-null case, tie handling, and the fixed-family convention.
- The current plan's B scope is a hand calculation comparing Holm with Bonferroni. The earlier models-06 dossier/audit proposal instead asks for exact inflation from repeated unadjusted independent global-null tests. Following the controlling plan, this batch compares Holm with one-step Bonferroni and does not add the unadjusted-testing claim.
- The design names M06-P01/P02 interfaces; the plan-spec expresses them as the SME-52 page prerequisite plus the published finite-sample and probability pages. The SME-52 carriers appeared during authoring, so their actual item bodies and Step-1 records were checked before final readiness. The required page list remains unchanged.

## Actual supplier checks

- The actual SME-52 definition def-null-valid-p-value-and-fwer-fdr permits empty null sets vacuously, defines the finite family, validity, true-null set, and FWER/FDR, and requires the family to be fixed before observing data. Its current Step-1 record is ready. The Holm algorithm and theorem cite this interface.
- The actual SME-52 theorem thm-bonferroni-familywise-error-control has a complete proof: it bounds each true-null event by α/m and applies finite subadditivity for arbitrary dependence. Its current Step-1 record is ready. The Holm proof applies it to the fixed true-null subfamily after establishing the Holm event inclusion.
- thm-p-value-superuniformity is a published supplier in the SME-52 Bonferroni proof's dependency closure. The older audit record labels this interface planned_not_in_active_items, which is stale against the current published item and page bodies.
- lem-probability-measure-basic-identities is published on the required probability page and proves finite subadditivity for arbitrary probability measures. It is an actual supplier in the SME-52 Bonferroni proof's dependency closure.
- The audit's listed thm-finite-union-bound supplier has the exact assumption “A finite probability space” in its Given clause. That is too narrow for arbitrary statistical experiments; it is not used. The SME-52 Bonferroni proof instead uses the general probability-page lemma.
- The finite-sample test page and probability page are published prerequisites and were checked earlier. SME-52 now exists as an A/B pair with the declared page ID; its actual relevant item bodies and full proofs were inspected, not inferred from dossier proposals. Its Step-1 records are author readiness evidence, not independent approval.

## Sources read and dispositions

Two independent full-text treatments were read for the Holm argument, with an additional full-text measure-theory source for the local measurability lemma:

- Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 5 §§5.1–5.2, printed pp. 79–83 / PDF pp. 99–103. The text defines familywise/strong familywise error, distinguishes it from simultaneous intervals, gives the Bonferroni and Holm rules, and works a family-selection example. The batch coverage file records each disposition.
- Jelle J. Goeman and Aldo Solari, “The sequential rejection principle of familywise error control,” Theorem 1 and its complete proof (PDF pp. 4–5), plus the Holm specialization in Section 3 (PDF p. 9). The general monotonicity/single-step argument and the Holm critical values were inspected; the local theorem proves the ordinary finite Holm result directly.
- John K. Hunter, Measure Theory lecture notes, Chapter 1 §1.5 and Chapter 3 §§3.1–3.2 (PDF pp. 4–5, 36–39). The sigma-algebra closures, measurable-map preimage criterion, threshold-set test, and Proposition 3.6 arithmetic-measurability proof were inspected for the local rejection-event measurability lemma.

The plan's inclusive comparison p_(j) <= alpha/(m-j+1) is used. Oehlert's summary table uses a strict comparison in one line, while the accompanying Holm exposition uses the inclusive rule; the local statement follows the plan and the inclusive source passage. No Axiom of Choice or independence assumption is used. The B calculation is a deterministic illustration and does not assert p-value validity.

## Item dependencies and levels

- alg-holm-step-down-procedure: depends on SME-52's def-null-valid-p-value-and-fwer-fdr at level 0; item level 1.
- lem-holm-rejection-events-are-measurable: depends on the level-1 algorithm and published p-value/statistic/measurability suppliers; item level 2. Its local proof uses the Borel target-space convention for p-value statistics explicitly.
- thm-holm-stepdown-strong-fwer: depends on P01, P02's thm-bonferroni-familywise-error-control, the level-1 algorithm, and the level-2 measurability lemma; item level 3.
- ex-holm-step-down-versus-bonferroni: depends on the level-1 algorithm and level-3 theorem; item level 4.

The run's batch scheduling input remains level 1 with prerequisite batch 52. No dependency cycle or Axiom of Choice branch is present. No registered finite-smoke check applies to this exact rational example; the arithmetic is shown in the Verification steps and no check name was invented.

## Scoped checks and handoff

- Source fetch stamp: Oehlert, Goeman–Solari, and Hunter were full-text fetched and stamped 3/3. Check mode passed, 3/3 verified.
- Coverage checklist: 0 errors and 1 advisory low-yield warning; 3/15 harvested results are scaffolded as standalone items. The remaining source results are treated inline, already published, or out of scope with item-specific reasons in the coverage file; the warning is retained for Alpha's Step-3 review rather than padded with unnecessary items.
- Proof-contract strict check passed for 4/4 items with 0 errors/warnings. Precheck passed for the three proof-bearing items; the algorithm definition is not applicable. Final proof-layout check passed for all 4 changed items with 7 steps and 0 defects.
- Rendercheck passed for 6 carriers (4 items and 2 pages). Focused depcheck passed with 0 errors/warnings; content policy passed for all 4 inventory items; manifest-deps passed for all 4 entries.
- Scoped item levels computed from batch 52 plus 53 passed for all 9 items: P01 0, P02 simultaneous coverage 0, P02 Bonferroni FWER 1, batch-52 examples 1 and 2, then batch-53 algorithm 1, measurability lemma 2, theorem 3, and example 4. The recomputed batch schedule row is batch 53 level 1 requiring batch 52.
- The run-wide item-level check remains blocked outside this batch: 64 page inventories are empty, and eight items have declared→computed level mismatches: thm-exact-gaussian-linear-regression-inference (3→4), thm-gaussian-regression-confidence-and-prediction-intervals (4→5), ex-gaussian-regression-mean-and-prediction-intervals (5→6), thm-standardization-identifies-a-causal-mean (1→3), thm-inverse-probability-weighting-identifies-a-causal-mean (1→2), ex-standardization-and-ipw-two-strata-calculation (2→4), ex-extreme-ipw-weights-under-poor-overlap (2→3), and ex-weight-truncation-changes-the-ipw-target (2→3). No foreign manifest was edited.
- Batch 53's cross-batch input records the SME-52 page prerequisite and the three current item edges to def-null-valid-p-value-and-fwer-fdr and thm-bonferroni-familywise-error-control. All four rows were checked against current supplier bodies/proofs and are marked verified as authoring evidence, not independent approval. The required unified-ledger refresh is blocked by `research/statistical-models-experiments-62-batch-21.cross-batch-dependencies.json: invalid review or consumer ownership`; that foreign input was left untouched.
- `batch-dependency-levels.mjs check --run statistical-models-experiments-62` reports the shared run-level schedule artifact is stale. The recomputed row for batch 53 is still level 1 with prerequisite batch 52; the shared artifact was not rewritten. Native run status still reports Step 1 held for owner repair/recertification in units 21 and 22, with no workers in flight.

All four assigned items now have hash-bound Step-1 `ready` records; a scoped `step1Decision` check confirms each remains closed against its declared dependencies. These are author-readiness records, not independent approval. Native status reports 14/62 covered and still lists batch 53 in the artifact-missing set; the run remains held for owner repair/recertification in units 21 and 22, with no workers in flight. No published content, foreign item, shared plan, shared run schedule artifact, `.autopilot` state, or verdict was edited.
