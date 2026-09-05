---
id: thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
kind: theorem
title: "Existence and uniqueness of maximal connected integral manifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-leaf-equivalence-relation-of-an-integrable-distribution,
       lem-tangent-curve-reachability-is-an-equivalence-relation,
       thm-frobenius-local-coordinate-theorem,
       def-flat-chart-for-a-distribution,
       def-plaque-of-a-flat-chart,
       lem-integral-manifolds-are-locally-contained-in-plaques,
       lem-overlapping-plaques-through-a-point-have-compatible-germs,
       def-integral-manifold-of-a-distribution,
       thm-euclidean-inverse-function-theorem,
       def-countable-choice,
       def-topological-manifold-without-boundary,
       thm-second-countable-implies-lindelof,
       prop-components-of-a-topological-manifold-are-open-and-at-most-countable,
       thm-countable-union-of-countable,
       thm-connected-and-locally-path-connected-implies-path-connected,
       prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Statement

Let $\mathcal D$ be an integrable rank-$k$ distribution on a manifold $M$, and
let $L_p$ be the $\sim_{\mathcal D}$-equivalence class of a point $p$. Then:

1. $L_p$ carries a unique smooth structure for which the inclusion
   $j_p:L_p \hookrightarrow M$ is a connected injective immersion and an
   integral manifold of $\mathcal D$.
2. If $i:N \to M$ is any connected integral manifold of $\mathcal D$ with
   $i(q) = p$ for some $q \in N$, then there is a unique smooth map
   $\Phi:N \to L_p$ such that $j_p \circ \Phi = i$.

## Facts & Assumptions

**Given:** An integrable rank-$k$ distribution $\mathcal D$ and a point
$p \in M$.

[A1] Let $L_p$ be the reachability class of $p$ under tangent piecewise smooth
curves.

[L1] An integrable distribution has a flat coordinate chart around every
point ([[thm-frobenius-local-coordinate-theorem]]).

[L2] Plaques from two flat charts through the same point have compatible germs
([[lem-overlapping-plaques-through-a-point-have-compatible-germs]]).

[L3] Each connected component of the inverse image of a flat-chart domain
under an integral immersion maps into one plaque
([[lem-integral-manifolds-are-locally-contained-in-plaques]]).

[L4] A map between equal-dimensional Euclidean open sets with invertible
derivative is a local diffeomorphism
([[thm-euclidean-inverse-function-theorem]]).

[A2] The standing $\mathrm{AC}_\omega$ assumption for smooth distributions is
available ([[def-countable-choice]]).

[L5] A manifold is Hausdorff and second countable
([[def-topological-manifold-without-boundary]]).

[L6] Under $\mathrm{AC}_\omega$, every second-countable space is Lindelof
([[thm-second-countable-implies-lindelof]]).

[L7] The connected components of a topological manifold are open and form an
at most countable family
([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]).

[L8] Under $\mathrm{AC}_\omega$, a countable union of at most countable sets is
at most countable ([[thm-countable-union-of-countable]]).

[L9] A connected locally path-connected space is path connected
([[thm-connected-and-locally-path-connected-implies-path-connected]]); in
particular, each plaque is path connected in its Euclidean slice coordinates
([[def-plaque-of-a-flat-chart]]).

[L10] A smooth real-valued function with zero differential is constant on each
connected component
([[prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], restrictions of flat charts to coordinate boxes form an open cover of $M$. By [L5], [L6], and [A2], choose a countable such cover $(U_m,\varphi_m)_{m\in\mathbb N}$. A plaque through a point of $L_p$ lies in $L_p$: [L9] joins its points within the plaque, and its tangent spaces are $\mathcal D$. Hence the plaques of the chosen cover that meet $L_p$ cover $L_p$. [A1, A2, L1, L5, L6, L9, given, choose]

1.2 Let $i:N\to M$ be a connected integral manifold with $i(q)=p$, and put $S=i^{-1}(L_p)$. For $r\in N$, choose a flat-chart domain $U$ about $i(r)$ and let $C$ be the connected component of $i^{-1}(U)$ containing $r$. By [L7], $C$ is an open neighborhood of $r$, and [L3] maps it into one plaque. If $r\in S$, that plaque lies in $L_p$; if $r\notin S$, it lies in a different reachability class. Thus $S$ and its complement are open. Since $N$ is connected and $q\in S$, one has $S=N$, so $i(N)\subseteq L_p$. [A1, L3, L7, given]

2.1 Fix one chosen-cover plaque $P_0$ through $p$. If a chosen-cover plaque $P$ lies in $L_p$, then for each $m$ the components of $P\cap U_m$, viewed in the intrinsic Euclidean-slice topology of $P$, form an at most countable family by [L7]. Applying [L3] to the plaque inclusion shows that each such component lies in one plaque of $U_m$, so $P$ meets at most countably many chosen-cover plaques. By [L8], the same is true across all $m$. Starting from $P_0$, take all neighbors at each finite stage and then the union over the countably many finite stages; [L8] makes the resulting family $\mathscr P_p$ at most countable. Every member lies in $L_p$ by [L9]. Conversely, on each smooth segment of a tangent path the transverse flat-chart coordinates have zero derivative and are constant by [L10], so the path is locally contained in a chosen-cover plaque. Compactness of its parameter interval gives a finite plaque subdivision from $P_0$ to a plaque containing its endpoint. Hence $\mathscr P_p$ covers $L_p$. [A1, A2, L3, L7, L8, L9, L10, step 1.1]

3.1 Give each $P\in\mathscr P_p$ its Euclidean slice coordinates. By [L2], overlapping plaque coordinates have smooth transition maps, so these patches form a smooth atlas. It is countable by step 2.1, and each Euclidean patch has a countable basis, so [L8] makes the induced topology second countable. The inclusion $j_p$ is continuous and injective in these patches; since $M$ is Hausdorff by [L5], distinct points of $L_p$ have disjoint inverse-image neighborhoods, so the induced topology is Hausdorff. It is locally Euclidean by construction. Therefore it is a smooth $k$-manifold, and in plaque coordinates $j_p$ is an injective immersion with tangent image $\mathcal D$. [L2, L5, L8, step 2.1, construct]

4.1 The class $L_p$ is path connected in this topology: a tangent path from $p$ to any of its points admits the finite plaque subdivision used in step 2.1, and is continuous in each plaque chart. Hence $j_p:L_p\hookrightarrow M$ is a connected integral manifold. [A1, step 2.1, step 3.1]

4.2 The equation $j_p\circ\Phi=i$ now forces a unique set map $\Phi:N\to L_p$. For any flat-chart domain $U$, [L3] maps each connected component of $i^{-1}(U)$ into one plaque, and in that plaque chart $\Phi$ has the same coordinate expression as $i$. Hence $\Phi$ is smooth, and uniqueness follows from injectivity of $j_p$. [L3, step 1.2, step 3.1]

4.3 It remains to prove uniqueness of the smooth structure. If $k=0$, every plaque and hence the connected leaf $L_p$ is the singleton $\{p\}$, which has only its unique zero-manifold structure. Assume $k\ge1$ and let another smooth structure on $L_p$ make $j_p$ a connected integral injective immersion. By [L3], every point has a connected neighborhood in that alternative structure whose image lies in one plaque of step 3.1. The coordinate expression of $j_p$ from that neighborhood to the plaque is between $k$-manifolds and has invertible derivative because both tangent images equal $\mathcal D$; [L4] makes it a local diffeomorphism. Thus the alternative charts and the plaque charts are smoothly compatible in both directions, so the structures coincide. [L3, L4, step 2.1, step 3.1]

5.1 Steps 3.1 and 4.1 give the asserted connected integral leaf structure, steps 1.2 and 4.2 give the universal factorization, and step 4.3 proves uniqueness; consequently $L_p$ is the unique maximal connected integral manifold through $p$. [step 1.2, step 3.1, step 4.1, step 4.2, step 4.3] ∎
