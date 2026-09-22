---
id: cex-a-cycle-graph-fails-finite-type-positive-definiteness
kind: counterexample
title: A cycle graph is not finite type
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-finite-type-cartan-matrix-properties, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §7, Proposition 2.78(a) and the affine diagram discussion, printed pp. 172-173"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 23, Section 23.8, the loop argument, printed p. 127"
landmark: false
proof_strategy: counterexample
verification:
  audited: 2026-09-22
---

## Statement refuted

Every finite connected graph is the Dynkin diagram of a finite-type Cartan
matrix, so positive definiteness imposes no restriction on connected diagrams.

## Facts & Assumptions

**Given:** An integer $m\ge3$, the cycle graph $G$ on $m$ vertices, and the matrix $A=2I-\operatorname{Adj}(G)$.

[L1] A finite-type Cartan matrix is symmetrizable to a positive definite matrix: there is a diagonal $D$ with positive diagonal entries such that $DAD^{-1}$ is symmetric positive definite ([[prop-finite-type-cartan-matrix-properties]]).

[L2] The Cartan matrix of a based root system has $a_{ij}a_{ji}=1$ on each simple edge and $0$ on nonedges, so the diagram of $A$ would be $G$ ([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

## Proof

**Proof technique:** explicit witness.

1.1 The matrix $A=2I-\operatorname{Adj}(G)$ is symmetric and satisfies $a_{ii}=2$, $a_{ij}=-1$ for adjacent $i\ne j$ and $a_{ij}=0$ otherwise; its diagram, as in [L2], is the cycle $G$ on $m\ge3$ vertices. [L2, algebra]

1.2 The nonzero vector $x=(1,\dots,1)$ satisfies $Ax=0$, because every row has diagonal entry $2$ and exactly two entries $-1$. Equivalently $x^{T}Ax=2m-2m=0$. Hence $A$ is not positive definite; moreover every diagonal conjugate $DAD^{-1}$ has the nonzero null vector $Dx$, so no symmetric diagonal conjugate can be positive definite. [given, algebra]

2.1 By [L1] a finite-type Cartan matrix must be symmetrizable to a positive definite matrix; $A$ is not. Moreover, [L2] makes $A$ the only Cartan matrix with this unoriented simple-edge cycle: on each edge the nonpositive integral entries have product $1$, so both are $-1$. Thus the cycle is not a finite-type Dynkin diagram even though it is finite and connected. This explicit family suffices to refute the claimed statement; no broader tree assertion is needed. [L1, L2, step 1.1, step 1.2] ∎
