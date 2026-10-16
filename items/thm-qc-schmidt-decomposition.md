---
id: thm-qc-schmidt-decomposition
kind: theorem
title: Schmidt decomposition
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps: [def-qc-tensor-register-and-permutation, def-qc-dirac-notation-conversion, thm-singular-value-decomposition, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, prop-standard-coordinate-inner-products]
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
    - title: John Watrous, The Theory of Quantum Information, §1.1.3, PDF pp.39–40 (printed pp.31–32)
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §18.3, PDF pp.170–171 (printed pp.158–159)"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $H,K$ be finite-dimensional complex-inner-product spaces with the tensor-product convention of [[def-qc-tensor-register-and-permutation]]. For every $\Psi\in H\otimes K$ there are an integer $r\ge0$, positive numbers $s_1,\ldots,s_r$, and orthonormal families $u_1,\ldots,u_r\in H$ and $v_1,\ldots,v_r\in K$ such that

$$\Psi=\sum_{j=1}^r s_j u_j\otimes v_j,\qquad \|\Psi\|^2=\sum_{j=1}^r s_j^2.$$

For $\Psi=0$ take $r=0$ and the empty sum. For any chosen ordered pair of orthonormal bases, the construction below obtains the $s_j$ as the positive singular values of the coefficient matrix of $\Psi$ in their ordered product basis.

## Facts & Assumptions

**Given:** Finite-dimensional complex-inner-product spaces $H,K$, their ordered orthonormal bases, and $\Psi\in H\otimes K$.

[F1] [[def-qc-tensor-register-and-permutation]]: the ordered product basis is orthonormal and elementary-tensor pairings are products of the factor pairings.

[F2] [[def-qc-dirac-notation-conversion]]: the root inner product is linear in its first argument.

[F3] The proof of [[thm-singular-value-decomposition]], steps 1.1–2.1, constructs an orthonormal eigenbasis $(q_k)$ of the domain for $|T|$, a finite orthonormal family $p_k=s_k^{-1}Tq_k$ for the positive singular values $s_k$, and zero action $Tq_k=0$ on zero singular values. Expanding an arbitrary vector in the domain basis gives the positive-family identity $Tz=\sum_{s_k>0}s_k\langle z,q_k\rangle p_k$; this use does not require extending the positive family in the codomain to a basis.

[F4] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: finite-dimensional inner-product spaces, including the zero space, have orthonormal bases.

[F5] [[prop-standard-coordinate-inner-products]]: the standard pairing on $\mathbb C^n$ is linear in the first argument, and its standard basis is orthonormal.

## Proof

1.1 Choose ordered orthonormal bases $(e_i)_{i=1}^m$ of $H$ and $(f_k)_{k=1}^n$ of $K$ using [F4], and write $\Psi=\sum_{i,k}c_{ik}e_i\otimes f_k$ by [F1]. Define the complex-linear map $T_C:\mathbb C^n\to\mathbb C^m$ by $(T_Cz)_i=\sum_{k=1}^n c_{ik}z_k$; its standard matrix is exactly $C$. Apply the positive-family construction [F3] to $T_C$. If $q_j$ and $p_j$ are its right and positive left singular vectors, the identity there gives $T_Cz=\sum_{j=1}^r s_j\langle z,q_j\rangle p_j$. Evaluating at each standard basis vector of $\mathbb C^n$ and using [F5], the $(i,k)$ entry of this identity is $c_{ik}=\sum_{j=1}^r s_j(p_j)_i\overline{(q_j)_k}$. This is the coefficient formula needed below, obtained from the positive singular families without a codomain basis completion. [given, F1, F3, F4, F5, construct]

2.1 Define $u_j=\sum_i(p_j)_ie_i$ and $v_j=\sum_k\overline{(q_j)_k}f_k$. The coordinate columns of the $p_j$ are orthonormal by [F3]–[F5], so the $u_j$ are orthonormal. For the second family, $\langle v_j,v_\ell\rangle=\sum_k\overline{(q_j)_k}(q_\ell)_k=\overline{\langle q_j,q_\ell\rangle}=\delta_{j\ell}$, so it too is orthonormal. The coefficient of $e_i\otimes f_k$ in $\sum_js_ju_j\otimes v_j$ is $\sum_js_j(p_j)_i\overline{(q_j)_k}=c_{ik}$ by step 1.1, so this sum equals $\Psi$. If $C=0$, then $\Psi=0$ and $r=0$. The positive coefficients are precisely the positive singular values of $C$. [F1, F2, F3, F5, step 1.1, algebra]

3.1 By [F1], the vectors $u_j\otimes v_j$ are orthonormal: their pairings are $\langle u_i,u_j\rangle\langle v_i,v_j\rangle=\delta_{ij}$. Expanding the squared norm of the sum in step 2.1 therefore gives $\|\Psi\|^2=\sum_js_j^2$, including the empty sum when $\Psi=0$. [F1, step 2.1, algebra] ∎
## Remarks

This proof uses only the SVD supplier's positive singular families and the expansion obtained from its domain eigenbasis; it does not use the separate claim that the positive left-singular family has already been extended to a full basis. All remaining choices are finite-dimensional basis or finite coordinate choices.
