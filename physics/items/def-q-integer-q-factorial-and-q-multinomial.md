---
id: def-q-integer-q-factorial-and-q-multinomial
kind: definition
title: "The $q$-integer, $q$-factorial and $q$-multinomial coefficients"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Andrew Lin, MIT 18.212 Algebraic Combinatorics, Lecture 9"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/82adaee5af270067f5fcf1f96bb2510b_MIT18_212S19_lec9.pdf"
    - title: "Felix Gotti, MIT 18.211 Combinatorial Analysis, Lecture 5"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/5.%20Permutation%20Inversions%20and%20q-Binomials/Permutation%20Inversions%20and%20q-Binomials.pdf"
pipeline_run: null
---

## Definition

For $n \in \mathbb{N}$, the **$q$-integer** is

$$[n]_q := 1+q+\cdots+q^{n-1},$$

with $[0]_q:=0$.

The **$q$-factorial** is

$$[n]_q! := \prod_{i=1}^{n}[i]_q,$$

so $[0]_q!:=1$.

If $k_1,\dots,k_r \in \mathbb{N}$ satisfy $k_1+\cdots+k_r=n$, the
**$q$-multinomial coefficient** is

$$\binom{n}{k_1,\dots,k_r}_q := \frac{[n]_q!}{[k_1]_q!\cdots[k_r]_q!}.$$

These are polynomials in $\mathbb{Z}[q]$ once the integrality theorems of the
page are proved; at this point they are formal expressions to be identified by
their counting roles.
