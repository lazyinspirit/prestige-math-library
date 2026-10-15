---
id: pthm-rpm-h-classical-orbit-evolution
kind: physics-theorem
title: "Conditional classical orbit evolution and invariant labels"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
physical_scope: "Selected linear H generates complete group translation on the orbit; m,s labels preserved."
dependency_level: 9
deps: ["post-rpm-h-classical-spin-orbit-model", "thm-rpm-h-positive-spin-orbit", "thm-rpm-h-canonical-poisson-and-flow", "thm-coadjoint-orbits-are-symplectic-manifolds", "def-rpm-h-poincare-charge-space", "def-countable-choice"]
dependency_roles: {"post-rpm-h-classical-spin-orbit-model": "physical-assumption", "thm-rpm-h-positive-spin-orbit": "mathematical-premise", "thm-rpm-h-canonical-poisson-and-flow": "mathematical-premise", "thm-coadjoint-orbits-are-symplectic-manifolds": "mathematical-premise", "def-rpm-h-poincare-charge-space": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nesta van der Schaaf, Classical and Quantum Particles in Galilean and Poincaré Spacetime, complete 2017 monograph PDF; §9.3 PDF pp. 77–79; §10.2.2 PDF pp. 81–82."
      url: https://www.math.ru.nl/~landsman/Nesta.pdf
      locator: "Complete 85-page monograph; full relevant sections inspected. Source uses natural units and signature (+---), translated explicitly in local statements."
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
landmark: false
---

## Statement

Assume $\mathrm{AC}_\omega$. Adopt the optional classical spinning-orbit model of [[post-rpm-h-classical-spin-orbit-model]] with fixed $m,s>0$ and selected inertial Hamiltonian $H=cP^0$. Conditional on the KKS orbit and canonical Hamiltonian conventions, its Hamiltonian flow is the one-parameter coadjoint action of the corresponding time-translation subgroup (with the sign fixed by the library convention). It exists for all real evolution parameters and preserves $m$ and $s$. This is a deduction inside the adopted classical model, not evidence for that model or a derivation of quantum spin.

## Facts & Assumptions

**Given:** The optional model postulate, its fixed orbit, and $H=cP^0$ in one inertial frame.

[A1] [[post-rpm-h-classical-spin-orbit-model]]: the model adopts the positive-spin KKS orbit with primitive $m,s>0$ and chooses $H=cP^0$.

[L1] [[thm-rpm-h-positive-spin-orbit]]: for $m,s>0$ its mathematical KKS construction identifies the orbit and computes its dimension and invariants. The optional physical adoption is [A1], not a premise of this mathematical supplier.

[F1] [[thm-coadjoint-orbits-are-symplectic-manifolds]]: on a coadjoint orbit the inclusion moment map satisfies $d\mu^\xi=-\iota_{\xi_\mathcal O}\omega_{KKS}$, so linear dual components generate the corresponding infinitesimal coadjoint fields.

[L2] [[thm-rpm-h-canonical-poisson-and-flow]]: the current H0 draft states $\iota_{X_H}\omega=dH$ and the local Hamilton-flow convention. Its H25 Step 1 record is ready/hash-current; the carrier remains draft/unbound with ai-altered proof provenance, so that readiness does not independently approve its proof. Its sign interface matches here.

[F2] [[def-rpm-h-poincare-charge-space]]: the pure unit $x^0$ translation pairs with $p_0=-P^0$ under the fixed cotangent convention.

[A2] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only; no full axiom of choice is used.

## Proof

**Proof technique:** identify the linear Hamiltonian vector field with a group action.

**Given:** [A1], the KKS moment equation [F1], and the Hamiltonian sign convention [L2].

1.1 Let $\xi_0$ be unit translation in the $x^0$ direction. The dual pairing of [F2] gives $\mu^{\xi_0}=p_0=-P^0$, so $H=cP^0=-c\mu^{\xi_0}$. Since $\iota_{\xi_{\mathcal O}}\omega=-d\mu^{\xi_0}$ by [F1] and $\iota_{X_H}\omega=dH$ by [L2], $X_H=c\,\xi_{\mathcal O}$. With the library fundamental-field convention, its integral curve is $z(t)=\exp_G(-ct\xi_0)\cdot z(0)$. [A1, F1, F2, L1, L2, A2, algebra]

2.1 The fundamental field with the library convention integrates as $z(t)=\exp_G(-ct\xi_0)\cdot z(0)$ for every real $t$; differentiating this globally defined action gives $c\xi_{0,\mathcal O}$, the field from step 1.1. Thus this particular Hamiltonian flow is complete. The group action preserves the orbit invariants, so $P^2=-m^2c^2$ and $W^2=m^2c^2s^2$ remain fixed, preserving $m,s$. [F1, L1, A2, step 1.1, algebra] ∎
