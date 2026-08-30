---
id: def-truncated-singular-value-pseudoinverse-at-a-declared-threshold
kind: definition
title: "The truncated singular-value pseudoinverse obtained by discarding singular values below a declared numerical-rank threshold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-numerical-rank-relative-to-a-norm-scale-and-tolerance,
       thm-singular-value-decomposition]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gene H. Golub, Least squares, singular values and matrix approximations"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700449/AplMat_11-1966-5_17.pdf"
---

## Definition

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let
$A\in M_{m\times n}(\mathbb F)$ have singular value decomposition
$A=U\Sigma V^*$, and let $\tau\ge0$ be a declared threshold. The
**truncated singular-value pseudoinverse at threshold $\tau$** is

$$ A_\tau^+ := V\Sigma_\tau^+U^*, $$

where $\Sigma_\tau^+\in M_{n\times m}(\mathbb F)$ is the transposed-shape
diagonal matrix whose $i$th diagonal entry is $\sigma_i^{-1}$ when
$\sigma_i>\tau$ and is $0$ when $\sigma_i\le\tau$; every off-diagonal entry is
$0$.

The threshold is part of the definition, exactly as in
[[def-numerical-rank-relative-to-a-norm-scale-and-tolerance]]: changing
$\tau$ changes which singular directions are retained.
