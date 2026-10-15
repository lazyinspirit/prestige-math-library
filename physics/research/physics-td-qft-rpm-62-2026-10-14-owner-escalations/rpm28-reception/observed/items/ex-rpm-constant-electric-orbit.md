---
id: ex-rpm-constant-electric-orbit
kind: example
title: "Uniform electric field from rest"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A symbolic specialization of the conditional constant-electric-field test-particle theorem with chosen SI model parameters. It is not a measurement or empirical claim."
empirical_premises: []
deps:
  - pthm-rpm-constant-electric-orbit
dependency_roles:
  pthm-rpm-constant-electric-orbit: physical-result
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Electrodynamics, §9.6, complete online textbook section"
      url: "https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_(Likharev)/09:_Special_Relativity/9.06:_Relativistic_Particles_in_Electric_and_Magnetic_Fields"
      locator: "§9.6 uniform electric-field trajectory and relativistic energy-momentum relation; full section inspected."
    - title: "Michael Fowler, University of Virginia, Electromagnetism Lecture 73: Particle in Constant Fields, complete lecture page"
      url: "https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_73_Particle_Const_Fields.html"
      locator: "Complete Lecture 73, exact constant-electric-field solution and its limiting cases inspected."
verification: {}
---

## Statement

Choose $m=1\,\mathrm{kg}$, $q=1\,\mathrm C$, $E_0=2\,\mathrm{N\,C^{-1}}$, $\mathbf B=0$, and initial data $\mathbf x_0=0$, $\mathbf p_0=0$ at $t=0$ in [[pthm-rpm-constant-electric-orbit]]. Then $F_0=2\,\mathrm N$, $p_1(t)=F_0t$, and for every finite $t$ the model orbit is

$$x^1(t)=\frac c{F_0}\left(\sqrt{m^2c^2+F_0^2t^2}-mc\right),\qquad x^2(t)=x^3(t)=0,$$

with $v_1(t)=cF_0t/\sqrt{m^2c^2+F_0^2t^2}$. This is a symbolic model calculation with chosen parameters, not a report of measured field or particle data.

## Facts & Assumptions

**Given:** The chosen $m,q,E_0$, zero initial position and momentum, and the adopted model assumptions in the theorem.

[F1] [[pthm-rpm-constant-electric-orbit]]: for $F_0=qE_0\ne0$, $\Pi=\sqrt{m^2c^2+|\mathbf p_\perp|^2}$, $p_1=p_{01}+F_0t$, and the exact position and velocity are the formulas stated there.

## Proof

1.1 Here $F_0=qE_0=(1\,\mathrm C)(2\,\mathrm{N\,C^{-1}})=2\,\mathrm N\ne0$, $p_{01}=0$, $\mathbf p_\perp=0$, and $\Pi=mc$. Inserting these values into [F1] gives $p_1(t)=F_0t$, zero transverse coordinates, and the displayed $x^1(t)$. [given, F1, algebra]

1.2 Substitution in the velocity formula of [F1] gives $v_1=cF_0t/\sqrt{m^2c^2+F_0^2t^2}$ and $v_2=v_3=0$. At $t=0$, $x^1=0$ and $v_1=0$; for finite $t$, $|v_1|<c$ because the denominator is strictly larger than $|F_0t|$. [step 1.1, F1, algebra] ∎
