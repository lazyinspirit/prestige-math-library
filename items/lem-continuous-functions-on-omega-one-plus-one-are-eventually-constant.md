---
id: lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant
kind: lemma
title: "Continuous functions on [0, omega_1] are eventually constant"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-first-uncountable-ordinal, def-order-topology-on-an-ordinal, thm-countable-subsets-of-omega-one-are-bounded]
proof_strategy: direct
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Every continuous $f:[0,\omega_1]\to\mathbb R$ or $\mathbb C$ is constant on some terminal interval $[\alpha,\omega_1]$.

## Facts & Assumptions

**Given:** $f$ is continuous and $\mathrm{AC}_\omega$ holds.

[L1] Under $\mathrm{AC}_\omega$, a countable subset of $\omega_1$ is bounded. ([[thm-countable-subsets-of-omega-one-are-bounded]])

## Proof

**Proof technique:** direct.

1.1 For every $n\ge1$, continuity at $\omega_1$ gives an ordinal $\alpha_n<\omega_1$ such that $|f(\beta)-f(\omega_1)|<1/n$ whenever $\alpha_n<\beta\le\omega_1$. [given]

2.1 By [L1], $\alpha=\sup_n(\alpha_n+1)<\omega_1$. If $\beta\in[\alpha,\omega_1]$, then the inequality in step 1.1 holds for every $n$, so $f(\beta)=f(\omega_1)$. [step 1.1, L1] ∎
