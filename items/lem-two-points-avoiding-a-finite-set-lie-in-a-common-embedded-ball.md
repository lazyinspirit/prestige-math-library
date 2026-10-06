---
id: lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball
kind: lemma
title: "Two points avoiding a finite set lie in a common embedded ball"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-manifold, prop-topological-manifolds-are-locally-compact-and-locally-path-connected, thm-connected-and-locally-path-connected-implies-path-connected, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, def-embedded-smooth-submanifold-with-boundary, def-countable-choice, thm-weak-whitney-proper-embedding-theorem, cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric, thm-hopf-rinow, thm-parallel-transport-is-a-linear-isomorphism, prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Section 19.1 and Theorem 19.2.1, printed pp. 139-144 (complete induced metrics and minimizing geodesics); the extended-arc and ellipsoid construction is derived here"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
      locator: "Theorems 6.15 and 6.24 (proper embeddings and tubular neighbourhoods)"
dependency_level: 0
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $M$ be a connected boundaryless smooth $n$-manifold,
$n\ge2$, let $p\ne q\in M$ and let $F\subset M\setminus\{p,q\}$ be finite. Then
there are a smooth embedded closed arc $\gamma\subseteq M\setminus F$ from $p$
to $q$ and a smoothly embedded closed ball $B\subseteq M$ with
$p,q\in\operatorname{int}B$ and $B\cap F=\varnothing$
([[def-embedded-smooth-submanifold-with-boundary]]).

## Facts & Assumptions

**Given:** A connected boundaryless smooth $n$-manifold $M$, $n\ge2$, distinct $p,q$, a finite set $F$ disjoint from them, and $\mathrm{AC}_\omega$.

[F1] Manifolds are locally path-connected; connected locally path-connected spaces are path-connected ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]], [[thm-connected-and-locally-path-connected-implies-path-connected]]).

[F2] Under $\mathrm{AC}_\omega$, the open manifold $M\setminus F$ admits a proper smooth embedding in Euclidean space ([[thm-weak-whitney-proper-embedding-theorem]]). A closed embedded submanifold of complete Euclidean space is complete in its induced Riemannian metric ([[cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric]]).

[F3] Under $\mathrm{AC}_\omega$, every connected complete boundaryless Riemannian manifold is geodesically complete and any two points are joined by a minimizing geodesic ([[thm-hopf-rinow]]).

[F4] Levi–Civita parallel transport is a linear isomorphism preserving inner products, and parallel sections along a smooth curve are smooth ([[thm-parallel-transport-is-a-linear-isomorphism]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]).

[F5] A closed boundaryless embedded submanifold in a smooth ambient manifold has a tubular neighbourhood under $\mathrm{AC}_\omega$ ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

## Proof

1.1 Put $U=M\setminus F$. A punctured coordinate ball in dimension $n\ge2$ is path-connected: join two nonzero points by a broken line through a third point avoiding the two lines through the puncture. To see that $U$ is connected, suppose $U=A\sqcup B$ were a separation. For each $x\in F$ choose a coordinate ball meeting $F$ only at $x$; its connected punctured ball lies entirely in $A$ or entirely in $B$. Add $x$ to that side. The resulting two sets are disjoint nonempty open sets covering $M$, a contradiction. Hence $U$ is connected and path-connected by [F1]. [F1, given, algebra]

2.1 Embed $U$ properly in $\mathbb R^{2n+1}$ by [F2]. Its image is closed: a convergent sequence of image points lies in a compact Euclidean ball; properness gives a compact preimage, and a convergent subsequence shows the limit is in the image. The induced metric is complete by [F2]. By [F3] a nonconstant minimizing geodesic $\gamma:[0,1]\to U$ joins $p$ to $q$. It has constant positive speed and is injective, since deleting any nonconstant loop would shorten it. A continuous injection from the compact interval into a Hausdorff manifold is an embedding, so this is a smooth embedded arc. [F2, F3, step 1.1, construct]

3.1 Geodesic completeness extends $\gamma$ beyond both endpoints. Choose $a>0$ small enough that its restriction to $[-a,1+a]$ remains an embedding: the positive tangent makes it locally injective at each endpoint, and compactness separates these small endpoint continuations from the portions of the original arc outside their coordinate neighbourhoods and from each other. Let $W=U\setminus\{\gamma(-a),\gamma(1+a)\}$ and $S=\gamma((-a,1+a))$. Then $S$ is boundaryless and closed in $W$, since its closure in $U$ is the extended compact arc and only the two removed endpoints are missing. Apply [F5] to $S\subset W$. Parallel-transport an orthonormal normal basis along the geodesic by [F4]; its tangent is parallel, so the transported vectors stay normal and give a smooth frame of the normal quotient bundle. The tube is therefore parametrized near its zero section by $(t,z)\in(-a,1+a)\times\mathbb R^{n-1}$. [F3, F4, F5, step 2.1, construct]

4.1 Choose $L$ with $1/2<L<1/2+a$. Compactness of $[1/2-L,1/2+L]$ in the zero section supplies $\varepsilon>0$ such that the ellipsoid $E=\{(t,z):((t-1/2)/L)^2+|z|^2/\varepsilon^2\le1\}$ is contained in the tube domain: cover that compact segment by finitely many product neighbourhoods in the open domain and take a common positive fibre radius. The ellipsoid is affinely diffeomorphic to $D^n$, and its tube image is a smooth embedded closed ball $B\subset W\subset M\setminus F$. The points $(0,0)$ and $(1,0)$ satisfy the strict ellipsoid inequality because $L>1/2$, so $p,q\in\operatorname{int}B$. The original arc lies in this ball and avoids $F$, completing both assertions. [F5, step 3.1, construct, algebra] ∎

