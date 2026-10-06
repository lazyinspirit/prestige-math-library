---
page: pontryagin-thom-and-framed-cobordism-examples
title: "Pontryagin Thom and Framed Cobordism — Examples"
status: draft
category: differential-topology
items: []
examples: [ex-framed-zero-manifolds-and-signed-points, ex-pontryagin-thom-map-of-the-standard-framed-equator, ex-framed-links-represent-elements-of-pi-three-of-s-two, cex-changing-a-framing-can-change-the-pontryagin-thom-class, ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map]
---

The examples on this page test the Pontryagin–Thom correspondence of
[[pontryagin-thom-and-framed-cobordism]] against the smallest explicit framed
submanifolds. For $n\ge1$, framed $0$-manifolds of $S^n$ are finite sets of points, each
framed by a basis of the tangent space at that point, and their framed
cobordism classes are classified by the signed count: the Pontryagin–Thom map
has the centre as a regular value with the points as preimage, and the
regular-value formula for degree turns the local signs into the signed count.
A single positively framed point realizes $+1$, its orientation reversal
$-1$, and the empty $0$-manifold $0$.

For $m\ge1$, the standard framed equator of $S^m$ is null-cobordant: the hemisphere sweep
is an explicit framed cobordism to the empty manifold, so the equator's
Pontryagin–Thom map $S^m\to S^1$ is nullhomotopic, and for $m=1$ the two
equator points carry opposite signs. Stabilizing this fixed $(m-1)$-dimensional
equator into $S^{m+1}$ raises its codimension from one to two and suspends its
zero collapse class. For $m=1$, it contrasts with a single positively framed
point, which realizes a generator of the zeroth stable stem. The Hopf map
$S^3\to S^2$ supplies a nonzero one-dimensional example: its fibre over a
regular value is the standard unknot, the Hopf fibration's long exact sequence
gives $\pi_3(S^2)\cong\pi_3(S^3)\cong\mathbb Z$, and the framed unknot
represents a generator.

The framing is load-bearing data, not a decoration of the underlying
submanifold: on the same standard unknot the Hopf framing realizes the
generator while the framing by a bounding disk is null-cobordant, so two
framings of one submanifold have different Pontryagin–Thom classes. Finally,
stabilizing the positively framed point of $S^1$ produces the positively
framed point of $S^2$, and its Pontryagin–Thom map is the suspension of the
degree-$+1$ self-map of $S^1$: the stabilization-to-suspension compatibility
is verified on a nonzero class, level by level.
