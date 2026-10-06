---
page: foliation-holonomy-and-the-holonomy-groupoid
title: Foliation Holonomy and the Holonomy Groupoid
status: draft
items: [def-local-transversal-to-a-regular-foliation,
        def-leafwise-path-and-leafwise-homotopy,
        def-germ-of-a-local-diffeomorphism-at-a-point,
        lem-germs-of-local-diffeomorphisms-form-a-group,
        lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism,
        lem-holonomy-germ-is-independent-of-the-foliation-chart-chain,
        thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints,
        lem-holonomy-respects-path-concatenation-and-reversal,
        def-holonomy-representation-and-holonomy-group-of-a-leaf,
        lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action,
        lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists,
        def-holonomy-cover-of-a-leaf,
        def-monodromy-groupoid-of-a-foliation,
        def-holonomy-groupoid-of-a-foliation,
        lem-holonomy-classes-form-a-groupoid-congruence,
        prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group,
        def-map-transverse-to-a-regular-foliation,
        prop-pullback-foliation-under-a-transverse-map,
        prop-quotient-foliation-under-a-free-proper-foliated-action,
        def-suspension-foliation-of-a-group-action,
        prop-suspension-holonomy-is-the-germ-of-the-monodromy-action,
        rem-holonomy-is-a-germ-not-a-globally-defined-return-map,
        rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff]
examples: []
---

This page develops the holonomy of a regular foliation: the way nearby leaves
are compared along a leafwise path, the algebraic structures that record it,
and the two global constructions that make it computable. A local transversal
is the q-dimensional submanifold transverse to the leaf distribution at a
point, a leafwise path is a path inside a single leaf, and along a finite chain
of foliation charts one composes the plaque transports between transversals to
obtain a germ of a transverse diffeomorphism, the holonomy germ. The germ is
independent of the chart chain, the subdivision and the auxiliary transversals,
and depends only on the leafwise homotopy class of the path relative to its
endpoints; it is multiplicative under concatenation and inversion, so the germs
of local diffeomorphisms of a transversal at a base point form a group in which
every leaf loop yields a holonomy class. With the library's traversal-order
loop product, forward holonomy is an antihomomorphism; reversing the loop
gives the homomorphic holonomy representation used below.

Restricting to leaf loops defines the holonomy representation
$\pi_1(L,x)\to\operatorname{Diff}_x(T)$; its image is the holonomy group of the
leaf, while its kernel is the subgroup whose covering corresponds to the
holonomy cover of the leaf. Quotienting leafwise paths by equality of holonomy
germs gives the holonomy groupoid, a quotient of the monodromy groupoid
(leafwise homotopy classes of leafwise paths), and the isotropy group of the
holonomy groupoid at a point is exactly the holonomy group of the leaf through
it. Two further constructions make the definitions usable: the pullback
foliation along a map transverse to the distribution, whose leaves are the
components of intrinsic leaf preimages (the transverse fibre products), and the quotient of a foliation by a free and
properly discontinuous foliated action, applied in particular to suspensions
of representations $\pi_1(B,b_0)\to\operatorname{Diff}(F)$, where the holonomy
germ of a base loop is the germ of the represented inverse monodromy. The
final remarks record that holonomy by itself specifies a germ and does not specify a global
return map, and that holonomy and monodromy groupoids can fail to be
Hausdorff. Countable choice $\mathrm{AC}_\omega$ is the standing choice
assumption through the smooth-distribution and holonomy interface; no full
axiom of choice is invoked.
