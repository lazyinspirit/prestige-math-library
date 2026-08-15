---
id: thm-classification-of-moduli-with-primitive-roots
kind: theorem
title: "A positive integer admits a primitive root exactly when it is $1$, $2$, $4$, $p^k$, or $2p^k$ for an odd prime $p$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-primitive-root-iff-unit-group-generator, thm-structure-of-the-unit-group-modulo-n, lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime, lem-primitive-roots-pass-between-odd-n-and-twice-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.IV.10"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

A positive integer $n$ admits a primitive root if and only if

$$n\in\{1,2,4,p^k,2p^k\},$$

where $p$ is an odd prime and $k\ge1$.

## Facts & Assumptions

**Given:** A positive integer $n$.

[L1] A primitive root exists exactly when the unit group is cyclic ([[prop-primitive-root-iff-unit-group-generator]]).

[L2] The unit group has the prime-power product decomposition of [[thm-structure-of-the-unit-group-modulo-n]].

[L3] A product of finite cyclic groups is cyclic exactly when the factor orders are pairwise coprime, by repeated use of [[lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime]].

[L4] Primitive-root existence is equivalent for odd $n$ and $2n$ ([[lem-primitive-roots-pass-between-odd-n-and-twice-n]]).

## Proof

**Proof technique:** direct.

1.1 The unit groups for $1$ and $2$ are trivial, that for $4$ is $C_2$, and [L2] makes the unit group for every odd prime power cyclic. By [L4], every twice-odd-prime-power also has a cyclic unit group. [L2, L4]

1.2 Conversely, write $n=2^a\prod p_i^{k_i}$. If $a\ge3$, [L2] contains cyclic factors of orders $2$ and $2^{a-2}$, which are not coprime, so [L3] makes the unit group noncyclic. If $a=2$ and an odd factor is present, the factor $C_2$ and the even-order odd-prime factor are likewise not coprime. [L2, L3]

1.3 If two distinct odd-prime factors are present, both cyclic factor orders are even, so [L3] again makes the product noncyclic. Thus cyclicity leaves only $1,2,4,p^k$, and $2p^k$. [L2, L3]

2.1 By [L1], all moduli in the displayed list admit primitive roots. [step 1.1, L1]

3.1 Combining steps 2.1 and 1.3 with [L1] proves both directions, including the convention at $n=1$. [step 2.1, step 1.2, step 1.3, L1] ∎
