---
id: ex-empty-and-unit-koszul-boundaries
kind: example
title: "Empty And Unit Koszul Boundaries"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-empty-koszul-complex-is-the-coefficient-module, cor-one-element-koszul-homology, def-regular-sequence-on-a-module]
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

## Example

For nonzero $M$, compare $K(\varnothing;M)$, $K(0;M)$, and $K(1;M)$; the first is $M$, the second has $H_0=H_1=M$, and the third is acyclic.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-empty-koszul-complex-is-the-coefficient-module]], [[cor-one-element-koszul-homology]], [[def-regular-sequence-on-a-module]].

## Proof

**Proof technique:** direct.

1.1 The empty complex is $M$; for $0$ the two-term differential is zero, and for $1$ it is an isomorphism. [given, algebra]

2.1 Thus $H_0=H_1=M$ in the zero case and the unit case is acyclic; the unit fails the proper-quotient regularity convention. [step 1.1, algebra] ∎
