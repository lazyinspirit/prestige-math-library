---
id: thm-grid-commutation-stabilization-invariance-proof
kind: theorem
title: "Commutation and stabilization invariance of grid complexes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-grid-rectangle-boundary-square-zero-and-filtration
  - lem-grid-rectangle-differential-squares-to-zero
  - lem-grid-marking-variables-chain-homotopic
  - thm-grid-moves-generate-oriented-knot-isotopy
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapters 5 and 13"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Commutation maps and homotopies, printed pp.91–99; stabilization and filtered invariance, printed pp.99–110 and 252–268"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §§1–2"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Grid-complex comparison route and the explicit boundary of the analytic proof"
---

## Statement

Let $G$ and $G'$ be one-component grid diagrams related by one cyclic permutation, commutation, stabilization, or destabilization as defined in the grid-move theorem. After identifying all marking variables $U_i$ with a single variable $U$, the full filtered minus complexes returned by the grid-complex algorithm are filtered chain homotopy equivalent over $\mathbb F_2[U]$, with equivalences preserving the Maslov grading and Alexander filtration. For each move, finite grid-domain counts give filtered chain maps in both directions and filtered chain homotopies from both composites to the identity. Under commutation the tilde homologies are isomorphic; under a stabilization from grid number $n$ to $n+1$, the tilde homology changes by tensoring with the two-dimensional bigraded vector space $V$ with one generator in bidegree $(0,0)$ and one in bidegree $(-1,-1)$.

## Statement references

[[def-grid-diagram-for-an-oriented-knot|Grid moves, states, and rectangle conventions]]

[[alg-grid-knot-floer-complex|Full filtered and tilde grid complexes]]

[[lem-grid-marking-variables-chain-homotopic|Identification of marking-variable actions]]

[[thm-grid-moves-generate-oriented-knot-isotopy|Grid moves connect diagrams of the same oriented knot]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapters 5 and 13](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §§1–2](https://arxiv.org/pdf/math/0607691)

