---
id: lem-koszul-complex-concatenation-tensor-isomorphism
kind: lemma
title: "Koszul Complex Concatenation Tensor Isomorphism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients, lem-exterior-multiplication-koszul-sign-rule]
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

For finite sequences $\mathbf x,\mathbf y$, the graded tensor-product identification gives a signed chain isomorphism $K(\mathbf x,\mathbf y;M)\cong K(\mathbf x;R)\otimes_RK(\mathbf y;M)$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]], [[lem-exterior-multiplication-koszul-sign-rule]].

## Proof

**Proof technique:** direct.

1.1 The exterior algebra of the direct sum of the two based free modules is the graded tensor product of their exterior algebras. [given, algebra]

2.1 Its total differential $d\otimes1+(-1)^{\deg}1\otimes d$ agrees termwise with the Koszul deletion differential. [step 1.1, algebra] ∎
