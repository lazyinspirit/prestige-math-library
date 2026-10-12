---
id: rem-cm-scope-of-point-symmetry
kind: remark
title: "Scope of point symmetries: symmetries belong to the Lagrangian, not to the configuration space, and time translation is the energy case"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-infinitesimal-point-symmetry, thm-cm-point-symmetry-charge-is-conserved, thm-cm-point-noether-identity-with-time-reparametrization, cor-cm-noether-charges-for-translations-rotations-and-boosts, prop-cm-hamiltonian-branch-identities]
dependency_roles:
  def-cm-infinitesimal-point-symmetry: mathematical-premise
  thm-cm-point-symmetry-charge-is-conserved: mathematical-premise
  thm-cm-point-noether-identity-with-time-reparametrization: mathematical-premise
  cor-cm-noether-charges-for-translations-rotations-and-boosts: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 7.3 (Invariant Transformations and Noether's Theorem)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.4 (symmetries of the Lagrangian and the quantities they conserve), printed pages 23-26"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Remarks

- **The symmetry is a property of the Lagrangian.** The identity of
  [[def-cm-infinitesimal-point-symmetry]] involves both the kinetic part and the potential of
  $\mathcal L$; a transformation that is a symmetry of the configuration space, of a chart or of a
  kinematic structure need not leave a chosen $\mathcal L$ invariant. The corollary
  [[cor-cm-noether-charges-for-translations-rotations-and-boosts]] exhibits the failure
  explicitly: for the confining potential $U(q)=\tfrac k2|q|^2$ the translation and boost
  identities fail even though the Galilean charts of the framework remain available. A symmetry
  hypothesis must therefore be verified for the actual model before
  [[thm-cm-point-symmetry-charge-is-conserved]] or
  [[thm-cm-point-noether-identity-with-time-reparametrization]] can be applied.

- **Time translation is a separate case.** The general theorem includes the case
  $\xi=0,\tau=1,B=0$, where the charge is the energy $-E$ and the identity holds exactly when
  $\mathcal L_t=0$; this agrees with the energy identity of
  [[prop-cm-hamiltonian-branch-identities]] in the autonomous case. Time-dependent Lagrangians
  need not conserve energy, and no conservation is claimed when $\mathcal L_t\ne0$.

- **Conservation is conditional and model-internal.** The conserved charges are deductions from
  the stated symmetry identities along solutions of the Euler–Lagrange equation. Nothing here
  asserts that an observed conservation law implies a symmetry of a physical model, or that the
  models possessing these symmetries describe nature; those are separate modelling and empirical
  questions, and the empirical qualifications of any such use belong to the consuming physical
  items.
