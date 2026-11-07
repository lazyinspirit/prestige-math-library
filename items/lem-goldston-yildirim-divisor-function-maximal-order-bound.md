---
id: lem-goldston-yildirim-divisor-function-maximal-order-bound
kind: lemma
title: "Maximal-order bound for the divisor function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-divisor-counting-function
  - thm-canonical-prime-factorisation
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9, proof of Proposition 9.10; standard maximal-order estimate used for the divisor weight"
    - title: "Daniel A. Goldston and Cem Y. Yıldırım, Higher correlations of divisor sums related to primes III: k-correlations"
      url: "https://arxiv.org/pdf/math/0209102"
      locator: "§6; divisor weights and prime-factor splitting in correlation estimates"
---
## Statement

Let $d(n)$ be the number of positive divisors of an integer $n\ge1$. There is an absolute constant $C>0$ such that, for all sufficiently large $n$,
$$d(n)\le\exp\!\left(C\frac{\log n}{\log\log n}\right).$$
Consequently, for each $\eta>0$ there is a constant $C_\eta>0$ such that $d(n)\le C_\eta n^\eta$ for all $n\ge1$.

## Statement references

[Green and Tao, Annals 2008, §9, proof of Proposition 9.10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, §6](https://arxiv.org/pdf/math/0209102)

## Facts & Assumptions

**Given:** A positive integer $n$, its prime factorization, and the divisor-counting function.

[F1] [[def-divisor-counting-function]]: $d(n)$ is the number of positive divisors of $n$.

[F2] [[thm-canonical-prime-factorisation]]: A positive integer factors uniquely as $n=\prod_p p^{a_p}$ with finitely many nonzero exponents $a_p\ge1$.

## Proof

1.1 Put $L=\log n$ and $u=\log L$. For sufficiently large $n$, set $y=L/u^2\ge2$ and write $n=\prod_p p^{a_p}$. Each divisor chooses independently an exponent between $0$ and $a_p$, so [F1] and [F2] give $d(n)=\prod_p(a_p+1)$. For $p\le y$, there are at most $y$ primes and $a_p\le L/\log2$, so their contribution is at most $(1+L/\log2)^y$; its logarithm is $O(L/u)$. [F1, F2, given, algebra]

2.1 For $p>y$, $a+1\le2^a$ for every integer $a\ge1$, and $2^a\le p^{a\log2/\log y}$. Therefore $\prod_{p>y}(a_p+1)\le n^{\log2/\log y}$. Since $\log y=u-2\log u\ge u/2$ for sufficiently large $n$, the logarithm of this factor is also $O(L/u)$. Multiplying the small- and large-prime factors proves the exponential bound. [step 1.1, algebra]

3.1 As $\log\log n\to\infty$, for each $\eta>0$ the exponent $C\log n/\log\log n$ is at most $\eta\log n$ for all sufficiently large $n$, so $d(n)\le n^\eta$ there. Increasing a constant to cover the finitely many smaller positive integers proves the stated consequence. [step 2.1, given, algebra] ∎
