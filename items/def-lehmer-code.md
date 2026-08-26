---
id: def-lehmer-code
kind: definition
title: "The Lehmer code of a permutation"
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
    - title: "Felix Gotti, MIT 18.211 Combinatorial Analysis, Lecture 5"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/5.%20Permutation%20Inversions%20and%20q-Binomials/Permutation%20Inversions%20and%20q-Binomials.pdf"
pipeline_run: null
---

## Definition

Let $\sigma=[\sigma(0),\dots,\sigma(n-1)] \in S_n$. Its **Lehmer code** is the
tuple

$$L(\sigma)=(\ell_1(\sigma),\dots,\ell_n(\sigma)) \in \prod_{i=1}^{n}\{0,\dots,i-1\},$$

where

$$\ell_i(\sigma) := \big|\{\, q \in n : n-i < q < n \text{ and } \sigma(q)<\sigma(n-i)\,\}\big|.$$

So $\ell_i(\sigma)$ counts how many entries to the right of position $n-i$ are
smaller than the entry in that position. This is the usual inversion table read
from right to left, which is why the $i$-th component ranges from $0$ to $i-1$.

For $n=0$, the Lehmer code is the unique element of the empty product.
