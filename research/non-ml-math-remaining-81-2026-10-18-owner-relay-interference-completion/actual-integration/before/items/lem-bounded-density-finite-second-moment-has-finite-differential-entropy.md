---
id: lem-bounded-density-finite-second-moment-has-finite-differential-entropy
kind: lemma
title: Bounded densities with finite second moments have finite differential entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-real-differential-entropy]
aliases: []
proof_strategy: reference-density-integrability
axiom_use: No choice axiom is used; the reference Gaussian density is explicit.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 2, §2.3, differential entropy and Gaussian extremality.
    - title: John Duchi, Lecture Notes on Statistics and Information Theory
      url: https://web.stanford.edu/class/stats311/lecture-notes.pdf
      locator: Chapter 2, §2.1.2, printed pp. 16–17, differential entropy and Gaussian maximum entropy.
---

## Statement

Let $f$ be a Lebesgue probability density on $\mathbb R^d$ with $\|f\|_\infty<\infty$ and $\int |x|^2f(x)\,dx<\infty$. Then $\int f(x)|\ln f(x)|\,dx<\infty$, so the differential entropy in [[def-it-real-differential-entropy]] is a finite real number.

## Facts & Assumptions

**Given:** A Lebesgue probability density $f$ with finite essential supremum and finite second moment.

[F1] [[def-it-real-differential-entropy]]: differential entropy is defined by $h(f)=-\int f\ln f$ in the absolutely integrable case.

## Proof

1.1 Let $q(x)=(2\pi)^{-d/2}e^{-|x|^2/2}$ and $M=\max\{1,\|f\|_\infty\}$. On $\{f>1\}$, $f\ln f\le f\ln M$, so the positive part is integrable. For $t\ge0$, $t\ln(1/t)\le1/e$; with $t=f/q$, this gives $f\ln(q/f)\le q/e$. Thus on $\{f\le1\}$,
$$-f\ln f=f\ln(q/f)-f\ln q\le q/e+f|\ln q|.$$
The right side is integrable because $q$ is a probability density and $|\ln q|$ is bounded by a constant plus $|x|^2/2$. Hence the negative part of $f\ln f$ is integrable. [given, algebra]

1.2 Both parts of $f\ln f$ are integrable by step 1.1. Therefore $\int f|\ln f|<\infty$, and [F1] defines a finite differential entropy. [F1, step 1.1, algebra] ∎
