---
id: cor-number-of-square-roots-of-a-unit-modulo-n
kind: corollary
title: "The number of square roots of a unit modulo $n$ is the product of the local counts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-square-criterion-modulo-odd-prime-powers,
       thm-unit-square-criterion-modulo-two-powers,
       thm-unit-group-chinese-remainder-decomposition,
       thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $[a]_n$ be a unit square modulo $n\ge1$. The number of square roots is the product of the local root counts.

More explicitly, write $n=2^e\prod_{i<r}p_i^{e_i}$ with distinct odd primes $p_i$. The number of roots of $x^2\equiv a\pmod n$ is $2^r c_e$, where

$$c_e=\begin{cases}1,&e=0\text{ or }e=1,\\2,&e=2,\\4,&e\ge3.\end{cases}$$

For odd $n=\prod_{i<r}p_i^{e_i}$, the soluble unit congruence $x^2\equiv a\pmod n$ has exactly $2^r$ roots. At $n=1$ the empty product gives one root.

## Facts & Assumptions

**Given:** A positive integer $n$ and a unit $[a]_n$ for which $x^2\equiv a\pmod n$ is soluble.

[L1] A soluble unit square congruence modulo an odd prime power has exactly two root classes ([[thm-unit-square-criterion-modulo-odd-prime-powers]]).

[L2] A soluble unit square congruence modulo $2^e$ has one root for $e=1$, two roots for $e=2$, and four roots for $e\ge3$ ([[thm-unit-square-criterion-modulo-two-powers]]).

[L3] The Chinese remainder map is a group isomorphism from the unit group modulo a product of pairwise coprime positive integers to the product of their unit groups, including the empty product ([[thm-unit-group-chinese-remainder-decomposition]]).

[L4] Every positive integer has a finite prime factorisation, unique up to the order of its prime factors ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], group the finite prime factorisation of $n$ into its pairwise coprime prime-power factors. Restrict the CRT isomorphism [L3] to the equation $u^2=[a]_n$. It gives a bijection from the global root set to the Cartesian product of the root sets in those components, because an element satisfies the global equation exactly when each component satisfies its local equation. [L3, L4, given]

2.1 The cardinality of that finite Cartesian product is the product of its local cardinalities. Each odd-prime-power factor contributes $2$ by [L1], while [L2] gives the factor $c_e$ for the two-part; if there are no prime-power factors, the empty product is $1$. This is the displayed formula. [step 1.1, L1, L2, algebra] ∎
