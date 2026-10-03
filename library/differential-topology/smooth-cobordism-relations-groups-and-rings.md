---
page: smooth-cobordism-relations-groups-and-rings
title: Smooth Cobordism Relations Groups and Rings
status: draft
items: [def-unoriented-smooth-cobordism-of-closed-manifolds, def-oriented-smooth-cobordism, lem-cylinders-give-reflexivity-of-cobordism, lem-reversing-a-cobordism-gives-symmetry, lem-collar-gluing-and-corner-smoothing-give-transitivity, thm-smooth-cobordism-is-an-equivalence-relation, def-null-cobordant-closed-manifold, def-unoriented-and-oriented-bordism-groups, thm-disjoint-union-makes-bordism-classes-abelian-groups, lem-fundamental-class-of-a-boundary-pushes-forward-to-zero, prop-zero-dimensional-bordism-groups, lem-product-boundary-formula-for-oriented-manifolds, thm-cartesian-product-makes-bordism-a-graded-ring, def-stiefel-whitney-number-of-a-closed-manifold, def-pontryagin-number-of-a-closed-oriented-manifold, lem-boundary-stable-tangent-splits-off-a-trivial-line, prop-boundaries-have-zero-stiefel-whitney-numbers, prop-oriented-boundaries-have-zero-pontryagin-numbers, rem-bordism-groups-here-are-geometric-not-generalized-homology-constructions]
examples: []
---

This page builds geometric cobordism from the ground up: a bordism is a compact
manifold with boundary carrying a decomposition of its boundary into an
incoming and an outgoing part together with collar parametrisations, and
cobordance is the equivalence relation of being joined by such data. The
collars are part of the definition, so gluing and the geometric group and ring
laws use the supplied data without a choice axiom; the optional comparison
of different collar systems uses countable choice, and the characteristic-class
constructions below inherit AC; the boundary conventions are fixed
outward-normal-first, so the signs in the oriented theory are stated once and
used consistently.

The first block proves that cobordism is an equivalence relation in both the
unoriented and the oriented theory, via cylinders, dual bordisms and collar
gluing, and derives the elementary computations attached to the relation:
null-cobordism, zero-dimensional bordism groups, and the product boundary
formula for products with at most one boundary factor. The second block equips
the sets of cobordism classes with the disjoint-union group structure and the
Cartesian-product ring structure, with the one-point class (positively oriented in the oriented theory) as unit and the
Koszul sign in the oriented theory.

The page closes with the characteristic-number obstruction to bounding: the
stable tangent bundle of a boundary splits off a trivial line, the fundamental
class of a boundary pushes forward to zero, and consequently all
Stiefel-Whitney numbers (respectively all Pontryagin numbers, for a boundary of
an oriented manifold) of a closed boundary vanish. The final remark fixes the
seam between these geometric constructions and the Thom-spectrum picture,
which belongs to algebraic topology and to later pages.
