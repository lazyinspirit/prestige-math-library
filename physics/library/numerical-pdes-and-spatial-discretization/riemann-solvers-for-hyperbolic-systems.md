---
page: riemann-solvers-for-hyperbolic-systems
title: "Riemann solvers for hyperbolic systems"
status: published
items:
  - def-hyperbolic-system-and-characteristic-families
  - def-rankine-hugoniot-and-lax-shocks
  - lem-smooth-simple-characteristic-eigenpairs
  - def-ideal-gas-euler-state-and-pressure
  - def-roe-linearization-and-flux
  - def-hll-two-wave-flux
  - def-scalar-convex-entropy-admissibility
  - def-local-rarefaction-curve
  - lem-rankine-hugoniot-jump-is-a-weak-solution
  - lem-local-characteristic-shock-curve
  - thm-one-dimensional-ideal-gas-euler-eigenstructure
  - def-euler-star-pressure-response
  - thm-roe-flux-is-consistent-and-conservative
  - thm-hll-flux-is-consistent-and-conservative
  - lem-euler-acoustic-wave-pressure-response
  - lem-local-rarefaction-fan
  - lem-linearly-degenerate-characteristic-contact
  - thm-euler-star-pressure-root-and-vacuum-criterion
  - def-mixed-characteristic-wave-curve
  - alg-safeguarded-euler-star-pressure-solver
  - lem-mixed-wave-curves-are-c1
  - lem-euler-pressure-solver-bracket-and-termination
  - thm-local-small-data-riemann-solver
  - def-godunov-flux-from-a-local-riemann-solver
  - thm-godunov-flux-is-consistent-and-conservative
examples: []
---

This page develops the local theory and the corresponding first-order fluxes
for one-dimensional strictly hyperbolic conservation systems. It fixes an open
admissible state domain and a $C^3$ flux, then defines simple characteristic
families, Rankine–Hugoniot jumps, strict Lax shocks, rarefaction curves, and
contacts. The local theorem is restricted to a neighborhood of a base state
where every field is genuinely nonlinear or linearly degenerate. It constructs
the shock and rarefaction curves, matches their tangents, applies the implicit
function theorem to the ordered wave-composition map, and gives a positive
data radius and strength bound. It makes no arbitrary large-data claim.

The Godunov flux is defined from the local Riemann profile. The Roe flux is
defined from a real diagonalizable matrix satisfying the exact flux-jump
identity; that algebraic identity supplies consistency and conservation but is
not an entropy condition. The HLL flux uses explicitly supplied lower and
upper wave speeds. Its two-wave balance proves the displayed middle state and
flux, but no data-dependent wave-speed bound is inferred.

For the one-dimensional ideal-gas Euler system the page defines pressure on
$\rho>0$ and positive internal energy, derives all three eigenpairs and their
nonlinearity types, and proves the scalar star-pressure residual is strictly
increasing. The no-vacuum case has a unique positive root with an explicit
finite upper bracket; data at or above the threshold return a vacuum status.
The safeguarded finite-budget Newton–bisection procedure preserves that bracket
and distinguishes an exact zero, a pressure enclosure, vacuum, and exhausted
budget. The declared published prerequisite [[nonlinear-equations-and-newton-methods]]
supplies only the finite-budget Newton interface used for the central-quarter
proposal; the pressure root and vacuum facts are proved here.
