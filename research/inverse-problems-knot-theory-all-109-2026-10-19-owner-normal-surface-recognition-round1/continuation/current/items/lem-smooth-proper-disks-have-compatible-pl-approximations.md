---
id: lem-smooth-proper-disks-have-compatible-pl-approximations
kind: lemma
title: "Smooth proper disks have PL approximations in a compatible triangulation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-relative-smooth-triangulation-and-projection-preserving-fitting
  - lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation
  - lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-morse-sard-for-euclidean-maps
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§§8–9, stability and shape-controlled secants; the proper-boundary specialization is given locally."
---

## Statement

Assume countable choice. Suppose a compact smooth three-manifold $M$ with boundary has a supplied finite compatible whole-star smooth triangulation, with boundary a subcomplex and differential fans homeomorphic onto the boundary tangent half-spaces. If $M$ contains a smooth properly embedded disk transverse to its boundary, it contains a properly embedded PL disk whose boundary is isotopic in $\partial M$ to the original boundary. In particular essentiality of the boundary is preserved. PL here refers to the supplied compatible structure; no arbitrary topological triangulation is substituted.

## Statement references

[[def-relative-smooth-triangulation-and-projection-preserving-fitting]]

[[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]]

[[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]]

## Facts & Assumptions

**Given:** Countable choice, the supplied compatible triangulation $h:|T|\to M$ and the transverse smooth proper disk $e:D^2\to M$.

[F1] Finite whole-star embeddings are stable under sufficiently small strong piecewise $C^1$ approximation; shape-controlled secants give such approximations and preserve every affine target-face constraint. ([[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]], [[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]])

[F2] Euclidean Sard supplies regular parameter values for finite transverse perturbations. Compact smooth manifolds with corners have finite whole-star smooth triangulations relative to admissible boundary data. The latter supplier explicitly declares its ambient full-AC hypothesis dispensable: its proof uses finitely many coordinate boxes, finite supported fitting, finite convex subdivisions and local ODEs, with no arbitrary-index selection. We use precisely that choice-free finite construction on cut surface pieces, rather than a general topological triangulation or a topological cell map. ([[thm-morse-sard-for-euclidean-maps]], [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]])

[A1] Countable choice is the allowed background hypothesis. The triangulation construction used in [F2] declares its full-AC hypothesis dispensable and actually uses only finite choices; no full AC is imported here. The perturbations and subdivisions particular to this disk are finite. ([[def-countable-choice]])

## Proof

1.1 After a small smooth perturbation, keep $e$ proper and transverse to $\partial M$ and make it transverse to the finite strata of $h(T)$, avoiding the vertices. Here the elementary finite parameter argument suffices: in each of finitely many ambient chart cores add small coordinate translations multiplied by a bump equal to one on the core. Evaluation on that core is a submersion in the translation parameters, so the regular values of the projection of the corresponding inverse-image stratum give transverse perturbations by [F2]. At boundary points use the tangential chart translations on $\partial M$ and their product extensions in its collar. Choose the finitely many perturbations successively small enough to retain already obtained transversality and the disk's embedding and proper collar. Compact transverse intersections with the edge strata are finite; intersections with face interiors are compact regular arcs and circles after adding those edge endpoints, hence a finite embedded graph. There are no intersections with vertex strata. [given, F1, F2, construct]

2.1 Cut the disk along the finite inverse-image graph. Regard repeated slit sides as separate boundary copies before regluing. The pieces are compact smooth surfaces with corners: face-intersection arcs have nonzero differential; at an edge intersection their incident tangent directions are distinct, since the disk plane is transverse to that edge, so the two bounding equations in each sector give a corner chart by the inverse theorem. Supply each common boundary arc with one smooth regular parametrization, subdivided identically on its two copies. These are admissible boundary data in [F2], because the two corner rays are independent. Apply its finite relative whole-star construction to the pieces and reglue their identical boundary subdivisions. This gives a finite piecewise smooth whole-star triangulation of the disk with each simplex mapping into one ambient simplex. The inverse of $h$ on that simplex is smooth up to its indicated faces by the full-rank extension and inverse theorem. Consequently $g=h^{-1}e$ on this finite source complex is piecewise smooth. Its differential fan is injective: the ambient differential fan of $h$ is a homeomorphism onto the tangent half-space or space, and the disk differential is injective, so taking its inverse on the subdivided tangent sectors is injective. Thus $g$ is a whole-star embedding into a Euclidean realization of $|T|$. [F2, step 1.1, construct]

3.1 Apply the shape-controlled secants of [F1] to $g$. Every refined simplex maps by affine interpolation of its vertex values into the same convex ambient simplex as its original carrier. Adjacent source simplices have identical interpolants on their common face. Thus these secants define a PL map into $|T|$, and sufficiently small strong error makes it an embedding by [F1]. They send boundary into the boundary subcomplex, since all the vertices of a boundary source simplex lie in its one boundary ambient face and the interpolant preserves that face. [F1, step 2.1, construct]

4.1 Properness is retained as well. In a smooth disk collar the inward boundary defining coordinate of $M$ has strictly positive inward derivative, uniformly after a finite shrink, by the given transversality. Cellulate that collar as strips with its boundary as the only zero-coordinate face. In each ambient half-space simplex the corresponding affine boundary coordinate is nonnegative and positive on the vertices off that boundary face. Its affine interpolant is therefore zero precisely on the source boundary face. The derivative lower bound ensures these are precisely the collar sectors, even after a finer shape-controlled subdivision. Away from the collar the compact disk has a positive distance from $\partial M$, and a sufficiently small value error retains that separation. Hence the PL disk meets $\partial M$ exactly in its own boundary. [F1, step 3.1, construct]

5.1 Along the original boundary, the secant curve lies in an arbitrarily small annular neighborhood and is transverse to its interval fibres: its tangential derivative is close to the nonzero derivative of the original parametrized curve in each of the finitely many sectors. Projection to the original circle is therefore a degree-one local homeomorphism, hence a homeomorphism. The new boundary is a graph in that annulus; interpolating its graph coordinate with zero gives an isotopy to the original boundary. Thus its nullhomotopy class, including its essentiality, is unchanged. The image under $h$ of the secant disk is the required properly embedded PL disk in the supplied compatible structure. [A1, step 3.1, step 4.1, construct] ∎
