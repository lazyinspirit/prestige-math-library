---
id: lem-module-jacobi-formal-delta-substitution-identity
kind: lemma
title: Formal delta substitution identity for module Jacobi
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-formal-distribution-on-a-vector-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §§1.3–1.4
      url: https://arxiv.org/pdf/0809.1380
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I, equation (2.37)
      url: https://arxiv.org/pdf/1012.4193
---

## Statement

With the two-variable formal delta distribution and binomial expansions of [[def-formal-distribution-on-a-vector-space]],
$$
z_0^{-1}\delta\!\left(\frac{z_1-z_2}{z_0}\right)-z_0^{-1}\delta\!\left(\frac{z_2-z_1}{-z_0}\right)=z_2^{-1}\delta\!\left(\frac{z_1-z_0}{z_2}\right),
$$
where the first term expands in nonnegative powers of $z_2$, the second in nonnegative powers of $z_1$, and the right side in nonnegative powers of $z_0$.

## Facts & Assumptions

**Given:** Three independent formal variables $z_0,z_1,z_2$ and the formal delta and binomial-expansion conventions of [[def-formal-distribution-on-a-vector-space]].

[F1] [[def-formal-distribution-on-a-vector-space]]: for every integer $r$, $\iota_{z_1,z_2}(z_1-z_2)^r=\sum_{j\ge0}\binom rj(-1)^jz_1^{r-j}z_2^j$ and $\iota_{z_2,z_1}(z_1-z_2)^r=\sum_{j\ge0}\binom rjz_1^j(-z_2)^{r-j}$; $\delta(x)=\sum_{n\in\mathbb Z}x^n$.

## Proof

1.1 For $N\ge0$, the coefficient of $z_0^{-N-1}$ in the first term is the polynomial $(z_1-z_2)^N$ expanded in $z_2$. In the second term the same coefficient is $(z_1-z_2)^N$ expanded in $z_1$: the sign from $(-z_0)^{-N}$ cancels the sign in $(z_2-z_1)^N$. These are the same polynomial, so their difference is zero. The right side has only nonnegative powers of $z_0$. [F1, algebra]

2.1 Fix $j\ge0$. The coefficient of $z_0^j$ in the first term is $\sum_{k\ge0}\binom{j+k}{j}z_1^{-j-1-k}z_2^k$. The coefficient in the second delta term before its outer minus is $(-1)^{j+1}\sum_{k\ge0}\binom{j+k}{j}z_1^kz_2^{-j-1-k}$, by expanding $(z_2-z_1)^{-j-1}$ in nonnegative powers of $z_1$. Thus the left-side coefficient is the sum of the first series and $(-1)^j$ times $\sum_{k\ge0}\binom{j+k}{j}z_1^kz_2^{-j-1-k}$. On the right, the coefficient is $(-1)^j\sum_{n\in\mathbb Z}\binom{n}{j}z_1^{n-j}z_2^{-n-1}$. Splitting at $n=j$, using $n=-1-k$ for the negative indices and $\binom{-1-k}{j}=(-1)^j\binom{j+k}{j}$, gives exactly the same two series. Coefficients of every integer power of $z_0$ agree, proving the identity. [F1, step 1.1, algebra] ∎
