# Step 3a Reader Report — Batch 54

Run: `bayesian-computational-statistics-62`  
Batch: `54`  
Role: independent reader

## Opened inventory

Assigned pages: `library/bayesian-computational-statistics/finite-group-permutation-inference.md` (A) and `library/bayesian-computational-statistics/finite-group-permutation-inference-examples.md` (B). Both were read in full.

Assigned items were read in dependency order: `def-measurable-finite-group-permutation-setup`, `def-measurable-finite-group-orbit-pvalues`, `alg-random-permutation-monte-carlo-pvalue`, `thm-finite-group-permutation-validity`, `thm-random-permutation-monte-carlo-validity`, `ex-exchangeable-two-sample-permutation-test`, `ex-unequal-assignment-sharp-null-randomization`, and `cex-uncorrected-random-permutation-pvalue-can-be-zero`.

I inspected the batch manifest, authoring notes, and assigned proof-contract clauses as evidence, not verdicts. The direct published suppliers and further interfaces needed for the proofs were read: `def-statistical-experiment`, `def-group`, `def-group-action`, `def-measurable-function-between-measurable-spaces`, `def-finite-group-randomization-test`, `def-orbit-rank-p-value`, `def-independent-random-elements`, `def-uniform-finite-probability-space`, `lem-finite-multiset-randomized-rank-is-uniform`, `thm-finite-group-randomization-validity`, `def-p-value`, `def-randomized-procedure-as-a-markov-kernel`, `def-randomized-test`, `lem-measurable-rejection-function-defines-randomized-test`, `def-test-size-and-power`, `thm-p-value-superuniformity`, `def-finite-probability-space-and-event`, `def-finite-randomized-treatment-assignment-model`, `def-fisher-sharp-null-and-predeclared-test-orderings`, `def-finite-population-average-treatment-effect-and-weak-null`, `thm-fisher-sharp-null-randomization-pvalues-are-valid`, and `lem-finite-weighted-upper-tail-pvalues-and-randomized-ties`. I also checked `def-conditional-probability`, `lem-finite-probability-basic-laws`, `lem-finite-set-has-max`, `cor-expectation-of-an-indicator-is-probability`, and the linked published counterexample `cex-noninvariant-null-invalidates-group-pvalue`.

The two page requirements were opened: `library/mathematical-statistics/conditional-and-finite-group-exact-inference.md` and `library/statistical-models-and-experiments/randomized-treatment-assignment-and-sharp-null-tests.md`.

External sources checked against the relevant claims:

- Hemerik and Goeman, [*Exact Testing with Random Permutations*](https://arxiv.org/pdf/1411.7565), arXiv v3: §§2.1–2.2 (full-group upper ranks and their superuniformity), §3.3, Theorem 2 and proof (identity-adjoined random transformations, with and without replacement), and §3.4 (randomized rank and the identity-corrected upper bound). The local proofs retain the stronger explicit law-invariance hypotheses and establish the measurable-space versions directly.
- Katsevich, [STAT 9610 Lecture Notes](https://katsevich-teaching.github.io/stat-9610-fall-2022/assets/lecture-notes.pdf), §3.2.4.2, printed pp. 54–56 / PDF pp. 57–59, equations (3.12)–(3.20): the independence-null permutation calculation, the identity-corrected formula, and the warning about omitting the correction. The notes say “Similar logic as above” for the Monte Carlo bound; I relied on the local group-recentering proof for that general result.

No rendered evidence bundle was present in the task inputs or the active run state directory; I read the item and page carriers and relevant contract passages directly.

## Edit and evidence

In `items/thm-random-permutation-monte-carlo-validity.md`, Statement and proof steps 1.2 and 2.1 now specify that with-replacement `W` is the unordered multiset induced by the labelled draw positions, while the without-replacement `W` is a subset. The joint-space sentence previously allowed an ordered-list interpretation, but the recentering step established equality only after order was ignored. The proof now says explicitly that the labelled presentation is used to select the uniform position and that the resulting multiset has the design law. This resolves the representation gap without changing the validity claim.

I updated the theorem’s proof-contract derivations for steps 1.2 and 2.1 and refreshed the quote of its Statement in `cex-uncorrected-random-permutation-pvalue-can-be-zero`’s contract. That consumer’s counterexample remains valid under the clarified multiset interface. The theorem had no `verification.judge` record to remove.

Required checks after the edit: reflow completed; precheck passed (`1 checked, 0 failing`); proof layout passed (`1 item, 6 steps, 0 defects`).

## Uneditable defects

None found. No repair was needed in B-page prose, published dependencies, or other batches.

## Page verdicts

- **A — `finite-group-permutation-inference`: sound after the repair.** Its summary correctly distinguishes the inclusive superuniform full-orbit rank from the exactly uniform tie-randomized rank; preserves transformation multiplicity for nonfree actions; and states the with- and without-replacement identity-adjoined designs separately. Its Fisher sharp-null and weak-null caveats agree with the reviewed results.
- **B — `finite-group-permutation-inference-examples`: sound.** The Bernoulli orbit ranks and tie-randomized CDFs are correct for every `q∈[0,1]`; the `Z/6Z` subset design has p-value `1/3` with probability `1/6` and `1` otherwise; the equal-mean product law is not swap-invariant; the unequal-weight assignment example uses the Fisher sharp-null result; and the uncorrected Monte Carlo witness has probability `1/4` at zero. Its link to the published noninvariance counterexample is accurate.

## Blocker and coverage limit

No blocker. The recursive dependency metadata reaches 338 items; I reviewed the assigned items, the directly used supplier statements and proofs, and the additional upstream results needed for these arguments, but did not independently re-prove the entire foundational closure. No claim in this report depends on that unperformed full-closure audit.
