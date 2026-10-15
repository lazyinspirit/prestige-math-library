# Step 3a reader report — batch 24

Run: `statistical-models-experiments-62`  
Role: reader  
Coverage: batch `24`

## Opened inventory

Assigned pages:

- A page: `interference-exposure-mappings-and-design-based-effects` — `library/statistical-models-and-experiments/interference-exposure-mappings-and-design-based-effects.md`.
- B page: `interference-exposure-mappings-and-design-based-effects-examples` — `library/statistical-models-and-experiments/interference-exposure-mappings-and-design-based-effects-examples.md`.

Assigned A-page items, read in dependency order:

1. `lem-finite-simple-random-sampling-identities`
2. `lem-finite-event-conditional-expectation-formula`
3. `def-potential-outcomes-under-partial-interference`
4. `def-exposure-mapping-under-interference`
5. `def-two-stage-randomized-interference-design-and-effects`
6. `thm-ht-exposure-specific-mean-unbiased`
7. `thm-two-stage-randomized-interference-estimators-unbiased`
8. `def-stratified-interference-design-based-variance-estimators`
9. `lem-two-stage-finite-design-variance-identities`
10. `thm-stratified-interference-variance-estimators-conservative`

Assigned B-page items, read after their A-page suppliers:

1. `cex-cross-group-contamination-violates-partial-interference`
2. `ex-two-stage-village-strategy-contrasts`
3. `ex-ht-exposure-specific-mean-two-unit-design`
4. `cex-misspecified-own-treatment-exposure-map`
5. `ex-nonadditive-spillovers-create-positive-variance-bias`

Direct prerequisite items opened and checked against the claims using them:

- `def-finite-probability-space-and-event` (published)
- `def-expectation-on-a-finite-probability-space` (published)
- `def-variance-and-covariance` (published)
- `def-binomial-coefficient` (published)
- `lem-finite-sum-laws` (published)
- `thm-linearity-of-expectation` (published)
- `lem-finite-sum-reindexing-and-fubini` (published)
- `def-conditional-expectation-given-a-sigma-algebra` (published)
- `cor-expectation-agrees-with-the-finite-weighted-sum` (published)
- `def-finite-randomized-treatment-assignment-model` (draft dependency from this run)
- `def-estimand-on-a-statistical-model` (published)
- `def-statistic-and-estimator` (published)
- `cor-variance-adds-for-pairwise-independent-random-variables` (published)
- `lem-measurable-functions-preserve-independence` (published)

The A-page's six declared prerequisite pages were also opened: `randomized-treatment-assignment-and-sharp-null-tests`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `finite-probability-spaces-and-random-variables`, `conditional-expectation`, and `probability-spaces-random-variables-and-expectation`. Their relevant listed definitions/results are among the opened direct prerequisite items above.

The batch manifest `research/statistical-models-experiments-62-batch-24.pages.json` and proof contracts `research/statistical-models-experiments-62-batch-24.proof-contracts.json` were checked as evidence, not treated as verdicts.

## Review and edits

- **Repaired `lem-finite-event-conditional-expectation-formula`, `## Statement`.** The original definition allowed `\mathbb E[X\mid A]` only for `0 < P(A) < 1`, while the later partition identity allows any finite partition into positive-probability cells, including the one-cell partition `{Ω}` with `P(Ω)=1`. Its step 1.1 already established the normalized finite weighted average for every event `B` with `P(B)>0`; step 2.2 applies that formula to each positive-probability partition cell. The definition now covers every such `B`, while the two-cell version clause still assumes `0 < P(A) < 1`, so both `A` and `A^c` have positive probability. This closes the undefined conditional value without changing the proof. Evidence: the finite conditional distribution in Grinstead–Snell, Chapter 4 §4.1, requires only positive event probability, and Chapter 6 §6.1, Definition 6.2 and Theorem 6.5, gives conditional expectation and the finite partition formula.
- **Updated the affected proof contract** for `lem-finite-event-conditional-expectation-formula`: the `one` boundary now records that `P(B)=1` is included, and a one-cell partition check was added. The item had no `verification.judge` record to remove.
- No other item or page prose was edited. Existing proof steps already had the required paragraph separation and trailing tags.

No uneditable defects remain.

## Authoritative source checks

- Hudgens and Halloran, [“Toward Causal Inference With Interference”](https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf): §2.1 defines fixed within-group potential-outcome schedules and partial interference; §2.2 specifies the two-stage fixed-count randomization; §§3.1–3.5 define the strategy averages and effects, including control-minus-treatment direct-effect direction; §4.2.1 states stratified interference; Theorems 4–9 and Appendices A.4, A.6–A.9 give the within-group and between-group variance formulas and their heterogeneity corrections. Appendix A.4 invokes the standard simple-random-sampling mean and sample-variance identities; the assigned sampling lemma derives its joint covariance identity locally by inclusion counting.
- Aronow and Samii, [“Estimating Average Causal Effects Under General Interference”](https://arxiv.org/pdf/1305.6156v4): Condition 1 in §3 requires outcomes to agree for assignments mapped to the same exposure; Lemma 4.1 and Appendix A.2 derive the Horvitz–Thompson expectation by cancellation of each positive marginal exposure probability.
- Grinstead and Snell, [Chapter 4 §4.1](https://chance.dartmouth.edu/teaching_aids/books_articles/probability_book/Chapter4.pdf) defines the event-conditioned distribution by normalizing weights when `P(E)>0`; [Chapter 6 §6.1, Definition 6.2 and Theorem 6.5](https://chance.dartmouth.edu/teaching_aids/books_articles/probability_book/Chapter6.pdf), pp. 239–240, gives event-conditioned expectation and averaging over a finite partition.

## Page verdicts

- **`interference-exposure-mappings-and-design-based-effects` — pass after the repair above.** Its summary matches the ten items: fixed outcomes and partial interference, exposure sufficiency and positivity, two-stage point-effect unbiasedness without stratified interference, and variance corrections under the additional stratified-interference premise. It accurately limits the results to the stated finite design rather than claiming protocol implementation or exposure-map adequacy.
- **`interference-exposure-mappings-and-design-based-effects-examples` — pass.** Its five examples/counterexamples match their displayed constructions and calculations, including the strict positive variance-estimator bias example.

## Checks and blocker

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-finite-event-conditional-expectation-formula.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-finite-event-conditional-expectation-formula.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs` on the 11 proof-bearing assigned items — 11 items, 42 steps, 0 defects.
- Blocker: none.
