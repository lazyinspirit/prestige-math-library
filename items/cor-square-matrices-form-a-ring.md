---
id: cor-square-matrices-form-a-ring
kind: corollary
title: '$M_n(F)$ is a ring under entrywise addition and matrix multiplication, including the zero ring $M_0(F)$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-matrix-space, thm-matrix-multiplication-laws, def-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For every field $F$ and natural $n$, $M_n(F)$ is a ring under entrywise
addition and matrix multiplication, with zero matrix as additive identity and
$I_n$ as multiplicative identity. For $n=0$, this is the one-element zero ring
$M_0(F)$.

## Facts & Assumptions

**Given:** A field $F$ and a natural $n$.

[L1] Matrix multiplication is associative and unital and distributes over entrywise addition on both sides ([[thm-matrix-multiplication-laws]]).

## Proof

**Proof technique:** direct.

1.1 The published pointwise vector-space structure on $M_n(F)$ makes entrywise addition an abelian group operation, with the zero matrix and entrywise negatives. [given, L1]

2.1 By [L1], matrix multiplication is associative, has identity $I_n$, and satisfies both distributive laws over that addition. [step 1.1, L1]

3.1 These are exactly the ring axioms. If $n=0$, there is one empty matrix, so its zero and identity coincide; the ring convention permits $0=1$, making $M_0(F)$ the zero ring. [step 2.1, L1] ∎
