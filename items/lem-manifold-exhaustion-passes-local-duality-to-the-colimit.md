---
id: "lem-manifold-exhaustion-passes-local-duality-to-the-colimit"
kind: "lemma"
title: "A manifold exhaustion passes duality to the colimit"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-topological-manifold-with-and-without-boundary","thm-heine-borel-rn","thm-locally-compact-hausdorff-basics","def-axiom-of-choice","lem-cap-duality-passes-to-increasing-open-unions","lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls","def-compactly-supported-singular-cohomology-of-a-locally-compact-space","thm-excision-for-singular-cohomology"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, proof of Theorem 3.35, pp.245–248
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: Miller, Lectures on Algebraic Topology, Lecture 36
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. Every Hausdorff second-countable $n$-manifold $M$ has open sets $U_1\subseteq U_2\subseteq\cdots$ with
$$M=\bigcup_{j\ge1}U_j,\qquad \overline{U_j}\subset U_{j+1},\qquad \overline{U_j}\text{ compact},$$
where each $U_j$ is a finite union of relatively compact coordinate balls. For a manifold with boundary this phrase includes coordinate half-balls at boundary points, that is, inverse images of $B_r(x)\cap\mathbb R^n_+$ inside a chart; for a boundaryless manifold only ordinary coordinate balls are needed. The containment need not be strict.

For a commutative unital ring $R$, extension and inclusion give
$$\varinjlim_jH_c^p(U_j;R)\cong H_c^p(M;R),\qquad \varinjlim_jH_q(U_j;R)\cong H_q(M;R).$$
If $M$ is boundaryless and $R$-oriented, these identifications carry the colimit of the stage cap-duality maps to $D_M$. Thus compatible stage duality isomorphisms give an isomorphism on $M$; in particular the preceding finite-union theorem supplies these stages. AC is used to select coordinate neighborhoods for the eligible members of a countable basis and, for this last duality consequence, in the earlier local UCT proof.

## Facts & Assumptions

[F1] [[def-topological-manifold-with-and-without-boundary]] supplies the countable basis and local Euclidean or half-space charts, including the zero-dimensional convention.

[F2] [[thm-heine-borel-rn]] makes closed bounded coordinate balls and their intersections with a closed half-space compact.

[F3] [[thm-locally-compact-hausdorff-basics]] gives relative compactness and its open-subspace form once local compactness is established.

[F4] [[def-axiom-of-choice]] permits a simultaneous choice from the neighborhood sets indexed by eligible basis members.

[F5] [[lem-cap-duality-passes-to-increasing-open-unions]] proves both colimit identifications for boundaryless oriented manifolds and the cap compatibility, with no extra choice.

[F6] [[lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls]] gives cap isomorphisms on each finite union of ordinary coordinate balls, assuming AC only through local UCT.

[F7] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] gives relative-support representatives and common-support equality. [[thm-excision-for-singular-cohomology]] identifies a relative group supported in a compact subset of an open subspace with its ambient group.

## Proof

**Given:** $M,n,R$ and AC. Fix a countable basis. List its members as $B_1,B_2,\ldots$, permitting repetitions or empty padding if the basis is finite; if $M$ is empty use only empty members. Such a list is part of being at most countable: an injection of the basis into the natural numbers assigns its unique member at an occupied index and the empty set otherwise.

1.1 Every point has arbitrarily small coordinate balls or half-balls with compact closure. In a chart take a radius whose closed Euclidean ball, intersected with the half-space when appropriate, lies inside the chart image and inside the desired open neighborhood. Such a radius exists by openness in the model. The closed model ball is compact by [F2], its inverse image is compact because an open cover pulls back under the chart map, and it is closed in $M$ because $M$ is Hausdorff. The latter implication follows by separating a point outside a compact set from each of its points and taking a finite subcover of those neighborhoods. Thus this inverse image contains the closure in $M$ of the open coordinate ball and is itself that closure, since the open ball is dense in the closed model ball. This proves local compactness and makes [F3] applicable. For boundaryless $M$, [F1] lets the chart be taken Euclidean; for $n=0$ the coordinate ball is one point. [F1, F2, F3, given]

2.1 Call index $i$ eligible when $B_i$ is nonempty and is contained in a relatively compact coordinate ball of the type in step 1.1. For each eligible $i$, the set of such neighborhoods is a nonempty set of open subsets of $M$. Use [F4] to select one $V_i$ containing $B_i$. For an ineligible index set $V_i=\varnothing$. These neighborhoods cover $M$: for any $x$, step 1.1 gives a coordinate neighborhood $V$ of the required type; the basis gives an index $i$ with $x\in B_i\subset V$. That index is eligible, so $x\in V_i$. No chart is selected for every point. The sole infinite selection in this construction is the family $V_i$ over the eligible countable index set. [F1, F4, step 1.1]

3.1 Put $W_k=V_1\cup\cdots\cup V_k$. Its closure is the finite union of the compact closures of the $V_i$, hence compact: the finite union is closed and contains $W_k$, while each closure lies in the closure of $W_k$; finite subcovers show compactness. The $W_k$ increase and cover $M$. Any compact subset of $M$ is contained in some $W_k$, by a finite subcover and the maximum of its indices. Set $N_1=1$. Given $N_j$, let $N_{j+1}$ be the least integer $k\ge\max(N_j+1,j+1)$ with $\overline{W_{N_j}}\subset W_k$. Existence follows from the just-proved compact containment. Defining $U_j=W_{N_j}$ gives the compact-closure nesting, and $N_j\ge j$ ensures the $U_j$ still cover $M$. Recursion uses uniquely specified least integers and needs no further choice. [step 2.1]

4.1 For completeness the two colimit identifications do not need orientation or absence of boundary. Every compact support $K\subset M$ lies in some $U_j$ by the same finite-subcover argument. By [F7], restriction identifies $H^p(M,M\setminus K;R)$ with $H^p(U_j,U_j\setminus K;R)$: excise the closed set $M\setminus U_j$, contained in the open set $M\setminus K$. The inverses define extension and commute with enlargement of supports. A compact-support class on $M$ therefore comes from one stage. If a stage class becomes zero on $M$, [F7] witnesses this at a larger compact support $L$, contained in a later $U_k$; excision there proves the stage class already zero in that later stage. The common-stage representative construction of a sequential colimit, explicitly given in [F5], now proves the first canonical isomorphism. [F5, F7, step 3.1]

4.2 A finite singular cycle on $M$ has image in one $U_j$: its support is a finite union of continuous images of compact simplices, using [F2], and hence is compact. Thus its class comes from stage homology. If a stage cycle bounds in $M$, one finite bounding chain also has support in a later $U_k$, so the class vanishes in that stage. The same common-stage criterion proves the second canonical isomorphism. This argument includes ordinary $H_0$ and the zero complexes in negative degrees, and invokes no exactness theorem about filtered colimits. [F2, F5, step 3.1]

5.1 If $M$ is boundaryless and oriented, [F5] identifies $D_M$ with the colimit map and proves that stagewise isomorphisms give an isomorphism. The particular $U_j$ in step 3.1 are finite unions of ordinary coordinate balls, so [F6] proves those isomorphisms. Its only further AC use is the local UCT construction with free cycle/boundary modules, projections and comparison lifts. Nothing here asserts absolute cap duality on manifolds with boundary: their exhaustion and the two colimit identifications hold, while the stated cap consequence has the explicit boundaryless hypothesis. [F4, F5, F6, step 3.1, step 4.1, step 4.2]

6.1 If $M$ is empty every $U_j$ is empty, so all claims hold with zero groups. If $M$ is compact, its cover by the $W_k$ has a finite subcover, so some $W_k=M$ and the exhaustion is eventually constant. This explains why nesting is not required to be proper. A point and finite zero-dimensional manifolds are included. For the zero ring all maps are the unique maps of zero modules. The colimit and cap statements hold for all degrees, including $p=0,n$ and negative indices under the stated conventions. Degenerate simplices still have compact image. The countable neighborhood selection of step 2.1 is expressly covered by AC; all subsequent choices are finite or least-index constructions. [F1, F2, F4, F5, step 3.1, step 4.1, step 4.2, step 5.1] ∎
