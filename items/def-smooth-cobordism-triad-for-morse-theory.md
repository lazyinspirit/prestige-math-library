---
id: def-smooth-cobordism-triad-for-morse-theory
kind: definition
title: "Smooth cobordism triad for Morse theory"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-topological-manifold-with-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-embedded-smooth-submanifold-with-boundary, def-smooth-collar-of-a-manifold-boundary, thm-collar-neighborhood-theorem, def-smooth-map-between-manifolds-with-boundary, def-compact-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "definition"
---

## Definition

A **smooth cobordism triad** $(W;M_0,M_1)$ consists of the following data.

- A compact smooth $n$-manifold with boundary $W$
  ([[def-topological-manifold-with-boundary]],
  [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]],
  [[def-compact-space]]).
- For $n\ge1$, two closed embedded smooth $(n-1)$-submanifolds
  $M_0,M_1\subseteq\partial W$ with $\partial W=M_0\sqcup M_1$
  ([[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]],
  [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]],
  [[def-embedded-smooth-submanifold-with-boundary]]).
- Fixed collars of both faces in $W$
  ([[def-smooth-collar-of-a-manifold-boundary]]), stipulated as part of the
  data. Under $\mathrm{AC}_\omega$, their existence is guaranteed by
  [[thm-collar-neighborhood-theorem]]; the definition itself makes no
  unconditional collar-existence assertion.

For $n=0$, the convention is $\partial W=M_0=M_1=\varnothing$: a zero-dimensional manifold has discrete point charts and empty boundary. The two collar domains are empty and their unique maps supply the collar data. No manifold of dimension $-1$ is introduced. Reversal retains the same empty faces.

The two faces are the **incoming** face $M_0$ and the **outgoing** face $M_1$;
they are disjoint by the decomposition $\partial W=M_0\sqcup M_1$ fixed by
the data. Each face is a union of boundary components and need not be connected. Either face may
be empty: $\partial W=\varnothing$ with $M_0=M_1=\varnothing$ is allowed, and so
is $M_0=\varnothing$, $M_1=\partial W$. All smooth maps between manifolds with
boundary are the ones of
[[def-smooth-map-between-manifolds-with-boundary]], and all diffeomorphisms
below are diffeomorphisms of that category.

The **reversed triad** of $(W;M_0,M_1)$ is $(W;M_1,M_0)$: it carries the same
manifold $W$ with the two faces exchanged and with the same fixed collars, read
with the opposite roles.

No orientation is required, and an orientation, when present, is extra
structure: no statement on this page uses one unless it is listed among the
hypotheses.
