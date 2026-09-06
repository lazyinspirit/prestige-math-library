---
id: thm-regular-sequences-give-acyclic-koszul-complexes
kind: theorem
title: "Regular Sequences Give Acyclic Koszul Complexes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-regular-sequence-koszul-acyclicity-induction, lem-regular-one-element-koszul-acyclicity, cor-empty-koszul-complex-is-the-coefficient-module, def-regular-sequence-on-a-module]
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
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Every finite $M$-regular sequence is $M$-Koszul-regular: $H_i(K(\mathbf x;M))=0$ for $i>0$.

## Facts & Assumptions

**Given:** The ring, finite sequence, and module stated in the claim. The declared prerequisites used here are [[lem-regular-sequence-koszul-acyclicity-induction]], [[lem-regular-one-element-koszul-acyclicity]], [[cor-empty-koszul-complex-is-the-coefficient-module]], and [[def-regular-sequence-on-a-module]].

## Proof

**Proof technique:** direct.

1.1 For the empty sequence the Koszul complex is $M$ in degree zero, so the conclusion is immediate. For length one it is the one-element calculation. [given, algebra]

2.1 Suppose the result holds for an initial segment $\mathbf x$. Regularity says that the next element $y$ acts injectively on $M/(\mathbf x)M$. The induction lemma applied to the already acyclic $K(\mathbf x;M)$ therefore makes $K(\mathbf x,y;M)$ acyclic in positive degrees. Induction on the length proves the claim. [step 1.1, algebra] ∎
