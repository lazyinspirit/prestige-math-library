---
dependency_level: 2
id: lem-smooth-counting-logarithmic-identity-and-finite-euler-product
kind: lemma
title: The smooth-counting logarithmic identity and finite Euler product
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-y-smooth-integer-and-smooth-counting-function
- thm-fundamental-theorem-of-arithmetic
- thm-logarithm-derivative-and-integral
- thm-complex-exponential-addition-and-real-extension
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Hildebrand and Tenenbaum, Integers without large prime factors; direct local reconstruction of bounded-parameter and transform inputs
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
---

## Statement

For real $x\ge1$ and $y\ge2$,

$$\Psi(x,y)\log x=\int_1^x\frac{\Psi(t,y)}t\,dt+\sum_{\substack{p\le y\\p^k\le x,\ k\ge1}}(\log p)\Psi(x/p^k,y).$$

For complex $s$ with $\Re s>0$, define

$$Z_y(s)=\prod_{p\le y}(1-p^{-s})^{-1}.$$

Then $Z_y(s)=\sum_{P^+(n)\le y}n^{-s}$, absolutely and locally uniformly on $\Re s>0$, and

$$-\frac{Z_y'(s)}{Z_y(s)}=\sum_{p\le y}\sum_{k\ge1}(\log p)p^{-ks}.$$

The integral in the first identity is a finite Riemann integral; the finite prime product and the Dirichlet series use $P^+(1)=1$.

## Statement references

[[def-y-smooth-integer-and-smooth-counting-function]]

[[thm-fundamental-theorem-of-arithmetic]]

[[thm-logarithm-derivative-and-integral]]

[[thm-complex-exponential-addition-and-real-extension]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local result [[def-y-smooth-integer-and-smooth-counting-function]] supplies its stated facts under its stated hypotheses.

[F2] The local result [[thm-fundamental-theorem-of-arithmetic]] supplies its stated facts under its stated hypotheses.

[F3] The local result [[thm-logarithm-derivative-and-integral]] supplies its stated facts under its stated hypotheses.

[F4] The local result [[thm-complex-exponential-addition-and-real-extension]] supplies its stated facts under its stated hypotheses.

## Proof

1.1 Sum $\log n$ over the $y$-smooth integers $n\le x$. On the one hand, each such $n$ contributes $\log x-\int_n^xdt/t$, so finite interchange gives $\sum\log n=\Psi(x,y)\log x-\int_1^x\Psi(t,y)dt/t$. On the other hand, unique prime factorization gives $\log n=\sum_{p^k\mid n}\log p$. All its primes are at most $y$, and dividing by such a $p^k$ preserves smoothness. Finite reindexing therefore gives $\sum\log n=\sum_{p\le y,p^k\le x}(\log p)\Psi(x/p^k,y)$. Equating these expressions proves the first identity, including $x=1$. [given, F1, F2, F3, F4, algebra]

2.1 For each of the finitely many primes $p\le y$, the geometric series $\sum_{k\ge0}p^{-ks}$ converges absolutely for $\Re s>0$. Multiplying these finitely many series and using unique factorization gives the displayed Dirichlet series. On $\Re s\ge\sigma_0>0$, the product of the corresponding positive geometric sums is a finite constant, giving local uniform absolute convergence. Each factor is nonzero because $|p^{-s}|<1$. Differentiating the finite product and summing its geometric logarithmic derivatives gives the last identity; the series over $k$ is locally uniformly convergent by the same geometric bounds. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
