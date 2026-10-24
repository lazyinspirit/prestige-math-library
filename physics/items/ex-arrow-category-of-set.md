---
id: ex-arrow-category-of-set
kind: example
title: "The arrow category $\\mathbf{Set}^{\\to}$: functions as objects and commuting squares as morphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-category, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.5.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

The functor category from the walking-arrow category to $\mathbf{Set}$ is the
arrow category $\mathbf{Set}^{\to}$.

## Facts & Assumptions

**Given:** The walking-arrow category $\mathbf 2=(0\to1)$.

[L1] Objects and morphisms in a functor category are functors and natural transformations ([[def-functor-category]]).

[L2] Sets and functions form the category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

## Verification

**Proof technique:** direct.

1.1 Let $\mathbf 2$ have objects $0,1$, their identities, and one further arrow $a:0\to1$. A functor $F:\mathbf2\to\mathbf{Set}$ is exactly a function $F(a):F(0)\to F(1)$. [L1, L2]

2.1 Given functions $f:X\to Y$ and $g:X'\to Y'$, a natural transformation between their corresponding functors consists of maps $u:X\to X'$ and $v:Y\to Y'$ satisfying $v f=g u$. Thus it is exactly a commuting square. [step 1.1, L1]

3.1 Vertical composition composes the two side maps of commuting squares. It preserves the square equation, and identity transformations give identity squares. Therefore $[\mathbf2,\mathbf{Set}]$ is precisely $\mathbf{Set}^{\to}$ as described. [step 2.1, L1] ∎
