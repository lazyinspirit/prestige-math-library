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
  - lem-grid-bridge-like-refinement
  - lem-planar-isotopy-preserves-grid-move-class
  - lem-grid-reidemeister-moves-with-arbitrary-exterior
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Appendix B.4"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Theorem B.4.1 and its bridge-presentation proof, printed pp.387–393"
---

## Statement

Assume countable choice. Let $G_0,G_1$ be finite planar grid diagrams, with vertical segments over horizontal segments and orientation from $O$ to $X$ in rows and $X$ to $O$ in columns, representing the same oriented knot in the standard oriented three-sphere. A cyclic permutation moves the first row or column to the last position. A row commutation exchanges adjacent rows when the closed intervals between their respective $O$- and $X$-mark abscissae are disjoint or one lies in the interior of the other; a column commutation is defined by the same condition on the intervals between marking heights. A stabilization chooses a marked cell and temporarily removes its marking together with the other markings in its row and column. It splits that row and column into two, places the three removed markings, and adds one new $O$-mark and one new $X$-mark so that every row and column again has one of each. In the four-cell subdivision of the chosen cell, exactly three cells are marked: the chosen marking type appears twice, the other type once, and any one corner may be the empty cell; the two other markings removed from the original row and column are placed outside this block in the new row and column. A destabilization is the inverse operation. Then a finite sequence of cyclic permutations, commutations, stabilizations, and destabilizations carries $G_0$ to $G_1$.
## Statement references

[[def-grid-diagram-for-an-oriented-knot|Planar and toroidal grid conventions and oriented knot diagrams]]

[[thm-oriented-reidemeister-equivalence-theorem|Finite Reidemeister sequences for ambient-isotopic oriented knots]]

[[def-countable-choice|Countable choice]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Theorem B.4.1](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)



## Facts & Assumptions

**Given:** Countable choice and the two finite grids representing the same oriented knot, with the full marked move conventions in the Statement.

[F1] [[lem-grid-bridge-like-refinement]] refines any nonempty grid to a bridge-like grid by actual marked stabilizations and legal commutations, preserving the decorated planar-isotopy class after smoothing.

[F2] [[thm-oriented-reidemeister-equivalence-theorem]] connects regular diagrams of equivalent oriented links by finitely many planar isotopies and oriented R1/R2/R3 moves under countable choice.

[F3] [[lem-planar-isotopy-preserves-grid-move-class]] connects arbitrary bridge rectifications of planar-isotopic bridge diagrams by finitely many permitted grid moves.

[F4] [[lem-grid-reidemeister-moves-with-arbitrary-exterior]] supplies bridge representatives of the endpoints of any local Reidemeister move and connects arbitrary rectifications of any such bridge representatives, with arbitrary exterior and every oriented sign variant.

## Proof

1.1 A knot grid is nonempty. Apply [F1] to each $G_i$, obtaining a finite grid-move sequence to a bridge-like grid $B_i$. Smooth $B_i$ as in that supplier to a bridge diagram $D_i$. Its crossing decorations and strand orientation agree with the original grid diagram, and the supplier proves planar isotopy after smoothing. Thus $D_0,D_1$ represent the same oriented knot. The three-mark splits and strict interval commutations in [F1] are among those specified here: the retained exterior row and column partners provide the two markings outside the stabilization block in the Statement. No unlisted shared-endpoint switch has been used. [F1, given, construct]

2.1 By [F2] choose a finite sequence of planar isotopies and oriented Reidemeister moves from $D_0$ to $D_1$. Compose successive planar isotopies, and regard each remaining Reidemeister move as an edge between its two decorated planar-isotopy classes. The sequence now traverses finitely many such classes, with the first and last represented by $D_0,D_1$. If there is no Reidemeister edge, these two diagrams are planar isotopic. Otherwise each intermediate class is incident to a Reidemeister edge and has a bridge representative by [F4]. Choose one bridge representative for each occurrence of a class in this finite sequence, keeping $D_0,D_1$ at its ends, and choose a bridge rectification there. The choices are finite; no stronger choice principle is invoked. [F2, F4, step 1.1, construct]

3.1 Across a Reidemeister edge, the chosen bridge representatives need only be planar isotopic to that edge's original endpoint diagrams. This is exactly the relative-representative interface of [F4], so their chosen grid rectifications are joined by actual grid moves, with every exterior strand included. Across an interval with only planar isotopy, [F3] joins the chosen rectifications. This also treats the sequence with no Reidemeister edge. The endpoint rectifications may be taken to be precisely $B_0,B_1$, because both suppliers apply to arbitrary rectifications. Concatenating the finitely many constituent finite sequences gives a sequence of allowed commutations, stabilizations and destabilizations from $B_0$ to $B_1$. [F3, F4, step 2.1, construct, cases]

4.1 Prepend the refinement from $G_0$ to $B_0$ and append the reversed refinement from $B_1$ to $G_1$. Reversing a stabilization gives a destabilization and reversing a legal commutation gives a legal commutation, so all operations remain allowed. This produces the required finite sequence from $G_0$ to $G_1$. The proof needs no cyclic permutation, but allowing those additional moves in the Statement does not change the conclusion. The local suppliers cover all marking types and strand orientations, so the sequence preserves the prescribed oriented-knot convention throughout. [F1, step 1.1, step 3.1, construct] ∎
