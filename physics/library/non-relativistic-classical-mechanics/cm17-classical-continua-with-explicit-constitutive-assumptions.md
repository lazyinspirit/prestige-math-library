---
page: cm17-classical-continua-with-explicit-constitutive-assumptions
title: "Classical continua with explicit constitutive assumptions"
status: draft
library: physics
items:
  - def-cm17-continuum-body-and-units
  - post-cm17-continuum-kinematic-model
  - def-cm17-density-and-mass
  - post-cm17-mass-balance
  - pthm-cm17-transport-and-material-derivative
  - pthm-cm17-continuity-equation
  - def-cm17-traction-and-stress
  - post-cm17-contact-force-model
  - post-cm17-momentum-balance
  - pthm-cm17-stress-matrix-and-symmetry
  - pthm-cm17-momentum-equation
  - post-cm17-linear-elastic-constitutive
  - pthm-cm17-linear-elastic-equation-of-motion
  - pthm-cm17-elastic-plane-wave-speeds
  - post-cm17-fluid-constitutive
  - pthm-cm17-incompressible-periodic-local-evolution
  - pthm-cm17-chain-limit-of-the-string-model
  - pthm-cm17-string-wave-solutions
  - rem-cm17-boundary-regularity-and-scope
examples: []
requires:
  - cm-math-fluid
  - cm07-stationary-action-and-lagrangian-dynamics
  - cm-math-geometry
  - cm01-framework-quantities-and-geometry
  - cm-math-continuum
---

This page develops classical continua as explicit models: every constitutive
relation, balance principle and boundary idealization is an adopted assumption
with a stated regime, and every dynamical conclusion is a conditional
deduction from them. [[def-cm17-continuum-body-and-units]] fixes the reading
of the framework in one inertial frame — material regions, reference chart
domains, time windows, and the dimensions of density, velocity, acceleration,
traction, stress, displacement, elastic, viscous and pressure fields, with scalar/vector/tensor and reference-label rules under Galilean frame changes —
[[post-cm17-continuum-kinematic-model]] adopts the smooth kinematic branch
(a $C^2$ family of orientation-preserving configurations whose labels follow
worldlines, with the continuum idealization and the frame-covariance
requirement), and [[def-cm17-density-and-mass]] and
[[post-cm17-mass-balance]] fix the mass of a material subregion and adopt its
constancy. The purely mathematical transport machinery of the supplier page
[[cm-math-continuum]] is then read in model terms by
[[pthm-cm17-transport-and-material-derivative]] (the transport identity and
the material derivative along label worldlines) and localized by
[[pthm-cm17-continuity-equation]] into the continuity equation, its material
form $D_t\rho=-\rho\operatorname{div}u$, the constant-product law
$\rho\bigl(t,\chi(t,X)\bigr)J(t,X)=\text{const}$ along a label and the
incompressibility equivalence.

Contact forces are defined by [[def-cm17-traction-and-stress]] and adopted by
[[post-cm17-contact-force-model]] (continuous body forces and Cauchy
tractions), and the balance principles are adopted in force form by
[[post-cm17-momentum-balance]]. From them
[[pthm-cm17-stress-matrix-and-symmetry]] derives the existence, uniqueness,
reversed-normal identity and symmetry of the stress matrix by Cauchy's
tetrahedron and the couple-free torque balance, and
[[pthm-cm17-momentum-equation]] localizes the balances into the model's
momentum equation $\rho D_tu=\rho b+\operatorname{div}\sigma$. Two
constitutive branches are then carried through complete deductions: the
small-strain isotropic linear elastic branch
([[post-cm17-linear-elastic-constitutive]],
[[pthm-cm17-linear-elastic-equation-of-motion]],
[[pthm-cm17-elastic-plane-wave-speeds]]) with the displacement equation
$\rho_0\partial_t^2\xi=\rho_0b+\mu_s\Delta\xi+(\lambda+\mu_s)\nabla\operatorname{div}\xi$
and its longitudinal and transverse speeds, and the fluid branch
([[post-cm17-fluid-constitutive]]) with the chain limit
[[pthm-cm17-chain-limit-of-the-string-model]] and the string solutions
[[pthm-cm17-string-wave-solutions]] on the one-dimensional side and the local
periodic evolution theorem
[[pthm-cm17-incompressible-periodic-local-evolution]] on the
three-dimensional side, using separately adopted incompressible inviscid or Newtonian stress, explicit length/velocity/time scales and conversion of its unit-torus lifespan to physical time. [[rem-cm17-boundary-regularity-and-scope]] closes the
page by recording the ideal boundary data, the regularity limits that exclude
shocks and interfaces from the classical identities, the constitutive
validity regimes, the deliberately open specialist scopes and the
model-versus-nature status of every result.
