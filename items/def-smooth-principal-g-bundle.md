---
id: def-smooth-principal-g-bundle
kind: definition
title: Smooth principal $G$-bundle
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-principal-g-bundle-and-associated-fiber-bundle
  - def-lie-group
  - def-smooth-manifold
  - def-smooth-map-between-manifolds-with-boundary
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "D. Husemöller, M. Joachim, B. Jurčo, and M. Schottenloher, Basic Bundle Theory and K-Cohomology Invariants"
      url: "https://www.mathematik.uni-muenchen.de/~schotten/Texte/978-3-540-74955-4_Book_LNP726corr1.pdf"
      locator: "Part I, Chapter 5, §§5.2 and 5.6, printed pp. 57–62 (PDF pp. 72–77)."
    - title: "Jack Smith, Differential Geometry, Cambridge Part III Michaelmas 2022 lecture notes taken by Leonard Tomczak"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/DG_Notes.pdf"
      locator: "Chapter 9, §9.3, printed p. 43 (PDF p. 42)."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $G$ be a finite-dimensional real Lie group, $M$ a smooth manifold, and $P$
a smooth manifold. A **smooth right principal $G$-bundle** is a right principal
$G$-bundle $\pi:P\to M$ in the topological sense of
[[def-principal-g-bundle-and-associated-fiber-bundle]], with the following
additional smooth structure: $\pi$ and the right $G$-action are smooth, and
the principal-bundle charts can be chosen as equivariant diffeomorphisms
$\pi^{-1}(U)\cong U\times G$. Thus each chart respects the projection to
$U$ and the right action on the $G$ factor. The smoothness convention is that
of [[def-smooth-map-between-manifolds-with-boundary]]; boundaryless manifolds
are the default in this item.

The topological principal-bundle clause retains its free, transitive right
action on every fibre and its local triviality. Smoothness adds compatible
differentiable structure; it does not select a connection or assert that a
global trivialization exists. The empty-base case is allowed and then $P$ is
empty by the cited topological definition.
