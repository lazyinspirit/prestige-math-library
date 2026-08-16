---
id: thm-jacobi-symbol-reciprocity
kind: theorem
title: "Quadratic reciprocity for coprime odd Jacobi denominators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quadratic-reciprocity, def-jacobi-symbol,
       thm-jacobi-symbol-multiplicativity, thm-canonical-prime-factorisation,
       thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For coprime odd positive integers $m,n$,

$$\left(\frac mn\right)\left(\frac nm\right)=(-1)^{(m-1)(n-1)/4}.$$

The formula includes $m=1$ or $n=1$.

## Facts & Assumptions

**Given:** Coprime odd positive integers $m,n$.

[L1] For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$ ([[thm-quadratic-reciprocity]]).

[L2] For an odd positive denominator, the Jacobi symbol is the product of the Legendre symbols over its canonical prime factors with multiplicity ([[def-jacobi-symbol]]).

[L3] The Jacobi symbol is multiplicative in both its numerator and its odd positive denominator ([[thm-jacobi-symbol-multiplicativity]]).

[L4] The primes and their exponents in the canonical factorisation of a positive integer are determined by that integer ([[thm-canonical-prime-factorisation]]).

[L5] Every positive integer has a finite prime factorisation, unique up to the order of its prime factors ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], $m$ and $n$ have finite prime factorisations; grouping equal factors and using [L4], write their canonical forms as $m=\prod_i p_i^{\alpha_i}$ and $n=\prod_j q_j^{\beta_j}$. Expanding both Jacobi symbols by [L2] and [L3] expresses their product as $\prod_{i,j}\left[\left(\frac{p_i}{q_j}\right)\left(\frac{q_j}{p_i}\right)\right]^{\alpha_i\beta_j}$. Coprimality makes every $p_i$ distinct from every $q_j$, so [L1] turns this into $(-1)^E$, where $E=\sum_{i,j}\alpha_i\beta_j(p_i-1)(q_j-1)/4$. [L1, L2, L3, L4, L5, given, algebra]

2.1 For a product of odd integers, repeated use of $(uv-1)/2\equiv(u-1)/2+(v-1)/2\pmod2$ gives $(m-1)/2\equiv\sum_i\alpha_i(p_i-1)/2$ and $(n-1)/2\equiv\sum_j\beta_j(q_j-1)/2$ modulo $2$. Their product is congruent to $E$, so step 1.1 gives the stated sign. If either integer is $1$, the relevant prime list and cross-product are empty and both sides equal $1$. [step 1.1, L2, algebra] ∎
