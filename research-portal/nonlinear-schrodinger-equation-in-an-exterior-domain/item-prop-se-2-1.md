---
title: "Proposition 2.1: cut-off resolvent estimate"
status: draft
research_item: prop-se-2-1
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 6: ` Proposition 2.1; (2.1) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent)
- [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality)
- [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Theta\subset\mathbb R^n$ be a nonempty compact set with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. Suppose that $\Theta$ is non-trapping in the complete-ray sense: for every complete unit-speed admissible generalized reflected or glancing ray $x:\mathbb R\to\overline\Omega$ and every compact $K\subset\mathbb R^n$, there is $t\ge0$ with $x(t)\notin K$. Let $\Delta_D$ be the Dirichlet Laplacian on $\Omega$, with domain $H^2(\Omega)\cap H^1_0(\Omega)$, and let $H_D^s(\Omega)$ be the spectral scale of $I-\Delta_D$.

For every real-valued $\chi\in C_c^\infty(\mathbb R^n)$ and every $s\in[-1,1]$, there are $C>0$ and $\varepsilon_0>0$ such that, for every $\kappa\in\mathbb R$ and $0<\varepsilon\le\varepsilon_0$,
$$\|\chi(-\Delta_D-(\kappa\pm i\varepsilon)^2)^{-1}\chi\|_{H_D^s(\Omega)\to H_D^{s+1}(\Omega)}\le C.$$
The cutoffs act by multiplication after restriction to $\Omega$; the operator norm refers to the bounded extension between the indicated scale spaces. The constants may depend on $\Theta$, $\chi$ and $s$, but not on $\kappa$ or $\varepsilon$.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The exterior geometry, smooth boundary convention and generalized-ray non-trapping condition are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping).

[F2] The Dirichlet operator and its scale, including the pivot-antidual interpretation at negative orders, are those of [def-se-dirichlet-scale](item-def-se-dirichlet-scale). This scale and the following suppliers retain the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F3] For every real nonnegative $\rho\in C_c^\infty(\mathbb R^n)$, the non-trapping cutoff resolvent input [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent) gives the displayed uniform $H_D^s\to H_D^{s+1}$ estimate for $-1\le s\le1$, with constants independent of $\kappa$ and sufficiently small positive $\varepsilon$.

[F4] Multiplication by a smooth compactly supported function is bounded on $H_D^t(\Omega)$ for $-2\le t\le2$, with the negative-order action defined by pivot duality and agreeing with ordinary multiplication on $L^2(\Omega)$ [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality).

[F5] For $0<r<R$, there is a smooth $[0,1]$-valued function on $\mathbb R^n$ equal to one on $\overline B_r(0)$ and supported in $B_R(0)$ [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls).

## Proof

[F1] The exterior geometry, smooth boundary convention and generalized-ray non-trapping condition are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping).

[F2] The Dirichlet operator and its scale, including the pivot-antidual interpretation at negative orders, are those of [def-se-dirichlet-scale](item-def-se-dirichlet-scale). This scale and the following suppliers retain the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F3] For every real nonnegative $\rho\in C_c^\infty(\mathbb R^n)$, the non-trapping cutoff resolvent input [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent) gives the displayed uniform $H_D^s\to H_D^{s+1}$ estimate for $-1\le s\le1$, with constants independent of $\kappa$ and sufficiently small positive $\varepsilon$.

[F4] Multiplication by a smooth compactly supported function is bounded on $H_D^t(\Omega)$ for $-2\le t\le2$, with the negative-order action defined by pivot duality and agreeing with ordinary multiplication on $L^2(\Omega)$ [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality).

[F5] For $0<r<R$, there is a smooth $[0,1]$-valued function on $\mathbb R^n$ equal to one on $\overline B_r(0)$ and supported in $B_R(0)$ [math:lem-smooth-bump-between-concentric-euclidean-balls](https://alphabetamath.cc/item/lem-smooth-bump-between-concentric-euclidean-balls).



**Given:** The obstacle, cutoff $\chi$, and order $s$ in the Statement.

**Goal:** Establish the stated uniform cutoff-resolvent bound.

1.1 Since $\operatorname{supp}\chi$ is compact, choose $0<r<R$ with $\operatorname{supp}\chi\subset B_r(0)$. By [F5], choose a real $\rho\in C_c^\infty(\mathbb R^n)$ with $0\le\rho\le1$ and $\rho=1$ on $\operatorname{supp}\chi$. Thus $\chi\rho=\rho\chi=\chi$. [F5, given, choose]

2.1 The hypotheses of [F3] hold for $\rho$ by [F1] and step 1.1. Hence $T_{\kappa,\varepsilon}^{\pm}=\rho(-\Delta_D-(\kappa\pm i\varepsilon)^2)^{-1}\rho$ has norm at most a constant $C_\rho$ from $H_D^s$ to $H_D^{s+1}$ uniformly for $\kappa\in\mathbb R$ and $0<\varepsilon\le\varepsilon_0$. [F1, F2, F3, step 1.1, given]

3.1 Both $s$ and $s+1$ lie in $[-2,2]$, so [F4] bounds multiplication $M_\chi$ on both $H_D^s$ and $H_D^{s+1}$. On $L^2(\Omega)$ the identity $M_\chi T_{\kappa,\varepsilon}^{\pm}M_\chi=\chi(-\Delta_D-(\kappa\pm i\varepsilon)^2)^{-1}\chi$ follows from $\chi\rho=\chi$. The bounded composition consequently supplies the stated extension, since the common spectral core is dense in $H_D^s$. Its norm is at most $\|M_\chi\|_{H_D^{s+1}\to H_D^{s+1}}C_\rho\|M_\chi\|_{H_D^s\to H_D^s}$, independent of $\kappa$ and $\varepsilon$. This proves the estimate. [F2, F4, step 1.1, step 2.1, given] ∎

## Source notes

The original article is cited for the statement and attribution to its reference [9]; it is not used as proof of the estimate. The resolvent estimate for a nonnegative cutoff is the independent imported input recorded in [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent). The multiplier composition above is the local argument extending that input to the article's real-valued cutoffs.
