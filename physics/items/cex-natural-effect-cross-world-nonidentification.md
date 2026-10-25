---
id: cex-natural-effect-cross-world-nonidentification
kind: counterexample
title: "Single-world assumptions do not identify natural effects"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-controlled-and-natural-mediation-effects
  - def-natural-effect-identification-assumptions
  - def-identifiability-of-an-estimand
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement refuted

The observed law of $(A,M,Y)$ identifies the natural direct and indirect
effects whenever treatment is randomized, consistency and treatment/mediator
positivity hold, and the same-world mediator–outcome independences
$Y(a,m)\perp\!\!\!\perp M(a)$ hold for each $a,m$, even without a
cross-world restriction.

## Facts & Assumptions

**Given:** The definitions of the natural effects, the single-world conditions
in the statement, and the definition of identifiability.

[F1] $\operatorname{NDE}(a,a')=E[Y(a,M(a'))-Y(a',M(a'))]$ and
$\operatorname{NIE}(a,a')=E[Y(a,M(a))-Y(a,M(a'))]$.
[[def-controlled-and-natural-mediation-effects]]

[F2] Identifiability requires the target to be constant over all full-data
laws with the same observed-data law.
[[def-identifiability-of-an-estimand]]

[F3] The standard formula's additional cross-world restriction is
$Y(a,m)\perp\!\!\!\perp M(a')\mid\sigma(L)$, which is not one of the
single-world assumptions stated above.
[[def-natural-effect-identification-assumptions]]

## Counterexample

**Given:** Binary treatment $A$, mediator $M$, and outcome $Y$.

1.1 In model I, let $A,M(0),M(1),V$ be independent fair Bernoulli variables. In model II, let $A,M(1),V$ be independent fair Bernoulli variables and set $M(0)=V$. In both models define $Y(0,m)=0$ and $Y(1,m)=\mathbf1_{\{V=m\}}$ for $m\in\{0,1\}$. Potential responses define observed $M=M(A)$ and $Y=Y(A,M(A))$, so consistency holds; treatment is randomized and both mediator values have probability $1/2$ in each treatment arm. [given, construct]

2.1 Under $A=0$, $Y=0$ and $M(0)$ is fair in both models. Under $A=1$, $M(1)$ is fair and independent of $V$ in both models, so $Y=\mathbf1_{\{V=M(1)\}}$ is fair and independent of $M(1)$. Thus the conditional observed laws of $(M,Y)$ agree in each treatment arm, and the randomized treatment law is the same; the two models have identical observed laws of $(A,M,Y)$. [step 1.1, algebra]

2.2 The same-world independence holds in both models: for $a=0$ the outcome response $Y(0,m)$ is constant; for $a=1$, $Y(1,m)$ is a function of $V$ and $M(1)$ is independent of $V$. In model I, $M(0)$ is independent of every $Y(1,m)$; in model II, $M(0)=V$ makes $Y(1,m)$ dependent on $M(0)$, so the cross-world restriction in [F3] differs. [F3, step 1.1, algebra]

2.3 In model I, $E[Y(1,M(0))]=1/2$ and $E[Y(1,M(1))]=1/2$; in model II, $E[Y(1,M(0))]=1$ and $E[Y(1,M(1))]=1/2$. Both models have $E[Y(0,M(0))]=0$. By [F1], the natural-effect pairs are $(1/2,0)$ in model I and $(1,-1/2)$ in model II, in the order (NDE, NIE). [F1, step 1.1, algebra]

3.1 The two compatible full-data laws have the same observed law but different natural effects by step 2.3. Therefore the target is not constant on the observational equivalence class in [F2], refuting the stated claim. [F2, step 2.1, step 2.3] ∎

