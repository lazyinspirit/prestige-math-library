---
id: thm-qa-15-parity-approximate-degree
kind: theorem
title: "Parity has approximate degree N and requires at least N over 2 queries"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-15-acceptance-polynomial
  - def-qa-15-bit-oracle-query-complexity
  - lem-qa-15-symmetrization
  - thm-qa-15-acceptance-degree-bound
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - thm-intermediate-value
  - thm-algebra-of-continuous-functions
  - def-multivariate-polynomial-ring-by-iteration
  - def-monomials-multidegree-and-total-degree
  - thm-reals-ordered-field
justified_by: []
proof_strategy: direct
axiom_use: "No choice; only finite layers, a finite product polynomial and the intermediate value theorem are used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.5"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $N\ge1$, define $\mathrm{PARITY}_N(x)=|x|\pmod 2$. For every $0\le\epsilon<1/2$,
$$\widetilde{\deg}_{\epsilon}(\mathrm{PARITY}_N;\{0,1\}^N)=N,$$
and every local bit-query algorithm computing parity with error at most $\epsilon$ uses at least $\lceil N/2\rceil$ queries.

## Facts & Assumptions

**Given:** An integer $N\ge1$, an error $0\le\epsilon<1/2$, and the parity function on the full Boolean cube.

[F1] [[def-qa-15-acceptance-polynomial]]: approximate degree is the least degree bound of a real approximant on the stated domain.

[F2] [[lem-qa-15-symmetrization]]: an approximant to a symmetric function can be replaced by a univariate polynomial in Hamming weight without increasing degree.

[F3] [[thm-intermediate-value]] and [[thm-algebra-of-continuous-functions]]: polynomial functions are continuous, and a continuous real function whose endpoint values lie on opposite sides of $1/2$ takes the value $1/2$ in the interval.

[F4] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero univariate degree-$m$ polynomial has at most $m$ distinct roots.

[F5] [[thm-qa-15-acceptance-degree-bound]]: local bit-query complexity is at least the ceiling of half the approximate degree.

[F6] [[def-multivariate-polynomial-ring-by-iteration]] and [[def-monomials-multidegree-and-total-degree]]: finite products and sums of real linear polynomials are real polynomials, and the product of $N$ linear factors has total degree at most $N$.

[F7] [[thm-reals-ordered-field]]: real arithmetic respects a total order, so $\epsilon<1/2$ makes the even and odd approximating values lie strictly on opposite sides of $1/2$.

## Proof

1.1 Choose an $\epsilon$-approximant $p$ of degree at most $d=\widetilde{\deg}_{\epsilon}(\mathrm{PARITY}_N)$ by [F1]. By [F2] it yields a univariate polynomial $q(t)$ of degree at most $d$ with $|q(k)- (k\bmod 2)|\le\epsilon$ for every integer $0\le k\le N$. Hence $q(k)-1/2<0$ for even $k$ and $q(k)-1/2>0$ for odd $k$, because $\epsilon<1/2$ and [F7]. [given, F1, F2, F7, algebra]

2.1 The polynomial $q(t)-1/2$ is continuous by [F3]. For each $k=0,\ldots,N-1$, its values at $k$ and $k+1$ have opposite signs by step 1.1. The intermediate value theorem [F3] gives a root in each open interval $(k,k+1)$; the root is interior because neither endpoint value is zero. These $N$ open intervals are disjoint, so the roots are $N$ distinct real numbers. Since $q-1/2$ is not the zero polynomial (its value at $0$ is negative), [F4] implies its degree is at least $N$, and therefore $d\ge N$. [step 1.1, F3, F4, algebra]

3.1 The polynomial $P(X)=\frac12(1-\prod_{i=0}^{N-1}(1-2X_i))$ has degree at most $N$ by [F6] and equals parity on the Boolean cube, since each factor $1-2x_i$ is $1$ for bit $0$ and $-1$ for bit $1$. Thus the approximate degree is at most $N$; with step 2.1 it equals $N$. The query lower bound follows from [F5]. [given, F1, F5, F6, step 2.1, algebra] ∎
