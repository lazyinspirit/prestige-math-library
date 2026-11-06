---
id: def-r5-nil-d4-worldvolume-embedding
kind: definition
title: Wrapped D4 Embedding In Nil Coordinates
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - post-r5-sw-nil-background-data
  - def-embedded-smooth-submanifold-with-boundary
dependency_roles:
  post-r5-sw-nil-background-data: formulation-prerequisite
  def-embedded-smooth-submanifold-with-boundary: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "The smooth D4 probe worldvolume representative wrapping the compact u2 circle at fixed x' and moving homogeneously in u1; no orientifold quotient or backreacted brane solution is asserted."
sources:
  references:
    - title: "Eva Silverstein and Alexander Westphal, Monodromy in the CMB: Gravity Waves and String Inflation, arXiv:0803.3085v2"
      url: "https://arxiv.org/pdf/0803.3085v2"
      locator: "§2.3, equation (2.6), PDF p. 8; wrapped-u2 D4 and its collective u1 coordinate."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §§2.3–2.5, PDF pp. 12–15; smooth embedded D-brane worldvolume and pullback fields."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $I\subseteq\mathbb R$ be an open time interval, let $\Sigma_3$ be a smooth oriented boundaryless three-manifold, and set $X_4=I\times\Sigma_3$ with product orientation and coordinates $(t,x^i)$. Thus $X_4$ is a smooth boundaryless spacetime factor with a specified time coordinate. Let $S^1=\mathbb R/\mathbb Z$ have coordinate $\sigma$ of period one. Choose a smooth function $u_1:I\to(0,\infty)$, a fixed $x'_0\in\mathbb R/\mathbb Z$, and a fixed point $\widetilde q_0\in\widetilde N^3$ of the second Nil factor defined in [[post-r5-sw-nil-background-data]]. Define $W_5=X_4\times S^1$ and
$$ \iota_u:W_5\longrightarrow X^{10}:=X_4\times N^3\times\widetilde N^3,\qquad (x,\sigma)\longmapsto\bigl(x,u_1(t),u_2=\sigma,x'=x'_0,\widetilde q_0\bigr). $$
The $\sigma$-circle closes by $\tau_2$, so this is a well-defined smooth embedding in the full ten-dimensional product. Give $W_5$ the product orientation from $X_4$ and increasing $\sigma$. The derivative of $u_1(t)$ is the only collective-coordinate velocity retained. The term “pullback” means $\iota_u^*$ on tensors and differential forms.

The embedding is proper: for compact $K\subset X^{10}$, its projection $K_4$ to $X_4$ is compact, and $\iota_u^{-1}(K)$ is a closed subset of $K_4\times S^1$, hence compact.

## Definition References

[[post-r5-sw-nil-background-data]]

[[def-embedded-smooth-submanifold-with-boundary]]

## Remarks

This is a local representative in the covering-space coordinate description, with the second Nil factor held at $\widetilde q_0$; it does not specify a global orientifold image or total RR charge.
