---
id: ex-newton-shooting-fails-from-singular-start
kind: example
title: "A valid shooting BVP can fail Newton at a singular initial guess"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - def-certified-ivp-approximation-and-sensitivity-interface
  - alg-single-shooting-for-nonlinear-bvps
  - prop-shooting-residual-derivative
  - cor-local-newton-convergence-for-shooting-bvp-residual
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
verification:
  precheck: pass
---

## Example

For $y'=0$ on $[0,1]$ with $B(y(0),y(1))=y(0)^2-1$, the exact shooting residual is $R(s)=s^2-1$. It has simple roots $s=\pm1$, but exact-Jacobian Newton at $s=0$ immediately returns singular-jacobian because $R'(0)=0$. Local convergence near a simple root does not imply convergence from every initial guess.

## Verification

**Given:** The scalar BVP, an exact flow evaluator, and a zero residual tolerance with at least one Newton correction allowed.

[F1] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: the exact shooting residual is $B(s,\phi(1;s))$.

[F2] [[def-certified-ivp-approximation-and-sensitivity-interface]]: the exact flow is an allowed evaluator with zero trajectory error.

[F3] [[prop-shooting-residual-derivative]]: the derivative of the shooting residual is the derivative of $B(s,\Phi(s))$ by the chain rule.

[F4] [[alg-single-shooting-for-nonlinear-bvps]]: Newton first checks the residual tolerance and then attempts the Jacobian correction; singular Jacobian is a returned status.

[F5] [[cor-local-newton-convergence-for-shooting-bvp-residual]]: the local theorem requires an invertible derivative at the root and makes no arbitrary-start claim.

1.1 The exact ODE flow for $y'=0$ is $\phi(t;s)=s$, so [F1] gives $R(s)=B(s,s)=s^2-1$, and [F2] certifies that the exact evaluator used by the algorithm has zero IVP error. Thus $R(1)=R(-1)=0$ and $R'(s)=2s$, making both roots simple. [given, F1, F2, algebra]

2.1 At the initial guess $s_0=0$, the residual is $-1$, so a zero tolerance is not met; the Jacobian is the zero $1\times1$ map because $R'(0)=0$. The linear correction therefore has no solution in the sense required by Newton and [F4] returns singular-jacobian before any update. [F3, F4, step 1.1, algebra]

3.1 The roots at $\pm1$ have nonzero derivative, so the simple-root condition can hold on a sufficiently small ball around either root, where the polynomial derivative is Lipschitz. Fact [F5] then gives a local Newton basin there, while step 2.1 exhibits a valid start outside both guaranteed basins for which the method stops. [F5, step 1.1, step 2.1, algebra] ∎
