---
id: ex-bounded-sample-mean-under-replacement
kind: example
title: "Bounded sample-mean change under replacements and a common corrupted sample"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-adversarial-sample-replacement
  - def-huber-contamination-model
  - def-identically-distributed-and-iid-random-variables
  - def-statistical-experiment
  - def-measurable-space
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.2, PDF pp. 10–12"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
---

## Example

For integers $N\ge1$ and $0\le k\le N$, if $x_i,y_i\in[0,1]$ and at most $k$ coordinates differ, then
$$
\left|N^{-1}\sum_{i=1}^N y_i-N^{-1}\sum_{i=1}^N x_i\right|\le k/N.
$$
For the coupling example, take $\mathcal X=\Theta=\{0,1\}$ with their full power-set sigma-algebras ([[def-measurable-space]]) and the experiment $P_\theta=\delta_\theta$ ([[def-statistical-experiment]], [[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]). For $N=2$ and replacement fraction $\eta=1/2$, the clean samples $(0,0)$ and $(1,1)$ can both be changed to $(0,1)$ with one replacement, so the two parameter values induce the same observed law.

## Facts & Assumptions

**Given:** Clean iid samples and a sample-replacement coupling as defined in [[def-adversarial-sample-replacement]].

[F1] [[def-adversarial-sample-replacement]]: the clean vector is iid and the mismatch count is at most $\lfloor\eta N\rfloor$ almost surely; the adversary may depend on the clean sample.

[F2] [[def-huber-contamination-model]]: under the Huber model the observed coordinates are iid from one common mixture law.

[F3] [[def-measurable-space]], [[def-statistical-experiment]], [[def-dirac-measure]], and [[prop-dirac-measure-is-a-probability-measure]]: the two-point experiment on full power sets has clean law $\delta_\theta$ at each $\theta\in\{0,1\}$, so its size-two clean iid samples are $(0,0)$ and $(1,1)$ almost surely.

## Verification

1.1 Let $I=\{i:x_i\ne y_i\}$, with $|I|\le k$. Since $x_i,y_i\in[0,1]$, each changed coordinate satisfies $|y_i-x_i|\le1$, and $\left|N^{-1}\sum_i(y_i-x_i)\right|=\left|N^{-1}\sum_{i\in I}(y_i-x_i)\right|\le |I|/N\le k/N$. [given, algebra]

1.2 Use a one-point probability space for each coupling. By [F3], at parameter $0$ the clean iid sample is $(0,0)$; set the observed vector to $(0,1)$. At parameter $1$ the clean sample is $(1,1)$; set the observed vector to $(0,1)$. Each coupling changes exactly one of two coordinates, which is the allowed $\lfloor(1/2)2\rfloor=1$ replacement, so both observed laws are the same point mass. [F1, F3, given, construct]

2.1 A rule that sees only the observed vector receives the same value $(0,1)$ under both parameter laws, so it cannot identify both parameters. The observed vector is not iid: its first coordinate is $0$ almost surely and its second is $1$ almost surely, whereas [F2] requires identical coordinate laws. Thus this replacement mechanism is distinct from iid Huber contamination. [F1, F2, step 1.2, algebra] ∎
