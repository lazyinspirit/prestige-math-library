---
id: cor-density-characterised-by-annihilator-zero
kind: corollary
title: Density is characterized by a zero annihilator
status: published
origin: pipeline
deps: [def-axiom-of-choice, cor-annihilator-detects-closure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Corollary 2.56
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-outside-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. A linear subspace $M\subseteq X$ is dense if and only if $M^\perp=\{0\}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, A linear subspace $M\subseteq X$.

[A1] AC is used through annihilator closure [F1] in step 2.1.

[F1] $\overline M=\bigcap_{f\in M^\perp}\ker f$ ([[cor-annihilator-detects-closure]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ is dense, [F1] says every $f\in M^\perp$ vanishes on $X$, hence is zero. [F1, given]

2.1 If $M^\perp=\{0\}$, the intersection in [F1] is $X$, so $\overline M=X$ and $M$ is dense. [F1, given] ∎
