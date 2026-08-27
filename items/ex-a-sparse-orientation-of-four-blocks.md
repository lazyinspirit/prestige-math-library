---
id: ex-a-sparse-orientation-of-four-blocks
kind: example
title: "A sparse orientation of four blocks"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [def-sparse-orientation-of-a-blockade]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Example

Let $\mathcal{B}=(B_1,B_2,B_3,B_4)$ with each later block $0$-sparse to each
earlier block. Then directing every pair from the later index to the earlier
index gives a sparse orientation of $\mathcal{B}$: each oriented edge points
from a block with no cross-neighbors into the block it avoids.
