---
id: thm-third-mertens-theorem-for-primes
kind: theorem
title: "Mertens' third theorem for primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-euler-mascheroni-constant,
       def-von-mangoldt-function,
       thm-first-mertens-theorem-for-primes,
       thm-second-mertens-theorem-for-primes,
       thm-gamma-weierstrass-product,
       thm-log-one-plus-x-power-series,
       thm-natural-logarithm-laws]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.785 Number Theory I, Fall 2021, Problem Set 9"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_pset9.pdf"
    - title: "Terence Tao, Mertens' theorems"
      url: "https://terrytao.wordpress.com/2013/12/11/mertens-theorems/"
    - title: "Terence Tao, 254A Notes 1: Elementary multiplicative number theory, Theorems 15 and 26"
      url: "https://terrytao.wordpress.com/2014/11/23/254a-notes-1-elementary-multiplicative-number-theory/"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge2$,

$$\prod_{p\le x}\left(1-\frac1p\right) =\frac{e^{-\gamma}}{\log x}\left(1+O(1/\log x)\right),$$

where $\gamma$ is the Euler-Mascheroni constant of
[[def-euler-mascheroni-constant]].

## Facts & Assumptions

**Given:** A real number $x\ge2$.

[L1] MIT Problem Set 9, Problem 2(c)--(f), and Tao's displayed equations (25),
(34), and the computation immediately before Theorem 26 prove the exact
prime-power-weight estimate
$$\sum_{2\le n\le x}\frac{\Lambda(n)}{n\log n}=\log\log x+\gamma+O(1/\log x).$$
These are the first and third sources listed above.

[L2] If $n=p^k$ is a prime power, then
$$\frac{\Lambda(n)}{n\log n}=\frac1{kp^k}$$
([[def-von-mangoldt-function]], [[thm-natural-logarithm-laws]]).

[L3] For $|u|<1$,
$$-\log(1-u)=\sum_{k\ge1}\frac{u^k}{k}$$
([[thm-log-one-plus-x-power-series]]).

[L4] The logarithm laws and the reciprocal-Gamma product identify the same
$\gamma$ as the Euler-Mascheroni constant
([[thm-natural-logarithm-laws]], [[thm-gamma-weierstrass-product]],
[[def-euler-mascheroni-constant]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the sum in [L1] is exactly the finite prime-power sum $$S(x):=\sum_{p^k\le x}\frac1{kp^k}.$$ Hence $$S(x)=\log\log x+\gamma+O(1/\log x).$$ [L1, L2, given, algebra]

1.2 Every factor $1-1/p$ is positive. Applying [L3] with $u=1/p$ and summing the resulting absolutely convergent series gives $$-\log\prod_{p\le x}\left(1-\frac1p\right)=\sum_{p\le x}\sum_{k\ge1}\frac1{kp^k}.$$ [L3, L4, given, algebra]

2.1 The difference between the sum in step 1.2 and $S(x)$ consists of terms with $k\ge2$, $p\le x$, and $p^k>x$. For a fixed $k$, comparison with the positive decreasing series $\sum n^{-k}$ gives $$\sum_{\substack{p\le x\\p^k>x}}\frac1{kp^k}=\begin{cases}O(x^{-1/2}),&2\le k\le\lfloor\log_2x\rfloor,\\O(2^{-k}),&k>\lfloor\log_2x\rfloor.\end{cases}$$ Indeed, in the first range $x^{1/k}\ge2$ and the integral tail is at most a constant times $x^{-(k-1)/k}\le x^{-1/2}$; in the second range the full tail from $n=2$ is $O(2^{-k})$. Summing over $k$ gives $$\sum_{p\le x}\sum_{k\ge1}\frac1{kp^k}=S(x)+O(\log x/\sqrt x)+O(1/x)=S(x)+O(1/\log x).$$ [step 1.1, step 1.2, algebra]

3.1 Combining steps 1.1, 1.2, and 2.1 yields $$\log\prod_{p\le x}\left(1-\frac1p\right)=-\log\log x-\gamma+O(1/\log x).$$ Exponentiating the bounded $O(1/\log x)$ term gives $$\prod_{p\le x}\left(1-\frac1p\right)=\frac{e^{-\gamma}}{\log x}\left(1+O(1/\log x)\right).$$ [L4, step 1.1, step 1.2, step 2.1, algebra] ∎
