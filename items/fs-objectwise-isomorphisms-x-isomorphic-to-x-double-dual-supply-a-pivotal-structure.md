---
id: fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure
kind: false-statement
title: "Objectwise isomorphisms X isomorphic to its double dual supply a pivotal structure"
status: draft
origin: pipeline
deps: [thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category, rem-objectwise-double-dual-isomorphisms-do-not-supply-a-pivotal-structure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Question 4.8.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

**False claim.** Objectwise isomorphisms $X\cong X^{\vee\vee}$ supply a pivotal structure.

## Facts & Assumptions

**Given:** A semisimple multitensor category.

[F1] Left and right dual objects are isomorphic objectwise ([[thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category]]).

[F2] Pivotality requires coherent natural monoidal data, not objectwise existence ([[rem-objectwise-double-dual-isomorphisms-do-not-supply-a-pivotal-structure]]).

## Refutation

**Proof technique:** direct.

1.1 [F1] produces isomorphisms separately for objects. [F1, given]

2.1 By [F2], these need not be natural in morphisms or multiplicative under tensor product. They therefore need not form a pivotal structure. [F1, F2] ∎
