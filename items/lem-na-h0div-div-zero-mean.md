---
id: lem-na-h0div-div-zero-mean
kind: lemma
title: Zero mean of the divergence under zero normal trace
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-na-hdiv-space,
    def-na-h0div-space,
    lem-na-hdiv-weak-normal-trace,
    def-sobolev-space-wkp-and-its-norm,
    prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets,
    thm-holder-inequality-for-integrals,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1.1, Green formula (2.1.16) and the
        definition of H0(div)."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div)
        finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.1 facet-normal flux convention and H(div)
        boundary interpretation."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ be bounded and open. If $v\in H_0(\operatorname{div};D)$, then $\operatorname{div}v\in L^1(D)$ and
$$\int_D\operatorname{div}v\,dx=0.$$

## Facts & Assumptions

**Given:** Countable Choice, a bounded open set $D$, and $v$ with zero weak normal trace.

[A1] Countable Choice is inherited from the Sobolev and trace-quotient interfaces. ([[def-countable-choice]])

[F1] $H_0(\operatorname{div};D)$ is the kernel of the weak normal trace. ([[def-na-h0div-space]])

[F2] Green duality defines $\langle\gamma_n v,[w]\rangle=\int_D(v\cdot\nabla w+(\operatorname{div}v)w)$. ([[lem-na-hdiv-weak-normal-trace]])

[F3] Bounded sets have finite Lebesgue measure, so the constant function $1$ belongs to $L^2(D)$ and has zero weak gradient in $H^1(D)$. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[def-sobolev-space-wkp-and-its-norm]])

[F4] Holder's inequality implies $\|g\|_{L^1(D)}\le |D|^{1/2}\|g\|_{L^2(D)}$ for $g\in L^2(D)$. ([[thm-holder-inequality-for-integrals]])

[F5] The divergence of an H(div) field belongs to $L^2(D)$. ([[def-na-hdiv-space]])

## Proof

1.1 Since $\operatorname{div}v\in L^2(D)$ by [F5], and $|D|<\infty$ by [F3], [F4] shows $\operatorname{div}v\in L^1(D)$. The constant class $1$ is an admissible element of $H^1(D)$ by [F3] and the definition of the weak Sobolev norm, so its trace class $[1]$ lies in $T_D$. [A1, F3, F4, F5, construct]

2.1 Apply [F2] with $w=1$. Since $\nabla1=0$, Green duality gives $\langle\gamma_n v,[1]\rangle=\int_D\operatorname{div}v\,dx$. [F2, step 1.1, algebra]

3.1 By [F1], $\gamma_n v=0$ as an element of $T_D'$ acting on $T_D$, so its value at $[1]\in T_D$ is zero. The identity in step 2.1 therefore gives $\int_D\operatorname{div}v=0$. [F1, step 2.1] ∎