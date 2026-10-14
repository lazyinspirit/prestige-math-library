# Step 3a reader report — batch 36

Run: `mathematical-statistics-foundations-37`  
Reader: `reader-36`

## Opened inventory

Opened the batch manifest, reader brief, batch notes, cross-batch dependency list, all 12 proof contracts, and the source-coverage entries used for source navigation. The cross-batch dependency list is empty.

Opened both assigned pages:

- A: `library/mathematical-statistics/hilbert-valued-clt-for-weakly-dependent-functional-time-series.md`
- B: `library/mathematical-statistics/hilbert-valued-clt-for-weakly-dependent-functional-time-series-examples.md`

Opened all assigned items in dependency order:

- Level 0: `def-l2-m-approximable-causal-bernoulli-shift`, `lem-finite-dependent-vector-clt`, `lem-positive-trace-class-covariance-defines-hilbert-gaussian`, `lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible`, `lem-l2-basis-projections-converge-and-satisfy-parseval`.
- Level 1: `lem-independent-centered-hilbert-elements-have-zero-expected-inner-product`, `lem-long-run-covariance-is-trace-class`, `ex-nonsummable-physical-dependence-linear-process`.
- Level 2: `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts`.
- Level 3: `ex-finite-dependent-functional-moving-average`, `ex-geometrically-summable-bernoulli-shift`, `cex-terminal-weak-limit-does-not-imply-path-weak-limit`.

Opened each of the 58 unique direct external dependencies in the assigned item frontmatter:

```text
cor-cauchy-schwarz-for-random-variables
cor-characteristic-function-criterion-for-weak-convergence
cor-chebyshev-inequality-for-random-variables
cor-countable-independent-copies-exist
cor-first-borel-cantelli-lemma-for-events
cor-markov-inequality-for-random-variables
cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator
def-axiom-of-choice
def-bochner-integrable-function
def-convergence-in-distribution-of-random-elements
def-coordinate-maps-and-cylinder-sigma-algebra
def-countable-choice
def-dependent-choice
def-expectation-of-a-nonnegative-or-integrable-random-variable
def-finite-sigma-finite-and-semifinite-measures
def-hilbert-space
def-independent-random-elements
def-independent-sigma-algebras-and-events
def-l-p-space-as-a-quotient-by-null-functions
def-law-or-distribution-of-a-random-element
def-moments-variance-and-covariance
def-multivariate-normal-law
def-product-sigma-algebra-and-finite-product-sigma-algebras
def-random-element-and-real-random-variable
def-real-and-complex-inner-product-space
def-row-wise-independent-centered-triangular-array
def-separable-space
def-standard-normal-and-normal-laws
def-strongly-measurable-banach-valued-function
def-total-row-variance-and-lindeberg-condition
def-trace-class-operator
lem-ac-supplies-sequential-choices-for-probability-constructions
lem-bochner-integral-norm-inequality
lem-characteristic-function-of-a-normal-law
lem-l-two-with-the-integral-pairing-is-a-hilbert-space
lem-measurable-functions-preserve-independence
lem-nuclear-series-characterizes-trace-norm
lem-product-rectangle-kernels-are-dense-in-product-l-two
lem-pythagorean-theorem-and-finite-orthogonal-sums
thm-bochner-integrability-criterion
thm-bounded-linear-maps-commute-with-bochner-integration
thm-cauchy-schwarz-in-an-inner-product-space
thm-converging-together-lemma
thm-cramer-wold-device
thm-dominated-convergence
thm-factorization-of-expectations-for-independent-variables
thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
thm-grouping-independent-sigma-algebras
thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable
thm-lindeberg-feller-central-limit-theorem-sufficiency
thm-portmanteau-theorem
thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
thm-slutsky-for-real-random-variables
thm-spectral-theorem-for-compact-self-adjoint-operators
thm-tonelli-theorem-for-sigma-finite-product-spaces
thm-trace-class-is-a-two-sided-banach-operator-ideal
thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues
thm-uniqueness-of-a-law-from-its-characteristic-function
```

For the independent-product construction and its countable-additivity proof, also opened `thm-countable-product-of-probability-spaces`, `cor-coordinate-random-elements-on-a-countable-product-are-independent`, `lem-countable-product-cylinder-premeasure-is-countably-additive`, and `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined`. Opened `thm-first-borel-cantelli` for the example's almost-sure subsequence argument.

## Source checks

- Opened Horváth, Kokoszka, and Reeder, *Estimation of the Mean of Functional Time Series and a Two-Sample Problem*, §1.1 and equations (1.1)–(1.3) (printed pp. 104–105), Theorem 1 (pp. 105–106), and Appendix A.1 (pp. 117–119). The paper supports the causal replacement convention, Hilbert-valued sample-mean CLT scope, and $L^2([0,1]^2)$ covariance-kernel interpretation. Appendix A.1 cites a finite-dimensional $m$-dependent CLT rather than proving it; the assigned `lem-finite-dependent-vector-clt` supplies a local proof. [Source PDF](https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf)
- Opened Teschl, *Topics in Real and Functional Analysis*, §2.1, Theorems 2.2–2.4 (printed pp. 49–51); these state the orthogonal projection expansion and Parseval result used by the local basis and expectation lemmas. [Source PDF](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf)
- Opened Durrett, *Probability: Theory and Examples*, 5th ed., §2.1.2, Theorem 2.1.12 (printed pp. 48–49); it states factorization of expectations for integrable products of independent variables. [Source PDF](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf)

The cited Hörmann–Kokoszka chapter URL was not independently fetched during this review. The batch notes record repeated HTTP 403 results. I did not use that URL as verified evidence; the local proofs and the accessible Horváth–Kokoszka–Reeder paper support the claims reviewed here.

## Edit and validation

Repaired `items/ex-nonsummable-physical-dependence-linear-process.md`: the cutoff sequence $N_r$ was recursively specified without an initial index. The statement now defines $N_0$ and each later least cutoff (Statement, lines 23–29); proof step 1.1 establishes the base case and every recursive stage from convergence of $\sum_{k\ge0}(k+1)^{-2}$ (line 60). Updated the corresponding step-1.1 derivation in `research/mathematical-statistics-foundations-37-batch-36.proof-contracts.json`. The item had no `verification.judge` record to remove.

Checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-nonsummable-physical-dependence-linear-process.md` — reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-nonsummable-physical-dependence-linear-process.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-nonsummable-physical-dependence-linear-process.md` — 1 item, 4 steps, 0 defects.

No pages or other assigned items were edited. No proof contract was changed for other items.

## Page verdicts and remaining defects

- **A page — acceptable.** Its summary matches the assigned definition and local lemmas, trace-class covariance/kernel construction, Gaussian realization, and sample-sum CLT. The theorem is stated for $H$-valued sample sums and makes no partial-sum path-process claim.
- **B page — acceptable.** Its four examples and summary match the reviewed calculations: the linear filter has nonsummable replacement errors, the finite moving average has $\delta_1=2\sqrt2$ and covariance $9(e\otimes e)$, the geometric filter has summable errors and covariance $4(e\otimes e)$, and the alternating paths separate terminal convergence from path-law convergence.
- No uneditable mathematical defect was confirmed. No finding remains for routing.

## Blocker and coverage limit

There was no blocker to this mathematical review. The opened batch notes report an unrelated malformed batch-5 manifest that blocks a shared dependency-level recomputation; I did not independently reproduce that run-level issue, and it did not prevent review of batch 36. I reviewed all assigned carriers, all direct external dependencies listed above, and the further product-construction sources named above; I did not fully traverse the generated coverage ledger or recursively re-audit every transitive dependency beneath every published supplier.
