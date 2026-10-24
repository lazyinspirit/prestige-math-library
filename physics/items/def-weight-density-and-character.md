---
id: def-weight-density-and-character
kind: definition
title: "Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topology-basis-subbasis, def-dense-top, def-neighbourhood-top, def-cardinal, def-cardinal-arithmetic, def-axiom-of-choice]
justified_by: [lem-weight-is-well-defined, lem-density-is-well-defined, lem-character-is-well-defined]
aliases: []
landmark: true
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

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $X$ be a topological space. The **weight** $w(X)$ is the least cardinality of a basis for $X$, and the **density** $d(X)$ is the least cardinality of a dense subset of $X$ ([[def-topology-basis-subbasis]], [[def-dense-top]], [[def-cardinal]]).

For $x\in X$, the **local character** $\chi(x,X)$ is the least cardinality of a neighbourhood base at $x$ ([[def-neighbourhood-top]]). The **character** is the raw cardinal supremum
$$\chi(X)=\sup\{\chi(x,X):x\in X\}.$$

No $\aleph_0$ normalization is imposed. In particular a one-member local base has cardinality $1$, not $\aleph_0$. The forward lemmas named in `justified_by` establish the asserted minima and supremum.
