---
page: elliptic-functions-and-complex-tori
title: "Elliptic Functions and Complex Tori"
status: published
items: [def-complex-lattice-and-complex-torus,
        thm-complex-torus-quotient-is-well-defined,
        def-weierstrass-elliptic-p-function,
        def-elliptic-function-for-a-lattice,
        def-weierstrass-zeta-and-sigma-functions,
        thm-weierstrass-p-normal-convergence-and-periodicity,
        thm-elliptic-function-divisor-laws,
        thm-weierstrass-zeta-sigma-quasi-periodicity,
        thm-weierstrass-p-differential-equation,
        lem-weierstrass-p-degree-two-and-half-periods,
        thm-weierstrass-p-addition-formula,
        thm-field-of-elliptic-functions-is-generated-by-p-and-p-prime,
        thm-weierstrass-lattice-discriminant-is-nonzero,
        thm-complex-torus-weierstrass-cubic-isomorphism,
        thm-elliptic-cubic-chord-tangent-group-law]
examples: []
---

This page develops the classical theory of doubly periodic meromorphic
functions on a full complex lattice, from the quotient construction through the
group law on the associated cubic curve. A full lattice
$\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ is fixed with an oriented basis
$\operatorname{Im}(\omega_2/\omega_1)>0$, and a change of oriented basis is
recorded as an element of $\mathrm{SL}_2(\mathbb Z)$. The quotient
$T_\Lambda=\mathbb C/\Lambda$ is then given its quotient topology, with the
class map a holomorphic covering and $T_\Lambda$ a compact Riemann surface, so
that periodic functions can be read as functions on a compact space.

The Weierstrass series enter through the finite-subset (enumeration-free)
definition of $\wp$, whose corrected summands are shown to converge absolutely
and normally off the lattice; the same block proves that $\wp$ is even,
$\Lambda$-periodic, holomorphic on $\mathbb C\setminus\Lambda$ with double
poles exactly at the lattice points, and identifies the normally convergent
series for $\wp'$. The companion functions $\zeta$ and $\sigma$ are then
introduced, and their quasi-periodicity laws — including the Legendre relation
$\eta_1\omega_2-\eta_2\omega_1=2\pi i$ for the full-period quasi-periods
$\eta_j=2\zeta(\omega_j/2)$ — are proved from the series and the residue
calculus on a fundamental parallelogram. The same parallelogram calculus gives
the divisor laws: residues of an elliptic function sum to zero, the number of
zeros equals the number of poles counted with multiplicity, and a pole-free
elliptic function is constant.

The analytic core of the page is the triple (cubic relation, degree, addition
law). The Laurent expansions of $\wp$ and $\wp'$ at the origin yield the
differential equation $(\wp')^2=4\wp^3-g_2\wp-g_3$ with the invariants
$g_2=60G_4$ and $g_3=140G_6$. The torus form of $\wp$ is shown to have degree
two, to be ramified exactly at the class of $0$ and the three nonzero
half-period classes, and to have the three distinct finite branch values
$e_1,e_2,e_3$; the zero divisor of $\wp'$ is described completely. From the
Laurent expansions one also derives the addition formula for $\wp$, and the
even/odd decomposition with respect to the involution $z\mapsto-z$ shows that
every $\Lambda$-elliptic function is a rational combination of $\wp$ and
$\wp'$: the field of elliptic functions is $\mathbb C(\wp,\wp')$, with
$\wp'$ algebraic of degree two over $\mathbb C(\wp)$.

The final block passes from analysis to the plane cubic. The half-period values
are the three distinct roots of $4x^3-g_2x-g_3$, the discriminant
$\Delta=g_2^3-27g_3^2$ is nonzero, and the projective cubic
$Y^2Z=4X^3-g_2XZ^2-g_3Z^3$ is nonsingular. Mapping $[z]$ to
$[\wp(z):\wp'(z):1]$, with the class of $0$ sent to the point at infinity,
identifies $T_\Lambda$ biholomorphically with that cubic; transporting the
torus addition through this identification makes the chord–tangent construction
a theorem: the three intersection points of any projective line with the cubic,
with multiplicities, sum to the identity, so secants and tangents compute
$P\oplus Q$, vertical lines give $P\oplus(-P)=O$, and the line at infinity cuts
out $3O$.
