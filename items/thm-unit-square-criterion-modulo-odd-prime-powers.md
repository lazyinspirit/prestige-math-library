---
id: thm-unit-square-criterion-modulo-odd-prime-powers
kind: theorem
title: "Unit square criterion and root count modulo odd prime powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-nonsingular-square-root-lift-modulo-odd-prime-powers,
       cor-number-of-solutions-to-quadratic-congruence-modulo-prime,
       def-legendre-symbol]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §§B.VII and D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 7, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture7.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.4"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For an odd prime $p$, $k\ge1$, and $p\nmid a$, the congruence $x^2\equiv a\pmod{p^k}$ is soluble if and only if $\left(\frac ap\right)=1$.

When soluble it has exactly two solution classes modulo $p^k$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $k\ge1$, and an integer $a$ with $p\nmid a$.

[L1] Every root modulo $p^j$ has a unique lift to a root modulo $p^{j+1}$ when $j\ge1$ and $p\nmid a$ ([[lem-nonsingular-square-root-lift-modulo-odd-prime-powers]]).

[L2] The congruence $x^2\equiv a\pmod p$ has exactly $1+(a/p)$ solution classes modulo $p$ ([[cor-number-of-solutions-to-quadratic-congruence-modulo-prime]]).

[L3] For $p\nmid a$, the Legendre symbol $(a/p)$ is $1$ when $a$ is a square modulo $p$ and $-1$ otherwise ([[def-legendre-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Any root modulo $p^k$ reduces to a root modulo $p$. Since $p\nmid a$, [L3] makes $(a/p)$ a sign, and [L2] says that a root exists only when $1+(a/p)=2$, equivalently when $(a/p)=1$. [L2, L3, given]

1.2 Conversely, if $(a/p)=1$, [L2] gives exactly two root classes modulo $p$. For $k=1$ these are the required roots. For $k>1$, repeatedly apply [L1] from exponent $1$ through exponent $k-1$ to lift each class uniquely; the two lifted classes remain distinct because their reductions modulo $p$ are distinct. [L1, L2, L3]

2.1 Every root modulo $p^k$ reduces to one of the two roots modulo $p$, and at every successive exponent [L1] forces it to be the unique lift of that reduction. Thus step 1.2 constructs all roots, so there are exactly two. Together with step 1.1 this proves both directions of the criterion and the count. [step 1.1, step 1.2, L1] ∎
