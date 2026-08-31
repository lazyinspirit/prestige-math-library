---
id: def-time-and-space-constructible-function
kind: definition
title: "Time-constructible and space-constructible functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-asymptotic-resource-comparison, def-effective-binary-encoding-and-decoder]
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $t,s:\mathbb N\to\mathbb N$.

The function $t$ is **time-constructible** when there exists a deterministic
machine $C_t$ such that, on unary input $1^n$, the machine halts within
$O(t(n))$ steps and outputs the binary numeral $\operatorname{bin}(t(n))$.

The function $s$ is **space-constructible** when there exists a deterministic
machine $C_s$ such that, on unary input $1^n$, the machine halts while using
$O(s(n))$ tape cells and outputs the binary numeral $\operatorname{bin}(s(n))$.

On this page, whenever a constructible bound is used to clock another machine,
we also require the evident size condition
$$ n\le t(n) $$
for large enough $n$, so that the budget is at least large enough to read an
input of length $n$.

## Remarks

- The definition records that the bound can itself be written down within the
  same asymptotic resource scale.

- Standard polynomial and exponential time bounds that are eventually at least
  linear are time-constructible in this sense. Under the all-tapes space
  convention used here, no logarithmic-space claim is made: for example, a
  unary-input constructor for $\lceil\log_2(n+1)\rceil$ must reach the
  endmarker whenever it distinguishes the relevant input lengths, and therefore
  visits $\Omega(n)$ input-tape cells. The same input-reading obstruction makes
  an unbounded logarithmic bound non-time-constructible here.
