---
id: def-discrete-valuation
kind: definition
title: "Discrete valuations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-valuation-on-a-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Definition 8.7"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (23.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

A **discrete valuation** on a field $K$ is a valuation
$$
v:K\to\mathbb Z\cup\{\infty\}
$$
in the sense of [[def-valuation-on-a-field]] such that the restriction
$v:K^\times\to\mathbb Z$ is surjective.

The adjective "discrete" refers to the value group $\mathbb Z$ with its usual
order.
