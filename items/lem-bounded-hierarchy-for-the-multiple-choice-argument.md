---
id: lem-bounded-hierarchy-for-the-multiple-choice-argument
kind: lemma
title: "A bounded hierarchy for the multiple-choice argument"
status: published
origin: pipeline
deps: ["def-cumulative-hierarchy-stages", "prop-cumulative-hierarchy-transitivity-and-growth", "thm-foundation-equivalent-to-hierarchy-exhaustion", "lem-omega-least-limit-ordinal", "def-ordinal-addition", "thm-ordinal-arithmetic-monotonicity"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, Theorem 9.1(b), p.134; bounded hierarchy used in the proof"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
    - title: "Caicedo, Some choiceless results (5), powersets-of-ordinals theorem and hierarchy proof"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
---

## Statement

In ZF, for every set $A$ there is a limit ordinal $\theta$ such that
$A\subseteq V_\theta$.

## Facts & Assumptions

**Given:** A set $A$.

[F1] The cumulative hierarchy consists of set-sized, transitive, increasing
stages ([[def-cumulative-hierarchy-stages]],
[[prop-cumulative-hierarchy-transitivity-and-growth]]).

[F2] Foundation implies that every set belongs to some cumulative-hierarchy
stage ([[thm-foundation-equivalent-to-hierarchy-exhaustion]]).

[F3] $\omega$ is a limit ordinal, and for every ordinal $\beta$ the ordinal
$\beta+\omega$ is a limit ordinal with $\beta\leq\beta+\omega$
([[lem-omega-least-limit-ordinal]], [[def-ordinal-addition]],
[[thm-ordinal-arithmetic-monotonicity]]).

## Proof

**Proof technique:** direct.

1.1 By hierarchy exhaustion, choose an ordinal $\beta$ with $A\in V_\beta$. [F2]

2.1 The stage $V_\beta$ is transitive, so $A\in V_\beta$ implies $A\subseteq V_\beta$. [step 1.1, F1]

3.1 Put $\theta=\beta+\omega$. Then $\theta$ is a limit ordinal and $\beta\leq\theta$; monotonicity of the hierarchy gives $V_\beta\subseteq V_\theta$, hence $A\subseteq V_\theta$. [step 2.1, F1, F3] ∎
