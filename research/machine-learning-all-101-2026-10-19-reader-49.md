# Step 3a reader report — batch 49

Run: machine-learning-all-101-2026-10-19  
Role: reader-49  
Batch: 49

Verdict: reviewed the assigned scope independently. Four assigned items were repaired and validated. No uneditable defect or batch-local blocker remains.

## Opened inventory

Assigned pages:

| Page | Path | Verdict |
|---|---|---|
| neural-tangent-kernels-and-lazy-training (A) | library/machine-learning/neural-tangent-kernels-and-lazy-training.md | Draft page is frontmatter-only, has page_layout: compact-v1, lists the 12 assigned results, and has all four declared prerequisites. |
| neural-tangent-kernels-and-lazy-training-examples (B) | library/machine-learning/neural-tangent-kernels-and-lazy-training-examples.md | Draft companion is frontmatter-only, has page_layout: compact-v1, and lists all four assigned examples. |

The four prerequisite pages opened for context were automatic-differentiation-and-backpropagation, ml02-rkhs-svm, plancherel-measure-and-asymptotic-young-diagrams, and cost-constrained-gaussian-and-feedback-channels. Their page interfaces support the listed requirements; they are outside the editable batch. The assigned A/B pages have no summary bodies. No TikZ or tikzcd diagram occurs in an assigned item, and no diagram addition is required by the exposition.

Assigned items were read in dependency order:

1. def-neural-tangent-kernel
2. def-width-normalized-fully-connected-network
3. lem-gaussian-ltwo-hermite-completeness
4. lem-bivariate-gaussian-feature-expectations-continuous
5. lem-gaussian-activation-covariance-strictness-and-ntk-recursion
6. lem-gaussian-hermite-covariance-expansion
7. thm-positive-definite-kernel-flow-converges-for-attained-convex-cost
8. ex-finite-width-quadratic-network-has-changing-features-and-ntk
9. lem-biased-hermite-kernel-is-strictly-positive-definite
10. lem-fixed-time-lazy-training-stability
11. thm-sequential-infinite-width-ntk-limit
12. prop-ntk-positive-definite-on-the-sphere
13. ex-wide-tanh-network-lazy-on-a-fixed-time-horizon
14. thm-least-squares-ntk-mode-decay
15. ex-ntk-mode-wise-exponential-decay
16. ex-duplicate-inputs-make-ntk-gram-singular

The 38 published direct item suppliers opened at their relevant Definition/Statement and Facts & Assumptions sections were:

cor-cauchy-schwarz-for-random-variables; cor-expectation-linearity-monotonicity-and-modulus-bound; cor-exponential-reciprocal-and-positivity; cor-iid-finite-variance-weak-law; cor-mean-value-theorem; cor-real-spectral-theorem-for-self-adjoint-endomorphisms; cor-uniqueness-of-the-l-one-fourier-transform; def-axiom-of-choice; def-complex-exponential; def-convergence-in-probability; def-fourier-transform-on-l-one-of-rn; def-inner-product-space; def-monic-probabilists-hermite-polynomials; def-multivariate-normal-law; def-real-exponential-function-and-e; def-standard-normal-and-normal-laws; def-total-derivative-in-euclidean-space; lem-ac-supplies-sequential-choices-for-probability-constructions; lem-characteristic-function-of-a-multivariate-normal-law; lem-complex-exponential-series-converges-everywhere; lem-complex-lp-completeness-density-and-inner-product; lem-hermite-orthogonality-and-monomial-expansion; lem-l-one-fourier-transform-is-well-defined; lem-standard-normal-fourth-moment; thm-absolutely-continuous-functions-have-integrable-derivatives; thm-algebra-of-derivatives; thm-c1-lipschitz-ac-bv-hierarchy; thm-chain-rule; thm-chain-rule-for-total-derivatives; thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity; thm-derivative-of-exponential; thm-dominated-convergence; thm-exponential-addition-formula; thm-factorization-of-expectations-for-independent-variables; thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions; thm-heine-borel-rn; thm-picard-lindelof-local-existence-and-uniqueness; thm-tonelli-theorem-for-sigma-finite-product-spaces.

The two current-run draft suppliers in other batches were opened in full: batch 15's def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces and batch 38's thm-shared-parameter-backpropagation-gradient-formula. For the latter, I also opened alg-backpropagation-through-shared-parameter-recurrence, def-finite-straight-line-computational-program, and thm-reverse-mode-computes-gradient; the shared-parameter formula applies to the finite C1 network recurrence used here.

Run evidence reviewed: the batch 49 manifest, dependency-inputs, cross-batch dependency record, coverage record, proof contracts, and current .autopilot/machine-learning-all-101-2026-10-19 status. The live status still had batch 49 in the missing Step 3a reader set, with no task-local blocker.

## Mathematical source review

I read the relevant sections of Jacot, Gabriel, and Hongler, “Neural Tangent Kernel: Convergence and Generalization in Neural Networks” ([arXiv PDF](https://arxiv.org/pdf/1806.07572)). Section 2 (printed pp. 2–3) gives the fan-in normalization, bias scaling, and iid Gaussian initialization. Theorem 1 in §4.1 (printed pp. 4–5) gives the sequential initialization limit and recursive covariance/NTK formulas. Theorem 2 in Appendix A.2 (printed pp. 12–14) states uniform fixed-time NTK stability when the integrated training direction is stochastically bounded; Appendix A.3, Lemma 1 (printed pp. 14–16), supplies the normalized weight-drift control used in its proof. Appendix A.4, Lemma 2 (printed pp. 16–17), states the correlated-Gaussian Hermite covariance expansion. The batch proofs supply local arguments rather than treating these citations as substitutes for proof.

Theorem 1's recursion is $\Theta_\infty^{(1)}=\Sigma^{(1)}$ and $\Theta_\infty^{(\ell+1)}=\Theta_\infty^{(\ell)}\odot\dot\Sigma^{(\ell+1)}+\Sigma^{(\ell+1)}$, with $\dot\Sigma^{(\ell+1)}$ the Gaussian expectation of the two activation derivatives. Theorem 2 states that, for each fixed $T$ with stochastically bounded integrated direction, $\Theta^{(L)}(t)$ converges uniformly on $[0,T]$ in the sequential width limit to $\Theta_\infty^{(L)}\otimes I_{n_L}$. Appendix A.3 proves the corresponding normalized weight-change limit $\sup_{t\in[0,T]}\|(W^{(\ell)}(t)-W^{(\ell)}(0))/\sqrt{n_\ell}\|_{\rm op}\to0$ for each layer. Lemma 2 in Appendix A.4 gives $\widehat\mu(\rho)=\sum_{m\ge0}a_m^2\rho^m$ for a correlated standard-Gaussian pair with correlation $\rho$.

## Repairs

- In lem-biased-hermite-kernel-is-strictly-positive-definite, proof step 2.1 previously invoked Tonelli while reordering a binomial expansion whose terms can change sign when x·y < 0. I added the absolute-series calculation $\sum_r a_r^2(\alpha|x\cdot y|+\delta)^r\le\sum_r a_r^2<\infty$, using $|x\cdot y|\le1$ and $\alpha+\delta=1$. Tonelli on this nonnegative absolute series now justifies the reordering and the displayed power-series coefficients. The proof contract's step 2.1 claim was synchronized.

- In lem-fixed-time-lazy-training-stability and thm-sequential-infinite-width-ntk-limit, I made the width-indexed probability laws, initialization marginal, auxiliary randomness, and joint measurability of the direction and path explicit. I also spelled out the nested sequential limsup used by stochastic boundedness and recorded why the kernel supremum event is measurable: the kernel paths are continuous. These assumptions are required for the probability and supremum assertions to be defined. Their contracts now record the given hypothesis and measurability evidence.

- In the direct consumer ex-wide-tanh-network-lazy-on-a-fixed-time-horizon, I specified the unique measurable flow under the initialization law. Its verification now derives local continuous dependence from the local Lipschitz integral inequality and patches the flow over the finite time interval, establishing the measurability required by the stability theorem. The contract's step 2.1 claim was synchronized.

No stale verification.judge record was present in the four edited items.

## Validation

- Reflow: all four edited items reported unchanged.
- Precheck: all four edited items passed.
- node tools/proof-layout.mjs on the four edited paths: 4 items, 19 steps, 0 defects.
- The affected batch proof-contract JSON parses after the synchronized updates.

## Defects not repaired

None. No assigned page or dependency used in an assigned claim had a confirmed defect requiring an out-of-scope repair.

## Blocker

None.

## Coverage note

All 16 assigned items, both assigned pages, the required context pages, and the listed direct dependencies were opened. Published suppliers were checked at the exact definitions/statements and Facts & Assumptions used by the assigned proofs; I did not independently re-prove every published supplier's full proof. The current-run batch 15 and 38 suppliers relevant to this batch were read in full, with additional supporting gradient-formula sources opened as listed above.
