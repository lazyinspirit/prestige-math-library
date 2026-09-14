---
id: ex-regularity-excludes-the-classical-choice-pathologies
kind: example
title: How universal regularity excludes the classical Choice pathologies
status: published
origin: pipeline
deps: [cor-solovay-model-has-no-vitali-or-bernstein-set, thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: cases
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Compare the four distinct obstruction calculations.

## Facts & Assumptions

**Given:** Universal LM and PSP in the Solovay model.

[F1] [[cor-solovay-model-has-no-vitali-or-bernstein-set]]: supplies the translate and perfect-set contradictions.

[F2] [[thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function]]: supplies the kernel and bounded-level-set contradictions.

## Verification

1.1 For a Vitali selector, rational translates are disjoint: measure zero makes their countable cover null, and positive measure makes finitely many translates exceed a containing interval. [assume-case 1, F1]

1.2 For a Bernstein set, it and its complement contain no perfect subset; at least one is uncountable, contradicting PSP. [assume-case 2, F1]

1.3 For a Hamel basis, one coefficient kernel is a proper measurable subgroup: positive measure makes it all of $\mathbb R$, while measure zero makes its rational-coset cover null. [assume-case 3, F2]

1.4 For an additive map, a positive-measure bounded level set exists; Steinhaus makes the map bounded near zero and hence continuous and linear. [assume-case 4, F2]

1.5 These are exactly the four named cases and use, respectively, translation invariance, PSP, subgroup rigidity, and Cauchy regularity; only countable ideal closure uses DC. [cases-exhaustive]

2.1 The comparison follows in all four cases. [cases: step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
