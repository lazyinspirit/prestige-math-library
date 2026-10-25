---
id: ex-srswor-census-and-singleton-boundaries
kind: example
title: Census and singleton SRSWOR boundaries
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-simple-random-sampling-without-replacement
  - thm-srswor-mean-variance-and-finite-population-correction
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example

---

## Example

For $U=\{1,2,3\}$ with values $(1,2,4)$, the population mean is $7/3$ and
$S_U^2=7/3$. At a census ($n=3$), the sample mean is fixed and its design
variance is zero. At $n=1$, the sample mean takes values $1,2,4$ equally
often, with variance $14/9$, agreeing with the SRSWOR formula. The usual
sample variance $s^2=(n-1)^{-1}\sum_{i\in S}(y_i-\bar y_S)^2$ is undefined
when $n=1$. A population of size $N=1$ is outside the theorem's $S_U^2$
convention because its denominator $N-1$ is zero.

## Facts & Assumptions

**Given:** $U=\{1,2,3\}$ with fixed values $(1,2,4)$.

[F1] [[def-simple-random-sampling-without-replacement]]: At each admissible
sample size, every subset of that size is equally likely.

[F2] [[thm-srswor-mean-variance-and-finite-population-correction]]: For
$N>1$ and $1\le n\le N$,
$\operatorname{Var}_d(\bar y_S)=(1-n/N)S_U^2/n$.

## Verification

1.1 The population mean is $(1+2+4)/3=7/3$ and $S_U^2=((1-7/3)^2+(2-7/3)^2+(4-7/3)^2)/2=7/3$. At $n=3$, [F1] gives the single sample $U$, so $\bar y_S=7/3$ is constant with variance zero; [F2] gives $(1-3/3)(7/3)/3=0$. [given, F1, F2, algebra]

2.1 At $n=1$, [F1] gives sample means $1,2,4$, each with probability $1/3$; their expectation is $7/3$ and variance is $\frac13((1-7/3)^2+(2-7/3)^2+(4-7/3)^2)=14/9$. Formula [F2] gives $(1-1/3)(7/3)=14/9$. The denominator $n-1$ in $s^2$ is zero, while $N=1$ would make the population-variance denominator zero; neither is substituted into an undefined expression. [given, F1, F2, step 1.1, algebra] ∎