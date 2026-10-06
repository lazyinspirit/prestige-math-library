---
page: handle-cancellation-slides-and-elementary-moves
title: Handle Cancellation Slides and Elementary Moves
status: draft
requires: [sublevel-deformation-and-the-handle-attachment-theorem, handle-decompositions-duality-and-rearrangement, oriented-and-mod-two-intersection-numbers, whitney-embedding-tubular-neighbourhoods-and-approximation, vector-fields-flows-and-lie-derivatives, manifolds-with-boundary-collars-and-orientations, fundamental-solutions-newtonian-potentials-and-green-functions, geodesics-the-exponential-map-completeness-and-hopf-rinow, hurewicz-whitehead-freudenthal-and-cw-approximation, singular-chains-and-singular-homology, homology-axioms-degree-and-classical-applications]
items: [def-geometric-cancelling-handle-pair, lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type, lem-transverse-complementary-spheres-have-product-charts, lem-standard-complementary-pair-fills-an-n-ball, lem-one-intersection-gives-the-standard-local-cancelling-model, thm-handle-cancellation, thm-creation-of-a-cancelling-handle-pair, lem-embedded-bands-joining-two-framed-spheres-exist, def-handle-slide-of-one-k-handle-over-another, lem-handle-slides-preserve-the-relative-diffeomorphism-type, lem-handle-slides-act-by-elementary-basis-change-on-handle-chains, def-attaching-belt-intersection-matrix-of-adjacent-index-handles, lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix, prop-elementary-matrix-operations-are-realized-by-handle-slides, lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation, prop-morse-cancellation-criterion-via-a-unique-connecting-orbit, lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood, rem-handle-slides-are-not-handle-cancellations, rem-elementary-moves-do-not-constitute-full-cerf-theory-here]
examples: []
---

This page records the elementary modifications of a handle presentation:
introduction and cancellation of a complementary pair of consecutive indices,
handle slides, and the elementary matrix operations they induce on the
attaching-belt intersection matrix. A consecutive pair $h^k,h^{k+1}$ is
geometrically cancelling when the attaching sphere of the upper handle meets
the belt sphere of the lower one transversely in exactly one point; the
endpoint cases $k=0$ and $k=n-1$, where for $n\ge2$ one of the two spheres is a whole
boundary component (and for $n=1$ it is a boundary $0$-sphere), are part of the definition. The local theory is complete:
a single transverse intersection point straightens the pair, over one
embedded disc of the pre-handle outgoing boundary, to the standard complementary model, and
the standard model fills an $n$-disc, so the pair can always be cancelled or,
inversely, introduced at any point of the outgoing boundary.

Handle slides are the second move. A slide is determined by a band joining the
two attaching spheres with framings matched at the ends; the slid handle is
attached by the band move, and the slide changes the presentation without
changing the relative diffeomorphism type. Algebraically, a slide changes the
handle-chain basis by an elementary operation, and the attaching-belt
intersection matrix of adjacent-index handles changes by the corresponding
elementary row or column operation. The page separates this from cancellation:
a slide is a basis change that changes no handle count, while cancellation
removes two handles and can never remove one handle alone, by the Euler
characteristic. The Morse-theoretic form of the criterion is also included: two
consecutive critical points with a single transverse connecting orbit have a
product slab between regular levels, and the modification realizing this can be
supported, for the vector field, in any prescribed neighbourhood of the closed
trajectory. The new function agrees with the old one near the slab faces; it
cannot in general be kept fixed outside that neighbourhood.

The two closing remarks fix the proof boundary. A unit entry of the
intersection matrix is strictly weaker than a single geometric intersection
point, and a general conversion from algebraic counts to a geometric
single point needs additional hypotheses and the Whitney-trick input on a
later page. An artificially inserted finger pair can instead be undone by its
inverse finger isotopy; and the moves here do not constitute Cerf theory,
pseudo-isotopy, or a connectivity statement for handle presentations. Countable
Choice is carried by the collar, tubular-neighbourhood, transversality and flow
suppliers used throughout, and is declared in the statements that consume
them.
