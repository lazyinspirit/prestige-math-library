---
id: def-simple-random-sampling-without-replacement
kind: definition
title: Simple random sampling without replacement
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-finite-population-and-sampling-design
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Shalabh, Sampling Theory, Chapter 2: Simple Random Sampling, PDF pp. 1–4"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter2-sampling-simple-random-sampling.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15

---

## Definition

Let $U$ be a finite population of size $N$. For an integer $n$ with
$1\le n\le N$, **simple random sampling without replacement (SRSWOR) of size
$n$** is the sampling design whose support is
$$\mathcal S=\{s\subseteq U:|s|=n\}$$
and whose probability for every $s\in\mathcal S$ is
$$p_d(s)=\binom{N}{n}^{-1}.$$
Thus exactly $n$ distinct units are sampled and all $n$-element subsets are
equally likely.
