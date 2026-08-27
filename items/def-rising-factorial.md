---
id: def-rising-factorial
kind: definition
title: "The rising factorial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-factorial-and-falling-factorial]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
pipeline_run: null
---

## Definition

For an indeterminate $x$ and $n\in\mathbb{N}$, the **rising factorial** is

$$x^{\overline{0}}:=1,\qquad x^{\overline{n}}:=x(x+1)\cdots(x+n-1)\quad(n\geq1).$$

Thus $x^{\overline{1}}=x$, $x^{\overline{2}}=x(x+1)$, and
$x^{\overline{n}}$ is the upward analogue of the falling factorial notation
introduced in [[def-factorial-and-falling-factorial]].
