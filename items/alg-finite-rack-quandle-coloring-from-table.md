---
id: alg-finite-rack-quandle-coloring-from-table
kind: algorithm
title: "Check a finite rack table and enumerate diagram colorings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ def-rack-fundamental-quandle-and-adjoint-group, def-regular-oriented-link-diagram ]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sam Nelson, Link invariants from finite racks, §§2.1, 2.2 and 3, arXiv:0808.0029v3, pp. 2–7"
      url: "https://arxiv.org/pdf/0808.0029"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §2, arXiv:1002.4429v2, pp. 3–8"
      url: "https://arxiv.org/pdf/1002.4429"
verification:
  precheck: n/a
dependency_level: 2
---

## Definition

Input an integer $m\ge1$, a table $T\in\{1,\ldots,m\}^{m\times m}$ with
entry $T[x,y]$ intended to be $x*y$, a mode "rack" or "quandle", a finite
regular oriented link diagram $D$ with $a$ arcs and $c$ crossings, and fixed
finite orderings of its arcs and crossings. If the table is not $m\times m$,
return invalid-table-shape with its row lengths. If an entry is outside
$\{1,\ldots,m\}$, return invalid-table-entry with its row, column, and value.
Otherwise perform these checks in order:

1. For each $y=1,\ldots,m$, check whether the column
   $(T[1,y],\ldots,T[m,y])$ is a permutation of $\{1,\ldots,m\}$. If not,
   return right-translation-not-bijective with $y$, a repeated value and a
   missing value.
2. For each ordered triple $(x,y,z)$ in lexicographic order, check
   $T[T[x,y],z]=T[T[x,z],T[y,z]]$. If not, return
   self-distributivity-fails with $(x,y,z)$ and both table values.
3. In quandle mode, check $T[x,x]=x$ for each $x$ in increasing order. If
   not, return idempotency-fails with $x$ and $T[x,x]$.

If the selected axioms pass, enumerate the $m^a$ functions from the supplied
ordered arcs of $D$ to $\{1,\ldots,m\}$ in lexicographic order. Retain an assignment
exactly when it satisfies the crossing rule in the rack/quandle Definition,
using the inverse column permutation when the rule calls for the right
division. Return the retained assignments and their number. No correctness or
complexity claim is part of this algorithm's Definition.

## Definition references

[[def-rack-fundamental-quandle-and-adjoint-group]].

[[def-regular-oriented-link-diagram]].

[Nelson, *Link invariants from finite racks*, §§2.1 and 3](https://arxiv.org/pdf/0808.0029).

[Carter, *A Survey of Quandle Ideas*](https://arxiv.org/pdf/1002.4429).
