---
id: def-global-geometric-lefschetz-number
kind: definition
title: "Geometric Lefschetz number (index sum)"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-local-fixed-point-index, lem-a-closed-discrete-subset-of-a-compact-space-is-finite, lem-fixed-points-are-graph-diagonal-intersections, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-manifold, thm-hausdorff-iff-the-diagonal-is-closed, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-continuous-map-top, def-compact-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed p. 119 (the global Lefschetz number of a Lefschetz map is the sum of its local numbers)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §5, printed p. 12 (I(f) defined as the signed count of fixed points)"
dependency_level: 1
---

## Definition

Let $M$ be a closed (compact, boundaryless) smooth $n$-manifold, $n\ge1$, and
let $f:M\to M$ be a smooth map all of whose fixed points are isolated
([[def-smooth-manifold]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]],
[[def-local-fixed-point-index]]). Then $\operatorname{Fix}(f)$ is finite: it is
closed, being the preimage under the continuous graph map $x\mapsto(x,f(x))$ of
the diagonal, which is closed in the Hausdorff space $M\times M$
([[thm-hausdorff-iff-the-diagonal-is-closed]],
[[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]],
[[def-continuous-map-top]], [[lem-fixed-points-are-graph-diagonal-intersections]]),
and it is discrete by hypothesis, so
[[lem-a-closed-discrete-subset-of-a-compact-space-is-finite]] gives finiteness.
The **geometric Lefschetz number** of $f$ is

$$I(f):=\sum_{x\in\operatorname{Fix}(f)}\operatorname{ind}_x(f)\in\mathbb Z,$$

the finite sum of the local fixed point indices of
[[def-local-fixed-point-index]]; for a fixed-point-free $f$ this is the empty sum
$I(f)=0$. The number is defined without orienting $M$ and without any choice
principle. It is not asserted here to be homotopy invariant or to equal a
homology trace: those are [[thm-lefschetz-hopf-index-formula]] and
[[cor-lefschetz-number-is-homotopy-invariant]].

## Remarks

- **Isolatedness is a hypothesis, not a conclusion.** The definition applies to
  every smooth self-map of a closed manifold whose fixed points are isolated,
  degenerate or not; for a nondegenerate fixed point the index is computed by
  [[thm-index-of-a-nondegenerate-fixed-point]], but the sum itself does not
  require nondegeneracy. A map with non-isolated fixed points, such as the
  identity of a positive-dimensional closed manifold, is outside this
  definition; its Lefschetz number is defined algebraically in
  [[def-algebraic-lefschetz-number]], and the identity of the two notions on the
  overlap is [[thm-lefschetz-hopf-index-formula]].
- **Discreteness from the subspace topology.** "Isolated" means that every
  $x\in\operatorname{Fix}(f)$ has a neighbourhood meeting $\operatorname{Fix}(f)$
  only in $x$, i.e. that $\{x\}$ is open in the subspace
  $\operatorname{Fix}(f)$; this is the discreteness hypothesis of
  [[lem-a-closed-discrete-subset-of-a-compact-space-is-finite]], which is what
  makes the displayed sum finite.
