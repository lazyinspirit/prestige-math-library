---
id: ex-basic-fraenkel-finite-or-cofinite-support-test
kind: example
title: Finite support forces a finite-or-cofinite atom subset
status: published
origin: pipeline
deps: [thm-basic-fraenkel-model]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, §4.3", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

A subset of the basic Fraenkel atoms supported by $E$ is contained in $E$ or contains every atom outside $E$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-basic-fraenkel-model]] gives the full permutation action and finite-support rule.

## Proof

1.1 Let $B\subseteq A$ be supported by finite $E$. If some $a\notin E$ lies in $B$, then for every $b\notin E$ the transposition $(a\ b)$ fixes $E$ and hence $B$, so $b\in B$. Thus $A\setminus E\subseteq B$ and $B$ is cofinite. [F1]

2.1 If no such $a$ exists, then $B\subseteq E$ and $B$ is finite. This includes the vacuous case $A\setminus E=\varnothing$, although it cannot occur when $A$ is infinite and $E$ finite. [F1, step 1.1] ∎
