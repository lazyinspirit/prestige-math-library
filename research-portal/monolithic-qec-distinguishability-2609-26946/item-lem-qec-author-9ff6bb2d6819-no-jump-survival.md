---
title: Finite no-jump propagator and survival identity
status: draft
research_item: lem-qec-author-9ff6bb2d6819-no-jump-survival
dependency_level: 1
sources:
  references:
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative
        dynamics in quantum optics
      url: https://arxiv.org/abs/quant-ph/9702007
      locator: Section IV.C, PDF pp. 46–49, Eqs. (120)–(133), especially (122),
        (124)–(128)
      reading_limits: Read extracted text of Section IV.C, PDF pp. 46–49, and
        inspected the page-47 formula image. These pages describe a cavity
        example and a first-order simulation. They are contextual bibliography,
        not an imported general finite-dimensional existence theorem. The
        finite-matrix arguments and exact record measures below are local
        derivations; no full-paper reading or reconstruction of cited references
        is claimed.
---

## Prerequisites

- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume AC (hence Countable Choice for integration). In the finite GKSL interface set $Q=\sum_aL_a^\dagger L_a$, $B=-iH-Q/2$, $V_t=e^{tB}$, and $S_t(X)=V_tXV_t^\dagger$. A density matrix means a positive matrix of trace one. For a density matrix $\sigma$, let $s_\sigma(t)=\operatorname{Tr}S_t(\sigma)$. Then for every $t\ge0$, $V_t$ is invertible, $0<s_\sigma(t)\le1$, $S_t$ is completely positive, and $s_\sigma'(t)=-\operatorname{Tr}(Q S_t(\sigma))$. If $Q\le rI$ with $r\ge0$, then $e^{-rt}\le s_\sigma(t)\le1$.

## Facts & Assumptions

[F1] Use finite matrices, density matrices and the finite GKSL conventions. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] Bounded matrix exponentials are differentiable groups, with derivative given by multiplication by their generator. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F3] Integrate continuous scalar or finite-dimensional matrix derivatives on compact intervals; Countable Choice is sufficient. [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)

[F4] Adopt AC, including its Countable Choice consequence for the stated integration interface. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Proof

**Given:** The matrices and density matrix in the statement, and $t\ge0$.

**Goal:** Establish positivity, the trace derivative, and the survival bounds.

1.1 The matrix exponential supplier gives $V_t'=BV_t$, $V_t^{-1}=V_{-t}$ and $V_0=I$. For every positive matrix $X$ and every ancilla dimension, conjugation by $V_t$ tensored with the ancilla identity preserves positivity, so $S_t$ is completely positive. In particular $S_t(\sigma)$ is positive and nonzero, since $V_t$ is invertible; its trace is positive. [given, F1, F2, algebra]

2.1 Differentiate the two finite matrix factors and use cyclicity of trace: $s_\sigma'(t)=\operatorname{Tr}((B+B^\dagger)S_t(\sigma))=-\operatorname{Tr}(Q S_t(\sigma))\le0$. Thus $s_\sigma(t)\le s_\sigma(0)=1$. If $Q\le rI$, positivity gives $s_\sigma'(t)\ge-rs_\sigma(t)$, so the derivative of $e^{rt}s_\sigma(t)$ is nonnegative. Integrating this derivative gives $s_\sigma(t)\ge e^{-rt}$. This includes $r=0$ and the empty jump family. [F1, F2, F3, F4, step 1.1, algebra] ∎

## Source notes

Plenio–Knight, Section IV.C, Eqs. (122), (124)–(128), motivates the no-jump/jump split in a cavity example. This item supplies its own finite-matrix argument; no general existence theorem is imported from that example.
