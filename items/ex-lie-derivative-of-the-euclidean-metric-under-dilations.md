---
id: ex-lie-derivative-of-the-euclidean-metric-under-dilations
kind: example
title: "Lie derivative of the Euclidean metric under dilations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]
justified_by: []
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

For $X=x\partial_x+y\partial_y$ and $g=dx^2+dy^2$ on $\mathbb R^2$, $\mathcal L_Xg=2g$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For a covariant $k$-tensor $T=T_{i_1\cdots i_k}dx^{i_1}\otimes\cdots\otimes dx^{i_k}$, $$ (\mathcal L_XT)_{i_1\cdots i_k}=X^j\partial_jT_{i_1\cdots i_k}+\sum_a(\partial_{i_a}X^j)T_{i_1\cdots j\cdots i_k}. $$ ([[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]]).

## Verification

**Proof technique:** direct.

1.1 The coefficients of $g$ are constant and $\partial_iX^j=\delta_i^j$. [F1, given]

2.1 The covariant tensor formula therefore adds two copies of each metric component, giving $\mathcal L_Xg=2g$. [step 1.1] ∎

