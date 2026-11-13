---
id: lem-author-e61520261113-finite-orbit-comparison
kind: lemma
title: Finite equivariant Salvetti and orbit homotopy models
status: draft
domain: mathematics
origin: pipeline
deps:
  - lem-author-e61520261113-invariant-facet-points
  - lem-author-e61520261113-natural-salvetti-cover
  - lem-author-e61520261113-disjoint-cover-translates
  - lem-author-5a1e77100001-order-complex-model
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
  - math:def-homotopy-equivalence
  - math:def-equivariant-map-of-group-actions
  - math:def-paracompact-space
  - math:def-cover-refinement-and-local-finiteness
  - math:thm-heine-borel-rn
  - math:def-cell-attachment-by-a-characteristic-map
  - math:def-quotient-topology
  - math:def-free-group-action
  - math:def-properly-discontinuous-group-action
dependency_roles:
  lem-author-e61520261113-invariant-facet-points: mathematical-premise
  lem-author-e61520261113-natural-salvetti-cover: mathematical-premise
  lem-author-e61520261113-disjoint-cover-translates: mathematical-premise
  lem-author-5a1e77100001-order-complex-model: mathematical-premise
  math:def-cw-complex-with-closure-finiteness-and-weak-topology: mathematical-premise
  math:def-homotopy-equivalence: mathematical-premise
  math:def-equivariant-map-of-group-actions: mathematical-premise
  math:def-paracompact-space: mathematical-premise
  math:def-cover-refinement-and-local-finiteness: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
  math:def-cell-attachment-by-a-characteristic-map: mathematical-premise
  math:def-quotient-topology: mathematical-premise
  math:def-free-group-action: mathematical-premise
  math:def-properly-discontinuous-group-action: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Luis Paris, K(pi,1) conjecture for Artin groups (2014)
      url: https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf
      locator: §2.1, Proposition 2.2, printed pp.376–377
      statement: A paracompact space with an open good cover and a free properly
        discontinuous group action permuting its members, with disjoint
        nonidentity translates of each member, has a free properly discontinuous
        nerve action. An equivariant homotopy equivalence from the nerve to the
        space induces a homotopy equivalence on orbit spaces.
      hypotheses: Paracompact space; contractible nonempty finite cover intersections;
        free properly discontinuous action preserving the cover; U intersect gU
        empty whenever g is nonidentity. No Coxeter hypothesis.
      reading_limits: Read the web-extracted statement and complete proof of
        Proposition 2.2 on printed pp.376–377, and its preceding map
        construction on p.375, in this pass. Import the proposition as stated,
        with an equivariant map and ordinary homotopy equivalences; no
        equivariant inverse or reconstruction of the nerve theorem is claimed.
        No rendered-page inspection or whole-survey reading is claimed.
formulation_deps:
  - lem-author-e61520261113-natural-salvetti-cover
  - lem-author-e61520261113-disjoint-cover-translates
  - lem-author-5a1e77100001-order-complex-model
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
  - math:def-homotopy-equivalence
  - math:def-equivariant-map-of-group-actions
  - math:def-quotient-topology
  - math:def-free-group-action
  - math:def-properly-discontinuous-group-action
argument_deps:
  - lem-author-e61520261113-invariant-facet-points
  - lem-author-e61520261113-natural-salvetti-cover
  - lem-author-e61520261113-disjoint-cover-translates
  - lem-author-5a1e77100001-order-complex-model
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
  - math:def-homotopy-equivalence
  - math:def-equivariant-map-of-group-actions
  - math:def-paracompact-space
  - math:def-cover-refinement-and-local-finiteness
  - math:thm-heine-borel-rn
  - math:def-cell-attachment-by-a-characteristic-map
  - math:def-quotient-topology
  - math:def-free-group-action
  - math:def-properly-discontinuous-group-action
dependency_level: 11
---

## Statement

Let a finite group $G$ act linearly on a finite-dimensional real vector space $E$, preserve a finite arrangement $\mathcal A$ of proper linear hyperplanes, and act freely on $M=(E\times E)\setminus\bigcup_{H\in\mathcal A}(H\times H)$. With the natural good cover and its disjoint translates, there is a $G$-equivariant homotopy equivalence $f:K=\operatorname{Sal}(\mathcal A)\to M$ inducing a homotopy equivalence $\bar f:K/G\to M/G$. Both $K$ and $K/G$ are finite CW complexes, and $K$ uses the incident-pair order-complex convention. Here equivariance means $f(gk)=g f(k)$ for all $g\in G$ and $k\in K$; homotopy equivalence means ordinary homotopy equivalence, as in the comparison proposition. Orbit spaces carry the quotient topology.

## Statement references

[[lem-author-e61520261113-natural-salvetti-cover]]

[[lem-author-e61520261113-disjoint-cover-translates]]

[[lem-author-5a1e77100001-order-complex-model]]

[[math:def-cw-complex-with-closure-finiteness-and-weak-topology]]

[[math:def-homotopy-equivalence]]

[[math:def-equivariant-map-of-group-actions]]

[[math:def-quotient-topology]]

[[math:def-free-group-action]]

## External input

Paris, Proposition 2.2, printed pp.376–377: let $X$ be paracompact with an open cover whose nonempty finite intersections are contractible. Suppose $G$ acts freely and properly discontinuously on $X$, permutes the cover, and $U\cap gU=\varnothing$ for every member $U$ and $g\ne1$. The nerve action is free and properly discontinuous; there is an equivariant homotopy equivalence from its realization to $X$ inducing a homotopy equivalence on orbit spaces. The homotopy equivalences here are ordinary ones; equivariance is required of the map. This general proposition has no Coxeter hypothesis.

## Facts & Assumptions

[F1] Equivariant facet points $x(F)\in F$ satisfying $x(gF)=gx(F)$ exist by [[lem-author-e61520261113-invariant-facet-points]], applied to the finite arrangement and finite linear group in the Statement with $I=E$. Once such points are chosen, the finite invariant open good cover and its equivariant nerve identification with $K$ are supplied by [[lem-author-e61520261113-natural-salvetti-cover]]. Its individual members have disjoint nonidentity translates by [[lem-author-e61520261113-disjoint-cover-translates]], since the diagonal action on $M$ is free. The group acts by order automorphisms on the incident-pair poset, as proved in the cover supplier.

[F2] The order complex is a finite CW complex, with Euclidean closed simplices and their weak topology, by [[lem-author-5a1e77100001-order-complex-model]]. The CW and disk-attachment conventions are [[math:def-cw-complex-with-closure-finiteness-and-weak-topology]] and [[math:def-cell-attachment-by-a-characteristic-map]].

[F3] Paracompactness is the existence of a locally finite open refining cover for every open cover, by [[math:def-paracompact-space]] and [[math:def-cover-refinement-and-local-finiteness]]. Closed bounded subsets of positive-dimensional Euclidean space are compact, without a choice hypothesis, by [[math:thm-heine-borel-rn]].

[F4] Equivariance is the equation in [[math:def-equivariant-map-of-group-actions]], and ordinary homotopy equivalence uses [[math:def-homotopy-equivalence]]. Quotient topologies, quotient maps and saturated sets use [[math:def-quotient-topology]].

[F5] Freeness means $gz=z\Longrightarrow g=1$ for every point $z$, by [[math:def-free-group-action]]. For an action by homeomorphisms, the compact-set convention of [[math:def-properly-discontinuous-group-action]] requires $\{g\in G:gC\cap C\ne\varnothing\}$ to be finite for every compact $C$. For the comparison we also check the disjoint-neighbourhood condition: each $z$ has an open neighbourhood $V$ with $V\cap gV=\varnothing$ for every $g\ne1$. We verify both conditions locally, without identifying the two conventions in general.

[F99] The imported comparison premise is precisely Paris Proposition 2.2 as recorded in External input.

## Proof

**Given:** The finite arrangement and free finite linear action in the Statement, the facet-point and cover inputs [F1], the conventions and compactness input [F2]–[F5], and the independent comparison [F99]. **Goal:** Check its application hypotheses and the finite quotient CW structure.

**Proof technique:** direct.

1.1 Choose Euclidean coordinates on $E\times E\cong\mathbb R^d$. The removed set is a finite union of closed linear subspaces, so $M$ is open and Hausdorff. For $d>0$, choose a nonzero defining linear form $\lambda_H$ for each of the finitely many hyperplanes. Put $\delta(x,y)=\min(\{1\}\cup\{\sqrt{\lambda_H(x)^2+\lambda_H(y)^2}:H\in\mathcal A\})$. This finite minimum is continuous on the ambient space, positive exactly on $M$, and identically $1$ for an empty arrangement. On $M$ set $\rho(z)=\|z\|+1/\delta(z)$. For $t\ge1$, the sublevel $\{\rho\le t\}$ is a closed bounded subset of the closed region $\{\delta\ge1/t\}$, since the formula is continuous there and $\|z\|\le t$. Sublevels for $t<1$ are empty. They are compact by [F3]. Thus $B_n=\{n-1\le\rho\le n+1\}$ is compact and lies in the open set $V_n=\{n-2<\rho<n+2\}$ for each integer $n\ge1$. These bands cover $M$, since $\rho\ge1$. [given, F3]

1.2 Finite-dimensional linear maps and their linear inverses are continuous, so the action on $M$ is by homeomorphisms. For every compact $C\subseteq M$, the set $\{g\in G:gC\cap C\ne\varnothing\}$ is a subset of the finite group $G$ and hence finite. This proves proper discontinuity in the compact-set convention of [F5]. We also verify the disjoint-neighbourhood condition used for the comparison. Average any inner product on $E\times E$ over $G$ to obtain an invariant norm. If $G$ is nontrivial and $z\in M$, freeness under [F5] gives $a=\min_{g\ne1}\|z-gz\|>0$. Choose $r<a/3$ so small that $B(z,r)\subset M$. Invariance gives $gB(z,r)=B(gz,r)$, disjoint from $B(z,r)$ for $g\ne1$ by the triangle inequality. The condition is vacuous for trivial $G$. [given, F5]

2.1 Let $\mathcal O$ be any open cover of $M$ and $d>0$. Fix an enumeration of all balls with rational centers and positive rational radii in $\mathbb R^d$, using integer codes for the finitely many rational coordinates. These balls form a basis: rational grids approximate every coordinate, and one can choose a rational radius between the distance to the chosen center and the remaining radius of any prescribed ball. For each $n$, retain the rational balls contained in $V_n$ and in some member of $\mathcal O$. They cover $B_n$ because $M$, $V_n$ and the members of $\mathcal O$ are ambient-open. Compactness gives a finite subfamily covering $B_n$. Select the subfamily with least finite-subset code; for an empty band select the empty family. This specifies each finite family uniquely, without countable choice or a selection of containing members of $\mathcal O$. Their union covers $M$ and refines $\mathcal O$. Near $z$, continuity gives $\rho<\rho(z)+1$; a selected ball at level $n$ lies in $V_n$, so it can meet this neighbourhood only if $n<\rho(z)+3$. There are finitely many such levels and finitely many selected balls at each level, proving local finiteness. This proves paracompactness under [F3]. If $d=0$, there are no proper hyperplanes, $M$ is a singleton, and its one-member open refining cover proves paracompactness directly. [F3, step 1.1]

3.1 Apply [F1]'s facet-point supplier to choose $x(F)\in F$ for every facet, with $x(gF)=gx(F)$ for every $g\in G$. Use these points in the natural cover construction. By [F1] the cover is invariant and open with contractible nonempty finite intersections and disjoint nonidentity translates of each member. Steps 1.2 and 2.1 give both proper-discontinuity checks in [F5] and paracompactness; freeness in the sense of [F5] is assumed. Hence [F99] applies. Composing its map with the inverse of [F1]'s equivariant nerve homeomorphism yields $f:K\to M$, an equivariant ordinary homotopy equivalence under [F4]. Equivariance makes $\bar f([k])=[f(k)]$ well defined, and the quotient topology makes it continuous. Its homotopy-equivalence assertion and the free nerve action are also supplied by [F99]. [F1, F4, F5, F99, step 1.2, step 2.1]

4.1 The complex $K$ is finite by [F2]. By [F1] a simplex is a finite chain and the group acts by order-preserving simplicial automorphisms. If $g$ maps a simplex to itself, its order-preserving permutation of the finite chain is the identity, so it fixes the vertices and the simplex pointwise. The free action from step 3.1, in the sense of [F5], forces $g=1$. Thus distinct translates of an open simplex are disjoint, and the orbit projection is injective on each open simplex. [F1, F2, F5, step 3.1]

5.1 Write $Q=K/G$ and $q:K\to Q$. The space $K$ is Hausdorff by [F2]. Two distinct orbits are finite disjoint sets. For each pair of points in the two sets take disjoint open neighbourhoods, intersect these for each fixed point, and then take the two respective unions. This produces disjoint open neighbourhoods of the two finite sets, using only finitely many choices. Intersect each neighbourhood with all its $G$-translates; it remains an open neighbourhood of its orbit and is invariant. Their images in $Q$ are open and disjoint. Indeed $q$ is open because $q^{-1}(q(O))=\bigcup_{g\in G}gO$ for open $O$, by [F4]. Hence $Q$ is Hausdorff. [F2, F4, step 4.1]

6.1 Let $K^n$ be the simplicial $n$-skeleton, put $Q^n=q(K^n)$ with the subspace topology, and set $Q^{-1}=\varnothing$. Closed simplices are compact by [F2] and [F3], with a zero-simplex compact directly. Finite unions are compact by taking finitely many finite subcovers. Continuous images are compact by pulling covers back. Thus $K^n$ and $Q^n$ are compact. For $n\ge1$, form the attachment space $A_n$ from $Q^{n-1}$ and one closed $n$-simplex for each simplex orbit, identifying boundary points with their images in $Q^{n-1}$, as in [F2]. Boundaries lie in the preceding skeleton, and their maps are continuous restrictions of $q$. The finite disjoint union and its quotient $A_n$ are compact. Its induced continuous map $A_n\to Q^n$ is bijective: boundaries have exactly the specified identifications in $Q^{n-1}$, while step 4.1 gives precisely one injective interior per orbit. This bijection is a homeomorphism by the following elementary argument. A closed subset of a compact space is compact, since one may add its open complement to a cover. A compact subset of a Hausdorff space is closed: for an outside point, the open sets admitting a disjoint neighbourhood of that point cover the compact subset; a finite subcover and the intersection of the corresponding finitely many neighbourhoods separate it from that point. Therefore a continuous bijection from a compact space to a Hausdorff space maps closed sets to closed sets. Apply this to $A_n\to Q^n$, which is Hausdorff as a subspace of $Q$. This proves the disk-attachment topology on each skeleton. [F2, F3, F4, step 4.1, step 5.1]

7.1 The finite Hausdorff zero-skeleton $Q^0$ is discrete, by separating any one of its points from each of the finitely many other points. In each attachment quotient, the interior of a disk summand is open and saturated, and undergoes no identifications. Its restriction is therefore a homeomorphism onto its image, by [F4], and step 6.1 transports this to $Q^n$. Since $Q^n$ has the subspace topology from $Q$, this also gives the required homeomorphism onto the cell in $Q$. Its characteristic map is the closed-simplex map followed by $q$, with boundary in $Q^{n-1}$. These open cells partition $Q$ by step 4.1. [F2, F4, step 4.1, step 5.1, step 6.1]

8.1 Each characteristic image is compact and hence closed in $Q$ by step 6.1. Density of the simplex interior and continuity show that this image is precisely the closure of its open cell. The characteristic map onto this closed cell is a closed surjection by the same compact-to-Hausdorff argument, hence is a quotient map: a subset with closed preimage is the image of that closed preimage and is closed. Thus a subset $A\subseteq Q$ meets each closed cell in a closed set exactly when its preimage under every characteristic map is closed. By [F4], $A$ is closed exactly when $q^{-1}(A)$ is closed in $K$. The weak topology in [F2] tests the latter on closed simplices; one representative per orbit suffices, since all translates have the same composite with $q$. This is the CW weak topology. There are finitely many simplex orbits, so every cell closure meets finitely many cells. Together with steps 5.1–7.1 this proves that $Q$ is a finite CW complex under [F2]. The same finiteness for $K$ was already supplied by [F2], completing all assertions. [F2, F4, step 4.1, step 5.1, step 6.1, step 7.1] ∎

## Source notes

Paris's comparison is imported independently; its application and the finite quotient CW argument are local. Paracompactness follows from compact Euclidean bands and least finite-subset codes without adding a choice hypothesis. The quotient argument establishes Hausdorffness, disk attachments and the CW topology. The quotient is not asserted to be an abstract simplicial complex.
