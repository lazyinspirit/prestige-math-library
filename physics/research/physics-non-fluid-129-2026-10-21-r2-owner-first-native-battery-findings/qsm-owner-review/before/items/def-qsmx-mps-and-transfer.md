---
id: def-qsmx-mps-and-transfer
kind: definition
title: Finite open MPS and injective translation invariant tensor
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-qc-schmidt-decomposition
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
dependency_roles:
  thm-qc-schmidt-decomposition: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: D. Pérez-García, F. Verstraete, M. M. Wolf, and J. I. Cirac, Matrix Product State Representations, §2 Theorem 1, §3.2.4, and §4.1
      url: https://arxiv.org/pdf/quant-ph/0608197
    - title: Grégoire Misguich, Introduction to matrix-product states and tensor networks, §§2.1, 2.3.1, 2.4.4, 2.5.3, Appendices A.1 and B.1–B.3
      url: https://arxiv.org/pdf/2606.24803
---

## Definition

Let $N\ge1$ and $d_1,\ldots,d_N,D_0,\ldots,D_N\ge1$ be integers. Give each site $j$ the Hilbert space $H_j=\mathbb C^{d_j}$ with standard inner product $\langle x,y\rangle:=\sum_{i=1}^{d_j}x_i\overline{y_i}$, linear in its first argument, and its fixed ordered standard basis $(|i_j\rangle)_{i_j=1}^{d_j}$. Tensor products use the ordered product basis and the product inner product. For every site and physical index choose a matrix $A_j^{i_j}\in M_{D_{j-1}\times D_j}(\mathbb C)$, a boundary column $\ell\in\mathbb C^{D_0}$, and a boundary column $r\in\mathbb C^{D_N}$. Here $M_{m\times n}(\mathbb C)$ is the space of $m$-by-$n$ complex matrices and $A^*$ denotes conjugate transpose. The associated finite open matrix product state (MPS) is the vector

$$|\psi_A\rangle:=\sum_{i_1=1}^{d_1}\cdots\sum_{i_N=1}^{d_N}\ell^*A_1^{i_1}\cdots A_N^{i_N}r\,|i_1\rangle\otimes\cdots\otimes|i_N\rangle\in H_1\otimes\cdots\otimes H_N.$$

The dimensions $D_j$ are the bond dimensions; the virtual indices between adjacent matrices are matrix indices summed in their product. The zero vector is allowed. A nonzero vector is normalized by division by its norm, and normalization is defined only when $\langle\psi_A,\psi_A\rangle>0$. Every vector in a finite tensor product of these site spaces has an exact open MPS representation.

For a translation invariant tensor, let $d,D\ge1$ and use one family $A^i\in M_D(\mathbb C)$ for every site. Its transfer map is the completely positive linear map

$$\mathcal E:M_D(\mathbb C)\to M_D(\mathbb C),\qquad \mathcal E(X):=\sum_{i=1}^d A^iXA^{i*}.$$

Here complete positivity means that for every integer $q\ge1$, the amplified map $\operatorname{id}_{M_q}\otimes\mathcal E$ sends positive semidefinite matrices to positive semidefinite matrices; a matrix is positive semidefinite when it is Hermitian and has nonnegative quadratic form on every vector.

The tensor is injective at length $L\ge1$ when the matrices $A^{i_1}\cdots A^{i_L}$, over all $i_1,\ldots,i_L\in\{1,\ldots,d\}$, span the full vector space $M_D(\mathbb C)$. No injectivity or transfer-spectrum condition is assumed by this definition.

For each block length $L\ge1$, define the blocked boundary map

$$\Gamma_L:M_D(\mathbb C)\to(\mathbb C^d)^{\otimes L},\qquad \Gamma_L(X):=\sum_{i_1,\ldots,i_L=1}^d\operatorname{tr}(XA^{i_1}\cdots A^{i_L})\,|i_1\rangle\otimes\cdots\otimes|i_L\rangle,$$

where $\operatorname{tr}(Y):=\sum_{a=1}^D Y_{aa}$. Let $P_L$ be the orthogonal projection onto $\operatorname{im}\Gamma_L$, set $h_L:=I-P_L$, and, for $N\ge L$, define the open-chain parent Hamiltonian

$$H_{N,L}:=\sum_{j=1}^{N-L+1}I^{\otimes(j-1)}\otimes h_L\otimes I^{\otimes(N-j-L+1)}.$$

Each local term is positive semidefinite with kernel $\operatorname{im}\Gamma_L$, and every finite open MPS formed from the same translation invariant tensor is a zero-energy ground state of $H_{N,L}$. This definition asserts no uniqueness of that ground state and no spectral-gap bound.

## Definition references

[[thm-qc-schmidt-decomposition]]

[[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

## Facts & Assumptions

**Given:** Finite positive integers $N,d_j,D_j$, the standard ordered bases of $H_j=\mathbb C^{d_j}$, site matrices of the displayed dimensions, and boundary vectors of the displayed dimensions.

[F1] [[thm-qc-schmidt-decomposition]]: every vector in a finite-dimensional complex tensor product has a Schmidt expansion with positive singular coefficients and orthonormal factor families; the squared norm is the sum of their squares.

[F2] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis, including the zero-dimensional case with the empty basis.

## Proof

1.1 For a nonzero vector, reshape its coefficient array as a matrix with row index $i_1$ and column index $(i_2,\ldots,i_N)$. By [F1] this gives an exact finite sum of products of a first-site coefficient and a residual coefficient array. Reshape the residual array at site $2$ with row index $(a_1,i_2)$ and remaining sites as column index, apply [F1] again, and store the resulting left coefficient array as the entries of $A_2^{i_2}$ with virtual indices $(a_1,a_2)$. Repeating this finite operation through site $N-1$ leaves a final array defining $A_N^{i_N}$; every SVD factorization is exact, so the original coefficient of each ordered product-basis vector is the displayed matrix product. For $N=1$ take the coefficients as scalar matrices. For the zero vector take all bond dimensions equal to $1$ and set the first site matrices to zero. Thus all finite vectors admit the stated representation. [given, F1, construct]

1.2 For any integer $q\ge1$ and positive semidefinite $Y\in M_q(\mathbb C)\otimes M_D(\mathbb C)$, the amplification is $({\rm id}_{M_q}\otimes\mathcal E)(Y)=\sum_{i=1}^d(I_q\otimes A^i)Y(I_q\otimes A^{i*})$. Each summand is positive semidefinite, so every amplification is positive and $\mathcal E$ is completely positive. The displayed definition also fixes its exact input and output spaces and makes no trace-preserving or unitality assertion. [given, algebra]

1.3 The map $\Gamma_L$ is linear and its image is a finite-dimensional subspace of $(\mathbb C^d)^{\otimes L}$. By [F2], choose an orthonormal basis $u_1,\ldots,u_s$ of that image and define $P_Lv:=\sum_{a=1}^s\langle v,u_a\rangle u_a$. Orthonormality gives $P_L^*=P_L$ and $P_L^2=P_L$, and $v-P_Lv$ is orthogonal to every $u_a$. Thus $h_L=I-P_L$ is the orthogonal projection onto the complement, with $\langle h_Lv,v\rangle=\|h_Lv\|^2\ge0$ and kernel $\operatorname{im}\Gamma_L$. [given, F2, construct, algebra]

2.1 Fix a finite open MPS made from the same tensor and a block of $L$ consecutive sites. For each fixed physical-basis configuration outside that block, contraction of the outside tensors leaves a row $\alpha$ on the left and a column $\beta$ on the right. With $X=\beta\alpha$, direct coordinates give $\operatorname{tr}(XA^{i_1}\cdots A^{i_L})=\sum_{u,v}\beta_u\alpha_v(A^{i_1}\cdots A^{i_L})_{vu}=\alpha A^{i_1}\cdots A^{i_L}\beta$, so that block slice is $\Gamma_L(X)$. The outside basis configurations are orthonormal, so the full vector is a sum of outside basis vectors tensored with block vectors in $\operatorname{im}\Gamma_L$; the corresponding $h_L$ therefore annihilates it. Each term in $H_{N,L}$ is positive semidefinite by step 1.3, while their sum annihilates the MPS; its energy is therefore zero and is the minimum possible energy. No uniqueness or positive-gap conclusion follows from this argument. [given, step 1.3, algebra] ∎

## Remarks

The diagram records the contracted virtual indices and the uncontracted physical basis legs in the finite open expression above. Horizontal edges carry bond spaces; each downward leg carries the indicated physical basis vector. The coefficient formula and proof are given algebraically above, so the diagram is explanatory only.

```tikz
\begin{tikzpicture}[baseline=-0.5ex]
  \node[draw,rectangle,minimum width=12mm,minimum height=7mm] (a1) at (0,0) {$A_1^{i_1}$};
  \node[draw,rectangle,minimum width=12mm,minimum height=7mm] (a2) at (2.1,0) {$A_2^{i_2}$};
  \node[draw,rectangle,minimum width=12mm,minimum height=7mm] (a3) at (4.2,0) {$A_3^{i_3}$};
  \node (left) at (-1.0,0) {$\ell^*$};
  \node (right) at (5.1,0) {$r$};
  \draw (left) -- (a1.west);
  \draw (a1.east) -- node[above] {$D_1$} (a2.west);
  \draw (a2.east) -- node[above] {$D_2$} (a3.west);
  \draw (a3.east) -- (right);
  \draw (a1.south) -- ++(0,-0.55) node[below] {$|i_1\rangle$};
  \draw (a2.south) -- ++(0,-0.55) node[below] {$|i_2\rangle$};
  \draw (a3.south) -- ++(0,-0.55) node[below] {$|i_3\rangle$};
\end{tikzpicture}
```
