---
id: thm-qa-15-exact-degree-or
kind: theorem
title: "The exact polynomial degree of OR is N"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-15-acceptance-polynomial
  - lem-qa-15-symmetrization
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - def-multivariate-polynomial-ring-by-iteration
  - def-monomials-multidegree-and-total-degree
justified_by: []
proof_strategy: direct
axiom_use: "No choice; the Boolean cube and its Hamming-weight layers are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $N\ge1$, let $\mathrm{OR}_N(x)=0$ when $x=0^N$ and $1$ otherwise. Its exact approximate degree is
$$\widetilde{\deg}_0(\mathrm{OR}_N;\{0,1\}^N)=N.$$

## Facts & Assumptions

**Given:** An integer $N\ge1$ and the total Boolean function $\mathrm{OR}_N$.

[F1] [[def-qa-15-acceptance-polynomial]]: exact approximate degree is the least total-degree bound of a real polynomial agreeing with the function on the domain.

[F2] [[lem-qa-15-symmetrization]]: a permutation-invariant exact approximant can be replaced by a univariate polynomial $q(t)$ of no larger degree taking the same values on every Hamming-weight layer.

[F3] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero degree-$m$ real polynomial has at most $m$ distinct real roots.

[F4] [[def-multivariate-polynomial-ring-by-iteration]] and [[def-monomials-multidegree-and-total-degree]]: finite products of linear coordinate polynomials are real polynomials with total degree at most the number of factors.

## Proof


1.1 The polynomial $P(X)=1-\prod_{i=0}^{N-1}(1-X_i)$ has total degree at most $N$ by [F4]. At a Boolean vector $x$, the product is $1$ exactly when all bits are zero and is $0$ otherwise, so $P(x)=\mathrm{OR}_N(x)$. Thus [F1] gives $\widetilde{\deg}_0(\mathrm{OR}_N)\le N$. [given, F1, F4, algebra]

1.2 Let $p$ be any exact polynomial approximant of degree at most $d$. Since OR is invariant under coordinate permutations, [F2] gives a univariate $q$ of degree at most $d$ with $q(0)=0$ and $q(k)=1$ for each integer $1\le k\le N$. Therefore the nonzero polynomial $q-1$ has the $N$ distinct roots $1,\ldots,N$ and is nonzero because $(q-1)(0)=-1$. By [F3], its degree is at least $N$, so $d\ge N$. Hence every exact approximant has degree at least $N$. [given, F2, F3, algebra]

2.1 The upper and lower bounds of steps 1.1 and 1.2 coincide, proving the equality. [step 1.1, step 1.2] ∎
