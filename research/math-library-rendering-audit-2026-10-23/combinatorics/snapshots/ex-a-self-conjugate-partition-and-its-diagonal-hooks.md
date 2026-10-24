---
id: ex-a-self-conjugate-partition-and-its-diagonal-hooks
kind: example
title: "A self-conjugate partition produces distinct odd diagonal hooks"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions]
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

The partition

$$\lambda=(5,3,3,1,1)$$

is self-conjugate. Its diagonal cells are $(1,1)$, $(2,2)$, and $(3,3)$, and
their hook lengths are

$$9,\ 3,\ 1.$$

Thus the diagonal-hook construction sends $\lambda$ to the distinct odd
partition

$$9+3+1.$$
