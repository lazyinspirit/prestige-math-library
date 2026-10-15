---
id: ex-rpm-crossed-field-drift
kind: example
title: "The exact constant drift solution in subcritical crossed fields"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A symbolic specialization of the subcritical crossed-field theorem. The chosen field parameters describe an exact model solution and are not measured values; general initial data still give inverse-boosted magnetic orbits."
empirical_premises: []
deps:
  - pthm-rpm-crossed-field-drift
dependency_roles:
  pthm-rpm-crossed-field-drift: physical-result
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Electrodynamics, §9.6, complete online textbook section"
      url: "https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_(Likharev)/09:_Special_Relativity/9.06:_Relativistic_Particles_in_Electric_and_Magnetic_Fields"
      locator: "§9.6 subcritical crossed-field boost and drift solution; full relevant section inspected."
    - title: "Michael Fowler, University of Virginia, Electromagnetism Lecture 73: Particle in Constant Fields, complete lecture page"
      url: "https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_73_Particle_Const_Fields.html"
      locator: "Complete Lecture 73, crossed-field drift solution and magnetic rest frame inspected."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Let $B_0>0$ be in tesla and set $E_0=cB_0/2$ in newtons per coulomb, so $\mathbf E=E_0e_1$, $\mathbf B=B_0e_3$ is subcritical. In [[pthm-rpm-crossed-field-drift]], the drift velocity and boost factor are $\mathbf v_d=-(c/2)e_2$ in metres per second and $\gamma_d=2/\sqrt3$. The constant-velocity orbit $\mathbf x(t)=\mathbf x_0+\mathbf v_dt$ in a chart with $x^0=ct$ solves the adopted model for any $m>0$ and constant charge $q$: its Lorentz force vanishes. This is one exact solution; other initial data yield boosted magnetic orbits.

## Facts & Assumptions

**Given:** The chosen fields, positive $B_0$, $m>0$, constant $q$, and the subcritical external-field model of the theorem.

[F1] [[pthm-rpm-crossed-field-drift]]: for $|E_0|<c|B_0|$, $\mathbf v_d=-(E_0/B_0)e_2$, $\gamma_d=(1-|\mathbf v_d|^2/c^2)^{-1/2}$, and $\mathbf E+\mathbf v_d\times\mathbf B=0$; general solutions are inverse boosts of magnetic orbits.

## Verification

1.1 The ratio $E_0/(cB_0)=1/2$ verifies the strict subcritical hypothesis. Substituting $E_0=cB_0/2$ in [F1] gives $\mathbf v_d=-(c/2)e_2$ and $\gamma_d=(1-1/4)^{-1/2}=2/\sqrt3$. [given, F1, algebra]

2.1 Directly, $\mathbf v_d\times\mathbf B=-(cB_0/2)(e_2\times e_3)=-(cB_0/2)e_1=-\mathbf E$. Thus [F1] makes the Lorentz force zero, momentum stays constant, and the straight worldline is an exact orbit. The theorem's inverse-boost construction applies to general initial data, so this example does not assert that every orbit has this constant velocity. [step 1.1, F1, algebra] ∎
