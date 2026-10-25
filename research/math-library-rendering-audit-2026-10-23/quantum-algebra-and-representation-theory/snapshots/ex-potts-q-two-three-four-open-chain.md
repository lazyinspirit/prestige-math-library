---
id: ex-potts-q-two-three-four-open-chain
kind: example
title: "The Q = 2, 3, 4 Potts chains use three distinct q normalizations"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-potts-open-chain-clock-shift-representation
  - lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb
justified_by: []
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.2–2.1.4, PDF pp. 4–6: explicit Q=2,3,4 clocks, shifts, and parameters."
---

## Statement

For $Q=2,3,4$, the loop values and corresponding parameters are respectively $(\delta,q)=(\sqrt2,e^{i\pi/4})$, $(\sqrt3,e^{i\pi/6})$, and $(2,1)$. On each site the odd generator is $\sqrt Q|+\rangle\langle+|$; on adjacent sites the even generator is $\sqrt Q\sum_{a=0}^{Q-1}|aa\rangle\langle aa|$. For $L$ Potts sites the open Hamiltonian contains exactly $L+(L-1)=2L-1$ generators.

## Facts & Assumptions

**Given:** The clock and shift matrices and the generator formulas from [[def-potts-open-chain-clock-shift-representation]].

[F1] $M_Q^Q=R_Q^Q=I$; the displayed odd and even generators use one odd term per site and one even term per neighboring pair. ([[def-potts-open-chain-clock-shift-representation]])

[F2] These generators satisfy the Temperley–Lieb square, adjacent triple and distant commutation relations at loop value $\sqrt Q$. ([[lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb]])

## Proof

**Given:** $Q\in\{2,3,4\}$ and $L\ge1$.

1.1 The geometric sum $Q^{-1}\sum_r M_Q^r$ is the rank-one projection onto $|+\rangle=Q^{-1/2}\sum_a|a\rangle$, and $Q^{-1}\sum_rR_1^rR_2^{-r}=\sum_a|aa\rangle\langle aa|$. Multiplying these projections by $\sqrt Q$ gives the stated explicit generators. From the assigned $q$ values, $q+q^{-1}=2\cos(\pi/4)=\sqrt2$, $2\cos(\pi/6)=\sqrt3$, and $2\cos0=2$. [F1, given, algebra]

2.1 There are $L$ odd indices $2j-1$ for $1\le j\le L$ and $L-1$ even indices $2j$ for $1\le j<L$. Their total is $2L-1$, with no additional term at the boundary. The relation verification is [F2], so each listed case has the declared open-chain Temperley–Lieb normalization. [F1, F2, step 1.1, algebra] ∎
