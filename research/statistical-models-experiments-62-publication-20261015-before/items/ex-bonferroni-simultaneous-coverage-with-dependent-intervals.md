---
id: ex-bonferroni-simultaneous-coverage-with-dependent-intervals
kind: example
title: Simultaneous coverage for dependent interval sets
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-statistical-experiment
  - thm-bonferroni-simultaneous-coverage
  - def-confidence-set-and-coverage
justified_by: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take the location experiment with $\Theta=\mathbb R$ and sample space $(\mathcal X,\mathcal A)=(\mathbb R,\mathcal B(\mathbb R))$: under parameter $\theta$, $X$ equals $\theta+k/10$ with probability $1/10$ for each $k=1,\ldots,10$. For both coordinates set $\psi_i(\theta)=\theta$ and report the interval $C_i(x)=[x-9/10,x]$, $i=1,2$. Each interval has marginal coverage $9/10$. The two coverage events are identical, so their simultaneous coverage is also $9/10$. With $\alpha_1=\alpha_2=1/10$ and $\alpha=1/5$, Bonferroni guarantees at least $4/5$; the bound is conservative here because of perfect dependence.

## Facts & Assumptions

**Given:** The location experiment and two confidence-set procedures in the Example, together with the confidence-set definition and simultaneous-coverage theorem below.

[F1] [[def-statistical-experiment]]: an experiment is a measurable sample space, parameter set, and family of probability measures on that sample space.

[F2] [[def-confidence-set-and-coverage]]: a confidence-set procedure has a measurable membership section for each candidate parameter, and its coverage is the probability that it contains the true parameter.

[F3] [[thm-bonferroni-simultaneous-coverage]]: if $m$ marginal confidence sets have coverage at least $1-\alpha_i$ and $\sum_i\alpha_i\le\alpha$, their joint coverage is at least $1-\alpha$ without an independence assumption.

[A1] The sample space is $(\mathcal X,\mathcal A)=(\mathbb R,\mathcal B(\mathbb R))$. For each $\theta\in\mathbb R$, $P_\theta$ places mass $1/10$ at each of the ten distinct points $\theta+k/10$, $1\le k\le10$; $\psi_1(\theta)=\psi_2(\theta)=\theta$ and $C_1(x)=C_2(x)=[x-9/10,x]$.

## Verification

**Proof technique:** direct finite calculation.

**Given:** The family of ten-point laws, targets, and interval procedures in the Example.

1.1 For each candidate $\eta\in\mathbb R$, the membership section of either interval procedure is $\{x:\eta\in[x-9/10,x]\}=[\eta,\eta+9/10]$, a Borel set, so [F2] applies. Under $P_\theta$, the true value $\theta$ is included exactly for $k=1,\ldots,9$; hence each marginal coverage is $9/10$. [given, A1, F1, F2, algebra]

2.1 The two interval procedures are equal for every observation, so their membership events coincide and joint coverage is $9/10$. Since $\alpha_1+\alpha_2=1/5$, [F3] gives the general lower bound $1-1/5=4/5$, which this example satisfies. The equality of the two events shows that independence is not assumed. [given, A1, F3, step 1.1, algebra] ∎