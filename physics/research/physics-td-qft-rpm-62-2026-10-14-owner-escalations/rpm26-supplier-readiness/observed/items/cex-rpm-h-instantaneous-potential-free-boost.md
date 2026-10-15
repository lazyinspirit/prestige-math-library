---
id: cex-rpm-h-instantaneous-potential-free-boost
kind: counterexample
title: "Free boost plus instantaneous relativistic pair potential violates the charge algebra"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 6
deps: ["thm-rpm-h-poincare-moment-map-and-algebra", "def-rpm-h-poincare-charge-space", "def-countable-choice"]
dependency_roles: {"thm-rpm-h-poincare-moment-map-and-algebra": "mathematical-premise", "def-rpm-h-poincare-charge-space": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
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

Assume $\mathrm{AC}_\omega$ for the cited Poincare algebra input. On the product of two one-dimensional equal-time particle phase spaces $(q_a,p_a)$, let $m_a>0$, $E_a(p_a)=\sqrt{m_a^2c^4+c^2p_a^2}$, $H=E_1+E_2+V(q_1-q_2)$ with $V(r)=kr^2/2$, $k>0$, and retain the free total boost

$$K=\frac{q_1E_1+q_2E_2}{c^2}-t(p_1+p_2),\qquad P=p_1+p_2.$$

With canonical brackets, $\{K,P\}=(E_1+E_2)/c^2$, while the Poincaré charge algebra requires $\{K,P\}=H/c^2$. They disagree at every configuration with $q_1\ne q_2$. The construction is therefore a counterexample to combining this instantaneous potential with the unchanged free boost. It is not a universal no-interaction theorem.

## Facts & Assumptions

**Given:** Independent canonical pairs $(q_a,p_a)$, masses $m_a>0$, $c>0$, $k>0$, and the functions specified above.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only; no full axiom of choice is used.

[L1] [[thm-rpm-h-poincare-moment-map-and-algebra]]: the current assigned A draft states the Poincare generator algebra; setting K=-J^{01}/c and P=P^1 in its bracket gives the required free identity {K,P}=P^0/c=H/c^2. The carrier exists as a batch-26 draft, but its proof remains conditional on H0/H8 and has no independent approval.

[F1] [[def-rpm-h-poincare-charge-space]]: $J^{01}=x^0P^1-x^1P^0$ and $P^0=E/c$ on the positive-energy inertial shell, fixing the free boost sign.

## Proof

**Proof technique:** direct canonical bracket and counterexample.

**Given:** The free shell energies, translation-invariant potential, unchanged free boost, and [L1] target identity.

1.1 By the canonical product bracket, $\{q_aE_a,p_1+p_2\}=E_a$ for each $a$, since $E_a$ is independent of position; also $\{t(p_1+p_2),p_1+p_2\}=0$. Hence $\{K,P\}=(E_1+E_2)/c^2$. [F1, L1, A1, algebra]

1.2 The Hamiltonian is $H=E_1+E_2+kr^2/2$, so $H/c^2-\{K,P\}=kr^2/(2c^2)>0$ whenever $r=q_1-q_2\ne0$. The required algebra relation in [L1] fails there. Since $k$ has units $\mathrm{kg/s^2}$, $kr^2/2$ is energy and the compared charges have matching units. This refutes this proposed free-boost construction only. [L1, step 1.1, algebra] ∎
