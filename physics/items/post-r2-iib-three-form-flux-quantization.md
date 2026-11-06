---
id: post-r2-iib-three-form-flux-quantization
kind: postulate
title: "GKP free-period quantization for Type IIB three-form flux"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
deps:
  - def-r2-iib-flux-background-conventions
  - def-gts-cheegersimons-differential-character
  - def-gts-differential-twist-and-twisted-differential-k-theory
dependency_roles:
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  def-gts-cheegersimons-differential-character: formulation-prerequisite
  def-gts-differential-twist-and-twisted-differential-k-theory: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Adopted GKP/Dirac normalization for free three-form periods in the stated Type IIB O3/O7 Calabi–Yau orientifold sector and chosen smooth cover, restricted to globally defined smooth closed three-form field strengths with no NS5/D5 magnetic source currents. It is not a universal quantization law for all Type IIB backgrounds and does not determine torsion or differential/K-theory charge data."
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1 Eq. (2.25), PDF p. 9; fluxes and the sourced D3 tadpole, §2.1 Eqs. (2.23)–(2.24), PDF pp. 7–8; the closed three-form Bianchi identities in §2.2 Eq. (2.33), PDF p. 10."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§2.2 Eq. (2.5), PDF pp. 5–6; §4.2 Eqs. (4.21)–(4.22), PDF pp. 28–29."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the GKP/Dirac normalization on the selected smooth covering space $X$ of the Type IIB O3/O7 Calabi–Yau orientifold. Assume $F_3,H_3\in\Omega^3(X;\mathbb R)$ are globally defined smooth closed forms, so $d_XF_3=d_XH_3=0$ and their periods depend only on the represented homology classes. This is the sector with no NS5/D5 magnetic source currents; a model with such currents requires separately stated sourced Bianchi identities and is outside this postulate. On each chosen local potential patch $U\subseteq X$ on which the potentials are defined, they satisfy $F_3|_U=dC_2$ and $H_3|_U=dB_2$; global potentials are not required. A smooth integral three-cycle $z$ is a finite integer sum of smooth maps from the standard three-simplex to $X$ whose alternating face boundary is zero. For every such $z$, require
$$\frac{1}{(2\pi)^2\alpha'}\int_zF_3\in\mathbb Z,\qquad \frac{1}{(2\pi)^2\alpha'}\int_zH_3\in\mathbb Z.$$
Equivalently, $\frac{1}{2\pi\alpha'}\int_zF_3\in2\pi\mathbb Z$ and likewise for $H_3$. Closedness and Stokes' theorem make these periods invariant under adding a boundary to $z$; a torsion cycle has zero period because some positive integer multiple is a boundary. Thus the nontrivial period lattice is on the free homology quotient. Since $\alpha'$ has dimension length squared, the periods have dimension length squared and their normalized values are dimensionless. This is an adopted physical Dirac-quantization input, not a theorem of de Rham cohomology. It does not assert that ordinary integral cohomology detects torsion RR data, that the global RR field is classified by ordinary differential cohomology, that twisted K-theory refinements or Freed–Witten shifts vanish, or that quotient/orientifold multiplicities can be omitted.

## Postulate references

[[def-r2-iib-flux-background-conventions]]

[[def-gts-cheegersimons-differential-character]]

[[def-gts-differential-twist-and-twisted-differential-k-theory]]

[Giddings–Kachru–Polchinski, Eq. (2.25)](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §2.2](https://arxiv.org/pdf/hep-th/0509003v3)

## Remarks

The differential-character and twisted differential K-theory definitions are formulation context only. This postulate does not use either definition to derive its period lattice or to identify torsion, flat holonomy, or a universal RR charge class. Its physical range is limited to the stated GKP free-period sector.

