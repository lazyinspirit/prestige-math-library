---
id: lem-nested-dissection-fronts-are-boundary-limited
kind: lemma
title: Nested-dissection grid fronts are bounded by a box separator and its exterior boundary
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-nested-dissection-ordering-on-regular-grids
  - def-symmetric-structural-elimination-graph-and-ordering
  - lem-filled-edge-path-characterisation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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

## Statement

Let $d\in\{2,3\}$ and use the coordinate grid and recursive ordering of [[alg-nested-dissection-ordering-on-regular-grids]]. For a recursion box $B$, let $S_B$ be its median separator; for the terminal one-vertex box take $S_B=B$. Let $\partial^+B$ be the set of grid vertices outside $B$ adjacent to some vertex of $B$. If $v\in S_B$, then every later filled neighbor of $v$ lies in $S_B\cup\partial^+B$. If every side of $B$ has length at most $s$, then
$$
|\{v\}\cup N^+_\pi(v)|\le |S_B|+|\partial^+B|\le 3d\,s^{d-1}.
$$

## Facts & Assumptions


**Given:** The finite nearest-neighbor grid, the recursive coordinate-separator order, and its symbolic elimination graph.

[F1] [[alg-nested-dissection-ordering-on-regular-grids]]: Each box orders all child boxes before its separator; the separator is the union of its selected coordinate hyperplanes, and removing it leaves the child boxes.

[F2] [[lem-filled-edge-path-characterisation]]: A filled edge at the elimination of $v$ is witnessed by an original grid walk whose internal vertices were eliminated before $v$.

[F3] [[def-symmetric-structural-elimination-graph-and-ordering]]: The vertices of each filled graph are exactly those not yet eliminated, and the ordering position strictly increases from a vertex to any later neighbor.

## Proof


1.1 The root box has empty exterior boundary. If $B$ is a child of a box $C$, every grid neighbor just outside $B$ is either in $S_C$ or just outside $C$: distinct child boxes are separated by the removed coordinate hyperplanes. Thus $\partial^+B\subseteq S_C\cup\partial^+C$. Induction up the finite recursion tree, using that each ancestor separator is ordered after all vertices in its child boxes by [F1], shows that every vertex of $\partial^+B$ is ordered after every vertex of $B$. [F1, induction, algebra]

2.1 Fix $v\in S_B$ and a later filled neighbor $w$. If $w\in B$, then $w$ cannot lie in a child box because every child is ordered before $S_B$; hence $w\in S_B$. If $w\notin B$, [F2] gives an original grid walk from $v$ to $w$ whose internal vertices were eliminated before $v$. The first vertex of this walk outside $B$ lies in $\partial^+B$ and, by step 1.1, is ordered after $v$. It therefore cannot be an internal vertex of the walk, so it must be its endpoint $w$. Hence $w\in\partial^+B$. [given, F1, F2, F3, step 1.1, algebra]

3.1 If the side lengths of $B$ are $m_1,\ldots,m_d\le s$, each of its at most $d$ coordinate hyperplanes contains at most $s^{d-1}$ vertices, so $|S_B|\le d s^{d-1}$. The exterior grid neighbors lie across the $2d$ faces, each with at most $s^{d-1}$ vertices, so $|\partial^+B|\le2d s^{d-1}$. The containment in step 2.1 therefore gives the stated column-size bound. [step 2.1, F1, algebra]

4.1 Steps 2.1 and 3.1 establish both the filled-neighbor containment and its numerical bound for every separator vertex, including the terminal one-vertex case. [step 2.1, step 3.1] ∎
