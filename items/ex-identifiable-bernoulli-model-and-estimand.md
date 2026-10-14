---
id: ex-identifiable-bernoulli-model-and-estimand
kind: example
title: "Identifiable Bernoulli model and parameter target"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps: [def-sigma-algebra, def-measurable-space, def-probability-measure,
       def-statistical-experiment, def-parametric-statistical-model,
       def-estimand-on-a-statistical-model, def-identifiability-of-an-estimand,
       thm-identifiability-iff-constant-on-equivalence-classes]
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
    date: 2026-10-14
---

## Example

Let $\mathcal X=\{0,1\}$ with $\mathcal A=2^{\mathcal X}$, let
$\Theta=[0,1]$, and, for $p\in\Theta$, define
$$
P_p(A):=p\,\mathbf 1_{\{1\in A\}}+(1-p)\,\mathbf 1_{\{0\in A\}}\qquad(A\in\mathcal A),
$$
where each indicator is $1$ when its stated membership holds and $0$
otherwise. This is the Bernoulli model with success probability $p$. Its
parameter is identifiable, and the target $\psi(p)=p$ is identifiable.

## Facts & Assumptions

**Given:** The parameter space is $[0,1]$ and the sample space is $\{0,1\}$.

[F1] [[def-sigma-algebra]]: a sigma-algebra contains the whole space and is closed under complements and countable unions; the full power set satisfies these conditions.

[F2] [[def-measurable-space]]: a measurable space is a set together with a sigma-algebra on it.

[F3] [[def-probability-measure]]: a probability measure is a measure of total mass $1$ on a measurable space.

[F4] [[def-statistical-experiment]]: an experiment assigns a probability measure $P_p$ on the sample measurable space to each parameter $p$.

[F5] [[def-parametric-statistical-model]]: the model map sends $p$ to its sampling law $P_p$.

[F6] [[def-estimand-on-a-statistical-model]]: $\psi(p)=p$ is a function from the parameter set to the target set $[0,1]$.

[F7] [[def-identifiability-of-an-estimand]]: identifiability means equal sampling laws imply equal target values.

[F8] [[thm-identifiability-iff-constant-on-equivalence-classes]]: an identifiable target factors uniquely through the set of sampling laws.

## Verification

**Given:** The finite Bernoulli family and target specified above.

1.1 The full power set contains $\mathcal X$ and is closed under finite unions and complements, so it is an algebra of subsets. Every countable union of its members is still a subset of $\mathcal X$, so it is a sigma-algebra by [F1] and gives a measurable space by [F2]. For any $p\in[0,1]$, both singleton masses $p$ and $1-p$ are nonnegative, and $P_p(\mathcal X)=p+(1-p)=1$. If $(A_n)$ is pairwise disjoint, each of $0$ and $1$ belongs to at most one $A_n$, so $\sum_nP_p(A_n)=p\mathbf1_{\{1\in\cup_nA_n\}}+(1-p)\mathbf1_{\{0\in\cup_nA_n\}}=P_p(\cup_nA_n)$. Hence every $P_p$ is a probability measure by [F3]. [given, F1, F2, F3, F4, algebra]

2.1 If $P_p=P_{p'}$, evaluation on $\{1\}$ gives $p=P_p(\{1\})=P_{p'}(\{1\})=p'$. Thus the model map is injective and equal laws force $\psi(p)=\psi(p')$; the target is identifiable by [F7]. By [F8] it factors uniquely through the set of Bernoulli laws. [F5, F6, F7, F8, algebra] ∎
