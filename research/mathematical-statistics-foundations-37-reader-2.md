# Step 3a reader report — batch 2

Run: `mathematical-statistics-foundations-37`  
Reader: `reader-2`  
Date: 2026-10-14

## Opened inventory

Assigned pages:

- `library/mathematical-statistics/estimators-and-randomized-procedures.md` (A page)
- `library/mathematical-statistics/estimators-and-randomized-procedures-examples.md` (B page)

Assigned items, reviewed supplier-first:

1. `def-randomized-procedure-as-a-markov-kernel`
2. `lem-procedure-action-law-is-measurable`
3. `def-statistic-and-estimator`
4. `def-randomized-test`
5. `ex-deterministic-statistic-as-dirac-kernel`
6. `ex-coin-flip-randomized-test`
7. `cex-nonmeasurable-rule-is-not-a-statistic-or-test`

Direct suppliers named by the assigned items were opened: `def-statistical-experiment`, `def-measurable-space`, `def-measure-kernel-and-probability-kernel`, `def-estimand-on-a-statistical-model`, `def-measurable-function-between-measurable-spaces`, `def-measure`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-nonnegative-simple-measurable-function`, `def-integral-of-a-nonnegative-simple-function`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-nonnegative-extended-series`, `def-sigma-algebra`, `def-dirac-measure`, and `prop-dirac-measure-is-a-probability-measure`.

Proof-relevant supplier material opened as needed: `def-algebra-of-subsets`, `def-borel-sigma-algebra`, `def-extended-reals`, `def-measure-space`, `def-parametric-statistical-model`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `lem-law-of-a-random-element-is-a-probability-measure`, `def-extended-real-valued-measurable-function`, `def-nonnegative-lebesgue-integral`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-integral-over-a-measurable-set`, `lem-well-definedness-of-the-simple-integral`, `prop-basic-properties-of-the-nonnegative-simple-integral`, `thm-simple-indefinite-integral-is-a-measure`, `thm-continuity-from-below-for-measures`, `prop-measure-of-a-set-difference`, `prop-measure-monotonicity`, `lem-q-and-irrationals-dense-r`, `thm-rationals-countable`, `lem-extended-reals-complete`, and `thm-recursion`.

The batch contract file `research/mathematical-statistics-foundations-37-batch-2.proof-contracts.json` was inspected for all seven assigned items. The cited literature was also checked at the cited sections/pages: Ryan Martin, §5.1, PDF p. 101; Peter Hoff, §§2–3, PDF pp. 2–5; Peter Kempthorne, MIT 18.655 Lecture Note 6, PDF pp. 14–15.

## Review and page verdicts

### A page: `estimators-and-randomized-procedures`

Reader verdict: no confirmed mathematical defect in the page or its assigned items. The page summary accurately describes the measurable-map definitions, the probability-kernel rule, the action-law lemma, and the parameter-space measurability caveat. The kernel definition makes no auxiliary-random-seed representation claim, as its summary says.

- `def-randomized-procedure-as-a-markov-kernel`: the domain/action spaces and pointwise probability and measurability requirements match the opened kernel definition. Its parameter-independence and no-seed-representation qualifications are accurate.
- `lem-procedure-action-law-is-measurable`: the proof's simple approximation, kernel measurability, monotone convergence, countable-additivity, and simple-function arguments establish the asserted measurable action functional, probability action law, and iterated-integral identity, including infinite nonnegative values. The normalization bound in proof step 1.1 follows from the simple-integral formula and the probability mass-one condition. No mathematical proof gap was found.
- `def-statistic-and-estimator`: the definitions preserve the data and target sigma-algebras and correctly leave the parameter target map without a measurability requirement.
- `def-randomized-test`: the binary action partition gives the stated rejection and non-rejection probabilities; the test function is measurable with the stated trace Borel structure on `[0,1]`.

### B page: `estimators-and-randomized-procedures-examples`

Reader verdict: no confirmed mathematical defect in the page or its assigned examples. The summary matches the point-mass construction, the one-point coin-flip computation, and the explicit measurability counterexample.

- `ex-deterministic-statistic-as-dirac-kernel`: pointwise Dirac probability sections and measurable evaluations follow from measurability of the statistic.
- `ex-coin-flip-randomized-test`: the four event masses define a probability measure for every `p∈[0,1]`; one-point kernel measurability and the action-law integral give rejection probability `p`, including both endpoints.
- `cex-nonmeasurable-rule-is-not-a-statistic-or-test`: the preimage of `{1}` is outside the trivial data sigma-algebra, while the point-mass law still defines a valid experiment; the conclusion follows for both statistics and kernel test functions.

## Defect not licensed for repair

The proof contract for `lem-procedure-action-law-is-measurable`, field `contracts.lem-procedure-action-law-is-measurable.finite_checks[indicator-action-law].result`, says the indicator identity is “step 2.3.” The item has no step 2.3: its indicator-function identity is proved in step 3.1, while step 2.1 proves countable additivity. The contract reference is inaccurate; the item proof itself is mathematically sound. I did not edit the proof-contract file because the edit scope permits repairs only to assigned in-flight items or assigned A-page prose.

## Edits and validation

No item or page edits were made. No item paths changed, so proof-layout, reflow, and precheck were not run.

## Blocker and coverage limit

No blocker. This review checked the assigned pages and items, their declared direct suppliers, the immediate helper items used in the relevant supplier arguments, and the cited literature sections. It did not audit every deeper foundational dependency in the full transitive closure of those suppliers.

The literature references support the conventional probability-valued decision-rule, estimator, and test-function terminology. The formal sigma-algebra measurability conditions reviewed here are supplied explicitly by the library's kernel and measurable-function definitions.
