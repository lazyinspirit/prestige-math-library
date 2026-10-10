---
page: em-boundary-and-spectral-prerequisites
title: Em Boundary And Spectral Prerequisites
status: draft
items: [lem-three-dimensional-radial-carleman-integer-weight, thm-bounded-potential-weak-unique-continuation-in-three-dimensions, thm-em-spherical-multipole-basis, lem-em-exterior-outgoing-scalar-uniqueness, lem-em-exterior-vector-helmholtz-mixed-boundary-existence, thm-em-elliptic-boundary-existence, thm-em-waveguide-spectral-completeness]
examples: []
---

This page supplies the mathematical boundary and spectral toolkit that the
electromagnetism track consumes: the Carleman and unique-continuation
prerequisites of the exterior uniqueness arguments, the exterior spherical
multipole basis and the ball boundary series, the exterior scalar and vector
Helmholtz problems with modal outgoing radiation, the smooth-domain elliptic
boundary-value conclusions with their piecewise-interface variant, and the PEC
cavity and rectangular spectral completeness statements. Everything here
carries `domain: mathematics`, depends only on mathematical suppliers, and is
used by consuming physical items as a stated mathematical premise; no physical
charge interpretation, field identification or empirical claim is made on this
page, and the physical reading of every quantity stays with the consuming
electromagnetism pages.

Under Countable Choice, the page opens with
[[lem-three-dimensional-radial-carleman-integer-weight]], a singular-weight
estimate in three dimensions: for every integer $s\ge1$ with
$\tau=s+1$ the inequality
$\|r^{-\tau}u\|_2\le\tfrac2s\|r^{-\tau+2}\Delta u\|_2$ holds for compactly
supported smooth functions away from the origin and extends to $H^2$ functions
supported in a fixed annulus. Under Countable Choice,
[[thm-bounded-potential-weak-unique-continuation-in-three-dimensions]] then
propagates the vanishing of an $H^2_{\mathrm{loc}}$ solution of
$\Delta\psi=V\psi$, with $V$ locally essentially bounded, from a nonempty open
set to the whole connected domain; no sign, smoothness or decay of the potential
is assumed.

[[thm-em-spherical-multipole-basis]] develops the exterior multipole expansion
of the Newtonian integral of a compactly supported $L^1$ density, including its
uniform tail bound, its termwise differentiability, and the ball boundary branch
in which the harmonic series is the unique finite-$L^2$-supremum harmonic
function with the given boundary data.
[[lem-em-exterior-outgoing-scalar-uniqueness]] and
[[lem-em-exterior-vector-helmholtz-mixed-boundary-existence]] then solve the
exterior Helmholtz problems, under their stated Axiom of Choice, positive
wavenumber and connected smooth-exterior hypotheses, in the modal outgoing
class of the sphere Dirichlet-to-Neumann map: the homogeneous scalar Dirichlet problem has only the zero
solution, and for every smooth tangential datum the vector problem with
$\operatorname{div}E=0$, prescribed tangential trace and the accompanying normal
closure relation has exactly one classical solution.

[[thm-em-elliptic-boundary-existence]] records the weak and classical
solvability, under its stated Axiom of Choice, of the Dirichlet, Neumann and transmission problems for a uniformly
positive smooth coefficient on a bounded smooth domain, with the exact trace,
the componentwise compatibility and normalisation of the Neumann problem, and
the explicit exclusion of edge, junction, reentrant and non-smooth regimes.
Finally, [[thm-em-waveguide-spectral-completeness]] states the spectral
completeness, under its stated Axiom of Choice, of the declared smooth PEC cavity class, with a complete
orthonormal $L^2$ eigenbasis of the curl form, $C^\infty$ eigenfields and the
modal second-order wave expansion with an abstract positive speed, together with
the rectangular reflection-parity energy class.

The companion page [[em-boundary-and-spectral-prerequisites-examples]] records
three explicit mathematical checks of hypotheses and conventions of these
results: the incompatible sphere conditions, the piecewise-constant coefficient
witness that blocks a global $C^1$ conclusion, and the same witness as a
hypothesis boundary for the smooth-domain spectral class.
