---
id: lem-it-finite-povm-outcome-map-is-cptp
kind: lemma
title: A finite POVM defines a finite quantum-to-classical channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qc-povm-and-outcome-law
  - def-non-negative-and-positive-operator
  - def-self-adjoint-and-normal-endomorphism
  - def-qc-completely-positive-map
  - def-qc-quantum-channel
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-trace-of-an-endomorphism
  - thm-trace-of-ab-equals-trace-of-ba
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex-inner-product space and let $(M_y)_{y\in Y}$ be a finite POVM with finite nonempty outcome set $Y$. Let $K=\mathbb C^Y$ have its orthonormal outcome basis $|y\rangle$. Then
$$\mathcal M(X):=\sum_{y\in Y}\operatorname{tr}(M_yX)|y\rangle\langle y|,$$
defines a finite-dimensional quantum channel $\mathcal M:\mathcal L(H)\to\mathcal L(K)$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex-inner-product space $H$, a finite nonempty set $Y$, a POVM $(M_y)_{y\in Y}$, and its outcome register $K=\mathbb C^Y$.

[F1] [[def-qc-povm-and-outcome-law]]: each $M_y$ is nonnegative and $\sum_yM_y=I_H$.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every normal finite-dimensional complex endomorphism has an orthonormal eigenbasis.

[F3] [[def-non-negative-and-positive-operator]] and [[def-self-adjoint-and-normal-endomorphism]]: every POVM effect is self-adjoint and nonnegative, hence normal.

[F4] [[def-qc-completely-positive-map]]: complete positivity requires positivity of every finite ancillary amplification.

[F5] [[def-qc-quantum-channel]]: a finite quantum channel is complex-linear, completely positive, and trace-preserving on the full operator space.

[F6] [[def-qc-tensor-register-and-permutation]] and [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: tensor maps act on elementary tensors factorwise, use the factorwise inner product, and the adjoint is characterized by its pairing identity.

[F7] [[thm-trace-of-ab-equals-trace-of-ba]]: finite-dimensional trace is cyclic, including rectangular compositions.

## Proof

1.1 For each $y$, [F1] makes $M_y$ nonnegative and self-adjoint, and [F3] makes it normal; [F2] gives an orthonormal eigenbasis $(u_{yj})_j$. Each eigenvalue satisfies $\lambda_{yj}=\langle M_yu_{yj},u_{yj}\rangle\ge0$. Define $K_{yj}:H\to K$ by $K_{yj}x=\sqrt{\lambda_{yj}}\langle x,u_{yj}\rangle|y\rangle$. The family is finite and $K_{yj}^\dagger K_{yj}=\lambda_{yj}|u_{yj}\rangle\langle u_{yj}|$. [given, F1, F2, F3, F6, construct]

2.1 For every $X\in\mathcal L(H)$, the diagonal output entry at $y$ of $\sum_{y,j}K_{yj}XK_{yj}^\dagger$ is $\sum_j\lambda_{yj}\langle Xu_{yj},u_{yj}\rangle=\operatorname{tr}(M_yX)$, while every off-diagonal outcome entry is $0$. Thus this finite Kraus sum is exactly $\mathcal M(X)$, so $\mathcal M$ is complex-linear. Moreover $\sum_{y,j}K_{yj}^\dagger K_{yj}=\sum_yM_y=I_H$ by [F1]. By [F7], $\operatorname{tr}(\mathcal M(X))=\sum_{y,j}\operatorname{tr}(K_{yj}XK_{yj}^\dagger)=\operatorname{tr}(X\sum_{y,j}K_{yj}^\dagger K_{yj})=\operatorname{tr}(X)$ for every $X$. [given, F1, F7, step 1.1, algebra]

3.1 Fix any finite ancillary dimension $r\ge1$ and any nonnegative $Q\in\mathcal L(H\otimes\mathbb C^r)$. The product inner product and [F6] give $(K_{yj}\otimes I_r)^\dagger=K_{yj}^\dagger\otimes I_r$ by checking the adjoint pairing on elementary tensors and extending linearly. The amplified map is therefore $\mathcal M^{(r)}(Q)=\sum_{y,j}(K_{yj}\otimes I_r)Q(K_{yj}^\dagger\otimes I_r)$. Each summand is nonnegative because its quadratic form at $z$ is $\langle Q(K_{yj}^\dagger\otimes I_r)z,(K_{yj}^\dagger\otimes I_r)z\rangle\ge0$. Hence every amplification preserves nonnegativity, and [F4] makes $\mathcal M$ completely positive. Complex-linearity, complete positivity, and trace preservation give the channel conclusion by [F5]. [given, F4, F5, F6, step 2.1, algebra] ∎
