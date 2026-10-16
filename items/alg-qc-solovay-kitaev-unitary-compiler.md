---
id: alg-qc-solovay-kitaev-unitary-compiler
kind: algorithm
title: Solovay–Kitaev Unitary Compiler for SU(2)
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-qc-inverse-closed-dense-su2-gate-set
  - lem-qc-compact-su2-base-net
  - lem-qc-su2-near-identity-logarithm
  - lem-qc-su2-balanced-commutator
  - lem-qc-commutator-error-cancellation
justified_by:
  - thm-qc-solovay-kitaev-error-and-resource-bound
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §§2–4, SU(2) recursion and its analysis, PDF pp. 2–10
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 2 §2.2, PDF pp. 26–29
---

## Definition

**Inputs:** A fixed inverse-closed dense gate package $G$ with the finite
base-net certificate $(\mathcal N_0,\eta_0,L_0)$ from
[[def-qc-inverse-closed-dense-su2-gate-set]], an exact-real target
$U\in SU(2)$, and a rational $0<\varepsilon\le\eta_0$. This is an ideal
exact-real procedure: fixed-dimensional exact matrix arithmetic, matrix
logarithm/exponential, and exact comparisons are unit-cost operations. It is
not, by this definition alone, a finite Turing algorithm.

Set $\eta_{j+1}=64\eta_j^{3/2}$ for $j\ge0$. Choose the least integer
$J\ge0$ with $\eta_J\le\varepsilon$. Define $\operatorname{Compile}(U,j)$
recursively:

1. If $j=0$, return the first word $A\in\mathcal N_0$ with
   $\|U-A\|\le\eta_0$.
2. If $j>0$, set $A=\operatorname{Compile}(U,j-1)$ and $D=UA^*$.
   If $D=I$, set $V=W=I$. Otherwise apply the Pauli-coordinate construction
   in [[lem-qc-su2-balanced-commutator]] to $D$ and $\eta_{j-1}$, obtaining
   $V,W\in SU(2)$ with $D$ approximated by $VWV^*W^*$.
3. Set $B=\operatorname{Compile}(V,j-1)$ and
   $C=\operatorname{Compile}(W,j-1)$. Return the word
   $BCB^*C^*A$. Store concatenations and inverses as a shared expression DAG;
   an inverse word is formed by reversing its label order and replacing each
   label by its listed inverse. Expanding the DAG writes the ordinary gate word.

Return $\operatorname{Compile}(U,J)$. The recursion depth is finite because
each call decreases the nonnegative integer $j$.

## Well-definedness

[[thm-qc-solovay-kitaev-error-and-resource-bound]] establishes this procedure's level existence and recursive admissibility: its step 3.1 gives the least finite $J$, while steps 1.1–2.1 give the inductive bound $\|D-I\|\le\eta_{j-1}$ for every balanced-commutator call. The displayed level formula has $0<\eta_j\le\eta_0<64^{-2}<1/16$, so each such call satisfies the lemma's norm and radius hypotheses. The base-net certificate supplies the level-zero choice. This is the well-definedness justification for the instructions above; the error and resource conclusions are stated and proved in that theorem.
