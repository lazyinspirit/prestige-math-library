---
id: ex-rpm-constant-magnetic-helix
kind: example
title: "A circular magnetic orbit with zero axial momentum"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A symbolic specialization of the conditional constant-magnetic-field test-particle theorem with chosen model parameters. It is not a measurement or empirical claim."
empirical_premises: []
deps:
  - pthm-rpm-constant-magnetic-helix
dependency_roles:
  pthm-rpm-constant-magnetic-helix: physical-result
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Electrodynamics, §9.6, complete online textbook section"
      url: "https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_(Likharev)/09:_Special_Relativity/9.06:_Relativistic_Particles_in_Electric_and_Magnetic_Fields"
      locator: "§9.6 uniform magnetic-field helix and radius calculation; full section inspected."
    - title: "Michael Fowler, University of Virginia, Electromagnetism Lecture 73: Particle in Constant Fields, complete lecture page"
      url: "https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_73_Particle_Const_Fields.html"
      locator: "Complete Lecture 73, magnetic helix, energy constancy and circular-orbit case inspected."
verification: {}
---

## Example

In [[pthm-rpm-constant-magnetic-helix]], choose $qB_0>0$, $p_{01}=p_*>0$ with units kilogram metre per second, $p_{02}=p_{03}=0$, and arbitrary $m>0$ kilograms. Then $S_0=\sqrt{m^2c^2+p_*^2}$ has momentum units, $\gamma_0=S_0/(mc)$ is dimensionless and $\Omega=qB_0/(\gamma_0m)>0$ has units inverse seconds. The orbit is the circle

$$x^1=x^1_0+\frac{cp_*}{S_0\Omega}\sin(\Omega t),\qquad x^2=x^2_0-\frac{cp_*}{S_0\Omega}\bigl(1-\cos(\Omega t)\bigr),\qquad x^3=x^3_0,$$

of radius $p_*/(qB_0)$, with constant energy $cS_0$. At $t=\pi/(2\Omega)$ its momentum is $(0,-p_*,0)$. All values are model parameters, not observations.

## Facts & Assumptions

**Given:** The parameter restrictions above and the adopted magnetic test-particle model in the theorem.

[F1] [[pthm-rpm-constant-magnetic-helix]]: the momentum and position formulas have signed angular frequency $\Omega=qB_0/(\gamma_0m)$, constant energy $cS_0$, and transverse radius $|\mathbf p_\perp|/|qB_0|$.

## Verification

1.1 With $p_{02}=p_{03}=0$ and $\Omega>0$, substitution into [F1] gives $p_1=p_*\cos(\Omega t)$, $p_2=-p_*\sin(\Omega t)$ and $p_3=0$. Substitution into the position formulas gives the displayed coordinates and $x^3=x^3_0$. [given, F1, algebra]

2.1 The radius clause of [F1] gives $|\mathbf p_\perp|/|qB_0|=p_*/(qB_0)$, and the energy is $cS_0$. At $\Omega t=\pi/2$, sine is $1$ and cosine is $0$, so $\mathbf p=(0,-p_*,0)$. The orbit is planar because $p_{03}=0$ makes $x^3$ constant. [step 1.1, F1, algebra] ∎
