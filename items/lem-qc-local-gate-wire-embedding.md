---
id: lem-qc-local-gate-wire-embedding
kind: lemma
title: "A local gate has a unique global wire embedding"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-tensor-map-composition-and-adjoint
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-finite-dimensional-isometry-characterisations
justified_by: []
dependency_level: 4
proof_strategy: direct
axiom_use: "None; the construction uses finite ordered bases."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $n\ge r\ge1$, let $w=(w_0,\ldots,w_{r-1})$ be an ordered tuple of distinct wires in $[n]$, and let $U:\mathcal Q_r\to\mathcal Q_r$ be unitary. There is a unique unitary $\widetilde U_w:\mathcal Q_n\to\mathcal Q_n$ that applies $U$ to the ordered wires $w_0,\ldots,w_{r-1}$ and acts as the identity on the other wires.

## Facts & Assumptions

**Given:** The finite ordered register $\mathcal Q_n$, distinct target wires $w_0,\ldots,w_{r-1}$, and a unitary $U$ on $\mathcal Q_r$.

[F1] [[def-qc-circuit-syntax-and-register-order]]: a gate occurrence names distinct wires in a specified order.

[F2] [[def-qc-tensor-register-and-permutation]]: the computational product basis is orthonormal, and the reordering of wire factors is the linear extension of its bijection on that basis.

[F3] [[def-qc-tensor-map]]: the tensor map $U\otimes I$ acts on elementary tensors as $x\otimes z\mapsto Ux\otimes z$.

[F4] [[thm-qc-tensor-map-composition-and-adjoint]]: $(U\otimes I)^\dagger=U^\dagger\otimes I$ and tensor maps preserve composition and identities.

[F5] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary is an invertible linear norm-preserving map. [[thm-finite-dimensional-isometry-characterisations]]: a finite-dimensional unitary $U$ satisfies $U^\dagger U=UU^\dagger=I$.

[F6] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tz,y\rangle=\langle z,T^\dagger y\rangle$.

## Proof


1.1 List the complement wires as $c_0<\cdots<c_{n-r-1}$. The rule $$|x_0,\ldots,x_{n-1}\rangle\mapsto |x_{w_0},\ldots,x_{w_{r-1}}\rangle\otimes |x_{c_0},\ldots,x_{c_{n-r-1}}\rangle$$ is a bijection from the computational basis of $\mathcal Q_n$ to the product basis of $\mathcal Q_r\otimes\mathcal Q_{n-r}$: the output lists each original coordinate once and records which coordinate occupies each position. Its linear extension $P_w$ sends one orthonormal basis bijectively to another, hence is unitary by [F2]. [given, F1, F2, construct]

2.1 Put $T=U\otimes I_{\mathcal Q_{n-r}}$. By [F3]–[F5], $T^\dagger T=(U^\dagger U)\otimes I=I$ and $TT^\dagger=(UU^\dagger)\otimes I=I$. Thus $T^\dagger$ is a two-sided inverse, and [F6] gives $\|Tz\|^2=\langle Tz,Tz\rangle=\langle z,T^\dagger Tz\rangle=\|z\|^2$ for every $z$. Hence $T$ is unitary. Since $P_w$ is a surjective isometry by step 1.1, its inverse also preserves norms: for $y=P_wx$, $\|P_w^{-1}y\|=\|x\|=\|P_wx\|=\|y\|$. Therefore the composite $$\widetilde U_w=P_w^{-1}(U\otimes I_{\mathcal Q_{n-r}})P_w$$ is invertible and norm-preserving, hence unitary by [F5]. Its action, by the definition of $P_w$, applies $U$ to the selected factors in tuple order and leaves the complement factors fixed, as required. [given, step 1.1, F3, F4, F5, F6, algebra]

3.1 The computational basis spans $\mathcal Q_n$. Any linear map with the specified action on its basis vectors is unique, so the embedding in step 2.1 is the unique one. [step 2.1, algebra] ∎

