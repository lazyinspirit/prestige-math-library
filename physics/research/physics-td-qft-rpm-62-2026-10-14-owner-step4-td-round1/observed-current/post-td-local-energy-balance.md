---
id: post-td-local-energy-balance
kind: postulate
title: Local energy balance for an insulated continuum body
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
physical_scope: A rigid, fixed-composition, nonrelativistic continuum body on the rectangular domain of def-td-rectangular-local-equilibrium-fields, with no volumetric energy source, no matter flux, and insulated outer faces.
deps: [def-td-rectangular-local-equilibrium-fields, post-td-first-law-energy]
dependency_roles:
  def-td-rectangular-local-equilibrium-fields: formulation-prerequisite
  post-td-first-law-energy: formulation-prerequisite
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
      locator: Full-text lecture note retrieved; §1.1, energy balance for an insulated rod with no internal source.
---

## Postulate

For a field record on $\Omega\times I$ from [[def-td-rectangular-local-equilibrium-fields]], require the supplied heat-flux field $j_Q$ and each of its first spatial partial derivatives to extend continuously to $\overline\Omega\times[t_0,t_1]$ for every compact interval $[t_0,t_1]\subset I$. Thus $\operatorname{div}j_Q$ is the classical coordinate divergence in $\Omega\times I$, and $j_Q\cdot n$ denotes its continuous trace on each closed face. For these records, adopt the local balance
$$\partial_t u(T(x,t))+\operatorname{div}j_Q(x,t)=0$$
and the insulated-boundary condition $j_Q(x,t)\cdot n(x)=0$ on every face of $\partial\Omega$. Both terms in the local equation have units $\mathrm{W\,m^{-3}}$. The boundary condition says that no heat energy crosses the body's outer faces in this model.

This local continuum balance is an additional adopted postulate, with the sign and energy convention of [[post-td-first-law-energy]]. It is not deduced from that global process-record balance. Matter transfer, volume work, internal sources, moving boundaries, and external-field energy require separately specified balance models and are outside this item.
