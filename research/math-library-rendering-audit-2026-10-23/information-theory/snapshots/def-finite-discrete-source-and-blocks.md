---
id: def-finite-discrete-source-and-blocks
kind: definition
title: "Finite discrete sources and product blocks"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
strategy: "Define a finite full-support probability vector and its normalized finite product block law."
axiom_use: "No choice axiom is used; the alphabet and all probability sums are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§§4.1–4.3, finite source alphabet and probability mass function"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 0–1, discrete memoryless source model"
---
## Definition

A **finite discrete source** is an integer $m\ge1$ and a probability vector $p=(p_1,\ldots,p_m)$ on the alphabet $\mathcal X=[m]=\{1,\ldots,m\}$ such that $p_i>0$ for every $i$. Here a probability vector has nonnegative entries summing to one, as in [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]; the strict positivity convention means that $\mathcal X$ is the source support. In particular, the one-symbol source has $m=1$ and $p_1=1$.

For $n\ge1$, a **block of length $n$** is a word $x^n=(x_1,\ldots,x_n)\in\mathcal X^n$. Its product probability is
$$p^n(x^n):=\prod_{t=1}^n p_{x_t}.$$
Finite distributivity gives $\sum_{x^n\in\mathcal X^n}p^n(x^n)=(\sum_{i=1}^m p_i)^n=1$, so $p^n$ is again a probability vector and has full support. When coding blocks, use lexicographic order on $\mathcal X^n$; listing its $m^n$ words in that order identifies the block alphabet with $[m^n]$ for the code conventions below. Blocks are the only memoryless-source objects used on this page.
