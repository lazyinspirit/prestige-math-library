---
id: ex-a-ccc-nonseparable-cantor-cube
kind: example
title: "Under choice, a concrete ccc nonseparable Cantor cube indexed above $2^{\\aleph_0}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cantor-cubes-are-ccc, lem-large-cantor-cubes-are-not-separable, thm-cardinal-power-set-and-cantor]
aliases: []
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Cantor cube (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_cube"
pipeline_run: null
---
## Example
Let $I=\mathcal P(\mathcal P(\mathbb N))$. Cantor's theorem gives $|I|>2^{\aleph_0}$. Under choice, [[thm-cantor-cubes-are-ccc]] makes $2^I$ ccc and [[lem-large-cantor-cubes-are-not-separable]] makes it nonseparable.
