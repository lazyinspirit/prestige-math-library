---
id: ex-unvalidated-calibration-offset-is-not-identifiable
kind: example
title: "An unvalidated calibration offset leaves the true quantity unidentified"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-scientific-statistical-model-contract
  - def-statistical-experiment
  - def-parametric-statistical-model
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Suppose one instrument reading $R$ is modeled by
$$R=q+b,$$
where $q\in\mathbb R$ is the true quantity and $b\in\mathbb R$ is an
unvalidated calibration offset. Take sample space $(\mathbb R,\mathcal P(\mathbb R))$,
parameter set $\Theta=\mathbb R^2$, and sampling law
$P_{(q,b)}=\delta_{q+b}$. The target is $\psi(q,b)=q$. The recorded reading
determines the sum $q+b$, but the experiment does not separately determine
$q$ and $b$. Thus the unvalidated assumption $b=0$ is not established by this
reading model; an external calibration standard or additional model structure
would be needed to support it.

## Facts & Assumptions

**Given:** The experiment and target just specified, with the offset $b$ unrestricted in $\Theta$.

[F1] [[def-statistical-experiment]]: an experiment consists of a measurable space, a parameter set, and a family of probability measures on that space.

[F2] [[def-parametric-statistical-model]]: a parametric model is the map from its parameter set to the probability measures of its experiment; the map need not be injective.

[F3] [[def-dirac-measure]]: $\delta_x(A)=1$ exactly when $x\in A$ and is zero otherwise.

[F4] [[prop-dirac-measure-is-a-probability-measure]]: a Dirac set function is a probability measure on the chosen sigma-algebra.

[F5] [[def-estimand-on-a-statistical-model]]: an estimand is a specified target-valued function on the parameter set.

[F6] [[def-identifiability-of-an-estimand]]: an estimand is identifiable when equal sampling laws imply equal target values.

[F7] [[def-scientific-statistical-model-contract]]: a formal contract does not prove that a model or calibration assumption is scientifically or physically applicable.

## Verification

1.1 For each $(q,b)\in\Theta$, [F4] makes $P_{(q,b)}$ a probability measure. Hence the family is an experiment by [F1], and its parameter map is a parametric model by [F2]. [given, F1, F2, F4, construct]

1.2 The map $\psi:\Theta\to\mathbb R$, $(q,b)\mapsto q$, is the specified estimand by [F5]. The criterion in [F6] therefore applies to this target. [given, F5, F6]

2.1 For any $(q,b)\in\Theta$, let $(q',b')=(q+1,b-1)$. Both parameter pairs lie in $\Theta$ and $q'+b'=q+b$, so for every $A\subseteq\mathbb R$, $P_{(q,b)}(A)=\mathbf 1_{\{q+b\in A\}}=\mathbf 1_{\{q'+b'\in A\}}=P_{(q',b')}(A)$ by [F3]. But $\psi(q',b')=q+1\ne q=\psi(q,b)$. Thus $\psi$ is not identifiable by [F6]; by [F7], this model conclusion does not establish any physical calibration claim. [given, F3, F6, F7, algebra, step 1.2] ∎

## Remarks

The calibration offset is substantively untestable from this one-reading law alone. If calibration data identify $b$ at a known value $b_0$, or the model fixes $b=b_0$, then the observation $R=q+b_0$ determines $q=R-b_0$ in the resulting model. Additional data or nontrivial restrictions on $b$ may still leave $q$ unidentified. The proof uses no axiom of choice.
