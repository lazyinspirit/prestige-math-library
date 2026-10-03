---
page: peter-weyl-theory-for-general-compact-groups-examples
title: "Peter Weyl Theory for General Compact Groups — Examples"
status: draft
requires: [peter-weyl-theory-for-general-compact-groups]
items: []
examples:
  - lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients
  - ex-peter-weyl-for-a-profinite-group
  - lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct
  - ex-peter-weyl-for-an-infinite-product-of-finite-groups
  - ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality
  - lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero
  - cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations
---

These examples test the scope of [[peter-weyl-theory-for-general-compact-groups]]
on compact groups that are not Lie groups and on a noncompact group where the
compact conclusion fails. For a profinite group every continuous
finite-dimensional unitary representation factors through a finite quotient:
the no-small-subgroups property of the unitary group turns an identity
neighbourhood into an open normal subgroup contained in the kernel, and the
coefficient space of such a representation is the pullback of the coefficient
space of a representation of a finite group. The unitary dual therefore
consists of the pullbacks of the irreducibles of the finite quotients, the
representative functions are exactly the locally constant functions, and the
Peter--Weyl basis is an orthonormal basis of $L^2$ without any countability
assumption on the group or its dual.

For an arbitrary product of finite discrete groups the same factorisation
holds with a finite subproduct in place of an abstract quotient, so the
irreducibles are precisely the pullbacks of the irreducibles of the finite
subproducts, the representative functions are the continuous functions
depending on finitely many coordinates, and point separation uses only
finitely many coordinates. The circle model identifies the general coefficient
basis with the integer characters, recovering the classical Fourier series
decomposition, Parseval's identity and $L^2$ inversion from the compact theory
without recomputing Pontryagin duality.

The counterexample marks the boundary of the theory: on the additive group of
real numbers the left regular representation has no nonzero irreducible
subrepresentation, because an irreducible representation of an abelian group is
one-dimensional and a one-dimensional subrepresentation would be spanned by a
unit vector whose modulus is invariant under all translations. Its squared
modulus is a translation-invariant $L^1$ class and hence vanishes almost
everywhere, forcing the vector to be zero. Thus this regular representation
has no discrete irreducible decomposition; the Fourier--Plancherel transform
realizes it as a direct integral of one-dimensional characters.
