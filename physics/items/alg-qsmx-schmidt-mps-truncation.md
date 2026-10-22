---
id: alg-qsmx-schmidt-mps-truncation
kind: algorithm
title: Sequential Schmidt truncation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-mps-and-transfer
  - thm-qc-schmidt-decomposition
dependency_roles:
  def-qsmx-mps-and-transfer: mathematical-premise
  thm-qc-schmidt-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: D. Pérez-García, F. Verstraete, M. M. Wolf, and J. I. Cirac, Matrix Product State Representations, §3.1 Theorem 1 (successive-SVD OBC construction)
      url: https://arxiv.org/pdf/quant-ph/0608197
    - title: Grégoire Misguich, Introduction to matrix-product states and tensor networks, §2.4.4 and Appendix A.1
      url: https://arxiv.org/pdf/2606.24803
---

## Definition

Input an integer $N\ge1$, nonzero finite-dimensional complex inner-product spaces $H_1,\ldots,H_N$ with fixed ordered orthonormal bases, a normalized vector $\psi\in H_1\otimes\cdots\otimes H_N$ with exact coefficients in those bases, and integer rank caps $D_k\ge1$ for $1\le k<N$. For $N=1$ the cap list is empty. The algorithm performs the following exact finite procedure.

1. Set the current remainder to $\psi^{(0)}:=\psi$, the retained left space before the first cut to $S_0:=\mathbb C$, and an empty list of site tensors and discarded squared norms.

2. For each $k=1,\ldots,N-1$, reshape the current remainder as a matrix whose row index is the retained left index in $S_{k-1}$ together with the physical basis index in $H_k$, and whose column index is the ordered product basis of $H_{k+1}\otimes\cdots\otimes H_N$. Compute an exact singular value decomposition. Order the positive singular values nonincreasingly. Within each repeated positive singular value, form a deterministic orthonormal basis of its left singular subspace by projecting the row-coordinate standard basis vectors in lexicographic order and applying Gram–Schmidt, discarding zero residuals; obtain the corresponding right singular vector as $M^*u/s$ for singular value $s>0$. Retain the first $m_k:=\min(D_k,r_k)$ positive singular directions, where $r_k$ is the number of positive singular values, and record $\delta_k:=\sum_{j=m_k+1}^{r_k}s_{k,j}^2$ from this current unnormalized remainder. Reshape the retained left singular vectors into a site tensor $A_k^{i_k}$ with left index in $S_{k-1}$ and right index in $S_k:=\mathbb C^{m_k}$; pass the retained singular values times the adjoints of the retained right singular vectors as the next current remainder $\psi^{(k)}$. Since the input has norm one and $D_k\ge1$, every current remainder is nonzero and each $m_k\ge1$.

3. After the last cut, reshape the remaining array as the final site tensor $A_N^{i_N}$, use outer bond dimensions $D_0=D_N=1$ with scalar boundary columns $\ell=r=(1)$, and return the contracted unnormalized open MPS $\phi:=\sum_{i_1,\ldots,i_N}\ell^*A_1^{i_1}\cdots A_N^{i_N}r\,|i_1\rangle\otimes\cdots\otimes|i_N\rangle\in H_1\otimes\cdots\otimes H_N$, the list $(\delta_1,\ldots,\delta_{N-1})$, and the bond dimensions $(m_1,\ldots,m_{N-1})$. Each $|i_j\rangle$ runs through the fixed ordered orthonormal basis of $H_j$. For $N>1$, the compressed remainder $\psi^{(N-1)}\in S_{N-1}\otimes H_N$ supplies the entries of $A_N^{i_N}$; its retained left index is contracted with the preceding site tensors to form $\phi$. For $N=1$, return $\phi=\psi$ and empty lists with the same scalar boundaries. If $\|\phi\|^2=0$, return a norm-zero flag and do not normalize. Otherwise an optional normalized copy is $\phi/\|\phi\|$; the returned $\phi$ and discarded norms always refer to the unnormalized sweep output.

All coefficients and SVDs are exact mathematical objects; no floating-point threshold is used. The tie rule fixes a choice even when a rank cap cuts through a degenerate singular-value subspace.

## Definition references

[[def-qsmx-mps-and-transfer]]

[[thm-qc-schmidt-decomposition]]
