---
id: lem-common-support-likelihood-ratio-is-measurable
kind: lemma
title: "The common-support likelihood ratio is measurable"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-likelihood-density
  - def-measurable-function-between-measurable-spaces
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 13, §13.1.2, PDF p. 77"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Anna Mikusheva, MIT 14.381 Lecture 9: Uniformly Most Powerful Tests, PDF pp. 2–3"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/0427ff2a36e01927fa4b692a6d60a81a_MIT14_381F18_lec9.pdf"
---

## Statement

Let $p_0,p_1:X\to[0,\infty)$ be finite-valued measurable functions on a
measurable space $(X,\mathcal A)$. Define
$$R(x)=\begin{cases}p_1(x)/p_0(x),&p_0(x)>0,\\0,&p_0(x)=0.\end{cases}$$
Then $R$ is finite-valued, nonnegative, and measurable.

## Facts & Assumptions

**Given:** Finite-valued nonnegative measurable functions $p_0,p_1$.

[F1] [[def-likelihood-density]]: the selected density representatives are
finite-valued, nonnegative, and measurable.

[F2] [[def-measurable-function-between-measurable-spaces]]: inverse images of
Borel sets under a measurable function are measurable.

[F3] [[thm-threshold-characterisations-of-real-and-extended-real-measurability]]:
a real-valued function is measurable if all of its strict superlevel sets
are measurable.

[F4] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: the
product of two finite real-valued measurable functions is measurable.

## Proof

**Proof technique:** direct.

1.1 Define $h(x)=1/p_0(x)$ when $p_0(x)>0$ and $h(x)=0$ when $p_0(x)=0$. It is finite and nonnegative. For $t<0$, $\{h>t\}=X$; for $t=0$, $\{h>t\}=\{p_0>0\}$; for $t>0$, $\{h>t\}=\{0<p_0<1/t\}$. Each set is measurable by [F1] and [F2], so [F3] makes $h$ measurable. [F1, F2, F3, given]

2.1 By [F1] and step 1.1, $p_1h$ is a finite nonnegative measurable function by [F4]. On $\{p_0>0\}$ it equals $p_1/p_0$, and on $\{p_0=0\}$ it is zero. Hence $R=p_1h$ and has all the asserted properties. [F1, F4, step 1.1, algebra] ∎