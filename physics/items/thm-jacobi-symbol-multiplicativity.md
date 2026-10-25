---
id: thm-jacobi-symbol-multiplicativity
kind: theorem
title: "The Jacobi symbol is multiplicative in numerator and denominator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, thm-legendre-symbol-multiplicativity,
       thm-canonical-prime-factorisation, thm-fundamental-theorem-of-arithmetic,
       lem-p-adic-valuation-additive]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
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

For integers $a,b$ and an odd positive integer $n$,

$$\left(\frac{ab}{n}\right)=\left(\frac an\right)\left(\frac bn\right).$$

For an integer $a$ and odd positive integers $m,n$,

$$\left(\frac a{mn}\right)=\left(\frac am\right)\left(\frac an\right).$$

No coprimality hypothesis is imposed on either pair of arguments.

## Facts & Assumptions

**Given:** Integers $a,b$ and odd positive integers $m,n$.

[L1] For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, the Jacobi symbol is $\left(\frac an\right)=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$ ([[def-jacobi-symbol]]).

[L2] For every odd prime $p$ and integers $a,b$, $\left(\frac{ab}{p}\right)=\left(\frac ap\right)\left(\frac bp\right)$ ([[thm-legendre-symbol-multiplicativity]]).

[L3] Canonical prime-factor exponents are determined by the positive integer being factored ([[thm-canonical-prime-factorisation]]).

[L4] For a prime $p$ and nonzero integers $u,v$, $v_p(uv)=v_p(u)+v_p(v)$ ([[lem-p-adic-valuation-additive]]).

[L5] Every positive integer has a finite prime factorisation, unique up to the order of its prime factors ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to every prime factor in [L1] and regroup the finite product: $\left(\frac{ab}{n}\right)=\prod_i\left(\frac a{p_i}\right)^{e_i}\prod_i\left(\frac b{p_i}\right)^{e_i}=\left(\frac an\right)\left(\frac bn\right)$. This remains valid when a Legendre factor is zero. [L1, L2, algebra]

2.1 By [L5], choose finite prime factorisations of $m$ and $n$; concatenating their factor lists gives a prime factorisation of $mn$. Grouping equal primes and using [L3] and [L4], the exponent of each prime in $mn$ is the sum of its exponents in $m$ and $n$. Substituting those sums in [L1] and regrouping gives $\left(\frac a{mn}\right)=\left(\frac am\right)\left(\frac an\right)$. If either denominator is $1$, its factor list is empty and its contribution is $1$. [L1, L3, L4, L5, algebra] ∎
