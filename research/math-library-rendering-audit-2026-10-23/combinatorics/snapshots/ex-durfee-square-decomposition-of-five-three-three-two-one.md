---
id: ex-durfee-square-decomposition-of-five-three-three-two-one
kind: example
title: "The partition (5,3,3,2,1) decomposes by its Durfee square"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-durfee-square-identity]
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

For

$$\lambda=(5,3,3,2,1),$$

the Durfee length is $3$, so the upper-left $3 \times 3$ square is the Durfee
square.

The cells to the right of that square form the partition

$$\alpha=(2),$$

and the cells below it form the partition

$$\beta=(2,1).$$

Thus $\lambda$ is rebuilt from the $3 \times 3$ square together with one
partition having at most $3$ parts and one partition with parts at most $3$.
