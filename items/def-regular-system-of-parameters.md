---
id: "def-regular-system-of-parameters"
kind: "definition"
title: "regular system of parameters"
deps: ["def-embedding-dimension-and-regular-local-ring", "def-system-of-parameters-and-parameter-ideal"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "12.5, p.115"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

In a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, an ordered minimal generating tuple $(x_1,\ldots,x_d)$ of $\mathfrak m$ is a **regular system of parameters**. The tuple is empty when $d=0$. This definition concerns generators of the maximal ideal; the regular-sequence property is a theorem, not part of the definition.
