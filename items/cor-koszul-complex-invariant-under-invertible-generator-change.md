---
id: cor-koszul-complex-invariant-under-invertible-generator-change
kind: corollary
title: "Koszul Complex Invariant Under Invertible Generator Change"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-generator-matrix-chain-map]
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

## Statement

If $y_i=\sum_j a_{ij}x_j$ and the matrix $(a_{ij})$ is invertible, the
induced generator-matrix chain map is an isomorphism
$K(\mathbf y;M)\cong K(\mathbf x;M)$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-generator-matrix-chain-map]].

## Proof

**Proof technique:** direct.

1.1 The matrix chain map is defined by exterior powers of the generator map. [given, algebra]

2.1 The inverse matrix induces its inverse in every exterior degree, so the complexes are isomorphic. [step 1.1, algebra] ∎
