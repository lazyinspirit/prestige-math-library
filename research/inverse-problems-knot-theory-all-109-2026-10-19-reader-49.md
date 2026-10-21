# Step 3a reader report — batch 49

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Opened inventory

### Assigned pages

| Page | File | Verdict |
|---|---|---|
| `plug-and-play-mmse-regularization` (A) | `library/inverse-problems/plug-and-play-mmse-regularization.md` | Pass. Draft status and compact layout are preserved; its four item IDs match the manifest. The body is empty. |
| `plug-and-play-mmse-regularization-examples` (B) | `library/inverse-problems/plug-and-play-mmse-regularization-examples.md` | Pass. Draft status and compact layout are preserved; its three example IDs match the manifest and it requires the A page. The body is empty. |

### Assigned items, read in dependency order

- `lem-ip-tweedie-mmse-jacobian-and-prox-potential` — statement, facts, proof, citations, metadata, and batch proof contract.
- `def-ip-pnp-ista-with-denoiser` — definition, references, metadata, and data-flow diagram.
- `thm-ip-exact-mmse-pnp-ista-stationarity` — statement, facts, proof, citations, metadata, and batch proof contract.
- `rem-ip-arbitrary-denoiser-has-no-inherited-objective` — remark, facts, verification, citations, metadata, and batch proof contract.
- `ex-ip-scalar-mmse-exact-denoiser` — example, facts, verification, citations, metadata, and batch proof contract.
- `cex-ip-pnp-iterative-awgn-error-model` — refuted statement, facts, counterexample, citations, metadata, and batch proof contract.
- `ex-ip-approximate-cnn-mmse-denoiser` — example, facts, verification, citations, metadata, network diagram, and batch proof contract.

### Dependency material opened

I read the exact Definition or Statement sections for the direct suppliers used by the assigned proof steps: `def-ip-learned-reconstruction-estimator`, `def-euclidean-inner-product`, `def-probability-measure`, `def-ck-and-multi-index-notation-in-several-variables`, `thm-differentiation-under-the-integral-sign`, `thm-dominated-convergence`, `thm-derivative-of-exponential`, `thm-logarithm-derivative-and-integral`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `def-ck-euclidean-maps-and-diffeomorphisms`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `cor-mean-value-theorem`, `def-measure-with-density`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-monotone-convergence-for-the-integral`, `lem-l-smoothness-descent-inequality`, `def-lipschitz-holder-contraction`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `thm-exponential-addition-formula`, `def-axiom-of-choice`, `def-standard-normal-and-normal-laws`, and `lem-normal-location-scale-density`.

I additionally opened the complete relevant proofs of `thm-finite-and-countable-subadditivity-of-measures`, `thm-cauchy-schwarz-and-the-euclidean-norm`, and `lem-l-smoothness-descent-inequality`. The first two were added as direct suppliers to the repaired items. `def-ip-learned-reconstruction-estimator` is a draft dependency in the current run; its denoiser definition supplies Borel measurability and has no defect relevant to this batch.

## Independent mathematical review

- The Gaussian posterior normalization, finite-moment argument, differentiation under the integral, covariance Jacobian, strict positive definiteness, injectivity, open image, and global proximal-minimizer argument in `lem-ip-tweedie-mmse-jacobian-and-prox-potential` are sound under its stated assumptions. Its Gaussian kernel uses an unnormalized constant, which cancels in the posterior. Relative to the cited normalized Gaussian convolution, this changes the negative log by a constant and hence changes the potential by a constant; the local proof directly establishes the claimed minimizer for the defined potential.
- The stationarity theorem handles an arbitrary initial point, including one outside the finite-valued domain of the extended-real objective. Its conclusions are limited to monotone objective values and vanishing gradient on the open image; it does not claim iterate convergence or global optimality.
- The scalar two-point posterior calculation gives the stated hyperbolic-tangent map. The biased one-pixel network has uniform error `|b|` and differs at zero. The quadratic-denoiser witness has `z₂=(ε+2)²/8−1/2`, is bounded below by `−1/2`, and has positive-probability output in two disjoint intervals; therefore it is nonconstant and non-Gaussian.
- The remark’s two-minimizer comparison yields the necessary monotonicity inequality for every global proximal selection, which the map `z ↦ −z` violates for distinct inputs.
- The CNN diagram’s stages and labels match the displayed composition. The PnP diagram’s straight arrows match the single update. Its original curved return arrow connected `x_t` to a node labelled `x_{t−1}` without showing the next-step index shift; I removed that ambiguous feedback edge. The recurrence remains the complete definition of iteration.
- Every assigned statement, definition, remark, example description, and refuted statement is uninterrupted by hyperlinks. Its links appear in the immediately following correctly named references section. Neither assigned page contains a summary body.

## Repairs and evidence

1. In `lem-ip-tweedie-mmse-jacobian-and-prox-potential`, step 1.1 used countable subadditivity without identifying its supplier. I added `thm-finite-and-countable-subadditivity-of-measures` to `deps`, added `[F19]`, and stated the inequality that forces some likelihood level set to have positive measure. In step 3.1 I tagged the chain-rule use and made explicit why the reciprocal derivative implies smoothness of `log` on the positive reals. In step 5.1 I cited `[F16]` and wrote the integral lower bounds that imply the zero-measure level sets and equality of the posterior and prior null sets. These repairs are supported by the cited published statements and the locally established density identity in step 1.1.

2. In `thm-ip-exact-mmse-pnp-ista-stationarity`, step 1.2 used the triangle inequality and positive homogeneity of the Euclidean norm to bound `∇r_t`. The Euclidean inner-product definition explicitly says those norm laws are proved separately. I added `thm-cauchy-schwarz-and-the-euclidean-norm` to `deps` and `[F6]` to state and cite the exact norm laws used. No theorem statement changed, so there was no statement-change consumer repair.

3. In `def-ip-pnp-ista-with-denoiser`, I removed the unindexed feedback edge from the one-update diagram. The recurrence and the two correct left-to-right data-flow arrows are unchanged.

The batch proof contract was updated for the changed fact-use mappings: lemma facts F7, F16, and F19, and theorem fact F6. The changed items had no `verification.judge` records to remove. No other assigned defect remained.

## Source checks

- [Xu, Sun, Liu, Wohlberg, and Kamilov, *Provable Convergence of Plug-and-Play Priors with MMSE Denoisers*](https://arxiv.org/pdf/2005.07685): §1 equations (6a)–(6b) gives the PnP-ISTA update; §2 Assumptions 1–3 and Theorem 1 state the nondegeneracy, Lipschitz-gradient, lower-bound, stepsize, monotonicity, and stationarity claims; Appendix A.1 equations (9)–(12) gives Tweedie’s formula and the MMSE proximal potential; Appendix A.2 gives the majorization and summable-residual argument. Section 3, pp. 3–4, describes the per-iteration AWGN modeling limitation; pp. 3–4 also document the DnCNN approximate-MMSE experiment.
- [Gribonval and Nikolova, *On Bayesian Estimation and Proximity Operators*](https://arxiv.org/pdf/1807.04021): Proposition 3 in §2.5 (additive white Gaussian denoising) states that Gaussian-noise posterior means admit possibly nonconvex penalties and that nondegeneracy gives an injective map with a unique global minimizer; §2.1 Corollary 2 gives the positive-Jacobian proximal criterion; §2.5.1 and Appendix A.4 verify the Gaussian case and its derivative formula.
- [Parikh and Boyd, *Proximal Algorithms*](https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf): §1.1, pp. 124–125, restricts the standard proximal definition to closed proper convex penalties; §4.2.1, equations (4.7)–(4.8), gives the smooth quadratic majorizer used for proximal-gradient descent.

The cited source statements are consistent with the item’s source notes. The assigned proofs establish their claims locally; the citations are contextual and are not substituted for those local proofs.

## Validation and blockers

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-ip-tweedie-mmse-jacobian-and-prox-potential.md items/def-ip-pnp-ista-with-denoiser.md items/thm-ip-exact-mmse-pnp-ista-stationarity.md` — exit 0; all three files were already correctly flowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-ip-tweedie-mmse-jacobian-and-prox-potential.md` — pass.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-ip-pnp-ista-with-denoiser.md` — 0 proofs checked, 0 failures (not applicable).
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-ip-exact-mmse-pnp-ista-stationarity.md` — pass.
- `node tools/proof-layout.mjs items/lem-ip-tweedie-mmse-jacobian-and-prox-potential.md items/def-ip-pnp-ista-with-denoiser.md items/thm-ip-exact-mmse-pnp-ista-stationarity.md` — 3 items, 17 steps, 0 defects.

No blocker remains. No uneditable finding remains in the reviewed proof-use path.

## Coverage note

The batch manifest’s recursive dependency graph contains 1,033 items. I opened the assigned pages and items, all direct supplier sections needed by their proof steps, and the additional transitive results needed to verify the disputed norm and measure inequalities; I did not audit all unrelated items in that transitive closure or re-prove every published supplier. No batch-49 rendered source-evidence bundle was present in the run artifact inventory, so I used the current item/page files, the batch-49 proof contract, and the exact cited source sections. The current-run status showed batch 49 still outstanding in `3a-read` when I began.
