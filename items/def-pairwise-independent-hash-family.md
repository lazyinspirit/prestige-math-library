---
id: def-pairwise-independent-hash-family
kind: definition
title: "Pairwise independent hash families"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $U$ be a finite set, let $R$ be a nonempty finite set, and let
$\mathcal H$ be a nonempty finite family of functions $h:U\to R$. The family
$\mathcal H$ is **pairwise independent** when for every two distinct inputs
$x,x'\in U$ and every two outputs $y,y'\in R$,

$$\mathbb P_{h\in\mathcal H}\bigl(h(x)=y \text{ and } h(x')=y'\bigr)=\frac{1}{|R|^2},$$

where $h$ is chosen uniformly from $\mathcal H$.

## Remarks

- If $U$ has at least two elements, pairwise independence forces each
  individual value $h(x)$ to be uniform on $R$ by summing over the second
  output coordinate.
- The definition does not require joint independence on triples or larger
  subfamilies of inputs.
- When $|U|<2$, the pairwise condition is vacuous; only the nonempty source and
  target-family hypotheses remain substantive.
