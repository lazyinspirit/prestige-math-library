---
page: thom-spaces-normal-data-and-collapse-maps
title: Thom Spaces Normal Data and Collapse Maps
status: published
items: [def-disk-bundle-sphere-bundle-and-thom-space,
        lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism,
        prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product,
        rem-thom-space-empty-and-rank-zero-conventions,
        def-stable-normal-bundle-of-a-compact-smooth-manifold,
        thm-stable-normal-bundle-is-independent-of-the-embedding,
        lem-tubular-charts-realize-a-prescribed-normal-identification,
        def-pontryagin-thom-collapse-of-an-embedded-submanifold,
        lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint,
        lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy,
        prop-transverse-preimage-carries-a-pulled-back-normal-structure,
        lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms,
        lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology,
        def-thom-class-and-thom-isomorphism-interface,
        prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual,
        lem-stabilizing-a-normal-bundle-suspends-its-thom-space,
        rem-thom-spectrum-construction-is-not-minted-in-dt]
examples: []
---

This page fixes the differential-topology side of the Thom construction. The
disk, sphere and Thom spaces of a metric bundle are the published based
quotients, with the nonbasepoint stratum carrying the smooth structure of the
bundle; the metric is auxiliary, since radial rescaling identifies any two
metric models by a canonical based homeomorphism, and trivial bundles have
Thom space $B_+\wedge S^r$. The degenerate cases — empty base, rank zero,
empty sphere bundle — are recorded once and used throughout.

Normal data are handled stably. The normal bundle of an embedding is the
quotient of the restricted ambient tangent bundle, identified with the
orthogonal complement by an ambient metric under countable choice, and adding
trivial summands makes the resulting class independent of the embedding: the
two complements are compared by an explicit orthogonal transport along the
product path of the two embeddings. A companion lemma shows that a single
tubular chart may be adjusted, by precomposition with a bundle automorphism,
so that its induced map on the normal quotient is any prescribed
identification; this is the exact compatibility condition demanded of the
Pontryagin–Thom collapse.

The collapse of the complement of a tube to the Thom basepoint is then defined
with specified normal data, proved continuous and smooth away from the
basepoint, and shown to be independent — up to based homotopy — of the
compatible chart, the metric and the radius, provided the specified normal
identification is held fixed; the reflected normal line shows that this
proviso is indispensable. Transverse preimages of the zero section inherit the
pulled-back normal bundle, and relative smoothing and perturbation turn
homotopies transverse near the zero section into compact normal cobordisms
between their endpoint preimages.

Finally the page interfaces with algebraic topology rather than rebuilding it:
the Thom class, its uniqueness and naturality, the Thom isomorphism and the
Euler class are consumed as published AT results, and the collapse is shown to
pull the Thom class back to the Poincaré dual of the embedded submanifold,
with the normal-first orientation and front-evaluation cap convention made
explicit. Stabilizing a bundle by a trivial line suspends its Thom space,
preparing the stable statement, while the Thom spectrum itself stays outside
the page's scope.
