---
id: ex-cycle-index-of-c-four
kind: example
title: "The cycle index of C_4"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-cycle-index-of-cyclic-group]
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

The rotation action of $C_4$ on a square gives

$$Z(C_4)=\frac14\left(s_1^4+s_2^2+2s_4\right).$$

Indeed, the identity has cycle type $1^4$, the half-turn has cycle type $2^2$,
and the two quarter-turns each have cycle type $4$.
