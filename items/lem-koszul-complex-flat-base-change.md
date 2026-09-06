---
id: lem-koszul-complex-flat-base-change
kind: lemma
title: "Koszul Complex Flat Base Change"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients, def-flat-and-faithfully-flat-modules-and-ring-maps]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

For a flat map $R\to A$, there is a natural chain isomorphism $K_R(\mathbf x;M)\otimes_RA\cong K_A(\mathbf xA;M\otimes_RA)$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]].

## Proof

**Proof technique:** direct.

1.1 In degree $p$, base change sends $(e_I\otimes m)\otimes a$ to $e_I\otimes(m\otimes a)$; the exterior basis makes this an isomorphism. [given, algebra]

2.1 The two differentials agree on every basis wedge by $x_i(m)\otimes a=(x_i a)(m\otimes1)$, which proves the chain claim. [step 1.1, algebra] ∎

