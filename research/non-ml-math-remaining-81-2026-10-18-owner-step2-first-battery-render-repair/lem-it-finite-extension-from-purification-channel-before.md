---
id: lem-it-finite-extension-from-purification-channel
kind: lemma
title: Every finite extension is obtained from a purification by a channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - thm-qc-purification-existence-and-unitary-equivalence
  - def-qc-quantum-channel
  - thm-qc-isometry-partial-trace-is-channel
  - def-qc-partial-trace
  - def-qc-tensor-register-and-permutation
  - thm-qc-wire-permutation-is-unitary
  - lem-qc-tensor-product-basis-and-dimension
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-finite-dimensional-orthogonal-decomposition
  - cor-dimension-of-a-direct-sum
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
    - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
      url: https://arxiv.org/pdf/quant-ph/0304127
      locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

Let $\omega_{ZA}$ be any finite-dimensional state with $\operatorname{Tr}_Z\omega_{ZA}=\rho_A$, and let $|\psi\rangle_{RA}$ purify $\rho_A$ with $R$ a copy of $A$. There is a CPTP map $\Lambda:R\to Z$ with $(\Lambda\otimes\operatorname{id}_A)(|\psi\rangle\langle\psi|)=\omega_{ZA}$.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional spaces $A,Z$, states $\rho_A$ and $\omega_{ZA}$ with $\operatorname{Tr}_Z\omega_{ZA}=\rho_A$, and a purification $|\psi\rangle_{RA}$ where $R$ is a copy of $A$.

[F1] [[thm-qc-purification-existence-and-unitary-equivalence]]: Purifications exist and are unitarily equivalent after padding.

[F2] [[def-qc-partial-trace]], [[def-qc-tensor-register-and-permutation]], and [[lem-qc-tensor-product-basis-and-dimension]]: partial traces and ordered tensor product bases have their stated coordinate formulas.

[F3] [[def-qc-quantum-channel]]: Finite-dimensional quantum channel.

[F4] [[thm-qc-isometry-partial-trace-is-channel]]: An isometry followed by partial trace is a channel.

[F5] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[thm-finite-dimensional-orthogonal-decomposition]], and [[cor-dimension-of-a-direct-sum]]: finite orthonormal families can be extended by choosing orthonormal bases of their finite-dimensional orthogonal complements; adding a finite pure ancilla makes the target dimension at least $\dim R$.

[F6] [[def-qc-partial-trace]], [[def-qc-tensor-register-and-permutation]], [[thm-qc-wire-permutation-is-unitary]], and [[lem-qc-tensor-product-basis-and-dimension]]: the tensor factors have the declared order, factor reordering is unitary, and tracing the auxiliary factor after applying a channel to $R$ gives the corresponding marginal on $ZA$.

[F7] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a positive state has an orthonormal eigenbasis, with nonnegative eigenvalues summing to one.

## Proof

1.1 Choose a finite purification $|\Omega\rangle_{ZAF}$ of $\omega_{ZA}$ by [F1] and reorder its factors as $A(ZF)$. Let $\rho_A=\sum_{j=1}^r\lambda_j|a_j\rangle\langle a_j|$ be a spectral decomposition on its positive support, obtained from [F7]. Expand each purification in the product basis using this same eigenbasis on $A$: $$|\psi\rangle_{RA}=\sum_{j=1}^r|r_j^0\rangle_R|a_j\rangle_A,\qquad |\Omega\rangle_{A(ZF)}=\sum_{j=1}^r|a_j\rangle_A|z_j^0\rangle_{ZF}.$$ The partial-trace coordinate formula [F2] and the fact that both $A$ marginals equal $\rho_A$ show that the coefficient vectors have Gram matrices $\langle r_j^0,r_k^0\rangle=\lambda_j\delta_{jk}$ and $\langle z_j^0,z_k^0\rangle=\lambda_j\delta_{jk}$. Thus $|r_j\rangle:=|r_j^0\rangle/\sqrt{\lambda_j}$ and $|z_j\rangle:=|z_j^0\rangle/\sqrt{\lambda_j}$ are orthonormal and $$|\psi\rangle_{RA}=\sum_{j=1}^r\sqrt{\lambda_j}|r_j\rangle_R|a_j\rangle_A,\qquad |\Omega\rangle_{A(ZF)}=\sum_{j=1}^r\sqrt{\lambda_j}|a_j\rangle_A|z_j\rangle_{ZF}.$$ This coefficient argument also handles repeated positive eigenvalues because the chosen basis is fixed before either expansion. [F1, F2, F3, F7, given, algebra, construct]

2.1 Let $d=\dim R=\dim A$. In every case set $G=\mathbb C^d$, fix its first coordinate unit vector $|0\rangle_G$, and append it to $|\Omega\rangle$. Since $Z$ and the purifying space $F$ are nonzero, $\dim(Z\otimes F\otimes G)\ge d$. Denote the resulting orthonormal Schmidt partners by $|z_j'\rangle=|z_j\rangle|0\rangle_G$. The map $U_0:\operatorname{span}\{|r_j\rangle}\to\operatorname{span}\{|z_j'\rangle\}$ given by $U_0|r_j\rangle=|z_j'\rangle$ is an isometry. Extend $\{|r_j\rangle\}$ to an orthonormal basis of $R$ and choose the same number of additional orthonormal vectors in the orthogonal complement of the $z_j'$ in $Z\otimes F\otimes G$; [F5] and the target dimension bound ensure this is possible. Sending the added basis vectors to those target vectors extends $U_0$ to a linear isometry $U:R\to Z\otimes F\otimes G$ on all of $R$. By construction, $(U\otimes I_A)|\psi\rangle$ is exactly the padded purification $|\Omega\rangle\otimes|0\rangle_G$, after reordering to $Z(F\otimes G)A$. This construction includes the singular case $r<d$, since it extends $U$ on all zero-Schmidt directions of $R$. [F1, F2, F3, F5, F6, given, algebra, construct, step 1.1]

3.1 Define $\Lambda(X)=\operatorname{Tr}_{F\otimes G}(UXU^*)$ from $\mathcal L(R)$ to $\mathcal L(Z)$. Since $U$ is an isometry, [F4] makes $\Lambda$ completely positive and trace-preserving on the full operator space. Applying it to the reference factor of $|\psi\rangle\langle\psi|$ traces $F\otimes G$ from the pure state $|(U\otimes I_A)\psi\rangle\langle(U\otimes I_A)\psi|$, leaving its $ZA$ marginal, which is $\omega_{ZA}$ by construction and is unchanged by the appended pure $G$ register [F6]. Thus $(\Lambda\otimes\operatorname{id}_A)(|\psi\rangle\langle\psi|)=\omega_{ZA}$, as required. [F1, F3, F4, F6, given, algebra, construct, step 2.1] ∎
