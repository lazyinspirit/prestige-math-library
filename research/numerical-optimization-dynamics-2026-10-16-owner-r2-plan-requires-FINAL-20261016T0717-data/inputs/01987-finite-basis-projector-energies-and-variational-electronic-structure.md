---
page: finite-basis-projector-energies-and-variational-electronic-structure
title: Finite basis projector energies and variational electronic structure
status: draft
items: [def-rank-r-orthogonal-projector-domain,
        def-finite-temperature-density-matrix-free-energy,
        lem-complex-hermitian-eigenvalues-lipschitz,
        thm-nested-finite-basis-infimum-monotonicity,
        lem-hermitian-idempotent-trace-equals-rank,
        def-finite-basis-projector-energy-model,
        lem-finite-temperature-density-domain-compact,
        lem-finite-temperature-entropy-continuous-at-endpoints,
        prop-interior-entropy-trace-derivative,
        lem-rank-r-projector-grassmann-chart-and-tangent,
        lem-finite-projector-domain-compact,
        prop-finite-projector-energy-reality-and-gradient,
        thm-finite-temperature-free-energy-attains-minimum,
        lem-finite-temperature-minimizer-is-interior,
        lem-complex-projector-tangent-commutator-curves,
        thm-finite-projector-energy-attains-minimum,
        thm-finite-temperature-fermi-dirac-stationarity,
        thm-finite-projector-commutator-stationarity,
        thm-positive-tangent-hessian-implies-strict-projector-minimum]
examples: []
---

Finite-basis electronic-structure models can be formulated as optimization of a
real energy over rank-$r$ Hermitian projectors. This page states the assumptions
on the overlap matrix, one-body matrix, self-adjoint interaction map, and chosen
$C^2$ exchange-correlation functional. Compactness gives a global finite-model
minimizer; first variation gives the commutator stationarity condition; positive
curvature in a local Grassmann chart is a sufficient condition for a strict
local minimum modulo orbital rotations. Commutation alone does not identify a
minimum or the lowest $r$ eigenvalues.

The finite-temperature density domain $0\preceq D\preceq I$, $\operatorname{tr}D=r$
is compact, and the endpoint-extended entropy is continuous. Interior
stationarity gives Fermi–Dirac occupations. For nested trial spaces, minima of
one common restricted energy decrease to the infimum over their union; a
continuum limit additionally needs an energy-recovery property. These statements
are finite-model results and do not assert exact physical functionals, unique
self-consistent densities, or continuum existence.

