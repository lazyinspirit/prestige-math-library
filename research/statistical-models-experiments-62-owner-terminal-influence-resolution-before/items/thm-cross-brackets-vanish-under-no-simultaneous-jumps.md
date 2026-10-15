---
id: thm-cross-brackets-vanish-under-no-simultaneous-jumps
kind: theorem
title: "Cross brackets vanish without simultaneous jumps"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-counting-process-intensity-and-compensator-contract
  - def-optional-and-predictable-brackets-for-counting-processes
  - lem-continuous-predictable-bracket-uniqueness
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 10: Combining Martingales, Stochastic Integrals, and Applications, PDF p. 4"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale3.pdf"
    - title: "P. K. Andersen, Ø. Borgan, R. D. Gill, N. Keiding, Censoring, Truncation and Filtering in Statistical Models Based on Counting Processes, §2, PDF pp. 3–4"
      url: "https://ir.cwi.nl/pub/5993/5993D.pdf"

---

## Statement

Let $N^1,\ldots,N^k$ be simple unit-jump counting processes on one common
filtration, each satisfying the finite-horizon contract of
[[def-counting-process-intensity-and-compensator-contract]] with continuous
compensator $A^i$ and martingale $M^i=N^i-A^i$. If almost surely no two
distinct processes jump at the same time, then for $i\ne j$,
$$[M^i,M^j]_t=0\quad\text{and}\quad\langle M^i,M^j\rangle_t=0\qquad(0\le t\le T).$$
No independence assumption is required.

## Facts & Assumptions

**Given:** Finitely many unit-jump counting processes on a common filtration, continuous compensators, the square-integrable martingale contracts, and pairwise absence of simultaneous jumps almost surely.

[F1] Each $A^i$ is continuous and each $M^i=N^i-A^i$ is a martingale. ([[def-counting-process-intensity-and-compensator-contract]])

[F2] Optional cross brackets are jump-product sums, and predictable cross brackets are continuous predictable finite-variation compensators. ([[def-optional-and-predictable-brackets-for-counting-processes]])

[F3] Continuous predictable brackets in this class are unique. ([[lem-continuous-predictable-bracket-uniqueness]])

[A1] AC is inherited through the martingale and conditional-expectation interface. ([[def-axiom-of-choice]])

## Proof

1.1 For every $s$, continuity of each $A^i$ gives $\Delta M^i_s=\Delta N^i_s$. The no-simultaneous-jump hypothesis therefore gives $\Delta M^i_s\Delta M^j_s=0$ for every $s$ and every $i\ne j$, outside one probability-zero event. By the optional cross-variation definition in [F2], $[M^i,M^j]_t=\sum_{s\le t}\Delta M^i_s\Delta M^j_s=0$ for all $t\le T$. [F1, F2, given]

2.1 The zero process is continuous, predictable, has finite variation, and satisfies $[M^i,M^j]-0=0$, which is a martingale. Thus it is a continuous predictable cross-bracket candidate. Uniqueness [F3] implies $\langle M^i,M^j\rangle=0$. The proof uses the common filtration for the component martingale contracts and uses no independence. [A1, F2, F3, step 1.1] ∎

## Source notes

Tian states zero cross brackets under a no-simultaneous-jump hypothesis;
Andersen–Borgan–Gill–Keiding impose the same condition for multivariate
counting processes. The argument here proves both zero bracket identities
directly from the jump-sum and predictable-compensator definitions.
