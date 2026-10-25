---
page: morse-trajectory-moduli-spaces-and-the-morse-differential-examples
title: "Morse Trajectory Moduli Spaces and the Morse Differential — Examples"
status: published
requires: [morse-trajectory-moduli-spaces-and-the-morse-differential]
items: []
examples: [ex-broken-trajectories-in-an-index-two-torus-moduli-space, ex-morse-complex-of-the-circle, ex-morse-complex-of-the-two-sphere, ex-changing-an-unstable-orientation-changes-two-basis-signs, cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero]
---

The examples compute the Morse complexes of the simplest closed manifolds and
display the compactification that makes the differential square to zero. On the
round circle the height function has one maximum and one minimum, and the two
descending arcs are the two elements of the index-one moduli space: modulo two
their contributions add to zero, and with orientations the two arcs carry
opposite comparison signs, so both the mod-two and the integral differential
vanish and the homology is that of the circle. On the round two-sphere the
height function has only a maximum and a minimum, so the degree-one chain group
vanishes and every differential vanishes for degree reasons, giving the homology
of the sphere without any computation of trajectories.

The tilted torus exhibits the boundary mechanism in the first interesting case.
Its maximum, two saddles and minimum have two trajectories between each adjacent
pair of critical points, so the one-dimensional moduli space from the maximum to
the minimum is a union of four open intervals compactified by eight once-broken
trajectories, two per interval, each carrying a collar chart; modulo two the
differential counts those ends and vanishes. The last two items test the
orientation conventions. Changing the orientation of a single unstable manifold
changes exactly the coefficients above and below that critical point and
conjugates the differential by an invertible change of basis, leaving the
homology unchanged; and assigning the sign $+1$ to every trajectory instead of
the orientation-induced sign produces an operator with $\partial^2 a=8d\ne0$,
showing that a coherent gluing-compatible sign convention, not an arbitrary
assignment, is what makes the integral Morse complex a complex.
