---
id: cor-inverse-by-row-reducing-an-augmented-matrix
kind: corollary
title: 'Row reducing $[A\mid I]$ yields $[I\mid A^{-1}]$ exactly when $A$ is invertible'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-invertible-matrix-theorem, thm-elementary-row-operations-are-left-multiplication, cor-a-row-reduction-is-a-product-of-elementary-matrices, def-matrix-equation-augmented-matrix-and-linear-system]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §3.6"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

For $A\in M_n(F)$, row reduction of $[A\mid I_n]$ can reach $[I_n\mid B]$ if and only if $A$ is invertible. Whenever it does, $B=A^{-1}$.

## Facts & Assumptions

**Given:** A square matrix $A$ over a field and a finite row reduction of $[A\mid I_n]$.

[L1] $A$ is invertible exactly when its RREF is $I_n$ ([[thm-invertible-matrix-theorem]]).

[L2] Each row operation is simultaneous left multiplication on both blocks by its elementary matrix ([[thm-elementary-row-operations-are-left-multiplication]]).

[L3] A whole reduction is encoded by one product $E$ of elementary matrices ([[cor-a-row-reduction-is-a-product-of-elementary-matrices]]).

[L4] An augmented matrix records simultaneous row operations on all its columns ([[def-matrix-equation-augmented-matrix-and-linear-system]]).

## Proof

**Proof technique:** constructive.

1.1 Let $E$ be the product encoding the row operations. The two output blocks are $EA$ and $EI_n=E$. [L2, L3, L4, construct]

2.1 If the output is $[I_n\mid B]$, then $EA=I_n$ and $B=E$. By [L1], $A$ is invertible, and multiplying $EA=I_n$ by $A^{-1}$ gives $E=A^{-1}=B$. [step 1.1, L1, algebra]

3.1 Conversely, if $A$ is invertible, [L1] supplies a reduction of $A$ to $I_n$; applying it to $[A\mid I_n]$ gives $[I_n\mid A^{-1}]$ by step 2.1. If the left block cannot reach $I_n$, [L1] says no inverse exists. [step 2.1, L1, discharge-construct] ∎
