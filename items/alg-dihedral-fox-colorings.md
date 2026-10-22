---
id: alg-dihedral-fox-colorings
kind: algorithm
title: "Compute dihedral Fox colorings by row reduction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ def-quandle-and-knot-coloring, lem-dihedral-operation-is-a-quandle, def-regular-oriented-link-diagram ]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Józef H. Przytycki, 3-coloring and other elementary invariants of knots, §2, arXiv:math/0608172, pp. 10–11"
      url: "https://arxiv.org/pdf/math/0608172"
    - title: "V. O. Manturov, Knot Theory, Chapter 5, §5.1, printed pp. 49–52"
      url: "https://varf.ru/rudn/manturov/book.pdf"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §2, arXiv:1002.4429v2, pp. 3–8"
      url: "https://arxiv.org/pdf/1002.4429"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
dependency_level: 2
---

## Definition

Input a finite regular oriented link diagram $D$ with $a$ arcs and $c$ crossings,
fixed finite orderings of its arcs and crossings, and an odd prime $p$. The algorithm returns the full set
$\operatorname{Col}_p(D)$ of assignments of residues in $\mathbb F_p$ to the
arcs satisfying the Fox crossing equations, together with
$|\operatorname{Col}_p(D)|$.

1. Create one variable $x_j$ for each arc in the supplied order, and process
   crossings in the supplied order.
2. At each crossing with overarc $o$ and the two underarcs $i$ and $j$, append
   the homogeneous linear equation $2x_o-x_i-x_j=0$ over $\mathbb F_p$.
   At a crossing, add the coefficients of any repeated arc in that row.
3. Set the next pivot-row index to $r=1$ and process columns from left to
   right. If $r>c$, mark this and every remaining column free and stop. If
   $r\le c$, search rows $r,\ldots,c$ in order for the first nonzero entry in
   the current column. If none exists, mark this column free and continue
   without changing $r$. Otherwise swap the selected row into row $r$, divide
   row $r$ by its nonzero entry in this column, and add multiples of row $r$
   to every other row to clear this column. Record this column as a pivot
   column with pivot row $r$, then increase $r$ by one. After the scan, every
   column not recorded as a pivot column is free.
4. List the free columns in increasing order and enumerate every tuple in
   $\mathbb F_p^f$ in lexicographic order using the residue representatives
   $0,\ldots,p-1$, where $f$ is the number of free columns. If $f=0$, process
   the empty tuple once. For each tuple, assign its coordinates to the free
   variables. For each pivot row, set its pivot variable equal to the negative
   of the sum of the row's free-column coefficients times those assigned free
   variables. Append the resulting assignment in the supplied arc order.
   Return all appended assignments and their number.

## Definition references

[[def-quandle-and-knot-coloring]].

[[lem-dihedral-operation-is-a-quandle]].

[[def-regular-oriented-link-diagram]].

[Przytycki, *3-coloring and other elementary invariants of knots*, §2](https://arxiv.org/pdf/math/0608172).

[Manturov, *Knot Theory*, Chapter 5](https://varf.ru/rudn/manturov/book.pdf).

[Carter, *A Survey of Quandle Ideas*](https://arxiv.org/pdf/1002.4429).
