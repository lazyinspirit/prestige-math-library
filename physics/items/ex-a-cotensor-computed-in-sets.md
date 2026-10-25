---
id: ex-a-cotensor-computed-in-sets
kind: example
title: "A cotensor in Set is a power"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cotensor-and-tensor, def-power-and-copower-by-a-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.7"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Example

In $\mathbf{Set}$, the cotensor of a set $C$ by a set $X$ is the power $C^X$.

## Facts & Assumptions

**Given:** Sets $X$ and $C$.

[L1] In the special case $\mathcal V=\mathbf{Set}$, cotensors are powers ([[def-cotensor-and-tensor]]).

[L2] The power $C^X$ is characterized by the bijection $\mathbf{Set}(B,C^X)\cong\mathbf{Set}(X,\mathbf{Set}(B,C))$ ([[def-power-and-copower-by-a-set]]).

## Verification

**Proof technique:** direct.

1.1 The universal property in [L2] is exactly the $\mathbf{Set}$-instance of the cotensor formula from [L1]. [L1, L2, given]

2.1 Therefore the cotensor of $C$ by $X$ in $\mathbf{Set}$ is the power $C^X$. [step 1.1] ∎
