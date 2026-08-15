---
id: thm-unit-group-chinese-remainder-decomposition
kind: theorem
title: "For pairwise coprime positive moduli, the Chinese remainder bijection restricts to an isomorphism of unit groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chinese-remainder-theorem, def-unit-group-modulo-n-and-euler-totient, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, §C.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $n_0,\ldots,n_{r-1}$ be pairwise coprime positive integers and $N=\prod_{i<r}n_i$. The Chinese remainder map restricts to a group isomorphism

$$ (\mathbb Z/N)^\times\cong\prod_{i<r}(\mathbb Z/n_i)^\times.$$

For the empty list this identifies the two one-element groups.

## Facts & Assumptions

**Given:** The stated finite pairwise-coprime list and its product $N$.

[L1] The Chinese remainder map $\mathbb Z/N\to\prod_{i<r}\mathbb Z/n_i$ is a bijection preserving multiplication and identity, including for the empty list ([[thm-chinese-remainder-theorem]]).

[L2] For $n\ge1$, the invertible classes of $\mathbb Z/n$ form a group $(\mathbb Z/n)^\times$ under multiplication ([[def-unit-group-modulo-n-and-euler-totient]]).

[L3] A bijective group homomorphism is an isomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the CRT map preserves multiplication and identity. If a class has an inverse, its image has the coordinatewise image of that inverse. [L1, L2]

1.2 Conversely, if every coordinate is a unit, take the tuple of coordinatewise inverses and use surjectivity in [L1] to lift it; multiplicativity shows that the lift is an inverse of the original class. [L1, L2, choose]

2.1 Steps 1.1 and 1.2 show that [L1] restricts to a bijective homomorphism between the displayed unit groups. [step 1.1, step 1.2, L1, L2]

3.1 It is therefore an isomorphism by [L3], and [L1] supplies the empty-list case. [step 2.1, L1, L3] ∎
