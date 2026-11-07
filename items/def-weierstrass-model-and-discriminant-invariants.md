---
id: def-weierstrass-model-and-discriminant-invariants
kind: definition
title: General Weierstrass models and discriminant invariants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: J. S. Milne, Elliptic Curves, Chapter II §§2–3 and §6
      url: https://www.jmilne.org/math/Books/ectext6.pdf
verification:
  precheck: n/a
---

## Definition

Let $K$ be a field. A generalized Weierstrass equation over $K$ is
$$y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6,$$
with $a_1,a_2,a_3,a_4,a_6\in K$, together with its projective completion and distinguished point at infinity. Define
$$b_2=a_1^2+4a_2,\qquad b_4=a_1a_3+2a_4,\qquad b_6=a_3^2+4a_6,$$
$$b_8=a_1^2a_6+4a_2a_6-a_1a_3a_4+a_2a_3^2-a_4^2,$$
$$c_4=b_2^2-24b_4,\qquad \Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6.$$
An admissible change of Weierstrass coordinates has the form
$$x=u^2x'+r,\qquad y=u^3y'+su^2x'+t,$$
where $u\in K^\times$ and $r,s,t\in K$. If $K$ is the fraction field of a discrete valuation ring $R$, an equation is integral when all five coefficients belong to $R$. An integral equation for a fixed pointed elliptic curve is minimal when its discriminant has least valuation among all its integral Weierstrass equations.

## Definition references

[J. S. Milne, *Elliptic Curves*, Chapter II §2, printed pp. 50–51; Chapter II §6, printed pp. 69–70](https://www.jmilne.org/math/Books/ectext6.pdf)
