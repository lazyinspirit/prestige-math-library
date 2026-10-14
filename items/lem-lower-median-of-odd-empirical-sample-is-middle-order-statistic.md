---
id: lem-lower-median-of-odd-empirical-sample-is-middle-order-statistic
kind: lemma
title: The lower median of an odd empirical sample is its middle order statistic
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-lower-median-functional
  - lem-finite-empirical-measure-is-a-probability-law
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.2, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 13 and 22"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
---

## Statement

Let $n=2r+1\ge1$ and $x_1,\ldots,x_n\in\mathbb R$. Let $P_n=n^{-1}\sum_i\delta_{x_i}$ be their empirical probability law and write $x_{(1)}\le\cdots\le x_{(n)}$ for the sorted sample. Then the lower median $m(P_n)$ is $x_{(r+1)}$.

## Facts & Assumptions

**Given:** An odd sample size $n=2r+1\ge1$, real observations $x_1,\ldots,x_n$, and their empirical law $P_n$.

[F1] [[lem-finite-empirical-measure-is-a-probability-law]]: $P_n(A)=n^{-1}\sum_i\delta_{x_i}(A)$ is a probability law.

[F2] [[def-lower-median-functional]]: $m(P_n)=\inf\{t:P_n(( -\infty,t])\ge1/2\}$.

## Proof

**Proof technique:** direct.

1.1 If $t<x_{(r+1)}$, at most $r$ sample coordinates are at most $t$. Therefore $P_n(( -\infty,t])\le r/(2r+1)<1/2$, so no such $t$ belongs to the defining set in [F2]. [given, F1, F2, algebra]

1.2 At $t=x_{(r+1)}$, at least $r+1$ sample coordinates are at most $t$. Hence $P_n(( -\infty,t])\ge(r+1)/(2r+1)>1/2$, so $x_{(r+1)}$ belongs to that defining set. [given, F1, F2, algebra]

2.1 Steps 1.1–1.2 show that the defining set has no point below $x_{(r+1)}$ and contains $x_{(r+1)}$ itself. Its infimum is therefore $x_{(r+1)}$, as claimed. [step 1.1, step 1.2] ∎

