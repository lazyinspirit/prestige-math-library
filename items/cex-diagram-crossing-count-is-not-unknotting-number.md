---
id: cex-diagram-crossing-count-is-not-unknotting-number
kind: counterexample
title: Diagram crossing count can differ from unknotting number
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-countable-choice
  - def-knot-bridge-position-and-unknotting-number
  - def-regular-oriented-link-diagram
  - def-oriented-reidemeister-moves
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, unknotting-number definition and crossing-count distinction, printed pp. 23–25"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§4.2, Reidemeister moves and diagram conventions, printed pp. 34–36"
---

## Statement refuted

Under the Axiom of Countable Choice, the proposed universal statement is that for every smooth oriented knot $K\subset S^3$ and every regular oriented diagram $D$ of a representative of $K$ (a projection with finitely many transverse double points, no other multiple points, oriented strands, and an over/under choice at each double point), the number $c(D)$ of double points equals the unknotting number $u(K)$.

## Statement references

[[def-knot-bridge-position-and-unknotting-number|The separate definitions of diagram crossing count and unknotting number]]

[[def-oriented-reidemeister-moves|Reidemeister-I kink creation and deletion]]

[[def-countable-choice|The countable-choice hypothesis used to define the unknotting number]]

## Facts & Assumptions

**Given:** AC$_\omega$, the standard crossing-free unknot diagram, and a positive integer $k$.

[A1] AC$_\omega$ is the countable-choice axiom under which $u(K)$ is defined. [[def-countable-choice]]

[F1] The standard unknot has bridge number one and unknotting number zero by their definitions. [[def-knot-bridge-position-and-unknotting-number]]

[F2] Each oriented Reidemeister-I creation adds exactly one transverse double point, and each oriented Reidemeister move preserves the represented knot type by an ambient isotopy. [[def-oriented-reidemeister-moves]], [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]

## Counterexample

Let $U$ be the standard unknot and start from its crossing-free regular diagram. Perform $k$ oriented Reidemeister-I kink creations in pairwise disjoint disks along the diagram, obtaining a regular diagram $D_k$ of the same unknot. Then $c(D_k)=k$, whereas $u(U)=0$ and $b(U)=1$. For every $k\ge1$, this gives $c(D_k)\ne u(U)$ and refutes the proposed universal equality.

1.1 By [F2], each of the $k$ moves preserves the represented knot type and adds exactly one crossing, while disjoint supports ensure that no move changes crossings created in another disk. Induction on the finite number of moves gives $c(D_k)=k$ and shows that $D_k$ still represents $U$. [F2, given, induction]

2.1 By [F1], $u(U)=0$ and $b(U)=1$. Since $k\ge1$, step 1.1 yields $c(D_k)=k\ne0=u(U)$, proving the counterexample. [F1, step 1.1, algebra] ∎

## Diagram

This local schematic shows the one-crossing kink created by an R1 move. The horizontal segment is the underpassing branch, the diagonal segment is the overpassing branch, and the outer curved portion returns the strand to itself. Repeating the move in disjoint disks produces the family $D_k$; the count proof uses only the R1 definition, not the drawing.

```tikz
\begin{tikzpicture}[scale=1.0,>=stealth]
  \draw[thick,->] (-2,0)..controls(-1.2,0)and(-0.6,0)..(-0.13,0);
  \draw[thick] (0.13,0)..controls(0.38,0)and(0.58,0)..(0.78,0);
  \draw[thick,->] (0.78,0)..controls(1.45,0.62)and(1.36,-0.78)..(0.58,-0.72)
    ..controls(0.12,-0.68)and(-0.34,-0.34)..(0,0)
    ..controls(0.38,0.38)and(1.22,0.74)..(2,1.0);
  \node[below left] at (-0.1,-0.06) {$\times$};
  \node[below] at (0.65,-0.9) {one R1 kink};
\end{tikzpicture}
```
