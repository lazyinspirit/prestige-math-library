---
id: ex-max-affine-bundle-null-and-serious-steps
kind: example
title: "A max-affine kink produces one null and one serious bundle step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-max-min
  - alg-proximal-bundle-serious-null-method
  - def-subgradient-and-subdifferential
  - lem-proximal-bundle-subproblem-has-unique-minimizer
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mateo Díaz and Benjamin Grimmer, Optimal Convergence Rates for the Proximal Bundle Method, §§2–3"
      url: https://arxiv.org/pdf/2105.07874
    - title: "Dominikus Noll, Olivier Prot, and Aude Rondepierre, A proximity control algorithm to minimize nonsmooth and nonconvex functions, §§2–4"
      url: https://www.math.univ-toulouse.fr/~noll/PAPERS/pjo.pdf
verification:
  precheck: pass
---

## Example
Run two trials of [[alg-proximal-bundle-serious-null-method]] on $f(x)=|x|=\max\{x,-x\}$ over $C=\mathbb R$, with $t=2$, $m_s=1/2$, and initial center $x_0=1$. At $1$ choose subgradient $1$; at the first trial point $-1$ choose subgradient $-1$; at $0$ choose subgradient $0$. The first trial is null and the second is serious, with exact trial points $-1$ and $0$ respectively.

## Facts & Assumptions

**Given:** The serious/null algorithm and subgradient definition [[alg-proximal-bundle-serious-null-method]], [[def-subgradient-and-subdifferential]].

[A1] For $\lambda\in[0,1]$, $f((1-\lambda)x+\lambda y)=\max\{(1-\lambda)x+\lambda y,-(1-\lambda)x-\lambda y\}\le(1-\lambda)\max\{x,-x\}+\lambda\max\{y,-y\}$, because each affine branch is bounded by the right side; hence $f$ is convex.

[F1] For every $y$, $|y|\ge y$, $|y|\ge-y$, and $|y|\ge0$, so the chosen slopes $1,-1,0$ support $f$ at $1,-1,0$ respectively ([[def-subgradient-and-subdifferential]]).

[F2] The finite maximum-affine model plus its positive quadratic has a unique minimizer ([[lem-proximal-bundle-subproblem-has-unique-minimizer]]).

## Verification
1.1 The initial cut is $m_0(y)=y$. The model objective is $y+(y-1)^2/4=(y+1)^2/4$, so its unique minimizer is $z_0=-1$. Then $M_0(z_0)=-1$, $P_0=f(1)-M_0(-1)=2$, and actual decrease is $f(1)-f(-1)=0< m_sP_0=1$. Thus this is a null step and the cut at $-1$ is $m_1(y)=-y$. [given, A1, F1, F2, algebra]

2.1 The new model is $M_1(y)=\max\{y,-y\}=|y|$. For $y\ge0$, $|y|+(y-1)^2/4=(y+1)^2/4\ge1/4$, with equality only at $y=0$. For $y\le0$, its difference from $1/4$ is $y(y-6)/4\ge0$ because both factors are nonpositive, with equality only at $y=0$. Thus its unique minimizer is $z_1=0$, and $P_1=f(1)-M_1(0)=1$, while actual decrease is $1\ge m_sP_1=1/2$. The second step is serious and sets the center to $0$. [given, F1, F2, step 1.1, algebra] ∎

