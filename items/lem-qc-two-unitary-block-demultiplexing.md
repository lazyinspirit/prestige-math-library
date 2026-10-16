---
id: lem-qc-two-unitary-block-demultiplexing
kind: lemma
title: Demultiplexing a Two-Block Unitary
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-polar-form-with-unique-principal-argument
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-16}}
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5"
      url: "https://arxiv.org/pdf/quant-ph/0406176"
---
## Statement

Let $H$ be a finite-dimensional complex inner-product space and let $U_0,U_1$ be unitary endomorphisms of $H$. On the control-first direct sum $H\oplus H$, the block unitary $\operatorname{diag}(U_0,U_1)$ factors as
$$\operatorname{diag}(U_0,U_1)=(I\otimes V)\operatorname{diag}(D,D^*)(I\otimes W)$$
for unitary $V,W$ on $H$ and a diagonal unitary $D$ in an orthonormal eigenbasis; $I\otimes V$ denotes $\operatorname{diag}(V,V)$ under $\mathbb C^2\otimes H\cong H\oplus H$.

## Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space $H$ and unitary $U_0,U_1$ on $H$.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis.

[F2] [[thm-polar-form-with-unique-principal-argument]]: every unit complex number is $e^{it}$ for some real $t$, and therefore has a unit-modulus square root.

[F3] [[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]: products and adjoints of unitary maps are unitary.

## Proof


1.1 The product $Q:=U_0U_1^*$ is unitary by [F3] and hence normal. By [F1], choose a unitary $V$ and diagonal unitary $D$ with $Q=VD^2V^*$: diagonalize $Q$, write each eigenvalue as $e^{it_j}$ by [F2], and put $e^{it_j/2}$ on the corresponding diagonal of $D$. [given, F1, F2, F3, choose]

2.1 Set $W:=D^*V^*U_0$. Then $VDW=U_0$. Also $VD^*W=VD^{-2}V^*U_0$. Taking adjoints in $U_0U_1^*=VD^2V^*$ gives $U_1U_0^*=VD^{-2}V^*$, so $VD^{-2}V^*U_0=U_1$. Thus the two diagonal blocks in the displayed factorization are respectively $U_0$ and $U_1$. [step 1.1, algebra]

3.1 The factors $V,D,W$ are unitary, and the two block products agree with $U_0,U_1$; hence the asserted exact block factorization holds, including repeated eigenvalues. Only a finite orthonormal eigenbasis and finitely many square roots are chosen. [step 1.1, step 2.1, given] ∎
