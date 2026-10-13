---
page: qm-massive-particle-kinematics-examples
title: "Qm Massive Particle Kinematics — Examples"
status: published
library: physics
items: []
examples:
  - ex-nrqm-kinematics-gaussian-position-momentum-packet
  - ex-nrqm-kinematics-plane-wave-generalized-eigenfunction
  - cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators
  - texp-nrqm-kinematics-dirichlet-momentum-warning
  - rem-nrqm-kinematics-examples-scope-limits
requires:
  - qm-massive-particle-kinematics
  - the-heat-kernel-and-the-cauchy-problem
  - improper-and-parameter-dependent-multiple-integrals
  - qm-observables-and-born-probabilities
  - qm-math-composites
  - qm-math-intervals-and-contacts
  - qm-framework-and-quantities
---

The companion page to [[qm-massive-particle-kinematics]] collects exact
worked computations, one distributional construction, one counterexample and
one conditional warning. [[ex-nrqm-kinematics-gaussian-position-momentum-packet]]
computes the normalized three-dimensional Gaussian packet of the spin-zero
massive model, shows that its momentum representative is again a normalized
Gaussian with width $\sigma_{p}=\hbar/\sigma$, and evaluates the model's
position and momentum outcome densities, their variances and the product
$\hbar/2$ in that family. [[ex-nrqm-kinematics-plane-wave-generalized-eigenfunction]]
defines the conjugate-linear Schwartz functional $u_{k}$ associated with the
formal plane wave, proves the generalized eigenrelation
$u_{k}(P_{j}\varphi)=\hbar k_{j}u_{k}(\varphi)$, and proves that no $L^{2}$
class represents it, so the plane wave carries no state and no probability
density.
[[cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators]] refutes the
existence of bounded operators satisfying $AB-BA=i\hbar I$, showing that the
canonical commutation relations require unbounded operators on a core, as
used by [[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]].
[[texp-nrqm-kinematics-dirichlet-momentum-warning]] analyzes a hypothetical
confined-model extension and deduces that the formal interval momentum
$-i\hbar D$ on the Dirichlet domain is symmetric but not self-adjoint, that no
self-adjoint extension keeps the Dirichlet domain, and that the Dirichlet
functions are not momentum eigenfunctions of any such extension; the
framework's own momentum remains the full-line operator of
[[def-nrqm-kinematics-framework-massive-spin-s-model]]. None of the items is
an experiment; no counts, calibration, resolution, efficiency, background,
uncertainty or data comparison appears, and no measured value of any model
parameter is asserted.
