---
id: ex-treatment-induced-mediator-outcome-confounding-invalidates-natural-effects-formula
kind: example
title: "A treatment-induced mediator–outcome confounder breaks the formula"
status: draft
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
---

## Example

Let $A\sim\operatorname{Bernoulli}(1/2)$, $U\sim\operatorname{Bernoulli}(1/2)$,
and $W\sim\operatorname{Bernoulli}(1/5)$ be mutually independent. Define the
post-treatment variable $Z=AU$, mediator $M=Z\mathbin{\mathrm{xor}}W$, and
outcome $Y=Z+M$. Thus $Z$ is caused by treatment and causes both $M$ and $Y$;
it is a treatment-induced mediator–outcome confounder. Treatment and mediator
positivity hold for both treatment levels and mediator values.

## Facts & Assumptions

**Given:** The definitions of natural effects and the observed-data functional
in the mediation formula.

[F1] $\operatorname{NDE}(a,a')=E[Y(a,M(a'))-Y(a',M(a'))]$ and
$\operatorname{NIE}(a,a')=E[Y(a,M(a))-Y(a,M(a'))]$.
[[def-controlled-and-natural-mediation-effects]]

[F2] The mediation functional averages the observed conditional outcome mean
under one treatment over the mediator law under the reference treatment.
[[thm-natural-effect-identification-under-cross-world-independence]]

[F3] The standard formula excludes a treatment-induced post-treatment common
cause of mediator and outcome.
[[def-natural-effect-identification-assumptions]]

## Verification

**Given:** The full-data construction in the Example and treatment levels
$a=1$, $a'=0$.

1.1 Under interventions, $Z(a)=aU$, $M(a)=aU\mathbin{\mathrm{xor}}W$, and $Y(a,m)=aU+m$. Hence the true nested means are $E[Y(1,M(0))]=E[U+W]=7/10$, $E[Y(1,M(1))]=E[U]+E[M(1)]=1$, and $E[Y(0,M(0))]=E[W]=1/5$. By [F1], the true natural effects are $\operatorname{NDE}(1,0)=1/2$ and $\operatorname{NIE}(1,0)=3/10$. [F1, given, algebra]

1.2 At $A=0$, $M=W$ and $Y=M$, so $Q_0(1)=1/5$ and $\mu_0(m)=m$. At $A=1$, $M=U\mathbin{\mathrm{xor}}W$ is fair. The joint probabilities $P(U=1,M=1\mid A=1)=2/5$ and $P(U=1,M=0\mid A=1)=1/10$ give $\mu_1(1)=9/5$ and $\mu_1(0)=1/5$. Thus $Q_1(0)=Q_1(1)=1/2$. [given, algebra]

2.1 The observed-data functional gives $\widetilde\theta(1,0)=(1/5)(9/5)+(4/5)(1/5)=13/25$, $\widetilde\theta(1,1)=(1/2)(9/5)+(1/2)(1/5)=1$, and $\widetilde\theta(0,0)=1/5$. Its direct and indirect contrasts are therefore $8/25$ and $12/25$, not the true $1/2$ and $3/10$ from step 1.1. The functional is computable, but the identification theorem does not apply because the post-treatment common cause $Z$ violates [F3]. [F2, F3, step 1.1, step 1.2, algebra] ∎

