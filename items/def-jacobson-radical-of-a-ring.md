---
id: def-jacobson-radical-of-a-ring
kind: definition
title: "The Jacobson radical of a ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-prime-and-maximal-ideals]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 10.11"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.19: Nakayama's Lemma"
      url: "https://stacks.math.columbia.edu/tag/0AMD"
pipeline_run: null
---

## Definition

For a commutative ring $R$, the **Jacobson radical** is
$$
J(R):=\bigcap_{\mathfrak m \text{ maximal}} \mathfrak m.
$$
When $R=0$, there are no maximal ideals, and on this page the empty intersection is taken to be $0$, so $J(0)=0$.
