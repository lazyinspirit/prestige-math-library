# Step 1a — prerequisite drift review

Run: `mathematical-statistics-foundations-37` · role: alpha · coverage: all 37 A pages.

I checked the scope ledger, all 37 assigned batch manifests, the corresponding rows in `research/plan-mathematical-statistics-track.md`, the cross-category interface rows in `research/plan-statistical-models-experiments-track.md`, the owner direction and planning scope, the rendered drift evidence, and the current `research/plan-spec.json`. Manifest orders and declared page requirements agree with the canonical page plan except for the one correction below. Nearby candidates in the evidence bundle were treated as a reading list, not as findings. Category 2–4 pages remain consumers, not suppliers.

One authorized existing-mathematics backward edge was applied in `research/plan-spec.json`: `linear-algebra-methods-in-combinatorics (order 326) -> symmetrization-rademacher-complexity-and-covering-entropy (order 1872)`. The published home is already within the owner-approved independent-mathematics supplier scope; no pair, page identity, manifest, content, or scope was changed. The engine still owns manifest materialization.

### statistical-experiments-models-and-identifiability

Design row 82 defines arbitrary indexed experiments and keeps the measurable-kernel interface separate; the assigned manifest's probability and measure suppliers cover both contracts. No additional mathematical page is needed.

VERDICT: no-drift

### estimators-and-randomized-procedures

Design row 83 uses measurable maps and Markov kernels; its manifest supplies MSF-01, measurable functions, and regular conditional distributions. The measurability claim has its stated suppliers.

VERDICT: no-drift

### losses-risk-and-decision-rules

Design row 84's risk integral and Bayes-rule result use experiments, procedures, expectation, and conditional expectation; standard-Borel and measurable-minimizer hypotheses are explicit. The manifest requirements supply these prerequisites, including RCD through MSF-02.

VERDICT: no-drift

### dominated-experiments-likelihood-and-sufficiency

Design row 85 uses the Radon–Nikodym theorem and measurable-function results, with the singular part retained and change of measure restricted to absolute continuity. All are declared in the manifest; no pointwise likelihood claim needs a further supplier.

VERDICT: no-drift

### complete-sufficiency-exponential-families-and-basu

Design row 86's standard-Borel/countable factorization, countable-mixture domination, transform uniqueness, completeness, and Basu claims have the matching MSF and probability/topology/analysis prerequisites in the manifest. The unrestricted dominated-factorization proof remains an explicit local authoring obligation, not an absent page supplier.

VERDICT: no-drift

### finite-sample-point-estimation-and-unbiased-optimality

Design row 87's Rao–Blackwell and Lehmann–Scheffé results consume estimation, risk, complete sufficiency, and conditional expectation; finite-variance conditions are stated. The manifest covers those uses.

VERDICT: no-drift

### fisher-information-and-finite-sample-information-bounds

Design row 88's score identities and Cramér–Rao inequalities use dominated likelihoods, Lebesgue integration, inner-product geometry, and finite-sample estimation, all declared. The varying-support caveat is retained in the design.

VERDICT: no-drift

### finite-sample-tests-neyman-pearson-and-valid-p-values

Design row 89's Neyman–Pearson proof uses the dominated likelihood-ratio supplier and test/risk interfaces already required. The singular-alternative region and boundary randomization are explicit; no other edge is missing.

VERDICT: no-drift

### uniformly-most-powerful-tests-and-monotone-likelihood-ratio

Design row 90 applies the likelihood-ratio ordering through MSF-08 and the exponential-family interface from MSF-05; both are manifest prerequisites. The two-sided nonexistence caveat is explicit.

VERDICT: no-drift

### gaussian-orthogonal-decomposition-and-quadratic-forms

Design row 91's Gaussian independence, projection, chi-square, and exact t/F claims use the declared normal/CLT, independence, Fourier-uniqueness, inner-product, and spectral suppliers. Positive denominator degrees of freedom and fixed-design rank conditions are stated.

VERDICT: no-drift

### confidence-sets-pivots-and-test-inversion

Design row 92's inversion claims use MSF-08 and MSF-35, with probability laws for the coverage definitions. The exact unknown-variance interval is supplied by the Gaussian page before this page's order; no further prerequisite is needed.

VERDICT: no-drift

### conditional-and-finite-group-exact-inference

Design row 93 uses conditional distributions for nuisance conditioning and finite probability for orbit masses; the manifest declares both along with MSF-05/08/10. Stabilizers, multiplicities, and ties are included in the local proof obligation.

VERDICT: no-drift

### asymptotic-convergence-consistency-and-identification

Design row 94's vector stochastic-order rules use the convergence, weak-law, model-identifiability, and convex-analysis suppliers listed in the manifest. The vector rules are proved locally rather than inferred from scalar Slutsky alone.

VERDICT: no-drift

### concentration-inequalities-and-tail-bounds

Design row 95's mgf bounds use probability/expectation, independence, and the conditional martingale Hoeffding supplier, all present in the manifest closure. The AC and bounded-increment conditions are stated.

VERDICT: no-drift

### symmetrization-rademacher-complexity-and-covering-entropy

Design row 96 explicitly uses `thm-sauer-shelah` to bound finite traces in the proof of `thm-vc-covering-entropy`; MSF-18/12 and independence alone did not put its home in this page's closure. The complete relevant argument in Jon A. Wellner, *Empirical Processes: Theory and Applications*, Chapter 1, §8, Theorems 8.1–8.2, pp. 60–62, first packs an L1-separated VC set family, samples to distinguish all traces, applies the Sauer–Shelah trace bound, and then transfers the set result to VC-subgraph functions by Fubini and a normalized product measure ([full source](https://sites.stat.washington.edu/jaw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf)). The existing local `thm-sauer-shelah` proof is in `items/thm-sauer-shelah.md`; its published home is `linear-algebra-methods-in-combinatorics (order 326)`. This is a significant supplier edge, recorded here for the owner; its direct and transitive in-run consumers are `chaining-uniform-laws-and-empirical-process-limits (order 1874)`, `sparse-high-dimensional-estimation-and-covariance (order 1880)`, `m-and-z-estimation-and-uniform-laws (order 1882)`, `delta-method-and-asymptotic-normality (order 1884)`, `likelihood-asymptotics-wald-score-and-likelihood-ratio (order 1886)`, `local-asymptotic-normality-contiguity-and-efficiency (order 1888)`, `boundary-and-misspecified-asymptotics (order 1890)`, `semiparametric-models-and-tangent-spaces (order 1898)`, `pathwise-differentiability-influence-functions-and-efficient-scores (order 1900)`, and `semiparametric-efficiency-and-regular-estimation (order 1902)`; their B companions inherit through their A pages. The local VC entropy proof remains required; the supplier is not being substituted for that theorem.

VERDICT: drift-applied — added prerequisite linear-algebra-methods-in-combinatorics (order 326).

### chaining-uniform-laws-and-empirical-process-limits

Design row 97's bracketing ULLN and empirical-process limit use MSF-19/18/12. The added Sauer–Shelah edge now enters transitively through MSF-19; the row states the measurability, envelope, and entropy conditions rather than relying on pointwise SLLN or finite-dimensional convergence alone.

VERDICT: no-drift

### minimax-lower-bounds-and-information-theoretic-methods

Design row 98's KL, Pinsker, Le Cam, Fano, Assouad, and product-additivity arguments use risk, likelihood, concentration, and the existing TV convention. Product/independence prerequisites are in the declared closure; loss geometry and convention are explicit.

VERDICT: no-drift

### decision-theoretic-upper-bounds-and-oracle-risk

Design row 99's projection and sparse-subset risk claims use risk, finite-sample estimation, concentration, and minimax bounds. The required finite-dimensional projection facts are already in the transitive closure; the stated BIC result is restricted to nonzero support size.

VERDICT: no-drift

### sparse-high-dimensional-estimation-and-covariance

Design row 100's Lasso, covariance, and minimax results use MSF-18/19/21 and the spectral theorem. The new MSF-19 supplier is inherited transitively; the distinct incoherence, directional-tail, and weak-\ell_q hypotheses are stated.

VERDICT: no-drift

### m-and-z-estimation-and-uniform-laws

Design row 101's consistency results use MSF-12, risk, and MSF-20 for the uniform law; their closures supply the iid-law and measurability prerequisites. M- and Z-estimators remain distinct.

VERDICT: no-drift

### delta-method-and-asymptotic-normality

Design row 102's delta and Z-estimator limits use MSF-12/13, weak convergence, matrix differentiation, and inner-product geometry; the CLT is already in the transitive closure. The local Donsker or stochastic-equicontinuity hypothesis is retained.

VERDICT: no-drift

### likelihood-asymptotics-wald-score-and-likelihood-ratio

Design row 103's regular MLE and Wald/score/LR limits use Fisher information plus the consistency, Z-estimation, and delta-method chain declared in the manifest. QMD, interiority, and the local expansion are explicit; no extra supplier is missing.

VERDICT: no-drift

### local-asymptotic-normality-contiguity-and-efficiency

Design row 104's QMD-to-LAN, contiguity, and local minimax results use MSF-15/21, CLT, and Hilbert geometry, all declared. The singular-component correction is explicit, and no unrestricted first-lemma equivalence is claimed.

VERDICT: no-drift

### boundary-and-misspecified-asymptotics

Design row 105's sandwich and tangent-cone limits use the delta, likelihood-asymptotic, and LAN suppliers already required. The uniform local expansion and tight-maximizer assumptions are stated; the uniform-maximum example is a counterexample, not a fallback theorem.

VERDICT: no-drift

### nonparametric-density-estimation-and-kernels

Design row 106's bias, variance, and MISE calculations use the estimator/probability interfaces and product-measure Fubini/Tonelli page declared. Smoothness, moment, bandwidth, and boundary qualifications are local to the claims.

VERDICT: no-drift

### nonparametric-regression-and-smoothing

Design row 107 treats the conditional mean as a version-dependent equivalence class and lists the required density, smoothness, and bandwidth conditions. MSF-24 and risk/conditional-expectation suppliers are in the closure; the ratio and moment-matrix fallback conventions are explicit.

VERDICT: no-drift

### splines-series-and-approximation-rates

Design row 108 declares risk/regression, Sobolev, trace, and inner-product prerequisites. The missing interpolation argument is already scoped as a local tridiagonal proof; the training-risk result is not misreported as test risk.

VERDICT: no-drift

### semiparametric-models-and-tangent-spaces

Design row 109's DQM scores, tangent-space closure, and nuisance orthogonality use dominated likelihoods, LAN, and Hilbert geometry, all declared. Boundary cones are kept separate from linear tangent spaces.

VERDICT: no-drift

### pathwise-differentiability-influence-functions-and-efficient-scores

Design row 110's Riesz representers and efficient-score projection use MSF-27/07/16 as direct suppliers. The local closure includes the required Hilbert projection result; estimator influence functions are distinguished from parameter derivatives.

VERDICT: no-drift

### semiparametric-efficiency-and-regular-estimation

Design row 111's AL information bound and separate regular-estimator convolution bound use the canonical-gradient, LAN, and iid CLT pages declared. No attainment theorem is inferred.

VERDICT: no-drift

### contamination-models-and-robust-risk

Design row 112's Huber modulus lower bound uses the risk and minimax/TV interfaces already required. The clean-model premise and tail-risk conclusion remain distinct from expected-risk claims.

VERDICT: no-drift

### robust-influence-and-breakdown

Design row 113's influence and replacement-breakdown results use the contamination and pathwise-differentiability pages declared, with differentiation, root-uniqueness, and median-density conditions stated locally.

VERDICT: no-drift

### robust-mean-estimation-under-heavy-tails

Design row 114's Hilbert mean, median, and trimming results use concentration, contamination, Hilbert geometry, Bochner integration, and trace-class suppliers, all declared. The atom-extension and contamination-range limitations remain explicit authoring obligations.

VERDICT: no-drift

### robust-covariance-and-high-dimensional-stability

Design row 115 keeps Huber covariance, block-sparse covariance, weak-\ell_q covariance, and clean finite-matrix-variance models separate; the minimax, contamination, robust-mean, and spectral suppliers are all declared.

VERDICT: no-drift

### sequential-testing-and-anytime-valid-inference

Design row 116's mixture e-process and Ville arguments use discrete-time martingale, bounded optional-stopping, and martingale-inequality suppliers. Conditional Fubini/product-measurability prerequisites are already in the transitive closure; no continuous-time result is assumed.

VERDICT: no-drift

### hilbert-valued-clt-for-weakly-dependent-functional-time-series

Design row 118 declares product extension/Fubini, finite-dimensional CLT, weak convergence, Hilbert, Bochner, and trace-class suppliers used by its curve-valued limit. The source-cited finite-dependent CLT is supplied locally with a block proof; the remaining transfer estimates are authoring obligations, not missing page edges.

VERDICT: no-drift

### conformal-prediction-and-exchangeable-ranks

Design row 119's rank, split, and full-conformal claims use probability, measurable maps, and estimator/kernel definitions in the manifest closure. Exchangeability and tie conventions are explicit; coverage is marginal only.

VERDICT: no-drift

## Checks

- `node tools/drift-review-check.mjs --run mathematical-statistics-foundations-37 --before-apply`: passed for all 37 A pages; decisions are valid, with engine materialization/buildability pending.
- `node tools/validate-plan.mjs research/plan-spec.json --run mathematical-statistics-foundations-37`: passed; declared page order is acyclic, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs. The validator emitted nonblocking redundant-prerequisite notices. All 74 pages have no item lists yet, as expected before authoring.
- Blockers: none identified in this drift review. The engine still owns materializing the applied prerequisite edge.
