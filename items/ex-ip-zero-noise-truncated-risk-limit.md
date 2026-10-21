---
id: ex-ip-zero-noise-truncated-risk-limit
kind: example
title: The zero-noise boundary of truncated risk
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
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, §3.2"
      url: https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf
---

## Example

Assume Countable Choice for the upstream sequence-model coordinates. Take $\epsilon=0$ and $Q>0$. In the zero-noise sequence model, $Z_j=\theta_j$ exactly, so the cutoff error is the deterministic squared tail $\sum_{j>D}\theta_j^2$. For weights $a_j=j^r$ with $r>0$, its worst case over $\Theta_a(Q)$ is $Q^2/(D+1)^{2r}$ and tends to $0$ as $D\to\infty$. For the equally weighted ellipsoid $a_j=1$, the worst case is $Q^2$ for every finite $D$, attained by $\theta=Qe_{D+1}$. This is a deterministic boundary of the sequence-risk formula; it makes no claim about arbitrary bounded perturbations of the original inverse data.

## Example references

[[def-ip-gaussian-sequence-inverse-model|Gaussian sequence inverse model and its zero-noise extension]]

[[def-ip-statistical-ellipsoid-class|Weighted ellipsoid class]]

[[thm-ip-truncated-estimator-exact-risk|Exact cutoff-risk theorem]]

## Facts & Assumptions

[A1] [[def-countable-choice]]: Countable Choice is used upstream to choose the compact SVD coordinates and identify the complete-basis coefficient space.

[F1] [[def-ip-gaussian-sequence-inverse-model]]: At $\epsilon=0$, $Z_j=\theta_j$ deterministically.

[F2] [[def-ip-statistical-ellipsoid-class]]: For any positive nondecreasing weights, $\Theta_a(Q)$ is defined by $\sum_j a_j^2\theta_j^2\le Q^2$.

[F3] [[thm-ip-truncated-estimator-exact-risk]]: The zero-noise worst-case squared error is $Q^2/a_{D+1}^2$, attained by a truth supported only at coordinate $D+1$.

**Given:** Countable Choice, $Q>0$, a finite cutoff $D\in\mathbb N_0$, and either weights $a_j=j^r$ with $r>0$ or $a_j=1$ for all $j$.

## Verification

1.1 Under [A1], the sequence model coordinates are fixed. Using [F1] and substituting $\epsilon=0$ and $a_{D+1}=(D+1)^r$ in [F3] gives $Q^2/(D+1)^{2r}$; since $r>0$, this tends to $0$ as $D\to\infty$. [A1, F1, F2, F3, algebra]

2.1 Under [A1], [F3] applies to the unit-weight ellipsoid. The ellipsoid condition in [F2] is $\|\theta\|_2^2\le Q^2$, so the squared tail is at most $Q^2$. The vector $\theta=Qe_{D+1}$ belongs to the ellipsoid and its entire squared norm lies beyond $D$, so it attains $Q^2$. This is also the $\epsilon=0$, $a_{D+1}=1$ case of [F3]. [A1, F2, F3, algebra, construct] ∎
