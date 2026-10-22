---
id: lem-relative-pl-homology-classes-have-superincompressible-representatives
kind: lemma
title: "Relative PL homology admits superincompressible representatives"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-finite-pl-boundary-spanning-incompressible-surfaces-exist
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - thm-classification-of-compact-connected-surfaces
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael Kapovich, Hyperbolic Manifolds and Discrete Groups"
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: "Chapter 1, Definitions 1.10–1.13, printed pp.4–5, compressing annuli and superincompressibility; the relative-class minimization proof is supplied below."
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Proposition9.4.3 and Lemma9.4.6, printed p.297, ordinary incompressible representatives and spanning classes; annular refinement is supplied locally."
axiom_use: "The standing full AC of the integral-class realization supplier is retained; the additional minimization is over a well-ordered finite tuple of nonnegative integers and adds no choice principle."
---

## Statement

Assume full AC, and let $M$ satisfy the hypotheses of the finite PL boundary-spanning surface lemma: it is compact, connected and oriented with a given finite triangulation, every interior PL sphere bounds an interior PL ball, every proper PL disk cobounds a ball with a disk in the boundary, and all boundary components have positive genus. A compressing annulus for a properly embedded surface $S$ is a locally flat embedded PL annulus $A$ with one boundary circle $\gamma$ on $S$, its other boundary circle on $\partial M$, interior disjoint from $S\cup\partial M$, injective map $\pi_1(A)\to\pi_1(M)$, and $\gamma$ not isotopic in $S$ to a component of $\partial S$. Every integral class in $H_2(M,\partial M;\mathbb Z)$ has an oriented properly embedded PL representative, possibly empty, with neither sphere nor disk components, no compressing disks, no boundary-compressing disks, and no compressing annuli. Such a surface is superincompressible in the stated sense. One may choose the class so that its representative meets every boundary component in a nonzero integral boundary homology class. This conclusion is existence of a single surface family, not finite hierarchy termination or a theorem about prescribed pared-boundary markings.

## Statement references

[[lem-finite-pl-boundary-spanning-incompressible-surfaces-exist]]

[[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

[[thm-classification-of-compact-connected-surfaces]]

## Facts & Assumptions

**Given:** The finite PL manifold and a relative integral class $\alpha$.

[F1] Integral relative classes have actual oriented PL surface representatives. Sphere and disk components may be deleted without changing the class under the stated ball hypotheses; ordinary compressions and boundary compressions preserve the class. A class with nonzero projection to every boundary component exists. [[lem-finite-pl-boundary-spanning-incompressible-surfaces-exist]]

[F2] A nullhomotopic embedded polygonal circle on an oriented finite PL surface bounds a PL disk. Surface genus satisfies $\chi=2-2g-b$. [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]] [[thm-classification-of-compact-connected-surfaces]]

[F3] A compact locally collared PL face has a PL collar. Cutting along the two locally defined sides and applying this collar construction supplies the two-sided product neighborhood of an oriented locally flat annulus in an oriented three-manifold; the end charts are relative product charts along the indicated surfaces. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

## Proof

**Given:** The data in the Statement.

1.1 For a representative $S$ with disk and sphere components deleted, let $D=\sum_T\max(0,-\chi(T))$, let $G$ be its total genus, let $B_-$ count boundary circles only on components with negative Euler characteristic, and let $a$ count annulus components. If $c_-$ is the number of negative-Euler components and $G_-$ their total genus, then [F2] gives $B_-=2c_--2G_-+D\le3D$, since each negative-Euler component contributes an integer at least one to $D$. Therefore $q=3D-B_-$ is nonnegative. Among all representatives of $\alpha$ supplied by [F1], choose one minimizing lexicographically $(D,G,q,a)\in\mathbb N^4$. This is legitimate by four successive least-element choices in subsets of $\mathbb N$, including when $\alpha=0$ and the empty representative is minimal. [F1, F2, construct, algebra]

2.1 This representative has no ordinary or boundary-compressing disk. The local product-neighborhood surgeries of [F1] preserve its relative class. On a negative-Euler component each such surgery, after deleting disk and sphere components, strictly decreases $D$: an interior compression increases Euler characteristic by two, or by one on the remaining component if a disk is split off; a boundary compression increases it by one, and an essential separating arc cannot split off a disk. On a torus, compression removes the torus and decreases $G$ with $D$ unchanged. On an annulus, an ordinary or essential boundary compression yields disks and decreases $a$ with $D,G,q$ unchanged. The Euler computations are those of [F2]. Every case contradicts the minimum. Thus the representative is incompressible and boundary-incompressible. [F1, F2, F3, step 1.1, construct, algebra]

2.2 Suppose it has a compressing annulus $A$. Its inner circle $\gamma$ is nontrivial in $\pi_1(M)$ by the asserted annulus injection, hence is nontrivial in $\pi_1(S)$ and bounds no disk there by [F2]. By [F3], take a small PL product neighborhood $A\times[-\epsilon,\epsilon]$, with $A$ coordinatized by $(\theta,s)$, the inner end at $s=0$ and the boundary end at $s=1$. Near its inner end $S$ is the annular strip in coordinates $(\theta,r)$ at $s=0$. Remove that strip and replace it by the two annuli at $r=\pm\epsilon$, extending in the $s$ direction to $\partial M$. The annulus interior misses $S\cup\partial M$, so sufficiently small such pushes are embedded, mutually disjoint and miss the remainder of $S$. Smoothness is unnecessary; subdividing the finite product cells gives the PL surgery. The coorientation of $S$ gives consistent orientations on these annuli. The old and new surfaces differ by the oriented boundary of this neighborhood, except for its outer-end strip in $\partial M$; thus the new surface has the same class $\alpha$. Topologically each new component is a component of $S$ cut along $\gamma$, with boundary collars attached. In particular total Euler characteristic is unchanged. [F1, F2, F3, step 1.1, construct, algebra]

3.1 If $\gamma$ separates a negative-Euler component, neither resulting component is a disk because $\gamma$ is essential, and neither is an annulus because that would make $\gamma$ parallel to an original boundary component. Both resulting components therefore have negative Euler characteristic. Their total genus and negative Euler characteristic equal the original totals, while their number of boundary circles increases by two. Hence $D,G$ are unchanged and $q=3D-B_-$ decreases by two. If $\gamma$ is nonseparating, its connected cut surface has the same Euler characteristic, genus one less and two more boundary circles, so $D$ is unchanged and $G$ decreases. The only zero-Euler cases are tori and annuli. An essential curve on a torus is nonseparating, so the torus becomes an annulus and $G$ decreases. On an annulus every essential embedded circle is boundary-parallel, which is excluded in the definition of a compressing annulus: cap its two ends by disks to obtain a sphere and apply [F2] to see that an essential circle separates the two caps and cobounds an annulus with each original boundary. These cases exhaust [F2] and each contradicts lexicographic minimality in step 1.1. Therefore no compressing annulus exists. [F2, step 1.1, step 2.2, algebra]

4.1 The chosen representative has no disk or sphere components by construction, and steps 2.1 and 3.1 give the three required exclusions. For the spanning assertion use the integral class of [F1] whose boundary projections are all nonzero and apply the same minimization. Every surgery preserves that relative class, so its final boundary class still has each nonzero projection; the resulting representative meets every boundary component. Neither this finite-tuples argument nor the annular surgery chooses or bounds a sequence of cuts of $M$, and no hierarchy or boundary-marking conclusion follows without further proof. This proves exactly the stated existence assertions. [F1, step 1.1, step 2.1, step 2.2, step 3.1, construct] ∎
