# Step 3a reader report — batch 31

Run: `statistical-models-experiments-62`  
Role: `reader-31`  
Batch: `31`

## Opened inventory

### Assigned pages

- `library/statistical-models-and-experiments/independent-subject-terminal-influence-limits.md`
- `library/statistical-models-and-experiments/independent-subject-terminal-influence-limits-examples.md`

### Assigned items and dependency items reviewed

The assigned items' direct suppliers were opened before the assigned item bodies. Relevant transitive supplier statements and proofs were also inspected, but I did not topologically read every dependency-of-a-dependency. In particular, `def-standard-normal-and-normal-laws` was encountered through `lem-characteristic-function-of-a-normal-law` and opened after that lemma.

- Published suppliers: `def-axiom-of-choice`, `def-independent-families-of-event-classes`, `def-identically-distributed-and-iid-random-variables`, `def-covariance-matrix-of-a-random-vector`, `def-op-and-little-op-stochastic-bounds`, `def-asymptotically-linear-estimator-and-influence-function`, `def-characteristic-function-of-a-real-random-variable`, `def-multivariate-normal-law`, `def-moments-variance-and-covariance`, and the transitive scalar-normal definition `def-standard-normal-and-normal-laws`.
- Published result suppliers: `thm-multivariate-iid-central-limit-theorem`, `thm-vector-slutsky`, `thm-continuous-mapping-theorem`, `thm-levy-continuity-theorem-forward-direction`, `lem-characteristic-functions-under-affine-maps-and-independent-sums`, `lem-characteristic-function-of-a-normal-law`, `cor-characteristic-function-criterion-for-weak-convergence`, `thm-cramer-wold-device`, and `thm-vector-stochastic-order-calculus`.
- Assigned A items: `thm-iid-terminal-influence-limit` and `thm-independent-groups-terminal-influence-limit`.
- Assigned B items: `ex-bernoulli-terminal-influence-limit`, `ex-independent-groups-weighted-mean-limit`, and `ex-uncontrolled-risk-set-denominator`.

### Page prerequisites and task evidence

- Read the page summaries for `counting-process-compensators-and-integrals`, `asymptotic-convergence-consistency-and-identification`, `central-limit-theorems`, `modes-of-convergence-for-random-variables`, `pathwise-differentiability-influence-functions-and-efficient-scores`, and `robust-covariance-and-high-dimensional-stability`.
- Read `research/statistical-models-experiments-62-batch-31.pages.json`, `research/statistical-models-experiments-62-batch-31.notes.md`, `research/statistical-models-experiments-62-batch-31.proof-contracts.json`, `research/statistical-models-experiments-62-batch-31.coverage.json`, and `research/statistical-models-experiments-62-batch-31.cross-batch-dependencies.json` as evidence, not verdicts. Confirmed the run is active using the Autopilot status command; the working tree already contains unrelated changes.

### External source checks

- Sourav Chatterjee, *Stats 310A (Math 230A) Lecture Notes*, [source PDF](https://souravchatterjee.su.domains/stat310a-lecture-notes.pdf): read PDF pp. 104–107 (printed pp. 100–103). PDF p. 104 / printed p. 100 contains Proposition 8.5.3 (Slutsky on Polish spaces); PDF p. 107 / printed p. 103 contains Proposition 8.8.1 (Cramér–Wold) and Theorem 8.9.1 with its multivariate IID CLT proof. The bibliography locator currently in both assigned A items, PDF pp. 104–107 / printed pp. 100–103, is accurate.
- Rick Durrett, *Probability: Theory and Examples*, 5th ed., [source PDF](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf): read §3.10, Theorems 3.10.5–3.10.7, printed pp. 200–201. These give the characteristic-function convergence theorem, Cramér–Wold device, and multivariate CLT cited by the items.
- Peter Bartlett, *Theoretical Statistics*, Stat 210B Lecture 16, [source PDF](https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf): read PDF pp. 9–12. These contain the delta-method argument and its continuous-mapping/Slutsky conclusion cited by the items.

## Independent review

- `thm-iid-terminal-influence-limit`: the measurable image of the IID sample is IID; its centered second moment gives covariance `Σ`; the multivariate IID CLT applies with the stated AC and finite-second-moment hypotheses; the assumed remainder is `o_P(1)` after scaling and vector Slutsky gives the claimed limit. The theorem does not assert the estimator expansion.
- `thm-independent-groups-terminal-influence-limit`: with fixed finite `G`, each `n_g` tends to infinity. The within-group CLTs, deterministic scaling limits, independence of the group sums, characteristic-function product, the one-dimensional criterion, and Cramér–Wold give the Gaussian sum with covariance `Σ_g ρ_g^{-1}`. Vector Slutsky applies to the separately assumed remainder on the same sample space. The zero-variance and singular-covariance cases are included.
- `ex-bernoulli-terminal-influence-limit`: the centered Bernoulli contribution gives an exact zero-remainder expansion and variance `p(1-p)`, including both endpoints.
- `ex-independent-groups-weighted-mean-limit`: the two contributions are `ρ(X-p_1)` and `(1-ρ)(X-p_2)`; their exact expansion and covariance reduce to `ρp_1(1-p_1)+(1-ρ)p_2(1-p_2)`, including degenerate Bernoulli parameters.
- `ex-uncontrolled-risk-set-denominator`: `P(K_n=0)=1/2` for every `n≥2`; on that event the root-`n` error is `-√n`, so the sequence is not bounded in probability and cannot satisfy the centered finite-variance expansion required by the IID theorem.
- The current Chatterjee citations do not have the page-number defect suggested in the batch notes. The note's stated PDF pp. 105–108 / printed pp. 101–104 is not the locator in the current items and does not identify the location of Proposition 8.5.3. No citation edit was made.

## Repairs and unresolved defects

- No item or page edits were made. No confirmed defect remains in the assigned items or assigned page prose.
- No uneditable defect was confirmed, so there are no findings to route.
- No formatting, reflow, or precheck command was run because no item was changed. No judge or verification stamp was added or modified.

## Page verdicts

- `independent-subject-terminal-influence-limits`: pass. Its summary accurately describes the separately assumed expansions, fixed finite grouping conditions, covariance formula, and absence of a process-level conclusion.
- `independent-subject-terminal-influence-limits-examples`: pass. Its summary accurately describes both exact Bernoulli expansions and the empty-risk-set non-tightness example.
- The six prerequisite page summaries were inspected for context; no defect relevant to an assigned claim was found.

## Blocker and coverage limit

No blocker was found in the assigned item-claim closure. I did not topologically inspect every transitive dependency-of-a-dependency, as noted above. The draft prerequisite page `counting-process-compensators-and-integrals` was opened, but its 14 listed item bodies were not reviewed: no assigned theorem, example, or page-summary claim uses a counting-process compensator or integral. This report therefore makes no judgment about those batch-30 items or their page-level readiness.
