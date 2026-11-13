---
title: Periodic energy space on an interval
status: draft
research_item: def-se-periodic-space
dependency_level: 0
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 2: ` §1.2, definition of H¹p(−π,π) `

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:ex-trace-of-an-ac-sobolev-function-on-an-interval](https://alphabetamath.cc/item/ex-trace-of-an-ac-sobolev-function-on-an-interval)
- [math:lem-axiom-of-choice-implies-countable-choice](https://alphabetamath.cc/item/lem-axiom-of-choice-implies-countable-choice)
- [math:lem-sobolev-norm-is-well-defined-and-definite](https://alphabetamath.cc/item/lem-sobolev-norm-is-well-defined-and-definite)
- [math:thm-linear-kernel-image-and-injectivity](https://alphabetamath.cc/item/thm-linear-kernel-image-and-injectivity)


## Definition

Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). By [math:lem-axiom-of-choice-implies-countable-choice](https://alphabetamath.cc/item/lem-axiom-of-choice-implies-countable-choice), this implies Countable Choice, as required by the Sobolev interfaces below. Let $I=(-\pi,\pi)$ and write $H^1(I)=W^{1,2}(I;\mathbb C)$: its elements are complex $L^2$ equivalence classes whose first weak derivative also belongs to $L^2(I)$, equipped with the norm $\|v\|_{H^1(I)}=(\|v\|_{L^2(I)}^2+\|v'\|_{L^2(I)}^2)^{1/2}$ [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm). This expression is a well-defined norm by [math:lem-sobolev-norm-is-well-defined-and-definite](https://alphabetamath.cc/item/lem-sobolev-norm-is-well-defined-and-definite), applied with $n=1$, $k=1$, $p=2$ and complex scalars. The periodic energy space is
$$H^1_p(-\pi,\pi)=\{v\in H^1(I):v^*(-\pi)=v^*(\pi)\},$$
with the restricted $H^1(I)$ norm. Here $v^*$ is the unique absolutely continuous representative on $[-\pi,\pi]$ of the class $v$; its endpoint values are the Sobolev traces [math:ex-trace-of-an-ac-sobolev-function-on-an-interval](https://alphabetamath.cc/item/ex-trace-of-an-ac-sobolev-function-on-an-interval).

## Justification

By [math:ex-trace-of-an-ac-sobolev-function-on-an-interval](https://alphabetamath.cc/item/ex-trace-of-an-ac-sobolev-function-on-an-interval), under the stated Axiom of Choice every $v\in H^1(I)$ has a uniquely determined absolutely continuous representative on the closed interval, and the endpoint trace map is linear and bounded. Therefore the equality of its endpoint values is independent of the representative of the $L^2$ class. Define $D:H^1(I)\to\mathbb C$ by $Dv=v^*(-\pi)-v^*(\pi)$. Linearity of the trace gives $D(\alpha u+\beta v)=\alpha Du+\beta Dv$ for $u,v\in H^1(I)$ and $\alpha,\beta\in\mathbb C$. Thus $H^1_p(-\pi,\pi)=\ker D$ is a linear subspace by [math:thm-linear-kernel-image-and-injectivity](https://alphabetamath.cc/item/thm-linear-kernel-image-and-injectivity); the zero class belongs to it. The norm is well defined by restriction of the Sobolev norm in [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm), whose norm axioms and independence of representatives are supplied by [math:lem-sobolev-norm-is-well-defined-and-definite](https://alphabetamath.cc/item/lem-sobolev-norm-is-well-defined-and-definite) under Countable Choice, already obtained from the assumed Axiom of Choice.
