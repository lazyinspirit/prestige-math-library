---
id: thm-qc-ensemble-purification-correspondence
kind: theorem
title: Every finite state ensemble is obtainable from a purification
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: [def-qc-ensemble-and-purification, thm-qc-ensemble-barycenter-is-density, def-qc-density-operator, def-kernel-and-image-of-a-linear-map, def-qc-dirac-notation-conversion, thm-qc-dirac-notation-coordinate-identity, thm-qc-schmidt-decomposition, def-qc-finite-positive-effect-family, lem-qc-complete-effect-family-members-are-effects, def-qc-tensor-register-and-permutation, def-qc-tensor-map, lem-qc-tensor-product-basis-and-dimension, def-qc-partial-trace, thm-qc-partial-trace-characterization-and-basis-independence, thm-non-negative-square-root-exists-and-is-unique, def-linear-combination-and-span, def-orthogonal-complement, thm-finite-dimensional-orthogonal-decomposition, thm-dimension-of-a-linear-subspace, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-coordinate-column-and-matrix-of-a-linear-map, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §§2.1.2–2.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles, §2.5"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §§15.1 and 18.3"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $(p_a,\sigma_a)_{a=1}^n$ be a finite ensemble of density operators on a nonzero finite-dimensional complex-inner-product space $H$, with barycenter $\rho=\sum_ap_a\sigma_a$. For every finite-dimensional auxiliary space $K$ and every purification $\Psi\in H\otimes K$ of $\rho$, there is a finite complete effect family $(E_a)_{a=1}^n$ on $K$ such that

$$\operatorname{Tr}_K\!\left[(I_H\otimes\sqrt{E_a})|\Psi\rangle\langle\Psi|(I_H\otimes\sqrt{E_a})\right]=p_a\sigma_a$$

for each $a$. In particular, for a pure-state ensemble $\sigma_a=|u_a\rangle\langle u_a|$, the corresponding output is $p_a|u_a\rangle\langle u_a|$. A zero weight has $E_a=0$. The statement is a finite-dimensional operator identity and assumes no measurement postulate or outcome law.

## Facts & Assumptions

**Given:** A finite ensemble $(p_a,\sigma_a)$ with barycenter $\rho$ and a unit purification $\Psi\in H\otimes K$ of $\rho$.

[F1] [[def-qc-ensemble-and-purification]]: $p_a\ge0$, $\sum_ap_a=1$, each $\sigma_a$ is a density operator, $\rho=\sum_ap_a\sigma_a$, and a purification has partial trace $\rho$.

[F2] [[thm-qc-ensemble-barycenter-is-density]]: the barycenter $\rho$ is a density operator.

[F3] [[thm-qc-schmidt-decomposition]]: $\Psi=\sum_{j=1}^r\sqrt{\lambda_j}\,e_j\otimes f_j$ for positive $\lambda_j$ and orthonormal families in $H$ and $K$.

[F4] [[def-qc-tensor-register-and-permutation]]: tensor factors have a specified order and product-basis pairings are products of factor pairings.

[F5] [[def-qc-partial-trace]]: in ordered orthonormal product bases, the partial trace over $K$ sums entries with equal auxiliary indices.

[F6] [[thm-qc-partial-trace-characterization-and-basis-independence]]: the auxiliary basis in the partial-trace coordinate formula may be any ordered orthonormal basis of $K$.

[F7] [[def-qc-dirac-notation-conversion]]: the root inner product is linear in its first argument and $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle x$.

[F8] [[def-qc-tensor-map]]: $I_H\otimes T$ sends $x\otimes y$ to $x\otimes Ty$ and extends linearly.

[F9] [[def-qc-density-operator]]: every density operator is non-negative, and its support is the orthogonal complement of its kernel.

[F10] [[thm-non-negative-square-root-exists-and-is-unique]]: a non-negative operator $T$ has a unique non-negative square root $R$ with $R^2=T$.

[F11] [[def-qc-finite-positive-effect-family]]: a finite complete positive family consists of non-negative operators summing to identity.

[F12] [[lem-qc-complete-effect-family-members-are-effects]]: each member of such a family is an effect.

[F13] [[def-linear-combination-and-span]], [[def-orthogonal-complement]] and [[thm-finite-dimensional-orthogonal-decomposition]]: the spans $S$ and $L$ are subspaces, their orthogonal complements are subspaces, and $H=S\oplus S^\perp$ and $K=L\oplus L^\perp$.

[F14] [[thm-dimension-of-a-linear-subspace]] and [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: a subspace of a finite-dimensional space, including $W^\perp$, is finite-dimensional and has an orthonormal basis; adjoining such a basis of $W^\perp$ to an orthonormal basis of $W$ gives an orthonormal basis of $V$.

[F15] [[thm-qc-dirac-notation-coordinate-identity]]: in ordered orthonormal bases, the coordinate matrix of $|x\rangle\langle y|$ is $[x][y]^\dagger$.

[F16] [[lem-qc-tensor-product-basis-and-dimension]]: elementary tensors from ordered factor bases form a basis of the tensor product, so they span it.

[F17] [[def-coordinate-column-and-matrix-of-a-linear-map]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]] and [[def-complex-conjugate-real-imaginary-part-and-modulus]]: operator matrices use ordered-basis coordinates, products are row-by-column sums, transpose interchanges indices, and $M^*=\overline M^{\mathsf T}$.

[F18] [[def-kernel-and-image-of-a-linear-map]]: $\ker\rho=\{x\in H:\rho x=0\}$, and $\operatorname{im}\rho$ is the set of outputs $\rho x$.

## Proof

1.1 By [F1]–[F2], the barycenter $\rho$ is a density operator, as required for the purification hypothesis. By [F3], write $\Psi=\sum_{j=1}^r\sqrt{\lambda_j}\,e_j\otimes f_j$ with $\lambda_j>0$ and orthonormal families; $r\ge1$ because $\Psi$ is a unit vector. Set $S=\operatorname{span}\{e_1,\ldots,e_r\}$ and $L=\operatorname{span}\{f_1,\ldots,f_r\}$. By [F13]–[F14], the complements $S^\perp$ and $L^\perp$ are finite-dimensional and have orthonormal bases; adjoining those bases completes the Schmidt families to orthonormal bases of $H$ and $K$. The basis-independent partial-trace formula [F5]–[F6], together with [F7], gives $\rho=\operatorname{Tr}_K(|\Psi\rangle\langle\Psi|)=\sum_j\lambda_j|e_j\rangle\langle e_j|$. This operator is positive with eigenvalue $\lambda_j$ on $e_j$ and zero on $S^\perp$; the orthogonal decomposition shows $\ker\rho=S^\perp$, so the support definition [F9] and kernel definition [F18] give $S=\operatorname{supp}(\rho)$. The expansion of $\Psi$ shows that its auxiliary support is $L$. [F1, F2, F3, F4, F5, F6, F7, F9, F13, F14, F18, algebra]

1.2 If $p_a>0$ and $x\in\ker\rho$ as defined in [F18], then $0=\langle\rho x,x\rangle=\sum_bp_b\langle\sigma_bx,x\rangle$. Every summand is nonnegative by [F9], so $\langle\sigma_ax,x\rangle=0$. Writing $R_a=\sqrt{\sigma_a}$ by [F10], self-adjointness gives $\langle\sigma_ax,x\rangle=\langle R_ax,R_ax\rangle=0$, hence $\sigma_ax=0$. Self-adjointness then gives $\langle\sigma_ay,x\rangle=0$ for every $y$, so $\sigma_a y\in S$. [F1, F9, F10, F18, algebra]

2.1 On $S$, define $R e_j=\lambda_j^{-1/2}e_j$ and $A_a=p_aR(\sigma_a|_S)R$ when $p_a>0$; put $A_a=0$ when $p_a=0$. Each $A_a$ is self-adjoint because $R$ and $\sigma_a|_S$ are self-adjoint, and it is non-negative because its quadratic form is $p_a\langle\sigma_aRx,Rx\rangle\ge0$. Since $\sum_ap_a\sigma_a=\rho$, one has $\sum_aA_a=R(\rho|_S)R=I_S$. [F1, F9, step 1.1, step 1.2, algebra]

3.1 By [F13], $K=L\oplus L^\perp$; choose an orthonormal basis of $L^\perp$ by [F14], so $(f_j)$ together with that basis is an orthonormal basis of $K$. On $L$, define $E_a$ by the matrix $A_a^T$ in $(f_j)$ and extend it by zero on $L^\perp$. Since each $A_a$ is self-adjoint, $A_a^T$ is self-adjoint; for every coordinate vector $z$, [F17] gives $z^*A_a^Tz=\overline{(\bar z)^*A_a\bar z}\ge0$, so this block is non-negative. Their sum is identity on $L$ and zero on $L^\perp$. Choose $a_0$ with $p_{a_0}>0$, which exists since $\sum_ap_a=1$, and add the projection $0\oplus I_{L^\perp}$ to $E_{a_0}$. The resulting operators are non-negative and sum to $I_K$, so [F11]–[F12] make them a complete effect family. In particular, $E_a=0$ when $p_a=0$. [F1, F11, F12, F13, F14, F17, step 2.1, construct, choose, algebra]

4.1 Let $\Lambda e_j=\sqrt{\lambda_j}e_j$ and $S_a=\sqrt{E_a}$. Each $E_a$ is block diagonal on $L\oplus L^\perp$. The direct sum of the non-negative square roots of its two blocks is a non-negative square root of $E_a$, so uniqueness in [F10] shows that $S_a$ is block diagonal. If $B_a$ is the matrix of $S_a|_L$ in $(f_j)$, then $B_a$ is self-adjoint and $B_a^2=A_a^T$. [F10, F13, step 3.1, algebra]

5.1 Put $T_a=I_H\otimes S_a$ and $\Phi_a=T_a\Psi$. On elementary tensors, [F4], [F8] and self-adjointness of $S_a$ give $\langle T_a(x\otimes y),x'\otimes y'\rangle=\langle x\otimes y,T_a(x'\otimes y')\rangle$; since elementary tensors span by [F16], $T_a$ is self-adjoint. By [F7], for every $z$, $T_a|\Psi\rangle\langle\Psi|T_a z=\langle T_a z,\Psi\rangle T_a\Psi=\langle z,T_a\Psi\rangle\Phi_a=|\Phi_a\rangle\langle\Phi_a|z$. Thus the displayed filtered operator is the outer product of $\Phi_a$. In the ordered Schmidt product basis, $\Psi$ has coefficient matrix $\Lambda$, and [F8] sends $e_i\otimes f_j$ to $e_i\otimes S_af_j$; row-by-column multiplication [F17] gives coefficient matrix $C_a=\Lambda B_a^T$ on $H\otimes L$. [F3, F4, F7, F8, F16, F17, step 4.1, algebra]

6.1 By [F5], [F7], [F15]–[F17], the partial trace of the filtered vector's outer product has matrix $C_aC_a^*=\Lambda B_a^T\overline{B_a}\Lambda$. Since $B_a$ is self-adjoint, $B_a^T=\overline{B_a}$; hence $B_a^T\overline{B_a}=\overline{B_a^2}=\overline{A_a^T}=A_a$, the last equality using self-adjointness of $A_a$. Therefore the reduced operator on $S$ is $\Lambda A_a\Lambda=p_a\sigma_a|_S$, by the definition of $A_a$ and $\Lambda R=I_S$. [F1, F5, F7, F15, F16, F17, step 2.1, step 4.1, step 5.1, algebra]

7.1 If $p_a>0$, step 1.2 shows that $\sigma_a$ vanishes on $S^\perp$, so the operator identity from step 6.1 extends to all of $H$. If $p_a=0$, step 3.1 gives $E_a=0$, so the filtered vector and $p_a\sigma_a$ are both zero. This proves the required identity for every outcome. [step 1.2, step 3.1, step 6.1, algebra] ∎
## Remarks

The finite mixed-ensemble statement is proved directly by the positive-matrix construction $A_a=p_a\rho_S^{-1/2}\sigma_a\rho_S^{-1/2}$ (written in the Schmidt basis above). Spectrally refining each $\sigma_a$ rewrites this grouped operator as a sum of rank-one terms, but summing fine-grained square-root-filter outputs alone would not prove the displayed formula for the square root of the grouped effect. The proof forms the grouped effects first and verifies their square-root filters directly. All spectral and basis selections in the proof are finite-dimensional; no arbitrary-index choice is used.
