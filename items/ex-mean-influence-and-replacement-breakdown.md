---
id: ex-mean-influence-and-replacement-breakdown
kind: example
title: The mean has unbounded influence and 1/n breakdown
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 11
deps:
  - def-finite-sample-replacement-breakdown
  - def-gross-error-sensitivity
  - def-statistical-functional-and-influence-function
  - thm-influence-function-for-m-location-estimator
  - thm-mean-and-median-replacement-breakdown
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
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.3.4, PDF pp. 16–17"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 9–10 and 22"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
---

## Example

Let $F$ be any probability law on $\mathbb R$ with finite first absolute moment $\mu=\int y\,dF(y)$. Its mean functional has $\operatorname{IF}(x)=x-\mu$, so its gross-error sensitivity is infinite. At every fixed sample, its sample mean has replacement breakdown fraction $1/n$.

## Facts & Assumptions

**Given:** A probability law $F$ with $\int|y|\,dF(y)<\infty$, its mean $\mu$, and a fixed sample of size $n\ge1$.

[F1] [[thm-influence-function-for-m-location-estimator]]: for $\psi(u)=u$, the mean's point-contamination influence function is $x-\mu$ for every $x\in\mathbb R$.

[F2] [[def-gross-error-sensitivity]]: $\gamma^*(T,F)$ is the supremum of the absolute influence values on their domain.

[F3] [[thm-mean-and-median-replacement-breakdown]]: the sample mean's replacement breakdown fraction at any fixed sample is $1/n$.

## Verification

1.1 By [F1], the mean influence function exists for every $x\in\mathbb R$ and equals $x-\mu$. [F1]

1.2 The sample-mean replacement breakdown fraction is $1/n$ by [F3], independently of the distribution $F$. [F3]

2.1 The values $|x-\mu|$ are unbounded as $x$ ranges over $\mathbb R$; hence [F2] gives $\gamma^*(T,F)=+\infty$. [F2, step 1.1, algebra]

3.1 Thus in this example the population gross-error sensitivity is infinite, while one arbitrary coordinate replacement already makes the finite-sample mean unbounded. [step 2.1, step 1.2] ∎

