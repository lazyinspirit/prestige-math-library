---
title: "Lemma 3.11: extension preserving the obstacle Dirichlet condition"
status: published
research_item: lem-se-3-11
dependency_level: 15
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 16: ` Lemma 3.11 `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-boundary-state-space](item-def-se-boundary-state-space)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-extension-construction](item-def-se-extension-construction)
- [prop-se-scale-identifications](item-prop-se-scale-identifications)
- [lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing](item-lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)


## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and suppose its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected. Choose $R_0>0$ with $\Theta\subset B_{R_0}(0)$ and put $\Omega_0=B_{R_0}(0)\setminus\Theta$ and $\Gamma_2=\partial\Theta$. For $1\le s\le2$, let $X^s(\Omega_0)=\{u\in H^s(\Omega_0):\gamma_{\Gamma_2}u=0\}$ with the inherited $H^s$ norm, where $H^s$ is the Bessel-potential restriction space and $\gamma_{\Gamma_2}$ is the value trace. Let $H_D^s(\Omega)=D((I-\Delta_D)^{s/2})$ with its spectral norm, where $\Delta_D$ is the Dirichlet Laplacian. Then there is a bounded linear operator $E:X^s(\Omega_0)\to H_D^s(\Omega)$ such that $(Eu)|_{\Omega_0}=u$ for every $u\in X^s(\Omega_0)$.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-boundary-state-space](item-def-se-boundary-state-space)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

## Facts & Assumptions

**Given:** The hypotheses and conventions in the Statement.

[F1] The geometry and spaces are those of [def-se-geometry](item-def-se-geometry), [def-se-boundary-state-space](item-def-se-boundary-state-space) and [def-se-dirichlet-scale](item-def-se-dirichlet-scale). The Choice assumption is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Bounded linear operators between the resulting complex normed spaces are understood as in [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator).

[F2] The fixed annular construction [def-se-extension-construction](item-def-se-extension-construction), with the partial-extension and gluing result [lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing](item-lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing), gives a bounded linear map $G:H^s(\Omega_0)\to H^s(\Omega)$ which restricts to the identity on $\Omega_0$ and maps $X^s(\Omega_0)$ into $H^s(\Omega)\cap H^1_0(\Omega)$. Here $H^1_0(\Omega)$ is the $H^1(\Omega)$ closure of $C_c^\infty(\Omega)$.

[F3] Under the stated geometry and Choice assumption, [prop-se-scale-identifications](item-prop-se-scale-identifications) identifies $H_D^s(\Omega)$ with $H^s(\Omega)\cap H^1_0(\Omega)$ for $1\le s\le2$, with the spectral and inherited $H^s$ norms equivalent.

## Proof

**Given:** The hypotheses and conventions in the Statement.

[F1] The geometry and spaces are those of [def-se-geometry](item-def-se-geometry), [def-se-boundary-state-space](item-def-se-boundary-state-space) and [def-se-dirichlet-scale](item-def-se-dirichlet-scale). The Choice assumption is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Bounded linear operators between the resulting complex normed spaces are understood as in [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator).

[F2] The fixed annular construction [def-se-extension-construction](item-def-se-extension-construction), with the partial-extension and gluing result [lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing](item-lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing), gives a bounded linear map $G:H^s(\Omega_0)\to H^s(\Omega)$ which restricts to the identity on $\Omega_0$ and maps $X^s(\Omega_0)$ into $H^s(\Omega)\cap H^1_0(\Omega)$. Here $H^1_0(\Omega)$ is the $H^1(\Omega)$ closure of $C_c^\infty(\Omega)$.

[F3] Under the stated geometry and Choice assumption, [prop-se-scale-identifications](item-prop-se-scale-identifications) identifies $H_D^s(\Omega)$ with $H^s(\Omega)\cap H^1_0(\Omega)$ for $1\le s\le2$, with the spectral and inherited $H^s$ norms equivalent.



**Given:** The hypotheses and data in the Statement.

**Goal:** Construct a bounded linear right inverse to restriction with values in $H_D^s(\Omega)$.

1.1 Fix the cutoffs and annular extension in the construction of $G$. Restrict its domain to $X^s(\Omega_0)$ and call the resulting map $E$. The gluing result gives $Eu\in H^s(\Omega)\cap H^1_0(\Omega)$ and $(Eu)|_{\Omega_0}=u$. It also gives a constant $C_s$ such that $\|Eu\|_{H^s(\Omega)}\le C_s\|u\|_{H^s(\Omega_0)}$. The fixed construction is linear. [F2, given]

2.1 The scale identification gives a constant $C'_s$ such that $\|Eu\|_{H_D^s(\Omega)}\le C'_s\|Eu\|_{H^s(\Omega)}$ on $H^s(\Omega)\cap H^1_0(\Omega)$. Combining this with the previous bound and the inherited norm of $X^s(\Omega_0)$ proves that $E$ is bounded into $H_D^s(\Omega)$. Its restriction identity and linearity were established above. [F1, F3, step 1.1] ∎

## Source notes

The original article is cited for attribution of Lemma 3.11 and its annular construction. The proof here applies the separately supplied gluing and spectral-identification results; the article's assertion is not used as a premise.
