---
id: def-it-operational-rate-distortion-function
kind: definition
title: "Fixed-length operational rate-distortion functions"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-it-single-letter-distortion-and-block-distortion
justified_by: []
aliases: []
axiom_use: "No choice axiom is used in the definition."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 3, §§3.2–3.4, printed pp. 54–69: finite-block rate-distortion converse and stationary-ergodic block-code conventions."
    - title: "MIT OpenCourseWare 6.441, Chapter 23: Rate-distortion theory"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/880c39878ba7dc35a5fbb35758d42a69_MIT6_441S16_chapter_23.pdf"
      locator: "§23.2, Definition 23.1 and Theorem 23.2, PDF pp. 7–8 / printed pp. 242–243."
---

## Definition

Let $X_0,X_1,\ldots$ be a source over a finite alphabet $\mathcal X$, let $\widehat{\mathcal X}$ be finite, and let $d$ be finite-valued. An $n$-block fixed-length code with $M_n$ messages is a deterministic encoder $f_n:\mathcal X^n\to[M_n]$ and decoder $g_n:[M_n]\to\widehat{\mathcal X}^{\,n}$; its reconstruction is $\widehat X^n=g_n(f_n(X^n))$, its block distortion is [[def-it-single-letter-distortion-and-block-distortion]], and its rate is $n^{-1}\log_2M_n$ bits per source symbol.

Define the expected-distortion operational rate $R_{\mathrm{op}}^{\mathrm{avg}}(D)$ as the infimum of $\limsup_n n^{-1}\log_2M_n$ over code sequences satisfying $\limsup_n\mathbb E d_n(X^n,\widehat X^n)\le D$. Define the positive-slack excess-distortion operational rate $R_{\mathrm{op}}^{\mathrm{slack}}(D)$ by the same rate infimum over code sequences satisfying

$$\text{for every }\varepsilon>0,\qquad \mathbb P\!\left(d_n(X^n,\widehat X^n)>D+\varepsilon\right)\longrightarrow0.$$

The expected and positive-slack excess criteria are separate definitions. An exact-threshold condition $\mathbb P(d_n>D)\to0$ is not part of either definition.
