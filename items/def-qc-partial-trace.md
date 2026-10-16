---
id: def-qc-partial-trace
kind: definition
title: "Partial trace over a finite tensor factor"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-tensor-register-and-permutation
  - def-trace-of-an-endomorphism
  - def-coordinate-column-and-matrix-of-a-linear-map
  - thm-unique-coordinates-with-respect-to-an-ordered-basis
  - def-linear-map
justified_by:
  - thm-qc-partial-trace-characterization-and-basis-independence
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
---

## Definition

For a complex vector space $H$, write $\operatorname{End}(H)$ for the set of
linear maps $H\to H$ ([[def-linear-map]]).

Let $H_A,H_B$ be finite-dimensional complex inner-product spaces with fixed
ordered orthonormal bases $(e_i)_{i<a}$ and $(f_j)_{j<b}$, respectively. The
ordered product basis of $H_A\otimes H_B$ has the $A$ index first. For
$R\in\operatorname{End}(H_A\otimes H_B)$ define
$\operatorname{Tr}_B(R)\in\operatorname{End}(H_A)$ by

$$\bigl(\operatorname{Tr}_B(R)\bigr)_{i i'}:=\sum_{j<b}R_{(i,j),(i',j)}.$$

Rows are output coordinates and columns are input coordinates, as in
[[def-coordinate-column-and-matrix-of-a-linear-map]]. If $b=0$, the sum is
empty and equals $0$. The notation $\operatorname{Tr}_B$ means that the second
factor is contracted; the first factor and its order are retained.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H_A,H_B$, the
specified ordered orthonormal bases, and
$R\in\operatorname{End}(H_A\otimes H_B)$.

[F1] The ordered product basis identifies the coordinates of
$H_A\otimes H_B$ with pairs $(i,j)$ in the displayed factor order
([[def-qc-tensor-register-and-permutation]]).

[F2] A linear map is determined by the images of an ordered basis, whose
coordinate columns are unique ([[def-linear-map]],
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

## Proof

1.1 For each basis vector $e_{i'}$ of $H_A$, prescribe $S e_{i'}=\sum_{i<a}(\sum_{j<b}R_{(i,j),(i',j)})e_i$. Each inner and outer sum is finite; when $b=0$ its inner sum is $0$. [given, F1, algebra]

2.1 By the ordered-basis coordinate property [F2], these prescribed images extend uniquely to a linear map $S:H_A\to H_A$, and its matrix has exactly the displayed entries. Each entry is linear in the entries of $R$, so the resulting assignment $R\mapsto S$ is linear. This defines $\operatorname{Tr}_B$ even when either basis is empty. [step 1.1, F1, F2, algebra] ∎
