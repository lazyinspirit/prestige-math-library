---
id: ex-randomized-versus-cyclic-rank-one-quadratic
kind: example
title: "Randomized and cyclic updates on a rank-one quadratic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-cyclic-exact-block-minimization
  - alg-randomized-coordinate-gradient-descent
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §§3.1 and 3.3"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3, §§3.1–3.3"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Example

For $f(x)=\frac12(x_1+2x_2)^2$ from $x^0=(1,0)$, the block Lipschitz constants are $L_1=1$ and $L_2=4$. A uniform randomized gradient update with common majorizers $M_1=M_2=L_{\max}=4$ has expected objective $9/64$ after one update, while an exact cyclic sweep in order $1,2$ reaches the minimizer $(0,0)$.

## Facts & Assumptions

**Given:** $f(x)=\frac12(x_1+2x_2)^2$, $x^0=(1,0)$, two singleton blocks, uniform sampling, and common majorizers $M_1=M_2=4$.

[F1] [[alg-randomized-coordinate-gradient-descent]]: a sampled coordinate $i$ is updated by $x_i^+=x_i-M_i^{-1}\nabla_i f(x)$.

[F2] [[alg-cyclic-exact-block-minimization]]: a cyclic sweep exactly minimizes the selected coordinate slice.

## Proof

1.1 Writing $s=x_1+2x_2$, we have $\nabla_1f=s$, $\nabla_2f=2s$, and their coordinate Lipschitz constants are $1$ and $4$. At $x^0$, $s=1$ and $f(x^0)=1/2$. If coordinate $1$ is sampled with common majorizer $4$, $x_1$ becomes $3/4$, so $f=\frac12(3/4)^2=9/32$; if coordinate $2$ is sampled, $x_2$ becomes $-1/2$, so $f=0$. [F1, given, algebra]

2.1 Uniform averaging of the two outcomes gives expected objective $(9/32+0)/2=9/64$. In cyclic minimization, the first coordinate minimizer at $x_2=0$ is $x_1=0$, and the second coordinate minimizer at $x_1=0$ is $x_2=0$; hence the sweep reaches the global minimum. [F2, step 1.1, algebra] ∎

