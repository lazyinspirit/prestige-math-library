# Step 3a reader report — batch 13

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Coverage: batch `13`

## Inventory opened

Assigned pages:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/automatic-differentiation-and-computational-graphs.md` (A)
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/automatic-differentiation-and-computational-graphs-examples.md` (B)

Assigned A-page items, read in dependency order:

- Level 0: `def-finite-straight-line-computational-program`, `lem-implicit-sensitivity-error-controlled-by-residual`, `thm-implicit-differentiation-forward-and-adjoint-formulas`.
- Level 1: `alg-forward-mode-automatic-differentiation`, `alg-reverse-mode-automatic-differentiation`, `lem-finite-straight-line-program-defines-c1-map`.
- Level 2: `lem-finite-straight-line-program-defines-c2-map`, `alg-checkpointed-reverse-schedules`, `alg-differentiate-finite-fixed-point-iteration`, `alg-forward-over-reverse-hessian-vector-product`, `thm-forward-mode-computes-directional-derivative`, `thm-reverse-mode-computes-gradient`, `thm-reverse-mode-work-and-tape-storage-bound`, `lem-certified-linear-solve-jacobian-and-pullback-error`.
- Level 3: `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds`, `thm-finite-iteration-sensitivity-bound-and-residual-limitation`, `thm-forward-over-reverse-computes-hessian-vector-product`, `thm-graph-gradient-error-from-local-jacobian-perturbations`.
- Level 4: `rem-real-arithmetic-graph-versus-rounded-execution`.

Assigned B-page examples, with their suppliers read first:

- `ex-branchwise-ad-at-the-absolute-value-switch`
- `ex-implicit-linear-solve-adjoint`
- `ex-reverse-euler-trajectory-tape`
- `ex-shared-expression-forward-and-reverse-graph`

Also opened the required dependency pages `the-total-derivative`, `finite-precision-direct-factorizations`, and `banach-space-differential-calculus-and-banach-manifolds`. Opened the item dependencies needed to verify the assigned claims: `def-c-one-map-and-local-inverse`, `def-total-derivative-in-euclidean-space`, `thm-euclidean-implicit-function-theorem`, `thm-mean-value-inequality-for-total-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`, `thm-singular-value-decomposition`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `def-standard-relative-floating-point-model-and-unit-roundoff`, `lem-product-of-one-plus-deltas-gives-theta-n`, `lem-rounded-linear-and-normal-residual-certificates`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-mean-value-inequality`, `lem-composition-operator-norm-inequality`, and `def-operator-norm`.

The batch authoring notes list 18 A-page items/22 total; the assigned manifest and current carriers contain 19 A-page items and 4 B-page examples (23 total). This review follows the manifest and current files.

## Independent source checks

- MIT OpenCourseWare 18.S096, *Matrix Calculus for Machine Learning and Beyond*, Chapter 8 §§8.3–8.3.1 and §8.4.1, printed pp. 55–63: [complete lecture notes](https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf). The reviewed passages give the path-product view, reverse accumulation recurrence, and forward-over-reverse Hessian–vector product interpretation. The local proofs additionally establish the assigned graph, branch, and exact-arithmetic qualifications.
- Andreas Griewank, “Achieving Logarithmic Growth of Temporal and Spatial Complexity in Reverse Automatic Differentiation,” §6, Theorem 6.1, printed p. 15: [Argonne PDF](https://ftp.mcs.anl.gov/pub/tech_reports/reports/P228.pdf). It states the binomial capacity $\binom{d+t}{d}$ and the one-recorded/one-adjoint evaluation and recomputation bounds. The assigned theorem proves the particular split, termination, correctness, and storage statements used here.

The current draft supplier `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` in batch 1 had changed since its first read. I reopened its current complete definition, verified that it still supplies the real-operation rounding and success conditions used by the solve lemma, and refreshed the batch-13 F4 proof-contract quote to those current bytes. No defect in that supplier was found; it was not edited.

## Edits and evidence

- `lem-implicit-sensitivity-error-controlled-by-residual`, Proof 1.1 and its contract: the hypothesis bounds $D\Psi$ only along the residual segment, whereas the cited derivative mean-value theorem requires a bound on its open convex domain. The repair restricts $\Psi$ to $\gamma(t)=\Psi(tr)$ on $(0,1)$, applies the theorem between interior points, and passes to the endpoints by continuity. Added the chain-rule dependency for the derivative of $\gamma$.
- `thm-finite-iteration-sensitivity-bound-and-residual-limitation`, Statement and Proof 1.1–3.1, dependencies, and contract: added the mean-value inequality dependency used to turn the uniform $G_z$ bound into a contraction. The IFT dependency assumes positive parameter and state dimensions, while the assigned iteration algorithm allows zero dimensions; the theorem now states $p,m\ge0$, gives the SVD argument for invertibility of $I-G_z$, handles $p=0$ and $m=0$, and records why the finite recurrence is defined near $\theta_0$. Step phases now follow the precheck's canonical dependency order.
- `alg-checkpointed-reverse-schedules`, Definition and its consumer `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds`, Proof 1.1 and contracts: made the terminal cotangent an explicit input, stated the scalar terminal-output condition, and gave the binomial mode's top-level integer budgets and capacity condition. Removed the binomial-capacity result from the procedure definition; the paired theorem proves it. Added the empty-sequence correctness case for both modes.
- `thm-graph-gradient-error-from-local-jacobian-perturbations`, Statement, Facts, Proof 2.1, dependencies, and contract: specified induced Euclidean operator norms, cited submultiplicativity for the telescoping product bound, and derived the equality between a scalar path functional's operator norm and its transposed gradient norm using Cauchy–Schwarz.
- `thm-reverse-mode-work-and-tape-storage-bound`, Statement, A3, Proof 2.1, and contract: the prior $S$ counted value dimensions and input-gradient entries but did not count per-node metadata/local tape or bound pullback scratch; the graph definition permits zero-dimensional operation values. The repair defines $S$ to include node/parent/branch metadata and retained local tapes, and states the uniform local-tape/scratch condition needed for the $O(S)$ storage bound.
- `lem-certified-linear-solve-jacobian-and-pullback-error`, dependencies, Facts F7–F9, Proof 1.1–4.1, and contract: made the SVD route from the inverse-defect bound to invertibility explicit, and supplied exact dependencies for the Frobenius/operator norm inequalities, composition bounds, operator action, and equality of Euclidean adjoint norms used in the proof.

No `verification.judge` record was present on the changed assigned items. Their proof contracts were updated; no other batch, published item, B-page prose, or planning file was edited. No confirmed defect remained outside the licensed repair scope.

## Validation

| Changed item | Reflow | Precheck |
| --- | --- | --- |
| `lem-implicit-sensitivity-error-controlled-by-residual` | unchanged | pass |
| `thm-finite-iteration-sensitivity-bound-and-residual-limitation` | completed; final reflow unchanged | pass |
| `alg-checkpointed-reverse-schedules` | unchanged | not applicable (definition) |
| `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds` | unchanged | pass |
| `thm-graph-gradient-error-from-local-jacobian-perturbations` | unchanged | pass |
| `thm-reverse-mode-work-and-tape-storage-bound` | unchanged | pass |
| `lem-certified-linear-solve-jacobian-and-pullback-error` | unchanged | pass |

Final batched layout check: `node tools/proof-layout.mjs` on the seven changed item paths reported 7 items, 24 steps, and 0 defects.

## Page verdicts and blocker

- A page `automatic-differentiation-and-computational-graphs`: pass after the listed item repairs. Its summary accurately distinguishes exact real-arithmetic derivatives, fixed-branch behavior, finite-iteration sensitivities, and the conditional rounded-solve interface.
- B page `automatic-differentiation-and-computational-graphs-examples`: pass. The absolute-value branch calculation, implicit solve and adjoint, two-step Euler reverse sweep, and shared-expression/repeated-parent calculations are correct.
- Blocker: none for batch 13. At the last status check the run was still active, 41/107 reader results were covered, and the run-wide `3a-split` stage had a blocker after three failures for batch 20. That batch is outside this assignment.
