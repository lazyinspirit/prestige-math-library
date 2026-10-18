---
id: lem-na-periodic-mps-to-open-tt
kind: lemma
title: "A periodic finite MPS has an exact open-boundary TT conversion"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - def-tensor-train-cores-bond-ranks-and-canonical-gauges
verification:
  precheck: pass
aliases: []
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§4.1, 4.6"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §§2.1, 2.4.3"
      url: "https://arxiv.org/pdf/2606.24803"
---

## Statement

Let a periodic MPS presentation have order $d\ge2$, positive cyclic bond sizes $r_0,\ldots,r_d$ with $r_d=r_0$, and matrices $A_k^{(i_k)}\in\mathbb F^{r_{k-1}\times r_k}$. It has an exactly equal open-boundary TT presentation with internal bond sizes $s_k=r_k r_0$ for $1\le k<d$. In the pair index convention $(a_k,a_0)$, define
$$G_1(1,i_1,(a_1,a_0))=(A_1^{(i_1)})_{a_0,a_1},$$
$$G_k((a_{k-1},a_0),i_k,(a_k,a_0))=(A_k^{(i_k)})_{a_{k-1},a_k}\quad(2\le k<d),$$
and
$$G_d((a_{d-1},a_0),i_d,1)=(A_d^{(i_d)})_{a_{d-1},a_0}.$$
For $d=2$ the middle-core clause is empty.

## Facts & Assumptions

**Given:** A periodic trace MPS presentation over $\mathbb F\in\{\mathbb R,\mathbb C\}$ with $d\ge2$ and positive cyclic bond sizes.

[F1] [[def-na-finite-mps-state-and-hermitian-hamiltonian]]: the periodic entry is $\psi_{i_1,\ldots,i_d}=\operatorname{tr}(A_1^{(i_1)}\cdots A_d^{(i_d)})$, with $A_k^{(i_k)}$ of size $r_{k-1}\times r_k$ and $r_d=r_0$.

[F2] [[def-tensor-train-cores-bond-ranks-and-canonical-gauges]]: an open-boundary TT entry is the sum of the product of its cores over every shared bond index, with boundary ranks one.

## Proof


1.1 Expanding the matrix trace and the matrix products in [F1] gives $\psi_{i_1,\ldots,i_d}=\sum_{a_0=1}^{r_0}\sum_{a_1=1}^{r_1}\cdots\sum_{a_{d-1}=1}^{r_{d-1}}(A_1^{(i_1)})_{a_0,a_1}\cdots(A_d^{(i_d)})_{a_{d-1},a_0}.$ This is a finite sum, and remains the same for $d=2$ with no intermediate factors. [given, F1, algebra]

2.1 Contract the cores defined in the Statement according to [F2]. Each internal TT bond is a pair $(a_k,a_0)$, so its summation matches the adjacent physical matrix index $a_k$ while carrying the same $a_0$ to the next core. The resulting contraction sums once over $a_0,a_1,\ldots,a_{d-1}$ and has exactly the product in step 1.1. Hence every array entry is unchanged, and the TT bond at cut $k$ has $r_k r_0$ possible pair indices. [given, F2, step 1.1, algebra] ∎
