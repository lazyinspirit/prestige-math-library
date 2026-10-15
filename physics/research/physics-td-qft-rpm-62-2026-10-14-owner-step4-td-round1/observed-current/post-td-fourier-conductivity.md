---
id: post-td-fourier-conductivity
kind: postulate
title: Fourier heat-flux constitutive model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
physical_scope: An idealized local-equilibrium continuum regime in which the first-order Fourier relation is adopted. No quantitative gradient threshold or empirically validated coefficient range is specified; the conductivity may be anisotropic and state dependent.
deps: [def-td-rectangular-local-equilibrium-fields]
dependency_roles:
  def-td-rectangular-local-equilibrium-fields: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, §6.5, heat conduction"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: Chapter 6, §6.5, equations (114)–(119)
    - title: MIT OpenCourseWare, 18.303 Linear Partial Differential Equations, The 1-D Heat Equation
      url: https://ocw.mit.edu/courses/18-303-linear-partial-differential-equations-fall-2006/d11b374a85c3fde55ec971fe587f8a50_heateqni.pdf
      locator: Full-text lecture note retrieved; §1.1, Fourier negative-gradient flux convention and heat-equation derivation.
---

## Postulate

For the field record of [[def-td-rectangular-local-equilibrium-fields]], adopt
$$j_Q(x,t)=-K(x,T(x,t))\nabla T(x,t).$$
Here $K$ has entries in $\mathrm{W\,m^{-1}\,K^{-1}}$ and $j_Q$ in $\mathrm{W\,m^{-2}}$, so the equation is dimensionally consistent. Write $K_s=(K+K^{\mathsf T})/2$ for the symmetric part and assume $z^{\mathsf T}K_s(x,T)z\ge0$ for every $z\in\mathbb R^3$. The antisymmetric part may contribute to the flux but not to the quadratic entropy production.

This is an adopted constitutive model in the stated continuum regime. It is neither a consequence of equilibrium entropy alone nor a universal law for all media. In particular, it does not assert a finite propagation speed or an empirical value for $K$.
