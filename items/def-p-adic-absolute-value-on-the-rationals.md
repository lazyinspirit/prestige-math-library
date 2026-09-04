---
id: def-p-adic-absolute-value-on-the-rationals
kind: definition
title: "The p-adic absolute value on the rationals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-p-adic-valuation-on-q]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 5"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes5.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Definition

Let $p$ be a prime. For $x \in \mathbb Q$ define

$$|0|_p := 0,\qquad |x|_p := p^{-v_p(x)} \quad (x \ne 0),$$

where $v_p$ is the rational $p$-adic valuation of
[[lem-p-adic-valuation-on-q]]. In particular,

$$|p|_p = p^{-1}.$$
