# Batch 9 notes — Marginal likelihoods, Bayes factors, and empirical Bayes

## Plan and manifest reconciliation

The owner direction makes the track design controlling. BCS-06 at L81 requires BCS-02 and BCS-05, but the generated batch task and current `plan-spec.json` list only BCS-05. The batch-9 A-page manifest now records both `posterior-propriety-and-dominated-bayes-formula` (BCS-02) and `hierarchical-bayesian-models-and-partial-pooling` (BCS-05); the cross-batch ledger records the inspected BCS-02 page. The B page still requires its A companion. The shared plan, `plan-spec.json`, scheduler inputs, and engine state were not changed. Plan-spec item arrays are empty; the batch-9 manifest contains the authored inventory below.

The design scope is preserved: proper-prior evidence and finite-model odds; the point-null atom and improper-prior scale warnings; Type-II maximization only when attained, with a measurable selection for a data-indexed rule; the full-Bayes contrast; no generic empirical-Bayes risk, consistency, dominance, or coverage guarantee; and the balanced one-way expected-mean-square formulas, raw moment estimate, and negative-estimate warning. The two page inventories contain four A items and five examples, below the 100-item cap.

## Supplier inspection

Inspected the current BCS-02 A page, both supplier item bodies, complete proposition proof, and their ready Step-1 records. `def-posterior-evidence-normalizer-and-fiberwise-update` distinguishes the fixed-fiber integral for a supplied measure from proper prior-predictive evidence and allows sigma-finite improper measures only as normalizers. `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence` proves the finite-positive criterion used before any posterior normalization. These are the exact evidence interfaces used by the local definition, finite-model theorem, Type-II definition, and improper-prior example.

Inspected the current BCS-05 A page and the full bodies/proofs of `def-hierarchical-bayesian-model` and `thm-hierarchical-posterior-normalization-on-positive-finite-evidence`; both have ready Step-1 records. The definition supplies finite groups, standard-Borel parameter spaces, a proper hyperprior, a jointly measurable conditional group kernel, conditional independence, and specified likelihood densities. The theorem applies only when the joint evidence is finite and positive and states its exceptional-fiber convention. Also inspected the ready `lem-normal-location-scale-density` body and proof; its strictly positive density supports the normal examples. All other direct prerequisites are published items whose statements and relevant hypotheses were checked. The cross-batch ledger records the inspected batch-5 and batch-8 supplier interfaces and exact uses.

## Inventory and dependency levels

Levels were computed from actual in-run item suppliers, with suppliers authored before consumers:

| Level | Items |
|---|---|
| 0 | `thm-balanced-one-way-random-effects-expected-mean-squares` |
| 1 | `ex-negative-balanced-anova-moment-estimate` |
| 2 | `def-marginal-likelihood-and-bayes-factor` |
| 3 | `thm-finite-model-posterior-odds-from-marginal-evidence`; `def-type-ii-marginal-likelihood-and-empirical-bayes-posterior`; `ex-improper-flat-prior-arbitrary-evidence-scale`; `ex-diffuse-normal-prior-changes-bayes-factor` |
| 4 | `ex-point-null-needs-a-model-atom`; `ex-hyperparameter-uncertainty-can-induce-group-dependence` |

The assigned batch level remains 4. Actual item edges reach batches 5 and 8, so the current cross-batch supplier set is `[5, 8]`; batch 8 is the maximal prerequisite level. A focused recomputation checked all nine stored item levels against their in-run suppliers with no mismatches. The BCS-02 and BCS-05 page requirements in the controlling design also correspond to batches 5 and 8.

## Sources and mathematical coverage

The coverage ledger records four full-text sources, 22 harvested results, supported items, and the disposition of each result. `source-fetch-check --stamp` inspected the fetched sources and verified all four; there were no retrieval failures or drops, so no `source_resolution` entry was needed.

| Source | Inspected locator and supported scope |
|---|---|
| [Bayesian Data Analysis, 3rd ed.](https://sites.stat.columbia.edu/gelman/book/BDA3.pdf) | Author-hosted full PDF; Ch. 5 §§5.1, 5.3–5.4, printed pp. 102–118, for hyperparameter integration, ANOVA moments, and plug-in limitations; Ch. 7 §7.4, pp. 182–184, for proper evidence, model odds, point hypotheses, sensitivity, and improper-prior comparisons. |
| [Bayes Rules!, Ch. 8](https://www.bayesrulesbook.com/chapter-8.html) | Full official chapter, §§8.2.1–8.2.2, lines 92–188, for prior/posterior odds, Bayes factors, and exact point-null mass under continuous priors. The interval-buffer alternative was marked out of scope. |
| [Bayes Rules!, Ch. 16](https://www.bayesrulesbook.com/chapter-16.html) | Full official chapter, §16.3.1 and §§16.4.1–16.4.3, for shared hyperparameters and posterior inference retaining uncertainty across groups. |
| [NIST/SEMATECH e-Handbook §7.4.4](https://itl.nist.gov/div898/handbook/prc/section4/prc44.htm) | Full official page, lines 9–47, for the random-effects ANOVA table, expected mean squares, moment equations, and negative estimates. REML was marked out of scope. |

The ANOVA proof states block and within-block independence explicitly. Normal-law use inherits the declared Axiom-of-Choice branch; the expectation and variance algebra adds no choice. The improper-prior example states the AC-to-Countable-Choice route needed for the Lebesgue measure facts. The finite-model calculations and finite hierarchy use no choice. The local claims do not infer a generic empirical-Bayes guarantee or a universal Bayes-factor decision cutoff.

## Scoped checks and run-level blockers

* Final `precheck`: seven proof-bearing items pass; the two definitions are `not-applicable`. Their frontmatter records `verification.precheck` accordingly. `proof-layout`: 9 items, 18 steps, 0 defects. Strict proof contracts: 9/9, 0 errors or warnings.
* `rendercheck`: 11 assigned item/page files, 0 errors or warnings. `content-policy`: 9 items, 0 errors or warnings. Focused `depcheck`: 0 errors or warnings; `fwdcheck`: no open references or errors; `extcheck`: no unproved items or errors; `citecheck`: 0 warnings. The manifest-to-carrier dependency and page-placement comparison found no mismatches.
* `coverage-checklist`: 1 page, 22 harvested results, 0 errors or warnings. `source-fetch-check --stamp`: 4/4 verified, 0 newly stamped, 0 documented drops.
* The full-run `item-dependency-levels.mjs check` still reports 19 errors outside batch 9: eight empty scaffolds (`misspecified-posterior-consistency-examples`, `gaussian-process-posterior-contraction` and its examples page, `mcmc-clt-and-monte-carlo-standard-error-examples`, `mcmc-diagnostics-and-finite-run-limitations` and its examples page, and `identifiability-and-approximation-bias-in-computational-inference` and its examples page); plus stale labels on `ex-cylinder-gaussian-process-is-not-banach-valued` (1 vs 2), `def-abc-augmented-tolerance-target` (1 vs 2), `lem-abc-augmented-target-has-tolerance-posterior-marginal` (2 vs 3), `alg-abc-metropolis-hastings` (2 vs 3), `alg-abc-sequential-smc` (2 vs 3), `thm-abc-metropolis-hastings-invariance` (3 vs 4), `thm-abc-sequential-smc-rn-weight-update` (3 vs 4), `ex-abc-vanishing-acceptance` (3 vs 4), `ex-abc-positive-tolerance-stationary-law` (4 vs 5), `ex-abc-sequential-tolerance-schedule-and-rn-weights` (4 vs 5), and `ex-abc-smc-finite-particle-collapse` (4 vs 5). No batch-9 item is named by that check.
* `batch-dependency-levels.mjs check` reports stale run-wide metadata and requests recomputation. The dispatched scheduling input hash was `0da7f8405e2f8ed8a94b5a81ee0fbc28acd9c7eb96f18dee73cce74545c03c6c`; the current saved dependency-level file reports input hash `d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610` and batch 9 at level 4 with `requires: [5, 8]`. The owner must refresh and recertify the shared dependency metadata; this batch did not edit it.
* All nine item Step-1 records are `ready` and their dependency hashes validate. These report completed authoring, placement, prerequisites, and contracts only; they are not independent mathematical approval.

The latest disk-recomputed autopilot status still reports the run as `running` at `1-scaffold`, 40/62 dispatches covered, and no active workers; dispatch 9 remains listed among missing dispatches. The recorded stage blockers are the malformed YAML title in batch 1 and the existing owner repair/recertification blocker in `research/bayesian-computational-statistics-62-step1-blockers.json`. This batch did not edit `.autopilot/` or owner verdicts.

No published page, shared plan, verdict, or engine state was edited.
