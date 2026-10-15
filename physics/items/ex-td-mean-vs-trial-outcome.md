---
id: ex-td-mean-vs-trial-outcome
kind: example
domain: physics
library: physics
title: Positive ensemble mean with a negative realization
status: published
origin: pipeline
dependency_level: 8
deps:
  - rem-td-fluctuation-model-hypotheses
  - lem-expectation-by-distribution
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
dependency_roles:
  rem-td-fluctuation-model-hypotheses: formulation-prerequisite
  lem-expectation-by-distribution: mathematical-premise
  def-finite-probability-space-and-event: mathematical-premise
  def-finite-real-random-variable-and-distribution: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: A two-outcome probability model for an illustrative entropy-valued random variable; it is not a specified physical fluctuation law or reported observation.
sources:
  references: []
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Let $\Omega=\{\omega_+,\omega_-\}$ with weights $w(\omega_+)=3/4$ and $w(\omega_-)=1/4$. Both weights are nonnegative and sum to $1$, so $(\Omega,w)$ is a finite probability space as defined in [[def-finite-probability-space-and-event]]. For every event $A\subseteq\Omega$, write $P(A)=\sum_{\omega\in A}w(\omega)$ for its event probability. Let $Y:\Omega\to\mathbb R$ be given by $Y(\omega_+)=2a$ and $Y(\omega_-)=-2a$, where $a>0$ and the values are numerical values in the unit $\mathrm{J\,K^{-1}}$. By [[def-finite-real-random-variable-and-distribution]], $Y$ is a finite-valued real random variable on this finite probability space, so its expectation is a finite sum. The label $Y$ is only an illustrative entropy-valued variable; this example adopts no physical path law.

This arithmetic example illustrates the distinction in [[rem-td-fluctuation-model-hypotheses]].

## Facts & Assumptions

**Given:** The two-outcome model and assignments stated above.

[F1] [[lem-expectation-by-distribution]]: for a real random variable on a finite probability space, $\mathbb E[Y]=\sum_{y\in Y(\Omega)}yP(Y=y)$.

[F2] [[def-finite-probability-space-and-event]]: nonnegative weights summing to $1$ define a finite probability space, and each event probability is the sum of its outcome weights.

[F3] [[def-finite-real-random-variable-and-distribution]]: every function from a finite probability space to $\mathbb R$ is a finite-valued real random variable.

[A1] The assignments are $w(\omega_+)=3/4$, $w(\omega_-)=1/4$, $Y(\omega_+)=2a$, $Y(\omega_-)=-2a$, and $a>0$.

## Verification

**Given:** [F1]–[F3] and [A1].

1.1 The two values of $Y$ are distinct because $a>0$. By [F2]–[F3], $Y$ is a real random variable on the stated finite probability space, so [F1] gives $\mathbb E[Y]=(3/4)(2a)+(1/4)(-2a)=a>0$. Its unit is $\mathrm{J\,K^{-1}}$. [F1, F2, F3, A1, algebra]

1.2 The event $\{\omega\in\Omega:Y(\omega)<0\}$ is exactly $\{\omega_-\}$, so by [F2] its probability is $P(Y<0)=1/4>0$. [F2, A1, algebra]

2.1 Steps 1.1 and 1.2 exhibit a positive mean together with a negative realization of nonzero probability. Therefore positivity of an ensemble mean alone does not imply a nonnegative value in every trial. The example is not a fluctuation theorem or a claim about measured entropy production. [step 1.1, step 1.2, algebra] ∎
