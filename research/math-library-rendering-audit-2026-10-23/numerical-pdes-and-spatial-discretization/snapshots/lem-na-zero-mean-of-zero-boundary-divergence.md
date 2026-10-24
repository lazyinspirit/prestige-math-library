---
id: lem-na-zero-mean-of-zero-boundary-divergence
kind: lemma
title: "Zero mean of the divergence of a zero-boundary field"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    "def-wkp-zero-as-a-sobolev-closure",
    "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
    "def-countable-choice",
    "def-sobolev-space-wkp-and-its-norm",
    "thm-holder-inequality-for-integrals"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and
        inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and
        8.7.1."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ be bounded and open. If $v\in H^1_0(D;\mathbb R^d)$, then $\operatorname{div}v\in L^2(D)$ and $\int_D\operatorname{div}v=0$.

## Facts & Assumptions

**Given:** A bounded open $D$ and a vector field in the $H^1$-closure of $C_c^\infty(D;\mathbb R^d)$.

[A1] Countable Choice permits selecting the H0 test-function approximation sequence used to pass the integral identity to the limit. ([[def-countable-choice]])

[F1] $H^1_0(D)$ is the closure of compactly supported smooth functions in the $W^{1,2}$ norm. ([[def-wkp-zero-as-a-sobolev-closure]])

[F2] First weak derivatives of a $W^{1,2}$ field lie in $L^2$, and its $W^{1,2}$ norm controls their $L^2$ norms. ([[def-sobolev-space-wkp-and-its-norm]])

[F3] On a finite-measure set, $|\int_Dg|\le |D|^{1/2}\|g\|_2$. ([[thm-holder-inequality-for-integrals]])

[F4] Fubini evaluates the integral of each compactly supported coordinate derivative by iterated one-dimensional integration. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

## Proof

1.1 By [F2], each weak derivative $\partial_iv_i$ is in $L^2$, so their finite sum $\operatorname{div}v$ is in $L^2(D)$. [F2, algebra]

1.2 For $v\in C_c^\infty(D;\mathbb R^d)$, each component derivative has integral zero by one-dimensional integration along its coordinate, hence $\int_D\operatorname{div}v=0$. [given, F1, F4]

2.1 By [A1, F1], choose $v_n\in C_c^\infty(D;\mathbb R^d)$ converging to $v$ in $H^1$. Then $\operatorname{div}v_n\to\operatorname{div}v$ in $L^2$ by [F2]. Applying [F3] to the difference shows their integrals converge; the zero integrals in step 1.2 therefore give $\int_D\operatorname{div}v=0$. [A1, F1, F2, F3, step 1.2] ∎
