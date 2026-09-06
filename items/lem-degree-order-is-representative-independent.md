---
id: lem-degree-order-is-representative-independent
kind: lemma
title: "The degree order is representative-independent"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-degree-and-degree-order, lem-turing-reducibility-is-a-preorder]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Exercise 5.3"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

If $A\equiv_TA'$ and $B\equiv_TB'$, then
$$A\le_TB\iff A'\le_TB'.$$
Consequently the order in [[def-turing-degree-and-degree-order]] is
well-defined.

## Facts & Assumptions

**Given:** $A\equiv_TA'$, $B\equiv_TB'$, and the preorder laws of
[[lem-turing-reducibility-is-a-preorder]].

## Proof

**Proof technique:** direct.

1.1 If $A\le_TB$, then $A'\le_TA\le_TB\le_TB'$ by the two equivalences and transitivity, so $A'\le_TB'$. [given, construct]

2.1 Interchanging the primed and unprimed representatives gives the reverse implication. Thus either representative pair yields the same comparison. [step 1.1] ∎
