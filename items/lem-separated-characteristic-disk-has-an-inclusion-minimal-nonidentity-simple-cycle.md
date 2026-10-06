---
id: lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle
kind: lemma
title: A separated characteristic disk has a minimal nonidentity simple cycle
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-characteristic-disk-center-saddle-index-count, lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit, lem-finitely-cornered-regular-plane-curve-separates-without-choice, lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar, def-holonomy-representation-and-holonomy-group-of-a-leaf, lem-c1-euclidean-maximal-flow-with-c2-upgrade, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-measure-monotonicity, thm-lebesgue-measure-of-a-box-of-every-kind, thm-borel-sets-are-lebesgue-measurable, lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle, thm-heine-borel-rn, lem-c2-saddle-function-has-c1-morse-coordinates, lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs, thm-continuity-from-above-for-measures, lem-c1-planar-fields-on-a-closed-disk-extend-to-a-neighborhood]
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
  - title: Andre Haefliger, Varietes feuilletees (Ann. Scuola Norm. Sup. Pisa 16 (1962) 367-397), complete Numdam
      scan
    url: http://www.numdam.org/item/ASNSP_1962_3_16_4_367_0/
    locator: §4.2, Proposition 4.2, printed pp. 390-392 (the one-sided minimal cycle); the nested-limit and finite-itinerary
      bookkeeping are supplied locally
  - title: S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §6, printed pp. 16-19 (the one-sided limit-cycle quotient)
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). A relative generic
characteristic disk with closed transverse boundary and with distinct singular
images in distinct ambient leaves
([[lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar]])
has an inclusion-minimal simple regular or homoclinic characteristic cycle
whose ambient holonomy germ is nonidentity
([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]). Its bounded
source domain minimizes area among such cycles. The minimum-selection statement
alone does not assert inward identity at a three-sector homoclinic cycle.

## Facts & Assumptions

**Given:** A relative generic characteristic disk $h:D^2\to M$ with closed transverse boundary, characteristic field $X$ with finitely many nondegenerate centers and saddles, and distinct singular ambient leaves.

[F1] Every regular point of the disk lies on a characteristic trajectory; the one-sided limit sets of an orbit with precompact closure are nonempty, compact, connected and invariant, and are either a singleton equilibrium, a single periodic orbit, or consist of finitely many equilibria and saddle-to-saddle connecting trajectories ([[lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit]]).

[F2] A nondegenerate $C^2$ saddle first integral has $C^1$ coordinates in which it is $uv$ ([[lem-c2-saddle-function-has-c1-morse-coordinates]]). Its zero level has four regular $C^1$ half-branches, two incoming and two outgoing for the characteristic direction. A connecting orbit has a compact $C^1$ extension through each saddle endpoint.

[F3] Every bounded regular-cycle disk of the characteristic field contains a center, and strictly inside a one-sector homoclinic disk there is one more center than saddle ([[lem-characteristic-disk-center-saddle-index-count]], [[lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle]]).

[F4] In a short regular flow box an everywhere-transverse section meets any simple periodic characteristic circle at most once. Indeed orient that circle by the field. Its local intersection signs with the section are all equal, whereas successive crossings of a Jordan circle along the section must alternate between its inside and outside. The same argument applies to a simple $C^1$ homoclinic cycle away from its corner, using [F8]. This argument does not presume a period annulus between nonidentity cycles.

[F5] The maximal flow of the $C^1$ field $X$ is jointly $C^1$ and depends uniformly on initial data on compact time intervals ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F6] Closed bounded plane sets are compact ([[thm-heine-borel-rn]]). A decreasing sequence of nonempty compact sets has nonempty intersection: otherwise their open complements cover the first compact set and a finite subcover makes a later set empty.

[F7] Planar Lebesgue measure is sigma-finite, monotone and finite on bounded Borel sets; a Jordan domain is Borel, and a strict inclusion of Jordan domains leaves a nonempty open region of positive measure Finite first measure also gives continuity from above ([[thm-continuity-from-above-for-measures]]). ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[prop-measure-monotonicity]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-borel-sets-are-lebesgue-measurable]]).

[F8] A simple closed piecewise-$C^1$ curve with finitely many corners and distinct one-sided tangents at each corner bounds exactly one bounded component ([[lem-finitely-cornered-regular-plane-curve-separates-without-choice]]).

[F9] Finite plaque transports have a common transverse interval after finitely many shrinkings, and their germs are invariant under leafwise homotopies ([[lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs]], [[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

## Proof

**Proof technique:** direct.

1.1 Call a characteristic cycle **simple** when it is either a regular periodic orbit or a homoclinic orbit through one saddle whose source closure is a simple closed curve, and let its **domain** be the bounded component of the complement of that curve. Its **ambient holonomy** is the holonomy germ of the based leafwise loop obtained by following the cycle once around, in the sense of [[def-holonomy-representation-and-holonomy-group-of-a-leaf]]. Extend X C¹ to a neighborhood of the disk by [[lem-c1-planar-fields-on-a-closed-disk-extend-to-a-neighborhood]], and choose the sign of the characteristic field so it points inward on the transverse boundary; its normal component is nonzero and has one sign there. Begin with an orbit entering the boundary outside the finitely many stable separatrices of the saddles: its positive orbit stays in the compact disk, so [F1] applies to its limit set. [given, F1]

2.1 **A nonidentity simple cycle exists.** The entering orbit cannot converge to a saddle, since it was chosen off the finitely many stable separatrices; nor can a center belong to its limit set, since small invariant center circles cannot be crossed. By [F1], the limit is a periodic orbit or a connected finite saddle graph. Every connecting edge maps into one ambient leaf, and the singular leaves are distinct, so a connected saddle graph has just one vertex, with one or two homoclinic edges by [F2]. Trim each edge by short transverse ports and use one Morse box at the saddle. In that box $uv$ is constant along an orbit; on either fixed nonzero sign, its quadrant arcs pair the incoming ports with the outgoing ports deterministically. Together with the at most two edge strips, this gives a return itinerary of one or two edges. A sufficiently late entering orbit follows one such itinerary repeatedly; it avoids the axes and cannot change its side without crossing a separatrix. The compact edge strips and single target box define one ambient transverse return map H on an interval about the limiting port. At the source port its pulled-back transverse function is a local diffeomorphism, so the source return map is conjugate to H on that approached side. If H were the identity on a neighborhood of the limiting parameter, sufficiently late returns would be periodic, contradicting the nonclosed entering orbit. Thus the limiting word has nonidentity germ. In the two-edge case its word is the product of the two homoclinic lobe words with fixed transport conjugations; if both were identity, so would be their product. Therefore a simple periodic or homoclinic cycle has nonidentity ambient holonomy. [F1, F2, F4, F5, F9, step 1.1]

3.1 **The area infimum and the nested family.** Let $A$ be the infimum of the areas of the bounded domains of all simple cycles with nonidentity ambient holonomy in the unchanged source disk. There are only finitely many singular simple cycles, because each is a homoclinic orbit based at one of the finitely many saddles and each saddle has four local half-branches; if any simple cycle attains $A$, it is already a minimizer and a strictly contained nonidentity cycle would have smaller area by [F7], so it is inclusion-minimal. Otherwise choose regular cycles with domains of area tending to $A$; by $\mathrm{AC}_\omega$ choose one for each $n$ with area below $A+1/n$. By [F3] each bounded regular-cycle disk contains a center, and there are only finitely many centers, so an infinite subsequence of these cycles contains one fixed center $p$. Two regular characteristic circles surrounding $p$ are disjoint and nested, because trajectories do not cross and their bounded Jordan domains both contain $p$; each selected area is strictly above A, and the areas of this subsequence tend to A; recursively take the least later index of strictly smaller area. Nesting then gives closed disks $K_1\supseteq K_2\supseteq\cdots$ with boundaries $C_n=\partial K_n$, areas decreasing to $A$, and each $C_n$ of nonidentity holonomy. [step 2.1, F3, F7]

4.1 **A positive-area limit.** Choose a small invariant center disk $U$ about $p$ whose image lies in one ambient foliation box. Every characteristic circle in $U$ maps into one plaque and has identity ambient holonomy, so none of the $C_n$ lies there. Nor can $C_n$ cross its invariant boundary, by uniqueness of trajectories. Since $U$ is connected, contains $p$ and is disjoint from $C_n$, it lies in the bounded Jordan domain of $C_n$. Thus $K=\bigcap_nK_n$ contains $U$ and has positive area. Each cycle boundary is a finite union of compact C¹ arcs, including its saddle endpoints by F2, and has area zero: on each Lipschitz parametrized arc a partition into n pieces covers it by n squares of side O(1/n), with total area O(1/n). Hence the closed and open cycle domains have the same area. Each $K_n$ is a compact Borel set of finite area; continuity from above in F7 gives $\operatorname{area}(K)=\lim_n\operatorname{area}(K_n)=A$. No nonidentity-germ property was inferred from bare continuity. [F3, F6, F7, F9, step 3.1]

5.1 **The nested boundary limit is a finite graph or circle.** The whole sequence $C_n$ converges in Hausdorff distance to $G=\partial K$. A limit of points of late $C_n$ lies in every $K_j$ and cannot lie in $\operatorname{int}K$, because a ball contained in $K$ is disjoint from every boundary $C_n$. Conversely, for $z\in\partial K$ and any small ball about $z$, choose $w$ in that ball outside $K$. It is outside some $K_j$ and hence all later $K_n$, whereas $z\in K_n$; the segment from $z$ to $w$ meets every later $C_n$ in the ball. Finite covers and compactness give both uniform Hausdorff bounds. A Hausdorff limit of these connected compact circles is connected: two separated compact pieces of $G$ would give disjoint small neighborhoods which every late connected $C_n$ must meet while staying in their union. Flow dependence F5 makes $G$ invariant. At a regular point, each nearby $C_n$ crosses a fixed short section at most once by F4; its limit therefore has exactly one transverse coordinate there and is one local flow arc. A periodic component is consequently open as well as closed in $G$, so connectedness makes it all of $G$. Otherwise a regular orbit in $G$ cannot accumulate at a regular point: repeated visits to its flow box would give distinct intersections with that short section, contradicting the same local one-arc property. Its compact connected alpha- and omega-limits are therefore single equilibria by F1. Centers are excluded by step 4.1 and their invariant local disks. Hence every regular edge ends at saddles, and the finitely many half-branches of F2 give only finitely many edges. Thus $G$ is a regular circle or a finite connected saddle graph. This uses no unsupported hyperspace selection or period-annulus hypothesis. [F1, F2, F4, F5, F6, step 4.1]

6.1 **One saddle and one fixed return germ.** Trim the regular edges of $G$ and put one short transverse section on each. Hausdorff convergence and flow-box projection make every late $C_n$ cross each section; F4 makes it cross exactly once. It stays in a small neighborhood of the finite graph and crosses its finitely many saddle ports, so only finitely many directed itineraries occur. Fix one itinerary on a subsequence. Its closed walk traverses every edge, hence the graph is strongly connected. Each edge maps, including its $C^1$ saddle endpoints, to one ambient leaf: subdivide that compact tangent path into ambient foliation boxes and use the constant transverse coordinate. Distinct singular ambient leaves therefore force a single saddle vertex. Its two outgoing half-branches allow one or two homoclinic edges. Now fix one target foliation box at that saddle, and finite target boxes along the trimmed edges. A passage near the saddle remains in its one box at one transverse level and can be replaced, relative to its endpoints, by a reference plaque path in that level. Finite transport and homotopy invariance F9 give a single return map $H$ on a common interval about zero at a fixed regular target section. The based loop $h(C_n)$ has the germ of this same $H$ at its section parameter $t_n\to0$; it is not a sequence of unrelated return maps. If $H$ were the identity on an interval about zero, it would have identity germ at every sufficiently late $t_n$, contradicting the chosen nonidentity holonomy of $C_n$. Hence the limiting fixed word is nonidentity at zero. For two lobes its word factors as their holonomy words, with the fixed transport conjugations; if both lobe germs were identity their composite would be identity, so at least one lobe is nonidentity. [F2, F4, F9, step 2.1, step 5.1]

7.1 **The limiting cycle and area minimality.** If $G$ is a regular circle or a simple homoclinic loop, then $G$ is a simple cycle with nonidentity word $H$ and domain of area $\operatorname{area}(K)=\lim_n\operatorname{area}(K_n)=A$, so it attains the infimum. If $G$ has two edges, at least one of the two simple lobes has nonidentity word by the factorization in step 2.1; let $L$ be that lobe. Its boundary lies in $G=\partial K$, and its entire bounded Jordan domain is contained in every $K_n$, because $L\subseteq K\subseteq\operatorname{int}K_n$ by strict nesting, while the connected unbounded exterior of $K_n$ lies in the unbounded component of the complement of $L$. The boundary $C_n$ lies in that same component by its exterior collars, so the bounded lobe cannot leave $K_n$; passing to the limit its area is at most $\lim_n\operatorname{area}(K_n)=A$, while by definition of the infimum it is at least $A$, so it equals $A$ and $L$ attains the infimum. [step 6.1, F7, F8]

8.1 **Inclusion-minimality.** Every simple cycle with nonidentity word strictly interior to the minimizer would bound a strictly smaller Jordan domain, since two distinct simple closed curves leaving a nonempty open source region between them give a strict measure inequality [F7]; such a cycle would have area strictly below $A$, contradicting the definition of $A$. Hence the minimizer is inclusion-minimal among the nonidentity simple cycles of the unchanged source disk. The construction used only the countable area-minimizing selection of step 3.1, which uses exactly the stated $\mathrm{AC}_\omega$, and no modification of the disk; all remaining selections are finite. [step 7.1, F7] ∎
