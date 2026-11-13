---
title: Homogeneous half-derivative local smoothing
status: draft
research_item: prop-se-2-2-homogeneous
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 7: ` (2.3) `; PDF p. 8: ` Proposition 3.1; (3.6) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, $\Theta\subset\mathbb R^n$ is nonempty and compact with smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and $\Theta$ is non-trapping. Write $\Delta_D$ for the Dirichlet Laplacian, $H_D^s(\Omega)$ for the spectral scale of $I-\Delta_D$, and $W(t)=e^{it\Delta_D}$ for its evolution group. Let $\eta\in C_c^\infty(\mathbb R^n)$ be a smooth, compactly supported, possibly complex-valued function, restricted to $\Omega$ when used as a multiplier.

For every $s\in[0,1]$ there is a constant $C>0$, depending on the obstacle, $\eta$ and $s$ but independent of $T$ and $v_0$, such that for all $T>0$ and $v_0\in H_D^s(\Omega)$,

$$\int_0^T\|\eta W(t)v_0\|_{H_D^{s+1/2}(\Omega)}^2\,dt\le C\|v_0\|_{H_D^s(\Omega)}^2.$$

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[prop-se-scale-flow](item-prop-se-scale-flow)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The exterior and smooth-boundary conventions are those of [def-se-geometry](item-def-se-geometry). Non-trapping uses complete rays: for every complete unit-speed admissible generalized reflected or glancing ray $x:\mathbb R\to\overline\Omega$ and every compact $K\subset\mathbb R^n$, there is $t\ge0$ with $x(t)\notin K$ [def-se-nontrapping](item-def-se-nontrapping).

[F2] Under the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), the scale is the completion defined by spectral powers of $I-\Delta_D$ [def-se-dirichlet-scale](item-def-se-dirichlet-scale), and $W(t)=e^{it\Delta_D}$ is its strongly continuous unitary evolution [prop-se-scale-flow](item-prop-se-scale-flow). The time norm $L^2(0,T;H_D^{s+1/2})$ is the Bochner norm defined in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F3] The imported homogeneous exterior smoothing estimate [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing) applies on this non-trapping exterior, for every compact smooth cutoff and $0\le s\le1$. It bounds $\|\eta e^{it\Delta_D}v_0\|_{L^2(0,T;H_D^{s+1/2})}$ by a constant independent of $T$ times $\|v_0\|_{H_D^s}$.

## Proof

[F1] The exterior and smooth-boundary conventions are those of [def-se-geometry](item-def-se-geometry). Non-trapping uses complete rays: for every complete unit-speed admissible generalized reflected or glancing ray $x:\mathbb R\to\overline\Omega$ and every compact $K\subset\mathbb R^n$, there is $t\ge0$ with $x(t)\notin K$ [def-se-nontrapping](item-def-se-nontrapping).

[F2] Under the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), the scale is the completion defined by spectral powers of $I-\Delta_D$ [def-se-dirichlet-scale](item-def-se-dirichlet-scale), and $W(t)=e^{it\Delta_D}$ is its strongly continuous unitary evolution [prop-se-scale-flow](item-prop-se-scale-flow). The time norm $L^2(0,T;H_D^{s+1/2})$ is the Bochner norm defined in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F3] The imported homogeneous exterior smoothing estimate [prop-se-import-bgt-local-smoothing](item-prop-se-import-bgt-local-smoothing) applies on this non-trapping exterior, for every compact smooth cutoff and $0\le s\le1$. It bounds $\|\eta e^{it\Delta_D}v_0\|_{L^2(0,T;H_D^{s+1/2})}$ by a constant independent of $T$ times $\|v_0\|_{H_D^s}$.



**Given:** The geometry, Choice assumption, cutoff, order, time and initial datum in the statement.

**Goal:** Establish the displayed squared integral estimate with a constant independent of $T$ and the datum.

1.1 The geometry and non-trapping assumptions in [F1], the Choice assumption, the cutoff and the order satisfy the hypotheses of [F3]. Its spectral spaces and evolution are the spaces and group fixed in [F2]. Therefore there is $C_0>0$, independent of $T$ and $v_0$, such that $\|\eta W(t)v_0\|_{L^2(0,T;H_D^{s+1/2})}\le C_0\|v_0\|_{H_D^s}$. [given, F1, F2, F3]

2.1 Square the inequality in step 1.1 and use the definition of the Bochner $L^2$ norm in [F2]. Taking $C=C_0^2$ gives the stated integral inequality, with the same independence from $T$ and $v_0$. [F2, step 1.1] ∎

## Source notes

The article states the homogeneous estimate at (2.3) and restates it as Proposition 3.1, equation (3.6); its citation here is attribution. The proof above uses the independently sourced smoothing supplier, whose source record states its reading limits.
