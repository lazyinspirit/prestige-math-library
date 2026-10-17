---
id: cor-local-newton-convergence-for-shooting-bvp-residual
kind: corollary
title: "Local Newton convergence for a simple nonlinear shooting root"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-single-shooting-for-nonlinear-bvps
  - def-certified-ivp-approximation-and-sensitivity-interface
  - prop-shooting-residual-derivative
  - thm-updated-jacobian-newton-local-quadratic-convergence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
verification:
  precheck: pass
---

## Statement

Here $C^2$ means twice continuously differentiable. Let the exact shooting residual $R(s)=B(s,\phi(b;s))$ be $C^2$ on an open neighborhood of a root $s^*$, with $R(s^*)=0$, $DR(s^*)$ invertible, and $DR$ Lipschitz on a closed ball around $s^*$. Use the exact evaluator $\widetilde\phi=\phi$, $\widetilde\Phi=\Phi$, $\delta_{\rm IVP}=0$ in [[alg-single-shooting-for-nonlinear-bvps]]. Then there is a positive-radius ball on which every attempted exact-Jacobian Newton update is defined, remains in the ball, and satisfies a quadratic error bound. A finite budget may stop before the residual tolerance is met. No arbitrary-start or global-convergence guarantee follows.

## Facts & Assumptions

**Given:** The exact shooting residual, its simple root and local regularity, the exact evaluator, a residual tolerance, a finite update budget, and an initial state in the local ball below.

[F1] [[def-certified-ivp-approximation-and-sensitivity-interface]]: the exact flow is an allowed evaluator with zero trajectory error and endpoint map equal to the exact flow endpoint map.

[F2] [[prop-shooting-residual-derivative]]: the residual Jacobian is $D_1B+D_2B\,D\Phi$ for the exact endpoint map.

[F3] [[alg-single-shooting-for-nonlinear-bvps]]: with the exact evaluator, the method applies the finite exact-Jacobian Newton steps to $R$ and has the stated stopping statuses.

[F4] [[thm-updated-jacobian-newton-local-quadratic-convergence]]: a $C^2$ square map with a simple root and Lipschitz Jacobian has a ball where its exact-Jacobian Newton updates remain valid and satisfy a quadratic error estimate; a finite budget may stop early.

## Proof

1.1 The residual is a square map from an open subset of $\mathbb R^d$ to $\mathbb R^d$. By assumption it is $C^2$, has zero at $s^*$, has invertible derivative there, and has Lipschitz derivative on the closed ball. These are exactly the map hypotheses of [F4]. [given, F4]

2.1 The exact evaluator in [F1] makes the computed residual in [F3] equal to $R$, and [F2] supplies its exact Jacobian. Applying [F4] therefore gives a radius and constant for which every attempted update is defined, remains in the ball, and obeys the quadratic estimate. Procedure [F3] can stop earlier on residual tolerance or budget; neither stopping status changes the update conclusion, and [F4] supplies no global-start claim. [given, F1, F2, F3, F4, step 1.1] ∎
