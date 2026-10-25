---
id: ex-generator-change-koszul-isomorphism
kind: example
title: "Generator Change Koszul Isomorphism"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-generator-matrix-chain-map, cor-koszul-complex-invariant-under-invertible-generator-change]
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

For $(x,y)$ and $(x+y,y)$, the matrix $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ induces the chain isomorphism sending the new first basis vector to $e_1+e_2$ and the second to $e_2$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-generator-matrix-chain-map]], [[cor-koszul-complex-invariant-under-invertible-generator-change]].

## Proof

**Proof technique:** direct.

1.1 The displayed upper-triangular matrix is invertible and expresses $(x+y,y)$ in terms of $(x,y)$. [given, algebra]

2.1 Its exterior action intertwines differentials, and the inverse matrix supplies the inverse chain map. [step 1.1, algebra] ∎
