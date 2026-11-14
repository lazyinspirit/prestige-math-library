---
title: Completion independence with an entangled reference
status: draft
research_item: lem-author-9fe623b43725-reference-completion
dependency_level: 2
---

## Prerequisites

- [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)
- [math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis)
- [math:lem-qc-finite-ancilla-amplification-is-block-map](https://alphabetamath.cc/item/lem-qc-finite-ancilla-amplification-is-block-map)
- [math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases](https://alphabetamath.cc/item/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases)


## Statement

Under the code and noise hypotheses of support-normalized transpose recovery and completion, use its completed map $\mathcal T$ and uncompleted map $\mathcal T_0$, and let $V:\mathbb C^d\to H_P$ be an isometry onto the nonzero code. For every finite-dimensional complex inner-product reference space $K$ and every operator $W\in\mathcal L(K\otimes\mathbb C^d)$, one has

$$(\operatorname{id}_K\otimes(\mathcal T\mathcal N\operatorname{Ad}_V))(W)=(\operatorname{id}_K\otimes(\mathcal T_0\mathcal N\operatorname{Ad}_V))(W).$$

Here $\mathcal L(H)$ denotes the complex-linear endomorphisms of $H$, $\operatorname{Ad}_V(X)=VXV^\dagger$, composition is read from right to left, and $\operatorname{id}_K\otimes\Phi$ is the linear amplification on operator spaces with the reference factor first, characterized by $A\otimes B\mapsto A\otimes\Phi(B)$. For $K=0$ it is the unique map between zero operator spaces.

## Statement references

[thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis)

[math:lem-qc-finite-ancilla-amplification-is-block-map](https://alphabetamath.cc/item/lem-qc-finite-ancilla-amplification-is-block-map)

## Facts & Assumptions

**Given:** The finite-dimensional spaces, code, noise, recovery maps and encoding in the Statement.

**Goal:** Prove equality of the reference-first amplifications on every operator $W$.

[F1] The completed and uncompleted transpose maps agree after noise on every code-supported operator $X=PXP$, not just on states. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F2] The encoding is $\operatorname{Ad}_V(X)=VXV^\dagger$, with $V^\dagger V=I$ and code projector $P=VV^\dagger$. The channel and recovery maps are complex-linear. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel) [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F3] For finite-dimensional complex inner-product spaces with ordered orthonormal bases, the products of their operator matrix units form a basis of the full endomorphism space of their tensor product, including empty dimensions. [math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis)

[F4] Ordered tensor registers have their ordered product bases and product inner products; exchanging two factors is the linear map exchanging their product basis vectors, with inverse the reverse exchange. A zero-dimensional factor gives the zero tensor space. [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[F5] For a complex-linear map $\Phi:\mathcal L(H)\to\mathcal L(G)$ and $R=\mathbb C^r$, $r\ge1$, the ancilla-last block map $\Phi^{(r)}:\mathcal L(H\otimes R)\to\mathcal L(G\otimes R)$ is well-defined and linear, and sends the block family $[X_{ij}]$ to $[\Phi(X_{ij})]$. [math:lem-qc-finite-ancilla-amplification-is-block-map](https://alphabetamath.cc/item/lem-qc-finite-ancilla-amplification-is-block-map)

[F6] Every finite-dimensional complex inner-product space admits an orthonormal basis, with the empty basis in dimension zero. [math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases](https://alphabetamath.cc/item/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases)

## Proof

**Given:** The spaces, maps and operators in the Statement, and the conventions in [F1]–[F6].

**Goal:** Establish the well-defined reference-first product action and the asserted equality on all $W$.

**Proof technique:** direct.

1.1 For every $X\in\mathcal L(\mathbb C^d)$, $P(VXV^\dagger)P=VXV^\dagger$, since $PV=V$ and $V^\dagger P=V^\dagger$ follow from $P=VV^\dagger$ and $V^\dagger V=I$. Thus [F1] gives $(\mathcal T\mathcal N\operatorname{Ad}_V)(X)=(\mathcal T_0\mathcal N\operatorname{Ad}_V)(X)$. Both maps are complex-linear. [F1, F2, algebra]

1.2 If $K=0$, the input and output tensor spaces, and hence their endomorphism spaces, are zero, so their unique linear maps coincide. Otherwise put $r=\dim K\ge1$, choose an ordered orthonormal basis $(k_i)_{i<r}$ of $K$, and let $(e_i)_{i<r}$ be the standard basis of $R=\mathbb C^r$. For each of the spaces $H=\mathbb C^d$ and $G=H_P$, choose an ordered orthonormal basis as well. [F4, F6, choose]

2.1 For a complex-linear $\Phi:\mathcal L(H)\to\mathcal L(G)$, define $J_H:K\otimes H\to H\otimes R$ by $J_H(k_i\otimes x)=x\otimes e_i$, and define $J_G$ in the same way. These maps send product bases bijectively to product bases and preserve the product inner products; their inverses send $x\otimes e_i$ to $k_i\otimes x$. The block-map supplier therefore defines a well-defined linear map $\Psi_\Phi(W)=J_G^{-1}\Phi^{(r)}(J_HWJ_H^{-1})J_G$ on the full operator space. [F4, F5, step 1.2, construct]

3.1 Write $E_{uv}k_i=\delta_{vi}k_u$ for the reference matrix units. For any $B\in\mathcal L(H)$, direct evaluation on $x\otimes e_i$ shows that $J_H(E_{uv}\otimes B)J_H^{-1}$ has block $B$ at $(u,v)$ and zero at every other block. By [F5], its image has block $\Phi(B)$ at $(u,v)$ and all other blocks zero. Thus $\Psi_\Phi(E_{uv}\otimes B)=E_{uv}\otimes\Phi(B)$. Expanding an arbitrary reference operator $A$ in its matrix entries gives $\Psi_\Phi(A\otimes B)=A\otimes\Phi(B)$. By [F3], this product action uniquely determines a linear map on the full operator space. Consequently the construction is independent of the chosen bases and is precisely the reference-first amplification $\operatorname{id}_K\otimes\Phi$. [F3, F5, step 2.1, algebra]

4.1 Expand $W$ in the basis $E_{uv}\otimes L_{jk}$ from [F3], where $L_{jk}$ are the logical operator matrix units. By step 1.1 the two recovered maps agree on every $L_{jk}$; by step 3.1 their reference-first amplifications agree on every $E_{uv}\otimes L_{jk}$. Linearity proves the claimed equality for every $W$. Together with the zero-dimensional case in step 1.2 this covers every stated reference space. In particular, taking $K=\mathbb C^d$ includes the maximally entangled projector. [F3, step 1.1, step 1.2, step 3.1] ∎
