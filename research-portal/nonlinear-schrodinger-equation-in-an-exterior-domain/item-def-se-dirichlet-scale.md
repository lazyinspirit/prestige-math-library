---
title: Dirichlet spectral Sobolev scale and duality
status: draft
research_item: def-se-dirichlet-scale
dependency_level: 6
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 8: ` definition of HσD and pairing `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Definition

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and let its exterior $\Omega=\mathbb R^n\setminus\Theta$ be connected. Work in the complex Hilbert space $L^2(\Omega)$, with inner product $\langle u,v\rangle_2=\int_\Omega u\overline v\,dx$, linear in the first argument. Let $\Delta_D$ be the Dirichlet Laplacian with domain $H^2(\Omega)\cap H^1_0(\Omega)$, and put $A=I-\Delta_D$.

For $\sigma\in\mathbb R$, let $D(A^\infty)=\bigcap_{k\ge1}D(A^k)$ and define $H_D^\sigma(\Omega)$ as its completion in the norm $\|u\|_{H_D^\sigma}=\|A^{\sigma/2}u\|_2$, where the powers are defined by the spectral calculus. For $\sigma\ge0$, this completion is identified with $D(A^{\sigma/2})$, equipped with that norm. In particular $H_D^0(\Omega)=L^2(\Omega)$, $H_D^1(\Omega)=H^1_0(\Omega)$ and $H_D^2(\Omega)=H^2(\Omega)\cap H^1_0(\Omega)$, as spaces with their respective indicated norms.

For $s\ge0$, identify $H_D^{-s}(\Omega)$ isometrically with the antidual of $H_D^s(\Omega)$: the antidual is the space of bounded conjugate-linear scalar functionals, with its operator norm. The pairing $\langle f,g\rangle_{-s,s}$ is linear in $f$ and conjugate-linear in $g$ and extends $\int_\Omega f\overline g\,dx$ from pairs in $D(A^\infty)$. The integral is therefore a pivot notation for this extension; arbitrary negative-order elements need not be functions for which the integral is defined.

Write $R=A^{-1}$. It extends to an isometric isomorphism $R:H_D^\sigma(\Omega)\to H_D^{\sigma+2}(\Omega)$ for every real $\sigma$. The group $e^{it\Delta_D}$ extends consistently to a unitary group on every $H_D^\sigma(\Omega)$ and commutes there with $R$.

## Definition references

[def-se-geometry](item-def-se-geometry)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)

[lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization)

[lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)

[math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Justification

The geometry is fixed by [def-se-geometry](item-def-se-geometry), and the weak Sobolev spaces and the closure defining $H^1_0(\Omega)$ are fixed by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation). Under Choice, [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) supplies the displayed Dirichlet realization and its self-adjoint shift $A\ge I$ on the nonzero complex Hilbert space $L^2(\Omega)$. The powers and their domains are defined by [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus), with the Choice assumption of that supplier recorded by [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

The positive spectral-scale result [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) applies to this $A$: it supplies the normed completion, the positive-domain identification, and the isometric pivot-antidual identification. In particular, it gives a definite norm on the common core and a complete space at each real index. Its pivot pairing extends the $L^2$ inner product by continuity, so its notation does not assert that a general negative-order element is an integrable function.

The realization theorem [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization) gives $D(A^{1/2})=H^1_0(\Omega)$ with $\|A^{1/2}u\|_2^2=\|u\|_2^2+\|\nabla u\|_2^2$ and $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$. The latter space carries the scale norm $\|Au\|_2$, which that theorem states is equivalent to its $H^2$ norm. The same spectral-scale result supplies the stated extension of $A^{-1}$, the unitary evolution and their commutation.

## Source notes

The article is cited for the scale, pivot pairing and notation on PDF page 8. The mathematical justifications are the independent suppliers listed above; the article is not used as proof of its own definition or its properties.
