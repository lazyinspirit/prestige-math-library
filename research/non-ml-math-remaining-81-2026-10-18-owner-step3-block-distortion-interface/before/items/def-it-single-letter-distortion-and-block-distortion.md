---
id: def-it-single-letter-distortion-and-block-distortion
kind: definition
title: "Single-letter and block distortion"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
axiom_use: "No choice axiom is used in the definitions."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 2, §2.4 and Chapter 3, §3.2: distortion, block distortion, and expected-performance criteria."
    - title: "MIT OpenCourseWare 6.441, Chapter 23: Rate-distortion theory"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/880c39878ba7dc35a5fbb35758d42a69_MIT6_441S16_chapter_23.pdf"
      locator: "§23.2, Definition 23.1, PDF pp. 7–8 / printed pp. 242–243."
---

## Definition

Let $(\mathcal X,\mathcal A)$ and $(\widehat{\mathcal X},\widehat{\mathcal A})$ be measurable spaces, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,+\infty]$ be a measurable single-letter distortion. For a positive integer $n$, define the normalized additive block distortion by

$$d_n(x^n,\widehat x^n):=\frac1n\sum_{i=0}^{n-1}d(x_i,\widehat x_i).$$

When the alphabets are finite and $d$ is finite-valued, define $d_{\max}:=\max_{x,\widehat x}d(x,\widehat x)$. Expected distortion is $\mathbb E d_n(X^n,\widehat X^n)$; the excess-distortion probability at threshold $D$ is $\mathbb P(d_n(X^n,\widehat X^n)>D)$. These are distinct criteria: one is an expectation and the other is a tail probability.
