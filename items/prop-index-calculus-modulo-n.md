---
id: prop-index-calculus-modulo-n
kind: proposition
title: "Index calculus: products become sums and powers become scalar multiples modulo $\\varphi(n)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-index-of-a-unit-relative-to-a-primitive-root, lem-group-power-laws, lem-order-characterisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, §C.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $g$ be a primitive root modulo $n$. For units $a,b$ modulo $n$ and $k\in\mathbb Z$,

$$\operatorname{ind}_g(ab)=\operatorname{ind}_g(a)+\operatorname{ind}_g(b),\qquad \operatorname{ind}_g(a^k)=k\operatorname{ind}_g(a)$$

in $\mathbb Z/\varphi(n)$.

## Facts & Assumptions

**Given:** A primitive root $g$ modulo $n$, units $a,b$, and an integer $k$.

[L1] The index of a unit is its unique exponent class modulo $\varphi(n)$ relative to $g$ ([[def-index-of-a-unit-relative-to-a-primitive-root]]).

[L2] Group powers satisfy $g^{r+s}=g^rg^s$ and $(g^r)^k=g^{rk}$ ([[lem-group-power-laws]]).

[L3] For an element of order $f$, $g^u=1$ if and only if $f\mid u$ ([[lem-order-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Choose integers $r,s$ representing $\operatorname{ind}_g(a)$ and $\operatorname{ind}_g(b)$, so $a=g^r$ and $b=g^s$. [L1]

2.1 By [L2], $ab=g^{r+s}$ and $a^k=g^{rk}$. [step 1.1, L2]

3.1 Applying the uniqueness in [L1], equivalently [L3], to step 2.1 gives the two asserted congruences modulo $\varphi(n)$. [step 2.1, L1, L3] ∎
