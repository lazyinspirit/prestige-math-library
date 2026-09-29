---
page: "zariski-tangent-spaces-regular-points-smoothness-and-bertini"
title: "Zariski Tangent Spaces, Regular Points, Smoothness, and Bertini"
status: draft
items:
  - def-zariski-cotangent-space-point
  - def-zariski-tangent-space-point
  - lem-cotangent-localization-at-rational-point
  - lem-tangent-vectors-as-dual-number-points
  - lem-tangent-points-over-square-zero-vector-extensions
  - def-jacobian-matrix-affine-algebraic-set
  - thm-zariski-tangent-space-jacobian-kernel
  - lem-tangent-space-functoriality-classical
  - lem-tangent-space-product
  - def-regular-local-ring-geometric-point
  - lem-local-dimension-reduced-variety-components
  - thm-embedding-dimension-at-least-local-dimension
  - def-singular-and-regular-loci-variety
  - thm-jacobian-criterion-affine-variety
  - cor-hypersurface-singular-locus-gradient
  - lem-regular-point-lies-on-one-component
  - thm-regular-locus-is-open-variety
  - lem-separating-hypersurface-chart-variety
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - cor-minimum-tangent-dimension-and-homogeneous-regularity
  - def-smooth-morphism-to-field-classical
  - thm-regular-equals-smooth-over-perfect-field
  - thm-regular-not-smooth-imperfect-field
  - def-tangent-cone-point
  - lem-tangent-cone-initial-ideal-presentation
  - lem-tangent-cone-linear-span-tangent-space
  - def-multiplicity-hypersurface-point
  - lem-hypersurface-smooth-iff-multiplicity-one
  - lem-smoothness-stable-under-product-classical
  - def-smooth-morphism-classical
  - lem-smooth-map-tangent-surjectivity-criterion
  - lem-smooth-hyperplane-slice-at-transverse-point
  - lem-smooth-curve-realizing-a-tangent-direction
  - lem-dominant-map-generic-differential-surjectivity-char-zero
  - cor-generic-smoothness-on-source-characteristic-zero
  - lem-critical-locus-image-dimension-bound
  - thm-generic-smoothness-characteristic-zero
  - lem-zero-scheme-of-line-bundle-section
  - def-linear-system-base-locus
  - lem-linear-system-incidence-is-smooth
  - thm-bertini-smooth-hyperplane-section
  - cor-smooth-projective-complete-intersections-general
  - rem-jacobian-presentation-independence
examples: []
---

The page builds the tangent space from the cotangent space. For a point of a
finite-type $k$-scheme the intrinsic cotangent space is
$\mathfrak m_x/\mathfrak m_x^2$ over the residue field $\kappa(x)$, and the
Zariski tangent space is its dual; at a $k$-rational point this is the
classical $\mathfrak m_P/\mathfrak m_P^2$, and the tangent vectors are exactly
the dual-number points $k[\epsilon]/(\epsilon^2)\to X$ lifting the point,
equivalently the $k$-derivations $\mathcal O_{X,x}\to k$. The Jacobian matrix
of a finite generating list of the defining ideal computes the tangent space at
a rational point, $T_aX\cong\ker J(a)$, independently of the chosen finite
generating list, and the calculus continues with tangent points over
square-zero vector extensions, functoriality for morphisms, with open
immersions inducing isomorphisms, and the splitting of the tangent space of a
product. No identification at a nonrational point is asserted.

A Noetherian local ring is regular when its embedding dimension equals its
dimension, and the embedding dimension is always at least the local dimension.
For a reduced finite-type scheme over an algebraically closed field a closed
point is regular exactly when $\dim_kT_xX=\dim_xX$, so regularity is readable
from tangent dimensions. The Jacobian criterion turns this into an algebraic
test: over a perfect field $A_{\mathfrak m}$ is regular if and only if
$\operatorname{rank}J(\mathfrak m)=n-\dim A_{\mathfrak m}$, and at a rational
point the same rank formula holds over an arbitrary field. The consequences
assembled here are that the singular locus of a squarefree hypersurface is the
common zero locus of its partial derivatives, that a regular point lies on
exactly one irreducible component, that the regular locus is open, and that for
a nonempty reduced finite-type scheme over a perfect field the regular locus is
nonempty and dense in every irreducible component. For an irreducible classical
variety the minimum of $\dim_kT_xX$ over the closed points equals $\dim X$, so
regularity is equivalent to constancy of the tangent-dimension function; a
transitive group action likewise forces regularity.

Smoothness of a finite-type $k$-scheme is the locally standard-smooth
presentation, local on source and target. Over a perfect field it coincides
with regularity, while over imperfect fields the two notions separate: for $k$
of characteristic $p$ and $a\notin k^p$ the scheme
$\operatorname{Spec}k[t]/(t^p-a)$ is regular but not smooth. Smoothness is
stable under products and under base change of the standard-smooth
presentation, the submersion criterion identifies smoothness at a point of a
morphism between smooth classical varieties with surjectivity of the
differential there, a hyperplane slice transverse to the tangent space is
smooth, and every tangent direction is realized by a reduced curve that is
smooth at the point and has the prescribed tangent line. In characteristic zero
a dominant morphism of smooth classical varieties restricts to a smooth
morphism over a nonempty open subset of the source: the locus where the
differential has rank at most $r$ has image of dimension at most $r$, so away
from these images the differential is everywhere surjective.

The tangent cone at a rational point is the spectrum of the associated graded
ring of the local ring, presented by the initial ideal with respect to a
regular system of parameters, and its $k$-linear span is the tangent space, in
the scheme-theoretic sense that no proper linear closed subscheme of the
tangent affine space contains the cone; the full, possibly nonreduced, cone is
retained, while its reduction can span less. Multiplicity enters through the
lowest nonvanishing homogeneous part of a hypersurface equation: a hypersurface
point is smooth exactly at multiplicity one, over any field. The page closes
with the Bertini package: the zero scheme of a section of a line bundle, base
loci of linear systems, smoothness of the incidence correspondence over a
smooth base, and the theorem that in characteristic zero the general member of
a nonzero linear system is smooth on the complement of its base locus, the
hyperplane case being recovered for an embedding. The corollary specialises to
complete intersections: for a nonempty smooth projective variety of pure
dimension $d$ over an algebraically closed field of characteristic zero and
prescribed positive degrees, a general tuple of hypersurfaces meets in a
nonempty smooth scheme of pure dimension $d-r$ when $r\le d$, and in the empty
scheme when $r>d$. A closing remark separates the intrinsic conventions of the
page from those that depend on a chosen presentation. The Axiom of Choice is
declared and inherited only through the cited suppliers; the Jacobian,
differential and linear-algebra computations are choice-free.
