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
Here $K$ has entries in $\mathrm{W\,m^{-1}\,K^{-1}}$ and $j_Q$ in $\mathrm{W\,m^{-2}}$, so the equation is dimensionally consistent. Write $K_s=(K+K^{\mathsf T})/2$ for the symmetric part and assume $z^{\mathsf T}K_s(x,T)z\ge0$ for every $z\in\mathbb R^3$. Define the thermal quadratic density by
$$\sigma_Q(x,t):=-\frac{j_Q(x,t)\cdot\nabla T(x,t)}{T(x,t)^2}=\frac{(\nabla T(x,t))^{\mathsf T}K_s(x,T(x,t))\nabla T(x,t)}{T(x,t)^2},$$
with units $\mathrm{W\,m^{-3}\,K^{-1}}$. For the antisymmetric part $K_a=(K-K^{\mathsf T})/2$, the scalar $z^{\mathsf T}K_a z$ equals its own negative by transposition, so it is zero. Thus $K_a$ may contribute to $j_Q$ but not to $\sigma_Q$, and $\sigma_Q\ge0$. Interpreting this density as entropy production additionally requires a local entropy map $s\in C^1(\mathcal T,\mathbb R)$ in $\mathrm{J\,m^{-3}\,K^{-1}}$ with $s'(T)=u'(T)/T$, the energy balance $\partial_tu+\operatorname{div}j_Q=0$, and regularity permitting the product and chain rules; under those additional assumptions the entropy balance is $\partial_t s(T)+\operatorname{div}(j_Q/T)=\sigma_Q$. This postulate alone adopts neither that caloric entropy relation nor the energy balance.

This is an adopted constitutive model in the stated continuum regime. It is neither a consequence of equilibrium entropy alone nor a universal law for all media. In particular, it does not assert a finite propagation speed or an empirical value for $K$.
