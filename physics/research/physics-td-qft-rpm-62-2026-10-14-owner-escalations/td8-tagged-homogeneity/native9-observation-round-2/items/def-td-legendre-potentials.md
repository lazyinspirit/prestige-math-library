---
id: def-td-legendre-potentials
kind: definition
title: Local thermodynamic Legendre potentials
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Local C2 single-phase thermodynamic charts in the adopted nonrelativistic SI framework; transformed natural-variable charts are used only where the specified coordinate maps have C1 inverses.
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - def-td-response-functions
  - pthm-td-local-energy-representation
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-td-response-functions: formulation-prerequisite
  pthm-td-local-energy-representation: physical-result
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.7
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, Appendix II, §2.15
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.15:_Appendix_II-_Legendre_Transformations
    - title: Mehran Kardar, Statistical Mechanics I, Lecture Note 3, §I.E
      url: https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/df0c4e121858c0be246b496dd8c39d2c_MIT8_333F13_Lec3.pdf
---

## Definition

Fix a material constitution $c$ with finite species list $(1,\ldots,r)$ and a local energy representation $U_c=U_c(s,V,n_1,\ldots,n_r)$ from [[pthm-td-local-energy-representation]]. Here $s$ is entropy in $\mathrm{J\,K^{-1}}$, $V>0$ is volume in $\mathrm{m^3}$, each $n_j>0$ is in $\mathrm{mol}$, $U_c$ is in joules, and the conjugates are $T=U_{c,s}$ in kelvins, $p=-U_{c,V}$ in pascals, and $\mu_j=U_{c,n_j}$ in $\mathrm{J\,mol^{-1}}$. The derivatives hold every other listed natural coordinate fixed; the physical-coordinate and rest-frame conventions are those of [[def-td-equilibrium-state-domain]] and [[def-td-si-quantities]].

For an open chart, a **local Legendre transformation** means the following partial transformation of $U_c$: select one or more of its extensive coordinates $q$, take their conjugate coordinates $x=D_qU_c$, and use only a neighborhood on which $(q,z)\mapsto(x,z)$, with $z$ the untransformed coordinates, has a $C^1$ inverse. Such a neighborhood is a valid local transform chart in the sense of [[def-td-response-functions]]. No inverse or potential as a function of the proposed natural coordinates is asserted outside that chart.

On their respective valid charts define the enthalpy, Helmholtz potential, Gibbs potential, and grand potential by

$$H_c:=U_c+pV,\qquad F_c:=U_c-Ts,\qquad G_c:=U_c-Ts+pV,\qquad \Omega_c:=U_c-Ts-\sum_{j=1}^r\mu_jn_j.$$

Their natural-coordinate charts are respectively $(s,p,n)$, $(T,V,n)$, $(T,p,n)$, and $(T,V,\mu_1,\ldots,\mu_r)$. In the volume transform the conjugate coordinate is $-p=U_{c,V}$, which accounts for the plus sign in $H_c$ and $G_c$; in the chemical transform the conjugates are $\mu_j=U_{c,n_j}$, which accounts for the minus signs in $\Omega_c$. All four potentials have units of joules. A displayed differential or global convex-duality characterization is not part of this definition; critical, coexistence, and other non-C2 boundaries are excluded.
