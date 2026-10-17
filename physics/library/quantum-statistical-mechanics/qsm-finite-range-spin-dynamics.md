---
page: qsm-finite-range-spin-dynamics
title: Uniformly bounded finite-range quantum spin interaction
status: draft
library: physics
items:
  - def-qsm-bounded-finite-range-interaction
  - lem-qsm-finite-range-commutator-path-bound
  - lem-qsm-boundary-dynamics-cauchy
  - thm-qsm-finite-range-spin-dynamics
  - lem-qsm-local-generator-domain
examples: []
requires:
  - qsm-quasilocal-states
---

This page fixes a finite-dimensional spin algebra on $\mathbb Z^d$, a uniformly bounded finite-range interaction, and its free-boundary finite-volume dynamics. A volume-independent commutator path bound gives a boundary-tail estimate; the limit is a strongly continuous group of automorphisms on the norm-completed quasi-local algebra, and every local observable lies in the closed generator domain.

The thermodynamic dynamics theorem is a conditional mathematical deduction: it assumes the finite-matrix C*-identity stated by [[lem-qsm-finite-matrix-cstar-and-state-duality]] and used by the quasi-local completion. That draft supplier is now placed on its A page and has an owner-recorded Step-1 ready disposition; authoring readiness is not mathematical acceptance, so the page does not claim the assumption established. The result concerns bounded finite-dimensional spin systems with the stated finite-range norm bound; it does not construct an infinite-volume Hamiltonian operator or extend to unbounded onsite or continuum models.
