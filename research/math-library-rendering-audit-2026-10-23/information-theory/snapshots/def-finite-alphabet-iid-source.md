---
id: def-finite-alphabet-iid-source
title: "Finite-alphabet IID source"
kind: definition
status: published
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-finite-law-self-information-and-entropy, def-identically-distributed-and-iid-random-variables, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $A$ be a nonempty finite alphabet identified with $[m]$, and let $p$ be
a probability vector in the sense of
[[def-qa-35-finite-probability-entropy-and-stochastic-matrices]].
A finite-alphabet IID source consists of random elements
$X_i:(\Omega,\mathcal F,\mathbb P)\to A$, $i\ge1$, on one probability space,
which are independent and identically distributed in the sense of
[[def-identically-distributed-and-iid-random-variables]] and have common law
$p$. For every $n\ge1$, the finite vector $X^n=(X_1,\ldots,X_n)$ then has
probability $\mathbb P(X^n=x^n)=p^n(x^n)$ for each $x^n\in A^n$, with $p^n$
as in [[def-finite-law-self-information-and-entropy]].
