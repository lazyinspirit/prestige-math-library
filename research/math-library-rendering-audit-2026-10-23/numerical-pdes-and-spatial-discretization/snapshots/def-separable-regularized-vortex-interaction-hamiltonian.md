---
id: def-separable-regularized-vortex-interaction-hamiltonian
kind: definition
title: Separable regularized vortex-inspired Hamiltonian comparison system
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-mollified-biot-savart-vortex-kernel
  - lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz
  - def-leapfrog-step-map
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - def-mean-field-and-weighted-vortex-particle-systems
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used in the definition.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
    - title: Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration
      url: https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
---

## Definition

For $N\ge2$, real weights $\Gamma_i$, and $\varepsilon>0$, define the open collision-free configuration set $Q_{cf}:=\{q=(q_1,\ldots,q_N)\in(\mathbb R^2)^N:q_i\ne q_j\text{ for }i\ne j\}$. Let $q\in Q_{cf}$ and $p=(p_1,\ldots,p_N)\in(\mathbb R^2)^N$. Let
$$H_\varepsilon(q,p)=\frac12\sum_{i=1}^N|p_i|^2+V_\varepsilon(q),\qquad V_\varepsilon(q)=\sum_{i<j}\Gamma_i\Gamma_jG_\varepsilon(q_i-q_j),$$
where $G_\varepsilon$ is from [[def-mollified-biot-savart-vortex-kernel]]. This is a separable canonical Hamiltonian on $Q_{cf}$; its local leapfrog map is the partial composition [[def-leapfrog-step-map]] restricted as in [[def-local-leapfrog-domain-on-an-open-configuration-set]]. It is a distinct second-order canonical comparison model, not the first-order Biot-Savart vortex system of [[def-mean-field-and-weighted-vortex-particle-systems]].
