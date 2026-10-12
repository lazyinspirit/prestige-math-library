---
id: def-nrqm-framework-newtonian-spacetime
kind: definition
title: "The Newtonian spacetime arena of the framework"
status: draft
origin: session
domain: physics
dependency_level: 3
deps: [def-cm-affine-time-space, lem-cm-adapted-coordinates-exist-and-are-unique, lem-cm-adapted-charts-and-galilean-transformations]
dependency_roles:
  def-cm-affine-time-space: mathematical-premise
  lem-cm-adapted-coordinates-exist-and-are-unique: mathematical-premise
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The spacetime arena used by the non-relativistic quantum framework: the affine time space with a surjective absolute-time covector, Euclidean simultaneous slices and their affine smooth structure. The definition fixes the objects and their readings in the model; it asserts no dynamics, no equation of motion and no claim that nature is exactly such an arena, and it excludes Lorentzian structure, light cones and any spacetime curvature."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1, printed pages 5-7 (PDF pages 11-13): inertial frames, Galilean relativity and absolute time t' = t + t_0"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-58 (PDF pages 67-70): a particle in R^3 described by a wave function, with the probability interpretation and observable operators"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**The arena.** The non-relativistic quantum framework of this category uses as its spacetime the affine time space of [[def-cm-affine-time-space]]: a quadruple $(V,\tau,g,A)$ consisting of a four-dimensional real vector space $V$, a surjective linear map $\tau:V\to\mathbb R$ (the **absolute-time covector**), the three-dimensional kernel $K=\ker\tau$ (the **spatial displacement space**), a symmetric positive definite bilinear form $g:K\times K\to\mathbb R$ (the **spatial metric**), and an affine space $A$ modelled on $V$ whose elements are called **events**. When the framework speaks of "a particle at position $x$ at time $t$", of "the time interval between two events" or of "the distance between two simultaneous events", these are read in this structure.

**Absolute time and slices.** The absolute time of a displacement $w\in V$ is $\tau(w)$; two events $p,q\in A$ are **simultaneous** when $\tau(q-p)=0$, and simultaneity is an equivalence relation whose classes are the **simultaneous slices**. For a fixed adapted chart and its coordinates $(t,x)$ of [[lem-cm-adapted-coordinates-exist-and-are-unique]], the slices are the level sets of $t$ and the number $t(p)$ is the **time coordinate** of the event $p$. The pair of events of one slice carries the slice distance $d_{g}(p,q)=\sqrt{g(p-q,p-q)}$; no distance is defined between events of different slices by this structure.

**Smooth structure.** $A$ is read with the affine smooth structure determined by adapted coordinates: a curve $\gamma:I\to A$ is of class $C^{k}$ when its coordinate representation $s\mapsto(t(\gamma(s)),x(\gamma(s)))$ in one adapted chart is of class $C^{k}$; the transition law between adapted charts of [[lem-cm-adapted-charts-and-galilean-transformations]] makes this reading independent of the chart. Regularity of curves, of potential functions and of apparatus descriptions of the framework is stated with respect to this smooth structure.

**What the arena does not contain.** The data contain no inner product on $V$, no Lorentzian metric, no light cone, no causal classification, no universal speed and no curvature; they contain no distinguished event, no distinguished time vector and no distinguished spatial basis. In particular the arena alone does not select a frame: the inertial frames of the model and the transformations between them are fixed by the separate definition of the frames on this page and the accompanying postulate.

**Status.** These clauses define the spacetime objects of the model and their elementary readings. They are not a physical postulate that nature is such an arena and not a mathematical theorem; the corresponding adoption is made by the kinematics postulate of this page. No dynamics, force law, potential or matter model is fixed here, and no empirical measurement is recorded.

## Remarks

- The coordinate space of the Galilean transformations of [[def-nrqm-framework-galilei-transformations]] is a model of the coordinate form of this arena: an adapted chart identifies $A$ bijectively with $\mathbb R\times\mathbb R^{3}$, and the transition law between two such charts is one of those transformations, as recorded in [[lem-cm-adapted-charts-and-galilean-transformations]].
- Nothing in this definition fixes units. The readings of the time coordinate in seconds, of spatial coordinates in metres and of slice distances in metres are fixed by the unit and quantity conventions of [[def-nrqm-framework-quantities-and-units]].
