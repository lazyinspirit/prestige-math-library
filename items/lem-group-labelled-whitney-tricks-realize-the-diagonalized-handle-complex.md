---
id: lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex
kind: lemma
title: Group-labelled Whitney tricks realize the diagonalized handle complex
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 14
deps:
- lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy
- def-middle-handle-intersection-matrix-of-an-h-cobordism
- def-based-handle-chain-complex-over-the-fundamental-group-ring
- thm-handle-cancellation
- def-geometric-cancelling-handle-pair
- lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type
- thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary
- def-h-cobordism
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- thm-whitney-trick-in-the-two-dimensional-borderline-case
- def-countable-choice
- lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group
- thm-handle-duality-from-negating-a-morse-function
- lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels
- lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
provenance:
  statement: ai-altered
  proof: ai-altered
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete
      author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1 §1.4, proof of Lemma 1.27(1), printed pp. 19--20
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)
    url: https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf
    locator: "The proof of Theorem 8.33, printed pp. 184--185; PDF pages 192, 193"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a nonempty connected smooth
h-cobordism of dimension $n+1\ge6$ and let $2\le q\le n-2$. Suppose a handle
presentation of $(W,M_0)$ has handles only in degrees $q$ and $q+1$, with equal
numbers $c$, and intersection matrix
$\operatorname{diag}(\pm g_1,\dots,\pm g_c)$ with $g_i\in\pi_1(M_0)$. Then $W$
admits a handle presentation relative to $M_0$ with no handles at all: the
attaching embeddings can be isotoped so that the $i$-th $(q+1)$-handle meets
exactly the belt sphere of the $i$-th $q$-handle, in a single transverse point,
and is disjoint from all other belt spheres; the $c$ geometrically cancelling
pairs are then removed by the handle cancellation theorem. Consequently $W$ is
diffeomorphic to $M_0\times[0,1]$ relative to $M_0$.

## Facts & Assumptions

**Given:** A nonempty connected smooth h-cobordism $(W;M_0,M_1)$ of dimension $n+1\ge6$, an index $2\le q\le n-2$, and a two-index presentation with handles $e_1,\dots,e_c$ of index $q$ and $f_1,\dots,f_c$ of index $q+1$ whose intersection matrix is $\operatorname{diag}(\pm g_1,\dots,\pm g_c)$.

[F1] For $2\le q\le n-3$, the corrected group-labelled homology lemma realizes a unit column by an attaching-sphere isotopy. When $q=2$, its incoming fundamental-group injection follows from the h-cobordism condition. [[lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy]], [[lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group]]

[F2] In the based handle complex of a two-index presentation the class of the attaching sphere of the $i$-th $(q+1)$-handle is the $i$-th column of the intersection matrix, so for a diagonal matrix it is $[\varphi_i]\cdot(\pm g_i)$, a unit multiple of the class of the $i$-th $q$-handle ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[def-middle-handle-intersection-matrix-of-an-h-cobordism]]).

[F3] Isotoping an attaching embedding changes the presented manifold only up to a diffeomorphism relative to $\partial_0W$, and a pair of a $q$-handle and a $(q+1)$-handle whose attaching sphere meets the belt sphere of the $q$-handle transversely in exactly one point is geometrically cancelling and can be deleted, with the cancellation diffeomorphism carrying the remaining attaching data along ([[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]], [[thm-handle-cancellation]], [[def-geometric-cancelling-handle-pair]]).

[F4] A presentation of an h-cobordism relative to $M_0$ with no handles exhibits $W$ as diffeomorphic to $M_0\times[0,1]$ relative to $M_0$ ([[thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary]], [[def-h-cobordism]]).

[F5] At original $q=n-2$, the upper handles have index $n-1$ and become dual $2$-handles. Their belts are the original attaching spheres, so the reversed h-cobordism belt-complement lemma applies to their union. [[thm-handle-duality-from-negating-a-morse-function]], [[lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group]]

[F6] A zero signed group-label sum, or a unit signed label sum with surplus points, contains opposite-sign equal-label pairs. Their two-sheet arc loop is null when labels computed with paths compatible with those arcs agree; this is the orientation-free clause of the label supplier. The signed coefficients are the lifted local core/normal incidence coefficients of [F2], without an assumption of global orientability. [[lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels]], [[lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle]], [[lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points]]

## Proof

1.1 Suppose first $2\le q\le n-3$. Each attaching sphere has the unit-column class of [F2]. The incoming fundamental group maps isomorphically to the trace through the $q$-handles: its later handles have index $q+1\ge3$ and the incoming h-cobordism inclusion is an isomorphism. Thus the $q=2$ condition of [F1] holds. Apply the homology lemma to each attaching sphere, choosing its disks and tubes disjoint from all other attaching spheres as allowed by $2+q-n\le-1$. Those spheres and the previously arranged intersections stay fixed. Isotopy transports the attaching framings and [F3] carries the later data without changing $W$ relative to $M_0$. [F1, F2, F3, given]

1.2 For $q=n-2$, read the same middle level from $M_1$. By [F5] it is the outgoing level of the dual $2$-handles, whose belt spheres are exactly the original attaching spheres $A_1,\ldots,A_c$. The reversed h-cobordism supplies the required incoming injection, so their full complement has the same fundamental group as the level. For any surplus intersection pair of $A_i$ with an original belt $B_j\cong S^2$, [F6] gives opposite signs and equal labels, hence a null Whitney circle. Choose its arcs to avoid all intersections with the other spheres. Exchange the two sheets and apply the helper's $2$-sphere construction to the moving $B_j$ and fixed $A_i$, with disk interior in the complement of every $A_l$ and also avoiding every other $2$-sphere $B_l$. Equality of labels and opposite signs survive the sheet exchange: the label convention is inverted with common whisker factors, and the orientation interchange factor is $(-1)^{2(n-2)}=1$. [F5, F6, given]

2.1 Let $H_t$ be that compactly supported auxiliary ambient isotopy of $B_j$, with the $A_i$ comparison fixed. Replace only the attaching sphere $A_i$ by $H_t^{-1}(A_i)$ and keep all original belts fixed. At time one, $H_1^{-1}(A_i)\cap B_j=H_1^{-1}(A_i\cap H_1(B_j))$, so precisely the chosen pair disappears. Its tube avoids every other $A_l$ and $B_l$, so the other attaching spheres stay disjoint and no other intersection changes. The inverse is an ambient isotopy and transports the attaching frame. Repeat for every surplus pair; the finite signed-label sums leave one point at each diagonal belt and none elsewhere. This is the flipped move in the actual two-index handle context, not a complement assertion about an arbitrary codimension-two sphere. [F2, F3, F5, F6, step 1.2]

3.1 In either case each $q$-handle and its corresponding $(q+1)$-handle is now geometrically cancelling. By [F3] delete the pairs finitely, transporting the remaining attaching data. The empty presentation gives $M_0\times[0,1]$ relative to $M_0$ by [F4]. Thus both the original attaching-isotopy conclusion and the full range $2\le q\le n-2$ are retained. [F3, F4, step 1.1, step 2.1] ∎
