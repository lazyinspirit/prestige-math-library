---
id: thm-grid-moves-generate-oriented-knot-isotopy
kind: theorem
title: "Grid moves generate isotopy of oriented knots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - thm-oriented-reidemeister-equivalence-theorem
  - def-countable-choice
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Appendix B.4"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Theorem B.4.1 and its bridge-presentation proof, printed pp.387–393"
---

## Statement

Assume countable choice. Let $G_0,G_1$ be finite planar grid diagrams, with vertical segments over horizontal segments and orientation from $O$ to $X$ in rows and $X$ to $O$ in columns, representing the same oriented knot in the standard oriented three-sphere. A cyclic permutation moves the first row or column to the last position. A row commutation exchanges adjacent rows when the closed intervals between their respective $O$- and $X$-mark heights are disjoint or one lies in the interior of the other; a column commutation is defined by the same condition on the intervals between marking abscissae. A stabilization chooses a marked cell and temporarily removes its marking together with the other markings in its row and column. It splits that row and column into two, places the three removed markings, and adds one new $O$-mark and one new $X$-mark so that every row and column again has one of each. In the four-cell subdivision of the chosen cell, exactly three cells are marked: the chosen marking type appears twice, the other type once, and any one corner may be the empty cell; the two other markings removed from the original row and column are placed outside this block in the new row and column. A destabilization is the inverse operation. Then a finite sequence of cyclic permutations, commutations, stabilizations, and destabilizations carries $G_0$ to $G_1$.
## Statement references

[[def-grid-diagram-for-an-oriented-knot|Planar and toroidal grid conventions and oriented knot diagrams]]

[[thm-oriented-reidemeister-equivalence-theorem|Finite Reidemeister sequences for ambient-isotopic oriented knots]]

[[def-countable-choice|Countable choice]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Theorem B.4.1](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)


