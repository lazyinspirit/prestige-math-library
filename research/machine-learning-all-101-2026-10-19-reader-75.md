# Step 3a reader report — batch 75

Run: `machine-learning-all-101-2026-10-19`  
Reviewer role: `reader`  
Review date: 2026-10-20

## Opened inventory

Assigned pages:

- `mirror-descent-and-adaptive-regularization` — draft A page; its body is empty and `page_layout` is `compact-v1`.
- `mirror-descent-and-adaptive-regularization-examples` — draft B page; its body is empty and `page_layout` is `compact-v1`.

The three A-page requirements were also opened: `convex-and-semicontinuous-functions-on-rn` (published), `hedge-and-online-gradient-descent` (draft), and `trust-region-and-cubic-regularization-methods` (published). The B page requires the assigned A page.

All 16 manifest items were read in supplier-first order:

- `def-mirror-map-and-bregman-divergence`
- `lem-psd-matrix-has-unique-psd-square-root`
- `lem-bregman-three-point-identity`
- `lem-bregman-divergence-nonnegative`
- `lem-negative-entropy-geometry-of-simplex`
- `alg-adagrad`
- `lem-adagrad-accumulated-gram-matrix-is-psd`
- `alg-online-mirror-descent`
- `lem-adagrad-projection-exists`
- `lem-adagrad-diagonal-scale-coordinatewise`
- `lem-mirror-descent-bregman-projection-exists`
- `thm-mirror-descent-regret`
- `fs-mirror-descent-halved-regret-constants`
- `ex-adagrad-singular-adaptive-metric`
- `ex-negative-entropy-mirror-descent-on-simplex`
- `ex-euclidean-mirror-descent-is-projected-ogd`

The direct published item suppliers opened were `def-convex-subset-of-euclidean-space`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-euclidean-inner-product`, `def-jacobian-matrix-and-gradient`, `def-metric-topology`, `def-metric-interior-closure-boundary`, `def-metric-bounded-diameter`, `def-hessian-and-euclidean-critical-point`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `def-matrix-product-and-identity-matrix`, `thm-matrix-multiplication-laws`, `thm-of-square-roots`, `def-moore-penrose-pseudoinverse`, `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-algebra-of-derivatives`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, `cor-second-derivative-characterises-convexity`, `thm-finite-jensen-inequality-in-euclidean-space`, `lem-natural-logarithm-bounded-by-argument`, `def-transpose-of-a-matrix`, `lem-of-sign-rules`, `def-subgradient-and-subdifferential`, `thm-differentiable-convex-functions-and-gradient-inequality`, `def-semicontinuity-on-euclidean-subsets`, `thm-euclidean-semicontinuous-extreme-value-theorem`, `thm-heine-borel-rn`, `def-natural-logarithm`, and `def-real-exponential-function-and-e`.

Current-run direct suppliers outside this batch were also opened: `def-online-decision-protocol`, `def-adversary-and-feedback-model`, and `def-static-dynamic-and-strongly-adaptive-regret` from batch 73; `alg-hedge` and `alg-online-gradient-descent` from batch 74. No defect was found in the portions needed by batch 75.

## Findings and repairs

1. In `alg-online-mirror-descent`, initialization selected a minimizer of $R$ on $K$ from $U\cap K$, while the well-definedness lemma proves only that the unique minimizer on $K$ exists, not that it lies in $U$. This distinction can matter: with $K=[0,1]$, $U=(0,1)$, and $R(x)=(x-2)^2$, all mirror-regularizer hypotheses hold but the unique minimizer is $1\notin U$. I made the existing admissibility condition explicit: the unique minimizer must lie in $U$, and the algorithm initializes there. The theorem and examples in this batch already satisfy that condition. I refreshed the five in-scope proof-contract citations that quote this algorithm definition. The algorithm has no separate proof-contract row in the batch contract file.

2. `lem-negative-entropy-geometry-of-simplex` and `ex-negative-entropy-mirror-descent-on-simplex` used labels $q_1,\ldots,q_{n-1}$ in $\mathbb R^{n-1}$ without mapping them to the library's zero-based function-space coordinates. I made the one-based probability labels and the map $v_i=v(i-1)$ explicit, and wrote the index range $1\le i<n$ in the simplex conditions. The underlying simplex, Hessian, update, and claims are unchanged. I refreshed the example's proof-contract quotation of the entropy lemma statement.

No stale `verification.judge` record was present on the three edited carriers. No other item or page was edited. Apart from the contract corrections below, the other inspected claims, proofs, witnesses, computations, definitions, contracts, and references checked out. In particular, the one-round witness in `fs-mirror-descent-halved-regret-constants` refutes both halved constants and remains present for its owner.

The batch proof contract also had two stale entries, which I corrected in the assigned contract file: the endpoint worksheet for `lem-bregman-divergence-nonnegative` referred to a nonexistent step 2.2, although the boundary limit is in step 2.1; and F3 for `ex-euclidean-mirror-descent-is-projected-ogd` quoted an earlier Batch 74 `alg-online-gradient-descent` definition and did not match the current source section. The current OGD definition still supplies the projected one-step map used by the example. These corrections changed no other batch or item.

## Page verdicts

- `mirror-descent-and-adaptive-regularization`: pass after the two repairs above. The page inventory matches its 13 listed items, required pages resolve, the body is empty, and compact layout is preserved.
- `mirror-descent-and-adaptive-regularization-examples`: pass after the coordinate-label clarification. The page inventory matches its three listed examples, its A-page requirement resolves, the body is empty, and compact layout is preserved.

No TikZ or tikzcd diagram occurs in the assigned pages or items; none is needed for these definitions, algorithms, or arguments.

## Sources and validation

The cited source locations were checked against the source documents. Elad Hazan, *Introduction to Online Convex Optimization*, second edition, §5.1 (printed pp. 71–77; PDF pp. 93–99), §5.3.2 (printed pp. 79–80; PDF pp. 100–101), §5.4.2 (printed pp. 82–83; PDF pp. 103–104), and §5.6 (printed pp. 91–96; PDF pp. 112–117), [source PDF](https://arxiv.org/pdf/1909.05207). Theorem 5.6 at §5.3.2 states the two halved constants preserved by the false-statement item; the local one-round witness refutes them under the stated assumptions. The multiplicative update appears in §5.4.2, and Algorithm 19's AdaGrad updates appear in §5.6. John Duchi, Elad Hazan, and Yoram Singer, “Adaptive Subgradient Methods for Online Learning and Stochastic Optimization,” §2, Figure 1 and Algorithm 1, PDF pp. 8–10, [source PDF](https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf). Peter Bartlett's *Mirror Descent* lecture notes support the agile update on slide 25, exponential weights on slide 26, and the regret proof and Pythagorean step on slides 28–30, [source PDF](https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf). Orabona's sources were checked at the cited Bregman-projection discussion and normalized entropy update: [OMD II](https://parameterfree.com/2019/10/01/online-mirror-descent-ii-regret-and-mirror-version/) and [OMD III](https://parameterfree.com/2019/10/03/online-mirror-descent-iii-examples-and-learning-with-expert-advice/).

Required workflow checks after the edits:

- `reflow.mts`: unchanged for each of the three edited items.
- `precheck.mts`: algorithm, 0 proofs checked and 0 failures; entropy lemma, 1 proof checked and 0 failures; entropy example, 1 proof checked and 0 failures.
- Batched `proof-layout.mjs` on all three edited item paths: 3 items, 11 steps, 0 defects.
- Updated seven proof-contract quotations: five for `alg-online-mirror-descent`, one for `lem-negative-entropy-geometry-of-simplex`, and one for the current `alg-online-gradient-descent` definition; all now match their source sections. Corrected one endpoint-boundary worksheet entry to cite proof step 2.1.
- `proof-contract.mjs` on the complete batch-75 proof-contract file: 13 contracts checked, no errors or warnings.

## Unedited defects and blockers

No uneditable mathematical or citation defect remains in the reviewed scope. At the final status check, Autopilot still listed batch 75 as missing from `3a-read` and `3a-split` although this report and the findings file were on disk; no worker was in flight. Run-state ingestion remains with Autopilot, so I made no state or control-file changes. Autopilot also reports the existing out-of-scope stage-3a collector blocker `collect-57`, which failed three times for batch 57. These workflow conditions did not block the mathematical review. I did not re-audit the full transitive prerequisite closure of every published supplier; the supplier sections and proof passages needed for the assigned claims were opened and checked.
