---
id: def-fundamental-vector-field-of-a-left-action
kind: definition
title: Fundamental vector fields for a left action
status: draft
origin: pipeline
deps: [def-smooth-left-action-of-a-lie-group, def-exponential-map-of-a-lie-group, def-smooth-vector-field-as-a-tangent-bundle-section, thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Equation (20.11) and Theorem 20.18, printed pages 529–530; sign translated to the standing convention
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth
manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The
**fundamental vector field** associated with $X$ is

$$X_M(x):=\left.\frac{d}{dt}\right|_{t=0}\exp_G(-tX)\mathbin{\cdot}x\in T_xM.$$

The minus sign is part of the standing convention. With it, the assignment
$X\mapsto X_M$ is a Lie-algebra homomorphism for a left action; without it,
the usual left-action infinitesimal generator is an antihomomorphism. The
following theorem proves the bracket claim rather than building it into this
definition.

The exponential map is smooth by
[[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]],
so $(t,x)\mapsto\exp_G(-tX)\cdot x$ is smooth. In local coordinates,
differentiating this smooth map in the $t$-variable at $0$ gives coefficients
that depend smoothly on $x$. Thus $x\mapsto X_M(x)$ is a smooth tangent-bundle
section in the sense of
[[def-smooth-vector-field-as-a-tangent-bundle-section]].

Here $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is
used through both the supplied exponential-map construction and the canonical
smooth tangent-bundle structure underlying the smooth-section interface. For
$X=0$ the field is zero. The definition applies to disconnected $G$ and $M$,
and makes no effectiveness, freeness, or properness assumption on the action.
