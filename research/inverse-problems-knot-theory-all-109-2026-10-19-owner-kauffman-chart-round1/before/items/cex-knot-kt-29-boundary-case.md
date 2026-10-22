---
id: cex-knot-kt-29-boundary-case
kind: counterexample
title: "A type-I kink changes the raw bracket"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - lem-kauffman-bracket-curl-and-writhe-correction
  - def-oriented-reidemeister-moves
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: one explicit type-I move and two finite bracket evaluations suffice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§III and VI"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §§4.1 and 4.3"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §1.1"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Statement refuted

The false statement is: let $A$ be an indeterminate and, for every nonempty
regular oriented diagram $D$ of an unframed knot with finite crossing set
$C(D)$, let
$$\langle D\rangle=\sum_{S:C(D)\to\{A,B\}}
 A^{a(S)-b(S)}(-A^2-A^{-2})^{|S|-1},$$
where $a(S)$ and $b(S)$ count A- and B-smoothings, the over-strand runs
southwest to northeast, A joins the top and bottom endpoint pairs with weight
$A$, B joins the left and right endpoint pairs with weight $A^{-1}$, and
$|S|$ is the number of state circles. Then
$\langle D\rangle$ depends only on the
ambient-isotopy class of the represented oriented knot.

## Statement references

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket state sum]]

[[lem-kauffman-bracket-curl-and-writhe-correction|Type-I curl factors]]

[[def-oriented-reidemeister-moves|Oriented type-I move]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §§III and VI](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §§4.1 and 4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §1.1](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Facts & Assumptions

**Given:** The false statement above and the bracket state sum on nonempty
regular oriented diagrams after their strand arrows are forgotten.

[F1] A crossing-free one-component diagram has one state with one circle and
bracket $(-A^2-A^{-2})^{1-1}=1$
([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F2] Adding a positive type-I kink multiplies the raw bracket by $-A^3$
([[lem-kauffman-bracket-curl-and-writhe-correction]]).

[F3] An oriented type-I kink is an allowed local Reidemeister replacement and
each such local replacement is realized by an ambient isotopy of the oriented
link ([[def-oriented-reidemeister-moves]],
[[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]).

## Counterexample

1.1 Let $D_0$ be a crossing-free diagram of the oriented unknot. By [F1], $\langle D_0\rangle=1$. [F1, construct]

2.1 Obtain $D_1$ by adding one positive type-I kink to $D_0$. By [F3] the two diagrams represent ambient-isotopic unframed oriented knots, while [F2] gives $\langle D_1\rangle=-A^3$. Since $A$ is an indeterminate, $-A^3\ne1$ in $\mathbb Z[A^{\pm1}]$. Thus the proposed value differs on two diagrams of the same unframed knot, refuting the statement. [F2, F3, algebra] ∎
