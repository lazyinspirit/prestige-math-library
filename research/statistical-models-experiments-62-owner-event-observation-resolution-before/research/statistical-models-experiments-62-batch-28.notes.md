# Batch 28 — Event observation, censoring, truncation

Run statistical-models-experiments-62; pair event-time-censoring-and-truncation (A, order 1972) / event-time-censoring-and-truncation-examples (B, order 1973), category statistical-models-and-experiments.

## Plan reconciliation and source scope

- Read the run owner direction, assigned beta task and dependency-order task, the complete SME-28 design section, the current plan-spec row, the batch manifest and run dependency-level artifact.
- The task, controlling plan and canonical plan agree on both page IDs, title, category, order, companion and six required pages. No plan conflict was found.
- The SME-28 design additionally requires the SME-01 scientific observation/model contract, MSF-01/04 likelihood interfaces, and the Lebesgue–Stieltjes correspondence under Countable Choice. These were carried into the authored assumptions and item dependencies.
- The active run status was running; Step 1 scaffold was current and no worker was in flight. No engine transition or gate was attempted.

## Item inventory and dependency levels

The manifest inventory was completed before the carriers. Item levels were computed from in-run item suppliers, including batch 1; dependencies outside the run do not raise a level.

| Item | Home | Direct in-run suppliers | Level |
|---|---|---|---:|
| def-event-time-observation-schemes | A | none | 0 |
| thm-likelihood-contributions-under-censoring-and-delayed-entry | A | def-event-time-observation-schemes, def-scientific-statistical-model-contract (batch 1) | 1 |
| cex-informative-censoring-does-not-identify-event-law | B | def-event-time-observation-schemes | 1 |
| ex-event-time-observation-likelihoods-and-delayed-entry | B | def-event-time-observation-schemes, thm-likelihood-contributions-under-censoring-and-delayed-entry | 2 |

Levels are computed over in-run item suppliers, including the batch-1 contract item; out-of-run item dependencies do not raise a level. The scoped recalculation reports levels 0, 1, 1, 2 for the four batch-28 items and level 0 for the batch-1 contract supplier, with no batch-28 cycle or mismatch. The dispatch scheduling artifact records batch 28 at dependency level 1 with prerequisite batch 1 and input SHA-256 be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d.

## Supplier checks and axiom uses

- def-statistical-experiment and def-parametric-statistical-model specify a sample space, sampling-law family, and parameter-to-law map. def-dominated-statistical-experiment requires one fixed sigma-finite dominating measure. def-likelihood-density selects density representatives under AC and limits pointwise statements to the corresponding almost-everywhere versions; the theorem keeps the event and censor parameter spaces separate.
- def-measure-kernel-and-probability-kernel, def-conditional-law-given-a-random-element, thm-existence-of-regular-conditional-distributions-for-standard-borel-targets, and lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable support the specified conditional laws. The existence/factorization route uses AC.
- def-conditional-independence-given-a-sigma-algebra defines the bounded conditional-product identity and declares AC. The proof obtains a simultaneous conditional product law on rational rectangles and extends it by the pi-lambda theorem.
- thm-lebesgue-stieltjes-correspondence-with-distribution-functions gives F(b)-F(a)=mu((a,b]); thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures gives the singleton jump formula. Their exact CC use is retained separately from the AC uses for conditional kernels and likelihood versions.
- Product measure and Tonelli suppliers are used only for the two observation branches. No source result is used as a substitute for the local conditional-density and selection proofs.

## Source reading, harvest, and resolution

research/statistical-models-experiments-62-batch-28.coverage.json records 23 harvested source results with per-result dispositions and locators.

- Qiqing Yu, Survival Analysis lecture notes: complete relevant reading of PDF pp. 1–11, including complete/incomplete observation definitions, right censoring, current status, interval censoring, survival and exponential laws.
- Lu Tian, Stanford STAT331 Unit 2: the full 17-page handout was read. The harvest records fixed and random censoring likelihoods, parameter-distinct factorization, exponential likelihood support, and the separate out-of-scope inference material.
- Jeff Lin, NTPU Chapter 2 lecture slides: the relevant likelihood section, PDF pp. 92–110 of the 111-page deck, was read. Slides 95, 100–104 and 106–110 support truncation denominators, observation-law assumptions, and independent random-censor density factorization.
- Eric Slud's complete two-page handout was read, and a direct current fetch matched SHA-256 e6ab49e43dfed19be45e5032f71d0cf0e89180d354f0759a9b667f75647fdc16. Its inherited coverage history already contained six native source-fetch attempts that failed the short-document check before a full-document receipt was present. After the receipt was added, source-fetch-check --stamp reported the allowance exhausted. The row is therefore marked source_resolution.status=dropped from the active stamped source set, with all six attempts preserved, searches recorded, and the complete local alternative proof for the delayed-entry denominator in theorem step 5.1. The source is not described as dead; the NTPU treatment and the local proof preserve mathematical coverage.

source-fetch-check --stamp verifies 3/4 active source rows; 4/4 rows are resolved, with one documented drop. The scoped coverage checklist reports 1 A page, 23 harvested results, 0 errors and 0 warnings.

## Cross-batch prerequisite checked after initial escalation

- At initial item recording, batch 1 had not supplied the def-scientific-statistical-model-contract body. The theorem and dependent example were therefore escalated with that exact unresolved interface; those escalation records are retained.
- The actual batch-1 manifest, item body, A-page summary, and ready Step 1 record later appeared. The complete definition and summary were inspected. Its nine-field contract covers the observation space/record, scientific/sampling/assignment/analysis units, indices/time, quantity status, target/estimand, observation mechanism, support/law, conditioning convention, and adequacy assumptions. It explicitly says the contract proves no empirical or physical applicability or identifiability.
- The theorem now directly depends on def-scientific-statistical-model-contract, cites its actual definition as [F10], and states that the analysis unit is one subject, the observed record is $(Z,U,\delta)$, $T,C$ are full-data quantities, likelihood is conditional on $Z$, and no estimand or empirical-adequacy conclusion is claimed. The theorem's scope matches the supplier interface.
- The page and item edges are marked verified in the batch cross-batch input with the inspected interface and its limits recorded. This is a dependency check, not approval.
- The existing theorem and example Step 1 records remain escalated: the instruction forbids overwriting an escalation, and their original reason and hash predate the supplier arrival and the theorem edit. The owner must resolve/re-record them. No item is represented as ready on the strength of the supplier alone.

## Scoped checks and run-wide blockers

| Check | Result |
|---|---|
| manifest-deps on batch 28 | 4 items; 0 missing dependency arrays; 0 errors |
| content-policy on batch 28 | 4 scoped items; 0 errors; 0 warnings |
| rendercheck on four items and two pages | 6 files; 0 errors; 0 warnings |
| precheck on four items | 3 proof-bearing items checked; 0 failures; definition not applicable |
| proof-layout on explicitly changed items | 4 items; 24 steps; 0 defects |
| strict batch proof contracts | 4/4 items checked; 0 errors; 0 warnings |
| scoped item dependency calculation | 4 items; declared levels 0, 1, 1, 2 match computed levels; 0 errors |
| source fetch check | 3 active sources stamped; 1 documented drop; 4/4 resolved |

The latest whole-run item-level calculation reports 60 empty inventories outside batch 28 and eight stale labels. The stale item labels are: thm-exact-gaussian-linear-regression-inference (3 declared, 4 computed), thm-gaussian-regression-confidence-and-prediction-intervals (4, 5), ex-gaussian-regression-mean-and-prediction-intervals (5, 6), thm-standardization-identifies-a-causal-mean (1, 3), thm-inverse-probability-weighting-identifies-a-causal-mean (1, 2), ex-standardization-and-ipw-two-strata-calculation (2, 4), ex-extreme-ipw-weights-under-poor-overlap (2, 3), and ex-weight-truncation-changes-the-ipw-target (2, 3). The 60 empty page inventories are named by the full run calculation; none belongs to batch 28. All four batch-28 labels still match their computed levels. The run inventory is changing as other pairs progress.

The current batch-level dependency check stops before recomputation with “Stale batch dependency levels for statistical-models-experiments-62; recompute before authoring.” The derived run artifact is owner-managed and was left unchanged. A prior check in this work session reached a malformed-YAML error in batch 60, but the current check stops earlier on the stale artifact, so that earlier parse finding is not asserted as the current blocker.

The latest Step 1 snapshot reports 233 run items, 113 ready, and an open run frontier. The scheme definition and informative-censoring counterexample remain ready. The likelihood theorem and dependent example remain escalated with their original pre-supplier reasons; those records were not overwritten. Other run work remains with its assigned batches.

All authored carriers remain draft. No published item, shared plan, engine state, verdict, gate, or commit was changed.
