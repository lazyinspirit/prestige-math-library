---
id: cor-annihilator-detects-closure
kind: corollary
title: The annihilator detects the closure of a subspace
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-continuous-annihilator-of-a-subspace, thm-geometric-hahn-banach-for-subspaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Corollary 2.55
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. For every linear subspace $M\subseteq X$,

$$\overline M=\bigcap_{f\in M^\perp}\ker f.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, A linear subspace $M\subseteq X$.

[A1] AC is used through geometric Hahn–Banach [F1] in step 1.2.

[F1] Every point outside $\overline M$ is sent to $1$ by some continuous functional vanishing on $M$ ([[thm-geometric-hahn-banach-for-subspaces]]).

## Proof

**Proof technique:** direct.

1.1 If $z\in\overline M$ and $f\in M^\perp$, continuity of $f$ and $f|_M=0$ give $f(z)=0$. Thus $\overline M$ lies in the intersection. [given]

1.2 If $z\notin\overline M$, [F1] gives $f\in M^\perp$ with $f(z)=1$, so $z$ is absent from the intersection. [F1, given]

2.1 The two inclusions prove the formula. [step 1.1, step 1.2] ∎
