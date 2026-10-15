---
id: cex-zero-average-treatment-effect-does-not-imply-fisher-sharp-null
kind: counterexample
title: "Zero average effect need not be a Fisher sharp null"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-finite-randomized-treatment-assignment-model
  - def-fisher-sharp-null-and-predeclared-test-orderings
  - def-finite-population-average-treatment-effect-and-weak-null
justified_by: []
strategy: "Use two units with individual treatment effects +1 and -1: their average is zero although both units' outcomes change with treatment."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
---

## Statement refuted

In a binary no-interference treatment model, a zero finite-population
average treatment effect implies the Fisher sharp null.

## Facts & Assumptions

**Given:** Two units with binary treatment vector $z=(z_1,z_2)$ in
$\mathcal Z=\{(0,0),(1,0),(0,1),(1,1)\}$, assignment probability $1/4$ at
each vector, and fixed responses $Y_1(z)=z_1$ and $Y_2(z)=-z_2$.

[F1] [[def-finite-randomized-treatment-assignment-model]]: $Y_i(z)$ is the
fixed response of unit $i$ under assignment $z$; assignment probability is
separate from this schedule.

[F2] [[def-finite-population-average-treatment-effect-and-weak-null]]: the
weak null is zero average of the unit-level effects in the no-interference
binary-treatment submodel.

[F3] [[def-fisher-sharp-null-and-predeclared-test-orderings]]: the Fisher
sharp null requires each unit's response to be invariant over every allowed
assignment.

## Counterexample

1.1 Under the stated no-interference schedule, unit 1's treatment effect is $Y_1(1)-Y_1(0)=1$, while unit 2's is $Y_2(1)-Y_2(0)=-1$. Their finite-population average from [F2] is $(1+(-1))/2=0$. The four assignment weights are nonnegative and sum to one, so they define a valid finite assignment law. [given, F1, F2, algebra]

2.1 But $Y_1(0,0)=0\ne1=Y_1(1,0)$ and $Y_2(0,0)=0\ne-1=Y_2(0,1)$. Thus both units' responses vary across allowed assignments, contrary to [F3]. The average-effect null [F2] does not imply the Fisher sharp null. [F2, F3, step 1.1, algebra] ∎