---
id: lem-homology-lemma-realizes-handle-bases-by-isotopy
kind: lemma
title: 'Homology lemma: a handle-basis class is realized by a sphere meeting the belt sphere once'
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps:
- prop-relative-handle-chain-complex-of-a-cobordism
- def-attaching-belt-intersection-matrix-of-adjacent-index-handles
- lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers
- thm-high-dimensional-whitney-trick
- thm-whitney-trick-in-the-two-dimensional-borderline-case
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- def-simply-connected
- def-countable-choice
- lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Homology Lemma 1.22, printed pp. 14--15
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §§6--7 (Theorems 7.6 and Lemma 7.7), printed pp. 67--92
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $W$ be a compact
smooth $(n+1)$-manifold with a finite handle decomposition relative to
$\partial_0W$ in which all handles have index $\ge q$, where $2\le q\le n-3$,
and suppose the outgoing boundary $\partial_1W_q$ is simply connected
([[def-simply-connected]]). Let $f:S^q\hookrightarrow\partial_1W_q$ be an
embedded sphere whose class in $C_q=H_q(W_q,W_{q-1};\mathbb Z)$ equals
$\pm[\varphi]$ for the basis element $[\varphi]$ of some $q$-handle $\varphi$
([[prop-relative-handle-chain-complex-of-a-cobordism]]). Then $f$ is isotopic in
$\partial_1W_q$ to an embedding that meets the belt sphere of $\varphi$
transversely in exactly one point and is disjoint from the belt spheres of all
other $q$-handles ([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]).
In the special case that the presentation consists of two adjacent index
classes $q,q+1$, the hypothesis on the class says exactly that the intersection
vector of $f$ with the belt spheres is $\pm$ a standard basis vector.

For $q=2$, also assume that $\pi_1(\partial_0W)\to\pi_1(W_2)$ is injective. In the h-cobordism applications this follows from the incoming homotopy equivalence and the absence of later handles below index three; nullhomotopic $2$-handle attaching circles also suffice.

## Facts & Assumptions

**Given:** A compact smooth $(n+1)$-manifold with all handles of index $\ge q$, $2\le q\le n-3$, simply connected outgoing boundary $\partial_1W_q$, and an embedded sphere $f:S^q\hookrightarrow\partial_1W_q$ with $[f]=\pm[\varphi]$; $\mathrm{AC}_\omega$.

[F1] In the relative handle chain complex the class of a sphere in $C_q$ has intersection coordinates given by the attaching-belt intersection numbers: the local collapse-to-core calculation also applies to the map $H_q(\partial_1W_q)\to H_q(W_q,W_{q-1})$, so the coefficient of a handle in $[f]$ is the signed sum against its belt sphere; transverse representatives are obtained by isotopy ([[prop-relative-handle-chain-complex-of-a-cobordism]], proof step 5.1; [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]]).

[F2] In a connected embedded submanifold of dimension at least two, two distinct points can be joined by embedded arcs in the submanifold avoiding any prescribed finite set ([[lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points]]).

[F3] The high-dimensional Whitney trick removes a pair of transverse intersection points of opposite sign, one for each of two embedded spheres of dimensions $a,b\ge3$ in an ambient manifold of dimension $a+b$, when the Whitney circle is null-homotopic ([[thm-high-dimensional-whitney-trick]]).

[F4] The two-dimensional Whitney construction requires the fixed-sheet complement injection. For the actual $2$-handle belts it follows from the stated incoming injection, by deleting the belts and retracting to the incoming boundary minus the attaching circles. It is not a consequence of simple connectivity of the outgoing level alone. [[lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group]], [[thm-whitney-trick-in-the-two-dimensional-borderline-case]].

## Proof

1.1 Isotope $f$ transverse to the finitely many belt spheres. By [F1] its signed intersection coordinates are $\pm1$ at the distinguished belt and zero at every other belt. Unless the required configuration already holds, one belt therefore has an opposite-sign surplus pair. [F1, given]

2.1 Choose sheet arcs avoiding every other intersection by [F2]. Their circle is nullhomotopic because the outgoing level is simply connected. For $3\le q\le n-3$, both sheet dimensions are at least three and [F3] supplies the Whitney move; choose the disk and tube disjoint from all other spheres by their codimension-at-least-three dimension counts. For $q=2$, [F4] gives the full belt-complement injection from the explicit incoming assumption, fills the shifted circle in that complement and clears all other $2$-sphere attaching images. The helper supplies the clean admissibly framed disk and pair removal. [F2, F3, F4, step 1.1]

3.1 Each move lowers the finite intersection count by two, preserves the other intersections and transports any given normal frame. Iterating leaves one point at the distinguished belt and none at the others, because the signed sums remain $\pm1$ and zero. This proves the stated generic range with its exact $q=2$ condition. [F1, F4, step 2.1] ∎

## Remarks

The wider arbitrary-sphere endpoint $q=n-2$ from the source is not proved by this lemma: it would require an additional argument controlling the complement of the arbitrary codimension-two sphere. Actual two-index h-cobordism attaching spheres admit that control by reversing the handles, and the geometric middle-cancellation lemma proves that endpoint directly.
