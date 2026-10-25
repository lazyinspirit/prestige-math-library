---
id: ex-glaisher-bijection-on-an-odd-partition
kind: example
title: "Glaisher's bijection on an odd-part partition"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-glaisher-bijection-between-odd-and-distinct-partitions]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
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

Start with the odd-part partition

$$5+5+3+1+1.$$

Its multiplicities are

$$2=2^1 \text{ for the part }5,\qquad 1=2^0 \text{ for the part }3,\qquad 2=2^1 \text{ for the part }1.$$

Glaisher's rule therefore replaces the two $5$'s by one $10$, keeps the $3$,
and replaces the two $1$'s by one $2$. The image is the distinct-part
partition

$$10+3+2.$$
