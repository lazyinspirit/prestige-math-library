---
id: thm-knot-linking-number-and-fox-coloring-finite-complexity
kind: theorem
title: "Linking number and Fox coloring finite complexity"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-encoded-diagram-size-and-exact-output
  - alg-oriented-linking-number-from-diagram
  - thm-oriented-linking-number-scan-terminates-and-is-correct
  - lem-linking-number-even-sum-and-reidemeister-invariance
  - alg-dihedral-fox-colorings
  - thm-dihedral-fox-colorings-terminate-and-are-correct
  - lem-dihedral-fox-coloring-count-is-reidemeister-invariant
  - thm-oriented-reidemeister-equivalence-theorem
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The crossing scan, finite-field elimination, and local Fox move bijections are choice-free. ACω is used only to identify the diagram values as ambient-link invariants through the Reidemeister equivalence theorem."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–27 and §4.1, pp. 30–32"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Definition 3.11 and Proposition 3.12; §4.1, Fox p-coloring equations and local move checks."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §§3.2–3.4, pp. 14–19"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§3.2, crossing formula and move invariance; §3.3, F3 linear system and Gaussian elimination; §3.4, p-colorings."
    - title: "Józef H. Przytycki, 3-coloring and other elementary invariants of knots, §§0–1, arXiv:math/0608172"
      url: "https://arxiv.org/pdf/math/0608172"
      locator: "Reidemeister theorem, linking-number convention, and tricoloring."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Let $D$ be a finite regular oriented link diagram with $c$ crossings, $m\ge1$ components, and $a$ arcs as defined in the encoded diagram size definition. For a two-component diagram, after one constant-size component-count check, the linking-number scan visits exactly the $c$ crossings, makes at most $c$ component/sign tests and $c$ integer additions, and returns the exact integer half-sum of mixed crossing signs; its absolute value is at most $c/2$ and it is invariant under ambient isotopy of the oriented link.

For any such diagram and any odd prime $p$, the Fox coloring system has one row per crossing and one column per arc over $\mathbb F_p$. Matrix construction uses at most $2c$ field additions to combine repeated arc coefficients and $ca$ zero-entry writes. If row reduction uses $r$ pivots and has $f=a-r$ free variables, then $r\le\min(c,a)$, pivot search uses at most $ca$ entry tests, and row reduction uses at most $ra+2r(c-1)a$ field arithmetic operations. The algorithm returns exactly $p^f$ Fox colorings. Listing the full solution set after reduction uses at most $p^f(2f(a-f)+a)$ field arithmetic and output-write operations. If only the count is required, $p^f$ can instead be computed by repeated squaring using at most $2\lceil\log_2(f+1)\rceil$ integer multiplications, with at most $f\lceil\log_2p\rceil+1$ magnitude bits. The input convention gives $a\le c+m$, so these bounds depend only on crossings, components, and field size. The coloring count is invariant under ambient isotopy of the oriented link. Field operations count as unit-cost operations; no bit-time bound for those operations or polynomial-time evaluation claim is made.

## Statement references

[[def-encoded-diagram-size-and-exact-output]]

[[alg-oriented-linking-number-from-diagram]]

[[thm-oriented-linking-number-scan-terminates-and-is-correct]]

[[lem-linking-number-even-sum-and-reidemeister-invariance]]

[[alg-dihedral-fox-colorings]]

[[thm-dihedral-fox-colorings-terminate-and-are-correct]]

[[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]

[[thm-oriented-reidemeister-equivalence-theorem]]

[[def-countable-choice]]

[Calegari, *Introduction to Knot Theory* (2025), §§3.3 and 4.1](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Roberts, *Knots Knotes* (1999), §§3.2–3.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Przytycki, *3-coloring and other elementary invariants of knots* (1998), §§0–1](https://arxiv.org/pdf/math/0608172)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a finite regular oriented link diagram $D$, and an odd prime $p$.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the axiom of countable choice.

[F1] [[def-encoded-diagram-size-and-exact-output]]: $c$ is the crossing count, $m$ the number of link components, and $a=c+q\le c+m$ where $q$ counts components with no undercrossings; each finite-field operation is counted as one operation.

[F2] [[alg-oriented-linking-number-from-diagram]]: for exactly two components, the procedure scans the finite crossing list once, adds the sign of each mixed crossing, ignores self-crossings, and returns half the sum.

[F3] [[thm-oriented-linking-number-scan-terminates-and-is-correct]]: the scan terminates after exactly one iteration per crossing and returns the integer linking number.

[F4] [[lem-linking-number-even-sum-and-reidemeister-invariance]]: the mixed crossing-sign half-sum is an integer and is unchanged by every oriented Reidemeister move and planar isotopy; under ACω it is invariant for ambient-isotopic oriented links.

[F5] [[alg-dihedral-fox-colorings]]: for each crossing the matrix row is $2x_o-x_i-x_j=0$ over $\mathbb F_p$; row reduction uses at most $a$ pivots and the output is formed from free-variable assignments.

[F6] [[thm-dihedral-fox-colorings-terminate-and-are-correct]]: if the reduced system has $f$ free variables, the algorithm terminates and returns exactly $p^f$ solutions, namely all Fox $p$-colorings.

[F7] [[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]: each oriented Reidemeister move and planar isotopy preserves the Fox $p$-coloring count by an explicit bijection.

[F8] [[thm-oriented-reidemeister-equivalence-theorem]]: under $\mathrm{AC}_\omega$, two ambient-isotopic oriented regular diagrams are connected by a finite sequence of planar isotopies and oriented Reidemeister moves.

## Proof

1.1 The linking scan performs one visit per element of the finite crossing list by [F2]. On a two-component input each visit makes at most one component-membership test and, for a mixed crossing, one integer addition, so there are at most $c$ tests and $c$ additions after the constant-size component-count check. Each added term is $+1$ or $-1$, hence the absolute value of the sum is at most $c$ and the returned half-sum has absolute value at most $c/2$. The result is an integer and is the diagram's linking number by [F3] and [F4]. [F1, F2, F3, F4, given, algebra]

1.2 For each of the $c$ crossings, [F5] contributes three coefficients to a row. If arc labels repeat, combining at most three contributions requires at most two field additions for that row, so setup uses at most $2c$ additions; initializing the dense $c\times a$ matrix writes $ca$ zeros. There are $a$ columns, and each pivot search checks at most $c$ rows, for at most $ca$ entry tests. [F1, F5, given, construct]

2.1 Let $r$ be the number of pivots, so $r\le\min(c,a)$ and $f=a-r$. Normalizing each pivot row divides at most $a$ entries by its nonzero pivot, for at most $ra$ divisions. Clearing a pivot column from each of at most $c-1$ other rows updates at most $a$ entries, with at most one multiplication and one addition per entry. The row-reduction arithmetic count is therefore at most $ra+2r(c-1)a$. These loops are finite because there are at most $a$ columns and $c$ rows. [F1, F5, step 1.2, algebra]

3.1 There are exactly $p^f$ assignments to the $f$ free variables by [F6]. For each assignment, each of the $a-f$ pivot variables is a linear combination of at most $f$ free variables; computing it uses at most $f$ multiplications and $f$ additions/subtractions, including the final negation. Writing the full solution uses $a$ output entries. Thus listing every coloring uses at most $p^f(2f(a-f)+a)$ field arithmetic and output-write operations. The loop is finite, including $f=0$, when there is one solution and only the $a$ entries are written. [F5, F6, step 2.1, algebra]

4.1 For $f=0$, the count is $1$ without multiplication. For $f\ge1$, binary repeated squaring computes $p^f$ with at most $2\lceil\log_2(f+1)\rceil$ integer multiplications. Since $f\le a$, the magnitude bit length is at most $f\lceil\log_2p\rceil+1$. This count-only postprocessing does not enumerate the solution set and does not change the full-list cost in step 3.1. [F1, F6, step 3.1, algebra]

5.1 The diagram-by-diagram scan, matrix construction, row reduction, and finite solution enumeration above use no choice principle. By [F7], the Fox coloring count is preserved along every finite sequence of planar isotopies and oriented Reidemeister moves; by [A1] and [F8], ambient-isotopic oriented links admit such a sequence. By [F4], the linking-number half-sum has the same move invariance. Thus ACω is used only for the ambient-isotopy interpretations, not for any finite operation count. [A1, F4, F7, F8, step 1.1, step 3.1] ∎

## Proof references

[[def-encoded-diagram-size-and-exact-output]]

[[alg-oriented-linking-number-from-diagram]]

[[thm-oriented-linking-number-scan-terminates-and-is-correct]]

[[lem-linking-number-even-sum-and-reidemeister-invariance]]

[[alg-dihedral-fox-colorings]]

[[thm-dihedral-fox-colorings-terminate-and-are-correct]]

[[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]]

[[thm-oriented-reidemeister-equivalence-theorem]]

[[def-countable-choice]]
