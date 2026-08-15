---
id: prop-primitive-root-iff-unit-group-generator
kind: proposition
title: "A unit is a primitive root modulo $n$ if and only if it generates $(\\mathbb Z/n\\mathbb Z)^\\times$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primitive-root-modulo-n, lem-order-characterisation, def-generated-subgroup, def-unit-group-modulo-n-and-euler-totient]
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

Let $n\ge1$ and $g\in(\mathbb Z/n)^\times$. Then $g$ is a primitive root modulo $n$ if and only if

$$\langle g\rangle=(\mathbb Z/n)^\times.$$

## Facts & Assumptions

**Given:** A positive integer $n$ and a unit $g$ modulo $n$.

[L1] A primitive root modulo $n$ is a unit whose order is $\varphi(n)$ ([[def-primitive-root-modulo-n]]).

[L2] If $g$ has finite order $r$, then $\langle g\rangle$ has exactly $r$ elements ([[lem-order-characterisation]]).

[L3] The subgroup $\langle g\rangle$ is the smallest subgroup containing $g$ ([[def-generated-subgroup]]).

[L4] The unit group modulo $n$ has exactly $\varphi(n)$ elements ([[def-unit-group-modulo-n-and-euler-totient]]).

## Proof

**Proof technique:** direct.

1.1 The unit group has $\varphi(n)$ elements by [L4], while [L2] gives $|\langle g\rangle|=\operatorname{ord}(g)$. [L2, L4]

2.1 If $g$ is primitive, [L1] and step 1.1 give $|\langle g\rangle|=|(\mathbb Z/n)^\times|$; since [L3] makes $\langle g\rangle$ a subgroup of the finite unit group, the two sets are equal. [step 1.1, L1, L3]

3.1 Conversely, if $\langle g\rangle=(\mathbb Z/n)^\times$, step 1.1 gives $\operatorname{ord}(g)=\varphi(n)$, so $g$ is primitive by [L1]. [step 1.1, L1] ∎
