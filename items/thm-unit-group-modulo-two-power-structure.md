---
id: thm-unit-group-modulo-two-power-structure
kind: theorem
title: "For $k\\ge3$, $(\\mathbb Z/2^k\\mathbb Z)^\\times\\cong C_2\\times C_{2^{k-2}}$, generated uniquely as $(-1)^\\varepsilon5^j$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-order-of-five-modulo-two-powers, thm-totient-of-a-prime-power, prop-order-of-finite-direct-product, thm-unit-criterion-modulo-n, def-unit-group-modulo-n-and-euler-totient, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.IV.8"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

For every $k\ge3$,

$$ (\mathbb Z/2^k)^\times\cong C_2\times C_{2^{k-2}}.$$

More precisely, every unit has a unique representation $(-1)^\varepsilon5^j$ with $\varepsilon\in\{0,1\}$ and $j$ modulo $2^{k-2}$.

## Facts & Assumptions

**Given:** An integer $k\ge3$.

[L1] The class of $5$ has order $2^{k-2}$ modulo $2^k$ ([[lem-order-of-five-modulo-two-powers]]).

[L2] $\varphi(2^k)=2^{k-1}$ ([[thm-totient-of-a-prime-power]]).

[L3] A direct product of finite groups has the product of their orders ([[prop-order-of-finite-direct-product]]).

[L4] The units modulo $2^k$ are the classes represented by odd integers ([[thm-unit-criterion-modulo-n]]).

[L5] Multiplication modulo $2^k$ is commutative and restricts to the unit group ([[def-unit-group-modulo-n-and-euler-totient]]).

[L6] A bijective group homomorphism is a group isomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 The class of $-1$ has order $2$, and [L1] gives order $2^{k-2}$ for $5$. [L1, algebra]

1.2 Every power of $5$ is $1$ modulo $4$, whereas $-1$ is $3$ modulo $4$; hence $\langle-1\rangle\cap\langle5\rangle=\{1\}$. [algebra]

2.1 The map $C_2\times C_{2^{k-2}}\to(\mathbb Z/2^k)^\times$ given by $(\varepsilon,j)\mapsto(-1)^\varepsilon5^j$ is a homomorphism by [L5], and step 1.2 makes it injective. [step 1.1, step 1.2, L4, L5]

3.1 Its domain has $2^{k-1}$ elements by [L3], equal to the size of the target by [L2]; thus it is bijective. [step 2.1, L2, L3]

4.1 By [L6] the map is an isomorphism, and its bijectivity is exactly the asserted unique representation. [step 3.1, L6] ∎
