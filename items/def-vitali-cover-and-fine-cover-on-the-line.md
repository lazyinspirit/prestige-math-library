---
id: def-vitali-cover-and-fine-cover-on-the-line
kind: definition
title: "Vitali covers and fine covers on the real line by closed intervals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Brian S. Thomson, Vitali Coverings and Lebesgue's Differentiation Theorem, Section 2"
      url: "https://classicalrealanalysis.info/documents/Thomson-RAE2003-euclid.rae.1149698567.pdf"
---

## Definition

Let $E \subseteq \mathbb{R}$, and let $\mathcal V$ be a family of bounded closed
nondegenerate intervals [[def-interval]], so every member has the form $[u,v]$
with $u<v$.

We say that $\mathcal V$ is a **fine cover** of $E$ when for every $x \in E$
and every $\delta > 0$ there is an interval $I \in \mathcal V$ such that
$x \in I$ and $|I| < \delta$, where $|[u,v]| := v-u$.

On this page, a **Vitali cover** of $E$ means the same thing: a cover by bounded
closed intervals that shrinks to each covered point. In one dimension this is
the interval form of the ball-language statement.

## Remarks

- The word "fine" emphasizes the shrinking property. An arbitrary interval
  cover of $E$ need not be fine.
- Closed intervals are used because that is the exact one-dimensional form
  proved later on this page; replacing them by balls gives the same theorem on
  the line.
