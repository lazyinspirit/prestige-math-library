---
page: pontryagin-thom-and-framed-cobordism
title: "Pontryagin Thom and Framed Cobordism"
status: published
requires: [smooth-cobordism-relations-groups-and-rings, thom-spaces-normal-data-and-collapse-maps, sard-theorem-and-transversality, whitney-embedding-tubular-neighbourhoods-and-approximation, higher-homotopy-groups-and-cofiber-sequences, hurewicz-whitehead-freudenthal-and-cw-approximation, spectra-and-stable-homotopy-groups, trigonometric-and-oscillatory-examples-in-one-variable]
category: differential-topology
items: [def-framing-of-a-normal-bundle, def-framed-cobordism-of-embedded-submanifolds, lem-framed-cobordism-is-an-equivalence-relation, prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product, def-pontryagin-thom-map-of-a-framed-submanifold, lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy, def-pontryagin-thom-collapse-of-a-framed-neat-cobordism, lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps, def-framed-regular-preimage-of-a-map-to-a-sphere, lem-positively-oriented-bases-are-path-connected, lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages, lem-regular-value-choice-does-not-change-the-framed-cobordism-class, lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold, lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map, lem-based-and-free-homotopy-classes-of-sphere-maps-agree, thm-pontryagin-thom-correspondence-in-fixed-codimension, def-stabilized-framed-cobordism-colimit, lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map, thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems, rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data]
examples: []
---

This page develops the Pontryagin–Thom construction and the framed cobordism
relation on closed submanifolds of a closed smooth manifold $X$. A framing of
a codimension-$k$ submanifold is an actual trivialization of its quotient
normal bundle, never merely a stable one, and a framed cobordism is built from
a compact neat submanifold of $X\times I$ with product ends carrying framings
that restrict to the two given framings; the collars and product ends are part
of the data, so reflexivity, symmetry and gluing are literal and no boundary
sign is left implicit. Countable choice $\mathrm{AC}_\omega$ is inherited from
the smooth normal-bundle and compatible-chart machinery and is tracked through
the theory; the Hopf-bundle examples explicitly assume full AC for the supplied numerable-bundle lifting theorem.

The forward construction collapses a tubular neighbourhood of a framed
submanifold to the Thom space of its normal bundle; a framing identifies that
Thom target with $N_+\wedge S^k$, and the composite with the based projection
is the Pontryagin–Thom map $X\to S^k$. Its homotopy class is independent of the tube, the
metric and the radius, and a framed cobordism supplies an explicit homotopy
between the collapse maps of its ends. In the reverse direction the regular
preimage of a map to $S^k$ at a regular value is framed by the differential.
For $k\ge1$, its class is independent of the regular value and the positive basis;
homotopic maps with a common regular value give framed-cobordant preimages.
The two constructions are checked against each other on the nose: the regular
preimage of the normalized smooth Pontryagin–Thom representative at its centre recovers the original framed
submanifold with its framing, and the Pontryagin–Thom map of a regular
preimage is homotopic to the original map.

These inverse checks assemble into the fixed-codimension theorem: for
$n\ge k\ge1$ the collapse and the regular-preimage constructions define
mutually inverse bijections between framed cobordism classes of closed framed
$(n-k)$-submanifolds of $S^n$ and $\pi_n(S^k)$, equivalently free homotopy
classes of maps $S^n\to S^k$. Passing to codimension-independent statements,
equatorial stabilization of framed submanifolds defines a directed system
whose colimit is the framed bordism group $\Omega^{\mathrm{fr}}_d$, and
stabilization suspends the Pontryagin–Thom map; the levelwise bijections
therefore induce the stable Pontryagin–Thom isomorphism
$\Omega^{\mathrm{fr}}_d\to\pi_d^s$, which is additive and hence an isomorphism
of abelian groups for disjoint union on the left and addition on the right. A
closing remark keeps three structures apart that are easy to conflate: actual
normal framings, stable normal framings and stable tangential framings.
