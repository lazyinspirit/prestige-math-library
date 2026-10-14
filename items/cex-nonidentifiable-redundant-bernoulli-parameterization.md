---
id: cex-nonidentifiable-redundant-bernoulli-parameterization
kind: counterexample
title: "A redundant Bernoulli parameterization has a nonidentifiable coordinate"
status: draft
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
  role: counterexample
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

## Statement refuted

For every parametric statistical model with parameter $(u,v)\in\Theta\subseteq
[0,1]^2$, the first-coordinate target $\psi(u,v)=u$ is identifiable.

## Facts & Assumptions

**Given:** The parameter set $\Theta$, finite sample space, law family and target stated above.

[F1] [[def-sigma-algebra]]: a sigma-algebra contains the whole space and is closed under complements and countable unions; the full power set satisfies these conditions.

[F2] [[def-measurable-space]]: a measurable space is a set together with a sigma-algebra on it.

[F3] [[def-probability-measure]]: a probability measure has total mass $1$ and is countably additive on measurable sets.

[F4] [[def-statistical-experiment]]: an experiment is a parameter-indexed family of probability measures on the sample measurable space.

[F5] [[def-parametric-statistical-model]]: each parameter is sent to its sampling law $P_{u,v}$.

[F6] [[def-estimand-on-a-statistical-model]]: the first coordinate $\psi(u,v)=u$ is a function to $[0,1]$.

[F7] [[def-identifiability-of-an-estimand]]: an estimand is identifiable only if equal sampling laws imply equal target values.

[F8] [[thm-identifiability-iff-constant-on-equivalence-classes]]: identifiability is equivalent to a unique factorization of the target through the set of model laws.

## Counterexample

Take $\mathcal X=\{0,1\}$ with $\mathcal A=2^{\mathcal X}$ and
$$
\Theta:=\{(u,v)\in[0,1]^2:u+v\le1\}.
$$
For each $(u,v)\in\Theta$, define
$$
P_{u,v}(A):=(u+v)\,\mathbf 1_{\{1\in A\}}+(1-u-v)\,\mathbf 1_{\{0\in A\}}\qquad(A\in\mathcal A),
$$
and set $\psi(u,v)=u$. The law depends only on the sum, while the target is
the first coordinate.

**Given:** The redundant two-parameter Bernoulli family and first-coordinate target stated above.

1.1 The full power set contains $\mathcal X$ and is closed under finite unions and complements, so it is an algebra of subsets. Every countable union of its members is still a subset of $\mathcal X$, so it is a sigma-algebra by [F1] and gives a measurable space by [F2]. For every $(u,v)\in\Theta$, both masses $u+v$ and $1-u-v$ are nonnegative and sum to $1$. In a pairwise disjoint sequence of events, each singleton $\{0\}$ and $\{1\}$ appears at most once, so the displayed formula is countably additive. Thus $P_{u,v}$ is a probability measure by [F3], and the family is an experiment by [F4]. [given, F1, F2, F3, F4, algebra]

2.1 The points $(u,v)=(1/5,1/2)$ and $(u',v')=(3/10,2/5)$ have coordinates in $[0,1]$, and their sums are $1/5+1/2=2/10+5/10=7/10$ and $3/10+2/5=3/10+4/10=7/10\le1$, so both belong to $\Theta$. Both measures assign $7/10$ to $\{1\}$ and $3/10$ to $\{0\}$; the four events $\varnothing,\{0\},\{1\},\mathcal X$ consequently have probabilities $0,3/10,7/10,1$ under both laws, so $P_{u,v}=P_{u',v'}$. But $\psi(u,v)=1/5\ne3/10=\psi(u',v')$. By [F7], $\psi$ is not identifiable; by [F8], it cannot factor through the model-law set. [given, F5, F6, F7, F8, algebra] ∎
