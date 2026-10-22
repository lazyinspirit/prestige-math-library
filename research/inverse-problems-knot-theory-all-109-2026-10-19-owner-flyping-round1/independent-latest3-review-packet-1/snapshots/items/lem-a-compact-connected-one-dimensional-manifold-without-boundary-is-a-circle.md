---
id: lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle
kind: lemma
title: "A nonempty compact connected one-dimensional manifold without boundary is a circle"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-manifold, def-compact-space, def-connected-space, def-hausdorff-space, def-euclidean-spheres-and-closed-balls, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-countable-choice-principle-for-foliation-pair, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, def-topological-manifold-with-boundary, thm-heine-borel-characterisation-r, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-connected-subsets-of-r-are-intervals, lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Oleg Viro, 1-manifolds (Manifold Atlas; published survey)"
      url: "http://www.map.mpim-bonn.mpg.de/1-manifolds"
      locator: "§3.2, Theorem 3.1 and §3.3, Theorem 3.2 (topological classification and compactness/boundary invariants); §3.4 states Lemmas 3.3–3.4 and refers to proofs elsewhere"
    - title: "MIT 18.966/18.965 notes, Classification of 1-manifolds (Theorem 1.1 and proof of Lemma 1.2)"
      url: "https://math.mit.edu/classes/18.966/2014SP/965/class.pdf"
      locator: "Theorem 1.1 statement; complete proof of the two-parametrization Lemma 1.2"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Appendix, printed pp. 55–57 (classification of compact smooth 1-manifolds)"
dependency_level: 1
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $X$ be a nonempty
compact connected one-dimensional topological manifold without boundary
([[def-compact-space]], [[def-connected-space]],
[[def-hausdorff-space]]). Then $X$ is homeomorphic to the circle
$S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$
([[def-euclidean-spheres-and-closed-balls]]). If in addition $X$ carries a
smooth structure making it a smooth one-manifold without boundary, then $X$ is
diffeomorphic to this circle
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

The empty manifold is excluded by the hypothesis: it is compact and connected
under the conventions of this library, but it is not homeomorphic to a circle.
The hypothesis "without boundary" is likewise essential: the closed interval
$[0,1]$ is compact and connected but has boundary points and is not a circle.

## Facts & Assumptions

**Given:** A nonempty compact connected one-dimensional topological manifold $X$ without boundary, and the hypothesis $\mathrm{AC}_\omega$.

[F1] A space is compact when every open cover has a finite subcover; a family of sets is finite when it is empty or consists of $n+1$ sets for some natural number $n$ ([[def-compact-space]]).

[F3] The unit circle is $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$ with the subspace topology and the induced smooth structure ([[def-euclidean-spheres-and-closed-balls]]).

[F4] Every compact smooth $1$-manifold $W$, possibly with boundary, is diffeomorphic to a finite disjoint union of copies of the circle and of the closed interval $[0,1]$; a circle component contributes no boundary point and an interval component contributes exactly two ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

[F5] A topological space is connected when it admits no separation by two disjoint nonempty open sets; a homeomorphism carries connectedness and boundary points to connectedness and boundary points, and a continuous image of a connected space is connected ([[def-connected-space]], [[def-topological-manifold-with-boundary]]).

[F6] Closed bounded real intervals are compact, continuous images of compact spaces are compact and compact subsets of Hausdorff spaces are closed ([[thm-heine-borel-characterisation-r]], [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]). Real intervals are connected ([[thm-connected-subsets-of-r-are-intervals]]). Finite closed pasting gives continuity, and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[lem-continuity-is-local-and-pastes]], [[thm-compactness-under-continuous-maps]]).

## Proof

**Proof technique:** direct, by a finite interval cut and the locally proved smooth classification.

1.1 Choose coordinate arcs with smaller closed coordinate intervals whose interiors cover $X$. Compactness gives finitely many such intervals $K_i$, each embedded in its coordinate chart. Their images are compact and closed by [F6]. Let $F$ be the finite set of all their endpoints; it is nonempty. In each $K_i$, cutting at its finitely many points of $F$ gives finitely many open intervals. Each such interval $C$ is open in $X$, connected by [F6], and closed in $X\setminus F$, because its compact closure is the corresponding embedded closed interval with its two endpoints in $F$. If two cut intervals meet, connectedness and this open-and-closed property force each to lie in the other, so they are equal. Every point of $X\setminus F$ lies in one of them, since it lies in some $K_i$ and is not an endpoint. Thus the distinct cut intervals form a finite partition of $X\setminus F$, each with an embedded closed-arc closure and two distinct endpoints in $F$. [F1, F5, F6, given, construct]

2.1 At any $v\in F$, choose a sufficiently small coordinate interval containing no other point of $F$. Its two half-intervals lie in two incident cut-arc ends, and every incident arc approaching $v$ occupies one of these two sides. Hence exactly two ends meet at $v$. Start with one arc and follow its other endpoint by the unique other incident arc. Since there are finitely many vertices, a vertex repeats. The first repeated vertex is the starting vertex: a different earlier vertex already had both incident ends used on its first visit, so arrival from a previously unvisited vertex would require a third end. The resulting cyclic chain uses both ends at each of its vertices. Its union is closed, being a finite union of compact closed arcs, and open: interior points have interval neighbourhoods, and at its vertices both local sides belong to that union. It is nonempty, so connectedness of $X$ makes this cyclic chain all of $X$. This proves the cycle conclusion also when two different arcs have the same pair of endpoints. [F5, F6, step 1.1, construct]

3.1 Divide $S^1$ into the same finite number of consecutive closed angular arcs and map them, in cyclic order, onto the closed coordinate arcs of step 2.1, parametrizing each by its interval coordinate. Adjacent endpoints agree and only these endpoints are identified. Finite closed pasting gives a continuous bijection $S^1\to X$; [F6] makes it a homeomorphism. This proves the topological assertion without importing the classification of all connected topological one-manifolds. [F3, F6, step 1.1, step 2.1, construct]

4.1 If $X$ has a smooth structure, use the locally proved smooth classification [F4]. Its finitely many components are circles or closed intervals. Empty boundary excludes every interval; nonemptiness and connectedness leave exactly one circle. Thus the smooth assertion is a diffeomorphism with the standard circle. The finite topological construction used no extra choice; the countable-choice hypothesis is inherited from the smooth supplier. The empty manifold and the closed interval fail the respective explicit hypotheses, as stated. [F3, F4, F5, step 3.1] ∎
