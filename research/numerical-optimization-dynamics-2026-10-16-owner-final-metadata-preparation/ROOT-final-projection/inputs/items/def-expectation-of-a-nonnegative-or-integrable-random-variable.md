---
id: def-expectation-of-a-nonnegative-or-integrable-random-variable
kind: definition
title: "Expectation of a nonnegative or integrable random variable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-random-element-and-real-random-variable, def-nonnegative-lebesgue-integral, def-integrable-real-and-complex-functions-and-their-integrals]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Sections 1.4 and 1.6"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 1.6"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf"
---

## Definition

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space.

- If $X:\Omega\to[0,+\infty]$ is measurable, its **expectation** is the
  extended-valued integral
  $$\mathbb E[X]:=\int_\Omega X\,d\mathbb P\in[0,+\infty].$$
- If $X:\Omega\to\mathbb R$ or $X:\Omega\to\mathbb C$ is integrable in the sense
  of [[def-integrable-real-and-complex-functions-and-their-integrals]], its
  **expectation** is again
  $$\mathbb E[X]:=\int_\Omega X\,d\mathbb P,$$
  now a finite real or complex number.

For an integrable real random variable,
$$\mathbb E[X]=\mathbb E[X^+]-\mathbb E[X^-],$$
where $X^+$ and $X^-$ are its positive and negative parts.
