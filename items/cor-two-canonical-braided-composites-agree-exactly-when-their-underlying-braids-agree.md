---
id: cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree
kind: corollary
title: "Two canonical braided composites agree exactly when their underlying braids agree"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-braided-coherence-via-underlying-braids, def-the-braid-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 8.2.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

For a fixed object $X$ and a fixed tensor power $X^{\otimes n}$, two canonical
braided endomorphisms of $X^{\otimes n}$ agree in every braided monoidal
category if and only if their underlying braids are equal in $B_n$.

## Facts & Assumptions

**Given:** Two canonical braided endomorphisms of the same tensor power $X^{\otimes n}$.

[L1] Canonical braided endomorphisms of a fixed tensor power with the same underlying braid are equal ([[thm-braided-coherence-via-underlying-braids]]).

[L2] The braid category realizes braid-group elements as actual canonical braided morphisms ([[def-the-braid-category]]).

## Proof

**Proof technique:** direct.

1.1 If the two underlying braids are equal, then [L1] says the two canonical composites agree in every braided monoidal category. [L1, given]

2.1 Conversely, suppose the two canonical composites agree in every braided monoidal category. Apply this to the braid category from [L2]. There the canonical composites are literally the corresponding braids, so equality of the composites forces equality of the underlying braids. [L2, step 1.1, algebra]

3.1 Therefore the two universal statements are equivalent. [step 1.1, step 2.1] ∎
