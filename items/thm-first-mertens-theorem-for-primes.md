---
id: thm-first-mertens-theorem-for-primes
kind: theorem
title: "Mertens' first theorem for primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-prime,
       def-von-mangoldt-function,
       lem-weighted-von-mangoldt-harmonic-estimate,
       thm-natural-logarithm-laws,
       thm-logarithm-derivative-and-integral,
       thm-p-series-real-exponents,
       thm-direct-comparison-test]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leo Goldmakher, A Quick Proof of Mertens' Theorem"
      url: "https://web.williams.edu/Mathematics/lg5/mertens.pdf"
    - title: "MIT 18.785 Number Theory I, Fall 2021, Problem Set 9"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_pset9.pdf"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge2$,

$$
\sum_{p\le x}\frac{\log p}{p}=\log x+O(1).
$$

## Facts & Assumptions

**Given:** A real number $x\ge2$.

[L1] The weighted von Mangoldt harmonic sum satisfies $$ \sum_{n\le x}\frac{\Lambda(n)}{n}=\log x+O(1) $$ ([[lem-weighted-von-mangoldt-harmonic-estimate]]).

[L2] The von Mangoldt function is $\Lambda(p^k)=\log p$ on prime powers and $0$ otherwise ([[def-von-mangoldt-function]], [[def-prime]]).

[L3] The real $p$-series $\sum_{m\ge1}m^{-3/2}$ converges, and comparison for nonnegative series is valid ([[thm-p-series-real-exponents]], [[thm-direct-comparison-test]]).

[L4] The logarithm is increasing and satisfies $\log(uv)=\log u+\log v$ ([[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $$ \sum_{n\le x}\frac{\Lambda(n)}{n} =\sum_{p\le x}\frac{\log p}{p} +\sum_{\substack{p^k\le x\\ k\ge2}}\frac{\log p}{p^k}. $$ So it is enough to show that the prime-power tail is bounded independently of $x$. [L2, given, algebra]

2.1 For $t\ge16$, define $h(t):=\sqrt t-\log t$. By [L4], $$ h'(t)=\frac1{2\sqrt t}-\frac1t=\frac{\sqrt t-2}{2t}\ge0, $$ so $h$ is increasing on $[16,\infty)$. Since $h(16)=4-\log16>0$, we obtain $\log p\le\sqrt p$ for every prime $p\ge16$. Hence $$ \sum_{k\ge2}\frac{\log p}{p^k} \le\frac{\log p}{p^2}\sum_{j\ge0}\frac1{p^j} \le\frac{2\log p}{p^2} \le\frac{2}{p^{3/2}} $$ for every prime $p\ge16$. The finitely many primes $p<16$ contribute only a constant, so [L3] shows that $$ \sum_{p^k\le x,\ k\ge2}\frac{\log p}{p^k}=O(1). $$ [L3, L4, step 1.1, algebra]

3.1 Combine step 2.1 with [L1]: $ \log x+O(1)=\sum_{n\le x}\frac{\Lambda(n)}{n} =\sum_{p\le x}\frac{\log p}{p}+O(1). $ Therefore $ \sum_{p\le x}\frac{\log p}{p}=\log x+O(1). $ [L1, step 1.1, step 2.1, algebra] ∎
