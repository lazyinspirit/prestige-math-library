---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-partitions-into-three-parts-of-five-from-the-recurrence.json
  precheck: n/a
id: ex-partitions-into-three-parts-of-five-from-the-recurrence
kind: example
title: "The recurrence gives $p_3(5)=2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-partitions-into-k-parts-recurrence]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Applying the recurrence once gives

$$p_3(5)=p_2(4)+p_3(2)=2+0=2.$$

The two partitions are

$$3+1+1,\qquad 2+2+1.$$
