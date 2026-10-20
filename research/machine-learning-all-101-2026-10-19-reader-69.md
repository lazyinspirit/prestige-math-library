# Step 3a reader report — batch 69

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Review date: 2026-10-20

## Opened inventory

Assigned pages:

- `library/machine-learning/conditional-flow-matching-and-transport-paths.md` (A page)
- `library/machine-learning/conditional-flow-matching-and-transport-paths-examples.md` (B page)

Assigned items, read in dependency order:

- `def-probability-path-and-velocity-field`
- `lem-affine-conditional-path-velocity`
- `lem-affine-dilation-is-quadratic-cost-optimal`
- `lem-conditional-mixture-is-a-probability-path`
- `lem-conditional-to-marginal-continuity-equation`
- `thm-gaussian-conditional-optimal-transport-map`
- `thm-conditional-flow-matching-gradient-identity`
- `ex-gaussian-prior-to-data-conditional-interpolation`
- `ex-mixture-of-straight-paths-has-nonlinear-marginal-velocity`
- `alg-flow-matching-training-and-sampling`
- `lem-flow-matching-training-and-exact-sampling-properties`

Required external pages opened:

- `library/machine-learning/compact-metric-kantorovich-rubinstein-duality.md`
- `library/machine-learning/neural-odes-and-continuous-normalizing-flows.md`

Direct item suppliers opened for their relevant Definition or Statement sections:

- Measure and integration: `def-borel-sigma-algebra`, `def-measure`, `def-probability-measure`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `cor-mean-value-theorem`, `thm-dominated-convergence`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-integral-triangle-inequality`.
- Euclidean and probability interfaces: `def-euclidean-inner-product`, `def-law-or-distribution-of-a-random-element`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `lem-law-of-a-random-element-is-a-probability-measure`, `thm-change-of-variables-for-expectation`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `cor-cauchy-schwarz-for-random-variables`, `def-conditional-expectation-given-a-sigma-algebra`, `thm-independent-random-elements-have-product-joint-law`.
- Gaussian and calculus interfaces: `def-axiom-of-choice`, `def-standard-normal-and-normal-laws`, `def-multivariate-normal-law`, `thm-nondegenerate-multivariate-normal-law-has-density`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-derivative-of-exponential`, `thm-extreme-value-metric`, `def-real-exponential-function-and-e`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `cor-exponential-reciprocal-and-positivity`.
- Neural ODE interfaces: `def-neural-ode` and `thm-neural-ode-global-smooth-flow`.

I read the complete Proof sections of `thm-neural-ode-global-smooth-flow` and `thm-tonelli-theorem-for-sigma-finite-product-spaces`. No defect affecting this batch's use of either supplier was found. The compact-metric KR page is a scheduled page requirement only; no assigned item makes a KR or Wasserstein-1 claim.

No Step 3a reader-specific rendered evidence bundle was found in the active run state or batch-specific evidence paths. I used the live batch manifest, dependency-input record, proof contracts, current assigned carriers, and the supplier interfaces above.

## Source review

I checked the cited flow-matching sources at their relevant sections:

- [Lipman et al., *Flow Matching for Generative Modeling*](https://arxiv.org/html/2210.02747): §3.1 Theorem 1 and Appendix A on marginalization; §3.2 Theorem 2 and its Appendix A proof; §4 Theorem 3 and its Appendix A proof; §4.1's linear Gaussian path; and §6.2's exact ODE sampling description. The paper explicitly assumes Leibniz regularity for the marginal PDE and sufficient decay/boundedness for its objective calculation. The assigned items give local integrability and derivative-majorant hypotheses instead.
- [Holderrieth and Erives, *Introduction to Flow Matching and Diffusion Models*](https://arxiv.org/html/2506.02070): §§3.1–3.3, including the direct proof of Theorem 12 and Algorithm 3. The proof expands the two squared losses and identifies the parameter-independent conditional variance term.
- [Fjelde, Mathieu, and Dutordoir, *An Introduction to Flow Matching*](https://mlg.eng.cam.ac.uk/blog/2024/01/20/flow-matching.html): “Gaussian probability paths,” including the affine inversion derivation and linear schedule.
- [Peyré and Cuturi, *Computational Optimal Transport*](https://arxiv.org/html/1803.00567): §2.6 Remark 2.31, equations (2.40)–(2.42), for Gaussian transport context. The assigned affine-dilation optimality proof is local and does not rely on the source's Brenier argument.

The one TikZ diagram, in `ex-gaussian-prior-to-data-conditional-interpolation`, has the correct line segments for $a=1$, $\sigma_{\min}=1/4$: $-1\mapsto0.75$, $0\mapsto1$, and $1\mapsto1.25$. It illustrates the affine trajectories described in the text. No other assigned item contains a diagram, and no additional diagram is needed for the exposition.

## Repairs

- `thm-conditional-flow-matching-gradient-identity`, Proof 1.3: replaced the unsupported invocation of chain and product rules with the bilinear difference-of-squares identity and its limit. The definition supplier `def-euclidean-inner-product` states symmetry and bilinearity, and the item hypothesis supplies differentiability in the parameter.
- `lem-flow-matching-training-and-exact-sampling-properties`, Proof 1.1: explicitly derived the sample squared-loss gradient ζ coordinatewise from the same bilinear identity. The prior citation to `def-euclidean-inner-product` alone did not establish that derivative formula.
- `ex-mixture-of-straight-paths-has-nonlinear-marginal-velocity`, Facts & Assumptions [F6] and Verification 3.1: corrected the claim attributed to the exponential definition, which only defines the real exponential by its power series. The proof now derives $\exp(0)=1$ from the addition formula and positivity; strict increase then gives $\exp(2y)>1$ for $y>0$.

No `verification.judge` record was present in these three edited item frontmatters. I regenerated their entries in `research/machine-learning-all-101-2026-10-19-batch-69.proof-contracts.json`.

Validation after the repairs:

- `reflow.mts`: unchanged for all three edited items.
- `precheck.mts`: PASS for all three edited items.
- `proof-contract.mjs --strict` on the three edited entries: `ok: true`, no errors or warnings.
- One batched `proof-layout.mjs` invocation on the three changed item paths: 3 items, 11 steps, 0 defects.

## Defects not repaired

None. I found no confirmed defect in another-batch or published dependencies that affects an assigned claim.

## Page verdicts

- `conditional-flow-matching-and-transport-paths`: no page defect found. The A page has frontmatter only, `page_layout: compact-v1`, and its nine-item inventory and two `requires` entries match the assigned manifest.
- `conditional-flow-matching-and-transport-paths-examples`: no page defect found. The B page has frontmatter only, `page_layout: compact-v1`, no core items, and the two examples and required A page match the manifest.

## Coverage and blocker

I reviewed all assigned items and pages, and the direct supplier interfaces needed for the claims. I did not recursively audit every transitive proof behind the published suppliers. The live run status at `2026-10-19T13:00:20Z` showed no worker in flight; batch 69 was still listed as missing from `3a-read`. The run also had a separate `3a-collect` blocker: `collect-57` had failed three times. There is no mathematical blocker local to this review.
