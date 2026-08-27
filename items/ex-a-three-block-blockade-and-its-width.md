---
id: ex-a-three-block-blockade-and-its-width
kind: example
title: "A three-block blockade and its width"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [def-blockade-length-and-width]
aliases: []
landmark: false
verification:
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

Let $G$ be any finite graph containing nine distinct vertices
$a,b,c,d,e,f,g,h,i$. If

$$\mathcal{B}=(\{a,b,c\},\{d,e\},\{f,g,h,i\}),$$

then $\mathcal{B}$ is a blockade of length $3$ and width $2$, and

$$V(\mathcal{B})=\{a,b,c,d,e,f,g,h,i\}.$$
