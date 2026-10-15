# Step 3a reader report — batch 43

Run: `statistical-models-experiments-62`  
Batch: `43`  
Reader: `reader-43`

## Opened inventory

### Assigned pages

- `library/statistical-models-and-experiments/linear-prediction-for-dependent-data.md` (A)
- `library/statistical-models-and-experiments/linear-prediction-for-dependent-data-examples.md` (B)

### Assigned items, reviewed in dependency order

- `lem-uncorrelated-jointly-gaussian-blocks-are-independent`
- `def-best-linear-forecast-from-a-finite-history`
- `thm-finite-history-best-linear-predictor-exists-uniquely`
- `alg-durbin-levinson-forecast-recursion`
- `thm-forecast-normal-equations-and-error`
- `thm-gaussian-best-linear-forecast-equals-conditional-expectation`
- `thm-durbin-levinson-solves-the-prediction-equations`
- `ex-ar1-one-step-and-multistep-forecast`
- `ex-singular-history-covariance-unique-predictor-class`
- `ex-nongaussian-conditional-mean-not-best-affine-predictor`

### Direct dependency suppliers opened

- Gaussian laws and independence: `def-multivariate-normal-law`, `lem-characteristic-function-of-a-multivariate-normal-law`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-independent-random-elements-have-product-joint-law`, `lem-measurable-functions-preserve-independence`, `thm-rectangle-criterion-for-independent-random-elements`, and `def-axiom-of-choice`.
- Time-series and prediction: `def-strict-and-weak-stationarity-for-time-series` and `def-autocovariance-and-sample-autocovariance` (both draft suppliers in batch 40), `def-l-p-space-as-a-quotient-by-null-functions`, `def-linear-combination-and-span`, `thm-normal-equations-for-best-affine-l2-prediction`, `def-moments-variance-and-covariance`, `lem-variance-and-covariance-identities-for-random-variables`, and `cor-cauchy-schwarz-for-random-variables`.
- Conditional expectation: `def-conditional-expectation-given-a-sigma-algebra`, `lem-conditioning-a-known-variable-and-an-independent-variable`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, and `lem-conditional-expectation-is-unique-almost-surely`.
- Finite examples and generated sigma-algebra: `def-finite-probability-space-and-event`, `def-finite-real-random-variable-and-distribution`, `def-expectation-on-a-finite-probability-space`, `def-variance-and-covariance`, and `def-sigma-algebra-generated-by-a-function`.
- Additional support for the affine-projection supplier: `lem-span-is-the-set-of-linear-combinations`, `thm-orthogonal-projection-is-the-unique-nearest-point`, and `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`.

The published supplier interfaces and the relevant proof arguments were checked for the uses made by this batch. No supplier defect requiring an escalation was found.

## Item review and edit

- `lem-uncorrelated-jointly-gaussian-blocks-are-independent` — The block-diagonal covariance has block-diagonal positive square root. Independent normal coordinates yield independent blocks, and the characteristic-function uniqueness supplier transfers that factorization to the original law. The proof covers singular covariance and is sound.
- `def-best-linear-forecast-from-a-finite-history` — Defines the unique minimizing almost-sure class over the finite affine history span, with the needed weak-stationarity moment conditions. It correctly distinguishes this forecast from conditional expectation absent further hypotheses.
- `thm-finite-history-best-linear-predictor-exists-uniquely` — Weak stationarity supplies the required (L^2) variables; the affine-projection supplier gives a unique class even when coefficient vectors are nonunique. The identification with the definition is valid.
- `alg-durbin-levinson-forecast-recursion` — Specifies inputs, outputs, admissibility, initialization, and each recursive update. Positive definiteness is the stated condition; the later theorem proves the divisions are defined. No unproved algorithmic property is asserted in the Definition.
- `thm-forecast-normal-equations-and-error` — The reversed-history indexing gives Σ entries γ(i−j) and target covariances γ(h+i−1). The nonsingular normal equations, mean adjustment, and residual-variance formula follow with the stated hypotheses.
- `thm-gaussian-best-linear-forecast-equals-conditional-expectation` — The residual is an affine image of the jointly Gaussian vector, has zero cross-covariance with the history, and is therefore independent of it. The measurable forecast plus zero conditional residual gives the claimed conditional expectation. AC and the almost-sure conclusion are retained.
- `thm-durbin-levinson-solves-the-prediction-equations` — The induction uses positive definiteness to show ν(k−1)>0, the coefficient update solves each row of the Toeplitz system, and the variance recurrence agrees with the projection-error formula. The indexing and reindexing are correct.
- `ex-ar1-one-step-and-multistep-forecast` — The causal (L^2) representation and uncorrelated innovations make the future innovation sum orthogonal to the observed affine history. The expansion proves optimality and gives the stated error variance without assuming Gaussianity or independence.
- `ex-singular-history-covariance-unique-predictor-class` — The finite two-point process is weakly stationary; the history covariance and normal equations are computed correctly. All solutions of (a_1+a_2=1) give the same class ([Z]).
- `ex-nongaussian-conditional-mean-not-best-affine-predictor` — **Repaired Verification step 3.1.** The previous step showed only that the conditional mean differed from the particular best affine forecast; that alone did not establish nonaffinity. The revised step uses the three positive-probability outcomes: (X_1=0) forces affine intercept (a=1), (X_1=-1) forces slope (b=1), and then (X_1=1) would give (X_2=2), contradicting the actual value (-1). This closes the claim that the conditional mean is not affine. The best affine forecast calculation in step 2.1 is unchanged.

The matching derivation and zero-boundary evidence were updated in `research/statistical-models-experiments-62-batch-43.proof-contracts.json`. The item had no `verification.judge` record to remove.

### Source checks

- Dewei Wang, *STAT 720 Time Series Analysis*, §5.2, printed pp. 65–66, equations (5.2)–(5.3), gives the finite-history covariance normal equations, mean-adjusted predictor, and error mean square. Section 5.5.1, printed pp. 73–75, Proposition 5.3, states the Durbin–Levinson coefficient and error recurrences. [Course PDF](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf)
- Nicolai Meinshausen, *Time Series Analysis: Notes for the course HS 2022*, §2.7, printed pp. 25–28, formulates finite-history best linear prediction as mean-square minimization and gives the stationary covariance equations. [Course notes](https://people.math.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf)
- James Norris, *Probability and Measure*, §8.1, Proposition 8.1.1, gives the scalar normal characteristic function; §8.2, Theorem 8.2.1(b), (c), and (e), states the multivariate characteristic function and that zero cross-covariance of Gaussian blocks implies independence. The proof factors the joint characteristic function, including the singular case. [Lecture notes](https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf)
- Rick Durrett, *Probability: Theory and Examples*, 5th ed., §3.10, Exercise 3.10.7, states that joint-normal coordinates are independent iff their off-diagonal covariances vanish. The Duke-hosted PDF's searchable text exposed this exact exercise; the independent local proof and Norris's complete block argument were used for verification. [Book PDF](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf)

These sources agree with the reviewed claims. The batch's local proofs provide the needed singular-covariance and finite-history details.

### Validation of the edit

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-nongaussian-conditional-mean-not-best-affine-predictor.md` — reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-nongaussian-conditional-mean-not-best-affine-predictor.md` — pass; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-nongaussian-conditional-mean-not-best-affine-predictor.md` — 1 item, 3 steps, 0 defects.

## Page verdicts

- `linear-prediction-for-dependent-data` (A) — Pass. The summary accurately describes affine (L^2) projection, singular-history uniqueness, the nonsingular covariance equations, the Gaussian conditional-expectation result, and the Durbin–Levinson result.
- `linear-prediction-for-dependent-data-examples` (B) — Pass. The summary accurately describes the singular example, the repaired three-state nonaffine conditional mean, and the causal AR(1) forecast with uncorrelated finite-variance innovations.

## Uneditable defects and blockers

- Uneditable defects: none found.
- Blocker: none.
- Coverage limit: all assigned items, both assigned pages, their direct dependency suppliers, and selected immediate supports for the affine-projection supplier were opened. I did not recursively audit unrelated branches of the much larger transitive supplier closure.
