---
id: lem-a-paired-immersed-cap-sweep-excludes-a-positive-closed-transversal
kind: lemma
title: A paired immersed cap sweep excludes a positive closed transversal
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-common-plaque-lifted-caps-admit-nested-source-disk-inclusions
- lem-paired-regular-disk-sweep-is-open-across-its-base-gluing
- lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph
- lem-fixed-transverse-fences-have-a-finite-crossing-word
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band
- lem-positive-transverse-accessibility-is-a-preorder
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 16
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §8, Theorem 8.2 and its proof, printed pp. 27-28 (no-transversal and boundary-sign argument)
  - title: Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20
    url: https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf
    locator: Classes 12-13; immersed paired quotient supplied explicitly
---

## Statement

For a coherent regular cap family with simple lifted boundaries, an infinite center track, fixed-flow fence, no-hit neighborhood and recurrent nested source disks, the reduced essential initial leaf meets no positive closed transversal.

## Facts & Assumptions

**Given:** A coherent regular cap family with simple lifted boundaries, an infinite centre track, a fixed-flow fence, a no-hit neighbourhood and recurrent nested source disks.

[F1] The in-pair item [[lem-common-plaque-lifted-caps-admit-nested-source-disk-inclusions]] supplies the nested source-disk inclusions and paired base gluing maps; the in-pair item [[lem-paired-regular-disk-sweep-is-open-across-its-base-gluing]] supplies the local seam openness of the paired quotient; the in-pair item [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]] supplies the regular cap development and its lifted Jordan disks; the in-pair item [[lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph]] supplies open transversal saturation; [[lem-fixed-transverse-fences-have-a-finite-crossing-word]] supplies the fixed-flow fence and finite crossing word.

[F2] The sibling-pair items `lem-fixed-transverse-fences-have-a-finite-crossing-word` and `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supply the finite fence data and the surface-Jordan disk together with the finite interval-chart cancellation of a compact oriented one-manifold; their uses are flagged in steps 1.1 and 7.1 below.

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 For contradiction suppose a positive closed transversal meets the reduced initial leaf. Move one crossing to a regular point $p$ of its essential loop using [[lem-positive-transverse-accessibility-is-a-preorder]]. Put $K=\gamma(S^1)$, the compact loop image. The intersections of this transversal with $K$ are isolated: in a foliation box the transversal has strictly monotone transverse coordinate while each local $K$ branch lies in a plaque, so compactness and finitely many local branches give finitely many intersections after a small positive perturbation avoiding passage through double points. Choose disjoint parameter intervals for all intersections other than the selected regular point $p$ and small boxes in which each $K$ branch is an embedded arc in one plaque; in box coordinates replace the transversal by a small tangentially shifted arc near each crossing, interpolating to the original arc on end collars, with the tangential shift chosen transverse to the one-dimensional branch in the two-dimensional plaque. It misses that branch, the transverse-coordinate derivative stays positive because only tangential coordinates change, and shrinking each box excludes all other $K$ branches, interpolating at transverse levels separated from the branch plaques so that no new intersections appear; finite gluing retains $C^2$ regularity and positivity. At $p$ keep an interval fixed, and note that the remainder outside a slightly larger $p$-box is compact and disjoint from $K$, hence has positive ambient distance from $K$ for this fixed box and transversal. [F1, F2, given, construct]

2.1 Choose a small box $B$ around $p$ so that the initial loop meets $B$ in one embedded arc with every other boundary parameter outside a larger closed box; uniform continuity of the short fence keeps those other parameters outside $B$ at all sufficiently small levels. In each plaque met by the boundary, its sole boundary arc is $C^1$ close to the initial regular arc, so a fixed smaller plaque rectangle is split into two connected half-rectangles by that arc, with one uniform tangential and normal size. Lift $B$ to the universal cover of the leaf at that boundary point; the component of the plaque rectangle through the chosen lift maps diffeomorphically to its plaque rectangle, and the Jordan boundary has no other boundary points in this lifted rectangle because all other projected boundary parameters avoid $B$. Its disk side contains one local half-neighbourhood by the boundary collar, and membership in the Jordan interior cannot change along a path in the corresponding half-rectangle without crossing the boundary, so the entire chosen half-rectangle lies in the disk. Leaf orientation identifies the selected side with the sign of the boundary orientation, which is constant on any connected interval with compact cap transport. [F1, step 1.1]

3.1 Suppose a positive closed transversal meets the reduced initial leaf. Finite leaf-path transport and positive perturbation move a crossing to a regular point $p$ of the essential loop $\gamma$, away from its finitely many double points, and tangential perturbations in finitely many foliation boxes remove its other intersections with $\gamma$ as in step 1.1. In a fixed-$V$ flowbox near $p$ write coordinates $(x,z)$ with $V$-orbits vertical and $\gamma$ an embedded arc in $z=0$; replace the local transversal, preserving its positive transverse derivative and its end collars, by $\tau(r)=(p+rv,r)$ near $r=0$, where $v$ is a small vector pointing into the selected local cap half-plaque. For $r\neq0$ sufficiently small its basepoint lies off $\gamma$; since the whole normal fence consists of $V$-orbits over $\gamma$, this local transversal misses the entire positive fence, and the compact remainder of $\tau$ has positive distance from $\gamma$, so after shrinking the fence it also misses the fence. Hence $\tau$ is disjoint from the entire lateral boundary $A_0$ of every sufficiently late paired sweep while still crossing on the inward side. [F1, step 2.1]

4.1 Fix a late upper cap $C_n$ and choose the lower recurrent cap $C_m$ so late that $C_n$ is included in it by the source-disk inclusion $h_{n,m}$ and that a fixed small neighbourhood of $p$ disjoint from the compact image of $C_n$ contains $\gamma_{t_m}$ near $p$. In that box the cap $C_m$ contains the uniform local plaque half-neighbourhood of step 2.1. The local leaf plaque is a graph $z=\eta_m(x)$ with $\eta_m(p)>0$ and tending to $0$; transversality and small $v$ make $r-\eta_m(p+rv)$ strictly increasing, so it has a small positive zero $r_m$. At this point $\tau$ crosses the $C_m$ plaque on its selected interior side because its tangential displacement $r_mv$ is inward, and the crossing lies outside the image of $C_n$, so it belongs to the unglued $b$-base annulus $A_1$. Thus $\tau$ meets $f(A_1)$ and misses $f(A_0)$ and the boundary seams. [F1, step 3.1]

5.1 The paired quotient $X$ is an oriented compact three-manifold with boundary $A_0\cup A_1$: identifying the whole $a$-base disk with the interior source disk $h_{n,m}(D^2)$ of the $b$-base identifies two boundary disks of the original three-ball, local disk collars give manifold charts across the identified bases, and the boundary is the remaining $b$-base annulus together with the lateral annulus. The seam lemma of [F1] strengthens to a local orientation-preserving homeomorphism in the interior, since the two half-charts map injectively to opposite sides of their common plaque and agree on it, while other interior charts are regular local diffeomorphisms. Along $A_1$ the positive transverse direction points inward to $X$, because this $b$-base has available cylinder side $t<b$ and the sweep is negatively transverse. [F1, step 4.1]

6.1 Form the fibre product $P=\{(x,r)\in X\times S^1:f(x)=\tau(r)\}$. It is closed in the compact product, hence compact. Interior local homeomorphism charts of $f$ identify $P$ locally with an interval of the oriented transversal, the piecewise $C^2$ seam causing no topological defect; along $A_1$ transversality gives half-interval charts; there are no points over $A_0$ or the boundary corners because $\tau$ misses their images. Therefore $P$ is a compact oriented one-manifold with boundary, and its boundary is nonempty by the crossing of step 4.1. At every boundary point the positive $\tau$ direction enters $X$, so every boundary point has the same boundary sign, which is impossible because a compact oriented one-manifold has zero total signed boundary: choose a finite oriented interval-chart cover, subdivide into finitely many short intervals subordinate to it, and cancel the paired internal endpoints, each interval contributing one positive and one negative endpoint. This contradiction shows that the reduced leaf meets no closed positive transversal. [F1, F2, step 5.1]

7.1 The argument uses multiple-sheet preimages with their multiplicities and never identifies an immersed cap image with an embedded region, and it consumes only the finitely many boxes, source disks and the fibre product, hence only the standing countable choice from [F3]. [F2, F3, step 6.1] ∎
