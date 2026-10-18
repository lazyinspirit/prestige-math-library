---
id: def-finite-law-self-information-and-entropy
title: "Self-information and surprisal variance for a finite law"
kind: definition
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
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
---

## Definition

Let $A$ be a nonempty finite alphabet identified with $[m]$, and let $p$ be a
probability vector as in
[[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. Its support
is $A_+:=\{a\in A:p(a)>0\}$. On $A_+$ define self-information
$\imath_p(a):=-\ln p(a)$; set $\imath_p(a)=0$ when $p(a)=0$ only to make a
finite-valued function on all of $A$. Using the finite entropy $H(p)$ from
[[def-qa-35-finite-probability-entropy-and-stochastic-matrices]] and the
natural-logarithm/nats convention from
[[def-it-information-units-and-logarithm-base]], define the surprisal variance
$$V(p):=\sum_{a\in A_+}p(a)(\imath_p(a)-H(p))^2.$$
For $n\ge1$ and $x^n=(x_1,\ldots,x_n)\in A^n$, define the product law
$p^n(x^n):=\prod_{i=1}^np(x_i)$. On its support $A_+^n$, define block
self-information $\imath_{p^n}(x^n):=-\ln p^n(x^n)$. Logarithms use the
natural base, matching the entropy convention in
[[def-qa-35-finite-probability-entropy-and-stochastic-matrices]].
