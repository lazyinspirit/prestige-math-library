---
id: ex-twelvefold-way-labelled-to-unlabelled-at-three-and-two
kind: example
title: "The labelled-domain to unlabelled-codomain cells at n=3 and k=2"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-twelvefold-way]
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

For $3$ labelled balls and $2$ unlabelled boxes:

- arbitrary placements are set partitions of $\{1,2,3\}$ into at most two
  blocks, namely one one-block partition and three two-block partitions, so the
  count is $4$;
- injective placements do not exist, because three singleton fibres would use
  three boxes but only two are available;
- surjective placements are exactly the three two-block set partitions.

So the labelled-to-unlabelled row is $(4,0,3)$.
