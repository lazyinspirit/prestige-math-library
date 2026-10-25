---
id: ex-ordered-mostowski-order-has-empty-support
kind: example
title: The ordered Mostowski relation has empty support
status: published
origin: pipeline
deps: [thm-ordered-mostowski-model]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, §4.5", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

The dense order on the atoms is fixed by every allowed permutation and has empty support, although no well-order of the atoms is symmetric.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-ordered-mostowski-model]] defines the order-automorphism group and proves non-well-orderability.

## Proof

1.1 For the relation $R_<=\{(a,b):a<b\}$ and every allowed $\pi$, order preservation gives $(a,b)\in R_<$ iff $(\pi a,\pi b)\in R_<$, hence $\pi R_<=R_<$. Its stabilizer is the whole group, so $\varnothing$ supports it. [F1]

2.1 In contrast, if a well-order had finite support $E$, an order automorphism fixing $E$ could move its least atom in $A\setminus E$, contradicting invariance. Thus “linearly ordered” and “well-orderable” separate in this model. [F1] ∎