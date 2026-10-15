# Step 3a reader report — batch 19

Run: `bayesian-computational-statistics-62`  
Batch: `19`  
Role: independent reader

## Opened inventory

Pages opened:

- `library/bayesian-computational-statistics/weak-nonparametric-bernstein-von-mises.md` (A)
- `library/bayesian-computational-statistics/weak-nonparametric-bernstein-von-mises-examples.md` (B)

All 15 assigned items were opened in dependency order. The assigned inventory was: `def-negative-sobolev-space-for-white-noise`; `lem-wavelet-product-prior-is-l2-valued`, `lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces`, `lem-density-normal-laws-and-square-summable-gaussian-series`; `lem-product-prior-coordinate-posterior-law`, `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`; `lem-product-prior-posterior-second-moment-in-negative-sobolev-space`, `lem-finite-coordinate-posterior-total-variation-limit`, `lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent`, `cor-canonical-white-noise-law-is-tight-under-choice`; `thm-weak-nonparametric-bernstein-von-mises-for-product-priors`, `ex-white-noise-is-not-l2-valued`; `cor-weak-posterior-convergence-in-negative-sobolev-space`, `ex-gaussian-product-prior-satisfies-weak-bvm`; and `cor-continuous-functionals-of-the-scaled-posterior-converge`.

The external suppliers opened to verify the arguments were: `def-hilbert-space`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `def-countable-choice`, `def-axiom-of-choice`, `def-identically-distributed-and-iid-random-variables`, `def-polish-space`, `def-weak-convergence-of-borel-probability-measures`, `def-real-exponential-function-and-e`; `lem-finite-measure-uniqueness-on-a-pi-system`, `thm-dominated-convergence`, `thm-portmanteau-theorem`, `thm-prokhorov-tightness-theorem-on-polish-spaces`, `thm-monotone-convergence-for-the-integral`, `thm-dynkin-pi-lambda`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-gaussian-integral`, `thm-integration-against-a-density`, `thm-independent-random-elements-have-product-joint-law`, `thm-riesz-fischer-completeness-of-l-p`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-chain-rule`, `thm-derivative-of-exponential`, `thm-ftc-second-part`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-integration-by-parts`, `thm-substitution`, `thm-rectangle-criterion-for-independent-random-elements`, `thm-continuity-from-above-for-measures`, `thm-bessel-inequality-for-an-arbitrary-orthonormal-family`, `thm-finite-and-countable-subadditivity-of-measures`, `cor-cauchy-schwarz-for-random-variables`, `cor-markov-inequality-for-random-variables`, and `thm-continuous-mapping-theorem`.

## Independent mathematical review and edits

### `ex-gaussian-product-prior-satisfies-weak-bvm`

The original Verification step 1.1 asserted that the standard normal coefficient density has second moment 1 without a cited derivation. Step 1.2 inferred existence of the stated (L^2) truth from square summability alone, without supplying completeness. I repaired the proof by citing `lem-density-normal-laws-and-square-summable-gaussian-series` for the normal variance and by constructing the truth as the limit of its orthogonal partial sums, using the basis statement and `thm-riesz-fischer-completeness-of-l-p` under countable choice. The prior's (L^2) construction remains supplied by `lem-wavelet-product-prior-is-l2-valued`.

I added these suppliers to `deps` and updated the proof contract in `research/bayesian-computational-statistics-62-batch-19.proof-contracts.json`. This is a proof and dependency repair; the example's conclusion and hypotheses were not narrowed.

### `lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent`

The original proof used the product density calculation for the predictive coordinates, convergence of a Cauchy sequence in (L^2(Q_n)), and uniqueness of the resulting density measure without naming all suppliers. Step 1.2 also stated the Gaussian affinity formula without its completing-square calculation. I repaired those proof gaps: the step now cites finite product laws and Tonelli, evaluates the normal affinity by completing the square and `thm-gaussian-integral`, and derives the Hellinger bound. Step 2.1 cites Riesz–Fischer completeness and constructs the nonnegative (L^1) density from the (L^2) limit. Step 3.1 cites the density-measure theorem and finite-measure uniqueness on the generating cylinder π-system.

I added the exact suppliers to `deps` and updated the matching proof contract. The mutual absolute-continuity statement is unchanged.

No `verification.judge` record was present on either repaired item, so none required removal. No page prose was edited.

## Authoritative source check

I checked the stated wavelet conventions and theorem hypotheses against Castillo and Nickl, “Nonparametric Bernstein–von Mises theorems in Gaussian white noise,” *Annals of Statistics* 41 (2013), [PDF](https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf): Definition 2, printed pp. 2004–2005 (S-regular bases and level counts); Condition 1 and Theorem 5, printed pp. 2013–2017 (bounded normalized truth, density bounds and second moment, posterior second-moment estimate); Theorem 8 proof, printed pp. 2018–2020 (finite projections and tail control); and Theorem 9, printed pp. 2019–2020 (bounded-Lipschitz weak BvM conclusion under continuity at the truth coefficients). The local theorem retains the source's bounded-Lipschitz conclusion and its choice-dependent weak-topology consequences are stated separately. I also cross-checked the corresponding product-prior and continuous-mapping results in Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §7.3.4, printed pp. 584–586 and 595–601 ([PDF](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)).

## Coverage note

While tracing the scalar density-normal proof's exponential-tail estimate, I opened def-real-exponential-function-and-e after its dependent lemma had already been read. I checked the definition then; the assigned batch itself was read supplier-first. I did not re-read the dependent lemma after this late supplier check.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-gaussian-product-prior-satisfies-weak-bvm.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-gaussian-product-prior-satisfies-weak-bvm.md` — pass, direct.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md` — pass, direct.
- `node tools/proof-layout.mjs items/ex-gaussian-product-prior-satisfies-weak-bvm.md items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md` — 2 items, 7 steps, 0 defects.

## Page verdicts and remaining defects

- `weak-nonparametric-bernstein-von-mises`: **pass**. The summary accurately states the model conditions, trace threshold, bounded-Lipschitz conclusion, and the separate AC-dependent weak-convergence consequences.
- `weak-nonparametric-bernstein-von-mises-examples`: **pass**. The examples support the stated white-noise topology boundary and Gaussian-prior application; the truth construction and normal-moment verification are now explicit.

No uneditable defects were confirmed. No blocker remains.
