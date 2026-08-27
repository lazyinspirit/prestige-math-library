---
id: ex-field-is-artinian
kind: example
title: "A field has module length one over itself"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 19"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $K$ be a field. Then the regular $K$-module $K$ has length $1$.

## Facts & Assumptions

**Given:** A field $K$.

## Verification

**Proof technique:** direct.

1.1 The only ideals of a field are $0$ and the whole field, so $0<K$ is a composition series of the regular module ${}_KK$. [given, algebra]

2.1 By [[def-composition-series-and-length-of-a-module]], that composition series has exactly one factor, so $\ell_K(K)=1$. [step 1.1, given, algebra] ∎
