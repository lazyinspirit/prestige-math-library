---
page: analytic-hypersurfaces-and-local-parametrisation
title: "Analytic Hypersurfaces and Local Parametrisation"
status: draft
requires: [holomorphic-inverse-and-weierstrass-preparation, modules-and-module-homomorphisms, noetherian-rings-and-hilbert-basis, localisation-of-modules-and-support, krull-dimension-and-height-theorems, the-dbar-complex-and-integral-solutions, fundamental-solutions-newtonian-potentials-and-green-functions]
items:
  - def-reduced-holomorphic-germ-for-hypersurface
  - lem-square-free-reduction-of-holomorphic-germ
  - lem-reduced-prepared-polynomial-has-nonzero-discriminant
  - thm-weierstrass-finite-projection-hypersurface-germ
  - def-discriminant-and-branch-locus-weierstrass-hypersurface
  - lem-reduced-prepared-hypersurface-remains-reduced-near-germ
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-irreducible-hypersurface-germ
  - def-regular-singular-point-analytic-hypersurface
  - lem-irreducible-holomorphic-germ-is-prime
  - thm-local-irreducible-decomposition-hypersurface-germ
  - lem-dimension-of-holomorphic-germ-ring
  - def-local-dimension-hypersurface-germ
  - thm-hypersurface-germs-have-pure-codimension-one
  - thm-singular-locus-reduced-hypersurface
  - lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve
  - thm-puiseux-parametrisation-plane-curve-germ
  - def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ
  - lem-total-fractions-split-over-hypersurface-branches
  - cor-normalisation-plane-curve-germ
examples: []
---

A complex-analytic hypersurface germ is the zero germ of one nonzero nonunit
holomorphic equation. This page develops that single local object from the
Weierstrass preparation and division machinery of
[[holomorphic-inverse-and-weierstrass-preparation]], the module and
Noetherian interfaces of [[modules-and-module-homomorphisms]] and
[[noetherian-rings-and-hilbert-basis]], and the dimension theory of
[[krull-dimension-and-height-theorems]]. A germ is first reduced by removing
repeated irreducible factors: the square-free reduction is unique up to a
unit, has the same zero germ, and makes the defining germ of a hypersurface
germ well defined up to a unit, so the equation can be replaced without
changing the geometry.

The main local tool is prepared coordinates and finite projection. After an
invertible complex-linear change of coordinates the equation is a unit times a
Weierstrass polynomial in the last variable, and the zero set becomes a finite
branched cover of a polydisc in $\mathbb C^{n-1}$: the projection is proper and
surjective, its fibres are finite, and it is a covering with as many sheets as
the degree of the polynomial away from the discriminant divisor. The
discriminant is a nonzero base germ for a reduced prepared polynomial and its
zero set is the branch locus of the chosen projection; a point of the zero set
lying over the complement of the branch locus has a nonzero last partial
derivative. A branch value may lie under a regular point, so the branch set of a
selected projection can strictly contain the image of the singular locus.
Nearby reducedness and the principal vanishing ideal
$I_q(X)=(W_q)$ then hold at every point of the prepared zero set, which makes a
fixed prepared equation a valid local reduced equation everywhere nearby.

Regular and singular points are defined through the differential of a local
reduced equation, and the choice of reduced equation does not affect the
designation. The local dimension of a hypersurface germ is the Krull dimension
of $\mathcal O_{\mathbb C^n,p}/(f_{\mathrm{red}})$, independent of the reduced
equation; the prepared quotient is module-finite and integral over the base
germ ring, so the principal ideal theorem gives pure local dimension $n-1$ for
every nonempty reduced hypersurface germ, with no claim about arbitrary
analytic ideals. These dimension statements, and the singular-locus dimension
bound below, are the only places on this page where the Axiom of Choice is
assumed; the preparation, discriminant, factorisation and parametrisation
arguments are choice-free.

The page then treats the singular locus and the branch structure. The singular
locus of a reduced hypersurface germ is a closed analytic subset, it lies over
the branch locus of any prepared projection, a singular germ has local
dimension at most $n-2$ whenever it is nonempty, and it is nowhere dense; for
$n=1$ it is empty. The unique factorisation of the germ ring gives a finite
irreducible decomposition with pairwise nonassociate prime factors, and a
total-fractions splitting separates the branches. In dimension one the theory
culminates in the Puiseux parametrisation theorem: every irreducible plane
curve germ is, after an invertible linear change of coordinates, the image of an
injective holomorphic map $t\mapsto(t^m,h(t))$ with $h(t)=\sum_{k>m}a_kt^k$
convergent, unique up to the declared invertible reparametrisation, and Puiseux
parametrisations normalise reduced plane curve germs.

The treatment follows Lebl, *Tasty Bits of Several Complex Variables*, Chapter
6 §§6.1–6.7, and Demailly, *Complex Analytic and Differential Geometry*,
Chapter II §§2, 4 and 6. General analytic-set singular-locus and
parametrisation theorems, coherence, Segre and CR applications, Remmert proper
mapping, global dimension theory and resolution of singularities are outside
the scope of this page and are not extrapolated from the hypersurface case; the
companion page collects the explicit computations, the branch-locus
counterexample and a warning about arbitrary analytic sets.
