---
id: def-fixed-length-lossless-block-code
title: "Deterministic fixed-length binary block code and block error"
kind: definition
status: published
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
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3, §3.2"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 5: Codes, Kraft Inequality, and Optimal Codes"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/a8525ccc542cccf186535efcf673ab36_MIT6_441S10_lec05.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix the finite-alphabet IID source in [[def-finite-alphabet-iid-source]] with
alphabet $A$ and one-letter probability vector $p$ from
[[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]; its finite block law is
$p^n$ in [[def-finite-law-self-information-and-entropy]]. For $n\ge1$ and an
integer $k_n\ge0$, a deterministic fixed-length binary
block code is a pair of maps
$$f_n:A^n\to\{0,1\}^{k_n},\qquad g_n:\{0,1\}^{k_n}\to A^n.$$
Every transmitted binary string has exactly $k_n$ bits. Its block error
probability and rate in nats per source symbol are defined using
[[def-it-information-units-and-logarithm-base]]:
$$e_n:=\mathbb P(g_n(f_n(X^n))\ne X^n),\qquad R_n:=\frac{k_n\ln2}{n}.$$
A sequence of such codes achieves rate $R$ if $e_n\to0$ and
$\limsup_{n\to\infty}R_n\le R$.
