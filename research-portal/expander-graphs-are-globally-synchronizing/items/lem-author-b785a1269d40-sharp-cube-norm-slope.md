---
id: lem-author-b785a1269d40-sharp-cube-norm-slope
title: The sharp coordinate constant already occurs inside the Bernoulli cube
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-symmetric-coordinate-metrics
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_roles:
  def-expander-prereq-symmetric-coordinate-metrics: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $n\ge2$, $0<p<1$, $d=\binom n2$, and let $T(x)$ be the symmetric matrix with zero diagonal and upper-triangular entries $x\in\mathbb R^d$. Let $J$ be the $n\times n$ matrix with every entry equal to $1$. Set $f(x)=\|T(x)-pJ\|$. On the cube $[0,1]^d$ with its ordinary Euclidean coordinate metric, $f$ is convex and has least Lipschitz constant
$$L_n=\sqrt{2(n-1)/n}.$$
In particular $f$ is not 1-Lipschitz when $n\ge3$.

## Facts & Assumptions

[F1] The zero-diagonal symmetric coordinate map gives a convex norm function and the upper Lipschitz bound $L_n=\sqrt{2(n-1)/n}$ ([[def-expander-prereq-symmetric-coordinate-metrics]]).

[F2] The operator norm on a Euclidean space is the supremum of the lengths of images of unit vectors ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

**Given:** The hypotheses and objects in the Statement.

**Goal:** Establish the asserted conclusions.

1.1 The upper bound and convexity follow directly from [F1], restricting its affine norm map to the cube. For sharpness choose $0<s\le p$, take all coordinates of $x$ equal to $p$, and all coordinates of $y$ equal to $p-s$. Both points belong to the cube. The corresponding centered matrices are $-pI$ and $-pI-s(J-I)$. [F1, given, construct]

2.1 The second matrix has eigenvalue $-p-(n-1)s$ on the constant vectors and eigenvalue $-p+s$ on their orthogonal complement. An orthogonal decomposition into these two spaces shows directly from [F2] that its norm is $p+(n-1)s$: the absolute value of its other eigenvalue is at most $p$, since $s\le p$. The first matrix has norm $p$. Therefore $|f(y)-f(x)|/\|y-x\|_2=(n-1)s/(s\sqrt d)=L_n$. This proves sharpness, and $L_n>1$ exactly when $n>2$. [F2, step 1.1, algebra] ∎
