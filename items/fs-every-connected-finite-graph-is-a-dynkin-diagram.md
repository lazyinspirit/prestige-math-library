---
id: fs-every-connected-finite-graph-is-a-dynkin-diagram
kind: false-statement
title: Every connected finite graph is Dynkin
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching, prop-finite-type-cartan-matrix-properties, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §7, Proposition 2.78(a) and the affine diagrams, printed pp. 172-173"
landmark: false
proof_strategy: counterexample
---

## Statement

False: a connected finite graph need not be the Dynkin diagram of a
crystallographic root system; positive definiteness and the edge restrictions
exclude most connected graphs.

## Facts & Assumptions

**Given:** A cycle graph on $m\ge3$ vertices and the conventions of the Dynkin diagram.

[L1] The Dynkin diagram of a based root system has $a_{ij}a_{ji}$ edges between vertices $i,j$ and no others; a finite-type Cartan matrix is symmetrizable to a positive definite matrix, and its diagram is a tree ([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]], [[prop-finite-type-cartan-matrix-properties]], [[lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching]]).

## Proof

**Proof technique:** counterexample.

1.1 Let $m\ge3$ and let $G$ be the cycle graph on $m$ vertices. A root system whose Dynkin diagram were $G$ would have Cartan matrix $A=2I-\mathrm{Adj}(G)$, since every edge corresponds to the single relation $a_{ij}=a_{ji}=-1$ and nonedges to $0$; this matrix is symmetric. [L1, algebra]

1.2 The nonzero vector $x=(1,\dots,1)$ satisfies $x^{T}Ax=\sum_i2x_i^{2}+2\sum_{i<j}a_{ij}x_ix_j=2m-2m=0$, because each vertex has exactly two neighbours in a cycle; hence $A$ is not positive definite. [given, algebra]

2.1 Since a finite-type Cartan matrix must be symmetrizable to a positive definite matrix by [L1], no root system has the cycle $G$ as its Dynkin diagram, although $G$ is connected and finite. This refutes the claim that every connected finite graph is a Dynkin diagram. [L1, step 1.1, step 1.2] ∎
