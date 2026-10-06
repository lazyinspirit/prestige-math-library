---
id: lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle
kind: lemma
title: "A nonempty compact connected one-dimensional manifold without boundary is a circle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-smooth-manifold, def-compact-space, def-connected-space, def-hausdorff-space, def-euclidean-spheres-and-closed-balls, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-countable-choice-principle-for-foliation-pair, thm-of-archimedean, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, def-topological-manifold-with-boundary]
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

[F2] For every real radius there is a natural number larger than it ([[thm-of-archimedean]]).

[F3] The unit circle is $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$ with the subspace topology and the induced smooth structure ([[def-euclidean-spheres-and-closed-balls]]).

[F4] Every compact smooth $1$-manifold $W$, possibly with boundary, is diffeomorphic to a finite disjoint union of copies of the circle and of the closed interval $[0,1]$; a circle component contributes no boundary point and an interval component contributes exactly two ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

[F5] A topological space is connected when it admits no separation by two disjoint nonempty open sets; a homeomorphism carries connectedness and boundary points to connectedness and boundary points, and a continuous image of a connected space is connected ([[def-connected-space]], [[def-topological-manifold-with-boundary]]).

## Proof

**Proof technique:** direct, with the classification of connected one-manifolds as the cited input.

1.1 (Classification and invariants.) The classification of connected one-manifolds states that every connected $1$-manifold is homeomorphic to exactly one of the four models $\mathbb R$, the half-line $\mathbb R_+=[0,\infty)$, the unit circle $S^1$, and the closed interval $I=[0,1]$, and that for connected $1$-manifolds compactness together with the presence of boundary points is a complete system of topological invariants (Manifold Atlas, the connected one-manifold classification theorem and its invariant paragraph; the same classification is proved for smooth $1$-manifolds in the MIT notes, the connected smooth one-manifold classification theorem). In particular, a connected $1$-manifold is homeomorphic to $S^1$ if and only if it is compact and has empty boundary. [given]

1.2 (Compactness of the models.) $\mathbb R$ is not compact: the family $\{(-n,n):n\in\mathbb N\}$ is an open cover of $\mathbb R$, and a finite subcover, indexed by finitely many naturals, is contained in $(-N,N)$ for $N$ the largest of them, which omits $N+1$ [F1, F2]. The same argument with $\{(-1,n)\cap\mathbb R_+:n\in\mathbb N\}$ shows that the half-line $\mathbb R_+=[0,\infty)$ is not compact, since a finite subcover lies in $(-1,N)\cap\mathbb R_+$ and omits $N+1$ [F1, F2]. [F1, F2]

1.3 (Smooth case.) Suppose $X$ is a smooth one-manifold without boundary. By [F4] it is diffeomorphic to a finite disjoint union $\bigsqcup_{i\in F}S^1_i\sqcup\bigsqcup_{j\in G}[0,1]_j$ of circles and closed intervals; a diffeomorphism is in particular a homeomorphism, so it carries the boundary of $X$, which is empty, onto the boundary of the target, which by [F4] is the disjoint union of the two endpoints of each interval component, hence is empty only when $G=\varnothing$; and it carries the connected space $X$ onto a connected space, while a disjoint union with at least two nonempty pieces is disconnected, so $|F|=1$ [F5]. Therefore $X$ is diffeomorphic to $S^1$, and $S^1$ carries the standard smooth structure of [F3]. [F3, F4, F5]

2.1 (Topological case.) $X$ is compact and, by hypothesis, has no boundary points; both properties are topological and are part of the complete invariant system of step 1.1, while $\mathbb R$ and $\mathbb R_+$ fail compactness by step 1.2 and $I$ and $\mathbb R_+$ have boundary points; hence the classification forces $X$ to be homeomorphic to $S^1$. Since $X$ is nonempty and compact its homeomorphism type is that single model, and $S^1$ is the unit circle of [F3]. [F3, F5, step 1.1, step 1.2] ∎
