---
page: morse-homology-continuation-and-comparison
title: Morse Homology Continuation and Comparison
status: draft
requires: [morse-trajectory-moduli-spaces-and-the-morse-differential, euclidean-ordinary-differential-equations-with-smooth-dependence, vector-fields-flows-and-lie-derivatives, sard-theorem-and-transversality, singular-chains-and-singular-homology, relative-homology-excision-and-mayer-vietoris, cw-complexes-and-cellular-homology, handle-decompositions-duality-and-rearrangement, local-coefficients-twisted-homology-and-duality, banach-space-differential-calculus-and-banach-manifolds, completeness-and-uniform-continuity, stable-unstable-manifolds-and-morse-smale-transversality, inverse-and-implicit-function-theorems, manifolds-with-boundary-collars-and-orientations, relations-functions-and-quotients, oriented-and-mod-two-intersection-numbers, chain-complexes-and-homology, morse-critical-points-hessians-and-indices, smooth-partitions-of-unity-and-exhaustions]
items: [def-regular-continuation-datum-between-morse-smale-pairs, lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds, lem-continuation-solutions-have-critical-limits, def-two-parameter-continuation-homotopy, lem-continuation-energy-identity, def-broken-continuation-trajectory, lem-metric-end-flow-matching-gives-local-broken-charts, thm-continuation-trajectories-are-compact-up-to-breaking, lem-gluing-continuation-solutions-gives-collar-ends, lem-orientation-lines-orient-continuation-moduli-spaces, lem-metric-morse-smale-end-counts-form-chain-complexes, lem-metric-critical-crossing-preserves-pointed-disk-pairs, def-morse-homology-of-a-morse-smale-pair, def-continuation-chain-map, lem-compactified-unstable-manifolds-give-a-cw-decomposition, thm-continuation-count-is-a-chain-map, lem-continuation-map-of-constant-data-is-the-identity, lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count, thm-homotopic-continuation-data-give-chain-homotopic-maps, prop-relative-morse-complex-for-an-adapted-cobordism, thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex, thm-continuation-composition-law-on-homology, thm-reverse-continuation-is-an-inverse-on-morse-homology, def-canonical-morse-homology-of-a-closed-manifold, thm-morse-homology-is-naturally-isomorphic-to-singular-homology, rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control, cor-morse-homology-recovers-the-morse-inequalities]
examples: []
---

This page proves that Morse homology is an invariant of the underlying closed
manifold. It places the Morse complex and its homology of a Morse--Smale pair,
then builds the comparison machinery: regular continuation data and their
moduli spaces of solutions, the energy identity that bounds them, compactness
up to breaking, gluing collars at the broken ends, and the orientation lines
that turn the continuation count into a signed chain map. The two-parameter
theory shows that homotopic continuation data give chain homotopic maps, and
composition with the reversed datum shows that continuation is an
isomorphism, so the homology depends only on the manifold.

The second half compares the analytic complex with the cellular one. The
compactified unstable manifolds of the Morse--Smale flow form a finite CW
pair, their incidence numbers are the signed trajectory counts, and the
resulting chain isomorphism identifies Morse homology with cellular and hence
with singular homology and recovers the Morse inequalities and the Euler
characteristic identity. A closing remark records the scope boundary: the
closed-manifold theory does not extend automatically to nonproper or
incomplete noncompact data, as the companion counterexample displays.

The mixed boundary passage lemma supplies uniform endpoint and derivative
estimates in invariant-axis hyperbolic coordinates. Several proofs in this
draft remain open: converting those estimates into metric-end compactification
and gluing charts, comparing their boundary orientations, constructing the
relative all-dimensional characteristic disks, and proving compatibility of
the singular comparison with continuation. The invariance and natural
comparison statements above remain the intended conclusions of that machinery.
