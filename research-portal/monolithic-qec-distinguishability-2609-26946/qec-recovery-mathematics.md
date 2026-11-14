---
title: Quantum channels and recovery
description: Develop finite-code channels, complementary and syndrome records,
  support calculus, canonical Choi weights, transpose recovery and fidelity
  bounds. Include passive-subsystem and rank-one correctability interfaces so
  the article can compare recoverable logical information with environmental
  error records.
status: draft
dependency_level: 0
---

**Purpose:** Develop finite-code channels, complementary and syndrome records, support calculus, canonical Choi weights, transpose recovery and fidelity bounds. Include passive-subsystem and rank-one correctability interfaces so the article can compare recoverable logical information with environmental error records.

## Finite operator and ket conventions

[Open item](item-def-qec-prereq-finite-operator-conventions) · level 0


### Definition

A finite operator space in these conventions is a specified nonzero complex coordinate space $H=\mathbb C^d$, $d\geq 1$, equipped with its standard inner product and a specified ordered orthonormal basis. An ordered basis is a finite ordered list of linearly independent vectors spanning the space. An orthonormal basis is a basis whose vectors have inner products $1$ with themselves and $0$ with each other. Coordinates and matrices below are taken in the specified bases. The root inner product is linear in its first argument; on standard coordinates it is $\langle x,y\rangle_{\rm root}=\sum_i x_i\overline{y_i}$.

Below, $H=\mathbb C^d$ and $K=\mathbb C^e$, with $d,e\geq1$, are any two finite operator spaces with their specified ordered orthonormal bases $(h_i)_{i=1}^d$ and $(k_j)_{j=1}^e$. For $x=\sum_i x_i b_i$ in a specified ordered basis $(b_i)$, its coordinate column is $(x_i)_i$; the same symbol $x$ also denotes this column. For a linear map $A:K\to H$, its matrix, also denoted $A=(a_{ij})$, is determined by $Ak_j=\sum_i a_{ij}h_i$. Products denote rectangular matrix products, $(BC)_{ij}=\sum_k B_{ik}C_{kj}$, for compatible shapes. Transposition means $(B^T)_{ji}=B_{ij}$, and $\overline B$ denotes entrywise complex conjugation.

For vectors $u\in H$ and $v\in K$, the ket $|u\rangle$ denotes $u$, the bra $\langle v|$ denotes the linear functional $x\mapsto v^\dagger x=\sum_j\overline{v_j}x_j$ on $K$, and the outer product $|u\rangle\langle v|:K\to H$ maps $x$ to $u(v^\dagger x)$. For a linear map $A:K\to H$, $A^\dagger:H\to K$ denotes the adjoint, represented by the conjugate transpose $\overline A^T$. The bracket $\langle u|A|v\rangle$ means $u^\dagger Av$, equivalently $\langle Av,u\rangle_{\rm root}$.

An ordered tensor register consists of a finite ordered list of finite-dimensional complex inner-product spaces, each with a specified ordered orthonormal basis: its factors remain in the displayed order and its product basis is ordered lexicographically. The empty tensor product is $\mathbb C$. No infinite tensor product or unspecified basis is implicit.

### Definition references

[math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products)

[math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)

[math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)

[math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

[math:def-coordinate-column-and-matrix-of-a-linear-map](https://alphabetamath.cc/item/def-coordinate-column-and-matrix-of-a-linear-map)

[math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)

[math:def-transpose-of-a-matrix](https://alphabetamath.cc/item/def-transpose-of-a-matrix)

### Justification

In an orthonormal basis, expanding the vectors in their coordinate columns and using linearity in the first argument and conjugate symmetry gives $\langle x,y\rangle_{\rm root}=\sum_i x_i\overline{y_i}$ in those coordinates, consistent with the standard-coordinate inner product. These are the coordinate columns of [math:def-coordinate-column-and-matrix-of-a-linear-map](https://alphabetamath.cc/item/def-coordinate-column-and-matrix-of-a-linear-map), in the ordered bases of [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis), using [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space) and [math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products).

Hence $v^\dagger x=\langle x,v\rangle_{\rm root}$ is linear in $x$, so the stated outer product preserves linear combinations and is a well-defined linear map in the sense of [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map). The scalar product of the row and column uses [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix).

Expanding $x=\sum_j x_j k_j$ and applying linearity to the defining matrix columns gives $(Ax)_i=\sum_j a_{ij}x_j$, the matrix action supplied by the coordinate-column convention and rectangular multiplication. This uses [math:def-coordinate-column-and-matrix-of-a-linear-map](https://alphabetamath.cc/item/def-coordinate-column-and-matrix-of-a-linear-map), [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map) and [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix).

For $x\in K$ and $y\in H$, the finite coordinate sums give $\langle Ax,y\rangle_{\rm root}=\sum_{i,j}a_{ij}x_j\overline{y_i}=\langle x,\overline A^T y\rangle_{\rm root}$, where $(\overline A^T)_{ji}=\overline{a_{ij}}$ by [math:def-transpose-of-a-matrix](https://alphabetamath.cc/item/def-transpose-of-a-matrix). Thus the conjugate transpose satisfies the defining adjoint identity of [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces), with the inner product of [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space) and the matrix products of [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix). In particular $u^\dagger Av=\langle Av,u\rangle_{\rm root}$.

The ordered tensor construction and its product basis are supplied by [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation).


## Code restriction and decoded channel types

[Open item](item-def-qec-prereq-restricted-logical-channel) · level 0


### Definition

Let $H_L,H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, and write $\mathcal L(H)$ for the complex-linear endomorphisms of $H$. Let $V:H_L\to H_P$ be a linear isometry, $P=VV^*$ its code projector, $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ a quantum channel, and $\mathcal R:\mathcal L(H_O)\to\mathcal L(H_L)$ a quantum channel, called a decoded recovery or decoder. A quantum channel is a complex-linear, completely positive, trace-preserving map; completely positive means that its amplification by the identity on every finite-dimensional ancilla preserves positive semidefinite operators.

Throughout this definition, a code means the isometric encoding $V$ on the arbitrary physical space $H_P$, with code subspace $\operatorname{im}V$; no tensor decomposition is required. This generalizes the ordered-register code convention, with which it agrees whenever $H_P$ is supplied as a fixed ordered register tensor product with at least one factor and specified ordered orthonormal factor bases.

Define the encoding channel by $\operatorname{Ad}_V(X)=VXV^*$ and the restricted noise channel by $\mathcal N\circ\operatorname{Ad}_V$. The decoded logical channel is $\mathcal E=\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V$. The code is exactly correctable for $\mathcal N$ when a decoder can be chosen with $\mathcal E=\operatorname{id}_{\mathcal L(H_L)}$.

A physical recovery supported on the code is a channel $\mathcal T:\mathcal L(H_O)\to\mathcal L(H_P)$ such that $P\mathcal T(Y)P=\mathcal T(Y)$ for every $Y\in\mathcal L(H_O)$. It corresponds to the decoder $Y\mapsto V^*\mathcal T(Y)V$; conversely a decoder $\mathcal R$ corresponds to the physical recovery $\operatorname{Ad}_V\circ\mathcal R$. If $H_P$ is supplied as the tensor-product space of an ordered physical register, the one-factor case has a single physical factor; this terminology imposes no additional channel condition.

### Facts & Assumptions

[F1] For a nonzero logical space and a fixed ordered physical register tensor product with at least one factor and specified ordered orthonormal factor bases, an isometric code has code subspace $\operatorname{im}V$ and code projector $VV^*$. [math:def-qc-quantum-code-isometry-and-code-projector](https://alphabetamath.cc/item/def-qc-quantum-code-isometry-and-code-projector)

[F2] A finite-dimensional quantum channel is completely positive and preserves trace on every endomorphism. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F3] Exact correction means that a decoded recovery composed with the noise and encoding equals the identity on the full logical operator space. [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)

[F4] Complete positivity means positivity of every finite ancilla amplification. [math:def-qc-completely-positive-map](https://alphabetamath.cc/item/def-qc-completely-positive-map)

[F5] For a finite-dimensional isometry, $V^*V=I$ and $VV^*$ is the orthogonal projector onto $\operatorname{im}V$. [math:thm-qc-isometric-encoding-projector](https://alphabetamath.cc/item/thm-qc-isometric-encoding-projector)

[F6] For compatible rectangular matrices, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$. [math:thm-trace-of-ab-equals-trace-of-ba](https://alphabetamath.cc/item/thm-trace-of-ab-equals-trace-of-ba)

[F7] Positive semidefinite means non-negative: the operator is self-adjoint and its quadratic form is nonnegative at every vector. [math:def-non-negative-and-positive-operator](https://alphabetamath.cc/item/def-non-negative-and-positive-operator)

[F8] An ordered tensor register has a finite ordered list of finite-dimensional complex inner-product spaces with specified ordered orthonormal bases, and its space is their tensor product in the specified order. [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

### Justification

By [F5], $V^*V=I$. For every finite ancilla, the amplification of $X\mapsto VXV^*$ is conjugation by $V\otimes I$, which preserves self-adjointness and sends positive semidefinite operators to positive semidefinite operators by [F7]: its quadratic form at $z$ is the original quadratic form at $(V^*\otimes I)z$. Its trace equals the input trace by [F6] and $V^*V=I$. Thus it is a channel by [F2] and [F4]. Compositions of channels are linear and trace-preserving; their finite amplifications are compositions of positive maps, so they are completely positive. This justifies both the restricted noise channel and the logical channel.

For a code-supported physical recovery $\mathcal T$, the map $Y\mapsto V^*\mathcal T(Y)V$ is completely positive by the same conjugation argument and composition. Its trace is $\operatorname{tr}(\mathcal T(Y)P)$ by [F6], equal to $\operatorname{tr}(\mathcal T(Y))=\operatorname{tr}(Y)$ because $P\mathcal T(Y)P=\mathcal T(Y)$ and $P^2=P$. It is therefore a decoder. Conversely, $\operatorname{Ad}_V\circ\mathcal R$ is a channel, and $PV=V$ and $V^*P=V^*$ show that its outputs are supported on the code. The two assignments are inverse: $V^*V=I$ recovers $\mathcal R$, while $VV^*\mathcal T(Y)VV^*=P\mathcal T(Y)P=\mathcal T(Y)$ recovers $\mathcal T$.


## Entanglement fidelity on a finite logical space

[Open item](item-def-qec-prereq-entanglement-fidelity) · level 0


### Definition

Let $d\ge 1$ be an integer, let $H=\mathbb C^d$ with standard orthonormal basis $|0\rangle,\ldots,|d-1\rangle$, and let $\mathcal E:\mathcal L(H)\to\mathcal L(H)$ be a quantum channel. Use a second copy of $H$ as a reference and set $|\Phi_d\rangle=d^{-1/2}\sum_{j=0}^{d-1}|j\rangle\otimes|j\rangle$. For vectors $u,v$, write $|u\rangle\langle v|$ for the operator $x\mapsto\langle x,v\rangle u$, using the inner product linear in its first argument. The entanglement fidelity of $\mathcal E$ for the maximally mixed input $I/d$ is

$$F_e(\mathcal E)=\langle\Phi_d|({\rm id}\otimes\mathcal E)(|\Phi_d\rangle\langle\Phi_d|)|\Phi_d\rangle.$$

Here the bracket $\langle v|A|v\rangle$ means $\langle Av,v\rangle$, $I$ is the identity on $H$, and ${\rm id}$ is the identity map on $\mathcal L(H)$. The tensor map acts on elementary operators by $({\rm id}\otimes\mathcal E)(A\otimes B)=A\otimes\mathcal E(B)$ and extends linearly. The pure-state overlap $\langle\psi|\mathcal E(|\psi\rangle\langle\psi|)|\psi\rangle$ for a unit vector $\psi$, and its infimum over unit vectors, are separately defined functionals; they need not equal $F_e$.

### Definition references

[math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[math:def-infimum](https://alphabetamath.cc/item/def-infimum)

### Facts & Assumptions

[F1] A finite-dimensional quantum channel is complex-linear, completely positive and trace-preserving on all operators. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F2] A density operator is a non-negative operator of trace one on a nonzero finite-dimensional space. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[F3] Product basis vectors form an orthonormal basis of the ordered tensor register, with inner product linear in the first argument; the wire swap exchanges the two factors on product basis vectors and extends linearly. [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[F4] In an ordered orthonormal product basis, the first-factor partial trace is given by $(\operatorname{Tr}_1 X)_{ab}=\sum_s X_{(s,a),(s,b)}$, with matrix entries computed using the linear-first inner product. [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

[F5] Tensor products of the operator matrix units of two specified orthonormal bases form a basis of the endomorphisms of their tensor product. [math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis)

[F6] For a complex-linear map $\mathcal A:\mathcal L(K)\to\mathcal L(K)$ and an ancilla $R=\mathbb C^r$, the amplification $\mathcal A^{(r)}$ acts on the $R$-indexed blocks of an operator on $K\otimes R$ by applying $\mathcal A$ to each block. Complete positivity means that this amplification preserves non-negativity for every integer $r\ge1$. [math:def-qc-completely-positive-map](https://alphabetamath.cc/item/def-qc-completely-positive-map)

[F7] For a real set $S$, a real number $\ell$ is its infimum when it is a lower bound of $S$ and every lower bound of $S$ is at most $\ell$. [math:def-infimum](https://alphabetamath.cc/item/def-infimum)

[F8] Every nonempty subset of $\mathbb R$ that is bounded below has an infimum in $\mathbb R$. [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)

### Justification

**Given:** The finite space, standard basis, channel, rank-one-operator convention and tensor-map rule in the Definition. Write $E_{jk}=|j\rangle\langle k|$ and $P_\Phi=|\Phi_d\rangle\langle\Phi_d|$.

1.1 By [F3], the $d$ matching product basis vectors are orthonormal, so $\|\Phi_d\|=1$. The operator $P_\Phi$ is self-adjoint and satisfies $\langle P_\Phi x,x\rangle=|\langle x,\Phi_d\rangle|^2\ge0$, and its trace is $\|\Phi_d\|^2=1$, so it is a density operator by [F2]. Expanding gives $P_\Phi=d^{-1}\sum_{j,k}E_{jk}\otimes E_{jk}$. The coordinate rule [F4] yields $\operatorname{Tr}_1(E_{jk}\otimes E_{\ell m})=\delta_{jk}E_{\ell m}$, since summing the first-factor diagonal entries gives $\sum_s\delta_{sj}\delta_{sk}=\delta_{jk}$. Consequently $\operatorname{Tr}_1 P_\Phi=d^{-1}\sum_j E_{jj}=I/d$. [given, F2, F3, F4, algebra]

1.2 By [F5], prescribing $E_{jk}\otimes E_{\ell m}\mapsto E_{jk}\otimes\mathcal E(E_{\ell m})$ defines a unique linear map $L$ on the full operator space. Expanding $A$ and $B$ in their matrix units shows $L(A\otimes B)=A\otimes\mathcal E(B)$, as required in the Definition. In the product basis, summing diagonal entries gives $\operatorname{tr}(A\otimes B)=\operatorname{tr}(A)\operatorname{tr}(B)$. Hence [F1] implies $\operatorname{tr}L(E_{jk}\otimes E_{\ell m})=\operatorname{tr}(E_{jk})\operatorname{tr}\mathcal E(E_{\ell m})=\delta_{jk}\delta_{\ell m}=\operatorname{tr}(E_{jk}\otimes E_{\ell m})$; linearity extends trace preservation to every input. [given, F1, F3, F5, algebra]

1.3 For every unit vector $\psi\in H$, put $P_\psi=|\psi\rangle\langle\psi|$. This operator is self-adjoint and satisfies $\langle P_\psi x,x\rangle=|\langle x,\psi\rangle|^2\ge0$, so it is non-negative. Complete positivity in [F1] and the $r=1$ case of [F6] imply that $\mathcal E(P_\psi)$ is non-negative. Thus $f_\psi=\langle\mathcal E(P_\psi)\psi,\psi\rangle$ is real and nonnegative. Since $d\ge1$, the unit vector $|0\rangle$ exists, so $S_{\mathcal E}=\{f_\psi:\psi\in H,\ \|\psi\|=1\}$ is a nonempty subset of $\mathbb R$ bounded below by $0$. By [F8] it has a real infimum. By [F7], any two infima are each at most the other and hence equal; the infimum functional in the Definition is therefore well-defined. [given, F1, F6, F7, F8, algebra]

2.1 Let $S(x\otimes y)=y\otimes x$ be the wire swap on $H\otimes H$. It permutes the orthonormal product basis and satisfies $S^2=I$, so it preserves inner products and $\langle Su,v\rangle=\langle u,Sv\rangle$. If $X$ is non-negative, $SXS$ is self-adjoint and $\langle SXSy,y\rangle=\langle XSy,Sy\rangle\ge0$; thus conjugation by $S$ preserves non-negativity. The block rule [F6] gives $\mathcal E^{(d)}(B\otimes A)=\mathcal E(B)\otimes A$. Checking on the product operator basis [F5] therefore gives $L(X)=S\mathcal E^{(d)}(SXS)S$ for every $X$. Complete positivity in [F1] and [F6] makes $\mathcal E^{(d)}$ positive, so this identity proves positivity of the reference-first map $L={\rm id}\otimes\mathcal E$. [F1, F3, F5, F6, step 1.2, algebra]

3.1 Steps 1.1, 1.2 and 2.1 show that $\rho=L(P_\Phi)$ is non-negative and has trace one, hence is a density operator by [F2]. In an orthonormal basis beginning with $\Phi_d$, $F_e(\mathcal E)=\langle\rho\Phi_d,\Phi_d\rangle$ is its first diagonal entry. All diagonal entries are non-negative and sum to one, so this is a well-defined real number in $[0,1]$. [F2, F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 For the comparison example take $d=2$ and define $\mathcal R(X)=\operatorname{tr}(X)|0\rangle\langle0|$ on every operator $X$. This map is complex-linear and trace-preserving since $\operatorname{tr}(|0\rangle\langle0|)=1$. For any $r\ge1$, write $X\in\mathcal L(\mathbb C^2\otimes\mathbb C^r)$ uniquely as $\sum_{a,b=0}^1 E_{ab}\otimes X_{ab}$. On elementary operator tensors the block rule [F6] acts as $\mathcal R^{(r)}(E_{ab}\otimes B)=\delta_{ab}E_{00}\otimes B$; [F5] extends this to $\mathcal R^{(r)}(X)=E_{00}\otimes(X_{00}+X_{11})$. If $X$ is non-negative, each compression $X_{aa}$ is self-adjoint and satisfies $\langle X_{aa}y,y\rangle=\langle X(|a\rangle\otimes y),|a\rangle\otimes y\rangle\ge0$. The displayed output is self-adjoint and, on $z=|0\rangle\otimes u+|1\rangle\otimes v$, its quadratic form is $\langle(X_{00}+X_{11})u,u\rangle\ge0$. Thus every amplification is positive, proving complete positivity by [F6]; [F1] then makes $\mathcal R$ a channel. Direct expansion yields $({\rm id}\otimes\mathcal R)(P_{\Phi_2})=(I_2/2)\otimes E_{00}$ and $F_e(\mathcal R)=1/4$. For a unit vector $\psi=a|0\rangle+b|1\rangle$, its pure-state overlap is $|a|^2$, equal to $1$ at $|0\rangle$ and $0$ at $|1\rangle$, so $0$ is a lower bound and every lower bound is at most the attained value $0$. By [F7], its infimum is therefore $0$. This verifies that these functionals need not equal entanglement fidelity. [F1, F3, F5, F6, F7, step 1.1, step 1.2, algebra] ∎


## Finite support square roots and generalized inverses

[Open item](item-def-qec-prereq-support-spectral-calculus) · level 0


### Definition

Let $H$ be a finite-dimensional complex inner-product space, and let $A:H\to H$ be a linear endomorphism that is positive semidefinite: $A=A^*$ and $\langle Ax,x\rangle\geq 0$ for every $x\in H$. Here $A^*$ denotes its adjoint. Write $A=\sum_j\lambda_j P_j$ using an orthonormal eigenbasis, where $P_j$ is orthogonal projection onto the line spanned by its $j$th basis vector. Define the support $\operatorname{supp}A=(\ker A)^\perp$, the positive square root $A^{1/2}=\sum_j\sqrt{\lambda_j}P_j$, and the support inverse square root $A^{-1/2}=\sum_{\lambda_j>0}\lambda_j^{-1/2}P_j$. Thus $A^{-1/2}$ is zero on $\ker A$. The orthogonal projector onto $\operatorname{supp}A$ is denoted $P_{\operatorname{supp}A}$, and $A^{-1/2}AA^{-1/2}=P_{\operatorname{supp}A}$. All operators here are finite-dimensional; no unbounded inverse is asserted.

### Definition references

[math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)

[math:thm-adjoint-exists-and-is-unique-in-finite-dimension](https://alphabetamath.cc/item/thm-adjoint-exists-and-is-unique-in-finite-dimension)

[math:def-self-adjoint-and-normal-endomorphism](https://alphabetamath.cc/item/def-self-adjoint-and-normal-endomorphism)

[math:def-orthogonal-complement](https://alphabetamath.cc/item/def-orthogonal-complement)

[math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

[math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)

[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum)

[math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map)

[math:def-dimension](https://alphabetamath.cc/item/def-dimension)

[math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

[math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)

### Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space $H$ and a positive semidefinite endomorphism $A$ as in the definition.

[F1] A normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[F2] Every linear map between finite-dimensional complex inner-product spaces has a unique adjoint, characterized by $\langle Ax,y\rangle=\langle x,A^*y\rangle$. [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces) [math:thm-adjoint-exists-and-is-unique-in-finite-dimension](https://alphabetamath.cc/item/thm-adjoint-exists-and-is-unique-in-finite-dimension)

[F3] Self-adjoint means $A=A^*$, normal means $AA^*=A^*A$, and every self-adjoint endomorphism is normal. [math:def-self-adjoint-and-normal-endomorphism](https://alphabetamath.cc/item/def-self-adjoint-and-normal-endomorphism)

[F4] For a subspace $W\subseteq H$, $W^\perp$ consists of the vectors orthogonal to every vector of $W$. [math:def-orthogonal-complement](https://alphabetamath.cc/item/def-orthogonal-complement)

[F5] For a subspace $W$ of a finite-dimensional inner-product space, $P_Wx$ is the unique vector in $W$ for which $x-P_Wx\in W^\perp$. [math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

### Justification

**Proof technique:** direct.

1.1 By [F2], $A^*$ exists uniquely. Since $A=A^*$, [F3] makes $A$ normal, so [F1] supplies an orthonormal eigenbasis. For an eigenvector $v\ne0$ with eigenvalue $\lambda$, self-adjointness makes $\lambda$ real and positivity gives $\lambda\geq0$. The kernel is the span of the eigenvectors with eigenvalue zero, and its orthogonal complement is the span of those with positive eigenvalues. [F1, F2, F3, F4, given, algebra]

2.1 For each distinct eigenvalue $\lambda$, the orthogonal projection onto its eigenspace equals $\prod_{\mu\ne\lambda}(A-\mu I)/(\lambda-\mu)$, where $\mu$ ranges over the other distinct eigenvalues; the empty product is $I$. This follows by applying the polynomial to each vector in an orthonormal eigenbasis. Hence each eigenspace projection, and therefore both sums in the definition, is independent of the choice of eigenbasis. The zero-dimensional case has only the zero endomorphism and empty sums. [F5, step 1.1, algebra]

3.1 On an eigenvector with eigenvalue $\lambda$, the square of $A^{1/2}$ acts by $\lambda$, while $A^{-1/2}AA^{-1/2}$ acts by $1$ if $\lambda>0$ and by $0$ if $\lambda=0$. Consequently $(A^{1/2})^2=A$, $A^{1/2}$ is positive semidefinite, and the latter product is the orthogonal projector onto $(\ker A)^\perp$. This establishes the stated construction and identity, including when $A=0$. [F2, F3, F4, F5, step 1.1, step 2.1, algebra] ∎


## Complementary error records in a Kraus basis

[Open item](item-def-qec-prereq-complementary-error-record) · level 0


### Definition

Let $H$ and $K$ be nonzero finite-dimensional complex inner-product spaces. Let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel, meaning a completely positive, trace-preserving linear map, with a finite Kraus representation $\mathcal N(X)=\sum_a E_aXE_a^\dagger$. Here $\mathcal L(H)$ denotes the linear endomorphisms of $H$, and $E_a^\dagger$ is the adjoint of $E_a:H\to K$. Choose a nonempty finite label set for the family and an environment space $E$ with orthonormal basis $\{|a\rangle\}$ indexed by that set. Define $W:H\to K\otimes E$ by $W|\psi\rangle=\sum_a E_a|\psi\rangle\otimes|a\rangle$. The complementary error record associated with this representation is $\mathcal N^c(X)=\operatorname{Tr}_K(WXW^\dagger)$, where the partial trace contracts the first tensor factor. In the chosen label basis its $(a,b)$ entry is $\operatorname{Tr}(E_aXE_b^\dagger)$.

For an isometric code encoding $V:H_L\to H$ with nonzero finite-dimensional logical space and code subspace $C=\operatorname{im}V$, the record is **logical-state independent on the code** when $\mathcal N^c(\rho)$ is the same operator for every density operator $\rho$ on $H$ supported on $C$. A density operator is a positive semidefinite operator of trace one; supported on $C$ means $P\rho P=\rho$ for the orthogonal projector $P=VV^\dagger$. This condition concerns the entire record, including off-diagonal entries, and is stronger than merely requiring the diagonal entries to be independent of the code state.

### Facts & Assumptions

[F1] A finite Kraus representation is the stated finite sum of operator maps. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F2] A finite-dimensional quantum channel is linear, completely positive and trace-preserving on all input operators. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F3] The first-factor partial trace is given by summing the corresponding matrix entries over an orthonormal basis of that factor. [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

[F4] A complementary channel is obtained by tracing the output factor of a chosen isometric dilation. [math:def-it-quantum-channel-complement-and-coherent-information](https://alphabetamath.cc/item/def-it-quantum-channel-complement-and-coherent-information)

[F5] An isometric encoding has code subspace $\operatorname{im}V$ and code projector $VV^\dagger$. [math:def-qc-quantum-code-isometry-and-code-projector](https://alphabetamath.cc/item/def-qc-quantum-code-isometry-and-code-projector)

[F6] A density operator is positive semidefinite with trace one. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[F7] Ordered tensor products retain factor order and carry the factorwise product inner product, with orthonormal elementary product bases. [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[F8] For an operator $R$ on an ordered product $K\otimes E$ with ordered orthonormal product basis, the second-factor partial trace has entries $(\operatorname{Tr}_E R)_{i i'}=\sum_a R_{(i,a),(i',a)}$. [math:def-qc-partial-trace](https://alphabetamath.cc/item/def-qc-partial-trace)

[F9] A complex-linear map is completely positive when, for every integer $r\ge1$, its block amplification $[X_{ij}]\mapsto[\mathcal N(X_{ij})]$ preserves nonnegative operators. [math:def-qc-completely-positive-map](https://alphabetamath.cc/item/def-qc-completely-positive-map)

### Justification

Trace preservation and the Kraus formula give $\operatorname{Tr}(X\sum_a E_a^\dagger E_a)=\operatorname{Tr}(X)$ for every $X$. Taking matrix units for $X$ shows $\sum_a E_a^\dagger E_a=I_H$. The product inner product and orthonormality of the label basis give $\langle W\psi,W\varphi\rangle=\sum_a\langle E_a\psi,E_a\varphi\rangle=\langle\psi,\varphi\rangle$, hence $W^\dagger W=I_H$, so $W$ is an isometry. Expanding $WXW^\dagger$ and tracing over $E$ gives $\mathcal N(X)$; thus $W$ is a dilation of the given channel. Tracing instead over $K$ gives the displayed entries, so the defined record is the complementary channel for this chosen dilation. The choice of labels and basis is part of the representation.

The code-state condition is well-defined because the code projector specifies exactly which density operators are supported on $C$. Equality of full operators entails equality of their diagonal entries, while diagonal entries alone do not specify off-diagonal entries. For example, the two density matrices $\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ have the same diagonal and are different. These matrices occur as complementary records for a single channel on the full two-dimensional code: take $H=K=H_L=\mathbb C^2$, $V=I$, $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $E_0=I/\sqrt2$ and $E_1=Z/\sqrt2$. The map $\mathcal N(X)=(X+ZXZ)/2$ is completely positive, since each amplification is a sum of conjugations, and is trace-preserving, since $E_0^\dagger E_0+E_1^\dagger E_1=I$. The record formula gives $\mathcal N^c(\rho)=\frac12\begin{pmatrix}1&\operatorname{Tr}(\rho Z)\\\operatorname{Tr}(\rho Z)&1\end{pmatrix}$ for every density operator $\rho$. Its diagonal entries are both $1/2$ for every code state, whereas the inputs $|0\rangle\langle0|$ and $|1\rangle\langle1|$ yield the two distinct matrices above. Thus diagonal independence over all code states does not imply full-record independence.


## Passive subspace and subsystem protection interface

[Open item](item-def-qec-prereq-passive-subsystem-contract) · level 0


### Definition

Let $H_P$, $H_L$ and $H_G$ be nonzero finite-dimensional complex inner-product spaces, and let $V:H_L\otimes H_G\to H_P$ be an isometry. Write $\mathcal L(H)$ for the linear operators on $H$, and $\operatorname{Ad}_V(X)=VXV^*$. Let $\mathfrak N$ be a specified family of channels from $\mathcal L(H_P)$ to itself. The image of $V$ is the specified block; its first and second tensor factors are called the logical and gauge subsystems, respectively.

The logical subsystem is **noiseless for $\mathfrak N$** in this interface if, for every $\mathcal N\in\mathfrak N$, there is a channel $\Phi_{\mathcal N}:\mathcal L(H_G)\to\mathcal L(H_G)$ such that $\mathcal N\circ\operatorname{Ad}_V=\operatorname{Ad}_V\circ(\operatorname{id}_{\mathcal L(H_L)}\otimes\Phi_{\mathcal N})$ on all of $\mathcal L(H_L\otimes H_G)$. Thus the block is invariant in the sense that every encoded operator has output supported on the block, while the logical factor has identity action and the gauge factor may evolve.

When $\dim H_G=1$, this condition defines a **decoherence-free subspace** for the family: the induced action on operators of the encoded subspace is the identity. A separate, explicitly tracked-unitary convention permits a specified unitary $U_{\mathcal N}$ on $H_L$ for each $\mathcal N$ and replaces the identity factor by $\operatorname{Ad}_{U_{\mathcal N}}$; it is not the identity-action condition unless that induced conjugation is the identity. A change in a noise map, including one described as a symmetry perturbation, must satisfy the relevant displayed factorization to retain the corresponding property. Energy-level degeneracy alone is not part of this definition.

### Facts & Assumptions

[F1] The finite tensor product and its inner product are the ordered tensor construction of [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation).

[F2] A channel is a complex-linear, completely positive, trace-preserving map on the full finite-dimensional operator space, as in [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel).

[F3] Linear isometries preserve the induced norm, and a unitary operator is an invertible complex-linear isometry of a finite-dimensional inner-product space, as in [math:def-linear-isometry-and-orthogonal-or-unitary-operator](https://alphabetamath.cc/item/def-linear-isometry-and-orthogonal-or-unitary-operator).

[F4] The adjoint is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ with the inner product linear in the first argument, as in [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces); every linear map between finite-dimensional inner-product spaces has a unique such adjoint by [math:thm-adjoint-exists-and-is-unique-in-finite-dimension](https://alphabetamath.cc/item/thm-adjoint-exists-and-is-unique-in-finite-dimension).

[F5] Tensor products of linear maps are the unique linear extensions of their prescribed action on elementary tensors, as in [math:def-qc-tensor-map](https://alphabetamath.cc/item/def-qc-tensor-map). This applies both to operators on the factors and to linear maps on their finite-dimensional operator spaces.

[F6] For specified ordered orthonormal bases of finite-dimensional complex inner-product spaces, the tensors of the associated operator matrix units form a basis of the full operator space on the tensor product, by [math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis).

### Justification

The tensor construction in [F1] gives the domain of the isometry in [F3] and a product basis. The finite-dimensional adjoint existence in [F4] makes $V^*:H_P\to H_L\otimes H_G$ well-defined, so $X\mapsto VXV^*$ has the stated operator-space domain and codomain. On elementary operator tensors the expression $(\operatorname{id}\otimes\Phi_{\mathcal N})(A\otimes B)=A\otimes\Phi_{\mathcal N}(B)$ extends linearly and uniquely: [F5] constructs the tensor map on $\mathcal L(H_L)\otimes\mathcal L(H_G)$, and [F6] identifies that space with $\mathcal L(H_L\otimes H_G)$ by its product matrix-unit basis. Both sides of the defining equality are therefore linear maps with the same domain and codomain. For a one-dimensional gauge space every operator is a scalar multiple of its identity, and trace preservation in [F2] forces its channel to be the identity; the stated subspace specialization follows. The tracked-unitary version is a separately specified convention, with $\operatorname{Ad}_U(A)=UAU^*$ using the unitary in [F3] and its adjoint from [F4].

### Source notes

The source describes a noiseless factor through interaction operators that act on its cofactor. The definition above states the channel-level interface used here and does not assert that an arbitrary energy degeneracy supplies its factorization.


## Canonical Choi eigenvectors, Kraus rank and branch weights

[Open item](item-lem-qec-prereq-canonical-choi-weights) · level 1


### Statement

Let $H$ and $K$ be finite-dimensional complex inner-product spaces with $d=\dim H>0$, and fix an ordered orthonormal basis $(e_i)_{i=1}^d$ of $H$. Let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel: a completely positive, trace-preserving linear map. Its input-first, unnormalized Choi matrix is $J=\sum_{i,j}|e_i\rangle\langle e_j|\otimes\mathcal N(|e_i\rangle\langle e_j|)$. Write its positive-eigenvalue decomposition as $J=\sum_{k=1}^r\lambda_k|v_k\rangle\langle v_k|$, where $\lambda_k>0$ and the $v_k$ are orthonormal. Define $K_k:H\to K$ by $\sum_i e_i\otimes K_ke_i=\sqrt{\lambda_k}v_k$.

Then $\mathcal N(X)=\sum_{k=1}^r K_kXK_k^\dagger$, and $\operatorname{Tr}(K_k^\dagger K_l)=\lambda_k\delta_{kl}$. In particular, the weights $w_k=\operatorname{Tr}(K_k^\dagger K_k)$ equal $\lambda_k$, and the minimum number of operators in a Kraus representation of $\mathcal N$ is $r=\operatorname{rank}J$. The maps $X\mapsto K_kXK_k^\dagger$ form a finite instrument, whose branch probability on the maximally mixed input $I_H/d$ is $w_k/d$. Within a degenerate eigenspace the orthonormal eigenbasis may be rotated, so the individual operators are not unique; these mathematical branches do not specify a unique measured trajectory.

### Statement references

[def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[math:def-qc-choi-matrix](https://alphabetamath.cc/item/def-qc-choi-matrix)

[math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

[math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[math:lem-qc-tensor-product-basis-and-dimension](https://alphabetamath.cc/item/lem-qc-tensor-product-basis-and-dimension)

### Facts & Assumptions

**Given:** The spaces, basis, channel, Choi matrix and spectral vectors in the Statement.

**Goal:** Establish the Kraus representation, orthogonality, minimal number, and instrument weights stated above.

[F1] A finite-dimensional positive semidefinite operator has an orthonormal eigenbasis with nonnegative eigenvalues; its support is the span of the positive-eigenvalue vectors. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F2] The Choi matrix uses the fixed input basis and input-first tensor order displayed in the Statement, with the inner product linear in its first argument. [math:def-qc-choi-matrix](https://alphabetamath.cc/item/def-qc-choi-matrix)

[F3] For a finite-dimensional channel, the Choi matrix is positive semidefinite and a finite Kraus representation exists with $\sum_a A_a^\dagger A_a=I_H$. [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

[F4] For a nonzero finite-dimensional input space, a finite instrument is a family of completely positive maps indexed by a finite nonempty outcome set whose sum preserves trace; its outcome weight at a density operator $\rho$ is the trace of the corresponding output. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[F5] For finite-dimensional complex inner-product spaces with specified orthonormal bases, the elementary tensors of the basis vectors form an orthonormal basis of their tensor product, including when one factor is zero-dimensional. [math:lem-qc-tensor-product-basis-and-dimension](https://alphabetamath.cc/item/lem-qc-tensor-product-basis-and-dimension)

### Proof

1.1 By [F3], $J$ is positive semidefinite, and [F1] gives the stated decomposition with $r=\operatorname{rank}J$. Choose an orthonormal basis $(f_j)$ of $K$, available by applying [F1] to $I_K$. By [F5], each tensor vector has a unique expansion $\sum_{i,j}c_{ij}e_i\otimes f_j$, hence a unique expression $\sum_i e_i\otimes y_i$ with $y_i=\sum_jc_{ij}f_j$. Assigning $K_ke_i=y_i$ for the vector $\sqrt{\lambda_k}v_k$ then defines a unique linear map $K_k:H\to K$. For any map $A:H\to K$, write $|A\rangle\!\rangle=\sum_i e_i\otimes Ae_i$. Expanding [F2] for $X\mapsto AXA^\dagger$ gives its Choi matrix as $|A\rangle\!\rangle\langle\!\langle A|$. Thus the Choi matrix of $\Phi(X)=\sum_kK_kXK_k^\dagger$ is $J$. Equality of Choi matrices implies equality of maps: the $(i,j)$ input block is the image of $|e_i\rangle\langle e_j|$, and these matrix units form a basis of $\mathcal L(H)$. Hence $\Phi=\mathcal N$. [given, F1, F2, F3, F5, algebra]

2.1 With the first-argument-linear convention in [F2], the tensor inner product gives $\operatorname{Tr}(K_k^\dagger K_l)=\sum_i\langle K_le_i,K_ke_i\rangle=\langle\sqrt{\lambda_l}v_l,\sqrt{\lambda_k}v_k\rangle=\lambda_k\delta_{kl}$, since the $v_k$ are orthonormal. This proves the asserted weights. For any Kraus representation with $m$ operators $A_a$, the same expansion yields $J=\sum_{a=1}^m|A_a\rangle\!\rangle\langle\!\langle A_a|$; its range lies in the span of these $m$ vectors, so $r\leq m$. Step 1.1 supplies a representation with $r$ operators, proving minimality. [given, F2, step 1.1, algebra]

3.1 If $r=0$, step 1.1 would give $\mathcal N(|e_1\rangle\langle e_1|)=0$, contradicting trace preservation because $\operatorname{Tr}(|e_1\rangle\langle e_1|)=1$. Thus $r>0$, so $\{1,\ldots,r\}$ is a finite nonempty outcome set. Each branch $X\mapsto K_kXK_k^\dagger$ is completely positive: after adjoining any finite-dimensional identity map it sends a positive operator $Y$ to $(I\otimes K_k)Y(I\otimes K_k)^\dagger$, which is positive. Their sum is the trace-preserving channel $\mathcal N$, so [F4] makes them an instrument. Its branch weight at $I_H/d$ is $\operatorname{Tr}(K_kK_k^\dagger)/d=\operatorname{Tr}(K_k^\dagger K_k)/d=w_k/d$. An orthonormal change of basis within a repeated-eigenvalue eigenspace leaves its spectral projection unchanged but changes its individual vectors and reshaped operators. The instrument constructed from a chosen basis is therefore one possible decomposition, with no uniqueness claim about a measured trajectory. [given, F1, F4, step 1.1, step 2.1, algebra] ∎


## QEC matrix as an error-vector Gram operator

[Open item](item-lem-qec-prereq-qec-gram-factorization) · level 1


### Statement

Let $H_L,H_P,H_O$ be nonzero finite-dimensional complex coordinate spaces with their specified orthonormal bases, and let $V:H_L\to H_P$ be an isometry. Write $|\bar\mu\rangle=V|\mu\rangle$ for the images of the logical basis vectors. Let $E_l:H_P\to H_O$ be a finite nonempty family of linear maps, and let $H_E$ be a coordinate space with orthonormal basis $|l\rangle$ indexed by that family. Define the linear map $A:H_L\otimes H_E\to H_O$ by $A|\mu,l\rangle=E_l|\bar\mu\rangle$, where $|\mu,l\rangle=|\mu\rangle\otimes|l\rangle$. Then $M=A^\dagger A$ has entries $M_{[\mu,l],[\nu,k]}=\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$ and is positive semidefinite, meaning $x^\dagger Mx\geq 0$ for every $x\in H_L\otimes H_E$.

For $v_{\mu,l}=E_l|\bar\mu\rangle$, the library's linear-first Gram matrix satisfies $G_{[\mu,l],[\nu,k]}=M_{[\nu,k],[\mu,l]}$. The partial trace over the first, logical factor satisfies $(\operatorname{Tr}_L M)_{l,k}=\sum_\mu M_{[\mu,l],[\mu,k]}$, retaining the error indices.

### Facts & Assumptions

[F1] The specified coordinate conventions identify adjoints with conjugate transposes, define $\langle u|B|v\rangle=u^\dagger Bv$, and use the linear-first inner product $\langle x,y\rangle_{\rm root}=y^\dagger x$. Ordered tensor registers use the product basis in the displayed factor order. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] An isometric code is specified by a linear isometry $V$ from the logical space into the physical space. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel) A linear isometry is a linear map $V$ satisfying $\|Vx\|=\|x\|$ for every vector $x$, with the induced inner-product norms. [math:def-linear-isometry-and-orthogonal-or-unitary-operator](https://alphabetamath.cc/item/def-linear-isometry-and-orthogonal-or-unitary-operator)

[F3] For an ordered finite list of vectors, the library Gram matrix has entries $G_{ij}=\langle v_i,v_j\rangle_{\rm root}$. [math:def-gram-matrix-and-gram-determinant](https://alphabetamath.cc/item/def-gram-matrix-and-gram-determinant)

[F4] In ordered orthonormal product bases, the partial trace over the first factor has entries $(\operatorname{Tr}_L X)_{l,k}=\sum_\mu X_{[\mu,l],[\mu,k]}$. [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

### Proof

**Given:** The spaces, isometry, maps, product basis and $A$ in the statement.

**Goal:** Establish the entries and positivity of $M$, its orientation relative to $G$, and the displayed partial-trace formula.

1.1 The prescribed values of $A$ on the product basis determine a linear map. Using conjugate transpose and matrix multiplication, its $([\mu,l],[\nu,k])$ entry in $A^\dagger A$ is $(E_l|\bar\mu\rangle)^\dagger(E_k|\bar\nu\rangle)=\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$. For every $x$, $x^\dagger Mx=(Ax)^\dagger(Ax)=\sum_j |(Ax)_j|^2\geq 0$. Thus $M$ has the claimed entries and is positive semidefinite. [given, F1, F2, algebra]

2.1 By the linear-first convention, $G_{[\mu,l],[\nu,k]}=\langle v_{\mu,l},v_{\nu,k}\rangle_{\rm root}=v_{\nu,k}^\dagger v_{\mu,l}=M_{[\nu,k],[\mu,l]}$. Applying the first-factor partial-trace definition to $M$ gives $(\operatorname{Tr}_L M)_{l,k}=\sum_\mu M_{[\mu,l],[\mu,k]}$. These are the stated Gram orientation and contraction. [F1, F3, F4, step 1.1] ∎


## Support-normalized transpose recovery and completion

[Open item](item-thm-qec-prereq-transpose-support-completion) · level 1


### Statement

Let $H_P,H_O$ be finite-dimensional complex inner-product spaces, let $P$ be the orthogonal projector onto a nonzero code subspace of $H_P$, and let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel with finite Kraus representation $\mathcal N(X)=\sum_a E_aXE_a^\dagger$. Put $A=\mathcal N(P)$, let $S$ be the orthogonal projector onto $\operatorname{supp}A=(\ker A)^\perp$, and let $A^{-1/2}$ be the inverse square root on this support and zero on $\ker A$. Define $R_a=PE_a^\dagger A^{-1/2}$ and $\mathcal T_0(Y)=\sum_a R_aYR_a^\dagger$.

The map $\mathcal T_0$ is completely positive, has output supported on the code, and preserves trace for every $Y$ supported on $\operatorname{supp}A$, meaning $Y=SYS$. For any code state $\sigma$—a positive semidefinite operator of trace one with $P\sigma P=\sigma$—the map $\mathcal T(Y)=\mathcal T_0(Y)+\operatorname{tr}((I-S)Y)\sigma$ is a quantum channel with code-supported output. For every $X=PXP$, the output $\mathcal N(X)$ is supported on $\operatorname{supp}A$; consequently $\mathcal T(\mathcal N(X))=\mathcal T_0(\mathcal N(X))$. In particular, completion does not change any recovered code-state output or the value of any function of that output with all other arguments fixed. Explicitly, let $\rho$ be any code state and let $\tau$ be any density operator on $H_P$, meaning a positive semidefinite operator of trace one. With the root-fidelity convention $F(B,C)=\|\sqrt B\sqrt C\|_1$ for density operators $B,C$ on the same space, where $\|\cdot\|_1$ denotes the trace norm, one has $F(\tau,\mathcal T(\mathcal N(\rho)))=F(\tau,\mathcal T_0(\mathcal N(\rho)))$. The same equality holds for squared fidelity $F^2$.

### Facts & Assumptions

**Given:** The finite-dimensional spaces, nonzero code projector, channel, Kraus family and code state in the Statement.

**Goal:** Establish the support normalization, the completed channel, and equality on outputs of code-supported inputs.

[F1] A quantum channel is linear, completely positive and trace-preserving; a code-supported physical recovery has outputs $Z$ satisfying $PZP=Z$. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] For positive semidefinite $A$, the support inverse square root is zero on the kernel and satisfies $A^{-1/2}AA^{-1/2}=S$. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F3] The given Kraus representation means $\mathcal N(X)=\sum_a E_aXE_a^\dagger$ for every input operator. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F4] For compatible finite matrices, $\operatorname{tr}(BC)=\operatorname{tr}(CB)$, including rectangular products. [math:thm-trace-of-ab-equals-trace-of-ba](https://alphabetamath.cc/item/thm-trace-of-ab-equals-trace-of-ba)

[F5] For density operators $B,C$ on the same nonzero finite-dimensional complex inner-product space, root fidelity is $F(B,C)=\|\sqrt B\sqrt C\|_1$, where $\|\cdot\|_1$ is the trace norm; squared fidelity is $F(B,C)^2$. [math:def-qc-fidelity](https://alphabetamath.cc/item/def-qc-fidelity)

### Proof

**Proof technique:** direct.

**Given:** The finite-dimensional spaces, nonzero code projector, channel, Kraus family and code state in the Statement.

**Goal:** Establish the support normalization, the completed channel, and equality on outputs of code-supported inputs.

**Proof technique:** direct.

1.1 Each $E_aPE_a^\dagger$ is positive semidefinite, since its quadratic form at $y$ is the squared norm of $PE_a^\dagger y$. Thus $A=\sum_a E_aPE_a^\dagger$ is positive semidefinite. By [F2], $\sum_a R_a^\dagger R_a=A^{-1/2}(\sum_a E_aPE_a^\dagger)A^{-1/2}=S$. Each $R_a$ has range in the code, so $P\mathcal T_0(Y)P=\mathcal T_0(Y)$. Conjugation by any operator remains positive after tensoring with a finite ancilla, and finite sums preserve positivity; hence $\mathcal T_0$ is completely positive. By [F4], $\operatorname{tr}\mathcal T_0(Y)=\operatorname{tr}(SY)$, which equals $\operatorname{tr}Y$ when $Y=SYS$. [given, F2, F3, F4]

2.1 Write $Q=I-S$. Choose an orthonormal basis $(w_j)$ of the range of $Q$ and a spectral decomposition $\sigma=\sum_i p_i|u_i\rangle\langle u_i|$, where $p_i\geq0$, $\sum_i p_i=1$, and the vectors with nonzero weights lie in the code. The operators $C_{ij}=\sqrt{p_i}|u_i\rangle\langle w_j|$ satisfy $\sum_{i,j}C_{ij}YC_{ij}^\dagger=\operatorname{tr}(QY)\sigma$ and $\sum_{i,j}C_{ij}^\dagger C_{ij}=Q$. Therefore the completion term is completely positive and code-supported. Together with step 1.1, it makes $\mathcal T$ completely positive and code-supported; its trace is $\operatorname{tr}(SY)+\operatorname{tr}(QY)=\operatorname{tr}Y$. Thus $\mathcal T$ is a channel by [F1]. [given, F1, F2, F4, step 1.1]

3.1 If $y\in\ker A$, then $0=\langle Ay,y\rangle=\sum_a\|PE_a^\dagger y\|^2$. Every summand is nonnegative, so $PE_a^\dagger y=0$ for every $a$. Taking adjoints gives $QE_aP=0$ and $PE_a^\dagger Q=0$. Hence, for $X=PXP$, both $Q\mathcal N(X)=0$ and $\mathcal N(X)Q=0$; equivalently $\mathcal N(X)=S\mathcal N(X)S$. Its completion term therefore vanishes. [given, F2, F3, step 1.1, step 2.1]

4.1 For a code state $\rho$, the operator $Z=\mathcal T(\mathcal N(\rho))$ is positive semidefinite and has trace one because $\mathcal N$ and $\mathcal T$ are channels. By step 3.1 it equals $\mathcal T_0(\mathcal N(\rho))$, which is therefore also a density operator. For any density operator $\tau$ on $H_P$, both sides of the asserted root-fidelity identity are consequently defined by [F5] and equal $F(\tau,Z)$. Squaring gives the squared-fidelity identity. More generally, substitution of the equal recovered operators into any function defined at their common value, with all other arguments fixed, gives equal values. [given, F1, F5, step 2.1, step 3.1] ∎


## Haar-average versus entanglement fidelity

[Open item](item-thm-qec-prereq-haar-average-relation) · level 1


### Statement

Assume the Axiom of Choice. Let $d\geq 1$ be an integer, $H=\mathbb C^d$, and $\mathcal E:\mathcal L(H)\to\mathcal L(H)$ a quantum channel, meaning a complex-linear, completely positive, trace-preserving map. Let $U(d)=\{U\in\mathbb C^{d\times d}:U^\dagger U=I\}$, equipped with normalized Haar probability, and let $\psi=U|0\rangle$ for the first standard basis vector. Then

$$\int_{U(d)}\langle\psi|\mathcal E(|\psi\rangle\langle\psi|)|\psi\rangle\,dU=\frac{dF_e(\mathcal E)+1}{d+1}.$$

Here $F_e(\mathcal E)=\langle\Phi_d|({\rm id}\otimes\mathcal E)(|\Phi_d\rangle\langle\Phi_d|)|\Phi_d\rangle$, where $|\Phi_d\rangle=d^{-1/2}\sum_{i=0}^{d-1}|i\rangle\otimes|i\rangle$. Thus the integral is the average over the unitary-invariant distribution of pure-state projectors induced by $U\mapsto U|0\rangle\langle0|U^\dagger$.

### Statement references

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[math:cor-normalized-haar-probability-on-a-compact-group](https://alphabetamath.cc/item/cor-normalized-haar-probability-on-a-compact-group)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)

### Facts & Assumptions

[F1] The finite operator conventions define the standard basis, adjoints, outer products, and matrix brackets used here. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] The entanglement-fidelity definition supplies the displayed normalized vector and tensor-map overlap. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F3] A finite-dimensional quantum channel is complex-linear and preserves the trace of every operator. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F4] Under the Axiom of Choice, a compact Hausdorff group has a normalized left-invariant Haar probability measure. [math:cor-normalized-haar-probability-on-a-compact-group](https://alphabetamath.cc/item/cor-normalized-haar-probability-on-a-compact-group)

[F5] A closed and bounded subset of finite-dimensional real Euclidean space is compact. [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn)

[F6] A measurable complex function $h$ is integrable when $\int |h|\,d\mu<\infty$; its integral is the integral of its real part plus $i$ times the integral of its imaginary part. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[F7] The Borel sigma-algebra of a topological space is generated by its open sets. [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra)

[F8] For nonnegative measurable $g$, its integral is the supremum of the simple integrals of nonnegative simple minorants. For a simple representation $s=\sum_r c_r\mathbf1_{A_r}$ with disjoint measurable $A_r$ and $c_r\ge0$, the simple integral is $\sum_r c_r\mu(A_r)$. [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral) [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)

[F9] A measurable self-map $T$ preserves $\mu$ when $\mu(T^{-1}A)=\mu(A)$ for every measurable $A$. For such a map and an integrable real or complex function $h$, the function $h\circ T$ is integrable and $\int h\circ T\,d\mu=\int h\,d\mu$. [math:def-measure-preserving-transformation-and-system](https://alphabetamath.cc/item/def-measure-preserving-transformation-and-system) [math:thm-integrals-are-invariant-under-measure-preserving-maps](https://alphabetamath.cc/item/thm-integrals-are-invariant-under-measure-preserving-maps)

[F10] Integrable complex functions form a complex vector space, and their integral is complex-linear. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)

[F11] For a measurable map $r$ from a probability space $(\Omega,\mathcal F,\mu)$ into a measurable space $(Y,\Sigma)$, its law or induced distribution is the set function $\lambda_r(B)=\mu(r^{-1}(B))$ for $B\in\Sigma$. [math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)

[A1] Assume the Axiom of Choice in the choice-function form required for the Haar measure. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

**Given:** The dimension, channel, and Axiom of Choice in the statement.

**Goal:** Evaluate the unitary average as the stated expression in entanglement fidelity.

1.1 Regard complex matrices as $\mathbb R^{2d^2}$. The equations $U^\dagger U=I$ define a closed set, and each column has norm one, so the set is bounded. It is a group under matrix multiplication, with inverse $U^\dagger$; multiplication and inversion are continuous. It is therefore a compact Hausdorff group by [F5]. By [F4] and [A1] it has normalized left-invariant Haar probability. Write $\mu$ for this probability on the Borel sigma-algebra $\mathcal B(U(d))$, and write $dU=d\mu(U)$. [F1, F4, F5, F7, A1]

2.1 A continuous map between topological spaces is Borel measurable: the target sets whose inverse images are Borel form a sigma-algebra containing every open set, so they include the sigma-algebra in [F7]. Every integrand in the moment and fidelity calculations below is a finite sum of products of the coordinates of $U|0\rangle$ and their conjugates, with fixed coefficients. These functions and their moduli are continuous, and they are bounded since each coordinate has modulus at most one. For any such function $h$, choose a finite $C\ge0$ with $|h|\le C$. A nonnegative simple minorant $s=\sum_r c_r\mathbf1_{A_r}\le |h|$, after omitting empty fibers, has $c_r\le C$. Thus its simple integral satisfies $\sum_r c_r\mu(A_r)\le C\mu(U(d))=C$. Taking the supremum in [F8] gives $\int |h|\,d\mu\le C<\infty$, proving integrability by [F6]. Applied to $h=1$ this bounds its integral above by one, while the admissible simple minorant $s=1$ gives the reverse inequality, so $\int 1\,d\mu=1$. Consequently every finite expansion integrated below is justified by [F10]. [F1, F6, F7, F8, F10, step 1.1]

3.1 For fixed $V\in U(d)$, the left translation $T_V(U)=VU$ is a homeomorphism with inverse $T_{V^\dagger}$, hence is Borel measurable by step 2.1. For every Borel $A$, left invariance gives $\mu(T_V^{-1}A)=\mu(V^{-1}A)=\mu(A)$. Thus [F9] applies, giving $\int h(VU)\,d\mu(U)=\int h(U)\,d\mu(U)$ for each integrable $h$. In particular this applies to all functions in step 2.1 and all the phase, permutation and two-coordinate unitary substitutions below. [F1, F4, F9, step 1.1, step 2.1]

4.1 Let $S=\{x\in\mathbb C^d:x^\dagger x=1\}$ and $\mathcal P=\{xx^\dagger:x\in S\}$ carry the Borel sigma-algebras of their Euclidean subspace topologies. The maps $q:U(d)\to S$, $q(U)=U|0\rangle$, and $p:U(d)\to\mathcal P$, $p(U)=U|0\rangle\langle0|U^\dagger$, are continuous and hence measurable by step 2.1. For either map $r$ with target $Y$, define its law by $\lambda_r(B)=\mu(r^{-1}(B))$ as in [F11]. Inverse images preserve the empty set and disjoint countable unions, so $\lambda_r(\varnothing)=0$ and, for pairwise disjoint Borel $B_n\subseteq Y$, $\lambda_r(\bigcup_n B_n)=\sum_n\lambda_r(B_n)$ by countable additivity of $\mu$. Also $\lambda_r(Y)=\mu(U(d))=1$. Thus these laws are probabilities. For fixed $V\in U(d)$, let $a_V(x)=Vx$ on $S$ and $a_V(P)=VPV^\dagger$ on $\mathcal P$. Each $a_V$ is a homeomorphism and $r\circ T_V=a_V\circ r$. Therefore $\lambda_r(a_V^{-1}(B))=\mu(T_V^{-1}(r^{-1}(B)))=\lambda_r(B)$ by step 3.1. This proves unitary invariance of the vector law and conjugation invariance of the projector law. [F1, F4, F7, F11, step 1.1, step 2.1, step 3.1]

4.2 Write $z_i=\langle i|\psi\rangle$ and $M_{ij,kl}=\int z_i\overline{z_j}\,\overline{z_k}z_l\,dU$. Diagonal phase invariance forces $M_{ij,kl}=0$ unless the multiset $\{i,l\}$ equals $\{j,k\}$. Permutation invariance makes all $\int |z_i|^4$ equal to $t$ and all $\int |z_i|^2|z_j|^2$, for $i\ne j$, equal to $s$. For $d\ge2$, apply invariance under the unitary replacing the first two coordinates by $(z_0+z_1)/\sqrt2$ and $(z_0-z_1)/\sqrt2$. Expanding the fourth power and using phase invariance to discard unbalanced monomials gives $t=(2t+4s)/4$, so $t=2s$. Integrating $(\sum_i|z_i|^2)^2=1$ gives $dt+d(d-1)s=1$. Consequently $s=1/[d(d+1)]$ and $t=2/[d(d+1)]$. For $d=1$ the same resulting formula holds directly. Hence, for all indices, $M_{ij,kl}=(\delta_{ij}\delta_{kl}+\delta_{ik}\delta_{jl})/[d(d+1)]$. [F1, F10, step 2.1, step 3.1]

5.1 The definition of $\lambda_r$ and the simple-integral formula in [F8] give $\int_Y s\,d\lambda_r=\int_{U(d)}s\circ r\,d\mu$ for every nonnegative simple $s$ on $Y$, and for signed simple $s$ by [F6] and [F10]. For a bounded real Borel $g$ and any $\varepsilon>0$, partition a bounded interval containing its range into finitely many half-open intervals of width at most $\varepsilon$, with the final endpoint included, and choose the lower endpoint on each inverse image. This yields a simple $s$ with $s\le g\le s+\varepsilon$. The supremum definition in [F8] gives monotonicity for nonnegative functions; adding a common constant and using [F10] gives it for bounded real functions. The boundedness argument of step 2.1 applies on both probability spaces, so all these functions are integrable. Their two $g$ integrals lie between the common value of the two $s$ integrals and that value plus $\varepsilon$. Since $\varepsilon$ is arbitrary, $\int_Y g\,d\lambda_r=\int_{U(d)}g\circ r\,d\mu$. Applying this to the real and imaginary parts proves the same identity for bounded complex Borel $g$ by [F6]. In particular $g(P)=\operatorname{tr}(P\mathcal E(P))$ is bounded and continuous on $\mathcal P$: its expression is a finite sum of products of matrix entries, and every entry of a unit-vector projector has modulus at most one. For $P=p(U)=|\psi\rangle\langle\psi|$, finite matrix multiplication gives $g(P)=\langle\psi|\mathcal E(|\psi\rangle\langle\psi|)|\psi\rangle$. The Haar integral in the Statement is therefore precisely the average with respect to $\lambda_p$. [F1, F3, F6, F8, F10, step 2.1, step 4.1]

6.1 Put $E_{ij}=|i\rangle\langle j|$ and $\mathcal E(E_{ij})_{kl}=\langle k|\mathcal E(E_{ij})|l\rangle$. Expanding the projector and using complex linearity, the average is $\sum_{i,j,k,l}\mathcal E(E_{ij})_{kl}M_{ij,kl}=[\operatorname{tr}\mathcal E(I)+\sum_{i,j}\mathcal E(E_{ij})_{ij}]/[d(d+1)]$. Trace preservation gives $\operatorname{tr}\mathcal E(I)=d$. On the other hand, expanding the normalized maximally entangled projector in [F2] yields $F_e(\mathcal E)=d^{-2}\sum_{i,j}\mathcal E(E_{ij})_{ij}$. Substitution proves the claimed formula. [F1, F2, F3, F10, step 2.1, step 4.2] ∎



## Qubit coherence channels and fidelity functionals

[Open item](item-lem-qec-prereq-qubit-coherence-fidelities) · level 1


### Statement

Let $H=\mathbb C^2$ have the ordered orthonormal basis $|0\rangle,|1\rangle$. For $\lambda\in\mathbb C$ with $|\lambda|\leq1$, let the complex-linear map $\mathcal D_\lambda$ send a matrix $X=(x_{ij})$ to the matrix with diagonal entries $x_{00},x_{11}$ and off-diagonal entries $\lambda x_{01},\overline\lambda x_{10}$. Then $\mathcal D_\lambda$ is a quantum channel and its entanglement fidelity for the maximally mixed input is $F_e(\mathcal D_\lambda)=(1+\operatorname{Re}\lambda)/2$. For every unit vector $|\psi\rangle=a|0\rangle+b|1\rangle$, its pure-state infidelity $1-\langle\psi|\mathcal D_\lambda(|\psi\rangle\langle\psi|)|\psi\rangle$ is $2|a|^2|b|^2(1-\operatorname{Re}\lambda)$.

Composition satisfies $\mathcal D_\mu\circ\mathcal D_\lambda=\mathcal D_{\mu\lambda}$. For a finite instrument $(\mathcal I_j)_{j\in J}$ from $H$ to $H$, the flag here means its outcome label $j$, and discarding it means taking the nonselective map $\mathcal I_{\rm ns}(X):=\sum_{j\in J}\mathcal I_j(X)$. If its branches are $\mathcal I_j=p_j\mathcal D_{\lambda_j}$, with $p_j\geq0$, $\sum_jp_j=1$ and $|\lambda_j|\leq1$, then this map is the channel $\sum_jp_j\mathcal D_{\lambda_j}$; its entanglement fidelity and pure-state infidelity at any fixed $|\psi\rangle$ are the respective $p_j$-weighted averages of the preceding expressions. For $p_j>0$ the conditional output is $\mathcal D_{\lambda_j}(\rho)$; zero-weight branches contribute zero and have no assigned conditional state.

### Statement references

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

### Facts & Assumptions

[F1] The specified coordinates, bras, outer products and ordered tensor basis use the finite operator conventions. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] For a qubit channel, $F_e(\mathcal E)=\langle\Phi|({\rm id}\otimes\mathcal E)(|\Phi\rangle\langle\Phi|)|\Phi\rangle$, where $|\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F3] A quantum channel is a complex-linear, completely positive, trace-preserving map. Complete positivity means positivity after tensoring with the identity on every finite ancillary matrix space. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F4] An instrument's outcome weight is the trace of its branch output, and its conditional state is that output divided by the weight when positive; no conditional state is assigned at zero weight. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

### Proof

**Given:** The parameters, maps, vector and flagged branches in the statement.

**Goal:** Establish channel validity, the fidelity formulas, composition and branch averaging.

1.1 Put $r=|\lambda|$ and choose $z=\lambda/r$ if $r>0$, and $z=1$ if $r=0$. Let $U=\operatorname{diag}(1,\overline z)$ and $Z=\operatorname{diag}(1,-1)$. Direct multiplication gives $\mathcal D_\lambda(X)=((1+r)/2)UXU^\dagger+((1-r)/2)UZXZU^\dagger$. The coefficients are nonnegative and sum to one. After tensoring with any finite identity map, each summand sends a positive matrix to a positive matrix by conjugation; hence their sum is positive. Both conjugating matrices are unitary, so the trace is preserved. Thus $\mathcal D_\lambda$ is a quantum channel. [F1, F3, given, algebra]

1.2 The input projector has diagonal entries $|a|^2,|b|^2$ and $01$ entry $a\overline b$. Its output overlap with $\psi$ is $|a|^4+|b|^4+2|a|^2|b|^2\operatorname{Re}\lambda$. Since $|a|^2+|b|^2=1$, subtracting this from one gives the stated infidelity. Entrywise multiplication also gives $\mathcal D_\mu\circ\mathcal D_\lambda=\mathcal D_{\mu\lambda}$. [F1, given, algebra]

2.1 Expand $|\Phi\rangle\langle\Phi|$ as one half of the sum of $|jj\rangle\langle kk|$ over $j,k\in\{0,1\}$. The two diagonal terms contribute $1/4$ each to the overlap in [F2], while the two off-diagonal terms contribute $\lambda/4$ and $\overline\lambda/4$. Therefore $F_e(\mathcal D_\lambda)=(1+\operatorname{Re}\lambda)/2$. [F1, F2, step 1.1, algebra]

3.1 For each density operator $\rho$, trace preservation gives $\operatorname{tr}\mathcal I_j(\rho)=p_j$. The conditional-state rule therefore gives the stated branch output when $p_j>0$, and assigns none when $p_j=0$. By the definition in the Statement, discarding the outcome label gives $\mathcal I_{\rm ns}=\sum_j\mathcal I_j=\sum_jp_j\mathcal D_{\lambda_j}$. This sum is complex-linear and completely positive: after every finite amplification it is a sum of positive maps with nonnegative coefficients, by step 1.1. For every matrix $X$, its trace is $\sum_jp_j\operatorname{tr}X=\operatorname{tr}X$, so it is a channel by [F3]. Both the overlap defining entanglement fidelity and the pure-state output overlap are linear in that sum; because $\sum_jp_j=1$, the corresponding infidelity is also the weighted sum of branch infidelities. Substituting steps 2.1 and 1.2 proves the claimed averages. [F2, F3, F4, step 1.1, step 2.1, step 1.2, given, algebra] ∎


## Two orthogonal Pauli alternatives bound recovery fidelity

[Open item](item-lem-qec-prereq-qubit-pauli-recovery-ceiling) · level 1


### Statement

Let $H=\mathbb C^2$ with its standard ordered basis, and let $\mathcal R:\mathcal L(H)\to\mathcal L(H)$ be a quantum channel: a complex-linear, completely positive, trace-preserving map. Let $U$ be a unitary $2\times2$ matrix, so $U^\dagger U=UU^\dagger=I$, and put $Z=\operatorname{diag}(1,-1)$. For any matrix $V$ write $\operatorname{Ad}_V(X)=VXV^\dagger$. Then $F_e(\mathcal R\circ\operatorname{Ad}_U)+F_e(\mathcal R\circ\operatorname{Ad}_{ZU})\leq 1$, where both entanglement fidelities use the maximally mixed input $I/2$.

### Facts & Assumptions

**Given:** The space, channel $\mathcal R$, and matrices $U,Z$ in the Statement.

**Goal:** Prove the displayed sum of entanglement fidelities is at most one.

[F1] The finite operator conventions use the standard basis and conjugate-transpose adjoints. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] For a channel $\mathcal E$ on $H$, $F_e(\mathcal E)=\langle\Phi|({\rm id}\otimes\mathcal E)(|\Phi\rangle\langle\Phi|)|\Phi\rangle$, where $|\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F3] A quantum channel is completely positive and trace-preserving. Every finite-dimensional completely positive map has a finite Kraus representation $\mathcal R(X)=\sum_a K_aXK_a^\dagger$. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel) [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation) [math:thm-qc-kraus-choi-equivalence](https://alphabetamath.cc/item/thm-qc-kraus-choi-equivalence)

[F4] A finite Kraus sum is completely positive, and it is trace-preserving exactly when its Kraus operators satisfy $\sum_aK_a^\dagger K_a=I$. [math:thm-qc-kraus-map-completely-positive](https://alphabetamath.cc/item/thm-qc-kraus-map-completely-positive) [math:thm-qc-trace-preserving-kraus-normalization](https://alphabetamath.cc/item/thm-qc-trace-preserving-kraus-normalization)

### Proof

1.1 Since $Z^\dagger Z=I$, both $U$ and $ZU$ are unitary. By [F4], each one-operator sum $\operatorname{Ad}_V$ for $V\in\{U,ZU\}$ is a channel. By [F3], choose a finite Kraus family $(K_a)$ for $\mathcal R$; [F4] gives $\sum_a K_a^\dagger K_a=I$. Direct composition gives Kraus families $(K_aV)$ for $\mathcal R\circ\operatorname{Ad}_V$, and their normalization is $\sum_a V^\dagger K_a^\dagger K_aV=I$. Thus the compositions are channels by [F4]. [given, F3, F4, algebra]

2.1 For any matrix $A$, expansion in the basis in [F1] gives $\langle\Phi|(I\otimes A)|\Phi\rangle=\operatorname{tr}(A)/2$. Using the Kraus formula and [F2] therefore gives $F_e(\mathcal R\circ\operatorname{Ad}_V)=\frac14\sum_a|\operatorname{tr}(K_aV)|^2$ for $V\in\{U,ZU\}$. Put $B_a=UK_a$. Finite matrix-index expansion gives $\operatorname{tr}(K_aU)=\operatorname{tr}(B_a)$ and $\operatorname{tr}(K_aZU)=\operatorname{tr}(B_aZ)$. If the diagonal entries of $B_a$ are $b_{a,00},b_{a,11}$, then $|\operatorname{tr}(B_a)|^2+|\operatorname{tr}(B_aZ)|^2=|b_{a,00}+b_{a,11}|^2+|b_{a,00}-b_{a,11}|^2=2(|b_{a,00}|^2+|b_{a,11}|^2)\leq2\operatorname{tr}(B_a^\dagger B_a)$. [step 1.1, F1, F2, F3, algebra]

3.1 Since $U^\dagger U=I$, the normalization in step 1.1 gives $\sum_a\operatorname{tr}(B_a^\dagger B_a)=\operatorname{tr}(\sum_aK_a^\dagger K_a)=\operatorname{tr}(I)=2$. Summing the inequality in step 2.1 and multiplying by $1/4$ yields $F_e(\mathcal R\circ\operatorname{Ad}_U)+F_e(\mathcal R\circ\operatorname{Ad}_{ZU})\leq1$, as required. [given, step 1.1, step 2.1, F1, algebra] ∎


## Recovery optimization on orthogonal flagged branches

[Open item](item-lem-qec-prereq-orthogonal-flag-decoding) · level 1


### Statement

Let $H=\mathbb C^d$ with $d\geq1$, and let $K=\bigoplus_{j=1}^m K_j$ be a finite orthogonal direct sum of nonzero finite-dimensional complex inner-product spaces. Concretely, $K$ is the space of tuples $v=(v_1,\ldots,v_m)$ with $v_j\in K_j$, with coordinatewise vector operations and inner product $\langle v,w\rangle_K=\sum_{j=1}^m\langle v_j,w_j\rangle_{K_j}$, linear in the first argument. Write $\iota_j:K_j\to K$ for the map putting its input in coordinate $j$ and zero in every other coordinate, and $P_j=\iota_j\iota_j^*$ for the orthogonal projector onto its image; the star denotes the adjoint for these inner products. Let $p_j\geq0$, with $\sum_jp_j=1$, and let each $\mathcal N_j:\mathcal L(H)\to\mathcal L(K_j)$ be a quantum channel. Define $\mathcal N(X)=\sum_jp_j\iota_j\mathcal N_j(X)\iota_j^*$. Then, for entanglement fidelity at the maximally mixed input,

$$\max_{\mathcal R:\mathcal L(K)\to\mathcal L(H)\ \mathrm{channel}}F_e(\mathcal R\circ\mathcal N)=\sum_jp_j\max_{\mathcal R_j:\mathcal L(K_j)\to\mathcal L(H)\ \mathrm{channel}}F_e(\mathcal R_j\circ\mathcal N_j).$$

A decoder attaining the left side can be constructed by projecting onto the orthogonal blocks and applying a maximizing decoder for the corresponding block. The hypothesis that the weights are fixed independently of the input is part of this statement; input-dependent branch weights are not covered.

### Statement references

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[math:def-real-and-complex-inner-product-space](https://alphabetamath.cc/item/def-real-and-complex-inner-product-space)

[math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)

[math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)

[math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

### Facts & Assumptions

[F1] A quantum channel is a complex-linear completely positive trace-preserving map; a decoder is a channel with the indicated input and logical output. Complete positivity means positivity after tensoring with every finite-dimensional identity map. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] For $|\Phi_d\rangle=d^{-1/2}\sum_{a=0}^{d-1}|a\rangle\otimes|a\rangle$, entanglement fidelity is the overlap of $|\Phi_d\rangle$ with the output of $\operatorname{id}\otimes\mathcal E$ on $|\Phi_d\rangle\langle\Phi_d|$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F3] For a linear map $\mathcal T:\mathcal L(A)\to\mathcal L(B)$, its input-first Choi matrix is $J(\mathcal T)=\sum_{a,b}|a\rangle\langle b|\otimes\mathcal T(|a\rangle\langle b|)$ in an ordered orthonormal basis of $A$. Such a map is a channel exactly when $J(\mathcal T)$ is positive semidefinite and its partial trace over $B$ is $I_A$. [math:def-qc-choi-matrix](https://alphabetamath.cc/item/def-qc-choi-matrix) [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

[F4] A closed and bounded subset of finite-dimensional real Euclidean space is compact, and a continuous real-valued function on a nonempty compact metric space attains its maximum. [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn) [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric)

[F5] A complex inner product is linear in the first argument, conjugate symmetric, and positive definite: $\langle x,x\rangle\geq0$, with equality exactly when $x=0$. [math:def-real-and-complex-inner-product-space](https://alphabetamath.cc/item/def-real-and-complex-inner-product-space)

[F6] An adjoint $T^*$ of a linear map $T:A\to B$ satisfies $\langle Tx,y\rangle_B=\langle x,T^*y\rangle_A$ for all $x\in A,y\in B$. [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)

[F7] For compatible rectangular matrices, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$. [math:thm-trace-of-ab-equals-trace-of-ba](https://alphabetamath.cc/item/thm-trace-of-ab-equals-trace-of-ba)

[F8] Vectors are orthogonal when their inner product is zero, and two subspaces are orthogonal when every vector in one is orthogonal to every vector in the other. An orthonormal basis is an ordered basis whose vectors are pairwise orthogonal and each have induced norm one. [math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)

[F9] For a subspace $W$ of a finite-dimensional inner-product space $V$, the orthogonal projection sends each $v\in V$ to the unique $w\in W$ for which $v-w$ is orthogonal to every vector in $W$. When treated as an endomorphism of $V$, this map is followed by the inclusion $W\hookrightarrow V$. [math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

### Proof

**Given:** The finite spaces, fixed probabilities and channels in the statement.

**Goal:** Establish the displayed equality and construct a maximizing decoder.

1.1 The coordinatewise operations make the tuple space a complex vector space. The pairing in the Statement is linear in its first argument and conjugate symmetric by [F5]. Its value on $(v,v)$ is a finite sum of nonnegative terms, vanishing exactly when every $v_j=0$, so it is positive definite and hence an inner product. Extending a basis of each $K_j$ by zero in the other coordinates gives a finite basis of $K$: these vectors span coordinatewise, and a linear relation vanishes in each coordinate only when all coefficients vanish. Thus $K$ is a finite-dimensional complex inner-product space. [given, F5, construct]

1.2 Each branch supremum is attained. Indeed, in fixed bases, [F3] identifies branch decoders with positive semidefinite Choi matrices $J$ whose output partial trace is $I_{K_j}$. This set is nonempty: the replacement channel $Y\mapsto\operatorname{tr}(Y)I_H/d$ is completely positive and trace-preserving. The set is closed by its matrix inequalities and linear partial-trace equations. It is bounded because $\operatorname{tr}J=\dim K_j$, its diagonal entries are nonnegative, and positivity of each $2\times2$ principal submatrix gives $|J_{ab}|^2\leq J_{aa}J_{bb}$. The matrix coordinates form a finite-dimensional real Euclidean space, so [F4] gives compactness. The Choi formula determines a map by its values on matrix units, and the overlap in [F2] is a linear function of those values; hence the branch objective is continuous. By [F4] it attains a maximum. [F1, F2, F3, F4, F8]

2.1 Define the coordinate map $q_j:K\to K_j$ by $q_j(v)=v_j$. For $x\in K_j$ and $v\in K$, the pairing gives $\langle\iota_jx,v\rangle_K=\langle x,v_j\rangle_{K_j}$, so $q_j$ is the adjoint $\iota_j^*$ by [F6]; uniqueness follows from [F5], since a vector orthogonal to every vector, including itself, is zero. Also $\langle\iota_jx,\iota_jy\rangle_K=\langle x,y\rangle_{K_j}$, so each inclusion is an isometry. Coordinate evaluation yields $\iota_j^*\iota_j=I_{K_j}$ and $\iota_k^*\iota_j=0:K_j\to K_k$ when $k\ne j$. The map $P_j=\iota_jq_j$ retains exactly coordinate $j$; it is the identity on $\operatorname{im}\iota_j$ and zero on the other coordinate subspaces, which are orthogonal to that image by the summed pairing. For every $v\in K$, the vector $P_jv$ lies in $\operatorname{im}\iota_j$ and the residual $v-P_jv$ has zero coordinate $j$, so it is orthogonal to every vector in that image by [F8]. Thus [F9], viewed as an endomorphism of $K$, identifies $P_j$ as the orthogonal projector onto $\operatorname{im}\iota_j$, and $\sum_jP_j=I_K$ because the sum restores every coordinate of every tuple. [given, F5, F6, F8, F9, step 1.1, algebra]

3.1 For any decoder $\mathcal R$ on $K$, define $\mathcal R_j(Y)=\mathcal R(\iota_jY\iota_j^*)$. Conjugation by $\iota_j$ is completely positive, since every finite amplification is conjugation by an inclusion, and it preserves trace because $\iota_j^*\iota_j=I_{K_j}$. Composition with $\mathcal R$ therefore makes each $\mathcal R_j$ a channel. By linearity of the channel action and of the overlap in [F2], $F_e(\mathcal R\mathcal N)=\sum_jp_jF_e(\mathcal R_j\mathcal N_j)$. Thus every left-side value is at most the sum of the branchwise suprema. [given, F1, F2, F7, step 2.1]

4.1 Choose a maximizing channel $\mathcal R_j$ for each of the finitely many branches and define $\mathcal R(Y)=\sum_j\mathcal R_j(\iota_j^*Y\iota_j)$. Every compression is completely positive, and a finite sum of completely positive maps is completely positive. Also $\operatorname{tr}\mathcal R(Y)=\sum_j\operatorname{tr}(\iota_j^*Y\iota_j)=\operatorname{tr}Y$, since $\sum_jP_j=I_K$; hence $\mathcal R$ is a decoder. The coordinate identities in step 2.1 give $\iota_j^*\iota_j=I_{K_j}$ and $\iota_k^*\iota_j=0$ for $k\ne j$, so $\mathcal R(\iota_jY\iota_j^*)=\mathcal R_j(Y)$ for every $Y\in\mathcal L(K_j)$. The identity in step 3.1 therefore gives the sum of the branch maxima. This achieves the upper bound from step 3.1, proving the equality and the asserted construction. [given, F1, F7, step 2.1, step 3.1, step 1.2] ∎


## Dimensional boundary of a rank-one KL obstruction

[Open item](item-lem-qec-prereq-rank-one-kl-dimension) · level 1


### Statement

Let $H_L,H_P,H_O$ be finite-dimensional complex inner-product spaces, with inner products linear in the first argument, and let $V:H_L\to H_P$ be an isometry. Write $P=VV^*$ for the orthogonal projector onto the code $V(H_L)$, and suppose $\dim H_L\geq 2$. Let a channel $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be exactly correctable on this code and have a finite Kraus representation containing the nonzero operator $E:H_P\to H_O$ given by $Ex=\langle x,s\rangle f$ for vectors $s\in H_P$ and $f\in H_O$. Then $Ps=0$.

The dimension hypothesis is essential: in dimension one, exact correctability and the same rank-one form need not imply $Ps=0$.

### Facts & Assumptions

[F1] The code projector is $P=VV^*$, and exact correctability means that a decoded recovery channel composed with the noise and encoding is the identity on the logical operator space. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] A finite Kraus representation has the form $\mathcal N(X)=\sum_a E_aXE_a^*$ for every input operator $X$. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F3] The adjoint is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$. [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)

[F4] Exact correction of a finite-dimensional isometric code for a channel with finite Kraus operators $E_a$ implies $PE_a^*E_bP=C_{ab}P$ for scalars $C_{ab}$. [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)

### Proof

**Given:** The finite-dimensional isometric code, its exact recovery, and a finite Kraus family containing the stated nonzero $E$.

**Goal:** Prove $Ps=0$ and exhibit the stated one-dimensional boundary.

1.1 By [F4], applied to the index of $E$ twice, $PE^*EP=cP$ for a scalar $c$. By [F3] and the displayed formula for $E$, for every $x\in H_P$ one has $PE^*EPx=\|f\|^2\langle x,Ps\rangle Ps$. Thus the image of $PE^*EP$ lies in the span of $Ps$, which has dimension at most one. [given, F3, F4, algebra]

2.1 The image of $P$ is the code and has dimension at least two, so $cP$ cannot have image of dimension at most one unless $c=0$. Hence $PE^*EP=0$. Evaluating its quadratic form at $s$ gives $0=\|f\|^2\|Ps\|^4$. Since $E$ is nonzero, $f\ne 0$, and therefore $Ps=0$. [given, step 1.1, algebra]

3.1 For the boundary, take all three spaces to be $\mathbb C$, let $V=P=I$, and let $\mathcal N$ be the identity channel with its single Kraus operator $E=I$. With $s=f=1$, the stated rank-one formula holds, the identity channel is its own decoder, and $Ps=1\ne 0$. This establishes the claimed one-dimensional exception. [F1, F2, construct, algebra] ∎


## Syndrome flags and logical-state-independent environmental records

[Open item](item-def-qec-prereq-syndrome-and-logical-record) · level 1


### Definition

Let $V:H_L\to H_P$ be a finite-dimensional isometric encoding and let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel, as in [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel). A density operator is a positive semidefinite operator of trace one. Fix a finite Kraus representation of $\mathcal N$ and its associated complementary channel $\mathcal N^c$ as in [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record). The **logical environmental record** of a logical density operator $\rho$ is $\mathcal N^c(V\rho V^\dagger)$. It is **logical-state independent** when there is one density operator $\sigma$ such that $\mathcal N^c(V\rho V^\dagger)=\sigma$ for every logical density operator $\rho$.

A **syndrome instrument on the record** is a finite instrument $\{\mathcal I_a\}_{a\in\Omega}$ whose input is the environment of this chosen complementary channel. A syndrome flag is its classical outcome label $a$, with probability $p_a(\rho)=\operatorname{tr}\mathcal I_a(\mathcal N^c(V\rho V^\dagger))$. The syndrome distribution is logical-state independent when every $p_a(\rho)$ is constant over logical density operators. The instrument may retain a quantum output; for $p_a(\rho)>0$, its conditional state is $\mathcal I_a(\mathcal N^c(V\rho V^\dagger))/p_a(\rho)$, and no conditional state is assigned when the probability is zero, as in [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state).

An **erasure flag** is an explicitly specified, distinguishable outcome indicating that a designated data branch has been erased. In the finite-dimensional erasure channel of [math:def-it-qudit-erasure-channel](https://alphabetamath.cc/item/def-it-qudit-erasure-channel), the output space is $H_L\oplus\mathbb C e$, with $e$ a unit vector orthogonal to the data summand; on a density operator the output is $(1-\epsilon)J\rho J^\dagger+\epsilon|e\rangle\langle e|$, where $J$ includes the data summand and $0\leq\epsilon\leq1$. The orthogonal flag occurs with probability $\epsilon$, while the unflagged branch retains $\rho$. A flag alone does not specify either the branch probability or the retained logical channel.

### Justification

The complementary-record supplier constructs a channel for the chosen finite Kraus representation, so its output on each encoded density operator is a density operator. Equality to one fixed $\sigma$ is therefore a well-defined condition on the full environmental operator. The instrument supplier defines the outcome probabilities and conditional states, including the zero-probability convention. If the full record is independent of $\rho$, applying each fixed instrument map and taking its trace makes the syndrome distribution independent of $\rho$ as well.

The converse need not hold. Take a two-dimensional logical space and identity encoding, and the channel with Kraus operators $E_0=|0\rangle\langle0|$ and $E_1=|0\rangle\langle1|$. Its chosen dilation sends $|\psi\rangle$ to $|0\rangle\otimes|\psi\rangle$, so its full environmental record is $\rho$. Use the one-outcome instrument whose sole map is the identity on that environment. Its only outcome has probability one for every input, but its retained conditional state is $\rho$, which varies with the logical state. Thus an input-independent syndrome distribution does not imply an input-independent full record.

For the erasure channel, orthogonality of the two output summands makes the flag distinguishable from the data branch. Their traces on a density operator are respectively $\epsilon$ and $1-\epsilon$; when the latter is nonzero, normalizing that branch gives $J\rho J^\dagger$. These statements use the specified erasure-channel formula and do not assert that an arbitrary flagged process has that formula.


## Kraus trace formula for maximally mixed entanglement fidelity

[Open item](item-lem-author-9fe623b43725-kraus-fidelity) · level 1


### Statement

Let $H=\mathbb C^d$, $d\ge1$, and let $\mathcal E(X)=\sum_a K_aXK_a^\dagger$ be a channel on $H$. Then $F_e(\mathcal E)=d^{-2}\sum_a|\operatorname{tr}K_a|^2$.

### Statement references

[math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

### Facts & Assumptions

**Given:** The spaces, maps and operators in the Statement.

**Goal:** Prove the asserted identities and conclusions.

[F1] Entanglement fidelity is the overlap with the normalized vector $\Phi_d=d^{-1/2}\sum_j|j\rangle\otimes|j\rangle$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F2] A Kraus representation expresses the channel as a finite sum of conjugations. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F3] The trace of an endomorphism is the trace of its matrix in any ordered basis, hence the sum of its diagonal entries. [math:def-trace-of-an-endomorphism](https://alphabetamath.cc/item/def-trace-of-an-endomorphism)

[F4] The tensor map $I\otimes K$ is the unique linear map with $(I\otimes K)(u\otimes v)=u\otimes Kv$. [math:def-qc-tensor-map](https://alphabetamath.cc/item/def-qc-tensor-map)

### Proof

**Proof technique:** direct.

1.1 For any operator $K$ on $H$, expansion in the standard basis gives $\langle\Phi_d|(I\otimes K)|\Phi_d\rangle=d^{-1}\sum_j\langle j|K|j\rangle=d^{-1}\operatorname{tr}K$. [given, F1, F3, F4]

2.1 Apply the Kraus expansion to the second tensor factor of $|\Phi_d\rangle\langle\Phi_d|$. Each summand contributes the squared modulus of the overlap in step 1.1. Summing proves the stated trace formula. [F1, F2, F4, step 1.1] ∎


## Independent transpose Gram fidelity formula

[Open item](item-thm-qec-prereq-transpose-gram-fidelity) · level 2


### Statement

Let $H_L=\mathbb C^d$ with $d\geq 1$, and let $H_P,H_O$ be nonzero finite-dimensional complex coordinate spaces. Let $V:H_L\to H_P$ be an isometry, $P=VV^\dagger$, and let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel with finite Kraus representation $\mathcal N(X)=\sum_l E_lXE_l^\dagger$. Let $H_E$ have an orthonormal basis indexed by the Kraus operators, and define $A:H_L\otimes H_E\to H_O$ by $A|\mu,l\rangle=E_lV|\mu\rangle$. Put $M=A^\dagger A$ and $Q=\mathcal N(P)$. Let $Q^{-1/2}$ be the inverse square root on the support of $Q$, extended by zero on its kernel, and let $\mathcal T$ be the support-completed transpose recovery with uncompleted Kraus operators $PE_a^\dagger Q^{-1/2}$. Decode its code-supported output by $V^\dagger$ and call the resulting logical channel $\mathcal E$.

Then the entanglement fidelity of $\mathcal E$ at the maximally mixed logical input is $F_e(\mathcal E)=d^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$. Here $\operatorname{Tr}_L$ traces the first, logical factor, and $\|B\|_F^2=\sum_{a,l}|B_{a,l}|^2$ in the specified error basis. The formula includes singular $M$ and $Q$.

### Statement references

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[lem-qec-prereq-qec-gram-factorization](item-lem-qec-prereq-qec-gram-factorization)

[thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

[math:thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison](https://alphabetamath.cc/item/thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison)

### Facts & Assumptions

[F1] The coordinate conventions use conjugate-transpose adjoints and ordered product bases. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] The isometric encoding, code projector and decoding of a code-supported recovery give a logical channel. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F3] Entanglement fidelity is the overlap of the maximally entangled vector $|\Phi_d\rangle=d^{-1/2}\sum_\mu|\mu,\mu\rangle$ with its image under the identity on a reference tensor the logical channel. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F4] A positive semidefinite finite operator has an orthonormal eigenbasis, its positive square root acts by the square roots of its eigenvalues, and its support inverse square root acts by reciprocal square roots on positive eigenvalues and zero on the kernel. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F5] The error-vector map has positive semidefinite Gram operator $M=A^\dagger A$, with entries $M_{[\mu,a],[\nu,l]}=\langle\mu|V^\dagger E_a^\dagger E_lV|\nu\rangle$. [lem-qec-prereq-qec-gram-factorization](item-lem-qec-prereq-qec-gram-factorization)

[F6] The completed transpose recovery is a channel with code-supported output, and its completion has no effect on noise outputs of code-supported operators. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F7] A Kraus representation acts by summing conjugations by its operators. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F8] First-factor partial trace has entries $(\operatorname{Tr}_L X)_{a,l}=\sum_\mu X_{[\mu,a],[\mu,l]}$. [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

[F9] The squared Frobenius norm of a finite matrix is the sum of the squared moduli of its entries. [math:thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison](https://alphabetamath.cc/item/thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison)

### Proof

**Given:** The finite spaces, isometry, Kraus operators, Gram operator and support-completed recovery in the statement.

**Goal:** Compute the entanglement fidelity of the decoded recovered channel as the stated squared Frobenius norm.

1.1 In the product basis, $AA^\dagger=\sum_l E_lVV^\dagger E_l^\dagger=Q$. Choose an orthonormal eigenbasis $(x_j)$ of $M$, with eigenvalues $\lambda_j\geq0$. If $\lambda_j=0$, then $\|Ax_j\|^2=\langle Mx_j,x_j\rangle=0$, so $Ax_j=0$. If $\lambda_j>0$, then $QAx_j=A Mx_j=\lambda_j Ax_j$, whence $Q^{-1/2}Ax_j=\lambda_j^{-1/2}Ax_j$. Thus $A^\dagger Q^{-1/2}Ax_j=\sqrt{\lambda_j}x_j$ for every $j$, including zero eigenvalues. Consequently $A^\dagger Q^{-1/2}A=\sqrt M$. [given, F1, F4, F5, algebra]

2.1 By the support-completion result, the decoded channel agrees on every logical operator with the Kraus sum whose operators are $B_{a,l}=V^\dagger E_a^\dagger Q^{-1/2}E_lV$. The isometry identity $V^\dagger P=V^\dagger$ gives this expression after decoding. For each pair $a,l$, step 1.1 and the definition of $A$ give $(\sqrt M)_{[\mu,a],[\nu,l]}=\langle\mu|B_{a,l}|\nu\rangle$. Therefore $\operatorname{tr}B_{a,l}=\sum_\mu(\sqrt M)_{[\mu,a],[\mu,l]}=(\operatorname{Tr}_L\sqrt M)_{a,l}$. [given, F1, F2, F6, F7, F8, step 1.1]

3.1 Applying the Kraus sum to the second half of $|\Phi_d\rangle\langle\Phi_d|$ gives $F_e(\mathcal E)=\sum_{a,l}|\langle\Phi_d|(I\otimes B_{a,l})|\Phi_d\rangle|^2$. Expanding the normalized matching-basis vector gives $\langle\Phi_d|(I\otimes B_{a,l})|\Phi_d\rangle=d^{-1}\operatorname{tr}B_{a,l}$. Substitution from step 2.1 and the Frobenius norm formula yield $F_e(\mathcal E)=d^{-2}\sum_{a,l}|(\operatorname{Tr}_L\sqrt M)_{a,l}|^2=d^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$. The zero-eigenvalue case was included in step 1.1, so no invertibility assumption is needed. [F3, F7, F9, step 1.1, step 2.1, algebra] ∎


## Logical Kraus operators of the completed transpose decoder

[Open item](item-lem-author-9fe623b43725-logical-transpose) · level 2


### Statement

Let $d\ge1$ be an integer, let $H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, and let $V:\mathbb C^d\to H_P$ be a linear isometry. Set $P=VV^\dagger$. Let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel with finite Kraus representation $\mathcal N(X)=\sum_bE_bXE_b^\dagger$, where $E_b:H_P\to H_O$. Here $\mathcal L(H)$ denotes the complex-linear endomorphisms of $H$.

Set $A=\mathcal N(P)$ and let $S$ be the orthogonal projector onto $\operatorname{supp}A=(\ker A)^\perp$. The operator $A^{-1/2}$ is the inverse square root on this support and zero on $\ker A$. For any code state $\sigma$, meaning $\sigma\ge0$, $\operatorname{tr}\sigma=1$ and $P\sigma P=\sigma$, define $R_a=PE_a^\dagger A^{-1/2}$ and the completed transpose recovery $\mathcal T(Y)=\sum_aR_aYR_a^\dagger+\operatorname{tr}((I_{H_O}-S)Y)\sigma$.

The logical decoder $\mathcal D:\mathcal L(H_O)\to\mathcal L(\mathbb C^d)$ given by $\mathcal D(Y)=V^\dagger\mathcal T(Y)V$ is completely positive and trace-preserving (CPTP). On encoded noisy inputs its composition has Kraus operators $K_{ab}=V^\dagger E_a^\dagger A^{-1/2}E_bV$, so $\mathcal D\mathcal N(VXV^\dagger)=\sum_{a,b}K_{ab}XK_{ab}^\dagger$ for every $X\in\mathcal L(\mathbb C^d)$.

### Statement references

[thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

### Facts & Assumptions

**Given:** The spaces, maps and operators in the Statement.

**Goal:** Prove the asserted identities and conclusions.

[F1] The completed transpose map is CPTP, code-supported, and agrees with its support-normalized part on every noisy code-supported operator. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F2] An isometric encoding is $X\mapsto VXV^\dagger$, with $V^\dagger V=I$ and $VV^\dagger=P$. Compressing any code-supported quantum channel $\mathcal T$ by $V^\dagger(\cdot)V$ gives a CPTP logical decoder, as justified by ancilla conjugation and composition. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F3] A finite Kraus representation expresses a complex-linear map as a finite sum of conjugations, with the identity valid for every input operator. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

### Proof

**Given:** The spaces, maps and operators in the Statement.

**Goal:** Prove the asserted identities and conclusions.

**Proof technique:** direct.

1.1 Compression $Z\mapsto V^\dagger ZV$ is completely positive. Every output $Z$ of $\mathcal T$ satisfies $PZP=Z$, so $\operatorname{tr}(V^\dagger ZV)=\operatorname{tr}(PZ)=\operatorname{tr}Z$; the trace equality follows by expanding both traces in orthonormal bases adapted to the code. Thus $\mathcal D$ is trace preserving and completely positive. [given, F1, F2]

2.1 For $VXV^\dagger=P(VXV^\dagger)P$, the completion term vanishes after the noise. Substitute $R_a=PE_a^\dagger A^{-1/2}$ into the composition, and use $V^\dagger P=V^\dagger$ and $PV=V$. This gives exactly the displayed $K_{ab}$ and channel formula. [F1, F2, F3, step 1.1] ∎


## Completion independence with an entangled reference

[Open item](item-lem-author-9fe623b43725-reference-completion) · level 2


### Statement

Under the code and noise hypotheses of support-normalized transpose recovery and completion, use its completed map $\mathcal T$ and uncompleted map $\mathcal T_0$, and let $V:\mathbb C^d\to H_P$ be an isometry onto the nonzero code. For every finite-dimensional complex inner-product reference space $K$ and every operator $W\in\mathcal L(K\otimes\mathbb C^d)$, one has

$$(\operatorname{id}_K\otimes(\mathcal T\mathcal N\operatorname{Ad}_V))(W)=(\operatorname{id}_K\otimes(\mathcal T_0\mathcal N\operatorname{Ad}_V))(W).$$

Here $\mathcal L(H)$ denotes the complex-linear endomorphisms of $H$, $\operatorname{Ad}_V(X)=VXV^\dagger$, composition is read from right to left, and $\operatorname{id}_K\otimes\Phi$ is the linear amplification on operator spaces with the reference factor first, characterized by $A\otimes B\mapsto A\otimes\Phi(B)$. For $K=0$ it is the unique map between zero operator spaces.

### Statement references

[thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis)

[math:lem-qc-finite-ancilla-amplification-is-block-map](https://alphabetamath.cc/item/lem-qc-finite-ancilla-amplification-is-block-map)

### Facts & Assumptions

**Given:** The finite-dimensional spaces, code, noise, recovery maps and encoding in the Statement.

**Goal:** Prove equality of the reference-first amplifications on every operator $W$.

[F1] The completed and uncompleted transpose maps agree after noise on every code-supported operator $X=PXP$, not just on states. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F2] The encoding is $\operatorname{Ad}_V(X)=VXV^\dagger$, with $V^\dagger V=I$ and code projector $P=VV^\dagger$. The channel and recovery maps are complex-linear. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel) [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F3] For finite-dimensional complex inner-product spaces with ordered orthonormal bases, the products of their operator matrix units form a basis of the full endomorphism space of their tensor product, including empty dimensions. [math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis)

[F4] Ordered tensor registers have their ordered product bases and product inner products; exchanging two factors is the linear map exchanging their product basis vectors, with inverse the reverse exchange. A zero-dimensional factor gives the zero tensor space. [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[F5] For a complex-linear map $\Phi:\mathcal L(H)\to\mathcal L(G)$ and $R=\mathbb C^r$, $r\ge1$, the ancilla-last block map $\Phi^{(r)}:\mathcal L(H\otimes R)\to\mathcal L(G\otimes R)$ is well-defined and linear, and sends the block family $[X_{ij}]$ to $[\Phi(X_{ij})]$. [math:lem-qc-finite-ancilla-amplification-is-block-map](https://alphabetamath.cc/item/lem-qc-finite-ancilla-amplification-is-block-map)

[F6] Every finite-dimensional complex inner-product space admits an orthonormal basis, with the empty basis in dimension zero. [math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases](https://alphabetamath.cc/item/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases)

### Proof

**Given:** The spaces, maps and operators in the Statement, and the conventions in [F1]–[F6].

**Goal:** Establish the well-defined reference-first product action and the asserted equality on all $W$.

**Proof technique:** direct.

1.1 For every $X\in\mathcal L(\mathbb C^d)$, $P(VXV^\dagger)P=VXV^\dagger$, since $PV=V$ and $V^\dagger P=V^\dagger$ follow from $P=VV^\dagger$ and $V^\dagger V=I$. Thus [F1] gives $(\mathcal T\mathcal N\operatorname{Ad}_V)(X)=(\mathcal T_0\mathcal N\operatorname{Ad}_V)(X)$. Both maps are complex-linear. [F1, F2, algebra]

1.2 If $K=0$, the input and output tensor spaces, and hence their endomorphism spaces, are zero, so their unique linear maps coincide. Otherwise put $r=\dim K\ge1$, choose an ordered orthonormal basis $(k_i)_{i<r}$ of $K$, and let $(e_i)_{i<r}$ be the standard basis of $R=\mathbb C^r$. For each of the spaces $H=\mathbb C^d$ and $G=H_P$, choose an ordered orthonormal basis as well. [F4, F6, choose]

2.1 For a complex-linear $\Phi:\mathcal L(H)\to\mathcal L(G)$, define $J_H:K\otimes H\to H\otimes R$ by $J_H(k_i\otimes x)=x\otimes e_i$, and define $J_G$ in the same way. These maps send product bases bijectively to product bases and preserve the product inner products; their inverses send $x\otimes e_i$ to $k_i\otimes x$. The block-map supplier therefore defines a well-defined linear map $\Psi_\Phi(W)=J_G^{-1}\Phi^{(r)}(J_HWJ_H^{-1})J_G$ on the full operator space. [F4, F5, step 1.2, construct]

3.1 Write $E_{uv}k_i=\delta_{vi}k_u$ for the reference matrix units. For any $B\in\mathcal L(H)$, direct evaluation on $x\otimes e_i$ shows that $J_H(E_{uv}\otimes B)J_H^{-1}$ has block $B$ at $(u,v)$ and zero at every other block. By [F5], its image has block $\Phi(B)$ at $(u,v)$ and all other blocks zero. Thus $\Psi_\Phi(E_{uv}\otimes B)=E_{uv}\otimes\Phi(B)$. Expanding an arbitrary reference operator $A$ in its matrix entries gives $\Psi_\Phi(A\otimes B)=A\otimes\Phi(B)$. By [F3], this product action uniquely determines a linear map on the full operator space. Consequently the construction is independent of the chosen bases and is precisely the reference-first amplification $\operatorname{id}_K\otimes\Phi$. [F3, F5, step 2.1, algebra]

4.1 Expand $W$ in the basis $E_{uv}\otimes L_{jk}$ from [F3], where $L_{jk}$ are the logical operator matrix units. By step 1.1 the two recovered maps agree on every $L_{jk}$; by step 3.1 their reference-first amplifications agree on every $E_{uv}\otimes L_{jk}$. Linearity proves the claimed equality for every $W$. Together with the zero-dimensional case in step 1.2 this covers every stated reference space. In particular, taking $K=\mathbb C^d$ includes the maximally entangled projector. [F3, step 1.1, step 1.2, step 3.1] ∎


## Feasibility and range of transpose entanglement fidelity

[Open item](item-lem-author-9fe623b43725-fidelity-feasibility) · level 3


### Statement

Let $d\ge1$, let $H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, and let $V:\mathbb C^d\to H_P$ and $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be the isometry and noise channel of the logical transpose construction. Let $\mathcal D$ and $K_{ab}$ be its completed logical decoder and recovered-channel Kraus operators. Write $\operatorname{Ad}_V(X)=VXV^\dagger$ and put $f=F_e(\mathcal D\mathcal N\operatorname{Ad}_V)$. Then $0\le f\le1$, $f=d^{-2}\sum_{a,b}|\operatorname{tr}K_{ab}|^2$, and $f$ is independent of the support completion.

Let $\mathfrak D$ be the set of all quantum channels $\mathcal R:\mathcal L(H_O)\to\mathcal L(\mathbb C^d)$, called CPTP logical decoders, and define $\mathcal F=\{F_e(\mathcal R\mathcal N\operatorname{Ad}_V):\mathcal R\in\mathfrak D\}$. The real supremum $g=\sup\mathcal F$ exists and satisfies $0\le f\le g\le1$.

### Statement references

[lem-author-9fe623b43725-logical-transpose](item-lem-author-9fe623b43725-logical-transpose)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[math:lem-extended-reals-complete](https://alphabetamath.cc/item/lem-extended-reals-complete)

### Facts & Assumptions

[F1] Entanglement fidelity of a channel is a real number in $[0,1]$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F2] Entanglement fidelity is the sum of squared Kraus traces divided by $d^2$. [lem-author-9fe623b43725-kraus-fidelity](item-lem-author-9fe623b43725-kraus-fidelity)

[F3] The completed logical transpose decoder is CPTP and its recovered channel has Kraus operators $K_{ab}$. [lem-author-9fe623b43725-logical-transpose](item-lem-author-9fe623b43725-logical-transpose)

[F4] Every finite reference extension of the recovered map is independent of completion. [lem-author-9fe623b43725-reference-completion](item-lem-author-9fe623b43725-reference-completion)

[F5] A decoder has type $\mathcal L(H_O)\to\mathcal L(\mathbb C^d)$. A quantum channel is complex-linear, completely positive and trace-preserving on all operators; complete positivity means positivity of every finite ancilla amplification. For the given isometry and noise channel, $\mathcal C=\mathcal N\operatorname{Ad}_V$ is a channel from $\mathbb C^d$ to $H_O$. For a complex-linear map, its $r$-ancilla amplification applies the map to each ancilla-indexed operator block. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel) [math:def-qc-completely-positive-map](https://alphabetamath.cc/item/def-qc-completely-positive-map)

[F6] Every nonempty subset of $\mathbb R$ bounded above in $\mathbb R$ has a real least upper bound, agreeing with its extended-real supremum. [math:lem-extended-reals-complete](https://alphabetamath.cc/item/lem-extended-reals-complete)

### Proof

**Given:** The finite spaces, isometry, noise channel, completed logical transpose decoder and decoder set in the Statement.

**Goal:** Prove the fidelity formula, completion independence and the existence and bounds of the decoder-fidelity supremum.

**Proof technique:** direct.

1.1 The logical transpose decoder is CPTP, and its recovered channel has the Kraus operators $K_{ab}$. The trace-fidelity formula gives the asserted sum, while the fidelity definition puts it in $[0,1]$. The reference-extended physical recovered outputs are independent of completion; applying the fixed logical compression on the output factor preserves their equality, hence preserves their overlap defining $f$. [F1, F2, F3, F4]

1.2 For every $\mathcal R\in\mathfrak D$, the map $\mathcal R\mathcal C$ is complex-linear and satisfies $\operatorname{tr}(\mathcal R(\mathcal C(X)))=\operatorname{tr}(\mathcal C(X))=\operatorname{tr}X$ for every logical operator $X$. For each integer $r\ge1$, its ancilla amplification is $\mathcal R^{(r)}\mathcal C^{(r)}$: both sides apply $\mathcal R\mathcal C$ to each ancilla-indexed block. This is a composition of positive maps, so it preserves nonnegative operators. Thus $\mathcal R\mathcal N\operatorname{Ad}_V$ is a channel on $\mathbb C^d$, and its entanglement fidelity is defined and belongs to $[0,1]$. [given, F1, F5]

2.1 By [F3], $\mathcal D\in\mathfrak D$, so $f\in\mathcal F$ and $\mathcal F$ is nonempty. Step 1.2 gives $\mathcal F\subseteq[0,1]$, so $1$ is a real upper bound. By [F6], $g=\sup\mathcal F$ exists in $\mathbb R$. Since $g$ is an upper bound and $f\in\mathcal F$, $f\le g$; since $1$ is an upper bound and $g$ is the least upper bound, $g\le1$. Together with step 1.1 this proves $0\le f\le g\le1$. [F3, F6, step 1.1, step 1.2] ∎


## Equivalence of logical and code-supported physical decoding

[Open item](item-lem-author-9fe623b43725-decoder-identification) · level 4


### Statement

Let $d\ge1$ be an integer, let $H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, and let $V:\mathbb C^d\to H_P$ be a linear isometry. Set $P=VV^\dagger$ and $\operatorname{Ad}_V(X)=VXV^\dagger$. CPTP logical decoders $\mathcal R:\mathcal L(H_O)\to\mathcal L(\mathbb C^d)$ correspond bijectively to CPTP code-supported physical recoveries $\mathcal Q:\mathcal L(H_O)\to\mathcal L(H_P)$ by $\mathcal Q=\operatorname{Ad}_V\circ\mathcal R$ and $\mathcal R(Y)=V^\dagger\mathcal Q(Y)V$. Code-supported means $P\mathcal Q(Y)P=\mathcal Q(Y)$ for every $Y\in\mathcal L(H_O)$.

Fix a quantum channel $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$, and let $\mathcal D$ be any completed logical transpose decoder for $(V,\mathcal N)$. Here quantum channels are complex-linear, completely positive and trace-preserving, and $F_e$ denotes entanglement fidelity for the maximally mixed logical input $I_d/d$. Corresponding $\mathcal R$ and $\mathcal Q$ have identical decoded logical channels after $\mathcal N\circ\operatorname{Ad}_V$, hence equal entanglement fidelities. Their fidelity sets have the same real supremum $g$. The logical transpose value $f=F_e(\mathcal D\circ\mathcal N\circ\operatorname{Ad}_V)$ is feasible, independent of the support completion, and satisfies $0\le f\le g\le1$.

### Statement references

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[lem-author-9fe623b43725-fidelity-feasibility](item-lem-author-9fe623b43725-fidelity-feasibility)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[lem-author-9fe623b43725-logical-transpose](item-lem-author-9fe623b43725-logical-transpose)

### Facts & Assumptions

**Given:** The finite spaces, isometry, fixed quantum channel, decoder classes and completed logical transpose decoder in the Statement.

**Goal:** Prove the channel correspondence, equality of decoded fidelity sets, and the feasibility and bounds of the transpose value.

[F1] The finite-dimensional channel, code-support and encoding conventions are those of code restriction: $V^\dagger V=I$, $P=VV^\dagger$, and the restricted noise and decoded compositions are channels. Encoding by an isometry and decoding a code-supported output by compression identify the logical and code spaces. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] The completed transpose decoder has a completion-independent feasible entanglement fidelity $f$, and the real supremum $g$ of the logical-decoder fidelity set exists with $0\le f\le g\le1$. [lem-author-9fe623b43725-fidelity-feasibility](item-lem-author-9fe623b43725-fidelity-feasibility)

[F3] For the finite-dimensional isometry $V$ and quantum channel $\mathcal N$, any completed transpose recovery compressed by $V^\dagger(\cdot)V$ gives a CPTP logical decoder $\mathcal D$. [lem-author-9fe623b43725-logical-transpose](item-lem-author-9fe623b43725-logical-transpose)

[F4] On a channel $\mathcal E$ on $\mathbb C^d$, $F_e(\mathcal E)$ is the overlap with the maximally entangled reference state after applying the identity on the reference and $\mathcal E$ on the logical factor; its input convention is $I_d/d$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

### Proof

**Given:** The finite spaces, isometry, fixed quantum channel, decoder classes and completed logical transpose decoder in the Statement.

**Goal:** Prove the channel correspondence, equality of decoded fidelity sets, and the feasibility and bounds of the transpose value.

**Proof technique:** direct.

1.1 Conjugation by $V$ preserves positivity with every ancilla and preserves trace because $V^\dagger V=I$. Thus it sends a CPTP logical decoder to a CPTP code-supported physical recovery. Conversely compression is completely positive and preserves trace on code-supported outputs: in a basis adapted to the code its trace is the sum of the same code diagonal entries. It therefore gives a CPTP logical decoder from any such physical recovery. [given, F1]

2.1 Composing the two constructions gives the identity: on the logical side use $V^\dagger V=I$; on the physical side use $P\mathcal Q(Y)P=\mathcal Q(Y)$. For every logical operator $X$, substitution yields $V^\dagger\mathcal Q(\mathcal N(VXV^\dagger))V=\mathcal R(\mathcal N(VXV^\dagger))$. Thus the decoded maps after the fixed encoded noise coincide as linear maps. [given, F1, step 1.1]

3.1 The coincident decoded maps in step 2.1 are channels by [F1]. Applying the overlap definition [F4] to equal channels gives equal entanglement fidelities for input $I_d/d$. The bijection therefore identifies their entire fidelity sets. The completed logical transpose decoder $\mathcal D$ is among these logical decoders by [F3]; [F2] supplies its completion-independent feasible value $f$, the existence of the logical-decoder supremum $g$, and $0\le f\le g\le1$. Equality of the fidelity sets gives the same supremum for code-supported physical recoveries. [F1, F2, F3, F4, step 2.1] ∎


## Near-optimality for maximally mixed entanglement fidelity

[Open item](item-thm-qec-prereq-transpose-entanglement-guarantee) · level 5


### Statement

Let $V:\mathbb C^d\to H_P$ be an isometry onto a nonzero finite-dimensional code, $P=VV^\dagger$, and let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a finite-dimensional quantum channel. Choose a finite Kraus family $(E_a)_{a\in A}$ for $\mathcal N$, where $A$ is finite, $E_a:H_P\to H_O$, and $\mathcal N(X)=\sum_{a\in A}E_aXE_a^\dagger$ for every $X\in\mathcal L(H_P)$. Let $F_{\rm opt}=\max_{\mathcal R}F_e(\mathcal R\mathcal N\operatorname{Ad}_V)$ over all CPTP logical decoders. Let $F_{\rm tr}$ be the value for the support-normalized transpose recovery $R_a=PE_a^\dagger\mathcal N(P)^{-1/2}$, completed to a channel and compressed to the logical space. Then $1-F_{\rm opt}\le1-F_{\rm tr}\le2(1-F_{\rm opt})$. The input of this entanglement fidelity is fixed to $I/d$; this is not a worst-case pure-state fidelity guarantee.

### Facts & Assumptions

[F1] Entanglement fidelity is the overlap with the purified maximally mixed logical input. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F2] The support-normalized transpose map has a CPTP completion with the same action on all encoded noisy operators. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F3] Logical decoders and code-supported physical recoveries have identical decoded fidelity sets; the transpose value is feasible, lies in $[0,1]$, and is independent of completion. [lem-author-9fe623b43725-decoder-identification](item-lem-author-9fe623b43725-decoder-identification)

[F4] The chosen finite Kraus family consists of maps $E_a:H_P\to H_O$ satisfying $\mathcal N(X)=\sum_{a\in A}E_aXE_a^\dagger$ for every input operator. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F5] Every channel between the stated finite-dimensional spaces admits a finite Kraus representation, so the choice in the Statement is available. [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

### External input

Imported near-optimality contract: For an isometric finite-dimensional encoding and a noise channel, the channel fidelity defined by overlap with the purified maximally mixed state has optimum $F^{\rm opt}$ over all physical CPTP recoveries. The transpose recovery has Kraus operators $P N_i^\dagger\mathcal N(P)^{-1/2}$ with inverse on the support, and satisfies $\tfrac12(1-F(\mathcal R^{\rm TC}\mathcal N\mathcal E))\le1-F^{\rm opt}\le1-F(\mathcal R^{\rm TC}\mathcal N\mathcal E)$.

Source: The Near-optimal Performance of Quantum Error Correction Codes, PDF p. 2, Eqs. (2)-(5) and Theorem 1; PDF p. 8 (supplement p. 2), Eq. (S7), Lemma 1 and Eq. (S8).

### Source notes

The source defines the maximally entangled vector with the channel and reference in the opposite tensor order. Swapping both input and output tensor factors preserves the scalar overlap. Its code basis is identified with the logical basis by $V$. The decoder-identification lemma establishes equivalence of logical and code-supported physical decoder conventions, together with feasibility and completion independence of the transpose fidelity. Its prerequisite chain supplies the Kraus fidelity formula, logical transpose construction, reference-level completion independence and feasibility. The substantial near-optimality inequality itself remains the exact external input; no local proof of it is claimed. The two inequalities in Eq. (S8) are rewritten by multiplying the first by two and reversing their order.
