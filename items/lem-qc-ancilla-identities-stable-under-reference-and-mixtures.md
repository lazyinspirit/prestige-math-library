---
id: lem-qc-ancilla-identities-stable-under-reference-and-mixtures
kind: lemma
title: "Clean and dirty ancilla identities extend to references and mixed states"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-clean-and-dirty-ancillas
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.3, printed pp.20–22: work is copied before the computation is reversed; reference and matrix extensions are proved locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.3, printed p.16: the basis-state computation extends to superpositions by linearity; matrix extensions are proved locally."
---

## Statement

Let $U$ and $V$ satisfy either the clean or dirty identity in [[def-qc-clean-and-dirty-ancillas]], and let $R$ be any finite ordered reference register. Put $P_0=R_{0_A,0_A}$, where the rank-one operator notation used here is defined by $R_{u,v}(z)=\langle z,v\rangle_{\rm root}u$. In the clean case, for every matrix $X$ on $R\otimes D$,
$$
(I_R\otimes U)(X\otimes P_0)(I_R\otimes U^\dagger)=\big((I_R\otimes V)X(I_R\otimes V^\dagger)\big)\otimes P_0.
$$
In the dirty case, for every matrix $Y$ on $R\otimes D\otimes A$,
$$
(I_R\otimes U)Y(I_R\otimes U^\dagger)=(I_R\otimes V\otimes I_A)Y(I_R\otimes V^\dagger\otimes I_A).
$$
Thus the stated identities apply in particular to density matrices, meaning positive semidefinite matrices of trace one.

## Facts & Assumptions

**Given:** Finite-dimensional registers $R,D,A$, ordered so the operation acts on $D\otimes A$ and as the identity on $R$. Prove the stated extension in the clean and dirty cases.

[F1] [[def-qc-clean-and-dirty-ancillas]]: In the clean case, $U(|\psi\rangle_D\otimes|0_A\rangle)=V|\psi\rangle_D\otimes|0_A\rangle$ for every $|\psi\rangle_D$. In the dirty case, $U=V\otimes I_A$.

[F2] [[def-qc-tensor-map]]: For a finite ordered family of linear maps, the tensor map is the unique linear map whose action on each elementary tensor is the tensor of the factor-map actions.

[F3] [[def-qc-tensor-register-and-permutation]]: The tensor inner product on elementary tensors is the product of the factor inner products, with the displayed register order retained.

[F4] [[lem-qc-tensor-product-basis-and-dimension]]: For finite ordered registers with specified orthonormal factor bases, the lexicographically ordered elementary tensors form an orthonormal basis and therefore span the product register.

## Proof

1.1 In the clean case, for every $w\in\mathcal H_R\otimes\mathcal H_D$, write $w$ as a finite sum of elementary tensors. The clean identity in [F1] and the tensor-map rule [F2] give $(I_R\otimes U)(w\otimes|0_A\rangle)=((I_R\otimes V)w)\otimes|0_A\rangle$. [given, F1, F2, F4, algebra]

2.1 For any linear map $A$ with adjoint and vectors $u,v$, conjugate symmetry and the defining adjoint relation give $\langle A^\dagger q,v\rangle_{\rm root}=\overline{\langle v,A^\dagger q\rangle_{\rm root}}=\overline{\langle Av,q\rangle_{\rm root}}=\langle q,Av\rangle_{\rm root}$ for every $q$. Hence $A R_{u,v}A^\dagger=R_{Au,Av}$. By [F3], $R_{w,z}\otimes P_0=R_{w\otimes|0_A\rangle,z\otimes|0_A\rangle}$. Apply the rank-one identity with $A=I_R\otimes U$, $u=e_i\otimes|0_A\rangle$, and $v=e_j\otimes|0_A\rangle$, where $e_i,e_j$ range over the product orthonormal basis of $R\otimes D$. Step 1.1 gives the clean conjugation formula for each $R_{e_i,e_j}\otimes P_0$. Every matrix $X$ on $R\otimes D$ equals $\sum_{i,j}\langle Xe_j,e_i\rangle_{\rm root}R_{e_i,e_j}$, since the right side agrees with $X$ on each basis vector; hence these matrix units span and linearity proves the clean identity for every $X$. [step 1.1, F2, F3, F4, algebra]

3.1 In the dirty case, [F1] and [F2] give $I_R\otimes U=I_R\otimes V\otimes I_A$ on every elementary tensor and hence on the whole product space. The product inner product [F3] makes its adjoint $I_R\otimes V^\dagger\otimes I_A$: this follows first on elementary tensors from the defining adjoint relation for $V$, then on all vectors because they span by [F4]. Substitution yields the dirty identity for every matrix $Y$, including every density matrix; for a product $Y=Z_{RD}\otimes S_A$, the output is $((I_R\otimes V)Z_{RD}(I_R\otimes V^\dagger))\otimes S_A$, so the dirty factor remains unchanged and uncorrelated in this product case. [given, F1, F2, F3, F4, algebra] ∎

