---
id: def-mean-zero-square-integrable-space
kind: definition
title: Mean-zero square-integrable functions
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-probability-measure
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - lem-expectation-is-independent-of-the-ae-representative
  - cor-cauchy-schwarz-inequality-for-l-two
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2, Lemma 1.8
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §4
      url: https://arxiv.org/pdf/1709.06418
---

## Definition

Let $P$ be a probability measure on $(\mathcal X,\mathcal A)$. Here $L^2(P)$ is the real space of square-integrable measurable functions modulo equality $P$-almost surely, with its usual quotient norm ([[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]). For $f\in L^2(P)$, the integral $Pf:=\int f\,dP$ is finite and independent of the representative: Cauchy–Schwarz on the probability space gives $\int|f|\,dP\le\|f\|_2$, and the expectation of integrable representatives is invariant under almost-sure equality ([[cor-cauchy-schwarz-inequality-for-l-two]], [[lem-expectation-is-independent-of-the-ae-representative]]).

Define the **mean-zero square-integrable space** by

$$L^2_0(P):=\{f\in L^2(P):Pf=0\}.$$

It carries the norm inherited from $L^2(P)$. Countable Choice is not needed for this definition; a later local Hilbert-space argument uses it only to inherit completeness from the library's general $L^2$ Hilbert-space result.
