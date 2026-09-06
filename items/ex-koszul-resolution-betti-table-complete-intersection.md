---
id: ex-koszul-resolution-betti-table-complete-intersection
kind: example
title: "Koszul Resolution Betti Table Complete Intersection"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-complete-intersection-betti-numbers-binomial, lem-koszul-resolution-minimality-maximal-ideal-sequence]
proof_strategy: direct
verification:
  audited: 2026-09-06
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

For $R=k[x,y,z]_{(x,y,z)}$ and $(x^2,y^2,z^2)$, the minimal Koszul resolution of the quotient has Betti table $1,3,3,1$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-complete-intersection-betti-numbers-binomial]], [[lem-koszul-resolution-minimality-maximal-ideal-sequence]].

## Proof

**Proof technique:** direct.

1.1 The squared variables are a regular sequence in the local polynomial ring and lie in its maximal ideal. [given, algebra]

2.1 The minimal Koszul ranks are $\binom30,\binom31,\binom32,\binom33=1,3,3,1$. [step 1.1, algebra] ∎
