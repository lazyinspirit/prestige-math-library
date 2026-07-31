---
id: cor-euler-totient-is-multiplicative
kind: corollary
title: "Euler's totient is multiplicative: $\\gcd(m,n)=1$ implies $\\varphi(mn)=\\varphi(m)\\varphi(n)$ for positive $m,n$"
status: published
origin: session
deps: [thm-chinese-remainder-theorem, def-unit-group-modulo-n-and-euler-totient, thm-product-rule]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
pipeline_run: null
---

## Statement

For positive integers $m,n$ with $\gcd(m,n)=1$,

$$\varphi(mn)=\varphi(m)\varphi(n).$$

Thus Euler's totient is multiplicative on coprime positive arguments.

## Facts & Assumptions

**Given:** Coprime positive integers $m,n$.

[L1] The Chinese remainder map $\mathbb Z/(mn)\to\mathbb Z/m\times\mathbb Z/n$ is a bijection preserving multiplication and $[1]$ ([[thm-chinese-remainder-theorem]]).

[L2] A unit is an element with a multiplicative inverse, and $\varphi(c)$ is the cardinality of the unit group modulo the positive integer $c$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L3] The Cartesian product of finite sets of cardinalities $r,s$ has cardinality $rs$ ([[thm-product-rule]]).

## Proof

**Proof technique:** direct.

1.1 A class $u$ modulo $mn$ is a unit if and only if both components of its CRT image are units: an inverse of $u$ maps to componentwise inverses, while inverses of both components form a pair whose unique CRT preimage multiplies with $u$ to the unique preimage of the identity. [L1, L2]

2.1 Consequently the CRT bijection restricts to a bijection $(\mathbb Z/(mn))^\times\to(\mathbb Z/m)^\times\times(\mathbb Z/n)^\times$. Taking finite cardinalities and applying [L3] gives $\varphi(mn)=\varphi(m)\varphi(n)$. [step 1.1, L2, L3] ∎
