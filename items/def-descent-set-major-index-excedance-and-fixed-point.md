---
id: def-descent-set-major-index-excedance-and-fixed-point
kind: definition
title: "Descent sets, major index, excedances and fixed points of a permutation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-permutation-statistics-conventions]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "Andrew Lin, MIT 18.212 Algebraic Combinatorics, Lecture 10"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/0b039163b47d51f947e6fdbea5b99844_MIT18_212S19_lec10.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ and let $\sigma=[\sigma(0),\dots,\sigma(n-1)] \in S_n$.

The **descent set** of $\sigma$ is

$$\operatorname{Des}(\sigma) := \{\, i \in \{0,\dots,n-2\} : \sigma(i)>\sigma(i+1)\,\},$$

and the **descent number** is

$$\operatorname{des}(\sigma) := |\operatorname{Des}(\sigma)|.$$

Its **major index** is

$$\operatorname{maj}(\sigma) := \sum_{i \in \operatorname{Des}(\sigma)} (i+1).$$

The shift by $1$ is the convention fixed in
[[rem-permutation-statistics-conventions]].

The **excedance set** of $\sigma$ is

$$\operatorname{Exc}(\sigma) := \{\, i \in n : \sigma(i)>i\,\},$$

and the **excedance number** is

$$\operatorname{exc}(\sigma) := |\operatorname{Exc}(\sigma)|.$$

For later use, the **anti-excedance set** is

$$\operatorname{AExc}(\sigma) := \{\, i \in n : \sigma(i)<i\,\},$$

and the **fixed-point set** is

$$\operatorname{Fix}(\sigma) := \{\, i \in n : \sigma(i)=i\,\}.$$
