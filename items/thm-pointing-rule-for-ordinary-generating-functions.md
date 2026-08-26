---
id: thm-pointing-rule-for-ordinary-generating-functions
kind: theorem
title: "Pointing translates to $xA'(x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pointing-of-a-combinatorial-class, def-formal-power-series-derivative, prop-formal-derivative-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $\mathcal{A}$ be a combinatorial class with ordinary generating function

$$A(x) = \sum_{n \ge 0} a_n x^n.$$

Then

$$\operatorname{OGF}(\Theta\mathcal{A}) = xA'(x).$$

## Facts & Assumptions

**Given:** A combinatorial class $\mathcal{A}$ with counting sequence $(a_n)$ and ordinary generating function $A(x)$.

[L1] The formal derivative of $\sum_{n \ge 0} a_n x^n$ is $\sum_{n \ge 1} n a_n x^{n-1}$ ([[def-formal-power-series-derivative]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \ge 0$, every size-$n$ object of $\mathcal{A}$ contributes exactly $n$ pointed objects of size $n$, one for each distinguished position. Hence the size-$n$ layer of $\Theta\mathcal{A}$ has cardinality $n a_n$. [given]

2.1 Therefore $\operatorname{OGF}(\Theta\mathcal{A}) = \sum_{n \ge 0} n a_n x^n = x\sum_{n \ge 1} n a_n x^{n-1} = xA'(x)$, using [L1] for the last equality. [step 1.1, L1, algebra] ∎
