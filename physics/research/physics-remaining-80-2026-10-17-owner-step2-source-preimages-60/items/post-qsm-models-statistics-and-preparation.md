---
id: post-qsm-models-statistics-and-preparation
kind: postulate
title: "Quantum statistics and model equilibrium preparation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - lem-qsm-models-diagonal-occupation-trace
dependency_roles:
  lem-qsm-models-diagonal-occupation-trace: formulation-prerequisite
physical_scope: "Adoption of nonrelativistic Hilbert-space state and Born-probability language, a specified Hamiltonian and interaction, a chosen symmetric boson or antisymmetric fermion sector, and a canonical or grand-canonical Gibbs preparation only when its trace is positive and finite. This formulation asserts no spin-statistics theorem, thermalization dynamics, universal equilibrium, empirical observation, or applicability to a particular species."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, §§3.1 and 3.5–3.6"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lectures 22–25"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf"
---

## Postulate

For a declared nonrelativistic quantum model, adopt a complex Hilbert space, positive trace-one states, and Born probabilities for its specified measurements. Specify the one-particle modes, Hamiltonian and interactions. When the modeled particles are assigned bosonic or fermionic statistics, choose the symmetric or antisymmetric sector, respectively, as an independent physical assumption. This selection is not derived from the Fock construction or a nonrelativistic spin-statistics theorem.

For a canonical preparation at inverse temperature $\beta=(k_BT)^{-1}>0$, adopt $\rho=Z^{-1}e^{-\beta H}$ on the declared fixed-particle-number sector only when $0<Z=\operatorname{Tr}e^{-\beta H}<\infty$. For a grand-canonical preparation with chemical potential $\mu$, adopt $\rho=\Xi^{-1}e^{-\beta(H-\mu N)}$ only when the corresponding trace is finite and positive, as explicitly checked for the diagonal Fock model in [[lem-qsm-models-diagonal-occupation-trace]]. Fixed-number and grand-canonical preparations are distinct assumptions; in general the latter has independent mode occupations while conditioning on fixed total number couples them.

The assignments of $U=\operatorname{Tr}(\rho H)$, $S=-k_B\operatorname{Tr}(\rho\log\rho)$ and thermodynamic potentials are model definitions where their traces exist. An identification with measured macroscopic thermodynamic quantities requires a separate physical bridge. No thermalization mechanism, empirical value, or law for a particular material is postulated here.
