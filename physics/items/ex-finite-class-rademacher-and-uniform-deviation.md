---
id: ex-finite-class-rademacher-and-uniform-deviation
kind: example
title: "A two-function class on a Bernoulli sample"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-empirical-process-and-rademacher-process
  - def-one-sided-empirical-rademacher-complexity
  - thm-finite-class-uniform-deviation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Example

Let $\mathcal X=\{0,1\}$ with $P(\{0\})=P(\{1\})=1/2$. Let $Z\sim P$, and take the two-function class $\mathcal F=\{f_0,f_1\}$ with $f_0(x)=0$ and $f_1(x)=x$.

## Facts & Assumptions

**Given:** The Bernoulli probability space, the observation $Z$, and the class $\mathcal F$.

[F1] $Pf=\int f\,dP$, $P_1f=f(Z)$, and the empirical Rademacher process is $\sigma f(Z)$ ([[def-empirical-process-and-rademacher-process]]).

[F2] For one observation, $\widehat{\mathfrak R}_{(Z)}(\mathcal F)=\mathbb E_\sigma\sup_{f\in\mathcal F}\sigma f(Z)$ ([[def-one-sided-empirical-rademacher-complexity]]).

[F3] A finite nonempty class of measurable $[0,1]$-valued functions satisfies $$P\left(\sup_{f\in\mathcal F}|P_nf-Pf|\ge\epsilon\right)\le2|\mathcal F|e^{-2n\epsilon^2}$$ for every $\epsilon>0$ ([[thm-finite-class-uniform-deviation]]).

## Proof

**Given:** The sample and class of the Example.

1.1 Direct evaluation gives $Pf_0=0$, $Pf_1=1/2$, $P_1f_0=0$, and $P_1f_1=Z$. Hence $\sup_{f\in\mathcal F}|P_1f-Pf|=|Z-1/2|=1/2$ for both possible observations. [F1, given, algebra]

2.1 If $Z=0$, then $\sup_f\sigma f(Z)=0$ for either sign. If $Z=1$, then $\sup_f\sigma f(Z)=\max(0,\sigma)$, whose uniform-sign expectation is $1/2$. Thus $\widehat{\mathfrak R}_{(Z)}(\mathcal F)=Z/2$ and its expectation over the sample is $1/4$. [F2, step 1.1, algebra]

3.1 Applying [F3] with $n=1$ and $|\mathcal F|=2$ gives $$P\left(\sup_{f\in\mathcal F}|P_1f-Pf|\ge\epsilon\right)\le4e^{-2\epsilon^2}$$ for every $\epsilon>0$. At $\epsilon=1/2$ the event has probability one by step 1.1, and the displayed estimate is the stated finite-class guarantee for this class. [F3, step 1.1] ∎
