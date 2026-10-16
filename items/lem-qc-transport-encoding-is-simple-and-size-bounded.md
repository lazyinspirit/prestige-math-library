---
id: lem-qc-transport-encoding-is-simple-and-size-bounded
kind: lemma
title: "Normalized transport encoding is a finite simple graph of bounded size"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-normalized-transport-schedule, def-finite-simple-graph]
justified_by: []
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II D–F"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Let $C$ be an $n$-wire, $d$-layer circuit and let $R$ be the number of rounds
in the normalized schedule. Form a candidate vertex list
$V_T=\{v_{j,s}:1\le j\le n,\ 0\le s\le R\}$, horizontal edges
$\{v_{j,s-1},v_{j,s}\}$, and vertical edges
$\{v_{j,s-1},v_{k,s-1}\}$ for each $\{j,k\}\in M_s$. Each edge list is
loop-free and duplicate-free, the lists are disjoint, and their union is a
finite simple graph with exactly $n(R+1)$ vertices and $R\le3d$; thus the
graph object used in the Definition is well-defined.

## Facts & Assumptions

**Given:** A finite normalized transport schedule and the displayed vertex
and edge-list construction.

[F1] Every original layer contributes zero, one, two, or three rounds, each
with a matching $M_s$ ([[def-qc-normalized-transport-schedule]]). The
horizontal and vertical edge lists are defined in the Statement.

[F2] A finite simple graph has a finite vertex set and an edge set whose
members are two-element subsets of the vertex set ([[def-finite-simple-graph]]).

## Proof


1.1 Each original layer contributes at most three rounds by [F1], hence $0\le R\le3d$. The vertex list is the Cartesian product of $n$ wire labels and $R+1$ column labels, so it has exactly $n(R+1)$ vertices. If $n=0$, all layers are empty and $R=0$; if $n=1$, every matching is empty. [F1, algebra, cases]

1.2 A horizontal edge has endpoints in distinct consecutive columns. Two horizontal edges can be the same unordered pair only if their wire and consecutive column pair agree, so the horizontal list has no loops or duplicates. A vertical edge has two distinct wire endpoints because each matching edge joins distinct wires, and no unordered wire pair repeats in a matching. These are the raw lists specified in the Statement. [F1, algebra]

2.1 Vertical edges from different rounds lie in different columns. A vertical edge has both endpoints in one column, while a horizontal edge has endpoints in two columns; thus the lists are disjoint. Together with step 1.2, the edge list is a finite list of distinct two-element subsets of the finite vertex list. [F1, step 1.2, algebra]

3.1 The vertex set and edge set from step 1.1 and step 1.2 and step 2.1 therefore satisfy the finite-simple-graph definition [F2]. [step 1.1, step 1.2, step 2.1, F2] ∎

