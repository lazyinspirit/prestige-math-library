---
id: def-jacobi-symbol
kind: definition
title: "The Jacobi symbol, with its zero value and empty-product convention"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-legendre-symbol, thm-canonical-prime-factorisation,
       def-monoid-finite-product, def-common-divisor-and-gcd]
justified_by: [prop-jacobi-symbol-well-defined]
aliases: []
landmark: true
verification:
  precheck: n/a
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

## Definition

Let $a\in\mathbb Z$ and let $n$ be an odd positive integer. For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, define $\left(\frac an\right):=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$.

This is the **Jacobi symbol** of $a$ modulo $n$. The prime factors are distinct, every exponent is positive, and each factor on the right is a Legendre symbol ([[def-legendre-symbol]]). When $n=1$, the factor list is empty and the finite-product convention ([[def-monoid-finite-product]]) gives

$$\left(\frac a1\right)=1.$$

The value is $0$ exactly when $\gcd(a,n)>1$, and $\left(\frac a1\right)=1$. Independence from the ordering of the canonical factors, dependence only on $a\pmod n$, and the stated zero criterion are proved in [[prop-jacobi-symbol-well-defined]].
