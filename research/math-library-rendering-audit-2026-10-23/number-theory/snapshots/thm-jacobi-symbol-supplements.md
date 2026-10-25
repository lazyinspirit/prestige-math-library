---
id: thm-jacobi-symbol-supplements
kind: theorem
title: "The two supplementary laws for the Jacobi symbol"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, thm-jacobi-symbol-multiplicativity,
       thm-first-supplement-to-quadratic-reciprocity,
       thm-second-supplement-to-quadratic-reciprocity]
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

For every odd positive integer $n$,

$$\left(\frac{-1}{n}\right)=(-1)^{(n-1)/2},\qquad \left(\frac2n\right)=(-1)^{(n^2-1)/8}.$$

Both formulas include $n=1$, where each Jacobi symbol and each displayed power of $-1$ equals $1$.

## Facts & Assumptions

**Given:** An odd positive integer $n$.

[L1] The Jacobi symbol is the product of the prime Legendre symbols, taken with the multiplicities in the canonical prime factorisation ([[def-jacobi-symbol]]).

[L2] For odd positive $u,v$, $\left(\frac a{uv}\right)=\left(\frac au\right)\left(\frac av\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L3] For every odd prime $p$, $\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}$ ([[thm-first-supplement-to-quadratic-reciprocity]]).

[L4] For every odd prime $p$, $\left(\frac2p\right)=(-1)^{(p^2-1)/8}$ ([[thm-second-supplement-to-quadratic-reciprocity]]).

## Proof

**Proof technique:** direct.

1.1 Expand $\left(\frac{-1}{n}\right)$ through [L1], applying [L3] to every prime factor with multiplicity and [L2] to multiply the contributions. For odd $u,v$, the difference $(uv-1)/2-(u-1)/2-(v-1)/2=(u-1)(v-1)/2$ is even, so iteration through the factor list gives $\left(\frac{-1}{n}\right)=(-1)^{(n-1)/2}$; for the empty factor list $n=1$, both sides are $1$. [L1, L2, L3, algebra]

2.1 Similarly, [L1] and [L4] give the product of the signs $(-1)^{(p^2-1)/8}$ with multiplicity. For odd $u,v$, the difference $((uv)^2-1)/8-(u^2-1)/8-(v^2-1)/8=(u^2-1)(v^2-1)/8$ is even, because each of $u^2-1$ and $v^2-1$ is divisible by $8$. Iterating this identity gives $\left(\frac2n\right)=(-1)^{(n^2-1)/8}$, again with value $1$ at $n=1$. [L1, L2, L4, algebra] ∎
