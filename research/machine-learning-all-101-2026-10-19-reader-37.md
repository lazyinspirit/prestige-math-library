# Step 3a reader report — batch 37

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Output: `research/machine-learning-all-101-2026-10-19-reader-37.md`

## Scope and opened inventory

Read `CLAUDE.md`, `README.md`, `briefs/reader.md`, the batch manifest, the current run status, and the applicable item and workflow schema clauses. The manifest assigns two pages and 49 items. Both page files and every assigned item below were opened. Each result was checked against its suppliers' current statements. One manifest ordering anomaly listed `thm-neural-operator-input-output-spaces-have-ap` before its in-batch supplier `lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains`; I opened that supplier later and rechecked the theorem against it before final adjudication.

Assigned pages:

- `library/machine-learning/neural-operators-and-physics-informed-learning.md` — A page.
- `library/machine-learning/neural-operators-and-physics-informed-learning-examples.md` — B page.

Assigned A-page items (42):

`def-discretization-invariant-operator-family`, `def-physics-informed-neural-network-loss`, `def-shin-elliptic-divergence-form-operator`, `def-shin-parabolic-operator-and-boundary`, `lem-pinn-random-samples-are-space-filling`, `lem-shin-pinn-all-scale-cell-mass-assumption-inconsistent`, `lem-shin-radial-smooth-cutoff`, `lem-neural-operator-compact-union-under-uniform-convergence`, `thm-neural-operator-input-output-spaces-have-ap`, `alg-empirical-pinn-objective`, `def-neural-operator`, `def-neural-operator-activation-classes`, `lem-shin-elliptic-energy-estimate`, `lem-shin-elliptic-residual-stability`, `lem-shin-bounded-open-set-hilbert-evolution-triple`, `lem-shin-parabolic-energy-estimate`, `lem-shin-parabolic-residual-stability`, `lem-finite-sampling-reconstruction-bridge-for-neural-operator-quadratures`, `alg-neural-operator-mesh-discretization`, `cex-pinn-regularization-thresholds-need-balanced-sample-counts`, `cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain`, `fs-shin-global-holder-dirichlet-claim`, `def-fourier-neural-operator-layer`, `lem-neural-operator-ba-class-is-empty-as-defined`, `lem-neural-operator-kernel-riemann-sums-uniform-on-compact-inputs`, `lem-pinn-residual-loss-from-fill-distance`, `lem-shin-interior-parabolic-schauder-estimate`, `lem-shin-parabolic-classical-approximation-and-boundary-attainment`, `lem-shin-zero-data-parabolic-classical-energy-identification`, `thm-shin-parabolic-initial-boundary-existence-and-residual-stability`, `thm-neural-operator-discretization-invariance`, `lem-pinn-cell-occupancy-controls-uniform-residual`, `thm-pinn-regularized-loss-consistency`, `lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap`, `lem-shin-uniform-boundary-schauder-estimate-for-smooth-dirichlet-approximants`, `thm-shin-elliptic-dirichlet-existence-and-residual-stability`, `thm-pinn-linear-elliptic-consistency`, `thm-pinn-linear-parabolic-consistency`, `thm-neural-operator-compact-uniform-universality`, `lem-ap-finite-dimensional-factorization-of-continuous-maps`, `lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains`, and `lem-smooth-integral-functionals-approximate-on-compact-function-sets`.

Assigned B-page examples (7):

`ex-non-global-training-stationary-point`, `ex-sparse-pinn-collocation-aliases-residual`, `ex-fourier-neural-operator-layer-and-claim-boundary`, `ex-neural-operator-grid-refinement-vs-fixed-grid-network`, `cex-neural-operator-sup-norm-discretization-does-not-control-c1`, `cex-raw-neural-operator-local-term-needs-input-reconstruction`, and `ex-pinn-small-scale-cube-sampling-has-instances`.

The 101 unique external direct dependencies in the manifest were opened at their operative statement/definition sections:

```text
cor-compact-domain-maps-are-uniformly-continuous, cor-real-and-euclidean-vector-valued-ascoli-arzela, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, cor-regular-level-set-local-graph-theorem
def-approximation-property-and-bounded-approximation-property, def-axiom-of-choice, def-banach-space, def-bounded-c-k-domain-and-boundary-charts
def-ck-and-multi-index-notation-in-several-variables, def-continuous-real-functions-on-a-compact-metric-space, def-countable-choice, def-feedforward-neural-network
def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-independent-random-elements, def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set
def-laplacian-of-a-c2-function, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-measure, def-measure-space
def-metric-compactness, def-metric-continuity, def-metric-space, def-metric-topology
def-parabolic-cylinder-and-parabolic-boundary, def-parabolic-evolution-triple-and-energy-space, def-probability-measure, def-product-topology
def-sobolev-space-wkp-and-its-norm, def-totally-bounded, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure
lem-classical-derivatives-are-weak-derivatives, lem-complex-translation-and-approximate-identity-interfaces, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-finite-ambient-partitions-for-euclidean-boundary-integration
lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, lem-heat-kernel-normalisation-scaling-and-derivatives, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-mollification-commutes-with-weak-derivatives-in-the-interior
lem-normal-second-derivative-recovered-from-the-elliptic-equation, lem-parabolic-energy-pairing-and-trace, lem-parabolic-weak-compactness-separable-bochner-hilbert, lem-positive-part-is-an-admissible-weak-test-by-truncation
lem-schwartz-cutoffs-from-the-standard-smooth-step, lem-smooth-bump-between-concentric-euclidean-balls, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, lem-smooth-sphere-data-have-a-harmonic-replacement
lem-sobolev-norm-is-well-defined-and-definite, lem-sobolev-trace-agrees-with-continuous-boundary-values, lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary, lem-test-function-cutoffs-and-euclidean-localization
lem-w-one-two-is-a-hilbert-space, lem-weak-leibniz-rule-with-a-smooth-factor, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-measure-monotonicity
thm-algebra-of-derivatives, thm-arzela-ascoli-for-real-ck, thm-bessel-inequality-and-finite-parseval-identity, thm-chain-rule-for-total-derivatives
thm-compact-implies-complete-and-totally-bounded, thm-continuous-image-of-a-compact-space-is-compact, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-coordinate-map-for-a-finite-dimensional-normed-space
thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, thm-differentiation-under-the-integral-sign, thm-dirichlet-problem-on-a-ball-by-the-poisson-integral, thm-dominated-convergence
thm-extension-theorem-for-bounded-smooth-domains, thm-extreme-value-metric, thm-finite-and-countable-subadditivity-of-measures, thm-finite-products-of-compact-spaces
thm-first-borel-cantelli, thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems, thm-global-h-two-dirichlet-regularity, thm-gram-schmidt-orthonormalisation
thm-heat-kernel-is-the-causal-fundamental-solution, thm-heine-borel-rn, thm-heine-cantor-metric, thm-higher-order-sobolev-embedding
thm-holder-inequality-for-integrals, thm-interior-derivative-estimates-for-harmonic-functions, thm-interior-h-k-plus-two-elliptic-regularity, thm-interior-schauder-estimate-for-uniformly-elliptic-equations
thm-kernel-of-the-trace-is-w-one-p-zero, thm-l-one-approximate-identities-converge-in-l-p, thm-locally-integrable-functions-embed-in-distributions, thm-minkowski-integral-inequality
thm-morse-sard-for-euclidean-maps, thm-newtonian-potential-for-holder-data-is-classical, thm-parabolic-variational-wellposedness-and-energy-stability, thm-poincare-inequality-for-w-one-p-zero
thm-polar-coordinates-formula-for-lebesgue-measure, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, thm-reference-simplex-sobolev-extension, thm-riesz-fischer-completeness-of-l-p
thm-riesz-representation-for-hilbert-space, thm-single-hidden-layer-universal-approximation, thm-tietze-extension-theorem, thm-weak-maximum-principle-for-the-laplacian
thm-young-inequality-real-exponents
```

## Review and repair

Confirmed and repaired `items/lem-shin-elliptic-energy-estimate.md`, Step 3.1. The former Cauchy/Young line bounded the $\|e\|_2^2$ term by coefficient $1/(2\lambda_0)$ while retaining coefficient $1/(2\lambda_0)$ on $\|L[e]\|_2^2$. The stated inequality requires the paired coefficient $\lambda_0/2$ on $\|e\|_2^2$; the former bound fails when $\lambda_0>1$. The corrected derivation uses the exact square inequality
$$xy\le \frac{x^2}{2\lambda_0}+\frac{\lambda_0y^2}{2},$$
and obtains
$$\|\nabla e\|_2^2\le\lambda_0^{-2}\|L[e]\|_2^2+(1+4v^2)\|e\|_2^2,$$
so $C_E=\max\{\lambda_0^{-2},2+4v^2\}$ is valid. I also made the L2 Cauchy–Schwarz prerequisite explicit through the published `thm-holder-inequality-for-integrals` dependency and Fact F4. Updated that item’s Step 1.1–3.1 proof-contract claims and added the F4 source citation in `research/machine-learning-all-101-2026-10-19-batch-37.proof-contracts.json`.

No `verification.judge` record was present on the repaired item; its verification field held only the prior precheck result. Checks after the final item edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-shin-elliptic-energy-estimate.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-shin-elliptic-energy-estimate.md` — PASS.
- `node tools/proof-layout.mjs items/lem-shin-elliptic-energy-estimate.md` — 1 item, 3 steps, 0 defects.

I found no other confirmed defects in the assigned items or pages. The existing `fs-shin-global-holder-dirichlet-claim` remains present with its refutation; I did not withdraw it. No uneditable mathematical defect was identified, so the findings array is empty.

## Page verdicts and diagrams

- `neural-operators-and-physics-informed-learning`: pass. The A-page is YAML frontmatter only, retains its 42-item inventory, draft status and `page_layout: compact-v1`, and has no summary body.
- `neural-operators-and-physics-informed-learning-examples`: pass. The B-page is YAML frontmatter only, retains all seven example entries, draft status and `page_layout: compact-v1`, and has no summary body.
- The sole TikZ diagram in the assigned items is in `def-neural-operator`. Its input, pointwise lift, integral layers, pointwise projection and output labels and arrow directions agree with the text. The proof does not rely on the diagram. No diagram repair or addition was needed.
- Assigned statement/definition/example sections were uninterrupted by hyperlinks; references remain after each complete section. No page body summary was authored or repaired.

## Sources consulted and limitations

Read the relevant full passages of Shin et al., [*On the convergence of physics informed neural networks for linear second-order elliptic and parabolic type PDEs*](https://arxiv.org/pdf/2004.01806), including Assumption 3.1 (PDF p. 8), Assumptions 3.2–3.4 (PDF pp. 10–12), Appendix C’s Theorem 3.2 argument (PDF pp. 24–25), Appendix D (PDF p. 25), and Appendices F–G (PDF pp. 26–28). The source prints the all-$\varepsilon>0$ cell-mass quantifier and its regularizer-coordinate comparison; the assigned local counterexamples and corrected small-scale arguments preserve those distinctions.

Opened the relevant sections of Kovachki et al., [*Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs*](https://arxiv.org/pdf/2108.08481): Definition 4 (§1.1, PDF pp. 1–2), Theorem 8 (§8.2, PDF p. 50), Definitions 5–7 (PDF p. 49), and the discretization proof in Appendix E (PDF pp. 91–92). The assigned $C^1$ counterexample addresses the source’s continuous-embedding-to-$C(\bar D)$ norm reduction; the repaired discretization theorem states the actual output norm hypotheses separately.

For the assigned operator-universality theorem’s finite-dimensional activation step, opened Leshno, Lin, Pinkus, and Schocken, [*Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function*](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf): Theorem 1 (PDF p. 10) and its proof Steps 1–7 (PDF pp. 12–19). Its locally essentially bounded, almost-everywhere-continuous activation class and nonpolynomial-a.e. hypothesis support the compact-uniform approximation claim used here.

Coverage note: all assigned carrier bodies, both pages, and the 101 unique direct supplier claim sections were opened. The one manifest ordering anomaly noted above was corrected in the final claim review, though that consumer file had been opened before its supplier. This was a batch review, not an independent re-proof of every supplier's entire transitive dependency proof; conclusions are limited to the operative supplier statements and arguments actually used in these assigned items. The run status showed a separate `3a-split` blocker (`split-8` failed three times for batch 8); no batch-37-specific blocker was identified. At status check, the run status did not yet list `reader-37` in its in-flight roster.
