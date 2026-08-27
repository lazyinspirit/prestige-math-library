---
id: ex-twelvefold-way-labelled-labelled-at-three-and-two
kind: example
title: "The labelled-to-labelled cells of the twelvefold way at n=3 and k=2"
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

For $n=3$ labelled balls and $k=2$ labelled boxes:

- arbitrary maps: $2^3=8$;
- injective maps: $0$, because $3>2$;
- surjective maps: $2!\,S(3,2)=2 \cdot 3=6$.

So the labelled-to-labelled row is $(8,0,6)$.
