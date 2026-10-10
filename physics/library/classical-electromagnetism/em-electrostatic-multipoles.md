---
page: em-electrostatic-multipoles
title: "Electrostatic multipoles"
status: draft
items: [def-em-electric-moments, pthm-em-moment-origin-change,
        pthm-em-electric-dipole-expansion, pthm-em-electric-dipole-torque,
        pthm-em-electric-general-multipoles]
---

**Objective.** This page develops the source moments of a prescribed static
charge distribution in one laboratory frame, their exact transformation under a
change of reference point, the exterior multipole expansion of the
electrostatic potential of a compactly supported density, and the external force
and torque on a small prescribed distribution in a slowly varying external
field.

Source moments are defined for three branches: an absolutely continuous
compactly supported $L^1$ density, a general locally integrable density with a
finite absolute weighted moment, and a finite system of stationary point
charges ([[def-em-electric-moments]]). The definition fixes the total charge,
the dipole moment, the Cartesian moments and the symmetric traceless quadrupole
about the chart origin, with their units and their absolute convergence
established clause by clause. The origin-shift theorem then computes every
moment about an arbitrary reference point: the total charge is invariant, the
dipole transforms as $p-Qb$, the Cartesian moments obey the finite subset
expansion, and the traceless quadrupole is reference-point independent exactly
for a neutral, non-dipolar distribution ([[pthm-em-moment-origin-change]]).

For a compactly supported $L^1$ density the exterior potential splits into its
monopole and dipole terms plus an explicit remainder bounded by
$16a^2\|\rho\|_1/(4\pi\varepsilon_0|x|^3)$ for $|x|\ge2a$
([[pthm-em-electric-dipole-expansion]]); the all-order spherical expansion
refines this with spherical moments, a geometric tail bound, termwise
differentiation on exterior compact sets, and the degree-two
traceless-quadrupole term $n_iQ_{ij}n_j/(8\pi\varepsilon_0r^3)$, together with a
separate source-free ball branch for $L^2$ angular data
([[pthm-em-electric-general-multipoles]]). Finally, under an explicitly adopted
external force model for broad charge data and Lipschitz external fields, the
total external force and torque are expanded about the ideal-dipole values with
explicit bounds, the reference-point shift is exact, and the exact Lorentz
coupling is instantiated only under its own hypotheses
([[pthm-em-electric-dipole-torque]]).

Every statement is a conditional identity or bound for prescribed sources in
the fixed-time reading of the static regime, with the stated regularity,
support and model assumptions; worked configurations are collected on the
companion examples page.
