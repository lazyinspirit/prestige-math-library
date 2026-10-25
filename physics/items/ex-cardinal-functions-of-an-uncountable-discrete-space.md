---
id: ex-cardinal-functions-of-an-uncountable-discrete-space
kind: example
title: "Under choice, for an infinite discrete space of cardinality $\\kappa$, $w=d=L=c=\\kappa$ while $\\chi=1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, def-standard-topologies]
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
    - title: "Cardinal function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_function"
pipeline_run: null
---
## Example
For an infinite discrete $X$ of cardinality $\kappa$, singletons force every basis, dense set, singleton cover, and cellular family to have size $\kappa$. At a point, $\{\{x\}\}$ is a one-member local base. Hence $w=d=L=c=\kappa$ and $\chi=1$.
