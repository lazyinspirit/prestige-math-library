---
id: pthm-emx-duality-vacuum
kind: physics-theorem
title: Vacuum duality and its domain
status: published
origin: session
domain: physics
library: physics
dependency_level: 3
deps:
  - pthm-emx-exterior-maxwell
  - def-emx-lorentz-star
  - lem-emx-lorentz-star-square
  - post-em-vacuum-maxwell
dependency_roles:
  pthm-emx-exterior-maxwell: physical-result
  def-emx-lorentz-star: mathematical-premise
  lem-emx-lorentz-star-square: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
physical_scope: Smooth source-free vacuum Maxwell fields in the fixed flat oriented SI laboratory chart, with the Lorentzian Hodge star of signature (-+++). The duality does not assert invariance of a material constitutive law or a boundary condition, and does not introduce magnetic charge.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture script
      url: https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf
      locator: Section 8.5, printed p. 8.7 (PDF p. 92), equations (8.28)–(8.29), source-free electric/magnetic duality rotation and its magnetic-charge caveat. The source angle alpha is related to theta here by alpha = -theta.
    - title: Friedrich W. Hehl, Yakov Itin, and Yuri N. Obukhov, Recent developments in premetric classical electrodynamics, arXiv:physics/0610221v1
      url: https://arxiv.org/pdf/physics/0610221
      locator: Sections 4 and 6, PDF pp. 4–9, equations (9)–(10) and (25)–(26), field-strength flux equation and metric-dependent vacuum closure. This source's sign, metric, and impedance conventions are not imported.
proof_strategy: direct
---

## Statement

On a region of the fixed oriented Minkowski laboratory chart with $P=M=0$ and free-current form $\mathcal J=0$, let $F$ be a $C^1$ electromagnetic field-strength 2-form and let $\theta$ be a constant real number. Then

$$F_\theta = \cos(\theta)F + \sin(\theta)\star_\eta F$$

again satisfies $dF_\theta=0$ and $d\star_\eta F_\theta=0$. This is a symmetry of the source-free vacuum equations only. With nonzero free-current form $\mathcal J$, a rotation with $\sin(\theta)\ne0$ generally fails the same no-magnetic-source equation; no duality invariance is asserted for a material closure or boundary condition without a separate compatibility proof. The companion conductor example gives a concrete boundary failure. No magnetic charge sector is adopted.

## Statement references

[[pthm-emx-exterior-maxwell]]

[[def-emx-lorentz-star]]

[[lem-emx-lorentz-star-square]]

[[post-em-vacuum-maxwell]]

## Facts & Assumptions

**Given:** A C^1 vacuum field-strength form F, a constant theta, and the fixed orientation, signature, and Hodge star of the Statement.

[A1] [[post-em-vacuum-maxwell]] adopts the smooth Maxwell equations without magnetic-source terms.

[F1] [[pthm-emx-exterior-maxwell]] gives $dF=0$ and $dG=\mathcal J$ in vacuum, with $G=(\mu_0c)^{-1}\star_\eta F$; the source-free case has $\mathcal J=0$.

[F2] [[def-emx-lorentz-star]] defines $\star_\eta$ as a linear map on 2-forms for orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ and signature $(-+++)$.

[F3] [[lem-emx-lorentz-star-square]] gives $\star_\eta^2=-\operatorname{id}$ on 2-forms.

## Proof

**Given:** The field and assumptions in [A1] and [F1]–[F3].

1.1 By linearity of $d$ and [F1], $dF_\theta=\cos(\theta)dF+\sin(\theta)d\star_\eta F=0$. By [F2] and [F3], $\star_\eta F_\theta=\cos(\theta)\star_\eta F-\sin(\theta)F$, so $d\star_\eta F_\theta=\cos(\theta)d\star_\eta F-\sin(\theta)dF=0$. Thus the rotated form solves both source-free vacuum equations. [A1, F1, F2, F3, given, algebra]

2.1 In a vacuum region with nonzero free-current form $\mathcal J$, [F1] gives $d\star_\eta F=\mu_0c\mathcal J$. Therefore $dF_\theta=\sin(\theta)\mu_0c\mathcal J$, which is nonzero whenever $\sin(\theta)\mathcal J$ is nonzero. It then fails the adopted equation $dF_\theta=0$; restoring a duality symmetry would require changing the source sector, which this framework does not adopt. The theorem makes no claim that any material closure or boundary condition is preserved. [A1, F1, given, algebra] ∎
