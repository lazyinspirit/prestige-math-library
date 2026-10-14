# Step 3a reader report — batch 5

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Coverage: batch `5`

## Opened inventory

The live autopilot status was `running` at `3a-read`, with nothing currently in flight. I read `briefs/reader.md`, the batch manifest, and its proof-contract file before reviewing the current mathematics. Both assigned pages and every listed item were opened.

Assigned pages:

- A page: `complete-sufficiency-exponential-families-and-basu`
- B page: `complete-sufficiency-exponential-families-and-basu-examples`

Assigned A-page items, read in dependency order:

`lem-uniqueness-of-a-multivariate-exponential-transform`, `def-likelihood-ratio-equivalence-on-common-discrete-support`, `thm-countable-mixture-dominates-sigmafinite-dominated-family`, `def-ancillary-statistic`, `def-complete-statistic`, `def-exponential-family`, `def-sufficient-statistic`, `def-minimal-sufficient-sigma-field`, `thm-basu-independence`, `thm-common-reference-factorization-criterion`, `thm-completeness-of-full-exponential-family`, `thm-countable-factorization-criterion-for-sufficiency`, `def-minimal-sufficient-statistic`, `thm-full-rank-exponential-family-sufficiency`, `thm-standard-borel-dominated-factorization-criterion`, `thm-countable-mixture-likelihood-ratio-vector-is-minimal-sufficient`, and `thm-discrete-likelihood-ratio-classes-are-minimal-sufficient`.

Assigned B-page items:

`ex-countable-mixture-dominates-bernoulli-scale-family`, `cex-arbitrary-dominator-factorization-fails`, `cex-curved-normal-family-statistic-incomplete`, `ex-normal-sample-mean-residual-independent-by-basu`, `ex-bernoulli-count-is-minimal-sufficient`, and `ex-countable-likelihood-ratio-vector-on-point-mass-model`.

I also opened the ten page-level prerequisite summaries named in the manifest: `dominated-experiments-likelihood-and-sufficiency`, `estimators-and-randomized-procedures`, `conditional-distributions-and-regular-conditional-probability`, `conditional-expectation`, `standard-borel-real-codings-and-determining-classes`, `infinite-product-measures-and-kolmogorov-extension`, `complete-metrizability-and-baire`, `fourier-transform-convolution-and-approximate-identities`, `the-identity-theorem-and-the-open-mapping-theorem`, and `brownian-motion-construction-and-continuity`.

The 50 distinct direct supplier items opened for the assigned proofs were:

`cor-cauchy-schwarz-for-random-variables`, `cor-continuous-functions-are-borel-measurable`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`, `def-axiom-of-choice`, `def-complex-measure`, `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-law-given-a-random-element`, `def-dirac-measure`, `def-dominated-statistical-experiment`, `def-finite-sigma-finite-and-semifinite-measures`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-integration-against-a-signed-or-complex-measure`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-likelihood-density`, `def-measure-kernel-and-probability-kernel`, `def-measure-with-density`, `def-probability-measure`, `def-regular-conditional-distribution`, `def-standard-borel-space`, `def-standard-normal-and-normal-laws`, `def-statistic-and-estimator`, `def-total-variation-of-a-signed-or-complex-measure`, `lem-gaussian-even-moment-bound-for-brownian-increments`, `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data`, `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `thm-borel-sets-are-lebesgue-measurable`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-chain-rule-for-radon-nikodym-derivatives`, `thm-countable-products-of-completely-metrizable-spaces`, `thm-countable-products-of-second-countable-spaces`, `thm-dominated-convergence`, `thm-doob-dynkin-lemma`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `thm-identity-theorem-holomorphic-functions`, `thm-independent-random-elements-have-product-joint-law`, `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `thm-likelihood-ratio-change-of-measure`, `thm-monotone-convergence-for-the-integral`, `thm-nonnegative-measurable-functions-admit-increasing-simple-approximations`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-standard-borel-spaces-admit-bimeasurable-real-codings`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `thm-total-variation-is-a-measure`.

## Repairs and evidence

- `lem-uniqueness-of-a-multivariate-exponential-transform`, Statement and Proof 1.1–3.1: the proof used complex integration against a total variation measure, an integral bound, and dominated convergence, while the original dependencies supplied only measure and variation definitions. I added the exact suppliers `thm-total-variation-is-a-measure`, `def-integration-against-a-signed-or-complex-measure`, `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`, and `thm-dominated-convergence`; the proof now traces separate holomorphy through those results. I made the dimension domain explicit as $k\ge0$ and handle $k=0$ directly, because the Fourier uniqueness dependency covers dimensions $k\ge1$.

- `thm-countable-mixture-dominates-sigmafinite-dominated-family`, Proof 1.1–4.1: the original weights gave only $\lambda(\mathcal X)\le2$ when the sequence starts at $n=0$, despite claiming the bound $1$. I changed them to $2^{-(n+1)}/(1+\mu(E_n))$, stated countable additivity of the constructed $\lambda$, and proved the selected support union is nonempty using $\int p_{\theta_*}\,d\lambda=1$. I added monotone convergence for continuity from below and for the mixture density, and supplied the zero-integral argument that yields $\lambda(C\cap A)=0$.

- `def-sufficient-statistic`, Definition: the explanatory sentence previously inferred a target-space conditional kernel from the regular-conditional-distribution existence theorem alone. I added `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable` to the dependencies and named the AC qualification.

- `thm-common-reference-factorization-criterion`, Proof 1.1–3.1: the reverse implication used a conditional kernel on the statistic target, which required the factor-through lemma; weighted disintegration also required simple approximation and monotone convergence. I added these suppliers, used them in the Facts and Assumptions section, and made the construction of a finite nonnegative Borel factor explicit in Step 2.1.

- `thm-completeness-of-full-exponential-family`, Proof 1.1–2.1: the total-variation pushforward was used as a finite signed Borel measure without stating the measurability argument, and Step 2.1 passed from simple functions to a measurable exponential weight. I stated countable additivity of the pushforward and added `thm-nonnegative-measurable-functions-admit-increasing-simple-approximations` alongside monotone convergence.

- `thm-standard-borel-dominated-factorization-criterion`, Proof 2.1: the countable weighted sum of conditional identities now explicitly uses monotone convergence, which is listed as a dependency and fact.

- `thm-countable-mixture-likelihood-ratio-vector-is-minimal-sufficient`, Proof 2.1–2.2: the proof now names the factor-through lemma that turns an RCD given $\sigma(T)$ into a target-space kernel, and names simple approximation plus monotone convergence for the likelihood-weighted identities and mixture sum.

- `cex-curved-normal-family-statistic-incomplete`, Facts and Assumptions and Proof 1.1, 3.1: the normal density transformation is now supported by the $C^1$ change-of-variables theorem; the product Borel result is cited where rectangle uniqueness is used; the box-volume theorem is now cited at the positive-rectangle witness.

- `ex-normal-sample-mean-residual-independent-by-basu`, Example and Proof 1.1: I removed a repeated “Assume AC.” and supplied the change-of-variables, density-measure, product-measure, Euclidean Lebesgue-product, and product-Borel results needed to derive the joint density.

I updated `research/mathematical-statistics-foundations-37-batch-5.proof-contracts.json` for the repaired claims, source clauses, and derivation inputs. None of the edited in-flight items had a stale `verification.judge` record.

## Validation

Reflow completed with no changes for all nine edited items. Precheck passed for the eight proof-bearing items; the sufficient-statistic definition reported zero proof sections checked and zero failures. The final batched proof-layout check reported 9 items, 28 steps, and 0 defects.

## Uneditable defects

None confirmed in the direct supplier interfaces or required page summaries reviewed. No published or other-batch item was edited.

## Page verdicts

- `complete-sufficiency-exponential-families-and-basu` (A): no remaining page-summary defect found. The summary's countability, standard-Borel, domination, and open-parameter qualifications match the reviewed claims after the repairs above.
- `complete-sufficiency-exponential-families-and-basu-examples` (B): no remaining page-summary defect found. Its summary accurately describes the endpoint-mixture, likelihood-class, point-mass, normal, and curved-normal examples reviewed.

## Blocker and coverage note

No blocker. I reviewed all assigned item arguments and the exact claim or definition sections used from their 50 direct suppliers; I did not independently re-audit every transitive proof dependency of all those suppliers. The ten page-level prerequisite pages were opened for their summaries and item inventories, with proof verification focused on the direct item dependencies above.
