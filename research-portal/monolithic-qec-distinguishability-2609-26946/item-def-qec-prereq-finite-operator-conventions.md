---
title: Finite operator and ket conventions
status: published
research_item: def-qec-prereq-finite-operator-conventions
dependency_level: 0
---

## Prerequisites

- [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)
- [math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products)
- [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)
- [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)
- [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)
- [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)
- [math:def-coordinate-column-and-matrix-of-a-linear-map](https://alphabetamath.cc/item/def-coordinate-column-and-matrix-of-a-linear-map)
- [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)
- [math:def-transpose-of-a-matrix](https://alphabetamath.cc/item/def-transpose-of-a-matrix)


## Definition

A finite operator space in these conventions is a specified nonzero complex coordinate space $H=\mathbb C^d$, $d\geq 1$, equipped with its standard inner product and a specified ordered orthonormal basis. An ordered basis is a finite ordered list of linearly independent vectors spanning the space. An orthonormal basis is a basis whose vectors have inner products $1$ with themselves and $0$ with each other. Coordinates and matrices below are taken in the specified bases. The root inner product is linear in its first argument; on standard coordinates it is $\langle x,y\rangle_{\rm root}=\sum_i x_i\overline{y_i}$.

Below, $H=\mathbb C^d$ and $K=\mathbb C^e$, with $d,e\geq1$, are any two finite operator spaces with their specified ordered orthonormal bases $(h_i)_{i=1}^d$ and $(k_j)_{j=1}^e$. For $x=\sum_i x_i b_i$ in a specified ordered basis $(b_i)$, its coordinate column is $(x_i)_i$; the same symbol $x$ also denotes this column. For a linear map $A:K\to H$, its matrix, also denoted $A=(a_{ij})$, is determined by $Ak_j=\sum_i a_{ij}h_i$. Products denote rectangular matrix products, $(BC)_{ij}=\sum_k B_{ik}C_{kj}$, for compatible shapes. Transposition means $(B^T)_{ji}=B_{ij}$, and $\overline B$ denotes entrywise complex conjugation.

For vectors $u\in H$ and $v\in K$, the ket $|u\rangle$ denotes $u$, the bra $\langle v|$ denotes the linear functional $x\mapsto v^\dagger x=\sum_j\overline{v_j}x_j$ on $K$, and the outer product $|u\rangle\langle v|:K\to H$ maps $x$ to $u(v^\dagger x)$. For a linear map $A:K\to H$, $A^\dagger:H\to K$ denotes the adjoint, represented by the conjugate transpose $\overline A^T$. The bracket $\langle u|A|v\rangle$ means $u^\dagger Av$, equivalently $\langle Av,u\rangle_{\rm root}$.

An ordered tensor register consists of a finite ordered list of finite-dimensional complex inner-product spaces, each with a specified ordered orthonormal basis: its factors remain in the displayed order and its product basis is ordered lexicographically. The empty tensor product is $\mathbb C$. No infinite tensor product or unspecified basis is implicit.

## Definition references

[math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products)

[math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)

[math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)

[math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

[math:def-coordinate-column-and-matrix-of-a-linear-map](https://alphabetamath.cc/item/def-coordinate-column-and-matrix-of-a-linear-map)

[math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)

[math:def-transpose-of-a-matrix](https://alphabetamath.cc/item/def-transpose-of-a-matrix)

## Justification

In an orthonormal basis, expanding the vectors in their coordinate columns and using linearity in the first argument and conjugate symmetry gives $\langle x,y\rangle_{\rm root}=\sum_i x_i\overline{y_i}$ in those coordinates, consistent with the standard-coordinate inner product. These are the coordinate columns of [math:def-coordinate-column-and-matrix-of-a-linear-map](https://alphabetamath.cc/item/def-coordinate-column-and-matrix-of-a-linear-map), in the ordered bases of [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis), using [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space) and [math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products).

Hence $v^\dagger x=\langle x,v\rangle_{\rm root}$ is linear in $x$, so the stated outer product preserves linear combinations and is a well-defined linear map in the sense of [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map). The scalar product of the row and column uses [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix).

Expanding $x=\sum_j x_j k_j$ and applying linearity to the defining matrix columns gives $(Ax)_i=\sum_j a_{ij}x_j$, the matrix action supplied by the coordinate-column convention and rectangular multiplication. This uses [math:def-coordinate-column-and-matrix-of-a-linear-map](https://alphabetamath.cc/item/def-coordinate-column-and-matrix-of-a-linear-map), [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map) and [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix).

For $x\in K$ and $y\in H$, the finite coordinate sums give $\langle Ax,y\rangle_{\rm root}=\sum_{i,j}a_{ij}x_j\overline{y_i}=\langle x,\overline A^T y\rangle_{\rm root}$, where $(\overline A^T)_{ji}=\overline{a_{ij}}$ by [math:def-transpose-of-a-matrix](https://alphabetamath.cc/item/def-transpose-of-a-matrix). Thus the conjugate transpose satisfies the defining adjoint identity of [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces), with the inner product of [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space) and the matrix products of [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix). In particular $u^\dagger Av=\langle Av,u\rangle_{\rm root}$.

The ordered tensor construction and its product basis are supplied by [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation).
