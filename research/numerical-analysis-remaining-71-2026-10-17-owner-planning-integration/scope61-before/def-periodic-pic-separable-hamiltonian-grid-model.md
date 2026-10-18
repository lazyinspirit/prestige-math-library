---
id: def-periodic-pic-separable-hamiltonian-grid-model
kind: definition
title: Matched variational Hamiltonian branch for periodic PIC
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - lem-periodic-pic-smooth-assignment-weights
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
  - thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint
  - thm-periodic-pic-charge-conservation-and-neutralized-source
justified_by: []
axiom_use: No choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Section 5-5
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration, §3.5
      url: https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf
---

## Definition

Use the smooth assignment branch of [[def-periodic-pic-shape-assignment-and-gather]], real particle charges $q_p$, positive masses $m_p$, and its neutralized grid density $\rho(X)$. Let $\phi(X)=A_h^\dagger\rho(X)$ denote the unique mean-zero solution from [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]. Define the grid potential energy
$$ U_h(X)=\frac12\langle \rho(X),A_h^\dagger\rho(X)\rangle_h =\frac12\langle\rho(X),\phi(X)\rangle_h $$ and the finite-dimensional separable Hamiltonian $$ H_h(X,p)=\frac12p^TM^{-1}p+U_h(X),\qquad M=\operatorname{diag}(m_1I_d,\ldots,m_PI_d). $$
The corresponding canonical ODE is $\dot X=M^{-1}p$, $\dot p=-\nabla_XU_h(X)$. Its force is the variational force obtained by differentiating the deposited shape in $U_h$; this definition does not identify that force with ordinary field interpolation $G_XE$.

