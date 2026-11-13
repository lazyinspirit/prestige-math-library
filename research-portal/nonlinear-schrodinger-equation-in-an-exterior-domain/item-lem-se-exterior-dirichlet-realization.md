---
title: Exterior Dirichlet realization, H² domain and form domain
status: published
research_item: lem-se-exterior-dirichlet-realization
dependency_level: 3
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-se-author-88d8498c76d6-weak-dirichlet-form](item-lem-se-author-88d8498c76d6-weak-dirichlet-form)
- [lem-se-author-88d8498c76d6-exterior-graph-domain](item-lem-se-author-88d8498c76d6-exterior-graph-domain)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)
- [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)


## Statement

Assume the Axiom of Choice (AC). Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, where $\Theta$ is compact with smooth boundary and $\Omega$ is open. Work in $L^2(\Omega;\mathbb C)$ with inner product $\langle u,v\rangle=\int_\Omega u\overline v$, linear in the first variable. For $k=1,2$, write $H^k(\Omega)=W^{k,2}(\Omega;\mathbb C)$ with its weak-derivative sum-of-squares norm, and let $H^1_0(\Omega)=W^{1,2}_0(\Omega;\mathbb C)$ be the $H^1$ norm closure of $C_c^\infty(\Omega;\mathbb C)$. Self-adjointness means equality of a densely defined operator with its Hilbert-space adjoint, including equality of domains. The form
$$q(u,v)=\int_\Omega(u\overline v+\nabla u\cdot\overline{\nabla v})$$
on $H^1_0(\Omega)$ represents a self-adjoint $A\ge I$. Its domain is $H^2(\Omega)\cap H^1_0(\Omega)$, $Au=u-\Delta u$, with $\|Au\|_2$ equivalent to $\|u\|_{H^2}$. Moreover $D(A^{1/2})=H^1_0(\Omega)$ with $\|A^{1/2}u\|_2^2=\|u\|_2^2+\|\nabla u\|_2^2$. Thus $\Delta_D=I-A$ is self-adjoint and nonpositive.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It is the choice hypothesis of [F2] and [F3] and supplies the Countable Choice hypothesis of [F4] and [F5].

[F2] [lem-se-author-88d8498c76d6-weak-dirichlet-form](item-lem-se-author-88d8498c76d6-weak-dirichlet-form) supplies the self-adjoint shifted weak realization, its distributional domain, the energy bound and the exact square-root form norm on any nonempty open set.

[F3] [lem-se-author-88d8498c76d6-exterior-graph-domain](item-lem-se-author-88d8498c76d6-exterior-graph-domain) proves the exterior $H^2$ domain and graph norm by bounded-collar regularity and the separately justified unbounded Fourier tail.

[F4] The weak-derivative spaces and norms are supplied by [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) with $p=2$, complex scalars and $k=1,2$. The closure convention for $H^1_0=W^{1,2}_0$ is supplied by [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). The open-set and dimensional hypotheses hold here; their Countable Choice hypothesis follows from [F1].

[F5] Self-adjointness on the ambient complex Hilbert space means equality with the densely defined Hilbert-space adjoint, including the domain, as in [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint). Its Countable Choice hypothesis follows from [F1]; the ambient $L^2$ Hilbert space and pairing are those in [F2].

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 The exterior of a compact subset of $\mathbb R^n$ is nonempty. Apply the weak-form lemma with $U=\Omega$ and the stated Dirichlet form. It gives a self-adjoint $A\ge I$, $D(A)=\{u\in H^1_0:\Delta u\in L^2\}$, $Au=u-\Delta u$, and $D(A^{1/2})=H^1_0$ with the exact form identity. [F1, F2, F4, F5, given]

2.1 The graph-domain lemma applies to this same weak domain and gives $D(A)=H^2\cap H^1_0$ and $\|Au\|_2\asymp\|u\|_{H^2}$. Since $A$ is self-adjoint, $I-A$ is self-adjoint on $D(A)$, and $\langle(I-A)u,u\rangle=-\|\nabla u\|_2^2\le0$. This identifies the nonpositive Dirichlet Laplacian and proves every assertion. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎


## Source notes

This is a local collar/free-tail composition of the named library results. The article under study is not a prerequisite source. The five intermediate items supply the substantial local argument; no independent proof-review credit is claimed.
