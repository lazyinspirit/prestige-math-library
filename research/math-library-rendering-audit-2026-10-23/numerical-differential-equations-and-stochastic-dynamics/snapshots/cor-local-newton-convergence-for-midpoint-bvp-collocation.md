---
id: cor-local-newton-convergence-for-midpoint-bvp-collocation
kind: corollary
title: "Local Newton convergence on the selected midpoint collocation branch"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-midpoint-collocation-residual-for-bvps
  - alg-midpoint-collocation-for-nonlinear-bvps
  - thm-midpoint-collocation-local-branch-and-error-budget
  - thm-updated-jacobian-newton-local-quadratic-convergence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:

    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For each sufficiently fine mesh, let $Y_h$ be the local root of the normalized midpoint residual supplied by [[thm-midpoint-collocation-local-branch-and-error-budget]]. On a sufficiently small ball about $Y_h$, the exact-Jacobian finite-budget Newton procedure in [[alg-midpoint-collocation-for-nonlinear-bvps]] has a basin in which every attempted update is valid, remains in the ball, and satisfies a quadratic error estimate. The radius may depend on $h$; a finite budget may stop early, and arbitrary initial node vectors receive no convergence guarantee.

## Facts & Assumptions

**Given:** A sufficiently fine fixed mesh, the local root $Y_h$, the C2 data and conditioning assumptions of the midpoint branch theorem, tolerance $\tau\ge0$, budget $M\in\mathbb N_0$, and an initial vector in the local Newton ball.

[F1] [[thm-midpoint-collocation-local-branch-and-error-budget]]: $G_h(Y_h)=0$ and $DG_h(Y_h)$ is invertible; the theorem defines $C^2$ as continuously differentiable with continuous second total derivatives.

[F2] [[def-midpoint-collocation-residual-for-bvps]]: $G_h$ is the normalized square collocation residual.

[F3] [[alg-midpoint-collocation-for-nonlinear-bvps]]: the procedure applies the finite exact-Jacobian Newton method to $G_h$ on its open nodal domain.

[F4] [[thm-updated-jacobian-newton-local-quadratic-convergence]]: a C2 square map with an invertible derivative at a root and locally Lipschitz Jacobian has a local quadratic Newton basin.

## Proof

1.1 By [F1], the branch theorem’s $C^2$ convention means continuous second total derivatives. For this fixed mesh, $G_h$ maps the open nodal domain in $\mathbb R^{d(N+1)}$ to the same-dimensional residual space. Since $f$ and $B$ are $C^2$, composition with the affine midpoint maps shows that $G_h$ is $C^2$; on a closed ball around $Y_h$ inside the domain its continuous second derivatives are bounded, so its Jacobian is Lipschitz there. [given, F1, F2, algebra]

2.1 Fact [F1] gives the zero and invertible derivative required by [F4]. Applying [F4] to this fixed finite-dimensional map yields a positive local radius and quadratic estimate. By [F3] the prescribed algorithm follows those exact Newton updates while the iterates remain in the ball; its finite budget can stop early and imposes no assertion for starts outside the basin. [given, F1, F3, F4, step 1.1] ∎
