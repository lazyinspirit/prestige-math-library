---
id: thm-real-normal-endomorphism-classification
kind: theorem
title: "A real normal endomorphism is orthogonally block-diagonalisable with 1x1 real blocks and 2x2 rotation-scaling blocks"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-self-adjoint-and-normal-endomorphism, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, thm-complex-spectral-theorem-for-normal-endomorphisms, prop-standard-coordinate-inner-products, lem-complex-conjugation-and-modulus-laws, thm-gram-schmidt-orthonormalisation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-spectral21-escalation/application/repair.json
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Hu, The Schur decomposition"
      url: "https://math.ucla.edu/~njhu/notes/nla/eig/schur/"
---

## Statement

Let $V$ be a finite-dimensional real inner product space and let $T:V\to V$ be
normal. Then $V$ has an orthonormal basis in which the matrix of $T$ is block
diagonal with blocks of the two forms

$$[a] \qquad\text{and}\qquad \begin{pmatrix}a&b\\-b&a\end{pmatrix} \text{ with } b\ne 0,$$

where $a,b\in\mathbb R$.

## Facts & Assumptions

**Given:** A finite-dimensional real inner product space $V$ and a normal endomorphism $T:V\to V$.

[L1] In an orthonormal basis, a real operator is normal exactly when its matrix commutes with its transpose ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

[L2] Over a complex inner product space, a normal operator has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[L3] The standard pairings on $\mathbb R^n$ and $\mathbb C^n$ are inner products ([[prop-standard-coordinate-inner-products]]).

[L4] Complex conjugation satisfies the usual algebraic laws ([[lem-complex-conjugation-and-modulus-laws]]).

[L5] Gram–Schmidt turns a finite real or complex independent list into an orthonormal list with the same span, including the empty list ([[thm-gram-schmidt-orthonormalisation]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L5] to a basis of $V$ to choose an orthonormal basis, and let $A\in M_n(\mathbb R)$ be the matrix of $T$. By [L1], $AA^{\mathsf T}=A^{\mathsf T}A$. Since $A$ has real entries, its conjugate transpose over $\mathbb C$ is $A^{\mathsf T}$, so $A$ is normal on $\mathbb C^n$ with the standard Hermitian inner product from [L3]. Thus [L2] gives an orthonormal eigenbasis $(z_1,\ldots,z_n)$, say $Az_j=\mu_jz_j$. If $n=0$, all subsequent lists are empty and give the asserted empty block decomposition. [L1, L2, L3, L5, choose]

2.1 For each eigenvalue $\lambda$, write $E_\lambda=\ker_{\mathbb C}(A-\lambda I)$. Expanding $x=\sum_j c_jz_j$ gives $(A-\lambda I)x=\sum_j(\mu_j-\lambda)c_jz_j$, so $E_\lambda$ is exactly the span of the $z_j$ with $\mu_j=\lambda$. Consequently these vectors form an orthonormal basis of the entire eigenspace, the distinct eigenspaces are mutually orthogonal, and their sum is $\mathbb C^n$. Also $A\overline x=\overline{Ax}$ by reality of $A$, so conjugation maps $E_\lambda$ onto $E_{\overline\lambda}$, with itself as inverse. [step 1.1, L4, algebra]

3.1 For real $\lambda$, put $R_\lambda=\ker_{\mathbb R}(A-\lambda I)$. If $x=u+iw\in E_\lambda$ with $u,w\in\mathbb R^n$, comparison of real and imaginary parts gives $u,w\in R_\lambda$; conversely every such $u+iw$ lies in $E_\lambda$. Choose a real basis of the finite-dimensional subspace $R_\lambda$ and apply [L5] to obtain a real orthonormal basis. It also spans $E_\lambda$ over $\mathbb C$ by the decomposition just proved, and is complex-linearly independent: the real and imaginary parts of a complex linear relation are real relations among that real basis. Thus it is a full orthonormal complex basis of $E_\lambda$, consisting of real eigenvectors. [step 2.1, L4, L5, choose, algebra]

3.2 For each conjugate pair of nonreal eigenvalues, select the representative $\lambda=a+ib$ with $b>0$. Choose an orthonormal basis $v_1,\ldots,v_m$ of $E_\lambda$ from step 2.1 and use $\overline v_1,\ldots,\overline v_m$ for $E_{\overline\lambda}$. Conjugation is bijective between these eigenspaces and satisfies $\langle\overline v_j,\overline v_k\rangle=\overline{\langle v_j,v_k\rangle}=\delta_{jk}$, so this is a full orthonormal basis there. Step 2.1 also gives $\langle v_j,\overline v_k\rangle=0$ for every $j,k$. [step 2.1, L3, L4, choose, algebra]

4.1 Write $v_j=u_j+iw_j$ with real $u_j,w_j$. Using the coordinate pairing, the identities $\langle v_j,v_k\rangle=\delta_{jk}$ and $\langle v_j,\overline v_k\rangle=0$ give respectively $u_j\cdot u_k+w_j\cdot w_k=\delta_{jk}$, $w_j\cdot u_k-u_j\cdot w_k=0$, $u_j\cdot u_k-w_j\cdot w_k=0$, and $w_j\cdot u_k+u_j\cdot w_k=0$. Hence $u_j\cdot u_k=w_j\cdot w_k=\delta_{jk}/2$ and $u_j\cdot w_k=w_j\cdot u_k=0$. Therefore $e_j=\sqrt2u_j$ and $f_j=\sqrt2w_j$ form an orthonormal real list. Comparing parts in $A(u_j+iw_j)=(a+ib)(u_j+iw_j)$ gives $Ae_j=ae_j-bf_j$ and $Af_j=be_j+af_j$. Thus each ordered pair $(e_j,f_j)$ spans an invariant plane with matrix $\begin{pmatrix}a&b\\-b&a\end{pmatrix}$. Moreover $u_j=(v_j+\overline v_j)/2$ and $w_j=(v_j-\overline v_j)/(2i)$, so these real vectors have complex span exactly $E_\lambda\oplus E_{\overline\lambda}$. [step 3.2, L3, L4, algebra, construct]

5.1 Collect the real bases from step 3.1 and the real pairs from step 4.1 for every selected nonreal representative. Vectors from different groups are orthogonal: each group lies in the complex span of its own eigenspace or conjugate eigenspace pair, and these disjoint groups of eigenspaces are mutually orthogonal by step 2.1; for real vectors the Hermitian pairing is the real dot product. Within each group orthonormality was proved in steps 3.1 and 4.1. Their complex span is all of $\mathbb C^n$ by step 2.1. Since the collected vectors are real, taking real parts of a complex expansion of any $x\in\mathbb R^n$ shows that they span $\mathbb R^n$ over $\mathbb R$. They therefore give a real orthonormal basis, including the empty basis when $n=0$. Each basis vector from step 3.1 contributes $[\lambda]$, and each pair from step 4.1 contributes the displayed block with $b>0$, hence $b\ne0$. Transporting this basis through the coordinates of step 1.1 gives the required orthonormal basis of $V$. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, algebra] ∎
