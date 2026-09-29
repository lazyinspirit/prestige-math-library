---
id: def-connected-sum-of-compact-surfaces
kind: definition
title: "Connected sums of compact connected surfaces, with disk and gluing choices retained"
status: published
origin: pipeline
deps: [def-topological-manifold-without-boundary, def-quotient-topology]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6 §6.4, Definition 6.6, printed pp.96–97"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§§1–3, printed pp.1–6; explicit standard models"
pipeline_run: frontier-36-complete
---

## Definition

Let $S$ and $T$ be nonempty compact connected boundaryless topological
2-manifolds ([[def-topological-manifold-without-boundary]]). Choose embedded
closed disks $D_S\subset S$ and $D_T\subset T$ whose boundaries lie in the
respective coordinate charts, and choose a homeomorphism
$\phi:\partial D_S\to\partial D_T$. Define the **connected-sum model**
$S\#_\phi T$ to be

$$\bigl((S\setminus\operatorname{int}D_S)\sqcup(T\setminus\operatorname{int}D_T)\bigr)/\!\sim_\phi.$$

with the quotient topology ([[def-quotient-topology]]), where
$x\sim_\phi\phi(x)$ for every $x\in\partial D_S$ and all other points are
identified only with themselves. When $S$ and $T$ are oriented, we require
$\phi$ to reverse the induced orientations of the two boundary circles. For
unoriented factors, the homeomorphism $\phi$ is part of the model data.

An iterated connected sum retains the disks, boundary maps, and parentheses
used at every binary gluing. In this library, a displayed standard normal form
uses the fixed polygonal model obtained by concatenating its indicated handle
blocks $aba^{-1}b^{-1}$ or crosscap blocks $aa$. No assertion that changing
the disk or gluing choices preserves the homeomorphism type is included in
this definition; later proofs use the explicit models they construct.
