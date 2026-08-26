---
id: def-standard-cycle-form-and-foata-fundamental-transformation
kind: definition
title: "Standard cycle form and Foata's fundamental transformation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-disjoint-cycle-decomposition, def-permutation-support-disjoint-cycles-and-cycle-type, def-finite-symmetric-group-and-permutation-notation]
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
    - title: "Andrew Lin, MIT 18.212 Algebraic Combinatorics, Lecture 10"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/0b039163b47d51f947e6fdbea5b99844_MIT18_212S19_lec10.pdf"
pipeline_run: null
---

## Definition

Let $\sigma \in S_n$. Write its disjoint-cycle decomposition
([[thm-disjoint-cycle-decomposition]]) and insert each omitted fixed point as a
one-cycle, as permitted by the cycle-type convention of
[[def-permutation-support-disjoint-cycles-and-cycle-type]]. Then rewrite each
cycle so that its largest entry appears first and order the cycles by increasing
first entry. The result is the **standard cycle form** of $\sigma$.

Deleting the parentheses from that ordered list of cycles produces a word of
length $n$ whose entries are $0,\dots,n-1$ each once. The corresponding
permutation in one-line notation is **Foata's fundamental transformation**
$\mathcal{F}(\sigma)$.

Example: if $\sigma=(0\,3\,1)(2)(4\,5)$, then the standard cycle form is
$(2)(3\,1\,0)(5\,4)$ and $\mathcal{F}(\sigma)=[2,3,1,0,5,4]$.
