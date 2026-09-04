---
id: def-field-of-p-adic-numbers
kind: definition
title: "The p-adic numbers as a metric completion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-adic-absolute-value-on-the-rationals, def-metric-completion, thm-metric-completion-exists]
verification:
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
Cauchy-sequence completion constructed in
[[thm-metric-completion-exists]] for the metric

$$d_p(x,y) := |x-y|_p,$$

where $|\cdot|_p$ is the absolute value of
[[def-p-adic-absolute-value-on-the-rationals]]. Thus its points are equivalence
classes of rational $d_p$-Cauchy sequences, two sequences being equivalent when
their termwise distance tends to $0$. The completion datum is taken in the
sense of [[def-metric-completion]], so $\mathbb Q$ comes equipped with its named
dense isometric embedding into $\mathbb Q_p$. The next theorem equips this
complete metric space with the field operations extending those of $\mathbb Q$.
