---
id: lem-nullhomotopy-persists-under-a-compact-transverse-deformation
kind: lemma
title: "A compact leafwise nullhomotopy persists under a transverse deformation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-foliation-atlas, def-flat-chart-for-a-distribution, def-plaque-of-a-flat-chart, def-based-loops-and-fundamental-group, def-map-transverse-to-a-regular-foliation, def-leaf-of-a-regular-foliation, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-simply-connected, lem-compactness-of-a-subspace-is-ambient, def-countable-choice-principle-for-foliation-pair, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints, thm-lebesgue-number-lemma, def-c1-regular-codimension-one-foliation-and-transverse-orientation, lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "§6, printed pp. 16–19 (characteristic-disk arguments); §7, printed pp. 20–25 (normal-fence/displacement route)"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a $C^2$
codimension-one regular foliation, and let $H:S^1\times(-\delta,\delta)\to M$ be a $C^2$ trace
annulus such that each loop $H_s=H(\cdot,s)$ lies in a single leaf and every
point track $s\mapsto H(\theta,s)$ is transverse to $F$
([[def-map-transverse-to-a-regular-foliation]]). If $H_{s_0}$ is
null-homotopic in its leaf by a compact continuous disk map, then $H_s$ is
null-homotopic in its leaf for all $s$ in some open interval about $s_0$.

## Facts & Assumptions

**Given:** A $C^2$ codimension-one regular foliation $F$, a $C^2$ trace annulus $H$ with leafwise loops and transverse tracks, a parameter $s_0$, and a compact continuous disk map $u:D^2\to L_{s_0}$ with $u|_{\partial D^2}=H_{s_0}$.

[F1] A $C^2$ foliation atlas is a $C^1$ foliation atlas with the transition form $(x',t')=(g(x,t),h(t))$, $h$ a $C^1$ local diffeomorphism ([[def-c1-regular-codimension-one-foliation-and-transverse-orientation]], [[def-regular-foliation-atlas]]).

[F2] In a flat chart the plaques are the connected components of the level sets of the transverse coordinate; a leafwise path segment contained in a flat chart lies in a single plaque, and plaque transport between local transversals inside that chart matches points with equal transverse coordinate ([[def-flat-chart-for-a-distribution]], [[def-plaque-of-a-flat-chart]], [[def-leaf-of-a-regular-foliation]]).

[F3] Holonomy germs of leafwise paths between fixed endpoint transversals are invariant under leafwise homotopies relative to endpoints ([[thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints]]); the holonomy representation is the homomorphism on leafwise homotopy classes of [[def-holonomy-representation-and-holonomy-group-of-a-leaf]]; in particular a leafwise loop that is null-homotopic relative to its basepoint has identity holonomy germ, and the constant loop contributes the identity.

[F4] Every open cover of the compact metric square $[0,1]^2$ has a Lebesgue number ([[thm-lebesgue-number-lemma]]).

[F5] Every finite plaque transport between $C^2$ local transversals of a $C^2$ foliation atlas is a $C^2$ local diffeomorphism germ ([[lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]]).

[F7] The standing hypothesis is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Subdivide the continuous cap u into finitely many sufficiently small parameter triangles, using the pullback of nested foliation boxes and [F4]. Choose their images inside convex plaque-coordinate cores with larger boxes available. Refine near shared faces if necessary so each edge and both adjacent triangles have a common small box inside their larger boxes. All charts and positive margins are finite. Include the basepoint $\theta_0$ as a boundary vertex and use the transversal $\tau(t)=H(\theta_0,s_0+t)$. [given, F1, F2, F4]

2.1 Choose a spanning tree in this finite triangulation. Continue τ along the u-image of its tree paths to fixed short transversals at all vertices. Each edge, combined with the two tree paths, gives a based loop in the disk, whose u-image is nullhomotopic in the leaf. Its holonomy is the identity by [F3]. There are finitely many such relations, so choose one interval J where all transported vertex points satisfy them. Consequently vertices of each triangle lie in the same local plaque of that triangle's box. At a boundary vertex prescribe the point $H(\theta,s_0+t)$: continuing along the boundary gives the same plaque label as the tree path by those relations. The equality here is of local transverse labels; nearby points in one global leaf are not automatically in one plaque. The finite-chart proof of [F3] applies verbatim to the C² atlas; it is also the homotopy argument of [[lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs]], with orientation irrelevant. [F1, F2, F3, F5, step 1.1]

3.1 Give each interior edge a single chosen continuous plaque path between its transported endpoints in its small common box, for example its coordinate chord. Use the prescribed path $H_s$ on each boundary edge. The finitely many nested boxes and a sufficiently fine original subdivision ensure these paths stay in the larger boxes of their adjacent triangles: each edge's small box has closure inside those larger boxes, and its convex plaque core contains the endpoint paths after one common shrink of J. Plaque-label compatibility in step 2.1 therefore puts the complete boundary of each triangle in one convex plaque core. Unlike independent coordinate formulas on cells, these edges are defined once and used by both incident faces. [F1, F2, step 1.1, step 2.1, construct]

4.1 Fill each triangle by coning its already chosen boundary path to one point of that convex plaque core, in the plaque coordinates. This is a continuous disk with exactly the chosen edge paths on its boundary. The finitely many disks agree on every shared edge, and closed pasting produces a continuous map of the original disk into one leaf, with boundary exactly $H_s$. Continuity is in the intrinsic plaque topology because each piece lies in a single plaque and the pasting has finitely many pieces. This is a nullhomotopy of $H_s$ for every $s\in s_0+J$. No differentiability of the original continuous cap has been asserted. [F2, step 2.1, step 3.1]

5.1 The construction used only finitely many boxes, triangles, tree transports and germ relations, and one finite common interval. It proves the stated persistence under the declared ACω hypothesis, without limits of changing filling disks. [F7, step 4.1] ∎
