---
id: post-fd-continuum-balances
kind: postulate
title: Single-component nonpolar continuum and material balances
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-quantity-and-frame-conventions
  - lem-fd-transport-and-density
  - lem-fd-c1-domain-jordan-integrals
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-transport-and-density: formulation-prerequisite
  lem-fd-c1-domain-jordan-integrals: formulation-prerequisite
physical_scope: >-
  Adopted smooth, single-component, nonpolar material continuum on a declared
  macroscopic regime, for bounded C1 material subregions and C2 orientation-
  preserving motions with positive density and temperature. No molecular limit,
  weak/shock/vacuum theory, surface couple, micropolar response, or claim of
  universal empirical validity is included.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ain A. Sonin, Fundamental Laws of Motion for Particles, Material Volumes, and Control Volumes, MIT 2.25 lecture notes"
      url: "https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf"
    - title: "Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 3: Forces, Momentum and Stress"
      url: "https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch3.pdf"
    - title: "Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 4: Physical Conservation and Balance Laws & Thermodynamics"
      url: "https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf"
    - title: "David Tong, Fluid Mechanics, Part I lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
verification:
  precheck: pending
---

## Postulate

Adopt a smooth single-component material continuum on a stated macroscopic regime in a Cartesian inertial chart. Let $\rho_0\in C^1(\overline B)$ be positive. On each swept material region, require $\rho,u,e,T,s,q,\sigma\in C^1$ and $b,r\in C^0$, with $\rho>0$ and $T>0$; the motion has the regularity and positive Jacobian in the preceding definition. A material subregion is $\chi_t(V)$ for a nonempty bounded open set $V\Subset B$ whose boundary is locally, after a rigid coordinate change, a $C^1$ graph with $V$ on one side; its boundary moves with the material velocity. The Jordan integral convention for such regions and their smooth images is the one in the mathematical interface identified below. The continuum approximation, its empirical regime, and the following balance laws are physical assumptions of this model, not deductions from the mathematical definition of a motion or from molecular mechanics.

Assume there are no mass sources and no diffusion relative to $u$. Adopt a positive reference mass density $\rho_0$, a positive current density $\rho$, a body-acceleration field $b$, a contact traction $t(t,x,n)=\sigma(t,x)n$ depending only on the local outward unit normal $n$, a $C^1$ Cauchy stress field $\sigma$, specific internal energy $e$, positive temperature $T$, specific entropy $s$, heat-flux vector $q$, and specific heat supply $r$, with the types and SI units fixed in the preceding definition. Contact traction and volume-force densities are continuous and locally bounded on the smooth material regions under consideration. There are no surface couples or intrinsic spin angular momentum; a micropolar or couple-stress model is outside this postulate.

For every such material subregion, adopt conservation of mass,

$$\int_{\chi_t(V)}\rho(t,x)\,dx=\int_V\rho_0(a)\,da.$$

In the same inertial chart, adopt the balances of linear and angular momentum,

$$\frac{d}{dt}\int_{\chi_t(V)}\rho u\,dx=\int_{\chi_t(V)}\rho b\,dx+\int_{\partial\chi_t(V)}t(t,x,n)\,dS,$$

$$\frac{d}{dt}\int_{\chi_t(V)}x\times(\rho u)\,dx=\int_{\chi_t(V)}x\times(\rho b)\,dx+\int_{\partial\chi_t(V)}x\times t(t,x,n)\,dS.$$

Adopt the total-energy balance and entropy inequality

$$\frac{d}{dt}\int_{\chi_t(V)}\rho\left(e+\frac{|u|^2}{2}\right)\,dx=\int_{\chi_t(V)}\rho b\cdot u\,dx+\int_{\partial\chi_t(V)}t(t,x,n)\cdot u\,dS-\int_{\partial\chi_t(V)}q\cdot n\,dS+\int_{\chi_t(V)}\rho r\,dx,$$

$$\frac{d}{dt}\int_{\chi_t(V)}\rho s\,dx\ge-\int_{\partial\chi_t(V)}\frac{q}{T}\cdot n\,dS+\int_{\chi_t(V)}\frac{\rho r}{T}\,dx.$$

The entropy flux uses the local material temperature at the heat-transfer point. A reservoir at a different temperature, a singular surface force, a shock, vacuum, or a weak solution requires a separately stated model and is not covered here. The postulate reports no experiment and asserts no measurement or universal claim that nature obeys these assumptions.

## Postulate references

[Ain A. Sonin, MIT 2.25 lecture notes, §§1.1–1.3 (material volumes and mass, momentum, energy, and entropy balances)](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf)

[Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 3, §§3.2–3.4 (momentum, traction, and stress)](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch3.pdf)

[Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 4, §§4.1–4.4.4 (mass, momentum, energy, and entropy balances)](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf)

[David Tong, Fluid Mechanics, Part I, §§1.1–1.1.3 (continuum approximation and mass-density/velocity fields)](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

## Facts & Assumptions

**Given:** The explicitly adopted Newtonian-spacetime, smooth-motion, field-type, and SI conventions of the preceding definition.

[F1] [[def-fd-quantity-and-frame-conventions]]: time is absolute; a material motion is separate from an inertial chart; $u$ is Eulerian velocity; $D_t=\partial_t+u\cdot\nabla$; current mass density is scalar in kg m$^{-3}$; traction is $\sigma n$; and $e,T,s,q,r$ have the listed types and units.

[F2] [[lem-fd-transport-and-density]]: for a $C^2$ orientation-preserving motion, every compact Jordan material set and $C^1$ scalar field obey the stated change-of-variables and material-transport formulas; its statement gives the continuity/local-mass equivalence for all compact Jordan sets. This remains a draft mathematical supplier used here as a formulation interface, while [[lem-fd-c1-domain-jordan-integrals]] supplies the conversion from open $C^1$ subregions to the compact-Jordan convention.

[F3] [[lem-fd-c1-domain-jordan-integrals]]: a bounded open region with locally $C^1$ graph boundary and its image under a $C^1$ diffeomorphism are bounded $C^1$ domains and Jordan measurable; integration over the open current region agrees with integration over its compact closure.

## Authoring review notes

The cited continuum laws are adopted physical premises. The cited texts motivate their standard formulations; neither a textbook nor the model equations prove the continuum approximation or empirical validity. The temperature in the entropy flux is explicitly the local material temperature. The postulate does not adopt a constitutive law or an equation of state.
