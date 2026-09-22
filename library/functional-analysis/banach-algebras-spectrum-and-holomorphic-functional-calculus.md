---
page: banach-algebras-spectrum-and-holomorphic-functional-calculus
title: Banach Algebras Spectrum and Holomorphic Functional Calculus
status: draft
items: [def-unital-banach-algebra, def-invertible-element-and-general-linear-group-of-a-banach-algebra, lem-neumann-series, thm-invertible-group-is-open-and-inversion-is-continuous, def-spectrum-and-resolvent-set-in-a-banach-algebra, lem-resolvent-identity, thm-resolvent-is-banach-valued-holomorphic, thm-spectrum-is-nonempty-compact-and-norm-bounded, def-spectral-radius, thm-polynomial-spectral-mapping, lem-submultiplicative-root-limit, thm-spectral-radius-formula, lem-canonical-banach-complexification-of-a-real-banach-space, def-complexification-and-spectrum-of-a-real-operator, thm-gelfand-mazur, def-banach-algebra-valued-contour-integral, lem-contour-integral-commutes-with-bounded-linear-maps, lem-banach-valued-cauchy-integral-vanishes, lem-admissible-cycle-around-a-compact-plane-set, def-holomorphic-functional-calculus, lem-holomorphic-functional-calculus-is-contour-independent, thm-holomorphic-functional-calculus-homomorphism, thm-holomorphic-spectral-mapping, def-riesz-spectral-projection, thm-riesz-spectral-projection-properties, def-calkin-algebra, cor-atkinson-in-calkin-algebra-language, def-point-continuous-and-residual-spectrum, def-approximate-point-and-compression-spectrum, lem-relations-among-the-five-spectral-parts, thm-boundary-of-spectrum-lies-in-approximate-point-spectrum]
examples: []
---

This page develops the spectral theory of a single element of a unital complex
Banach algebra, from the Neumann series to the holomorphic functional calculus.
The opening definitions fix the conventions — a nonzero associative algebra with
a complete submultiplicative norm and a unit of norm one, invertibility by
two-sided inverses, and the spectrum as the set of scalars at which the shifted
element fails to be invertible in the stated algebra. The Neumann series makes
the open unit ball around each invertible element consist of invertible elements
and gives the quantitative bound $\|b^{-1}\| \le
\|a^{-1}\|/(1-\|a^{-1}\|\,\|b-a\|)$, from which openness of the general linear
group and continuity of inversion follow.

The spectrum itself is then shown to be a nonempty compact subset of the disc of
radius $\|a\|$: boundedness and closedness come from the Neumann expansion and
from openness of the invertibles, while nonemptiness is proved by applying
bounded functionals to the resolvent, invoking Liouville's theorem for the
scalar case and separating points in the dual. The spectral radius is defined as
the maximal modulus on this compact nonempty set, and the spectral radius
formula $r(a) = \lim_n\|a^n\|^{1/n} = \inf_n\|a^n\|^{1/n}$ is proved by
resolving the resolvent into a power series on each disc properly inside the
disc of radius $1/r(a)$ and applying Cauchy's coefficient estimate together
with the dual unit-ball formula for the norm. Polynomial spectral mapping
$\sigma(p(a)) = p(\sigma(a))$ is proved separately, and the real-operator
spectrum is defined through the canonical rotation-supremum complexification,
with the bounded comparison between compatible models recorded so that the
definition is model-independent.

The second half builds the holomorphic functional calculus. Banach-algebra-valued
contour integrals are constructed from tagged Riemann sums and identified with
the Bochner integral; the vector-valued version of the homology form of
Cauchy's theorem is proved by scalarisation and dual separation. A finite
polygonal cycle with index one on a compact set and zero outside a prescribed
open neighbourhood is constructed from a grid, together with a nested pair with
separated traces. These are the cycles along which the Dunford integral
$f(a) = \frac1{2\pi i}\int_\Gamma f(z)R(z,a)\,dz$ is defined; contour and germ
independence are proved before the notation is used, and the calculus is shown
to be a unital algebra homomorphism that reproduces polynomials and reciprocals
of nonvanishing functions, to satisfy the holomorphic spectral mapping theorem
$\sigma(f(a)) = f(\sigma(a))$ and the composition law $g(f(a)) = (g\circ f)(a)$,
and to produce Riesz projections for clopen spectral subsets, with the
invariant splitting $X = \operatorname{ran}(P_E)\oplus\ker(P_E)$ and the
restriction spectra $E$ and $\sigma(T)\setminus E$ on the corresponding
nonzero summands; an empty spectral part gives the zero summand, to which the
page's nonzero-algebra convention assigns no spectrum.

The page closes with the Calkin algebra $\mathcal B(X)/\mathcal K(X)$ and
Atkinson's theorem in quotient language, and with the five spectral parts: the
disjoint point, continuous and residual spectra, the approximate point and
compression spectra, the identity
$\sigma_r=\sigma_{cp}\setminus\sigma_p$, the covering relation
$\sigma = \sigma_{ap}\cup\sigma_{cp}$
under Dependent Choice, and the theorem that the boundary of the spectrum lies
in the approximate point spectrum. Full choice strength is stated wherever it is
used: the nonemptiness of the spectrum, the spectral radius formula and the
calculus spend the Axiom of Choice through Hahn–Banach separation and compact
spectrum nonemptiness, the quotient completeness of the Calkin algebra uses
Countable Choice, and the bounded-inverse and approximate-pointer arguments use
Dependent Choice and Countable Choice respectively.
