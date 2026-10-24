---
id: thm-nilpotent-endomorphism-characterisations
kind: theorem
title: "Characterisations of a nilpotent endomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nilpotent-endomorphism, thm-triangularisation-splitting-criterion, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, thm-cayley-hamilton]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Results 8.17-8.18"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $N$ be an endomorphism of a nonzero $n$-dimensional vector space over $F$. The following are equivalent:

1. $N$ is nilpotent;
2. $\mu_N=x^r$ for some $1\le r\le n$;
3. $\chi_N=x^n$;
4. some ordered basis gives $N$ a strictly upper-triangular matrix.

In that case $r$ is the nilpotency index.

The nonzero hypothesis is needed for condition 2. On the zero space the unique endomorphism $N=0$ is nilpotent with nilpotency index $1$, and $\mu_N=\chi_N=1=x^0$ while the empty matrix is strictly upper triangular; so conditions 1, 3 and 4 hold there, but condition 2 fails, since no integer $r$ satisfies $1\le r\le 0$. The exponent $0$ of $\mu_N$ is then not the nilpotency index $1$.

## Facts & Assumptions

**Given:** An endomorphism $N$ of a finite-dimensional $F$-vector space $V$, with $n=\dim V$.

[L1] A polynomial $p$ annihilates an endomorphism exactly when its minimal polynomial divides $p$; on the zero space the minimal polynomial is $1$ ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L2] The minimal and characteristic polynomials have exactly the same monic irreducible factors ([[thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors]]).

[L3] An endomorphism is triangularisable exactly when its characteristic polynomial splits ([[thm-triangularisation-splitting-criterion]]).

[L4] The characteristic polynomial is monic of degree $n$, and it is $1$ when $n=0$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).

[L5] Every endomorphism satisfies its characteristic polynomial ([[thm-cayley-hamilton]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $n>0$. By [L1], $N^k=0$ for some positive $k$ exactly when $\mu_N\mid x^k$, which is exactly when $\mu_N=x^r$ for some positive $r$; [L5] then bounds the least such $r$ by $n$ once $\chi_N=x^n$. [L1, L5]

1.2 If $\mu_N=x^r$, [L2] says that $x$ is the only irreducible factor of $\chi_N$, and [L4] forces $\chi_N=x^n$; conversely $\chi_N=x^n$ and [L5] give $N^n=0$. [L2, L4, L5]

2.1 If $N$ is nilpotent, step 1.2 makes $\chi_N$ split, so [L3] gives an upper-triangular matrix; its diagonal entries are roots of $\chi_N=x^n$, hence are all zero, making it strictly upper triangular. Conversely, the $n$th power of a strictly upper-triangular $n\times n$ matrix is zero. [step 1.2, L3, algebra]

3.1 For $V=0$, [L1] and [L4] give $\mu_N=\chi_N=1=x^0$, the unique empty matrix is strictly upper triangular, and the convention in [[def-nilpotent-endomorphism]] gives index $1$, so conditions 1, 3 and 4 hold; condition 2 asks for $r$ with $1\le r\le 0$ and no such integer exists, and the exponent $0$ of $\mu_N$ differs from the index $1$, which is why the equivalence is stated for $n>0$. Together with steps 1.1-2.1 this proves every asserted case. [step 1.1, step 1.2, step 2.1, L1, L4] ∎
