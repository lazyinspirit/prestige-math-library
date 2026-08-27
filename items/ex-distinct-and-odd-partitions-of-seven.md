---
id: ex-distinct-and-odd-partitions-of-seven
kind: example
title: "The partitions of 7 into distinct parts and into odd parts match"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-glaisher-bijection-between-odd-and-distinct-partitions,
       thm-euler-distinct-parts-equal-odd-parts-by-generating-functions]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The partitions of $7$ into distinct parts are

$$7,\ 6+1,\ 5+2,\ 4+3,\ 4+2+1.$$

The partitions of $7$ into odd parts are

$$7,\ 5+1+1,\ 3+3+1,\ 3+1+1+1+1,\ 1+1+1+1+1+1+1.$$

Glaisher's map pairs them as

$$7 \leftrightarrow 7,\qquad 5+1+1 \leftrightarrow 5+2,\qquad 3+3+1 \leftrightarrow 6+1,$$

$$3+1+1+1+1 \leftrightarrow 4+3,\qquad 1+1+1+1+1+1+1 \leftrightarrow 4+2+1.$$
