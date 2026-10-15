---
id: ex-rcbd-interaction-shares-the-residual-subspace
kind: example
title: A two-by-two interaction and error share one residual array
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - prop-rcbd-treatment-block-interaction-confounded-with-residual
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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

## Example

The residual array
$$R=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$$
has zero row and column sums. It can be represented as an interaction
$\gamma=R$ plus projected error $e=0$, or as interaction $\gamma=0$ plus
projected error $e=R$. Both decompositions give the same observed additive
residual.

## Verification


**Given:** The $2\times2$ array $R$ in the Example and the residual-space conclusion of [[prop-rcbd-treatment-block-interaction-confounded-with-residual]].

[F1] For one observation per cell, a double-centered interaction and the additive-model residual both lie in the same residual subspace ([[prop-rcbd-treatment-block-interaction-confounded-with-residual]]).

1.1 Each row and each column of $R$ sums to zero, so $R$ is double-centered and belongs to that residual subspace. [given, F1, algebra]

2.1 Both pairs $(\gamma,e)=(R,0)$ and $(\gamma,e)=(0,R)$ consist of vectors in the residual subspace and sum to $R$; hence they yield the identical observed residual with different interaction/error allocations. [F1, step 1.1, algebra] ∎