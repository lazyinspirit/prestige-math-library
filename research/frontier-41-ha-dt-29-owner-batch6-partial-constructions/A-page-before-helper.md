---
page: morse-homology-continuation-and-comparison
title: Morse Homology Continuation and Comparison
status: draft
requires: [morse-trajectory-moduli-spaces-and-the-morse-differential, euclidean-ordinary-differential-equations-with-smooth-dependence, vector-fields-flows-and-lie-derivatives, sard-theorem-and-transversality, singular-chains-and-singular-homology, relative-homology-excision-and-mayer-vietoris, cw-complexes-and-cellular-homology, handle-decompositions-duality-and-rearrangement, local-coefficients-twisted-homology-and-duality]
items: [def-morse-homology-of-a-morse-smale-pair, def-regular-continuation-datum-between-morse-smale-pairs, lem-continuation-solutions-have-critical-limits, lem-continuation-energy-identity, def-broken-continuation-trajectory, thm-continuation-trajectories-are-compact-up-to-breaking, lem-gluing-continuation-solutions-gives-collar-ends, lem-orientation-lines-orient-continuation-moduli-spaces, def-continuation-chain-map, thm-continuation-count-is-a-chain-map, def-two-parameter-continuation-homotopy, thm-homotopic-continuation-data-give-chain-homotopic-maps, lem-continuation-map-of-constant-data-is-the-identity, thm-continuation-composition-law-on-homology, thm-reverse-continuation-is-an-inverse-on-morse-homology, def-canonical-morse-homology-of-a-closed-manifold, lem-compactified-unstable-manifolds-give-a-cw-decomposition, lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count, prop-relative-morse-complex-for-an-adapted-cobordism, thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex, thm-morse-homology-is-naturally-isomorphic-to-singular-homology, cor-morse-homology-recovers-the-morse-inequalities, rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control]
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
