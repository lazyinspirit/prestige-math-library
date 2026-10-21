---
id: ex-ip-polynomial-spectrum-risk-profile
kind: example
title: Exact cutoff risk for a polynomial singular spectrum
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-statistical-ellipsoid-class
  - thm-ip-truncated-estimator-exact-risk
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited through the SVD sequence-model and exact-risk suppliers; the finite substitutions in this example use no additional choice."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, Lemma 1"
      url: https://arxiv.org/pdf/1707.01706
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, Definition 3 (ill-posedness of the operator), PDF p. 6"
      url: https://arxiv.org/pdf/1707.01706
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, §3.2"
      url: https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf
---

## Example

Assume Countable Choice for the upstream sequence-model coordinates. Let $p,r>0$, $Q\ge0$, $\epsilon\ge0$, and $D\in\mathbb N_0$. Use the polynomial spectrum $s_j=j^{-p}$ and ellipsoid weights $a_j=j^r$. In the operator taxonomy used here, this polynomial singular-value decay is called moderately ill-posed. The exact worst-case squared sequence risk of the cutoff at $D$ is
$$\frac{Q^2}{(D+1)^{2r}}+\epsilon^2\sum_{j=1}^{D}j^{2p},$$
with an empty sum when $D=0$.

## Example references

[[def-ip-gaussian-sequence-inverse-model|Gaussian sequence inverse model]]

[[def-ip-statistical-ellipsoid-class|Weighted ellipsoid class]]

[[thm-ip-truncated-estimator-exact-risk|Exact cutoff-risk theorem]]

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, Definition 3 (ill-posedness of the operator), PDF p. 6](https://arxiv.org/pdf/1707.01706)

## Facts & Assumptions

[A1] [[def-countable-choice]]: Countable Choice is used upstream to choose the compact SVD coordinates and identify the complete-basis coefficient space.

[F1] [[thm-ip-truncated-estimator-exact-risk]]: The worst-case squared sequence risk is $Q^2/a_{D+1}^2+\epsilon^2\sum_{j=1}^D s_j^{-2}$ for positive nondecreasing weights and $D\in\mathbb N_0$.

[F2] [[def-ip-gaussian-sequence-inverse-model]]: The normalized observation variance in coordinate $j$ is $\epsilon^2s_j^{-2}$; at zero noise the observation is exact.

[F3] [[def-ip-statistical-ellipsoid-class]]: The weights must be positive and nondecreasing.

**Given:** Countable Choice, the Gaussian sequence inverse model, weights $a_j=j^r$, singular numbers $s_j=j^{-p}$, $p,r>0$, noise $\epsilon\ge0$, radius $Q\ge0$, and cutoff $D\in\mathbb N_0$.

## Verification

1.1 By [A1], the upstream sequence coordinates are fixed. Since $p>0$, $s_j=j^{-p}$ is positive and decreases to $0$, and $r>0$ makes $a_j=j^r$ positive and nondecreasing; thus the exact-risk theorem's spectrum and ellipsoid hypotheses hold. [given, A1, F2, F3, algebra]

2.1 Substituting $a_{D+1}=(D+1)^r$ and $s_j^{-2}=j^{2p}$ into [F1] gives the displayed risk, including $D=0$ by its empty-sum convention. [F1, step 1.1, algebra] ∎
