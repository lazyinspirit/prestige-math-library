---
id: cex-composite-coordinate-proximal-rate-needs-penalty-error
kind: counterexample
title: "An R-only proximal coordinate rate fails for nonsmooth penalties"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-randomized-coordinate-proximal-descent
  - lem-na-coordinate-soft-threshold-minimizer
  - def-proper-closed-convex-function-on-rn
  - def-abs-value
  - lem-of-abs-value
  - lem-of-triangle-inequality
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

[F3] [[def-proper-closed-convex-function-on-rn]]: a block penalty is proper, closed and convex when its effective domain is nonempty, its epigraph is closed, and it satisfies the segment inequality.

[F4] [[def-abs-value]], [[lem-of-abs-value]] and [[lem-of-triangle-inequality]]: absolute value is nonnegative, positively homogeneous, and subadditive.

[F5] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the two-coordinate Euclidean norm is a norm and its triangle inequality gives $\|(x_1,x_2)\|_2\le |x_1|+|x_2|$ by decomposing into coordinate vectors.

[A1] The proximal coordinate algorithm uses common model majorizers $M_1=M_2=1$, samples uniformly, and runs at least one update with no stopping tolerance.

## Proof

1.1 The assumptions hold: $f=0$ is convex and continuously differentiable and has zero gradient, so $L_i=M_i=1$ is a valid positive block-gradient bound and majorizer. Each $g_i(u)=4|u|$ is finite everywhere and hence proper; [F4] gives convexity; and $\operatorname{epi}g_i=\{(u,t):t\ge4u,\ t\ge-4u\}$ is an intersection of closed half-planes, so it is closed in the epigraph convention [F3]. Thus $F(x)=4(|x_1|+|x_2|)$ and its minimum is $F^*=0$ at $x^*=(0,0)$. The initial value is $F(x^0)=8$ and its sublevel is $|x_1|+|x_2|\le2$. There $\|x-x^*\|_2=\sqrt{x_1^2+x_2^2}\le|x_1|+|x_2|\le2$ by [F4]--[F5], with equality at $(2,0)$; hence $R=2$. [A1, F1, F3, F4, F5, given, algebra]

2.1 For either selected coordinate the subproblem at its current value $1$ is $4|u|+\tfrac12(u-1)^2$, which differs by a constant from $\tfrac12u^2-u+4|u|$. By [F2] its unique minimizer is $S_4(1)=0$. The other coordinate remains $1$, so after one update $F(x^1)=4$ for either draw and $\mathbb E[F(x^1)-F^*]=4$. [F1, F2, step 1.1, algebra]

3.1 The proposed upper bound at $k=1$ is $2\cdot2\cdot1\cdot2^2/(1+4)=16/5<4$, contradicting step 2.1. Therefore the claimed penalty-independent composite bound is false. [step 1.1, step 2.1, algebra] ∎

## Remarks

The controlling plan's $O(1/k)$ rate is for the smooth coordinate-gradient branch $g_i=0$. This witness does not refute that branch.
