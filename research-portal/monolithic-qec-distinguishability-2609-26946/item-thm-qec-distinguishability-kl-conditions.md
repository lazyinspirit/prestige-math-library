---
title: Knill–Laflamme criterion
status: published
research_item: thm-qec-distinguishability-kl-conditions
dependency_level: 1
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 1, Eq. (1) and immediately preceding paragraph
      statement: The article states that Kraus operators are correctable when all code
        vectors satisfy the displayed Knill–Laflamme scalar-overlap conditions,
        with Hermitian coefficients, and attributes the conditions to Ref. [18].
      hypotheses: The article's formulation uses an error channel, its Kraus
        operators, and vectors in a codespace.
      reading_limits: PDF page 1 and its supplied extracted text were read for
        attribution. The article is not used as proof of the criterion; the
        local finite-dimensional argument uses the declared mathematical
        suppliers.
---

PDF p. 1: ` Eq. (1) `

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:thm-qc-knill-laflamme-explicit-recovery](https://alphabetamath.cc/item/thm-qc-knill-laflamme-explicit-recovery)
- [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)
- [math:def-real-and-complex-inner-product-space](https://alphabetamath.cc/item/def-real-and-complex-inner-product-space)
- [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)
- [math:thm-adjoint-exists-and-is-unique-in-finite-dimension](https://alphabetamath.cc/item/thm-adjoint-exists-and-is-unique-in-finite-dimension)
- [math:prop-adjoint-algebra](https://alphabetamath.cc/item/prop-adjoint-algebra)


## Statement

Let $H_L$, $H_P$, and $H_O$ be nonzero finite-dimensional complex inner-product spaces, let $V:H_L\to H_P$ be an isometry, and let $\mathcal C=\operatorname{im}V$ be the codespace.

Write $\langle\cdot,\cdot\rangle_{\rm root}$ for each given inner product, linear in its first argument. On each space, $|v\rangle$ denotes $v$ and $\langle v|$ denotes the linear functional $x\mapsto\langle x,v\rangle_{\rm root}$. Thus $\langle u|v\rangle=\langle v,u\rangle_{\rm root}$ and $\langle u|A|v\rangle=\langle Av,u\rangle_{\rm root}$ for compatible vectors and linear maps. The symbol $A^\dagger$ denotes the unique adjoint characterized by $\langle Ax,y\rangle_{\rm root}=\langle x,A^\dagger y\rangle_{\rm root}$ for all compatible $x,y$.

Let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel with finite Kraus representation $\mathcal N(X)=\sum_{a=1}^m E_aXE_a^\dagger$. A quantum channel is a completely positive trace-preserving complex-linear map; a Kraus representation is the displayed operator sum. Exact correction means that some quantum channel $\mathcal R:\mathcal L(H_O)\to\mathcal L(H_L)$ satisfies $\mathcal R(\mathcal N(VXV^\dagger))=X$ for every $X\in\mathcal L(H_L)$.

Exact correction is possible if and only if there is a Hermitian matrix $(c_{ab})$ such that $\langle\psi|E_a^\dagger E_b|\varphi\rangle=c_{ab}\langle\psi|\varphi\rangle$ for every $a,b$ and every $|\psi\rangle,|\varphi\rangle\in\mathcal C$. The article attributes this criterion to its Ref. [18].

## Facts & Assumptions

[F1] The root inner product is linear in its first argument, conjugate symmetric and positive definite. The intrinsic bra in the Statement is therefore linear in its input. Adjoints are defined by the displayed pairing identity and exist uniquely in finite dimensions; they reverse products and conjugate scalar multiples. [math:def-real-and-complex-inner-product-space](https://alphabetamath.cc/item/def-real-and-complex-inner-product-space) [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces) [math:thm-adjoint-exists-and-is-unique-in-finite-dimension](https://alphabetamath.cc/item/thm-adjoint-exists-and-is-unique-in-finite-dimension) [math:prop-adjoint-algebra](https://alphabetamath.cc/item/prop-adjoint-algebra)

[F2] The codespace is the image of the isometry, its orthogonal projector is $P=VV^\dagger$, and exact correction is identity on the full logical operator space, as in [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel).

[F3] A finite Kraus representation is an operator-sum representation of the indicated channel. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F4] For a finite-dimensional isometric code and a finite Kraus channel, the scalar compression conditions $PE_a^\dagger E_bP=c_{ab}P$ imply a decoded recovery channel. [math:thm-qc-knill-laflamme-explicit-recovery](https://alphabetamath.cc/item/thm-qc-knill-laflamme-explicit-recovery)

[F5] For the same finite-dimensional code and channel, exact decoded recovery implies scalar compression conditions $PE_a^\dagger E_bP=c_{ab}P$. [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)

[F6] On standard coordinate spaces with specified ordered orthonormal bases, the intrinsic pairings in the Statement agree with the finite operator and bra-ket conventions: $\langle u|A|v\rangle=u^\dagger Av=\langle Av,u\rangle_{\rm root}$. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

## Proof

**Given:** The finite-dimensional spaces, isometry, codespace, and finite Kraus channel in the statement.

**Goal:** Prove the equivalence between exact correction and the stated Hermitian scalar-overlap condition.

1.1 Put $P=VV^\dagger$. Since $P$ is the orthogonal projector onto $\mathcal C$, scalar compression $PE_a^\dagger E_bP=c_{ab}P$ implies the stated overlap equality by evaluation on code vectors. Conversely, the overlap equality says $\langle(E_a^\dagger E_b-c_{ab}I)\varphi,\psi\rangle_{\rm root}=0$ for all $\psi,\varphi\in\mathcal C$, using linearity in the first argument. For fixed $\varphi\in\mathcal C$, put $z=P(E_a^\dagger E_b-c_{ab}I)\varphi\in\mathcal C$. Self-adjointness of $P$ gives $\langle z,\psi\rangle_{\rm root}=0$ for every $\psi\in\mathcal C$. Taking $\psi=z$ and using positive definiteness gives $z=0$. As $\varphi$ ranges over $\mathcal C$, this proves the scalar compression. [given, F1, F2, algebra]

2.1 If exact correction holds, [F5] supplies scalar compressions. Taking adjoints and interchanging $a,b$ gives $c_{ba}P=\overline{c_{ab}}P$; because $\mathcal C$ is nonzero, $c_{ba}=\overline{c_{ab}}$. Thus the coefficients form a Hermitian matrix and step 1.1 gives the overlap condition. [given, F1, F5, step 1.1, algebra]

3.1 Conversely, if the stated overlap condition holds, step 1.1 gives the scalar compressions. The channel and code meet the hypotheses of [F4], which provides a decoded recovery equal to the identity on all logical operators. This is exact correction. [given, F2, F3, F4, step 1.1] ∎
