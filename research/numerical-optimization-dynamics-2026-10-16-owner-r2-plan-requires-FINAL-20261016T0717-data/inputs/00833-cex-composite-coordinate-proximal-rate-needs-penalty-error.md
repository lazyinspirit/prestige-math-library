---
id: cex-composite-coordinate-proximal-rate-needs-penalty-error
kind: counterexample
title: "An R-only proximal coordinate rate fails for nonsmooth penalties"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-randomized-coordinate-proximal-descent
  - lem-na-coordinate-soft-threshold-minimizer
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, Theorem 3.1 and §3.7"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Theorem 3.2.1"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Statement refuted

The claim that the uniform randomized proximal update for every proper closed convex separable penalty satisfies
$$\mathbb E[F(x^k)-F^*]\le\frac{2nL_{\max}R^2}{k+4}$$
under only a bounded initial sublevel radius $R$ and positive coordinate majorizers $L_i$ is false without an error term or other dependence on the penalty.

## Witness

Let $n=2$, $f(x)=0$, $g_1(u)=g_2(u)=4|u|$, $L_1=L_2=L_{\max}=1$, and $x^0=(1,1)$. The objective is $F(x)=4(|x_1|+|x_2|)$ and $F^*=0$ at $x^*=(0,0)$. The initial sublevel is the closed diamond $|x_1|+|x_2|\le2$, whose radius about $x^*$ is $R=2$.

## Facts & Assumptions

**Given:** The proximal update in [[alg-randomized-coordinate-proximal-descent]] and the scalar minimizer in [[lem-na-coordinate-soft-threshold-minimizer]].

[F1] [[alg-randomized-coordinate-proximal-descent]]: for selected block $i$ the exact update minimizes $\langle\nabla_i f(x),u-x_i\rangle+(M_i/2)|u-x_i|^2+g_i(u)$.

[F2] [[lem-na-coordinate-soft-threshold-minimizer]]: $\frac a2u^2-bu+\tau|u|$ has unique minimizer $S_\tau(b)/a$ when $a,\tau>0$.

[A1] The proximal coordinate algorithm uses common model majorizers $M_1=M_2=1$ and samples uniformly.

## Proof

1.1 The assumptions hold: $f$ is convex and continuously differentiable, each $g_i$ is proper closed convex, $L_i=M_i=1$ is a valid positive coordinate majorizer for the zero gradient, and $F(x^0)=8$. Its initial sublevel is $|x_1|+|x_2|\le2$, so $\|x-x^*\|_2\le2$ there, with equality at $(2,0)$; hence $R=2$. [A1, F1, given, algebra]

2.1 For either selected coordinate the subproblem at its current value $1$ is $4|u|+\tfrac12(u-1)^2$, which differs by a constant from $\tfrac12u^2-u+4|u|$. By [F2] its unique minimizer is $S_4(1)=0$. The other coordinate remains $1$, so after one update $F(x^1)=4$ for either draw and $\mathbb E[F(x^1)-F^*]=4$. [F1, F2, step 1.1, algebra]

3.1 The proposed upper bound at $k=1$ is $2\cdot2\cdot1\cdot2^2/(1+4)=16/5<4$, contradicting step 2.1. Therefore the claimed penalty-independent composite bound is false. [step 1.1, step 2.1, algebra] ∎

## Remarks

The controlling plan's $O(1/k)$ rate is for the smooth coordinate-gradient branch $g_i=0$. This witness does not refute that branch.
