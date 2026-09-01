---
id: thm-second-mertens-theorem-for-primes
kind: theorem
title: "Mertens' second theorem for primes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-meissel-mertens-constant,
       lem-prime-counting-chebyshev-partial-summation,
       lem-abel-summation-by-parts,
       thm-first-mertens-theorem-for-primes,
       thm-logarithm-derivative-and-integral,
       thm-natural-logarithm-laws]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
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
\sum_{p\le x}\frac1p=\log\log x+B_1+O(1/\log x),
$$

where $B_1$ is the Meissel-Mertens constant of
[[def-meissel-mertens-constant]].

## Facts & Assumptions

**Given:** A real number $x\ge2$ and the function
$$
A(y):=\sum_{p\le y}\frac{\log p}{p}.
$$

[L1] Mertens' first theorem gives
$$
A(y)=\log y+O(1)
$$
for $y\ge2$ ([[thm-first-mertens-theorem-for-primes]]).

[L2] Abel summation by parts is available ([[lem-abel-summation-by-parts]]).

[L3] The logarithm derivative is $1/t$, so
$$
\frac{d}{dt}\frac1{\log t}=-\frac1{t\log^2 t}
$$
for $t>1$ ([[thm-logarithm-derivative-and-integral]],
[[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the sequence $a_n=(\log n)/n$ on primes and $a_n=0$ otherwise, with $b_n=1/\log n$. Exactly as in [[lem-prime-counting-chebyshev-partial-summation]], this gives $ \sum_{p\le x}\frac1p=\frac{A(x)}{\log x}+\int_2^x\frac{A(t)}{t\log^2 t}\,dt. $ [L2, L3, given, algebra]

2.1 By [L1], write $ A(t)=\log t+R(t) $ with $R(t)=O(1)$. Substituting into step 1.1 yields $ \sum_{p\le x}\frac1p =1+\frac{R(x)}{\log x}+\int_2^x\frac{dt}{t\log t} +\int_2^x\frac{R(t)}{t\log^2 t}\,dt. $ Since $\int_2^xdt/(t\log t)=\log\log x-\log\log2$, we obtain $ \sum_{p\le x}\frac1p =\log\log x+\left(1-\log\log2\right) +\int_2^x\frac{R(t)}{t\log^2 t}\,dt +O(1/\log x). $ [L1, L3, step 1.1, algebra]

3.1 Because $R$ is bounded and $ \int_x^\infty\frac{dt}{t\log^2 t}=\frac1{\log x}, $ the improper integral $ \int_2^\infty\frac{R(t)}{t\log^2 t}\,dt $ converges, and replacing the upper limit $x$ by $\infty$ changes step 2.1 by only $O(1/\log x)$. Therefore $ \sum_{p\le x}\frac1p=\log\log x+B_1+O(1/\log x), $ where $ B_1:=1-\log\log2+\int_2^\infty\frac{R(t)}{t\log^2 t}\,dt. $ This constant is exactly the limit in [[def-meissel-mertens-constant]]. [L3, step 2.1, algebra]

4.1 The displayed asymptotic implies $ \sum_{p\le x}\frac1p-\log\log x\to B_1 $ as $x\to\infty$, so the definition of [[def-meissel-mertens-constant]] is well posed. [step 3.1, algebra] ∎
