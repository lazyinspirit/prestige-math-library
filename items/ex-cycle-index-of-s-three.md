---
id: ex-cycle-index-of-s-three
kind: example
title: "The cycle index of S_3"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-cycle-index-of-symmetric-group]
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

The three cycle types in $S_3$ are:

- one identity of type $1^3$;
- three transpositions of type $1\,2$;
- two $3$-cycles of type $3$.

Therefore

$$Z(S_3)=\frac16\left(s_1^3+3s_1s_2+2s_3\right).$$
