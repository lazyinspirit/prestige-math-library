---
title: Passive subspace and subsystem protection interface
status: draft
research_item: def-qec-prereq-passive-subsystem-contract
dependency_level: 0
sources:
  references:
    - title: Theory of Quantum Error Correction for General Noise
      url: https://arxiv.org/pdf/quant-ph/9908066
      locator: PDF p. 3, Noiseless Subsystems
      statement: In the interaction-algebra decomposition, a factor on which the
        interaction operators act trivially is a noiseless subsystem; noiseless
        subspaces are special cases.
      hypotheses: The source's finite-dimensional interaction-algebra setting and its
        stated decomposition.
      reading_limits: Read the Noiseless Subsystems passage on PDF p. 3. The
        channel-level contract and tracked-unitary convention below are local
        formulations; the source passage is not asserted to state those formulas
        or to prove their equivalence with every other convention.
---

## Prerequisites

- [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)
- [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)
- [math:def-linear-isometry-and-orthogonal-or-unitary-operator](https://alphabetamath.cc/item/def-linear-isometry-and-orthogonal-or-unitary-operator)
- [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)
- [math:thm-adjoint-exists-and-is-unique-in-finite-dimension](https://alphabetamath.cc/item/thm-adjoint-exists-and-is-unique-in-finite-dimension)
- [math:def-qc-tensor-map](https://alphabetamath.cc/item/def-qc-tensor-map)
- [math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis)
- [` Theory of Quantum Error Correction for General Noise · PDF p. 3, Noiseless Subsystems `](https://arxiv.org/pdf/quant-ph/9908066)


## Definition

Let $H_P$, $H_L$ and $H_G$ be nonzero finite-dimensional complex inner-product spaces, and let $V:H_L\otimes H_G\to H_P$ be an isometry. Write $\mathcal L(H)$ for the linear operators on $H$, and $\operatorname{Ad}_V(X)=VXV^*$. Let $\mathfrak N$ be a specified family of channels from $\mathcal L(H_P)$ to itself. The image of $V$ is the specified block; its first and second tensor factors are called the logical and gauge subsystems, respectively.

The logical subsystem is **noiseless for $\mathfrak N$** in this interface if, for every $\mathcal N\in\mathfrak N$, there is a channel $\Phi_{\mathcal N}:\mathcal L(H_G)\to\mathcal L(H_G)$ such that $\mathcal N\circ\operatorname{Ad}_V=\operatorname{Ad}_V\circ(\operatorname{id}_{\mathcal L(H_L)}\otimes\Phi_{\mathcal N})$ on all of $\mathcal L(H_L\otimes H_G)$. Thus the block is invariant in the sense that every encoded operator has output supported on the block, while the logical factor has identity action and the gauge factor may evolve.

When $\dim H_G=1$, this condition defines a **decoherence-free subspace** for the family: the induced action on operators of the encoded subspace is the identity. A separate, explicitly tracked-unitary convention permits a specified unitary $U_{\mathcal N}$ on $H_L$ for each $\mathcal N$ and replaces the identity factor by $\operatorname{Ad}_{U_{\mathcal N}}$; it is not the identity-action condition unless that induced conjugation is the identity. A change in a noise map, including one described as a symmetry perturbation, must satisfy the relevant displayed factorization to retain the corresponding property. Energy-level degeneracy alone is not part of this definition.

## Facts & Assumptions

[F1] The finite tensor product and its inner product are the ordered tensor construction of [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation).

[F2] A channel is a complex-linear, completely positive, trace-preserving map on the full finite-dimensional operator space, as in [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel).

[F3] Linear isometries preserve the induced norm, and a unitary operator is an invertible complex-linear isometry of a finite-dimensional inner-product space, as in [math:def-linear-isometry-and-orthogonal-or-unitary-operator](https://alphabetamath.cc/item/def-linear-isometry-and-orthogonal-or-unitary-operator).

[F4] The adjoint is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ with the inner product linear in the first argument, as in [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces); every linear map between finite-dimensional inner-product spaces has a unique such adjoint by [math:thm-adjoint-exists-and-is-unique-in-finite-dimension](https://alphabetamath.cc/item/thm-adjoint-exists-and-is-unique-in-finite-dimension).

[F5] Tensor products of linear maps are the unique linear extensions of their prescribed action on elementary tensors, as in [math:def-qc-tensor-map](https://alphabetamath.cc/item/def-qc-tensor-map). This applies both to operators on the factors and to linear maps on their finite-dimensional operator spaces.

[F6] For specified ordered orthonormal bases of finite-dimensional complex inner-product spaces, the tensors of the associated operator matrix units form a basis of the full operator space on the tensor product, by [math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis).

## Justification

The tensor construction in [F1] gives the domain of the isometry in [F3] and a product basis. The finite-dimensional adjoint existence in [F4] makes $V^*:H_P\to H_L\otimes H_G$ well-defined, so $X\mapsto VXV^*$ has the stated operator-space domain and codomain. On elementary operator tensors the expression $(\operatorname{id}\otimes\Phi_{\mathcal N})(A\otimes B)=A\otimes\Phi_{\mathcal N}(B)$ extends linearly and uniquely: [F5] constructs the tensor map on $\mathcal L(H_L)\otimes\mathcal L(H_G)$, and [F6] identifies that space with $\mathcal L(H_L\otimes H_G)$ by its product matrix-unit basis. Both sides of the defining equality are therefore linear maps with the same domain and codomain. For a one-dimensional gauge space every operator is a scalar multiple of its identity, and trace preservation in [F2] forces its channel to be the identity; the stated subspace specialization follows. The tracked-unitary version is a separately specified convention, with $\operatorname{Ad}_U(A)=UAU^*$ using the unitary in [F3] and its adjoint from [F4].

## Source notes

The source describes a noiseless factor through interaction operators that act on its cofactor. The definition above states the channel-level interface used here and does not assert that an arbitrary energy degeneracy supplies its factorization.
