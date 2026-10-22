---
id: lem-finite-injective-pl-hierarchies-ending-in-balls-kill-pi-two
kind: lemma
title: Finite injective PL hierarchies ending in balls kill the second homotopy group
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-relative-simplicial-approximation-after-subdivision
  - prop-relative-cw-inclusions-are-cofibrations
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Friedhelm Waldhausen, On irreducible 3-manifolds which are sufficiently large
      url: https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf
      locator: The sphere replacement used in Sections1 and6 is supplied by the finite reverse-hierarchy argument below
---

## Statement

Let $M$ be a compact PL three-manifold with a supplied finite compatible triangulation and a supplied finite hierarchy. At each stage cut a current piece along finitely many disjoint compact two-sided properly embedded locally flat PL surfaces, with specified product collars and finite compatible triangulations. Suppose each cutting surface is injective on fundamental groups into its piece at that stage, and every final piece is a PL ball. Then every continuous map $S^2\to C$ is nullhomotopic, for every connected piece $C$ at every stage, including $M$. Equivalently $\pi_2(C)=0$ for every choice of basepoint in every such piece.

This is an operation on an actual supplied hierarchy. It asserts neither hierarchy existence nor higher-dimensional asphericity and uses no sphere theorem, contractibility of a universal cover, or irreducibility-to-asphericity assertion.

## Facts & Assumptions

**Given:** The finite PL hierarchy, its collars, the cutting-surface injections and the final ball parametrizations.

[F1] A continuous map between finite polyhedra, already simplicial on a subcomplex, has a simplicial approximation homotopic relative to that subcomplex, after compatible subdivisions. [[thm-relative-simplicial-approximation-after-subdivision]]

[F2] A homotopy on a finite polyhedral subcomplex extends over the ambient finite polyhedron, holding any other specified subcomplex fixed. [[prop-relative-cw-inclusions-are-cofibrations]]

[F3] The specified locally collared PL surfaces have compatible finite PL product neighborhoods. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

## Proof

1.1 We prove the single reverse-cut operation. Let $C$ be a piece, let $S$ be its next finite cutting family, and assume every component of $C\mathbin{\|}S$ already has zero second homotopy group. Let $u:S^2\to C$ be continuous. By [F1], with empty fixed subcomplex, it is homotopic to a finite PL map. In the product neighborhoods of $S$, the signed normal coordinate composed with this map is piecewise linear after finite subdivision. Choose a small parallel level different from its finitely many vertex values. Its inverse image in the triangulated sphere is a finite disjoint union of polygonal circles: in every triangle it is empty or one segment, and at an edge its two incident segments join with valence two. No vertex occurs. Replacing $S$ by this parallel copy is an ambient collar isotopy and carries its cut pieces and injections to identical ones, so we use that copy as $S$. The same construction supplies a product collar on each inverse-image circle with the map on its two sides on the indicated opposite sides of $S$. [F1, F3, given, construct]

2.1 If there is a preimage circle, choose an innermost one $a$ in the parameter sphere, bounding a disk $D$ whose interior misses all preimages. Its image lies in a single labeled cut piece $P$, with its boundary in a face copy of one component $T$ of $S$. The loop $u|_a$ is nullhomotopic in $C$ via $u|_D$. Injectivity $\pi_1(T)\to\pi_1(C)$ makes it nullhomotopic in $T$. Thus there is a disk map $v:D\to T$ agreeing with $u$ on $a$. It can be chosen PL with that exact boundary: make this PL boundary simplicial after finite compatible subdivisions, and apply [F1] to any continuous filling relative to its boundary. Regard $v$ as a map to the same face of $P$. The sphere obtained by gluing $u|_D$ to the oppositely parametrized $v$ is nullhomotopic in $P$, by the assumed $\pi_2(P)=0$. Consequently these two disk maps are homotopic relative to their common boundary inside $P$. Explicitly, prescribe them on the two ends of $D\times I$ and the constant common boundary map on $\partial D\times I$; this boundary is a sphere and its map is precisely the glued sphere with an inserted constant cylinder. A nullhomotopy extends it over the ball $D\times I$, furnishing the required relative homotopy. [F1, step 1.1, given, construct]

3.1 Extend that disk homotopy to the whole parameter sphere by [F2], or directly use a slightly larger disk and its annular collar. It is supported in that larger disk, with its outside boundary fixed. After replacing the inner disk map by $v$, push its image a small distance to the opposite side of the face, into the cut piece incident to the OUTER side of $a$. This push removes the circle rather than creating a new one. Here are the actual parameters: on the inner disk use the face map $v$ and a constant small normal coordinate of the outer sign; on the surrounding annulus use its existing projection to $T$ and interpolate its normal coordinate to that same sign, keeping its outer boundary fixed. The annulus was chosen in the transverse collar from step 1.1, so its outer boundary has that sign and the interpolation never vanishes. The transition from the former zero inner disk is a homotopy in the product collar, and the disk replacement from step 2.1 was in the inner cut piece. Together these give a homotopy of the original sphere map, supported in the larger disk, whose endpoint has no preimage of $S$ there. All maps at this endpoint can be PL: use the PL filling and a finite subdivision of the disk, annular strips and product collar. Everything outside remains unchanged. Thus the finite number of preimage circles decreases by one, with no new circle or altered preimage outside this disk. [F2, F3, step 1.1, step 2.1, construct]

4.1 Repeat the preceding operation finitely often. When no preimage circle remains, connectedness of the parameter sphere puts its whole image in one component of $C\setminus S$, hence in one cut piece. That sphere is nullhomotopic by the reverse-cut hypothesis. This proves that every sphere map into $C$ is nullhomotopic. The argument does not require the cutting surfaces to be disks, separating, boundary-incompressible, or of negative Euler characteristic; their actual injections and collars are exactly what was used. [step 1.1, step 2.1, step 3.1, given, construct]

5.1 Each final ball has zero second homotopy group by its given ball parametrization and radial contraction. Process the finitely many hierarchy cuts in reverse order, applying step 4.1 whenever all the next cut pieces have been processed. Finite induction proves the sphere-map assertion for every piece at every stage. To express it as based $\pi_2=0$, any free nullhomotopy of a based sphere extends its sphere map over a three-ball; contraction of that ball toward its chosen boundary basepoint, fixing that point throughout, gives a based nullhomotopy after composition. Thus no distinction between based and free nullity is hidden. This proves the complete Statement without an additional choice axiom or a claim about any unprovided hierarchy. [step 4.1, given, construct] ∎

## Authoring status

This is an unfrozen supplier in the developing relative marking chain. Its use for an original manifold requires the actual finite hierarchy from the separate hierarchy construction, not a new supplied-hierarchy premise on the original theorem. No independent review is claimed.
