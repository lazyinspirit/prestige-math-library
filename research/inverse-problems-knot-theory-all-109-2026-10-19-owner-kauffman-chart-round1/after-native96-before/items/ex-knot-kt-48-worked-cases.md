---
id: ex-knot-kt-48-worked-cases
kind: example
title: "Eight-crossing bracket and trefoil Fox 3-colorings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-encoded-diagram-size-and-exact-output
  - def-quandle-and-knot-coloring
  - alg-kauffman-bracket-state-sum
  - thm-kauffman-bracket-state-sum-procedure-properties
  - alg-dihedral-fox-colorings
  - thm-dihedral-fox-colorings-terminate-and-are-correct
  - lem-dihedral-fox-coloring-count-is-reidemeister-invariant
  - thm-oriented-reidemeister-equivalence-theorem
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The bracket state count and Fox matrix calculations are choice-free. ACω is used only to interpret a coloring-count difference as a knot-type distinction."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §§1.3 and 4.1, pp. 8 and 30–32"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§1.3, trefoil and unknot 3-color counts; §4.1, linear p-coloring model."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §§3.3 and 4.3, pp. 16–18 and 24–25"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§3.3, unknot and trefoil counts and the F3 matrix method; §4.3, exact state count."
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
      locator: "§2, bracket state set and 2^c state summation."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice for the final knot-type distinction. A diagram with $c=8$ crossings has $2^8=256$ Kauffman bracket smoothing states. For the trefoil diagram below, label its three Fox arcs $x_1,x_2,x_3$ so the crossing triples are: at $C_1$, over $x_1$ and under $x_2,x_3$; at $C_2$, over $x_2$ and under $x_3,x_1$; at $C_3$, over $x_3$ and under $x_1,x_2$. Thus the crossing equations are $2x_1-x_2-x_3=0$, $2x_2-x_3-x_1=0$, and $2x_3-x_1-x_2=0$. Over $\mathbb F_3$ the system has nine colorings. The crossingless unknot has one arc and three Fox 3-colorings; because the crossing equation is independent of strand orientations, this count difference distinguishes the underlying knot types.

```tikz
\begin{tikzpicture}[scale=0.82,line cap=round,line join=round,>=stealth]
  % The outside arcs close the three-crossing two-strand braid.
  \draw[->,thick] (-1,-3) .. controls (-2.45,-3) and (-2.45,3) .. (-1,3);
  \draw[->,thick] (1,-3) .. controls (2.45,-3) and (2.45,3) .. (1,3);

  % C1: the upper-left to lower-right strand is over.
  \draw[->,thick] (1,3) -- (0.13,2.13);
  \draw[->,thick] (-0.13,1.87) -- (-1,1);
  \draw[->,very thick] (-1,3) -- (1,1);

  % C2: the upper-left to lower-right strand is over.
  \draw[->,thick] (1,1) -- (0.13,0.13);
  \draw[->,thick] (-0.13,-0.13) -- (-1,-1);
  \draw[->,very thick] (-1,1) -- (1,-1);

  % C3: the upper-left to lower-right strand is over.
  \draw[->,thick] (1,-1) -- (0.13,-1.87);
  \draw[->,thick] (-0.13,-2.13) -- (-1,-3);
  \draw[->,very thick] (-1,-1) -- (1,-3);

  \node[above left] at (0,2) {$C_1$};
  \node[above left] at (0,0) {$C_2$};
  \node[above left] at (0,-2) {$C_3$};
  \node at (-0.54,2.52) {$x_1$};
  \node at (-0.54,0.52) {$x_2$};
  \node at (-0.54,-1.48) {$x_3$};
\end{tikzpicture}
```

The figure is the closure of a two-strand braid with three identical crossings. Each braid strand is oriented downward, and each outside closure arc is oriented upward. At each crossing the upper-left to lower-right strand is continuous and over; the other strand has a gap at the crossing. The labels $x_1,x_2,x_3$ mark the three arcs between undercrossings, and the crossing incidences used in the statement specify the exact matrix independently of the drawing.

## Example references

[[def-encoded-diagram-size-and-exact-output]]

[[def-quandle-and-knot-coloring]]

[[alg-kauffman-bracket-state-sum]]

[[thm-kauffman-bracket-state-sum-procedure-properties]]

[[alg-dihedral-fox-colorings]]

[[thm-dihedral-fox-colorings-terminate-and-are-correct]]

[[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]

[[thm-oriented-reidemeister-equivalence-theorem]]

[[def-countable-choice]]

[Calegari, *Introduction to Knot Theory* (2025), §§1.3 and 4.1](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Roberts, *Knots Knotes* (1999), §§3.3 and 4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

## Facts & Assumptions

**Given:** A nonempty eight-crossing diagram, the stated trefoil incidence data, and $p=3$.

[F1] [[thm-kauffman-bracket-state-sum-procedure-properties]]: a diagram with $c$ crossings visits exactly $2^c$ smoothing assignments.

[F2] [[def-quandle-and-knot-coloring]]: arcs are cut at undercrossings; a Fox coloring assigns one residue to each arc and obeys the crossing equation encoded by the dihedral operation.

[F3] [[alg-dihedral-fox-colorings]]: for odd prime $p$, each crossing contributes $2x_o-x_i-x_j=0$ over $\mathbb F_p$, and the returned set is parametrized by the free variables of the reduced system.

[F4] [[thm-dihedral-fox-colorings-terminate-and-are-correct]]: if there are $f$ free variables, the procedure returns exactly $p^f$ Fox colorings.

[F5] [[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]: the Fox $p$-coloring count is unchanged along every finite sequence of oriented Reidemeister moves and planar isotopies.

[F6] [[thm-oriented-reidemeister-equivalence-theorem]]: under ACω, ambient-isotopic oriented knot diagrams are connected by a finite sequence of those moves.

[A1] [[def-countable-choice]]: ACω is the assumption that every countable family of nonempty sets has a choice function.

## Verification

1.1 With $c=8$, the state-count formula in [F1] gives $2^8=256$ visits. [F1, given, algebra]

1.2 The stated incidences and [F3] give the equations $2x_1-x_2-x_3=0$, $2x_2-x_3-x_1=0$, and $2x_3-x_1-x_2=0$. In $\mathbb F_3$, $-1=2$, so all three rows are $(2,2,2)$. Row reduction leaves one nonzero row and two zero rows, hence one pivot and two free variables. By [F4], the algorithm returns $3^2=9$ trefoil colorings. [F2, F3, F4, given, algebra]

1.3 The crossingless unknot has one arc and no crossing equations, so its matrix has one column and zero rows, rank zero, and one free variable. By [F4], it has $3^1=3$ colorings. [F2, F4, given, algebra]

2.1 The crossing equation $2x_o=x_i+x_j$ is symmetric in the two underarc colors and independent of strand arrows, so reversing a component orientation does not change its Fox coloring set. If the trefoil and unknot were ambient-isotopic as unoriented knots, choose their orientations so the equivalence preserves orientation. By [A1] and [F6] the oriented diagrams would then be joined by a finite Reidemeister sequence, and [F5] would force equal coloring counts. The computed values $9$ and $3$ contradict this, so the underlying knot types are distinct. [A1, F5, F6, step 1.2, step 1.3, algebra] ∎

## Verification references

[[thm-kauffman-bracket-state-sum-procedure-properties]]

[[def-quandle-and-knot-coloring]]

[[alg-dihedral-fox-colorings]]

[[thm-dihedral-fox-colorings-terminate-and-are-correct]]

[[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]

[[thm-oriented-reidemeister-equivalence-theorem]]

[[def-countable-choice]]
