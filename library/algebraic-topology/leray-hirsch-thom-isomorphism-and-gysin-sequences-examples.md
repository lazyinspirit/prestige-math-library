---
page: "leray-hirsch-thom-isomorphism-and-gysin-sequences-examples"
title: "Leray–Hirsch, the Thom Isomorphism, and Gysin Sequences — Examples"
status: draft
items: []
examples: ["ex-leray-hirsch-for-a-trivial-product-bundle", "ex-thom-space-of-a-trivial-line-and-plane-bundle", "ex-mod-two-thom-class-of-the-mobius-line-bundle", "ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity", "cex-leray-hirsch-fails-without-a-global-restricting-fiber-basis", "cex-an-unoriented-real-bundle-has-no-integral-thom-class"]
---

For a product bundle, the global fiber basis is pulled back directly from the
fiber and Leray–Hirsch reduces to the finite-free cohomological Künneth map.
The trivial real line and plane bundles give once- and twice-suspended Thom
spaces; their relative generators are the suspended units, so their Thom maps
are the suspension isomorphisms.

The Möbius line makes the coefficient issue visible.  Reflection interchanges
the endpoints of the interval pair and sends its integral connector generator
to its negative.  Modulo two the sign disappears, giving the canonical
orientation and, under AC, the degree-one Thom isomorphism.  Over the standard
CW model of $\mathbb {CP}^{\infty}$, the numerable tautological complex line is
an oriented real plane bundle, so its integral Thom class shifts relative
cohomology by two.

Two counterexamples isolate the hypotheses.  The reflection mapping torus has
no global integral fiber basis: Wang and UCT compute
$H^1(K;\mathbb Z)=\mathbb Z$, rather than the $\mathbb Z^2$ predicted by a
falsely constant Leray–Hirsch table.  For the Möbius bundle itself, a putative
integral fiberwise generator would have equal endpoint restrictions in the
pulled-back interval pair, while clutching makes the second the negative of
the first.  This proves integral nonexistence directly and leaves the mod-two
class as the contrasting positive case.
