---
id: lem-pchip-slope-selection-well-defined
kind: lemma
title: PCHIP slope selection has no zero denominator
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [alg-pchip-slope-selection]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "F. N. Fritsch and J. Butland, A Method for Constructing Local Monotone Piecewise Cubic Interpolants, SIAM Journal on Scientific and Statistical Computing 5 (1984), pp. 300–304"
      url: https://anthonylloyd.github.io/public/interp/pchip/A_method_for_constructing_local_monotone_picewise_cubic_interpolants_fritsch1984.pdf
---

## Statement

For every admissible input to [[alg-pchip-slope-selection]], each branch is defined over $\mathbb R$ and every selected slope is finite; in particular, the algorithm never divides by zero.

## Facts & Assumptions

**Given:** A finite strictly increasing real node list with at least two nodes and real data values.

[F1] [[alg-pchip-slope-selection]]: widths are positive; the only interior division by a secant occurs when the two adjacent secants have positive product; endpoint formulas divide by a sum of positive widths; and the two-node branch uses one secant.

## Proof
1.1 Each $h_i=x_{i+1}-x_i$ is positive, so every secant $d_i$ and every endpoint denominator $h_0+h_1$ or $h_{n-2}+h_{n-3}$ is defined and finite. In the two-node branch the slopes equal the already defined secant. [given, F1, algebra]

2.1 The interior harmonic-mean branch is entered only when $d_{k-1}d_k>0$. Thus both secants are nonzero and have the same sign; the weights $w_1=2h_k+h_{k-1}$ and $w_2=h_k+2h_{k-1}$ are positive. The two terms $w_1/d_{k-1}$ and $w_2/d_k$ therefore have that same nonzero sign, so their sum is nonzero and finite. The endpoint clip and cap branches only compare finite real quantities and introduce no division. Hence every output slope is defined and finite. [F1, step 1.1, algebra] ∎