---
id: ex-ip-severely-ill-posed-risk-profile
kind: example
title: Exact cutoff risk for an exponentially decaying spectrum
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

Assume Countable Choice for the upstream sequence-model coordinates. Let $c,r>0$, $Q\ge0$, $\epsilon\ge0$, and $D\in\mathbb N_0$. Use the exponential spectrum $s_j=e^{-cj}$ and ellipsoid weights $a_j=j^r$. This is a severely ill-posed operator spectrum, with exponential singular-value decay. The exact worst-case squared sequence risk of the cutoff at $D$ is
$$\frac{Q^2}{(D+1)^{2r}}+\epsilon^2\sum_{j=1}^{D}e^{2cj},$$
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

**Given:** Countable Choice, the Gaussian sequence inverse model, weights $a_j=j^r$, singular numbers $s_j=e^{-cj}$, with $c,r>0$, noise $\epsilon\ge0$, radius $Q\ge0$, and cutoff $D\in\mathbb N_0$.

## Verification

1.1 By [A1], the upstream sequence coordinates are fixed. Since $c>0$, $s_j=e^{-cj}$ is positive and decreases to $0$, and $r>0$ makes $a_j=j^r$ positive and nondecreasing; thus the exact-risk theorem's spectrum and ellipsoid hypotheses hold. [given, A1, F2, F3, algebra]

2.1 Substituting $a_{D+1}=(D+1)^r$ and $s_j^{-2}=e^{2cj}$ into [F1] gives the displayed risk, including $D=0$ by its empty-sum convention. [F1, step 1.1, algebra] ∎
