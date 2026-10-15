# Step 3a reader report — batch 30

Run: `bayesian-computational-statistics-62`  
Batch: `30`  
Role: independent reader

## Opened inventory

Assigned pages opened:

- `library/bayesian-computational-statistics/rejection-sampling.md`
- `library/bayesian-computational-statistics/rejection-sampling-examples.md`

The A-page's required ordering page, `library/bayesian-computational-statistics/iid-monte-carlo-integration-and-error.md`, was also opened. Its Monte Carlo results are not used in the assigned claims; the rejection-sampling algorithm states its own IID draw assumptions.

Assigned items reviewed in dependency order:

1. `alg-rejection-sampling`
2. `thm-counting-measure-integral-is-nonnegative-series`
3. `thm-rejection-sampling-has-target-acceptance-law`
4. `thm-rejection-sampling-expected-proposal-count-under-finite-envelope`
5. `ex-rejection-sampling-tail-mismatch-no-finite-envelope`
6. `ex-rejection-sampling-bounded-likelihood-ratio`
7. `ex-rejection-sampling-unnormalized-finite-measures`

Direct dependency items used by those claims were opened: `cor-additivity-of-the-nonnegative-lebesgue-integral`, `cor-archimedean-reciprocal`, `cor-cauchy-reals-lub-complete`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `def-borel-sigma-algebra`, `def-counting-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-identically-distributed-and-iid-random-variables`, `def-integral-of-a-nonnegative-simple-function`, `def-law-or-distribution-of-a-random-element`, `def-measure`, `def-measure-with-density`, `def-nonnegative-extended-series`, `def-nonnegative-lebesgue-integral`, `def-nonnegative-simple-measurable-function`, `def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-real-limit`, `lem-geometric-sequence-null`, `lem-of-inverse-positive`, `lem-of-naturals-positive`, `prop-counting-measure-is-a-measure`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-change-of-variables-for-expectation`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-geometric-series`, `thm-independent-random-elements-have-product-joint-law`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-integration-against-a-density`, `thm-monotone-convergence-for-the-integral`, `thm-of-archimedean`, `thm-reals-ordered-field`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-threshold-characterisations-of-real-and-extended-real-measurability`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`. Supporting definitions `def-independent-random-elements` and `def-real-order` were opened to check the IID and ordered-field applications.

The batch-30 manifest, reader brief, batch-30 cross-batch dependency record, and relevant entries of `research/bayesian-computational-statistics-62-batch-30.proof-contracts.json` were consulted. The contracts were treated as evidence, not verdicts.

## Review and repairs

- In `alg-rejection-sampling`, the explanatory sentence claimed that the acceptance function equals `\tilde f/(c\tilde g)` on the envelope set. This quotient is undefined where `\tilde g=0`, including points where the envelope also gives `\tilde f=0`. The definition already assigns `a=0` there. I corrected the explanation to assert the quotient formula only where `\tilde g>0` and state the zero-proposal branch explicitly. On an exceptional point with `\tilde g>0` and quotient greater than one, clipping the threshold to one still leaves the test unchanged because `U_i\in(0,1)`.
- In `thm-rejection-sampling-has-target-acceptance-law`, proof step 1.1 used `N` for the null exceptional set while the statement and later proof steps use `N` for the first accepted proposal. I renamed the set `E_0` throughout step 1.1; this removes the collision without changing the argument.
- Regenerated the citations and derivations in the batch-30 proof-contract entries for `thm-rejection-sampling-has-target-acceptance-law`, `thm-rejection-sampling-expected-proposal-count-under-finite-envelope`, and all three assigned examples. Their algorithm-definition quotations now match the repaired algorithm, and the acceptance-law step-1.1 derivation reflects the corrected proof text. The algorithm's well-definedness contract remains accurate. Neither edited item had a `verification.judge` record to remove.

The acceptance calculation is supported by the measurable threshold event, product law of each independent proposal-uniform pair, Tonelli on the two probability spaces, and integration against the proposal density. The envelope yields per-trial probability `Z_f/(cZ_g)`, which is positive and at most one; independence then gives almost-sure termination and the geometric sum gives the target law. The expected-count proof uses the same IID acceptance events and monotone convergence of the truncations. The counting-measure theorem's truncation argument covers finite and infinite values. The three example computations and the telescoping normalizations were checked directly; no additional defects were found.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-rejection-sampling.md` — unchanged.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-rejection-sampling-has-target-acceptance-law.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-rejection-sampling.md` — 0 checked, 0 failing.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-rejection-sampling-has-target-acceptance-law.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/alg-rejection-sampling.md items/thm-rejection-sampling-has-target-acceptance-law.md` — 2 items, 7 steps, 0 defects.

## Page verdicts

- `rejection-sampling` (A page): The summary accurately describes the locally stated IID input, the finite-envelope condition, the accepted target law, and the role of the counting-measure result. The corrected algorithm explanation resolves the only item defect found. No remaining page defect.
- `rejection-sampling-examples` (B page): The finite two-point calculations and the countable tail-mismatch example match their stated hypotheses and results. No page or example defect remains.

## Uneditable defects and blocker

No confirmed defects remain outside the repair scope. No blocker.
