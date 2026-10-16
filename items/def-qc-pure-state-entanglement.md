---
id: def-qc-pure-state-entanglement
kind: definition
title: Pure-State Entanglement Across a Tensor Cut
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-tensor-register-and-permutation
  - thm-qc-schmidt-decomposition
  - def-qc-pure-state-and-ray
  - thm-singular-value-decomposition
  - cor-matrix-rank-equals-the-rank-of-its-linear-map
  - cor-rank-equals-number-of-nonzero-singular-values
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - thm-row-rank-equals-column-rank
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
dependency_level: 3
---

## Definition

Let $H_A,H_B$ be nonzero finite-dimensional complex inner-product spaces, with the ordered tensor product $H_A\otimes H_B$. A **product ray** is a ray containing a nonzero decomposable vector $a\otimes b$ with $a\in H_A$ and $b\in H_B$. A pure state on this cut is **entangled** when its ray is not a product ray.

For a nonzero vector $\psi\in H_A\otimes H_B$, its **Schmidt rank** is the matrix rank of its coefficient matrix in any ordered orthonormal product basis; the verification proves this is independent of that basis. It also proves that this rank equals the number of positive terms in every Schmidt decomposition. Thus a pure ray is entangled exactly when its Schmidt rank exceeds one.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H_A,H_B$, their product inner product and ordered tensor convention, and a unit vector $\psi\in H_A\otimes H_B$.

[L1] [[def-qc-pure-state-and-ray]] defines a pure state as the equivalence class of a nonzero vector under multiplication by a nonzero complex scalar. Its current draft definition body was inspected; only this ray convention is used below, not its separate projector assertion.

[L2] [[def-qc-tensor-register-and-permutation]] defines the ordered product basis and product inner product on elementary tensors. Its current draft proof was read; the basis construction, pairing, basis independence and permutation claims are derived from the listed tensor-product and coordinate interfaces.

[L3] [[thm-qc-schmidt-decomposition]] states that every tensor has a Schmidt expansion with positive coefficients and orthonormal factor families, whose coefficients are the positive singular values of the product-basis coefficient matrix. Its full current draft proof was read, along with the current tensor-register and Dirac-conversion definition bodies; this records body inspection, not acceptance of those draft suppliers.

[F1] [[def-row-space-column-space-nullspace-and-matrix-ranks]]: the matrix rank is the dimension of the row space, and row rank equals column rank by [[thm-row-rank-equals-column-rank]].

[F2] [[cor-matrix-rank-equals-the-rank-of-its-linear-map]]: a matrix has the same rank as its associated coordinate linear map.

[F3] [[thm-singular-value-decomposition]]: every finite-dimensional map has an SVD with exactly its positive singular values.

[F4] [[cor-rank-equals-number-of-nonzero-singular-values]]: the number of positive singular values of a finite-dimensional map equals its rank.

[F5] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

## Verification

1.1 Choose ordered orthonormal bases of $H_A,H_B$ using [F5], and let $C$ be the coefficient matrix of $\psi$ in their product basis [L2]. For any other ordered orthonormal bases, let $A,B$ have the new basis vectors as columns in the old coordinates. Their columns are orthonormal, so the finite row-by-column identities $A^*A=B^*B=I$ hold; because they are basis changes, both matrices are invertible and hence unitary. Expanding the new product basis vectors in the old one and using conjugate-linearity in the second argument gives $c'_{pq}=\sum_{i,k}\overline{A_{ip}}c_{ik}\overline{B_{kq}}$, so the new coefficient matrix is $C'=A^*C\overline B$. The factors $A^*$ and $\overline B$ are invertible, so the map represented by $C'=A^*C\overline B$ is $A^*\circ T_C\circ\overline B$, where $T_C$ is the map represented by $C$. Since $\overline B$ is onto, its image is $A^*(\operatorname{im}T_C)$; since $A^*$ is injective, this image has the same dimension as $\operatorname{im}T_C$. By [F2], the matrix rank is therefore unchanged, so it is basis-independent. Multiplying $\psi$ by any nonzero scalar multiplies $C$ by that scalar and also preserves its rank. [given, L1, L2, F1, F2, F5, choose, algebra]

1.2 In any Schmidt decomposition $\psi=\sum_{j=1}^r s_j u_j\otimes v_j$ with all $s_j>0$ and orthonormal factor families, tensor coordinates multiply, so its coefficient matrix is $C=U D V^{\mathsf T}$, where the columns of $U,V$ are the coordinates of the $u_j,v_j$ and $D=\operatorname{diag}(s_1,\ldots,s_r)$. The orthonormal columns give $U^*U=V^*V=I_r$, so $U$ is injective; conjugating $V^*V=I_r$ gives $V^{\mathsf T}\overline V=I_r$, so $V^{\mathsf T}$ is surjective; and $D$ is invertible. Thus $\operatorname{rank}(C)=r$. Conversely, [L3] constructs such a Schmidt decomposition from the SVD, and [F3] and [F4] show that its number of positive coefficients is the rank of $C$. Therefore the number of terms is the same for every Schmidt decomposition and equals the defined Schmidt rank. [given, L2, L3, F2, F3, F4, algebra]

2.1 If $\psi=c(a\otimes b)$ for nonzero $a,b,c$, its coefficient matrix is $c\alpha\beta^{\mathsf T}$ for the coordinate columns $\alpha,\beta$, so its rank is one. Conversely, if $C$ has rank one, choose a nonzero column $\alpha$; every column is a scalar multiple $\beta_k\alpha$, so $C=\alpha\beta^{\mathsf T}$ with $\beta\ne0$. The coefficient expansion then gives $\psi=a\otimes b$ for the vectors with coordinates $\alpha,\beta$. Thus the ray is a product ray exactly when the Schmidt rank is one. [given, L1, L2, F1, F2, step 1.1, step 1.2, choose, algebra]

3.1 Since $\psi\ne0$, its coefficient matrix is nonzero and has positive rank. By the product-ray equivalence in step 2.1, failure to be a product ray is equivalent to Schmidt rank greater than one, which is precisely entanglement by the Definition. [given, L1, step 2.1, algebra] ∎
