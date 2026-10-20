# Step 3a reader report — batch 39

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `39`

## Opened inventory

Assigned manifest:
`research/machine-learning-all-101-2026-10-19-batch-39.pages.json`.

Assigned pages:

- `library/machine-learning/nonconvex-gradient-descent-and-stationarity.md`
- `library/machine-learning/nonconvex-gradient-descent-and-stationarity-examples.md`

Assigned items:

- `items/thm-smooth-bounded-below-gd-stationarity.md`
- `items/ex-nonconvex-cosine-gradient-descent-has-distinct-basins.md`
- `items/ex-nonconvex-gd-path-lower-bound-with-unbounded-objective.md`

Direct item dependencies opened:

- For `thm-smooth-bounded-below-gd-stationarity`: `alg-gradient-descent`, `def-total-derivative-in-euclidean-space`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `lem-l-smoothness-descent-inequality`, `thm-of-archimedean`, and `thm-reals-cauchy-complete`.
- For `ex-nonconvex-cosine-gradient-descent-has-distinct-basins`: the theorem above, `alg-gradient-descent`, `def-jacobian-matrix-and-gradient`, `thm-sine-and-cosine-derivatives`, `thm-algebra-of-derivatives`, `def-derivative`, `cor-sine-and-cosine-are-one-lipschitz`, `cor-pi-is-the-first-positive-sine-zero`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `cor-trigonometric-parity-and-pythagorean-identity`, and `cor-monotone-converges-iff-bounded`.
- For `ex-nonconvex-gd-path-lower-bound-with-unbounded-objective`: the theorem above, `alg-gradient-descent`, `def-total-derivative-in-euclidean-space`, `def-directional-and-partial-derivatives`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, and `lem-geometric-sequence-null`.
- Contextual published example consulted: `items/ex-multimodal-nonconvex-objective.md`.

I consulted the assigned proof-contract and batch source-evidence artifacts as evidence, not as verdicts. I also checked these cited source sections directly:

- Gabriele Farina, MIT Lecture 12, “Gradient descent and descent lemmas,” Definition L12.1 and Theorems L12.1, L12.3–L12.4, PDF pp. 1–4: <https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec12.pdf>. The quadratic upper model, fixed-step descent inequality, telescoping bound, and finite-horizon minimum-gradient conclusion agree with the local use. The lecture assumes global lower boundedness; the local theorem proves the weaker along-iterates condition itself.
- Saeed Ghadimi and Guanghui Lan, “Stochastic First- and Zeroth-Order Methods for Nonconvex Stochastic Programming,” §1 and §2.1, Assumption A1, RSG update (2.2), Theorem 2.1(a), and proof equations (1.6), (2.8)–(2.11), PDF pp. 1–7: <https://arxiv.org/pdf/1309.5549>. The cited finite-horizon estimate has a deterministic specialization at zero oracle variance and constant step; the paper's global lower-bound and oracle assumptions are not imported into the local proof.
- Léon Bottou, Frank E. Curtis, and Jorge Nocedal, “Optimization Methods for Large-Scale Machine Learning,” §4.1, Assumption 4.1, equation (4.3), and Lemma 4.2 with proof, PDF pp. 21–24: <https://arxiv.org/pdf/1606.04838>. The local use is limited to the Lipschitz-gradient convention and quadratic upper model; no stochastic conclusion is used.

## Review and edits

No edits were made. The theorem's one-step estimate follows from the cited descent inequality with the stated step-size bound; telescoping gives the finite sum and minimum bounds. Its contradiction argument for vanishing gradient norms correctly uses the pathwise objective lower bound and a finite selection of indices. The cosine example's two invariant intervals and limits follow from the stated trigonometric signs, Lipschitz bounds, and monotone convergence. The quadratic example has gradient $(2x,-2y)$, the stated $2$-Lipschitz constant, the displayed contracting-axis trajectory, a pathwise lower bound, an objective unbounded below, and a saddle at the limit.

The complete statements/descriptions have no inline hyperlinks. The theorem's citations follow its complete Statement under `Statement references`; the examples' descriptions contain no citations to move. Proof-step paragraphs, blank-line separation, tags, and final-step marks are already compliant. No TikZ or other diagrams occur in the assigned items. No proof-layout, reflow, or precheck commands were needed because no item changed.

No confirmed defect was left unedited, and no proposed withdrawal was identified.

## Page verdicts

- `nonconvex-gradient-descent-and-stationarity` — pass. The page is frontmatter-only, preserves `page_layout: compact-v1`, lists its assigned theorem, and has no summary body. The theorem is correctly stated and proved under its pathwise lower-bound hypothesis.
- `nonconvex-gradient-descent-and-stationarity-examples` — pass. The page is frontmatter-only, preserves `page_layout: compact-v1`, lists both assigned examples, and requires the A page. Both example claims and verifications are correct.

## Blocker and coverage note

The live autopilot status reports an unrelated `3a-split` blocker: `split-8` failed three times for batch `8`. There is no blocker affecting batch `39`.

The assigned pages and items were opened together before their supplier files, so the literal supplier-first file-open order was not achieved. I inspected the direct suppliers before making the final proof verdicts. I did not independently audit every transitive proof closure behind the published suppliers; the review verifies the direct cited interfaces used by the assigned items and the cited external optimization arguments.
