---
id: lem-bounded-variable-lower-tail-from-mean
kind: lemma
title: "A lower-tail bound from a bounded mean"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §3.4, Lemma 3.22"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Statement

On any probability space, if a random variable $Z$ satisfies $0\le Z\le1$ almost surely and $0\le t<1$, then
$$\Pr\{Z>t\}\ge\frac{\mathbb E Z-t}{1-t}.$$

## Statement references

[Mohri et al., Foundations of Machine Learning, 2nd ed., Lemma 3.22](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1)

## Facts & Assumptions

**Given:** A random variable $Z\in[0,1]$ almost surely and a real number $t\in[0,1)$.

[A1] The probability and expectation are taken with respect to the given probability measure.

## Proof

1.1 Splitting the expectation on $\{Z\le t\}$ and $\{Z>t\}$ and using $Z\le t$ on the first event and $Z\le1$ on the second gives $\mathbb E Z\le t\Pr\{Z\le t\}+\Pr\{Z>t\}=t+(1-t)\Pr\{Z>t\}$. [A1, algebra]

2.1 Since $1-t>0$, rearranging the inequality in step 1.1 gives $\Pr\{Z>t\}\ge(\mathbb E Z-t)/(1-t)$. [A1, step 1.1, algebra] ∎
