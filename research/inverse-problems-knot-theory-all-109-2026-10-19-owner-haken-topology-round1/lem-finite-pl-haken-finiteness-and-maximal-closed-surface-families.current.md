---
id: lem-finite-pl-haken-finiteness-and-maximal-closed-surface-families
kind: lemma
title: "Finite PL Haken finiteness and maximal closed surface families"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-finite-pl-incompressible-boundary-incompressible-surfaces-admit-normal-isotopies
  - lem-finite-normal-surface-families-have-a-parallel-pair
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Corollary9.4.8 and the opening of the proof of Theorem9.4.12, printed pp.298–299."
axiom_use: "Full AC is inherited only through the normal-family bound's local homology suppliers. Taking a maximum of a nonempty bounded set of natural-number cardinalities adds no choice requirement."
---

## Statement

Assume full AC. Let $M$ be a compact connected oriented PL three-manifold with a supplied finite simplicial triangulation containing $t$ tetrahedra. Assume every interior PL sphere bounds an interior PL ball, and every proper PL disk cobounds a PL ball with a disk in $\partial M$. Write $b_2=\dim_{\mathbb F_2}H_2(M,\partial M;\mathbb F_2)$ and $K=10t+b_2$. A finite disjoint family of compact orientable two-sided properly embedded locally flat PL surfaces, with product collars, no sphere or disk components, and no compressing or boundary-compressing disks, has at most $K$ components if its components are pairwise nonparallel. Here parallel means cobounding an embedded product with its vertical boundary in $\partial M$; no requirement on other components in that product is imposed.

Moreover, every given finite family of disjoint pairwise nonparallel connected closed incompressible orientable two-sided PL surfaces of positive genus extends to a finite family of maximum possible cardinality among such extensions. For that extension, every connected closed incompressible orientable two-sided PL surface of positive genus disjoint from the family is parallel in $M$ to some component of the family. This conclusion does not assert that a parallelism product avoids the other family components, or that any subsequent hierarchy terminates.

## Statement references

[[lem-finite-pl-incompressible-boundary-incompressible-surfaces-admit-normal-isotopies]]

[[lem-finite-normal-surface-families-have-a-parallel-pair]]

## Facts & Assumptions

**Given:** The finite triangulated PL manifold and the surface families in the Statement.

[F1] Under the stated sphere-ball and boundary disk-ball hypotheses, a finite family with these incompressibility properties admits a simultaneous ambient PL isotopy to normal form for the original triangulation; the boundary is preserved setwise. [[lem-finite-pl-incompressible-boundary-incompressible-surfaces-admit-normal-isotopies]]

[F2] An orientable normal family with more than $10t+b_2$ components has two components cobounding a product, whose interior misses the normal family and whose vertical boundary lies in $\partial M$. [[lem-finite-normal-surface-families-have-a-parallel-pair]]

[A1] Full AC is inherited from [F2]'s homology suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** The data in the Statement.

1.1 Apply [F1] to the whole finite family at once. It has the same number of connected components after the ambient isotopy. If that number were larger than $K$, [F2] would exhibit a parallel pair in the normal image. Applying the inverse ambient homeomorphism carries the product back to an embedded product in $M$, with its vertical boundary still in $\partial M$. The original two components would be parallel, contradicting their assumed pairwise nonparallelness. Thus the family has at most $K$ components. [F1, F2, given, construct, algebra]

2.1 Consider the set of natural numbers attained as the cardinalities of finite pairwise nonparallel disjoint closed incompressible positive-genus surface families extending the specified finite family. It is nonempty because the given family is an extension of itself. Closed surfaces have no boundary-compression arcs, so step 1.1 bounds this set by $K$. It therefore has a largest element $m$, and by the definition of the set there exists an extending family with $m$ components. Fix one such family. If a connected closed incompressible orientable two-sided positive-genus surface disjoint from it were not parallel to any component, adjoining it would produce an allowed finite extension of cardinality $m+1$, a contradiction. This proves both the maximum extension assertion and the stated parallelism conclusion. No selection along an infinite extension process or simultaneous choice of maximizing families is involved. [step 1.1, given, choose, algebra] ∎
