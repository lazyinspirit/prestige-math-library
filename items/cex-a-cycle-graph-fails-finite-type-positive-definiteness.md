---
id: cex-a-cycle-graph-fails-finite-type-positive-definiteness
kind: counterexample
title: A cycle graph is not finite type
status: draft
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

1.2 The nonzero vector $x=(1,\dots,1)$ satisfies $x^{T}Ax=2m-2m=0$: the diagonal contributes $2m$ and each of the $m$ cycle edges contributes $2a_{ij}x_ix_j=-2$. Hence the symmetric matrix $A$ is not positive definite, and since $A$ is already symmetric no symmetrization can make it positive definite. [given, algebra]

2.1 By [L1] a finite-type Cartan matrix must be symmetrizable to a positive definite matrix; $A$ is not, so the cycle is not the Dynkin diagram of any reduced crystallographic root system, even though it is finite and connected. This witnesses the failure of the claimed statement and, by the tree lemma, the general exclusion of loops. [L1, step 1.1, step 1.2] ∎
