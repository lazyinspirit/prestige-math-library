---
id: ex-two-block-simulation-calibration
kind: example
title: "A two-block least-squares calibration sweep"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-cyclic-exact-block-minimization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "P. Tseng, Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, §2"
      url: "https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3, §3.1"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Example

Consider $J(\alpha,\beta)=\frac12\|y-a\alpha-b\beta\|_2^2+\frac12\alpha^2+\beta^2$, with $y=(2,1)^T$, $a=(1,0)^T$, and $b=(1,1)^T$. A cyclic exact sweep from $(0,0)$ in the order $\alpha,\beta$ gives $(1,1/2)$, residual $(1/2,1/2)$, and objective $1$.

## Facts & Assumptions

**Given:** The quadratic objective and vectors in the Example, and cyclic order $\alpha$ then $\beta$.

[F1] [[alg-cyclic-exact-block-minimization]]: each scalar update is a global minimizer of that coordinate slice.

## Proof

1.1 With $\beta=0$, the terms depending on $\alpha$ are $\frac12\|y-a\alpha\|_2^2+\frac12\alpha^2$. Differentiating gives $(\|a\|_2^2+1)\alpha=a^Ty=2$. The coefficient $\|a\|_2^2+1=2>0$, so this strictly convex scalar quadratic has the unique minimizer $\alpha=1$. [F1, given, algebra]

2.1 With $\alpha=1$, the terms depending on $\beta$ are $\frac12\|y-a-b\beta\|_2^2+\beta^2$. Differentiating gives $(\|b\|_2^2+2)\beta=b^T(y-a)=2$. The coefficient $\|b\|_2^2+2=4>0$, so this strictly convex scalar quadratic has the unique minimizer $\beta=1/2$. The residual is $(1/2,1/2)$ and $J=\frac12(1/2)+\frac12+1/4=1$. At the initial point $J(0,0)=5/2$, so the exact sweep decreases the objective. [F1, step 1.1, algebra] ∎

