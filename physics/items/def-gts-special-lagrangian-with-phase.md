---
id: def-gts-special-lagrangian-with-phase
kind: definition
title: Special Lagrangian with phase
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-gts-almost-calabi-yau-data-for-special-lagrangians
  - def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-gts-almost-calabi-yau-data-for-special-lagrangians: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Dominic Joyce, Lectures on Special Lagrangian Geometry
      url: https://arxiv.org/pdf/math/0111111v3
      locator: §§4.1–4.2, Definition 4.3 and phase convention
    - title: Jacopo Stoppa, Special Lagrangian Sections and Stability Conditions on Threefolds
      url: https://arxiv.org/pdf/2508.17709v1
      locator: Introduction, printed pp. 1–2, almost-Calabi–Yau and special-Lagrangian conventions
    - title: Mark Gross and P. M. H. Wilson, Mirror Symmetry via 3-tori for a Class of Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/alg-geom/9608004v3
      locator: §1, normalized Calabi–Yau special-Lagrangian phase convention
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $(X,J,\omega,\Omega)$ be almost-Calabi–Yau data of complex dimension $n$, let $\theta\in\mathbb R$, and let $i:L\hookrightarrow X$ be an oriented embedded smooth real $n$-manifold without boundary. It is special Lagrangian of phase $\theta$ when
$$i^*\omega=0,\qquad \operatorname{Im}(e^{-i\theta}i^*\Omega)=0,$$
and $\operatorname{Re}(e^{-i\theta}i^*\Omega)$ is a positive real $n$-form for the given orientation. Positivity means its value on every positively oriented basis is positive. A submanifold of a symplectic real $2n$-manifold is Lagrangian when its tangent space at each point equals its symplectic orthogonal, equivalently when it has real dimension $n$ and the symplectic form restricts to zero. Thus the first condition and the specified dimension make $L$ Lagrangian; the second and third fix the phase and orientation.

The phase can be replaced by $\theta+2\pi r$ for $r\in\mathbb Z$. Compactness, normalization of $\Omega$, calibration, minimality, and volume minimization are not implicit. Immersed, singular, weak, and brane-with-local-system variants require separate definitions.

## Definition references

[[def-gts-almost-calabi-yau-data-for-special-lagrangians]]

[[def-gts-symplectic-and-almost-complex-curve-data]]
