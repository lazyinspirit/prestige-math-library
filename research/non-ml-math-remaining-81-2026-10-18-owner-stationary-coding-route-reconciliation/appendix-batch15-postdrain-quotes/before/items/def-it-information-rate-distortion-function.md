---
id: def-it-information-rate-distortion-function
kind: definition
title: "Finite-alphabet information rate-distortion function"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-mutual-information
  - def-it-single-letter-distortion-and-block-distortion
  - lem-it-finite-rate-distortion-minimum-attained
  - thm-it-information-unit-conversion
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the alphabets and channel simplex are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "MIT OpenCourseWare 6.441, Chapter 23: Rate-distortion theory"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/880c39878ba7dc35a5fbb35758d42a69_MIT6_441S16_chapter_23.pdf"
      locator: "§23.2, Definition 23.1, PDF pp. 7–8 / printed pp. 242–243."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §4.1, printed pp. 80–86: finite-alphabet information rate-distortion function."
---

## Definition

Let $\mathcal X,\widehat{\mathcal X}$ be nonempty finite alphabets, let $p$ be a pmf on $\mathcal X$, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,\infty)$ be finite-valued. A test channel is a stochastic matrix $W(\hat x\mid x)$, and its expected single-letter distortion is $\sum_{x,\hat x}p(x)W(\hat x\mid x)d(x,\hat x)$, with block distortion as in [[def-it-single-letter-distortion-and-block-distortion]]. Put $D_{\min}=\sum_xp(x)\min_{\hat x}d(x,\hat x)$. Define, in bits,
$$
R_{p,d}(D):=\begin{cases}\displaystyle\min_{W:\,\mathbb E d(X,\hat X)\le D} I(X;\hat X),&D\ge D_{\min},\\[4pt]+\infty,&D<D_{\min}. \end{cases}
$$
The minimum exists by [[lem-it-finite-rate-distortion-minimum-attained]]. Values are not operational code rates; the finite memoryless coding theorem is a separate claim.
