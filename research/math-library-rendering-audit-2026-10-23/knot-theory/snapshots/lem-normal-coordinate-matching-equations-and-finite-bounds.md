---
id: lem-normal-coordinate-matching-equations-and-finite-bounds
kind: lemma
title: Matching equations and finite bounds for normal coordinates
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-normal-surface-coordinate-box
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§4–8; complete relevant passages on normal coordinates, finite bounds,
        triangulations and unknot searches.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page notes on normal disks, matching, normal
        surfaces and knots.
---

## Statement

Let $T$ be a finite tetrahedral triangulation of a compact piecewise-linear $3$-manifold with $t\ge1$ tetrahedra. A nonzero nonnegative integer vector in $\mathbb Z^{7t}$ is the normal-coordinate vector of a normal surface exactly when it satisfies every face-matching equation and at most one quadrilateral type is nonzero in each tetrahedron. Every primitive integer generator of an extreme ray of the Haken cone has each coordinate at most $2^{7t-1}$. Every fundamental normal-surface vector has each coordinate at most $t\,2^{7t+2}$.

## Statement references

[[def-normal-surface-coordinate-box]] — seven disk types per tetrahedron, face matching, quadrilateral admissibility, fundamental vectors and the Haken cone.

[Hass–Lagarias–Pippenger, Theorem 5.1 and Lemma 6.1](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — matching characterization and coordinate bounds.

[Erickson, “Normal Surfaces and Knots,” §§14.1–14.3](https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf) — independent normal-coordinate conventions.

## Facts & Assumptions

**Given:** A finite tetrahedral triangulation $T$ with $t\ge1$ tetrahedra and the seven normal disk types per tetrahedron.

[F1] [[def-normal-surface-coordinate-box]]: normal vectors have $m=7t$ nonnegative integer coordinates; matching equations equate the counts of each normal-arc type across an interior face; the quadrilateral condition allows at most one quad type per tetrahedron.

[F2] [[def-normal-surface-coordinate-box]]: a vector is fundamental exactly when it is not a sum of two nonzero admissible integer vectors, and the Haken cone is the nonnegative real solution set of the matching equations.

## Proof

1.1 For an existing normal surface, the arcs on the two sides of every interior face are the same finite set, so their type counts agree. Distinct quadrilateral types in one tetrahedron separate different opposite vertex pairs and intersect, so a disjoint normal surface can use at most one of them. Conversely, for a vector satisfying these conditions, place the prescribed parallel copies of each triangle type and the single permitted quadrilateral type in every tetrahedron. In each triangular face, arcs of a fixed type are nested parallel copies; put the endpoint blocks in the same order on its three edges on both incident tetrahedra. The matching equations give equal counts for every type, so pair the $j$th arc on one side to the $j$th arc on the other for each $j$. These gluings identify disk sides in pairs and do not identify interior points, producing a properly embedded normal surface with precisely the given counts. [given, F1, construct]

1.2 Put $m=7t$. A one-dimensional face of the pointed cone $C(T)$ is cut out by the matching equalities together with active coordinate equations $x_i=0$ whose combined row rank is $m-1$. Choose $m-1$ independent active rows and form the integer matrix $R$ with those rows. Each matching row has four entries in $\{+1,-1\}$ and Euclidean norm $2$; each coordinate row has norm $1$. The cofactor vector $w\in\mathbb Z^m$, whose $j$th coordinate is the signed determinant of the matrix obtained by deleting column $j$, is nonzero and satisfies $Rw=0$ by Laplace expansion. Hadamard's inequality bounds each such determinant by the product of the row norms, hence $|w_j|\le2^{m-1}$. Dividing by the gcd of the coordinates gives the primitive integer generator on that ray and cannot increase any coordinate. [given, F1, construct, algebra]

1.3 The cone $C(T)$ is pointed because it lies in the nonnegative orthant. Intersect it with $\sum_i x_i=1$; this is a bounded rational polytope. Triangulate that finite polytope by coning a triangulation of each face from its first vertex in a fixed finite vertex order. Coning the simplices back to the origin decomposes $C(T)$ into finitely many simplicial cones, each generated by at most $m$ extreme rays of $C(T)$. [F1, construct]

2.1 Any nonzero vector satisfying the equations and quadrilateral condition is realized by step 1.1; counting its disk pieces returns the original vector. The zero vector has no disk pieces and represents the empty surface, which is admitted for coordinate addition. This proves the claimed characterization. [step 1.1, F1, algebra]

3.1 Let $v$ be a fundamental admissible integer vector. If $v=x+y$ with nonzero integer vectors $x,y\in C(T)$, then $0\le x_i,y_i\le v_i$ for every coordinate. Since the support of the quadrilateral coordinates of $v$ uses at most one quad type per tetrahedron, the coordinatewise sub-vectors $x,y$ satisfy the same quadrilateral restriction. Step 2.1 realizes both as nonempty normal surfaces, contradicting fundamentalness. Thus $v$ is indecomposable in the integer semigroup $C(T)\cap\mathbb Z^m$. [given, F1, F2, step 2.1, contradiction]

4.1 Choose a simplicial cone from step 1.3 containing $v$, with primitive ray generators $r_1,\ldots,r_d$, where $d\le m$. Write $v=\sum_{j=1}^d\lambda_j r_j$ with $\lambda_j\ge0$. If some $\lambda_j>1$, then $v-r_j$ is a nonnegative integer vector in the same cone and is nonzero; hence $v=(v-r_j)+r_j$ contradicts indecomposability. Therefore every $\lambda_j\le1$, including the case $v=r_j$. For every coordinate $i$, step 1.2 gives $v_i\le\sum_j(r_j)_i\le d\,2^{m-1}\le7t\,2^{7t-1}\le t\,2^{7t+2}$. This proves the fundamental-vector bound. [step 1.2, step 1.3, step 3.1, algebra] ∎

