---
id: def-gts-cheegersimons-differential-character
kind: definition
title: Cheeger–Simons differential character
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 2
axiom_strength: ZF + full AC for the cochain-extension construction of I
deps:
  - def-smooth-differential-k-form
  - def-smooth-singular-simplex
  - def-gts-smooth-integral-singular-chain-complex
  - def-singular-cohomology-with-coefficients
  - def-de-rham-cochain-complex
  - def-singular-cohomology-ring
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - lem-singular-uct-extension-from-cycle-projections
  - def-axiom-of-choice
justified_by:
  - lem-gts-differential-character-structure-maps-well-defined
dependency_roles:
  def-smooth-differential-k-form: mathematical-premise
  def-smooth-singular-simplex: mathematical-premise
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-de-rham-cochain-complex: mathematical-premise
  def-singular-cohomology-ring: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  lem-singular-uct-extension-from-cycle-projections: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
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
sources:
  references:
    - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology
      url: https://arxiv.org/pdf/math/0701077v1
      locator: Section 1, differential-character construction, PDF pp. 2–4.
    - title: M. J. Hopkins and I. M. Singer, Quadratic Functions in Geometry, Topology, and M-Theory
      url: https://arxiv.org/pdf/math/0211216v2
      locator: Section 2.3, Definition 2.5 and cochain differential, PDF pp. 8–10.
---

## Definition

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary and let $k\ge1$. With the additive normalization $U(1)=\mathbb R/\mathbb Z$, a degree-$k$ Cheeger–Simons differential character is a homomorphism $h:Z_{k-1}^\infty(M;\mathbb Z)\to\mathbb R/\mathbb Z$ for which there exists a closed $k$-form $\omega$ with integral periods satisfying $h(\partial c)=\int_c\omega\pmod{\mathbb Z}$ for every $c\in C_k^\infty(M;\mathbb Z)$. The structural lemma [[lem-gts-differential-character-structure-maps-well-defined]] proves that $\omega$ is unique; write $R(h)=\omega$. Under full AC, choose a real cochain lift $\widetilde h$ extending a lift of $h$ from cycles; the characteristic class is $I(h)=[\operatorname{Int}(\omega)-\delta\widetilde h]\in H^k(M;\mathbb Z)$, where $\operatorname{Int}(\omega)(c)=\int_c\omega$ and smooth singular cohomology is identified with ordinary singular cohomology by the smooth-chain comparison. Its independence of the lift is proved in the same structural lemma.

## Definition references

[[def-smooth-differential-k-form]]

[[def-gts-smooth-integral-singular-chain-complex]]

[[def-singular-cohomology-with-coefficients]]

[[lem-gts-smooth-integral-chains-compute-singular-homology]]

[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

[[def-de-rham-cochain-complex]]

[[def-singular-cohomology-ring]]

## Remarks

The element $\omega_h$ is a real-valued smooth form. “Integral periods” means that its integral over every smooth integral $k$-cycle is an integer. The characteristic class records the integral cocycle obtained from any real cochain extension; its well-definedness is established by [[lem-gts-differential-character-structure-maps-well-defined]]. Degree zero is defined separately.
