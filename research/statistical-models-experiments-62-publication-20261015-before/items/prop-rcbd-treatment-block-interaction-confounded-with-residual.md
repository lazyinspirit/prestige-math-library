---
id: prop-rcbd-treatment-block-interaction-confounded-with-residual
kind: proposition
title: One cell observation confounds unrestricted interaction with residual error
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-randomized-complete-block-design
  - lem-rcbd-nested-contrast-model-and-projection
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §13.2.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Statement

Let $t,b\ge2$ and observe one real response $Y_{ij}$ for each treatment $i$
and block $j$. In the additive mean model, the residual subspace consists of
the double-centered arrays
$$E=\{\gamma\in\mathbb R^{t\times b}:\sum_j\gamma_{ij}=0\ \text{for every }i,\ \sum_i\gamma_{ij}=0\ \text{for every }j\},$$
which has dimension $(t-1)(b-1)$ ([[lem-rcbd-nested-contrast-model-and-projection]]).
If a treatment-by-block interaction $\gamma\in E$ is included in the mean,
then the additive-fit residual is $\gamma+P_E\epsilon$, where $P_E\epsilon$
is the projection of the cell error onto $E$. For every $h\in E$ this same
residual equals $(\gamma+h)+(P_E\epsilon-h)$. Hence one observation per cell
does not separately decompose the realized residual into unrestricted
interaction and projected error, and fitting the unrestricted interaction
leaves zero pure-error residual degrees of freedom. This is an algebraic
design limitation; it does not assert nonidentifiability under every
additional stochastic model.

## Facts & Assumptions


**Given:** The one-observation-per-treatment-by-block-cell layout, additive fit, and a possible unrestricted double-centered interaction.

[F1] The additive RCBD projection leaves exactly the double-centered residual subspace of dimension $(t-1)(b-1)$ ([[lem-rcbd-nested-contrast-model-and-projection]]).

[F2] An RCBD has one cell for each treatment in each block ([[def-randomized-complete-block-design]]).

## Proof

1.1 Write the cell array as $Y=m+\gamma+\epsilon$, where $m\in W_U$ is additive and $\gamma\in E$. By [F1], the residual from projection onto $W_U$ is $(I-P_{W_U})Y=\gamma+(I-P_{W_U})\epsilon$, and the latter error projection lies in $E=W_U^\perp$. [F1, F2, algebra]

2.1 For any $h\in E$, the identity $\gamma+(I-P_{W_U})\epsilon=(\gamma+h)+((I-P_{W_U})\epsilon-h)$ gives two decompositions of the same observed residual into vectors in $E$. Thus the cell data alone do not distinguish the unrestricted interaction component from the projected error component. [step 1.1, algebra]

3.1 The additive space has dimension $t+b-1$ and $E$ has dimension $(t-1)(b-1)$, so their orthogonal direct sum has dimension $tb$, the full cell-space dimension. Therefore the model with a free interaction uses all cell-space directions and leaves zero residual degrees of freedom for a separate pure-error estimate. [F1, step 2.1, algebra] ∎