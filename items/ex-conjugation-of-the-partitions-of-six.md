---
id: ex-conjugation-of-the-partitions-of-six
kind: example
title: "Conjugation pairs the partitions of 6 by swapping length and largest part"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [ex-partitions-of-six-listed,
       lem-partition-conjugation-is-an-involution]
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

For the partitions of $6$, conjugation gives the pairings

$$6 \leftrightarrow 1+1+1+1+1+1,$$

$$5+1 \leftrightarrow 2+1+1+1+1,$$

$$4+2 \leftrightarrow 2+2+1+1,$$

$$4+1+1 \leftrightarrow 3+1+1+1,$$

$$3+3 \leftrightarrow 2+2+2,$$

and

$$3+2+1 \leftrightarrow 3+2+1.$$

The fixed partition $3+2+1$ is self-conjugate.
