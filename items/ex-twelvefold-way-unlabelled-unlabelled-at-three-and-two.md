---
id: ex-twelvefold-way-unlabelled-unlabelled-at-three-and-two
kind: example
title: "The unlabelled-to-unlabelled cells at n=3 and k=2"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-twelvefold-way,
       thm-unlabelled-unlabelled-placement-counts]
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

For $3$ indistinguishable balls and $2$ indistinguishable boxes:

- arbitrary placements correspond to the partitions $3$ and $2+1$, so the
  count is $2$;
- injective placements do not exist because $3>2$;
- surjective placements correspond only to $2+1$, so the count is $1$.

Thus the unlabelled-to-unlabelled row is $(2,0,1)$.
