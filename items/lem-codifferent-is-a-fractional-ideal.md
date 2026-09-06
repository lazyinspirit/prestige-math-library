---
id: lem-codifferent-is-a-fractional-ideal
kind: lemma
title: "The codifferent is a fractional ideal"
status: draft
origin: pipeline
deps: [def-trace-dual-and-codifferent-of-a-number-field, def-fractional-ideal]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Theorems 3.4 and 3.9"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Statement

For every nonzero fractional ideal $A$ of $\mathcal O_K$, $A^\vee$ is a
fractional ideal and $(cA)^\vee=c^{-1}A^\vee$ for $c\in K^\times$.

## Proof

**Given:** a fractional ideal $A$ and $c\in K^\times$.

1.1 In a $\mathbb Z$-basis of the full lattice $A$, nondegeneracy of trace gives a dual basis, so $A^\vee$ is again a full lattice and is stable under $\mathcal O_K$. [given, algebra]

2.1 The condition $\operatorname{Tr}(x cA)\subseteq\mathbb Z$ is equivalent to $cx\in A^\vee$, proving $(cA)^\vee=c^{-1}A^\vee$ and the fractional-ideal claim. [step 1.1, algebra] ∎
