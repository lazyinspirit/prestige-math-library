---
id: lem-signorini-rigid-motion-controlled-by-dirichlet-segment
kind: lemma
title: "A planar rigid motion is controlled by its trace on a segment"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-signorini-partial-trace-space,
    thm-lp-trace-operator-on-a-bounded-c-one-domain,
    def-axiom-of-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Walter Zulehner, Numerical Methods for Continuum Mechanics 1, complete
        80-page lecture notes"
      url: "https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf"
      locator: "Chapter 2 §2.1, printed pp. 22–25: the kernel of the symmetric
        gradient and coercivity for a positive-measure Dirichlet part; the
        stated kernel and coercivity results there are in three dimensions."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 53: Stokes
        equations: Basic ideas"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
      locator: "§§53.1–53.2.1, printed pp. 391–394: the symmetric-gradient tensor
        and the positive-measure Dirichlet velocity space."
verification:
  precheck: pass
---

## Statement

Let $\Gamma_D$ be a fixed straight segment of length $L>0$ in the geometry of [[def-signorini-partial-trace-space]]. For every planar infinitesimal rigid motion $r(x)=a+\omega Jx$, where $a\in\mathbb R^2$, $\omega\in\mathbb R$, and $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, there is a constant $C=C(\Omega,\Gamma_D)$ such that
$$\|r\|_{H^1(\Omega)}\le C\|T_Dr\|_{L^2(\Gamma_D)}.$$

## Facts & Assumptions

**Given:** A bounded polygon $\Omega$, a straight Dirichlet segment $\Gamma_D$ of positive length, and an affine rigid motion $r(x)=a+\omega Jx$.

[F1] On $H^1$ fields with a representative extending continuously to the closed Dirichlet collar $\overline{U_D}$, $T_D$ agrees with that extension's boundary restriction to $\Gamma_D$; in particular this holds for fields in $H^1(\Omega;\mathbb R^2)\cap C(\overline\Omega;\mathbb R^2)$. ([[def-signorini-partial-trace-space]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[A1] The Axiom of Choice is inherited through the fixed C1 trace interface defining $T_D$. ([[def-axiom-of-choice]], [[def-signorini-partial-trace-space]])

## Proof

**Proof technique:** direct.

**Given:** $x(s)=x_0+s\tau$ parametrizes $\Gamma_D$ by arclength for $0\le s\le L$, with $|\tau|=1$, and $r(x)=a+\omega Jx$.

1.1 The globally affine rigid motion $r$ is continuous on $\overline{U_D}$, so [F1] identifies $T_Dr$ with its boundary restriction. Put $A:=a+\omega Jx_0$ and decompose $A=A_\parallel J\tau+A_\perp$ with $A_\perp\cdot J\tau=0$. Since $J$ is a quarter-turn, $r(x(s))=A+\omega sJ\tau$. Integrating the two orthogonal components and completing the square in $\int_0^L(A_\parallel+\omega s)^2ds$ gives $\|T_Dr\|_{L^2(\Gamma_D)}^2=L|A_\perp|^2+L(A_\parallel+\omega L/2)^2+\omega^2L^3/12$. [A1, F1, given, algebra]

2.1 The last term of step 1.1 controls $|\omega|^2$, the first controls $|A_\perp|^2$, and the middle term together with $|\omega|$ controls $|A_\parallel|^2$; hence $|A|+|\omega|\le C_L\|T_Dr\|_{L^2(\Gamma_D)}$. Because $a=A-\omega Jx_0$ and $\Omega$ is bounded, direct integration of $r$ and its constant gradient gives $\|r\|_{H^1(\Omega)}\le C_\Omega(|a|+|\omega|)\le C(\Omega,\Gamma_D)\|T_Dr\|_{L^2(\Gamma_D)}$. If the trace vanishes, this also forces $a=0$ and $\omega=0$. [A1, F1, step 1.1, given, algebra] ∎
