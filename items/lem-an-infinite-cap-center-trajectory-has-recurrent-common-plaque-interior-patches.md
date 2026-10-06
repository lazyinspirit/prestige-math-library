---
id: lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches
kind: lemma
title: "An infinite cap-center trajectory has recurrent common plaque-interior patches"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood, lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band, lem-c2-inverses-and-scalar-return-roots, lem-c1-euclidean-maximal-flow-with-c2-upgrade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 14
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a78, printed pp. 26-28; recurrence and plaque-patch adapters supplied locally"
---

## Statement

Suppose the cap family has an infinite negative-transverse center trajectory q(s), synchronized parameters t(s)↓0, and the preceding fixed-neighborhood avoidance. Then after adjusting recurrence times there is one leaf B and one fixed plaque patch in B whose lifts lie in the interiors of all sufficiently late caps.

## Facts & Assumptions

**Given:** A cap family with an infinite negative-transverse center trajectory $q(s)$, synchronized parameters $t(s)\downarrow0$, and the fixed-neighbourhood avoidance of [[lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood]].

[F1] The in-pair item [[lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood]] provides a fixed intrinsic neighbourhood $S'$ of the original loop $\gamma$ in its leaf that every late cap projection avoids; the in-pair item [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]] supplies the coherent cap development with the lifted Jordan disks and their centered based coverpoints.

[F2] A $C^2$ Euclidean field has $C^2$ flow boxes with uniform nonzero transverse derivative bound on a compact box ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]), and a $C^2$ scalar equation with nonzero derivative has a unique local $C^2$ root, which makes the small-time adjustment below continuous and monotone ([[lem-c2-inverses-and-scalar-return-roots]]).

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Compactness of the ambient manifold and countable choice give an accumulation point $z$ of the sequence $q(s)$ as $s\to\infty$. Choose a small box around $z$ in which the transverse derivative of the fixed negative flow has a uniform nonzero bound. If $q(s_n)\to z$, adjust each $s_n$ by a time tending to $0$ so that the adjusted point lies on the central plaque through $z$: solve the strictly monotone transverse-coordinate equation by the intermediate value theorem [F2]. The infinite trajectory permits both small time directions once $s_n$ is large, and the adjusted points all lie in the same leaf $B$ by construction. [F2, given, construct]

2.1 The accumulation point $z$ cannot lie on $\gamma$. Otherwise choose the box inside the intrinsic neighbourhood $S'$ of the original leaf provided by the avoidance hypothesis; the same small-time adjustment places $q(s_n)$ on its central original-leaf plaque inside $S'$, contradicting that $q(s_n)$ is in the interior of a cap. Hence $z\notin\gamma(S^1)$, and a fixed smaller box about $z$ has closure disjoint from $\gamma$. [F1, step 1.1]

3.1 Every late boundary $\gamma_{t(s_n)}$ avoids that smaller box by uniform convergence to $\gamma$, and each adjusted cap-centre is interior to its Jordan lifted disk by [F1]. In the lifted central plaque rectangle containing that centre, membership in the disk interior cannot change along a path without crossing the disk boundary; since the entire projected rectangle is boundary-free and connected, it lies inside the lifted disk. Shrinking to a fixed smaller rectangle around $z$ and taking $n$ sufficiently large gives one common intrinsic plaque patch in $B$ whose lifts lie in the interiors of all sufficiently late caps. The argument concerns actual central-plaque hits, rather than replacing ambient convergence by an assertion that the convergent points already share a leaf, and it uses one box, one rectangle and the cited flow and root facts, hence only the standing countable choice from [F3]. [F1, F2, F3, step 2.1] ∎
