---
id: lem-finite-pl-boundary-spanning-incompressible-surfaces-exist
kind: lemma
title: "Finite PL manifolds admit boundary-spanning incompressible surfaces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-poincare-lefschetz-duality
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-cellular-cochains-compute-cohomology-with-local-coefficients
  - thm-cellular-chains-compute-homology-with-local-coefficients
  - thm-classification-of-compact-connected-surfaces
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Proposition 1.7.16, Proposition 9.1.4, Proposition 9.4.3 and Lemma 9.4.6; the finite PL realization and compression complexity are supplied below."
axiom_use: "Full AC is inherited from the published duality, cohomology and surface-classification suppliers; the finite level-surface construction and least-complexity selection require no further choice."
---

## Statement

Assume full AC. Let $M$ be a compact connected oriented PL three-manifold with a given finite triangulation and nonempty boundary. Assume every interior locally flat PL sphere bounds an interior PL ball, and every properly embedded PL disk cobounds a PL ball with a disk in $\partial M$. Suppose every component $X$ of $\partial M$ has positive genus. For every integral class $\alpha\in H_2(M,\partial M;\mathbb Z)$ there is a compact properly embedded oriented locally flat PL surface representing it, possibly empty, with no sphere or disk components, no compressing disk, and no boundary-compressing disk. A compressing disk has interior disjoint from the surface and essential boundary loop on it; a boundary-compressing disk has boundary one essential proper arc on the surface and one arc on $\partial M$, and interior disjoint from both. Moreover, one can choose $\alpha$ and its representative $S$ so that
$$[\partial S\cap X]\ne0\quad\text{in }H_1(X;\mathbb Z)$$
for every boundary component $X$. Thus this representative meets every boundary component. No conclusion about absence of compressing annuli, pared superincompressibility, or existence of a whole hierarchy is asserted.

## Statement references

[[thm-poincare-lefschetz-duality]]

[[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]

[[thm-cellular-chains-compute-homology-with-local-coefficients]]

[[thm-classification-of-compact-connected-surfaces]]

## Facts & Assumptions

**Given:** The finite PL manifold, orientation, sphere and disk bounding hypotheses, and positive-genus boundary in the Statement.

[A1] Full AC is assumed only as inherited from the following published algebraic-topology suppliers. [[def-axiom-of-choice]]

[F1] Cap duality identifies $H^1(M;\mathbb Z)$ with $H_2(M,\partial M;\mathbb Z)$ and gives the perfect rational intersection pairings on the manifold and its oriented boundary. Its cap-boundary identity identifies the boundary map with boundary intersection, up to the fixed orientation sign. [[thm-poincare-lefschetz-duality]]

[F2] The homology pair sequence is exact. Cellular chains and cochains for the finite triangulation compute ordinary homology and cohomology by taking the constant local system. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]] [[thm-cellular-chains-compute-homology-with-local-coefficients]]

[F3] Compact oriented surfaces have genus and satisfy $\chi=2-2g-b$ with $b$ boundary circles: cap their boundary circles with disks and apply closed-surface classification, then subtract those disks in the Euler characteristic. [[thm-classification-of-compact-connected-surfaces]]

## Proof

**Given:** The data in the Statement, initially with any integral relative class $\alpha$.

1.1 By [F1]–[F2], the cap-dual class of $\alpha$ is represented by an integral simplicial one-cocycle $u$. It gives an explicit map $f:M\to\mathbb R/\mathbb Z$. On an ordered simplex with vertices $v_0,\ldots,v_q$ set $a_0=0$ and $a_i=u([v_0,v_i])$, and map barycentric coordinates $(t_i)$ to $\sum_i t_i a_i$ modulo $\mathbb Z$. The cocycle identity on triangles says $a_j-a_i=u([v_i,v_j])$. Consequently two simplex formulas differ on their common face by an integral constant and agree modulo $\mathbb Z$. They define a continuous finite piecewise-affine circle map. Fix $\theta=1/2$ modulo $\mathbb Z$. Its inverse image in each simplex is a finite union of affine sections $\sum_i t_i a_i=\theta+k$. A section cannot meet a face on which that affine function is constant, because the constant is an integer. At every point of the level set, the smallest simplex containing it therefore has a direction in which the affine function has nonzero derivative. In its finite PL star this direction supplies a transverse coordinate; the incident affine pieces glue to a local product with that coordinate. Thus the sections form a compact locally flat properly embedded PL surface $S$, cooriented by increasing $f$ and oriented by the orientation of $M$. The same local argument in the boundary half-stars gives properness and a boundary collar. [F1, F2, construct, algebra]

1.2 Work now over $\mathbb Q$ and write $V=H_1(\partial M;\mathbb Q)=\bigoplus_X V_X$, with its nondegenerate skew intersection form $\omega$, an orthogonal sum of the positive-dimensional symplectic spaces $V_X$. Let $L$ be the image of $\partial:H_2(M,\partial M;\mathbb Q)\to V$. For $b\in V$, [F1]'s boundary identity gives $\omega(\partial z,b)=\pm\eta(z,i_*b)$, where $\eta$ is the perfect intersection pairing between $H_2(M,\partial M;\mathbb Q)$ and $H_1(M;\mathbb Q)$. Its perfection follows from cap duality and duality of homology and cohomology of a finite vector-space complex. Thus $L^\perp=\ker i_*=L$, the last equality being [F2]. In particular $L$ is isotropic. The projection of $L$ onto every $V_X$ is nonzero: otherwise $V_X\subseteq L^\perp=L$, contradicting isotropy because the intersection form on the positive-genus $X$ is nondegenerate. [F1, F2, given, algebra]

2.1 The signed intersection of an oriented edge with this level surface is $u$ on that edge: an affine lift changes by precisely that integer, and its crossings of $\theta+\mathbb Z$ count the change with sign. After subdividing a loop into simplex segments, the same telescoping count gives its total winding under $f$. The intersection cocycle of $S$ therefore represents $[u]$. Cap duality in [F1], equivalently its local oriented dual-cell formula after subdivision, identifies its relative fundamental class with $[u]\cap[M,\partial M]=\alpha$. Hence every integral relative class has an actual finite PL surface representative, without a smooth approximation or a regular-value theorem being assumed for a merely PL map. [F1, step 1.1, algebra]

3.1 A sphere component of a representative is relatively nullhomologous by the ball hypothesis. A disk component is likewise relatively nullhomologous: its union with the specified disk in $\partial M$ bounds the specified ball. Delete these components. Among all resulting representatives of $\alpha$ with neither type of component choose one minimizing, lexicographically, the nonnegative integer triple $(d,g,a)=\left(\sum_T\max(0,-\chi(T)),\ \sum_Tg(T),\ \#\{T:T\text{ is an annulus}\}\right)$. Such a minimum exists: choose the least occurring $d$, then the least occurring $g$ at that $d$, then the least occurring $a$. Empty representatives are allowed. No sequence of dependent choices or minimization of a real quantity is used. [F3, given, step 2.1, construct]

4.1 Compression along a compressing disk or boundary-compressing disk preserves the integral relative homology class. Take the disk's small oriented product neighborhood and replace the incident surface strip by the other boundary faces of that neighborhood; the difference is its oriented boundary, together in the boundary-compression case with a strip lying in $\partial M$. The new surface is properly embedded and oriented. Delete any resulting disk and sphere components as in step 3.1. The Euler characteristic computation in [F3] shows that its triple is strictly smaller. For a component with negative Euler characteristic, an interior compression increases Euler characteristic by two before discarding disks or spheres, and a boundary compression increases it by one; essentiality of the compression excludes a sphere or disk split off by an inessential curve or a boundary-parallel arc. If a boundary-parallel essential loop splits off a disk, the remaining component still has Euler characteristic larger by one. Thus $d$ strictly decreases in these negative-Euler cases. The only original orientable components with Euler characteristic zero are tori and annuli. A torus compression produces a sphere and decreases $g$ while leaving $d$ zero; an annulus compression or essential boundary compression produces disks and decreases $a$ without increasing $d$ or $g$. These cases exhaust [F3]. Each possible compression therefore contradicts the minimum in step 3.1. The selected representative has neither kind of compressing disk. [F3, step 3.1, construct, algebra]

5.1 Choose finitely many integral image classes $l_1,\ldots,l_k$ so that $l_j$ projects nontrivially to the $j$th boundary summand. They exist by step 1.2 and clearing rational denominators in the finite integral chain complexes. The vector polynomial $l(t)=\sum_{j=1}^k t^j l_j$ has a nonzero projection polynomial on every boundary summand: its coefficient at the corresponding $t^j$ is nonzero there. A nonzero vector polynomial over $\mathbb Q$ vanishes at only finitely many rational numbers, by applying a linear coordinate functional that has a nonzero coefficient. Choose an integer $t$ outside the finite union of these zero sets. Then $l(t)$ is an integral boundary image whose projection to every $H_1(X;\mathbb Z)$ is nonzero; these surface groups are torsion-free. Lift it to an integral relative class $\alpha$ and apply steps 1.1, 2.1, 3.1 and 4.1. Relative homology preservation gives $[\partial S]=\partial\alpha=l(t)$, so the resulting incompressible and boundary-incompressible surface meets every boundary component in the asserted nonzero class. This proves the two claims and introduces no assertion about compressing annuli or further hierarchy cuts. [F1, step 1.1, step 2.1, step 3.1, step 4.1, step 1.2, construct, algebra] ∎
