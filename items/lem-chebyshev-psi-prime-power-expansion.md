---
id: lem-chebyshev-psi-prime-power-expansion
kind: lemma
title: "Prime-power expansion of Chebyshev's psi function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chebyshev-psi-function,
       def-chebyshev-theta-function,
       def-von-mangoldt-function]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge1$,

$$
\psi(x)=\sum_{p^k\le x}\log p=\sum_{k\ge1}\theta(x^{1/k}),
$$

and both sums are finite.

## Facts & Assumptions

**Given:** A real number $x\ge1$.

[L1] The von Mangoldt function satisfies $\Lambda(n)=\log p$ when $n=p^k$ is a
prime power and $\Lambda(n)=0$ otherwise ([[def-von-mangoldt-function]]).

[L2] By definition,
$$
\psi(x)=\sum_{n\le x}\Lambda(n)
$$
([[def-chebyshev-psi-function]]).

[L3] By definition,
$$
\theta(y)=\sum_{p\le y}\log p
$$
for every real $y\ge2$ ([[def-chebyshev-theta-function]]).

## Proof

**Proof technique:** direct.

1.1 Only prime powers contribute to the sum in [L2], by [L1]. Therefore $ \psi(x)=\sum_{p^k\le x}\log p, $ where the sum ranges over all prime powers at most $x$. [L1, L2, given]

2.1 The displayed prime-power sum is finite: if $p^k\le x$, then already $2^k\le p^k\le x$, so $k\le\log_2 x$; and for each fixed $k$, only the primes $p\le x^{1/k}$ occur. [step 1.1, given, algebra]

3.1 Fix $k\ge1$. The contribution of the $k$th prime-power layer is $ \sum_{p^k\le x}\log p=\sum_{p\le x^{1/k}}\log p=\theta(x^{1/k}), $ by [L3]. Summing these finitely many layers from step 2.1 gives $ \sum_{p^k\le x}\log p=\sum_{k\ge1}\theta(x^{1/k}). $ [L3, step 2.1, algebra]

4.1 Combining steps 1.1 and 3.1 proves both displayed identities. [step 1.1, step 3.1] ∎
