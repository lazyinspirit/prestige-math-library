---
id: cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function
kind: corollary
title: "Nonconstant negative-gradient trajectories strictly decrease the function"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-negative-gradient-energy-identity, lem-riemannian-gradient-vanishes-exactly-at-critical-points, thm-unique-maximal-integral-curve-through-each-point]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Lemma 13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

If $\gamma:I\to M$ is a nonconstant negative-gradient trajectory, then
$(f\circ\gamma)'(t)<0$ for every $t\in I$.

## Facts & Assumptions

**Given:** A nonconstant negative-gradient trajectory $\gamma:I\to M$.

[F1] $(f\circ\gamma)'=-\lVert\operatorname{grad}_g f\rVert_g^2$ along $\gamma$ ([[lem-negative-gradient-energy-identity]]).

[F2] The gradient vanishes exactly at a critical point ([[lem-riemannian-gradient-vanishes-exactly-at-critical-points]]).

[F3] An integral curve through a prescribed point is unique on its maximal interval ([[thm-unique-maximal-integral-curve-through-each-point]]).

## Proof

**Proof technique:** direct.

1.1 If $\gamma(t_0)$ were critical, [F2] would make the vector field $-\operatorname{grad}_g f$ vanish there, so the constant curve at $\gamma(t_0)$ is an integral curve through that point. [F2, given]

2.1 By [F3], that constant integral curve and $\gamma$ agree on $I$, contradicting the hypothesis that $\gamma$ is nonconstant. Hence $\gamma(t)$ is never critical. [F3, step 1.1]

3.1 By [F2] the gradient is nonzero at every $\gamma(t)$, and [F1] now gives $(f\circ\gamma)'(t)<0$ for every $t\in I$. [F1, F2, step 2.1] ∎
