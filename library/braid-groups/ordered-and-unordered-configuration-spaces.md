---
page: ordered-and-unordered-configuration-spaces
title: "Ordered and Unordered Configuration Spaces"
status: published
requires: [the-fundamental-group, covering-spaces-and-lifting, fibrations-fiber-bundles-and-homotopy-exact-sequences, classification-of-covering-spaces, partitions-of-unity-and-paracompactness, subspaces-products-and-quotients, manifolds-with-boundary-collars-and-orientations]
items: [def-ordered-configuration-space,
        prop-the-symmetric-group-acts-freely-on-ordered-configurations,
        def-unordered-configuration-space,
        lem-path-conjugation-isomorphism-of-fundamental-groups,
        lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
        lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations,
        thm-ordered-configurations-cover-unordered-configurations-regularly,
        lem-the-closed-disk-is-a-manifold-with-boundary,
        def-pure-braid-group-from-ordered-configurations,
        def-braid-group-from-unordered-configurations,
        def-endpoint-monodromy-of-a-configuration-loop,
        thm-configuration-braid-pure-braid-short-exact-sequence,
        lem-forgetting-configuration-points-is-locally-trivial,
        thm-fadell-neuwirth-forgetful-fibration]
examples: []
---

Deleted collision diagonals are what make the coordinate permutation action free,
and the orbit quotient of that action is the unordered configuration space: the
ordered projection is then an n!-sheeted regular covering whose deck group is the
symmetric group, so the endpoint ordering of a lifted loop defines the endpoint
monodromy and the configuration braid groups sit in a short exact sequence
1 -> PB_n -> B_n^conf -> S_n -> 1, proved directly from covering theory and
explicit adjacent half twists. The closed-disc and interior-disc models are
compared by an explicit equivariant radial homotopy so that the group defined on
the closed disc agrees with the boundaryless model used later. The page closes
with the Fadell-Neuwirth forgetful map: point-moving bump homeomorphisms trivialise
it over each base configuration with fibre the configuration space of the
punctured manifold, the fibre type is constant by connectedness without any choice
principle, and for the planar disc the numerable bundle and hence the Hurewicz
fibration are obtained under the Axiom of Choice and Dependent Choice. The closed
disc's manifold-with-boundary structure is supplied locally as a lemma, and the
basepoint-change isomorphism used by the group definitions is proved locally on
this page rather than imported from an examples page.
