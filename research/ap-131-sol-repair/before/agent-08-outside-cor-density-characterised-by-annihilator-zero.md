---
id: cor-density-characterised-by-annihilator-zero
kind: corollary
title: Density is characterized by a zero annihilator
status: published
origin: pipeline
deps: [cor-annihilator-detects-closure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Corollary 2.56
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Statement

A linear subspace $M\subseteq X$ is dense if and only if $M^\perp=\{0\}$.

## Facts & Assumptions

**Given:** A linear subspace $M\subseteq X$.

[F1] $\overline M=\bigcap_{f\in M^\perp}\ker f$ ([[cor-annihilator-detects-closure]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ is dense, [F1] says every $f\in M^\perp$ vanishes on $X$, hence is zero. [F1, given]

2.1 If $M^\perp=\{0\}$, the intersection in [F1] is $X$, so $\overline M=X$ and $M$ is dense. [F1, given] ∎
