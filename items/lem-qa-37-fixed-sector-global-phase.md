---
id: lem-qa-37-fixed-sector-global-phase
kind: lemma
title: "Standalone and controlled phase accounting for a fixed-sector braid"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - def-qa-37-phase-reference-cost
  - thm-qc-standalone-global-phase-invariance
  - thm-qc-controlled-global-phase-is-relative-phase
  - lem-qc-tqc-determinant-character-phase
justified_by: []
axiom_use: "None; the scalar identity is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§9.17, global and controlled phase, PDF pp. 61–62."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, common braid phase, PDF pp. 53–57."
---

## Statement

For every Fibonacci braid word $b$ with exponent sum $k$, its physical
operator differs from the normalized operator by the common scalar
$R_1^k$ on every fixed-charge block. On the three-anyon SU(2)-lift alphabet
$zB_j$, the corresponding scalar is $(R_1z^{-1})^k$. The scalar leaves
uncontrolled fixed-sector measurement probabilities unchanged; under a
coherent control it is a relative phase. If the scalar is not $1$, it cannot
be discarded without a phase-reference correction; if it is $1$, the
controlled maps coincide and no correction is needed.

## Facts & Assumptions

**Given:** The fixed Fibonacci $F/R$ convention, a finite Artin word $b$, its
exponent sum $k$, and either an uncontrolled fixed-sector use or a controlled
use.

[F1] The Fibonacci determinant-character supplier proves that exponent sum
records the same $R_1$ scalar on every charge block and that a controlled
scalar becomes relative. [[lem-qc-tqc-determinant-character-phase]]

[F2] An isolated unit-modulus scalar does not change measurement
probabilities. [[thm-qc-standalone-global-phase-invariance]]

[F3] A scalar applied only on the active coherent-control branch can change
measurement probabilities. [[thm-qc-controlled-global-phase-is-relative-phase]]

## Proof

1.1 Let $b=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_m}^{\varepsilon_m}$, where $\varepsilon_j\in\{1,-1\}$. Each generator contributes $R_1$ and its inverse contributes $R_1^{-1}$, so their scalar product is $R_1^{\sum_j\varepsilon_j}=R_1^k$. The Artin relations preserve exponent sum, hence this factor is independent of the word representative by [F1]. For $\widehat B_j=zB_j$, the normalized product contributes $z^k$; solving for the physical matrix gives $(R_1z^{-1})^k\widehat B(b)$. [given, F1, algebra]

2.1 On a standalone fixed sector the factor $\lambda=R_1^k$ (or $\lambda=(R_1z^{-1})^k$ for the lifted alphabet) has modulus one, so [F2] gives identical outcome probabilities. Under coherent control the block maps are $C(W)=\operatorname{diag}(I,W)$ and $C(\lambda W)=\operatorname{diag}(I,\lambda W)$. If $\lambda=1$ they coincide, so no correction is needed; otherwise [F3] gives a measurement witness distinguishing them. The exact scalar and any correction cost must therefore be recorded as in the phase-reference definition. [F1, F2, F3, step 1.1] ∎
