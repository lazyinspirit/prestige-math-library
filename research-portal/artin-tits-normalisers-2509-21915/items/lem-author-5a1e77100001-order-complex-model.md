---
id: lem-author-5a1e77100001-order-complex-model
kind: lemma
title: The Salvetti order complex and its finite CW case
status: published
domain: mathematics
origin: pipeline
deps:
  - def-author-5a1e77100001-sign-facets
  - math:def-cell-attachment-by-a-characteristic-map
  - def-author-5a1e77100001-salvetti-poset
  - math:def-abstract-simplicial-complex
  - math:def-geometric-realization-of-an-abstract-simplicial-complex
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
dependency_roles:
  def-author-5a1e77100001-sign-facets: mathematical-premise
  math:def-cell-attachment-by-a-characteristic-map: mathematical-premise
  def-author-5a1e77100001-salvetti-poset: mathematical-premise
  math:def-abstract-simplicial-complex: mathematical-premise
  math:def-geometric-realization-of-an-abstract-simplicial-complex: mathematical-premise
  math:def-cw-complex-with-closure-finiteness-and-weak-topology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
---

## Statement

For the poset $P(\mathcal A)$ in *The incident facet and chamber poset*, take as simplices the empty set and the nonempty finite chains. They form an abstract simplicial complex in the sense of *An abstract simplicial complex*. Define $\operatorname{Sal}(I,\mathcal A)$ to be its geometric realization with the weak topology of *The geometric realization of an abstract simplicial complex*. Its open simplices give a CW complex in the sense of *CW complex with closure finiteness and weak topology*. If $\mathcal A$ is finite, this complex is finite.

## Statement references

[[def-author-5a1e77100001-salvetti-poset]]

[[math:def-abstract-simplicial-complex]]

[[math:def-geometric-realization-of-an-abstract-simplicial-complex]]

[[math:def-cw-complex-with-closure-finiteness-and-weak-topology]]

## Facts & Assumptions

[F1] The incident pairs and their order are defined in [[def-author-5a1e77100001-salvetti-poset]].

[F2] Abstract simplicial complexes include the empty simplex and are closed under subsets: [[math:def-abstract-simplicial-complex]]. Their realization uses finite-support barycentric functions and the weak topology on Euclidean simplices: [[math:def-geometric-realization-of-an-abstract-simplicial-complex]].

[F3] A CW complex is Hausdorff, has a discrete zero-skeleton and is built by disk attachments to successive skeleta, with closure finiteness and the weak topology: [[math:def-cw-complex-with-closure-finiteness-and-weak-topology]].

[F4] Facets are nonempty fibers of the simultaneous sign map, and chambers are the fibers with no zero signs: [[def-author-5a1e77100001-sign-facets]].

[F5] Attaching disks along their boundaries means taking the quotient of the disjoint union of the preceding skeleton and the disks by the boundary identifications, as in [[math:def-cell-attachment-by-a-characteristic-map]].

## Proof

**Given:** the poset and arrangement in the Statement, with the conventions of [F1] and [F4].

**Proof technique:** direct.

**Goal:** establish the chain complex, all the CW conditions and finiteness for a finite arrangement.

1.1 Put $V=P(\mathcal A)$ and let $K$ consist of the empty set and its nonempty finite chains. Every subset of a finite chain is a finite chain or empty, and every vertex is a singleton chain. Thus $(V,K)$ meets the abstract simplicial complex definition. Write $X=|K|$ for its weak realization. [F1, F2]

2.1 For each vertex $v$, the coordinate function $a_v:X\to[0,1]$, $a_v(\alpha)=\alpha(v)$, is continuous: its restriction to every Euclidean simplex is continuous, so inverse images of open sets are open by the weak topology. Distinct points differ at some coordinate; inverse images of disjoint open intervals about those coordinate values are disjoint open neighbourhoods. Thus $X$ is Hausdorff. Simplex inclusions are continuous by the same weak-topology definition, and their inverse barycentric coordinate maps are continuous by the coordinate functions. Hence every simplex has its Euclidean topology as a subspace of $X$. [F2, step 1.1]

3.1 For a nonempty chain $\sigma$ of size $p+1$, the points of support exactly $\sigma$ form its open simplex $e_\sigma$. These sets partition $X$. The set $|\sigma|$ is closed in $X$: it is the intersection of the coordinate zero sets for vertices outside $\sigma$. Since $e_\sigma$ is dense in its Euclidean simplex, its closure in $X$ is exactly $|\sigma|$. The standard $p$-simplex is a closed $p$-disk with boundary the union of its proper faces, giving the required disk characteristic map and an interior homeomorphism onto $e_\sigma$. [F2, step 2.1]

4.1 Define $X^{-1}=\varnothing$ and let $X^p$ be the union of the simplices of dimension at most $p$. These form an increasing filtration with union $X$, since every point has finite support. The subspace topology on $X^p$ is the weak topology on those simplices. Indeed, if $B\subseteq X^p$ has closed intersection with each of them, then for any simplex $\tau$ of $K$, $B\cap|\tau|$ is the finite union of the closed sets $B\cap|\sigma|$ over the faces $\sigma\subseteq\tau$ of dimension at most $p$. Each such face is closed in $|\tau|$, so the weak topology makes $B$ closed in $X$, hence in $X^p$. Conversely, a set closed in $X^p$ has closed intersection with each of its simplices by continuity of inclusion. For $p=0$, every subset meets each vertex simplex in a closed set, so every subset of $X^0$ is closed and $X^0$ is discrete. [F2, step 2.1, step 3.1]

5.1 For $p\geq1$, take the disjoint union of $X^{p-1}$ and a closed $p$-simplex for each $p$-dimensional simplex of $K$, and identify every boundary point with the same barycentric point in $X^{p-1}$. Face inclusions give continuous attaching maps. The resulting map onto $X^p$ identifies exactly these points, since distinct $p$-simplex interiors have distinct supports. A subset of $X^p$ has closed preimage in this disjoint union exactly when its intersection with $X^{p-1}$ and with each $p$-simplex is closed. By the preceding skeleton criterion, this is exactly closedness in $X^p$. The map therefore has the quotient topology, proving that each skeleton is obtained by the disk attachments required in [F5]. [F5, step 3.1, step 4.1]

6.1 The closure $|\sigma|$ of each cell meets precisely its finitely many nonempty face cells. This proves closure finiteness. Closedness in $X$ is tested on all the Euclidean simplices by [F2]; these are exactly the closed cells with their subspace topology. This proves the CW weak-topology condition. Together with Hausdorffness, the discrete zero-skeleton and the disk attachments, all conditions in [F3] hold. [F2, F3, step 2.1, step 3.1, step 4.1, step 5.1]

7.1 If $|\mathcal A|=n$, distinct facets have distinct sign vectors in $\{-,0,+\}^{\mathcal A}$, and distinct chambers have distinct sign vectors in $\{-,+\}^{\mathcal A}$, by their fiber definitions. Thus there are at most $3^n$ facets and $2^n$ chambers, and at most $6^n$ incident pairs. A finite vertex set has finitely many subsets, hence finitely many chains and cells. This also includes $n=0$, since the sign map then has the single nonempty fiber $I$, which is also its single chamber. [F1, F4, step 1.1, step 6.1] ∎

## Source notes

This is the simplicial convention of Paris §3.1, printed p.386, rather than the unsubdivided regular CW convention. No homotopy equivalence to the complement is proved by the elementary construction here.
