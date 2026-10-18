---
id: def-finite-source-information-density-and-typical-set
title: "Information density and typical sets for a finite source"
kind: definition
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-finite-alphabet-iid-source, def-finite-law-self-information-and-entropy, def-it-information-units-and-logarithm-base, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3, §§3.1–3.3"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf"
verification:
  precheck: n/a
---

## Definition

For the finite-alphabet IID source in
[[def-finite-alphabet-iid-source]], with one-letter law $p$ and block law
$p^n$ from [[def-finite-law-self-information-and-entropy]], let $X^n$ have
that law. Write $H(p)$ for the finite entropy in
[[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. On the
positive-probability support $A_+^n$, define normalized block information
density using the natural-log/nats convention from
[[def-it-information-units-and-logarithm-base]]
$$I_n(x^n):=-\frac1n\ln p^n(x^n).$$
For $\varepsilon>0$, its epsilon-typical set is
$$T_n(\varepsilon):=\{x^n\in A_+^n:|I_n(x^n)-H(p)|\le\varepsilon\}.$$
Sequences of zero probability are excluded, so the definition never takes a
logarithm of zero.
