---
id: def-fundamental-groupoid-of-a-space
kind: definition
title: Fundamental groupoid of a space
status: published
verification:
  audited: 2026-09-14
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-category, def-homotopy-relative-and-path-homotopy, thm-fundamental-group-laws]
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §§3–4, pp.103–109
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X$ be a topological space. Its **fundamental groupoid**
$\Pi_1(X)$ is the following category ([[def-category]]).

- The objects are the points of $X$.
- A morphism $x\to y$ is an endpoint-fixed path-homotopy class $[\alpha]$
  of paths $\alpha:[0,1]\to X$ with $\alpha(0)=x$ and $\alpha(1)=y$, in
  the sense of [[def-homotopy-relative-and-path-homotopy]].
- If $\alpha:x\to y$ and $\beta:y\to z$, composition is
  $$[\beta]\circ[\alpha]=[\alpha*\beta].$$
  Thus the path written first is traversed first, while the categorical
  composite has the usual right-to-left notation.
- The identity at $x$ is the class of the constant path $c_x$, and the
  inverse of $[\alpha]$ is the reversed path class $[\bar\alpha]$.

The endpoint-fixed concatenation calculations in
[[thm-fundamental-group-laws]] prove that composition is independent of
representatives, associative, and unital, and that reversal gives a two-sided
inverse. Hence every morphism is an isomorphism, so this category is a
groupoid.

No connectedness, local connectedness, basepoint, or universal cover is part
of the definition. If $X=\varnothing$, both its object and morphism classes are
empty. A one-point space still has all of its endpoint-fixed loop classes;
contractibility is not inserted into the definition.

## Convention warning

With the displayed categorical composition, the multiplication in the
categorical automorphism group at $x$ is opposite to the library's published
first-loop-first multiplication on the same underlying loop classes. The next
proposition records the canonical reversal isomorphism; silently identifying
the two products would reverse every later monodromy formula.
