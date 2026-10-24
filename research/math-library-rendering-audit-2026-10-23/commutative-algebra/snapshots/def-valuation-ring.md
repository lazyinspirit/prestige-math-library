---
id: def-valuation-ring
kind: definition
title: "Valuation rings"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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
    - title: "M. Mustata, Commutative Algebra, Definition 8.4"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Definition (26.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

Let $K$ be a field. A subring $V\subseteq K$ is a **valuation ring of $K$** if
for every $x\in K^\times$ at least one of $x$ and $x^{-1}$ belongs to $V$.

Thus a valuation ring decides each nonzero element of the ambient field by
membership: either the element itself is in the ring, or its inverse is.
