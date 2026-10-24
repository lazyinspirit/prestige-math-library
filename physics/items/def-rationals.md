---
id: def-rationals
kind: definition
title: "The rationals as equivalence classes of pairs of integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integers, thm-int-comm-ring]
justified_by: [lem-rat-equivalence]
aliases: []
landmark: true
short: "ℚ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Definition

On the set of pairs $(a,b)$ with $a, b \in \mathbb{Z}$ and $b \ne 0$, define

$$(a,b) \sim (c,d) \iff ad = cb \quad \text{in } \mathbb{Z}.$$

This is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are
the quotient $\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.

## Remarks

- The pair $(a,b)$ encodes the formal quotient $a/b$; the relation
  $ad = cb$ is "$a/b = c/d$" cleared of denominators, using only the ring
  arithmetic of $\mathbb{Z}$ ([[thm-int-comm-ring]]).
