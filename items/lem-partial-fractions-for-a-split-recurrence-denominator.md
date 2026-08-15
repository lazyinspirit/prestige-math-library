---
id: lem-partial-fractions-for-a-split-recurrence-denominator
kind: lemma
title: "A proper rational function with split denominator has a unique repeated-pole partial-fraction expansion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-reciprocal-root-convention-for-recurrences, thm-bezout-identity-for-polynomials, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Theorem 4.1.1"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "B. E. Sagan, Combinatorics: The Art of Counting, Theorem 3.7.1"
      url: "https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf"
pipeline_run: null
---

## Statement

Let $E$ be a field, let $\lambda_1,\ldots,\lambda_s\in E$ be pairwise distinct and nonzero, let $m_i\ge1$, and put

$$Q(x)=\prod_{i=1}^{s}(1-\lambda_i x)^{m_i}.$$

For every $P\in E[x]$ with $P=0$ or $\deg P<\deg Q$, there are unique scalars $b_{ij}\in E$ such that

$$\frac{P(x)}{Q(x)}=\sum_{i=1}^{s}\sum_{j=1}^{m_i}\frac{b_{ij}}{(1-\lambda_i x)^j}.$$

For $P=0$, every $b_{ij}$ is zero.

## Facts & Assumptions

**Given:** A field $E$, distinct nonzero $\lambda_i$, positive multiplicities $m_i$, and a proper numerator $P$ for $Q=\prod_i(1-\lambda_i x)^{m_i}$.

[L1] A split recurrence denominator has factors $(1-\lambda_i x)^{m_i}$ corresponding to the characteristic factors $(t-\lambda_i)^{m_i}$ ([[rem-reciprocal-root-convention-for-recurrences]]).

[L2] Coprime polynomials $f,g$ over a field admit $A,B$ with $Af+Bg=1$ ([[thm-bezout-identity-for-polynomials]]).

[L3] Splitting permits a factorisation into linear factors with repetitions recording multiplicity ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 The powers $q_i=(1-\lambda_i x)^{m_i}$ are pairwise coprime: distinct linear factors have no common root, and [L2] then gives a Bezout identity for every pair. [given, L2, L3]

2.1 Iterating the two-factor Bezout decomposition gives polynomials $U_i$ with $\deg U_i<m_i$ such that $P/Q=\sum_i U_i/q_i$; at each stage the remainder modulo $q_i$ supplies $U_i$. [step 1.1, L2, algebra]

3.1 Each $U_i/q_i$ has a unique expansion $\sum_{j=1}^{m_i}b_{ij}(1-\lambda_i x)^{-j}$, because the polynomials $1,(1-\lambda_i x),\ldots,(1-\lambda_i x)^{m_i-1}$ form a basis of the polynomials of degree below $m_i$. [step 2.1, algebra]

4.1 If the displayed partial-fraction sum is zero, clear denominators and reduce modulo $q_i$; all terms except the $i$th vanish, so $U_i\prod_{k\ne i}q_k\equiv0\pmod{q_i}$. The second factor is invertible modulo $q_i$ by [L2], hence $U_i=0$ for every $i$, and step 3.1 gives every $b_{ij}=0$. [step 1.1, step 3.1, L2]

5.1 Steps 2.1 and 3.1 give existence, while step 4.1 gives uniqueness. The zero numerator yields the all-zero coefficients. [step 2.1, step 3.1, step 4.1, L1] ∎
