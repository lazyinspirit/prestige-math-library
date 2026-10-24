---
id: thm-qc-purification-existence-and-unitary-equivalence
kind: theorem
title: Purifications exist and are unitarily equivalent after padding
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-qc-ensemble-and-purification, def-qc-dirac-notation-conversion, def-qc-tensor-register-and-permutation, def-qc-tensor-map, def-linear-isometry-and-orthogonal-or-unitary-operator, thm-qc-density-spectral-ensemble, def-qc-partial-trace, thm-qc-partial-trace-characterization-and-basis-independence, thm-qc-schmidt-decomposition, def-dimension, def-linear-combination-and-span, def-orthogonal-complement, thm-finite-dimensional-orthogonal-decomposition, thm-dimension-of-a-linear-subspace, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, cor-dimension-of-a-direct-sum, lem-standard-basis-of-f-n, prop-standard-coordinate-inner-products, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-rank-and-nullity, lem-qc-tensor-product-basis-and-dimension]
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
    - title: John Watrous, The Theory of Quantum Information, §§2.1.2–2.1.3, Thms. 2.10–2.12
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles, §§2.4–2.5"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §18.3"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Every density operator $\rho$ on a nonzero finite-dimensional complex-inner-product space $H$ has a purification on some finite-dimensional auxiliary space. More precisely, if $r=\operatorname{rank}(\rho)$, it has one on an auxiliary space of dimension $r$. If $\Psi_i\in H\otimes K_i$ ($i=1,2$) are any two purifications of the same $\rho$, then for every integer $m\ge\max(\dim K_1,\dim K_2)$ and every pair of linear isometric embeddings $\iota_i:K_i\to\mathbb C^m$, where $\mathbb C^m$ has its standard complex inner product, there is a unitary $U$ on $\mathbb C^m$ such that

$$ (I_H\otimes U)(I_H\otimes\iota_2)\Psi_2=(I_H\otimes\iota_1)\Psi_1. $$

## Facts & Assumptions

**Given:** A density operator $\rho$ on nonzero finite-dimensional $H$, and when proving equivalence, two finite-dimensional purifications $\Psi_i\in H\otimes K_i$ of $\rho$, an integer $m\ge\max(\dim K_1,\dim K_2)$, and linear isometric embeddings $\iota_i:K_i\to\mathbb C^m$ with the standard inner product on $\mathbb C^m$.

[F1] [[thm-qc-density-spectral-ensemble]]: $\rho=\sum_{j=1}^r\lambda_j|e_j\rangle\langle e_j|$ with $\lambda_j>0$, orthonormal $e_j$, and $\sum_j\lambda_j=1$.

[F2] [[def-qc-ensemble-and-purification]]: a purification is a unit vector whose auxiliary partial trace is $\rho$.

[F3] [[thm-qc-schmidt-decomposition]]: a finite bipartite vector has a Schmidt decomposition with positive coefficients and orthonormal factor families.

[F4] [[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]] and [[def-qc-dirac-notation-conversion]]: tensor factors are ordered with product pairings, tensor maps apply each linear map to its factor, and $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle x$.

[F5] [[def-qc-partial-trace]]: in ordered orthonormal product bases, partial trace sums entries with equal auxiliary indices.

[F6] [[def-linear-combination-and-span]], [[def-orthogonal-complement]], [[thm-finite-dimensional-orthogonal-decomposition]], [[thm-dimension-of-a-linear-subspace]] and [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: the span $L_i$ of a finite family is a subspace; its orthogonal complement is finite-dimensional and has an orthonormal basis; adjoining that basis to an orthonormal basis of $L_i$ gives an orthonormal basis of the ambient space.

[F7] [[thm-qc-partial-trace-characterization-and-basis-independence]]: the partial-trace formula is independent of the chosen ordered orthonormal basis of the auxiliary space.

[F8] [[cor-dimension-of-a-direct-sum]]: if a finite-dimensional space is a direct sum of two finite-dimensional subspaces, its dimension is the sum of their dimensions.

[F9] [[lem-standard-basis-of-f-n]] and [[prop-standard-coordinate-inner-products]]: the standard basis of $\mathbb C^r$ has $r$ elements and is orthonormal for its standard pairing.

[F10] [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]: prescribing images on an ordered basis determines a unique linear map.

[F12] [[def-rank-and-nullity]]: the rank of $\rho$ is the dimension of its image.

[F13] [[lem-qc-tensor-product-basis-and-dimension]]: elementary tensors of ordered factor bases form a basis of the tensor product, and if the factor bases are orthonormal then so is this product basis.

[F11] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a norm-preserving linear map is a linear isometry, and a bijective linear isometry on a finite-dimensional complex inner-product space is unitary.

## Proof

1.1 Use [F1] and let $K_0=\mathbb C^r$ with the standard ordered basis relabelled $f_1,\ldots,f_r$, orthonormal by [F9]. Define $\Psi_0=\sum_{j=1}^r\sqrt{\lambda_j}\,e_j\otimes f_j$. The product pairing [F4] gives $\|\Psi_0\|^2=\sum_j\lambda_j=1$, and [F5] gives $\operatorname{Tr}_{K_0}(|\Psi_0\rangle\langle\Psi_0|)=\sum_j\lambda_j|e_j\rangle\langle e_j|=\rho$. Thus $\Psi_0$ is a purification on an auxiliary space of dimension $r=\operatorname{rank}(\rho)$ by [F12]. [F1, F2, F4, F5, F9, F12, construct, algebra]

1.2 For each $i$, choose an orthonormal basis $(g_j^{(i)})_{j<d_i}$ of $K_i$ by [F6], and put $h_j^{(i)}=\iota_i g_j^{(i)}$. Since $\iota_i$ is linear and norm-preserving by [F11], each $h_j^{(i)}$ has norm one. For $j\ne\ell$, the four vectors $g_j^{(i)}\pm g_\ell^{(i)}$ and $g_j^{(i)}\pm i g_\ell^{(i)}$ have squared norm $2$, so their images do too. With the root inner product convention, for $z=\langle h_j^{(i)},h_\ell^{(i)}\rangle$ the differences $\|h_j^{(i)}+h_\ell^{(i)}\|^2-\|h_j^{(i)}-h_\ell^{(i)}\|^2=2(z+\overline z)$ and $\|h_j^{(i)}+i h_\ell^{(i)}\|^2-\|h_j^{(i)}-i h_\ell^{(i)}\|^2=2i(\overline z-z)$ both vanish. Thus $z+\overline z=0$ and $z=\overline z$, so $z=0$; the image vectors are orthonormal. Let $L_i=\operatorname{span}\{h_j^{(i)}:j<d_i\}$. By [F6], $\mathbb C^m=L_i\oplus L_i^\perp$ and $L_i^\perp$ is finite-dimensional; choose an orthonormal basis of $L_i^\perp$ by [F6] and append it to $(h_j^{(i)})$ to obtain an ordered orthonormal basis of $\mathbb C^m$. Choose an ordered orthonormal basis of $H$ by [F6]. The product basis result [F13] shows that $I_H\otimes\iota_i$ sends the orthonormal product basis of $H\otimes K_i$ to an orthonormal family, so the padded vector $\widetilde\Psi_i=(I_H\otimes\iota_i)\Psi_i$ is still a unit vector. Write $\Psi_i=\sum_{\alpha,j}c_{\alpha j}e_\alpha\otimes g_j^{(i)}$ in this product basis. In the extended basis of $\mathbb C^m$, $\widetilde\Psi_i=\sum_{\alpha,j}c_{\alpha j}e_\alpha\otimes h_j^{(i)}$ has zero coefficients on every complement basis vector, so the partial-trace coordinate sum [F5] over the extended basis equals the original partial trace over $(g_j^{(i)})$, namely $\rho$. By [F3] write each $\widetilde\Psi_i$ in Schmidt form $\sum_js_j^{(i)}u_j^{(i)}\otimes f_j^{(i)}$; [F5]–[F7] give its marginal $\sum_j(s_j^{(i)})^2|u_j^{(i)}\rangle\langle u_j^{(i)}|=\rho$. Therefore the vectors with $(s_j^{(i)})^2=\lambda$ form an orthonormal basis of each positive $\lambda$-eigenspace of $\rho$. [F1, F2, F3, F4, F5, F6, F7, F9, F11, F13, choose, algebra]

2.1 Fix an eigenvalue $\lambda>0$. By step 1.2, its two lists of Schmidt vectors are orthonormal bases of the same eigenspace. Write $u_{\lambda,j}^{(2)}=\sum_k(V_\lambda)_{kj}u_{\lambda,k}^{(1)}$. Orthonormality gives $\sum_k(V_\lambda)_{kj}\overline{(V_\lambda)_{k\ell}}=\delta_{j\ell}$; conjugating this identity gives $V_\lambda^*V_\lambda=I$, so the square matrix $V_\lambda$ is unitary. Prescribe $f_{\lambda,j}^{(2)}\mapsto\sum_k\overline{(V_\lambda)_{kj}}f_{\lambda,k}^{(1)}$. For indices $j,\ell$, the inner product of the two images is $\sum_k\overline{(V_\lambda)_{kj}}(V_\lambda)_{k\ell}=\delta_{j\ell}$; distinct eigenvalue blocks remain orthogonal. Thus this basis map extends linearly by [F10] to an onto isometry between the Schmidt-support subspaces. [step 1.2, F4, F10, F11, construct, algebra]

3.1 By [F6], each padded auxiliary space is the orthogonal direct sum of its Schmidt-support subspace and its orthogonal complement. Step 1.2 shows that each support has dimension $r$, so [F8] gives dimension $m-r$ for both complements. Choose orthonormal bases for them by [F6] and prescribe a bijection between those bases. The complement map and the support isometry from step 2.1 together send an orthonormal basis of $\mathbb C^m$ to an orthonormal basis of $\mathbb C^m$; [F10] extends this map uniquely and linearly, and the basis map is surjective and preserves norms. Hence [F11] makes it a unitary $U$. In each eigenvalue block, $\sum_j(V_\lambda)_{kj}\overline{(V_\lambda)_{\ell j}}=\delta_{k\ell}$, and therefore
$$\sum_j\sqrt{\lambda}\,u_{\lambda,j}^{(2)}\otimes U f_{\lambda,j}^{(2)}=\sum_{k=1}^{m_\lambda}\sqrt{\lambda}\,u_{\lambda,k}^{(1)}\otimes f_{\lambda,k}^{(1)}.$$
Summing these equalities over the positive eigenvalues gives the displayed equivalence after padding. [F1, F6, F8, F10, F11, step 1.2, step 2.1, algebra, choose] ∎
## Remarks

The proof uses finite-dimensional spectral families, orthonormal complements and finite basis extensions; it makes no arbitrary-index choice.
