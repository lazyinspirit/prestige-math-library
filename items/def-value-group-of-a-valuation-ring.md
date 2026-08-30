---
id: def-value-group-of-a-valuation-ring
kind: definition
title: "The value group of a valuation ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-valuation-ring]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Proposition 8.6"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (26.11)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

Let $V\subseteq K$ be a valuation ring ([[def-valuation-ring]]). Its **value
group** is the quotient abelian group
$$
K^\times/V^\times,
$$
written additively, where the group law is induced by multiplication in
$K^\times$.

For $x\in K^\times$, write $\overline x$ for its class in $K^\times/V^\times$.
The intended order is
$$
\overline x\le\overline y \Longleftrightarrow y/x\in V.
$$
The next theorem checks that this order is well defined, total, and
translation-invariant.
