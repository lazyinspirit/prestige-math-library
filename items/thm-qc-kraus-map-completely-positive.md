---
id: thm-qc-kraus-map-completely-positive
kind: theorem
title: "A finite Kraus sum is completely positive"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-real-and-complex-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces, prop-adjoint-algebra, def-coordinate-column-and-matrix-of-a-linear-map, def-matrix-product-and-identity-matrix, prop-standard-coordinate-inner-products, def-qc-kraus-representation, def-qc-completely-positive-map, def-qc-tensor-register-and-permutation, def-qc-tensor-map, lem-qc-tensor-product-basis-and-dimension, thm-qc-tensor-map-composition-and-adjoint, def-non-negative-and-positive-operator]
justified_by: []
proof_strategy: direct
dependency_level: 5
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.2.1 and 3.2.6"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces and let
$\Phi:\mathcal L(H)\to\mathcal L(K)$ have a finite Kraus representation
$\Phi(X)=\sum_{a\in A}K_a X K_a^\dagger$. Then $\Phi$ is completely positive.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$, a finite
family of linear maps $K_a:H\to K$, and the Kraus formula for $\Phi$.

[F1] [[def-non-negative-and-positive-operator]]: an endomorphism is
non-negative when it is self-adjoint and its quadratic form is non-negative.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and
[[prop-adjoint-algebra]]: adjoints satisfy the defining pairing identity and
reverse compatible compositions.

[F3] [[prop-standard-coordinate-inner-products]]: the standard basis of
$\mathbb C^r$ is orthonormal.

[F4] [[def-coordinate-column-and-matrix-of-a-linear-map]]: an operator is
determined by its coordinate columns on an ordered basis.

[F5] [[def-matrix-product-and-identity-matrix]]: matrices are multiplied by
finite row-by-column sums, including zero-sized shapes.

[F6] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
finite-dimensional complex inner-product spaces admit ordered orthonormal
bases, with the empty basis in dimension zero.

[L1] [[def-qc-kraus-representation]] (same-page definition):
$\Phi(X)=\sum_aK_aXK_a^\dagger$ for every $X\in\mathcal L(H)$.

[A1] [[def-qc-completely-positive-map]]: for every $r\ge1$, the block
amplification $\Phi^{(r)}$ on $H\otimes\mathbb C^r$ sends non-negative
operators to non-negative operators on $K\otimes\mathbb C^r$.

[A2] [[def-qc-tensor-register-and-permutation]] and
[[lem-qc-tensor-product-basis-and-dimension]]: ordered orthonormal bases
of the factors give ordered orthonormal product bases of
$H\otimes\mathbb C^r$ and $K\otimes\mathbb C^r$.

[A3] [[def-qc-tensor-map]]: tensor maps act on elementary tensors by applying
factor maps in the displayed order.

[A4] [[thm-qc-tensor-map-composition-and-adjoint]]: tensor maps preserve
composition and $(K_a\otimes I_R)^\dagger=K_a^\dagger\otimes I_R$.

## Proof


1.1 Fix $r\ge1$ and put $R=\mathbb C^r$ with its standard ordered basis $(c_k)_{k<r}$, the basis used for the block amplification in [A1]. Choose ordered orthonormal bases $(e_i)$ of $H$ and $(f_j)$ of $K$ by [F6], allowing an empty basis. If $H=0$, the domain $\mathcal L(H\otimes R)$ is zero and the identity below holds for its sole operator. Otherwise let $E_{ij}$ be the matrix units of $H$ in the basis $(e_i)$ and let $F_{kl}$ be the matrix units of $R$ in its standard basis $(c_k)$. By [A2], $(e_i\otimes c_k)$ is a basis; the operators $E_{ij}\otimes F_{kl}$ are its matrix units, so they span $\mathcal L(H\otimes R)$ by [F4] and [F5]. For such a product matrix unit, its only nonzero ancilla block is block $(k,l)$, equal to $E_{ij}$. The block rule in [A1] therefore gives $\Phi^{(r)}(E_{ij}\otimes F_{kl})=\Phi(E_{ij})\otimes F_{kl}$. On the other hand, [A3], [A4], and [L1] give $\sum_a(K_a\otimes I_R)(E_{ij}\otimes F_{kl})(K_a^\dagger\otimes I_R) =\sum_a(K_aE_{ij}K_a^\dagger)\otimes F_{kl} =\Phi(E_{ij})\otimes F_{kl}$. By linearity the two maps agree for every $X\in\mathcal L(H\otimes R)$. [given, F3, F4, F5, F6, A1, A2, A3, A4, L1, algebra, choose]

2.1 Let $X$ be non-negative and put $T_a=K_a\otimes I_R$. Each $T_aXT_a^\dagger$ is self-adjoint because $(T_aXT_a^\dagger)^\dagger=T_aX^\dagger T_a^\dagger=T_aXT_a^\dagger$ by [F2]. For every $y$, the adjoint identity in [F2] gives $\langle T_aXT_a^\dagger y,y\rangle= \langle XT_a^\dagger y,T_a^\dagger y\rangle\ge0$ by [F1]. Thus each summand and their finite sum are non-negative. If $A$ is empty, the sum is zero and has the same property. [given, F1, F2, step 1.1, algebra]

3.1 Since $r\ge1$ was arbitrary, [A1] and step 2.1 show that every finite ancilla block amplification preserves non-negativity. This is precisely complete positivity by [A1]. [A1, step 2.1] ∎

