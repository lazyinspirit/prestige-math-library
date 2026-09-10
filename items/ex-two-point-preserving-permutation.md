---
id: ex-two-point-preserving-permutation
kind: example
title: A preserving permutation on two equal atoms
deps: [def-measure-preserving-transformation-and-system]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Einsiedler–Ward Definition 2.1, p.13; explicit finite specialization
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
generation:
  role: example
proof_strategy: direct
---

## Example

On $X=\{0,1\}$, $\mathcal A=\mathcal P(X)$ and $\mu(E)=|E|/2$, the swap $T(0)=1$, $T(1)=0$ is a measure-preserving probability transformation.

## Facts & Assumptions

[F1] A measurable self-map preserves measure exactly when every measurable inverse image has the original measure [[def-measure-preserving-transformation-and-system]].

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 The masses of $\varnothing,\{0\},\{1\},X$ are respectively $0,1/2,1/2,1$. A disjoint countable family has at most two nonempty members, so adding their cardinalities proves countable additivity of $\mu$. Every inverse image is a subset of X and is measurable. [given]

2.1 The inverse images of those four sets are $\varnothing,\{1\},\{0\},X$, respectively. Their masses are unchanged, so $\mu(T^{-1}E)=\mu(E)$ for every measurable E. This is measure preservation. [F1, step 1.1] ∎
