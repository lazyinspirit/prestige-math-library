---
id: cex-knot-kt-48-boundary-case
kind: counterexample
title: "A finite failed move search is not a negative certificate"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-oriented-reidemeister-moves
  - def-planar-diagram-gauss-and-dowker-codes
  - thm-valid-code-reconstructs-the-declared-link-diagram
  - alg-breadth-first-reidemeister-search
  - thm-reidemeister-enumeration-is-only-a-semidecision
  - thm-oriented-reidemeister-equivalence-theorem
  - def-quandle-and-knot-coloring
  - alg-dihedral-fox-colorings
  - thm-dihedral-fox-colorings-terminate-and-are-correct
  - lem-dihedral-fox-coloring-count-is-reidemeister-invariant
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The crossing-distance calculation is choice-free. ACω is used only for the move-to-ambient-knot equivalence and the separate Fox-coloring distinction of the unknot and trefoil."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §§1.2–1.3 and 4.1"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§1.2–1.3, Reidemeister sequences and knot invariants; §4.1, coloring distinction."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §§2.3 and 3.3"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§2.3, move sequences and unbounded crossing excursions; §3.3, 3-coloring counts."
verification:
  precheck: pass
---

## Statement refuted

Assume ACω. For every nonnegative integer $N$ and every pair of valid normalized oriented codes for connected one-component knot diagrams, if the breadth-first Reidemeister search finds no move path of length at most $N$, then the represented oriented knot types are inequivalent.

## Statement references

[[def-oriented-reidemeister-moves]]

[[def-planar-diagram-gauss-and-dowker-codes]]

[[thm-valid-code-reconstructs-the-declared-link-diagram]]

[[alg-breadth-first-reidemeister-search]]

[[thm-reidemeister-enumeration-is-only-a-semidecision]]

[[thm-oriented-reidemeister-equivalence-theorem]]

[[def-quandle-and-knot-coloring]]

[[alg-dihedral-fox-colorings]]

[[thm-dihedral-fox-colorings-terminate-and-are-correct]]

[[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]

[[def-countable-choice]]

[Calegari, *Introduction to Knot Theory* (2025), §1.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Roberts, *Knots Knotes* (1999), §2.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

## Facts & Assumptions

**Given:** ACω, a nonnegative integer $N$, the crossingless unknot diagram $U_0$, and the depth-limited breadth-first move search.

[F1] [[def-oriented-reidemeister-moves]]: R1 changes the crossing count by one, R2 changes it by two, R3 preserves it, and planar isotopy preserves it.

[F2] [[alg-breadth-first-reidemeister-search]]: each finite breadth layer is fully processed before the next, and no finite layer returns an inequivalence result.

[F3] [[def-planar-diagram-gauss-and-dowker-codes]]: normalized one-component oriented planar-diagram codes use the finite crossing, dart-pairing, rotation, orientation, over/under, sign, and outer-face data; the crossingless one-component code records its circle orientation.

[F4] [[thm-valid-code-reconstructs-the-declared-link-diagram]]: the normalized code of a regular diagram with $c$ crossings appears among the valid one-component codes enumerated at bound $c$, and a valid code reconstructs its declared diagram.

[F5] [[def-quandle-and-knot-coloring]]: a Fox coloring assigns one element of the coloring quandle to each arc and satisfies the crossing relation determined by the overarc and underarcs.

[F6] [[alg-dihedral-fox-colorings]]: for odd prime $p$, each crossing contributes $2x_o-x_i-x_j=0$ over $\mathbb F_p$ and the reduced system parametrizes colorings by free variables.

[F7] [[thm-dihedral-fox-colorings-terminate-and-are-correct]]: if the reduced system has $f$ free variables, the algorithm returns exactly $p^f$ Fox colorings.

[F8] [[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]: for odd prime $p$, the Fox coloring count is unchanged along every finite sequence of oriented Reidemeister moves and planar isotopies.

[F9] [[thm-oriented-reidemeister-equivalence-theorem]]: under ACω, two oriented diagrams represent equivalent oriented knots exactly when a finite sequence of planar isotopies and oriented Reidemeister moves connects them.

[A1] [[def-countable-choice]]: ACω is the assumption that every countable family of nonempty sets has a choice function.

## Counterexample

1.1 Starting with $U_0$, insert $2N+1$ disjoint type-I kinks, one at a time, to form a diagram $U_N$. Each insertion is one R1 move, so deleting the kinks gives an explicit sequence of $2N+1$ moves from $U_N$ to $U_0$. Both diagrams are regular one-component knot diagrams; their normalized codes are valid and occur among the enumerated candidates at their crossing bounds by [F3] and [F4]. By [A1] and [F9], the finite move sequence makes the represented oriented knots equivalent. [A1, F1, F3, F4, F9, given, construct]

2.1 The crossing count difference is $c(U_N)-c(U_0)=2N+1$. By [F1], any single Reidemeister move changes crossing count by at most two. A path of at most $N$ moves could therefore change the crossing count by at most $2N$, so no such path connects these two diagrams. The search through depth $N$ completes its finite layers by [F2] without finding a path, although the diagrams are equivalent by step 1.1. This refutes the statement. [F1, F2, step 1.1, algebra]

3.1 The crossingless unknot has one arc and no crossing equations, so [F5]–[F7] give $3^1=3$ Fox 3-colorings. For the standard trefoil with arcs $x_1,x_2,x_3$, the crossing equations are $2x_1-x_2-x_3=0$, $2x_2-x_3-x_1=0$, and $2x_3-x_1-x_2=0$. In $\mathbb F_3$, $-1=2$, so all rows are $(2,2,2)$; the matrix has rank one and two free variables, giving $3^2=9$ colorings by [F6] and [F7]. These equations do not use strand arrows, so reversing either orientation leaves the count unchanged. If the underlying unoriented knots were ambient-isotopic, orient them compatibly; [A1] and [F9] give a finite oriented move sequence, and [F8] forces the counts to agree, contradicting $3\ne9$. Thus the Fox count is an actual distinction, while a finite failed search alone is not one. [A1, F5, F6, F7, F8, F9, algebra] ∎

## Sources

[[def-oriented-reidemeister-moves]]

[[def-planar-diagram-gauss-and-dowker-codes]]

[[thm-valid-code-reconstructs-the-declared-link-diagram]]

[[alg-breadth-first-reidemeister-search]]

[[thm-reidemeister-enumeration-is-only-a-semidecision]]

[[def-quandle-and-knot-coloring]]

[[alg-dihedral-fox-colorings]]

[[thm-dihedral-fox-colorings-terminate-and-are-correct]]

[[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]

[[def-countable-choice]]
