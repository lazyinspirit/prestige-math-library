# Step 3a Reader Report — Batch 41

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-41`)  
Scope: batch `41`

## Run state and blocker

The autopilot status showed the run active and no in-flight dispatch at the time of review. It also showed an unrelated `3a-split` blocker: `split-8 failed 3x (covers 8)`. Batch 41 has no review blocker.

## Opened inventory

### Assigned pages

- `library/machine-learning/momentum-and-accelerated-training.md` (A, draft): opened. Frontmatter is YAML-only, has `page_layout: compact-v1`, lists the three assigned theorem/algorithm items, and has no body summary.
- `library/machine-learning/momentum-and-accelerated-training-examples.md` (B, draft): opened. Frontmatter is YAML-only, has `page_layout: compact-v1`, lists the three assigned examples, and has no body summary.

I also opened the required page metadata for `library/machine-learning/nonconvex-gradient-descent-and-stationarity.md` (draft) and the two published prerequisites `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md` and `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`. These are page-level prerequisites, not item dependencies used in the assigned proofs; their prose was outside batch 41 review scope.

### Assigned items and direct mathematical suppliers

Items were read supplier-first. The assigned items are all current-run drafts:

1. `def-jacobian-matrix-and-gradient` (published), `def-total-derivative-in-euclidean-space` (published), and `alg-gradient-descent` (published): opened as suppliers.
2. `alg-heavy-ball-momentum` (draft) and `alg-nesterov-accelerated-gradient` (draft): opened before their theorem/example consumers.
3. `thm-of-square-roots`, `def-euclidean-inner-product`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `prop-gradient-of-a-quadratic-matrix-form`, `thm-reals-cauchy-complete`, and `thm-of-archimedean` (all published): opened as theorem/example suppliers.
4. `thm-heavy-ball-rate-on-strongly-convex-quadratics` (draft): opened after its suppliers.
5. `ex-unstable-heavy-ball-parameters`, `ex-stochastic-momentum-experiment`, and `ex-heavy-ball-optimized-quadratic-spectrum` (draft): opened after their suppliers.

The batch manifest, relevant records in `research/machine-learning-all-101-2026-10-19-batch-41.proof-contracts.json`, and the relevant supplier/source entries in `research/machine-learning-all-101-2026-10-19-batch-41.source-evidence.json` were checked as evidence, not as verdicts.

## Mathematical review

- `alg-heavy-ball-momentum`: the finite-horizon recurrence, current-iterate gradient, initialization, parameter conditions, and output agree with the heavy-ball iteration in Bottou–Curtis–Nocedal §7.1, equation (7.1), and Chen §1. No convergence guarantee is asserted by the definition.
- `alg-nesterov-accelerated-gradient`: the look-ahead point is formed before the gradient evaluation, matching Bottou–Curtis–Nocedal §7.2, equation (7.4), and Chen Algorithm 1. It makes no unsupported convergence claim for arbitrary parameter sequences.
- `thm-heavy-ball-rate-on-strongly-convex-quadratics`: checked the assumptions, spectral reduction, positive-square-root factorization, modal roots, endpoint repeated roots, interval minimax lower bound, and gradient-descent comparison. The endpoint polynomial inequalities imply the stated lower bound for every constant admissible parameter pair. The statement explicitly defines the worst case over the full interval `[c,L]`, including values that need not be eigenvalues of the particular matrix, and distinguishes root factors from one-step norm contraction. The proof and its contract steps are consistent; no gap or overclaim was found.
- `ex-unstable-heavy-ball-parameters`: the scalar recurrence has characteristic polynomial `(r+2)(r+1/8)`, and the displayed solution satisfies both initial conditions. Its tail bound proves unboundedness and nonconvergence.
- `ex-stochastic-momentum-experiment`: checked the empirical details against Sutskever et al. §2 equations (3)–(4), §3, and Table 1. The paper reports 750,000 parameter updates per trial, minibatches of 200, no regularization, and training squared errors; Table 1 gives Curves values `0.074` for `0.999N` and `0.48` for the zero-momentum `0 (SGD)` column. The example keeps the claim empirical and makes no general convergence or test-risk claim. Bottou–Curtis–Nocedal §7.1 also supports the stated caution about stochastic-momentum guarantees.
- `ex-heavy-ball-optimized-quadratic-spectrum`: direct substitution gives tuned parameters `1/4, 1/4`; the three modal polynomials and their root factors, and the gradient-descent multipliers, are computed correctly.

The cited sources reviewed were [Bottou, Curtis, and Nocedal, *Optimization Methods for Large-Scale Machine Learning*, §§7.1–7.2](https://arxiv.org/pdf/1606.04838), [Chen, *Lecture 9–10: Accelerated Gradient Descent*, §1 and Algorithm 1](https://pages.cs.wisc.edu/~yudongchen/cs726_sp23/Lecture_9_10_accelerated_GD.pdf), [Vu, *Convergence of Heavy-Ball Method and Nesterov’s Accelerated Gradient on Quadratic Optimization*, §2](https://trungvietvu.github.io/notes/2018/Momentum), and [Sutskever et al., *On the Importance of Initialization and Momentum in Deep Learning*, §2, §3, and Table 1](https://proceedings.mlr.press/v28/sutskever13.pdf).

No TikZ/tikzcd or other mathematical diagram occurs in the assigned pages or items; no diagram is needed for these arguments.

## Page verdicts

- `momentum-and-accelerated-training` (A): pass. The assigned item inventory, companion and prerequisite metadata are present; the page body is empty.
- `momentum-and-accelerated-training-examples` (B): pass. The example inventory and companion/prerequisite metadata are present; the page body is empty.

## Edits, unresolved defects, and validation

No repair was needed. No item or page was edited, and no confirmed or suspected defect remains unedited. The reader made no judge/stamp/self-certification changes. Because no item changed, reflow, precheck, and the changed-item `proof-layout` command were not run.

## Coverage note

All six assigned items, both assigned pages, their directly listed mathematical suppliers, the relevant contracts, and the cited literature sections were reviewed. The full transitive proof chains behind already-published suppliers were not independently re-audited; the assigned arguments use the cited supplier statements, and no such statement was found insufficient. Page-level prerequisite prose was not reviewed as batch 41 content.
