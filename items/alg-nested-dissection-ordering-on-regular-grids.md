---
id: alg-nested-dissection-ordering-on-regular-grids
kind: algorithm
title: Recursive coordinate-separator ordering for two- and three-dimensional grids
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-symmetric-structural-elimination-graph-and-ordering
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 8, §8.4"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "David Bindel, CS 5220, Lecture 16: Sparse Direct Solvers, slides 7–17"
      url: "https://www.cs.cornell.edu/~bindel/class/cs5220-s10/slides/lec16.pdf"
---

## Definition

Input an integer $k\ge1$ and dimension $d\in\{2,3\}$. The coordinate vertices are $\{0,\ldots,k-1\}^d$. Identify them with the zero-based matrix indices $0,\ldots,k^d-1$ by the lexicographic bijection $q(i_1,\ldots,i_d)=\sum_{a=1}^d i_a k^{d-a}$. The grid graph has an edge between two coordinate vertices exactly when they differ by $1$ in one coordinate and agree in all others. Use the graph and ordering conventions of [[def-symmetric-structural-elimination-graph-and-ordering]] on these indices. Thus $d=2$ gives the five-point graph and $d=3$ the seven-point graph.

Order a rectangular coordinate subbox recursively as follows. For each coordinate whose side length is at least $2$, choose its lower median coordinate, namely the coordinate with $\lfloor(m-1)/2\rfloor$ positions below it in a side of length $m$. Let $S$ be the union of the coordinate hyperplanes at those selected medians. Delete $S$, obtaining at most $2^d$ nonempty rectangular child boxes. Recursively order the child boxes in lexicographic order of their lower corners, then append the vertices of $S$ in lexicographic order. If no coordinate has side length at least $2$, append the remaining vertex as a terminal separator. Apply this rule first to the whole grid. The resulting order is the **coordinate nested-dissection ordering**.

The recursion uses only the graph geometry. It makes no fill or complexity claim for arbitrary graphs.
