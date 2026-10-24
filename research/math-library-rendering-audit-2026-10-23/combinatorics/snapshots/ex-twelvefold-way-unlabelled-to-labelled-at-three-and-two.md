---
id: ex-twelvefold-way-unlabelled-to-labelled-at-three-and-two
kind: example
title: "The unlabelled-domain to labelled-codomain cells at n=3 and k=2"
status: published
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

For $3$ indistinguishable balls and $2$ labelled boxes, the occupancy vectors
are:

- arbitrary: $(3,0)$, $(2,1)$, $(1,2)$, $(0,3)$, so the count is $4$;
- injective: none, because a $0$-$1$ vector of length $2$ cannot sum to $3$;
- surjective: $(2,1)$ and $(1,2)$, so the count is $2$.

Thus the unlabelled-to-labelled row is $(4,0,2)$.
