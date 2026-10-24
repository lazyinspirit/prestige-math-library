---
id: ex-mediator-confounding-invalidates-natural-effects-formula
kind: example
title: "Mediator confounding changes the natural-effect functional"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-controlled-and-natural-mediation-effects
  - def-natural-effect-identification-assumptions
  - thm-natural-effect-identification-under-cross-world-independence
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $A$ be randomized with probabilities $1/2,1/2$, independently of
$U\sim\operatorname{Bernoulli}(1/5)$. Set
$$M=A\mathbin{\mathrm{xor}}U,\qquad Y=A+U.$$
The mediator and outcome share the unmeasured cause $U$. The true nested
responses are $M(a)=a\mathbin{\mathrm{xor}}U$ and $Y(a,m)=a+U$; the outcome
does not respond to an intervention on $M$. Both treatment arms have positive
probability for each mediator value.

## Facts & Assumptions

**Given:** The definitions of natural effects and the observed-data functional
in the mediation formula.

[F1] $\operatorname{NDE}(a,a')=E[Y(a,M(a'))-Y(a',M(a'))]$ and
$\operatorname{NIE}(a,a')=E[Y(a,M(a))-Y(a,M(a'))]$.
[[def-controlled-and-natural-mediation-effects]]

[F2] The mediation functional uses the observed conditional outcome mean
$\mu_a(m)=E[Y\mid A=a,M=m]$ averaged over the mediator law at the reference
treatment; it identifies the nested mean only under the stated assumptions.
[[thm-natural-effect-identification-under-cross-world-independence]]

[F3] The natural-effect formula requires no unmeasured mediator–outcome
confounding and the cross-world restriction, as well as positivity.
[[def-natural-effect-identification-assumptions]]

## Verification

**Given:** The full-data construction in the Example and treatment levels
$a=1$, $a'=0$.

1.1 Consistency holds by construction. For each $a$, $M(a)$ takes both values with positive probability because $0<P(U=1)<1$; treatment is randomized and both treatment levels have positive probability. However, $U$ affects both $M(a)$ and $Y(a,m)$, so the no-unmeasured mediator–outcome-confounding condition in [F3] fails. [given, F3, algebra]

1.2 The true nested means are $E[Y(1,M(0))]=E[1+U]=6/5$, $E[Y(1,M(1))]=6/5$, and $E[Y(0,M(0))]=E[U]=1/5$. Thus [F1] gives $\operatorname{NDE}(1,0)=1$ and $\operatorname{NIE}(1,0)=0$. [F1, algebra]

1.3 The observed mediator probabilities are $Q_0(1)=1/5$ and $Q_0(0)=4/5$. At $A=0$, $M=U$ and $Y=U$, so $\mu_0(0)=0$, $\mu_0(1)=1$. At $A=1$, $M=1-U$ and $Y=1+U$, so $\mu_1(0)=2$, $\mu_1(1)=1$. The observed-data functional therefore gives $\widetilde\theta(1,0)=(4/5)2+(1/5)1=9/5$, while $\widetilde\theta(0,0)=1/5$ and $\widetilde\theta(1,1)=6/5$. [F2, given, algebra]

2.1 Its resulting contrasts are $\widetilde{\operatorname{NDE}}(1,0)=8/5$ and $\widetilde{\operatorname{NIE}}(1,0)=-3/5$, different from the true values in step 1.2. This computes the formula's observed-data functional but does not apply the identification assertion, whose assumptions fail by step 1.1. [F2, step 1.1, step 1.2, step 1.3, algebra] ∎

