---
id: pthm-rpm-h-free-symmetry-conservation
kind: physics-theorem
title: "Conditional free Poincare and background Killing charges"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
physical_scope: "Under the exact action and background symmetry, adopted mechanical charge observables are conserved; time-dependent boosts include partial-time cancellation."
dependency_level: 7
deps: ["post-rpm-h-free-test-particle-action", "post-rpm-h-massless-shell-action", "thm-rpm-h-poincare-moment-map-and-algebra", "thm-rpm-h-killing-shell-first-integral", "thm-rpm-h-first-order-action-and-geodesics", "def-countable-choice"]
dependency_roles: {"post-rpm-h-free-test-particle-action": "physical-assumption", "post-rpm-h-massless-shell-action": "physical-assumption", "thm-rpm-h-poincare-moment-map-and-algebra": "mathematical-premise", "thm-rpm-h-killing-shell-first-integral": "mathematical-premise", "thm-rpm-h-first-order-action-and-geodesics": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
    - title: "Nesta van der Schaaf, Classical and Quantum Particles in Galilean and Poincaré Spacetime, complete 2017 monograph PDF; §9.3 PDF pp. 77–79; §10.2.2 PDF pp. 81–82."
      url: https://www.math.ru.nl/~landsman/Nesta.pdf
      locator: "Complete 85-page monograph; full relevant sections inspected. Source uses natural units and signature (+---), translated explicitly in local statements."
landmark: false
---

## Statement

Assume $\mathrm{AC}_\omega$ for the moment-map supplier. Adopt either the massive free test-particle action or the distinct massless shell action of [[post-rpm-h-free-test-particle-action]] and [[post-rpm-h-massless-shell-action]]. Conditional on those model choices and the corresponding future free-shell equations, the affine Poincaré charges are conserved on flat spacetime; in a fixed-time Hamiltonian description the boost charge includes its explicit partial-time derivative. On a prescribed curved background, every mechanical scalar $p_a\xi^a$ for a Killing field is conserved along the adopted free shell. These are model deductions. They do not establish the empirical adequacy of either action, and they do not extend to arbitrary interacting potentials.

## Facts & Assumptions

**Given:** A flat inertial Minkowski background or a prescribed smooth Lorentzian background with a Killing field, and one of the explicitly adopted free-particle models.

[A1] [[post-rpm-h-free-test-particle-action]]: the massive model adopts fixed primitive mass $m>0$ and the stationary action $-mc\int\sqrt{-g(x',x')}d\lambda$ on future timelike curves with the stated endpoint and regularity conditions. The H5 carrier remains a draft adopted postulate with no pipeline_run binding; its current Step 1 record is ready/hash-current, which is input readiness and not empirical evidence or independent proof approval.

[A2] [[post-rpm-h-massless-shell-action]]: the massless model is a separate constrained first-order action with nonzero future null momentum and positive multiplier; it is not obtained by putting $m=0$ in the massive square-root action. This H5 carrier remains a draft adopted postulate with no pipeline_run binding; its current Step 1 record is ready/hash-current, not an empirical finding or independent proof approval.

[L1] [[thm-rpm-h-poincare-moment-map-and-algebra]]: the current assigned A draft states shell charge descent and the time-dependent boost identity partial_t B_i+{B_i,E}=0. It is a batch-26 draft with H0/H8 inputs still open.

[L2] [[thm-rpm-h-killing-shell-first-integral]]: for a Killing vector, $\{p_a\xi^a,C_m\}=0$ identically, so the scalar is conserved along the constrained free-shell flow; the proof is conditional on H0/H7.

[A3] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only; no full axiom of choice is used.

[L3] [[thm-rpm-h-first-order-action-and-geodesics]]: the current H7 draft assumes a prescribed smooth time-oriented Lorentzian background, a compact chart interval, smooth $x,p,e$, $e>0$, and either the future timelike $m>0$ branch or the separate nonzero future-null $m=0$ branch; its stationary equations are $x\prime{}^a=e g^{ab}p_b$, $p\prime{}_a=-\tfrac e2\partial_a g^{bc}p_bp_c$, $C_m=0$. It relates the massive square-root functional to the shell equations; the null branch remains separately specified. This is a mathematical variational supplier for explicit functionals and selected future branches; adoption of particle dynamics is a separate physical premise.

## Proof

**Proof technique:** apply the shell first-integral identities to the adopted models.

**Given:** [A1] or [A2] and the actual corresponding constrained shell trajectories.

1.1 Under [A1] or [A2], the model is restricted to its stated massive future-timelike or nonzero future-null branch. On flat spacetime the affine generators are Killing fields; their phase-space charges are the components of [L1]. The shell brackets vanish, so each time-independent translation or Lorentz component is constant along its shell characteristic. For a fixed-time boost, the derivative is instead $\partial_tB_i+\{B_i,E\}$, which vanishes by [L1]. [A1, A2, A3, L1, L3, algebra]

2.1 On a prescribed curved background, let $\xi$ be Killing. By [L2] the bracket with the mass-shell constraint vanishes; along the multiplier equations selected by either adopted action the derivative is $e\{p_a\xi^a,C_m\}=0$. This is a conditional model prediction for the specified background symmetry. [A1, A2, A3, L2, L3, algebra] ∎
