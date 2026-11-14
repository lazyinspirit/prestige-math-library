---
id: lem-qec-prereq-canonical-choi-weights
kind: lemma
domain: mathematics
title: Canonical Choi eigenvectors, Kraus rank and branch weights
status: draft
origin: session
deps:
  - def-qec-prereq-support-spectral-calculus
  - math:def-qc-choi-matrix
  - math:thm-qc-finite-kraus-choi-stinespring-equivalence
  - math:def-qc-instrument-and-conditional-state
  - math:lem-qc-tensor-product-basis-and-dimension
dependency_roles:
  def-qec-prereq-support-spectral-calculus: mathematical-premise
  math:def-qc-choi-matrix: mathematical-premise
  math:thm-qc-finite-kraus-choi-stinespring-equivalence: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
  math:lem-qc-tensor-product-basis-and-dimension: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $H$ and $K$ be finite-dimensional complex inner-product spaces with $d=\dim H>0$, and fix an ordered orthonormal basis $(e_i)_{i=1}^d$ of $H$. Let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel: a completely positive, trace-preserving linear map. Its input-first, unnormalized Choi matrix is $J=\sum_{i,j}|e_i\rangle\langle e_j|\otimes\mathcal N(|e_i\rangle\langle e_j|)$. Write its positive-eigenvalue decomposition as $J=\sum_{k=1}^r\lambda_k|v_k\rangle\langle v_k|$, where $\lambda_k>0$ and the $v_k$ are orthonormal. Define $K_k:H\to K$ by $\sum_i e_i\otimes K_ke_i=\sqrt{\lambda_k}v_k$.

Then $\mathcal N(X)=\sum_{k=1}^r K_kXK_k^\dagger$, and $\operatorname{Tr}(K_k^\dagger K_l)=\lambda_k\delta_{kl}$. In particular, the weights $w_k=\operatorname{Tr}(K_k^\dagger K_k)$ equal $\lambda_k$, and the minimum number of operators in a Kraus representation of $\mathcal N$ is $r=\operatorname{rank}J$. The maps $X\mapsto K_kXK_k^\dagger$ form a finite instrument, whose branch probability on the maximally mixed input $I_H/d$ is $w_k/d$. Within a degenerate eigenspace the orthonormal eigenbasis may be rotated, so the individual operators are not unique; these mathematical branches do not specify a unique measured trajectory.

## Statement references

[[def-qec-prereq-support-spectral-calculus]]

[[math:def-qc-choi-matrix]]

[[math:thm-qc-finite-kraus-choi-stinespring-equivalence]]

[[math:def-qc-instrument-and-conditional-state]]

[[math:lem-qc-tensor-product-basis-and-dimension]]

## Facts & Assumptions

**Given:** The spaces, basis, channel, Choi matrix and spectral vectors in the Statement.

**Goal:** Establish the Kraus representation, orthogonality, minimal number, and instrument weights stated above.

[F1] A finite-dimensional positive semidefinite operator has an orthonormal eigenbasis with nonnegative eigenvalues; its support is the span of the positive-eigenvalue vectors. [[def-qec-prereq-support-spectral-calculus]]

[F2] The Choi matrix uses the fixed input basis and input-first tensor order displayed in the Statement, with the inner product linear in its first argument. [[math:def-qc-choi-matrix]]

[F3] For a finite-dimensional channel, the Choi matrix is positive semidefinite and a finite Kraus representation exists with $\sum_a A_a^\dagger A_a=I_H$. [[math:thm-qc-finite-kraus-choi-stinespring-equivalence]]

[F4] For a nonzero finite-dimensional input space, a finite instrument is a family of completely positive maps indexed by a finite nonempty outcome set whose sum preserves trace; its outcome weight at a density operator $\rho$ is the trace of the corresponding output. [[math:def-qc-instrument-and-conditional-state]]

[F5] For finite-dimensional complex inner-product spaces with specified orthonormal bases, the elementary tensors of the basis vectors form an orthonormal basis of their tensor product, including when one factor is zero-dimensional. [[math:lem-qc-tensor-product-basis-and-dimension]]

## Proof

1.1 By [F3], $J$ is positive semidefinite, and [F1] gives the stated decomposition with $r=\operatorname{rank}J$. Choose an orthonormal basis $(f_j)$ of $K$, available by applying [F1] to $I_K$. By [F5], each tensor vector has a unique expansion $\sum_{i,j}c_{ij}e_i\otimes f_j$, hence a unique expression $\sum_i e_i\otimes y_i$ with $y_i=\sum_jc_{ij}f_j$. Assigning $K_ke_i=y_i$ for the vector $\sqrt{\lambda_k}v_k$ then defines a unique linear map $K_k:H\to K$. For any map $A:H\to K$, write $|A\rangle\!\rangle=\sum_i e_i\otimes Ae_i$. Expanding [F2] for $X\mapsto AXA^\dagger$ gives its Choi matrix as $|A\rangle\!\rangle\langle\!\langle A|$. Thus the Choi matrix of $\Phi(X)=\sum_kK_kXK_k^\dagger$ is $J$. Equality of Choi matrices implies equality of maps: the $(i,j)$ input block is the image of $|e_i\rangle\langle e_j|$, and these matrix units form a basis of $\mathcal L(H)$. Hence $\Phi=\mathcal N$. [given, F1, F2, F3, F5, algebra]

2.1 With the first-argument-linear convention in [F2], the tensor inner product gives $\operatorname{Tr}(K_k^\dagger K_l)=\sum_i\langle K_le_i,K_ke_i\rangle=\langle\sqrt{\lambda_l}v_l,\sqrt{\lambda_k}v_k\rangle=\lambda_k\delta_{kl}$, since the $v_k$ are orthonormal. This proves the asserted weights. For any Kraus representation with $m$ operators $A_a$, the same expansion yields $J=\sum_{a=1}^m|A_a\rangle\!\rangle\langle\!\langle A_a|$; its range lies in the span of these $m$ vectors, so $r\leq m$. Step 1.1 supplies a representation with $r$ operators, proving minimality. [given, F2, step 1.1, algebra]

3.1 If $r=0$, step 1.1 would give $\mathcal N(|e_1\rangle\langle e_1|)=0$, contradicting trace preservation because $\operatorname{Tr}(|e_1\rangle\langle e_1|)=1$. Thus $r>0$, so $\{1,\ldots,r\}$ is a finite nonempty outcome set. Each branch $X\mapsto K_kXK_k^\dagger$ is completely positive: after adjoining any finite-dimensional identity map it sends a positive operator $Y$ to $(I\otimes K_k)Y(I\otimes K_k)^\dagger$, which is positive. Their sum is the trace-preserving channel $\mathcal N$, so [F4] makes them an instrument. Its branch weight at $I_H/d$ is $\operatorname{Tr}(K_kK_k^\dagger)/d=\operatorname{Tr}(K_k^\dagger K_k)/d=w_k/d$. An orthonormal change of basis within a repeated-eigenvalue eigenspace leaves its spectral projection unchanged but changes its individual vectors and reshaped operators. The instrument constructed from a chosen basis is therefore one possible decomposition, with no uniqueness claim about a measured trajectory. [given, F1, F4, step 1.1, step 2.1, algebra] ∎
