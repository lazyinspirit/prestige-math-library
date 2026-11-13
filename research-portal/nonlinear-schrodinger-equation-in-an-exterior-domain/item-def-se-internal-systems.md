---
title: Linear and nonlinear internally controlled exterior systems
status: draft
research_item: def-se-internal-systems
dependency_level: 7
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 4: ` (1.8)–(1.9) `; PDF p. 13: ` (3.16)–(3.17) `

## Prerequisites

- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Definition

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and let its exterior $\Omega=\mathbb R^n\setminus\Theta$ be connected. Choose $R>0$ with $\Theta\subset B_R(0)$ and a smooth real cutoff $\varphi$ which is zero on $|x|\le R$, positive on $|x|>R$, and one on $|x|\ge R+1$. Put $\omega=\{x\in\Omega:|x|>R\}$ and let $T>0$.

For a control $h$, write $Kh=\varphi h$. For $m\in\{3,5\}$ and $\lambda\in\mathbb R\setminus\{0\}$, write $g(v)=\lambda|v|^{m-1}v$. The nonlinear internally controlled system with initial state $v_0$ is

$$i\partial_t v+\Delta v+g(v)=Kh\quad\text{in }\Omega\times(0,T),\qquad v|_{\partial\Omega}=0,\qquad v(0)=v_0.$$

The linear internally controlled system with initial state $z_0$ is

$$i\partial_t z+\Delta z=\varphi h\quad\text{in }\Omega\times(0,T),\qquad z|_{\partial\Omega}=0,\qquad z(0)=z_0.$$

Here $\Delta$ is the spatial Laplacian. The case $m=3$ is the cubic system and $m=5$ is its quintic counterpart. The forcing is localized: whenever $h$ is locally integrable, $Kh$ vanishes almost everywhere outside $\omega$ and its space-time support relative to $\Omega\times[0,T]$ lies in $\overline\omega\times[0,T]$. The control $h$ itself need not be localized.

These equations specify systems, not an existence or uniqueness assertion. In a distributional solution class the interior equation means equality on compactly supported smooth space-time test functions, provided every term, including $g(v)$, is defined as a distribution. Initial and boundary conditions must be interpreted in the trace or evolution sense appropriate to the chosen solution class; an interior distributional identity alone supplies neither trace. When states are specified in the Dirichlet scale, $H_D^\sigma(\Omega)$ denotes the spectral scale associated with $I-\Delta_D$; in particular $H_D^1(\Omega)=H_0^1(\Omega)$ and $H_D^2(\Omega)=H^2(\Omega)\cap H_0^1(\Omega)$.

## Definition references

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Justification

The geometry, cutoff and region are supplied by [def-se-control-cutoffs](item-def-se-control-cutoffs). Since $\varphi$ vanishes outside $\omega$, its product with a locally integrable control vanishes there; the closure in the support statement allows contact with $|x|=R$. The formulas for $K$ and $g$ specify pointwise multiplication wherever the stated functions are defined, without asserting that a nonlinear expression exists for an arbitrary distribution.

The distributional convention and its explicit limitation concerning initial and boundary traces are those of [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation). The scale and the displayed identifications are those of [def-se-dirichlet-scale](item-def-se-dirichlet-scale), under the Axiom of Choice recorded in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). The equations impose the indicated conditions once a solution class makes them meaningful; the definition does not assert that such a solution exists.

## Source notes

The article is cited for the controlled equations and notation in (1.8), (1.9), (3.16), and (3.17). The independent suppliers above fix the cutoff, scale, and distributional terminology; the article citation is attribution, not a proof of those prerequisites.
