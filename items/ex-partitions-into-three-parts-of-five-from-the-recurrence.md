---
id: ex-partitions-into-three-parts-of-five-from-the-recurrence
kind: example
title: "The recurrence gives p_3(5)=2"
status: draft
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

Applying the recurrence once gives

$$p_3(5)=p_2(4)+p_3(2)=2+0=2.$$

The two partitions are

$$3+1+1,\qquad 2+2+1.$$
