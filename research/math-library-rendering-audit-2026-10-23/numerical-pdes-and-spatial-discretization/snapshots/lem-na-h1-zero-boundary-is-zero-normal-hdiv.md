---
id: lem-na-h1-zero-boundary-is-zero-normal-hdiv
kind: lemma
title: H1-zero fields have zero weak H(div) normal trace
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-na-hdiv-space,
    def-na-h0div-space,
    lem-na-hdiv-weak-normal-trace,
    def-sobolev-space-wkp-and-its-norm,
    def-wkp-zero-as-a-sobolev-closure,
    cor-cauchy-schwarz-inequality-for-l-two,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1.1: H(div) Green formula and
        zero-normal boundary subspace."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div)
        finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.1: zero-normal H(div) fluxes and the H1_0
        test-space setting."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and let $D\subset\mathbb R^d$ be open. Every real vector field $w\in H^1_0(D;\mathbb R^d)$ belongs to $H_0(\operatorname{div};D)$, where the latter is the kernel of the weak normal trace. In particular, $\operatorname{div}w\in L^2(D)$ and its weak normal trace vanishes on the whole boundary trace quotient.

## Facts & Assumptions

**Given:** Countable Choice, an open set $D$, and $w\in H^1_0(D;\mathbb R^d)$.

[A1] Countable Choice selects the compactly supported smooth approximants in the H1-zero closure. ([[def-countable-choice]])

[F1] Each component of $H^1(D;\mathbb R^d)$ has its first weak derivatives in $L^2(D)$; their finite sum is the distributional divergence. ([[def-sobolev-space-wkp-and-its-norm]], [[def-na-hdiv-space]])

[F2] $H^1_0(D)$ is the $H^1$-norm closure of $C_c^\infty(D)$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F3] Green duality defines the weak normal trace by $\langle\gamma_nw,[\phi]\rangle=\int_D(w\cdot\nabla\phi+(\operatorname{div}w)\phi)$. ([[lem-na-hdiv-weak-normal-trace]])

[F4] $H_0(\operatorname{div};D)$ is exactly the kernel of this weak normal trace. ([[def-na-h0div-space]])

[F5] Cauchy–Schwarz controls each volume pairing in Green duality. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 Since each component of $w$ and each first weak derivative is in $L^2(D)$ by [F1], the finite sum $\operatorname{div}w=\sum_{j=1}^d\partial_jw_j$ lies in $L^2(D)$. Thus $w\in H(\operatorname{div};D)$ by its definition. [F1, construct, algebra]

2.1 By [A1,F2], choose vector fields $w_n\in C_c^\infty(D;\mathbb R^d)$ with $w_n\to w$ in $H^1$. For arbitrary $\phi\in H^1(D)$, the weak-derivative identity for $\phi$, tested against each compactly supported component $(w_n)_j$, gives $\int_Dw_n\cdot\nabla\phi+\int_D(\operatorname{div}w_n)\phi=0.$ The H1 convergence implies $w_n\to w$ in $L^2$ and $\operatorname{div}w_n\to\operatorname{div}w$ in $L^2$. Specifically, [F5] bounds the difference of the Green pairings by $\|w_n-w\|_2\|\nabla\phi\|_2+\|\operatorname{div}w_n-\operatorname{div}w\|_2\|\phi\|_2\longrightarrow0.$ Thus $\int_Dw\cdot\nabla\phi+\int_D(\operatorname{div}w)\phi=0$. This holds for every $\phi\in H^1(D)$; hence [F3] gives $\gamma_nw=0$, and [F4] implies $w\in H_0(\operatorname{div};D)$. [A1, F2, F3, F4, F5, choose, algebra] ∎