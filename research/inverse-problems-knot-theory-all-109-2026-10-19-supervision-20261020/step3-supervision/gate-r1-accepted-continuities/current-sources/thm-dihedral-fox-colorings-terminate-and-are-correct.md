---
id: thm-dihedral-fox-colorings-terminate-and-are-correct
kind: theorem
title: "The Fox-coloring algorithm terminates and returns all colorings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ alg-dihedral-fox-colorings, def-regular-oriented-link-diagram ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Józef H. Przytycki, 3-coloring and other elementary invariants of knots, §2, arXiv:math/0608172, pp. 10–11"
      url: "https://arxiv.org/pdf/math/0608172"
    - title: "V. O. Manturov, Knot Theory, Chapter 5, §5.1, printed pp. 49–52"
      url: "https://varf.ru/rudn/manturov/book.pdf"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §2, arXiv:1002.4429v2, pp. 3–8"
      url: "https://arxiv.org/pdf/1002.4429"
dependency_level: 3
---

## Statement

For every odd prime $p$ and every finite regular oriented link diagram $D$,
the algorithm in the Definition terminates and returns exactly
$\operatorname{Col}_p(D)$. If its reduced system has $f$ free variables, it
returns $p^f$ colorings. For a diagram with $a$ arcs and $c$ crossings it uses
at most $\min(a,c)$ pivots, at most $ac$ pivot-search entry tests, at most $ac$
row additions to clear pivot columns, at most $a^2c$ coefficient updates in
those row additions, and at most $a^2$ divisions to normalize pivot rows.

## Statement references

[[alg-dihedral-fox-colorings]].

[[def-regular-oriented-link-diagram]].

[Przytycki, *3-coloring and other elementary invariants of knots*, §2](https://arxiv.org/pdf/math/0608172).

## Facts & Assumptions

**Given:** An odd prime $p$ and a finite regular oriented link diagram $D$ with $a$ arcs and $c$ crossings.

[F1] [[alg-dihedral-fox-colorings]]: the input equations are $2x_o-x_i-x_j=0$ over $\mathbb F_p$; each pivot is selected in the leftmost available column and row, normalized, and cleared in every other row.

[F2] [[def-regular-oriented-link-diagram]]: a regular diagram has finitely many crossings and finitely many arcs between crossings.

[A1] $p$ is prime; thus every nonzero residue modulo $p$ is invertible by Bézout's identity.

## Proof

1.1 Each crossing contributes one linear equation in the $a$ arc variables, so the algorithm forms a $c\times a$ matrix over $\mathbb F_p$. Addition and multiplication of residue classes are well-defined because congruence modulo $p$ is preserved by sums and products. If a residue $r$ is nonzero, then $\gcd(r,p)=1$, so integers $u,v$ satisfy $ur+vp=1$ and $u$ is the inverse of $r$ modulo $p$. The field hypothesis in [A1] therefore supplies every division used by the pivot instructions in [F1]. [given, F1, F2, A1, construct]

2.1 Every row operation in [F1] preserves the solution set of the homogeneous system. A row swap is reversible by the same swap; multiplying a row by a nonzero scalar is reversible by multiplying by its inverse; and adding a multiple of one row to another is reversible by subtracting the same multiple. Each transformed system is therefore equivalent to the preceding one. [F1, step 1.1]

2.2 The algorithm visits each of the $a$ columns once, and each pivot search inspects at most $c$ rows, for at most $ac$ pivot-search entry tests. There are at most $\min(a,c)$ pivots. If $c=0$, there are no pivots or row additions. If $c>0$, each pivot adds a multiple of its row to at most $c-1$ other rows, so at most $ac$ row additions occur; each addition updates at most $a$ coefficients, for at most $a^2c$ coefficient updates. Normalizing each pivot row divides at most $a$ entries, for at most $a^2$ divisions. The loops are finite and the chosen first nonzero entry makes the procedure deterministic. [F1, F2, step 1.1]

3.1 At termination, each pivot column has a single $1$ in its pivot row and zeros in every other row; earlier pivot columns stay cleared because each later pivot row is zero in those columns. Each nonpivot column is free. The pivot equations uniquely determine the pivot variables from arbitrary free-variable values, and every such assignment satisfies the reduced system. By step 2.1 the reduced system has exactly the original solution set, so the returned assignments are exactly the Fox colorings. [F1, step 2.1, step 2.2, algebra]

4.1 There are exactly $p^f$ choices of the $f$ free variables, and each determines one distinct solution. If $a=0$, then $f=0$ and the empty diagram has its unique empty assignment; if $c=0$, every arc variable is free and all $p^a$ assignments are returned. The stated pivot, search, addition, update, and division bounds follow from step 2.2. [given, step 2.2, step 3.1, algebra] ∎

## Sources

[[alg-dihedral-fox-colorings]].

[[def-regular-oriented-link-diagram]].

