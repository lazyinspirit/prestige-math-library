---
id: ex-robust-least-squares-as-a-second-order-cone-program
kind: example
title: "Norm-bounded robust least squares as an SOCP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-conic-optimization-primal-dual-models
  - lem-lorentz-cone-log-barrier
  - thm-cauchy-schwarz-and-the-euclidean-norm
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
proof_strategy: direct
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 4 §4.6, second-order cone formulations."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full §16.2, second-order cone program and robust least-squares formulation."
---

## Example

Let $m,n\ge1$, $A\in\mathbb R^{m\times n}$, $b\in\mathbb R^m$, and $\rho\ge0$. Suppose an adversary may perturb $A$ by any $\Delta\in\mathbb R^{m\times n}$ with $\|\Delta\|_F\le\rho$. The robust residual objective is $\sup_{\|\Delta\|_F\le\rho}\|(A+\Delta)x-b\|_2$.

## Facts & Assumptions

**Given:** The dimensions, data, and perturbation set above.

[F1] $\|\Delta x\|_2\le\|\Delta\|_F\|x\|_2$ and the Euclidean triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F2] A constraint $\|v\|_2\le t$ is Lorentz-cone membership $(t,v)\in\mathcal L$ ([[def-conic-optimization-primal-dual-models]]).

## Verification

1.1 For every admissible $\Delta$, [F1] gives $\|(A+\Delta)x-b\|_2\le\|Ax-b\|_2+\rho\|x\|_2$. If $x\ne0$ and $r=Ax-b\ne0$, choose $u=r/\|r\|_2$ and $\Delta=\rho u x^T/\|x\|_2$; then $\|\Delta\|_F=\rho$ and $\Delta x=\rho\|x\|_2u$, attaining the upper bound. If $r=0$, any unit $u$ gives the same supremum; if $x=0$, the perturbation term vanishes. [F1, given, construct]

2.1 Therefore the robust objective equals $\|Ax-b\|_2+\rho\|x\|_2$. Introducing epigraph variables $t,u$ gives $\min t+\rho u$ subject to $(t,Ax-b)\in\mathcal L_{m+1}$ and $(u,x)\in\mathcal L_{n+1}$ by [F2], which is an SOCP. [F2, step 1.1, algebra] ∎
