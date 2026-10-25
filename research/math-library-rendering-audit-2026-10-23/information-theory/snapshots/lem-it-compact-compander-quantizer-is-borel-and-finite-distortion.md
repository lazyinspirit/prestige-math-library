---
id: lem-it-compact-compander-quantizer-is-borel-and-finite-distortion
kind: lemma
title: The compact compander is a measurable finite quantizer
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-compact-one-dimensional-compander
  - def-it-finite-squared-error-quantizer
  - lem-it-point-density-cumulative-map-is-c2-diffeomorphism
justified_by: []
aliases: []
axiom_use: No choice principle is used.
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §5.1, printed pp. 115–117, scalar quantizer partitions and reproduction points.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §III, printed pp. 2341–2342, finite encoder cells and reproduction codebooks.
---

## Statement

For the data in [[def-it-compact-one-dimensional-compander]], every cell is Borel, the cells partition $[a,b]$, the index map is measurable, and $D_N(f,g)$ is finite for each $N\ge1$.

## Facts & Assumptions

**Given:** $a<b$, positive normalized $C^1$ densities $f,g$ on $[a,b]$, and an integer $N\ge1$.

[F1] [[def-it-compact-one-dimensional-compander]]: $\beta_j=\phi(j/N)$ are the cell boundaries, $r_j=\phi((j-\tfrac12)/N)$ are the reproduction points, and the cells are half-open except for the final cell containing $b$.

[F2] [[lem-it-point-density-cumulative-map-is-c2-diffeomorphism]]: $\phi$ is a strictly increasing bijection from $[0,1]$ to $[a,b]$.

[F3] [[def-it-finite-squared-error-quantizer]]: a finite quantizer is a Borel map into a finite discrete index set and its distortion is the integral of squared reconstruction error.

## Proof

1.1 The boundary sequence $\beta_0<\cdots<\beta_N$ is strictly increasing by [F2], with $\beta_0=a$ and $\beta_N=b$. Thus the intervals in [F1] are pairwise disjoint Borel sets whose union is $[a,b]$. [given, F1, F2]

2.1 Each index preimage is one of those Borel intervals, so the finite-valued index map is Borel and defines a quantizer as in [F3]. Each reproduction point lies in $[a,b]$ by [F1] and [F2], so $|x-r_j|\le b-a$ on cell $j$; hence $0\le D_N(f,g)\le(b-a)^2\int_a^bf(x)\,dx=(b-a)^2<\infty$. [given, F1, F2, F3, step 1.1, algebra] ∎
