---
id: def-field-of-p-adic-numbers
kind: definition
title: "The p-adic numbers as a metric completion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-adic-absolute-value-on-the-rationals, thm-metric-completion-exists]
verification:
  audited: 2026-09-04
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 8"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes8.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Definition

Let $p$ be a prime. The **space of $p$-adic numbers** $\mathbb Q_p$ is the
Cauchy-sequence quotient and metric constructed in assertions 1--4 of
[[thm-metric-completion-exists]] for the metric

$$d_p(x,y) := |x-y|_p,$$

where $|\cdot|_p$ is the absolute value of
[[def-p-adic-absolute-value-on-the-rationals]]. Thus its points are equivalence
classes of rational $d_p$-Cauchy sequences, two sequences being equivalent when
their termwise distance tends to $0$. Assertions 1--4 are choice-free and give
$\mathbb Q_p$ its metric and its named dense isometric embedding of $\mathbb Q$.
The general theorem's Countable-Choice-dependent completeness assertion is not
used in this definition. The next theorem equips this metric space with the
field operations extending those of $\mathbb Q$ and proves its completeness
choice-free from the fixed countable enumeration of $\mathbb Q$.
