---
id: lem-koszul-generator-matrix-chain-map
kind: lemma
title: "Koszul Generator Matrix Chain Map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients, lem-koszul-differential-coordinate-formula, def-chain-map]
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

If $y_i=\sum_j a_{ij}x_j$, the transpose matrix defines an exterior map inducing a chain map $K(\mathbf y;M)\to K(\mathbf x;M)$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]], [[lem-koszul-differential-coordinate-formula]], [[def-chain-map]].

## Proof

**Proof technique:** direct.

1.1 Let $E_{\mathbf y}\to E_{\mathbf x}$ send the $i$th basis vector to $\sum_j a_{ij}e_j$. The assumed identity $y_i=\sum_j a_{ij}x_j$ makes the degree-one squares commute. [given, algebra]

2.1 Extending by exterior powers respects wedge products, and the derivation rule then makes the resulting map commute with the differentials in every degree. [step 1.1, algebra] ∎

