---
id: thm-proximal-gradient-o1k-objective-bound
kind: theorem
title: "The proximal-gradient method has an O(1/k) objective bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-proximal-gradient-and-fista
  - lem-proximal-gradient-one-step-estimate
  - lem-smooth-composite-sum-preserves-proper-closed-convexity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Amir Beck and Marc Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, Theorem 3.1"
      url: "https://www.tau.ac.il/~becka/FISTA.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

Under the exact proximal-gradient hypotheses of [[alg-proximal-gradient-and-fista]], suppose $F=f+g$ has a minimizer $x_*$. From any $x_0\in\mathbb R^n$, the iterates $x_k=T_L(x_{k-1})$ satisfy
$$0\le F(x_k)-F(x_*)\le\frac{L\|x_0-x_*\|_2^2}{2k}\qquad(k\ge1).$$

## Facts & Assumptions

**Given:** The exact proximal-gradient iteration and minimizer in the Statement.

[F1] [[alg-proximal-gradient-and-fista]]: $x_k=T_L(x_{k-1})$ and every proximal output lies in $\operatorname{dom}g$.

[F2] [[lem-proximal-gradient-one-step-estimate]]: for $z=x_*$, $F(x_*)-F(x_k)\ge(L/2)\|x_k-x_{k-1}\|_2^2+L\langle x_{k-1}-x_*,x_k-x_{k-1}\rangle$.

[F3] [[lem-smooth-composite-sum-preserves-proper-closed-convexity]]: $F$ is convex, so $F(x_k)\ge F(x_*)$.

## Proof

1.1 Put $d_k=x_k-x_{k-1}$. The identity $$2\langle x_{k-1}-x_*,d_k\rangle=\|x_k-x_*\|_2^2-\|x_{k-1}-x_*\|_2^2-\|d_k\|_2^2$$ and [F2] yield $F(x_k)-F(x_*)\le(L/2)(\|x_{k-1}-x_*\|_2^2-\|x_k-x_*\|_2^2)$. Summing from $1$ to $k$ gives $\sum_{j=1}^k(F(x_j)-F(x_*))\le L\|x_0-x_*\|_2^2/2$. [F2, given, algebra]

2.1 For every $j\ge2$, apply the one-step estimate with comparison point $z=x_{j-1}$; this point has finite $F$ by [F1]. The cross term is zero, so $F(x_{j-1})-F(x_j)\ge(L/2)\|x_j-x_{j-1}\|_2^2\ge0$. Hence the gaps for $x_1,x_2,\ldots$ are nonincreasing. Their sum bound in step 1.1 implies $k(F(x_k)-F(x_*))\le\sum_{j=1}^k(F(x_j)-F(x_*))\le L\|x_0-x_*\|_2^2/2$. Nonnegativity is [F3]. [F1, F2, F3, step 1.1, given, algebra] ∎
