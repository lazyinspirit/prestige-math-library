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
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

**Given:** The quadratic objective and vectors in the Example, cyclic order $\alpha$ then $\beta$, and sweep budget $K=1$.

[F1] [[alg-cyclic-exact-block-minimization]]: each scalar update is a global minimizer of that coordinate slice.

[F2] [[def-euclidean-inner-product]]: the vector norm squares and dot products are the standard Euclidean quadratic and bilinear forms.

## Proof

1.1 With $\beta=0$, bilinearity [F2] expands the terms depending on $\alpha$ as $\frac12(\|a\|_2^2+1)\alpha^2-(a^Ty)\alpha$ plus a constant. Here $\|a\|_2^2+1=2$ and $a^Ty=2$, so completing the square gives $\alpha^2-2\alpha=(\alpha-1)^2-1$ plus a constant. Thus the unique global slice minimizer is $\alpha=1$. [F1, F2, given, algebra]

2.1 With $\alpha=1$, bilinearity [F2] expands the terms depending on $\beta$ as $\frac12(\|b\|_2^2+2)\beta^2-b^T(y-a)\beta$ plus a constant. Here $\|b\|_2^2+2=4$ and $b^T(y-a)=2$, so completing the square gives $2\beta^2-2\beta=2(\beta-1/2)^2-1/2$ plus a constant. Thus $\beta=1/2$ is the unique global slice minimizer. The residual is $(1/2,1/2)$ and $J=\frac12(1/2)+\frac12+1/4=1$. At the initial point $J(0,0)=5/2$, so the exact sweep decreases the objective. [F1, F2, step 1.1, algebra] ∎

