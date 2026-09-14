---
page: "leray-hirsch-thom-isomorphism-and-gysin-sequences"
title: "Leray–Hirsch, the Thom Isomorphism, and Gysin Sequences"
status: draft
items: ["lem-global-fiber-basis-trivializes-serre-monodromy", "lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity", "thm-leray-hirsch-module-isomorphism", "def-disk-sphere-and-thom-space-of-a-metric-vector-bundle", "prop-thom-space-of-zero-and-trivial-bundles", "lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring", "def-r-oriented-vector-bundle-and-orientation-local-system", "def-thom-class-by-fiberwise-normalization", "thm-thom-isomorphism-for-a-trivial-oriented-bundle", "lem-thom-isomorphisms-glue-over-two-trivializing-opens", "lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover", "lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence", "thm-thom-isomorphism-for-oriented-vector-bundles", "thm-naturality-and-uniqueness-of-thom-classes", "thm-external-product-and-whitney-sum-formulas-for-thom-classes", "def-thom-diagonal-and-zero-section-collapse", "def-thom-euler-class-of-an-oriented-vector-bundle", "def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section", "thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle", "prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition"]
examples: []
---

Leray–Hirsch starts with a hypothesis that cannot be weakened to constant fiber
ranks: named global cohomology classes must restrict to a basis on every
fiber.  Those restrictions trivialize monodromy.  The cup-product map is then
an isomorphism on the Serre associated graded, and a finite filtered argument
lifts that actual map without choosing complements or suppressing extension
data.  The resulting module isomorphism is natural for maps carrying the
chosen classes.

For a supplied bundle metric, disk and sphere bundles determine the Thom pair
and Thom space.  A finite, choice-free Mayer–Vietoris calculation computes
$H^*(D^n,S^{n-1};R)$ over every commutative ring; this is the local input for
the orientation system and fiberwise normalization.  Trivial bundles and
finite trivializing covers are handled without choice.  For numerable bundles
over CW complexes or paracompact Hausdorff bases of CW type, the relative
Serre filtration has one orientation row.  Under AC it yields both the
oriented Thom isomorphism and its canonical local-coefficient form.

Naturality and uniqueness identify pullback classes, orientation reversal,
external products, and ordered Whitney sums.  The Thom diagonal and zero
section then define the Thom Euler class and zero-section pushforward.  The
disk/sphere pair sequence becomes the Gysin long exact sequence, with its
Euler multiplication map and natural connector.  Rank zero is included
literally; rank one retains the pair sequence, while comparison with the
path-connected sphere-fiber Serre sequence is asserted only from rank two
onward.

Finally, pullback compatibility is proved for Thom classes, Euler classes,
pushforwards, and the Gysin ladder.  Ordered normal coordinates and the
Whitney-sum formula give composition of zero-section pushforwards, with all AC
usage inherited explicitly from general Thom existence.  The companion page
contains product, suspension, Möbius, projective-space, and missing-orientation
calculations.
